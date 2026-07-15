#!/usr/bin/env python3
"""Validate the MS progression evidence map repository."""

from __future__ import annotations

import csv
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEED = ROOT / "seed-items-v0.1.csv"
RECORD_DIR = ROOT / "evidence-records"
INDEX = ROOT / "data" / "index.csv"
SOURCE_QUEUE = ROOT / "data" / "source-check-queue.csv"
EXPERT_REVIEW_QUEUE = ROOT / "data" / "expert-review-queue.csv"

REQUIRED_JSON_FIELDS = {
    "id",
    "title",
    "category",
    "ms_context",
    "patient_summary",
    "clinical_summary",
    "outcomes",
    "evidence_level",
    "evidence_label",
    "open_questions",
    "sources",
    "last_reviewed",
    "review_status",
    "medical_disclaimer",
}

VALID_REVIEW_STATUS = {
    "draft",
    "needs_primary_source_check",
    "source_checked",
    "expert_review_requested",
    "expert_reviewed",
    "published",
}

VALID_SOURCE_QUEUE_STATUS = {
    "candidate_primary_source",
    "extraction_started",
    "extracted",
    "rejected",
}

VALID_EXPERT_REVIEW_QUEUE_STATUS = {
    "ready_to_request",
    "requested",
    "received",
    "closed",
}

VALID_EXPERT_REVIEW_RISK = {"high", "medium", "low"}


def fail(message: str) -> None:
    print(f"FAIL {message}", file=sys.stderr)
    raise SystemExit(1)


def validate_seed() -> list[dict[str, str]]:
    if not SEED.exists():
        fail(f"missing {SEED.relative_to(ROOT)}")

    with SEED.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)

    if not rows:
        fail("seed file has no rows")

    required = {"id", "title", "category", "review_status", "first_source"}
    missing = required - set(reader.fieldnames or [])
    if missing:
        fail(f"seed missing columns: {sorted(missing)}")

    seen: set[str] = set()
    for row in rows:
        item_id = row["id"].strip()
        if not item_id:
            fail("seed row has empty id")
        if item_id in seen:
            fail(f"duplicate seed id: {item_id}")
        seen.add(item_id)
        status = row["review_status"].strip()
        if status not in VALID_REVIEW_STATUS:
            fail(f"{item_id} has invalid review_status: {status}")
        if status in {"source_checked", "expert_review_requested", "expert_reviewed", "published"}:
            if not row["first_source"].strip():
                fail(f"{item_id} has {status} without first_source")

    return rows


def validate_records() -> list[dict[str, object]]:
    records: list[dict[str, object]] = []
    for path in sorted(RECORD_DIR.glob("*.json")):
        with path.open(encoding="utf-8") as handle:
            record = json.load(handle)

        missing = REQUIRED_JSON_FIELDS - set(record)
        if missing:
            fail(f"{path.relative_to(ROOT)} missing fields: {sorted(missing)}")

        status = str(record["review_status"])
        if status not in VALID_REVIEW_STATUS:
            fail(f"{path.relative_to(ROOT)} invalid review_status: {status}")

        sources = record["sources"]
        if not isinstance(sources, list) or not sources:
            fail(f"{path.relative_to(ROOT)} has no sources")

        if status in {"source_checked", "expert_review_requested", "expert_reviewed", "published"}:
            for source in sources:
                if not isinstance(source, dict) or not source.get("url") or not source.get("claim"):
                    fail(f"{path.relative_to(ROOT)} has incomplete source entry")

        records.append(record)

    if not records:
        fail("no evidence records found")
    return records


def validate_index(seed_rows: list[dict[str, str]]) -> None:
    if not INDEX.exists():
        fail(f"missing {INDEX.relative_to(ROOT)}")

    with INDEX.open(newline="", encoding="utf-8") as handle:
        rows = list(csv.DictReader(handle))

    if not rows:
        fail("data/index.csv has no rows")

    seed_ids = {row["id"] for row in seed_rows}
    for row in rows:
        item_id = row.get("id", "")
        if item_id not in seed_ids:
            fail(f"index id not found in seed file: {item_id}")


def validate_source_queue(seed_rows: list[dict[str, str]]) -> list[dict[str, str]]:
    if not SOURCE_QUEUE.exists():
        fail(f"missing {SOURCE_QUEUE.relative_to(ROOT)}")

    with SOURCE_QUEUE.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)

    required = {
        "batch_id",
        "item_id",
        "source_url",
        "source_type",
        "pmid",
        "doi",
        "title",
        "source_status",
        "claim_to_test",
        "next_action",
    }
    missing = required - set(reader.fieldnames or [])
    if missing:
        fail(f"source queue missing columns: {sorted(missing)}")

    seed_ids = {row["id"] for row in seed_rows}
    seen: set[tuple[str, str]] = set()
    for row in rows:
        item_id = row["item_id"].strip()
        source_url = row["source_url"].strip()
        if item_id not in seed_ids:
            fail(f"source queue id not found in seed file: {item_id}")
        if not source_url.startswith("https://"):
            fail(f"source queue source_url is not https: {source_url}")
        status = row["source_status"].strip()
        if status not in VALID_SOURCE_QUEUE_STATUS:
            fail(f"{item_id} has invalid source_status: {status}")
        if not row["claim_to_test"].strip():
            fail(f"{item_id} has empty claim_to_test")
        key = (item_id, source_url)
        if key in seen:
            fail(f"duplicate source queue entry: {item_id} {source_url}")
        seen.add(key)

    return rows


def validate_expert_review_queue(seed_rows: list[dict[str, str]]) -> list[dict[str, str]]:
    if not EXPERT_REVIEW_QUEUE.exists():
        fail(f"missing {EXPERT_REVIEW_QUEUE.relative_to(ROOT)}")

    with EXPERT_REVIEW_QUEUE.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)

    required = {
        "review_id",
        "item_id",
        "review_focus",
        "risk_level",
        "review_question",
        "source_basis",
        "queue_status",
        "next_action",
    }
    missing = required - set(reader.fieldnames or [])
    if missing:
        fail(f"expert review queue missing columns: {sorted(missing)}")

    seed_ids = {row["id"] for row in seed_rows}
    seen: set[str] = set()
    for row in rows:
        review_id = row["review_id"].strip()
        item_id = row["item_id"].strip()
        if not review_id:
            fail("expert review queue row has empty review_id")
        if review_id in seen:
            fail(f"duplicate expert review id: {review_id}")
        seen.add(review_id)
        if item_id not in seed_ids:
            fail(f"expert review queue id not found in seed file: {item_id}")
        risk_level = row["risk_level"].strip()
        if risk_level not in VALID_EXPERT_REVIEW_RISK:
            fail(f"{review_id} has invalid risk_level: {risk_level}")
        status = row["queue_status"].strip()
        if status not in VALID_EXPERT_REVIEW_QUEUE_STATUS:
            fail(f"{review_id} has invalid queue_status: {status}")
        for field in ("review_focus", "review_question", "source_basis", "next_action"):
            if not row[field].strip():
                fail(f"{review_id} has empty {field}")

    return rows


def validate_text() -> None:
    for path in ROOT.rglob("*"):
        if ".git" in path.parts or not path.is_file():
            continue
        if path.suffix.lower() in {".md", ".csv", ".json", ".yml", ".yaml", ".py"}:
            text = path.read_text(encoding="utf-8")
            if "\u2014" in text:
                fail(f"em-dash found in {path.relative_to(ROOT)}")


def main() -> None:
    seed_rows = validate_seed()
    records = validate_records()
    validate_index(seed_rows)
    source_queue_rows = validate_source_queue(seed_rows)
    expert_review_queue_rows = validate_expert_review_queue(seed_rows)
    validate_text()
    msresearch_rows = sum(1 for row in seed_rows if row["id"].startswith("msresearch-"))
    source_checked = sum(1 for row in seed_rows if row["review_status"] == "source_checked")
    expert_review_requested = sum(
        1 for row in seed_rows if row["review_status"] == "expert_review_requested"
    )
    source_checked_or_later = sum(
        1
        for row in seed_rows
        if row["review_status"]
        in {"source_checked", "expert_review_requested", "expert_reviewed", "published"}
    )
    print("EVIDENCE_MAP_VALIDATION_OK")
    print(f"seed_rows={len(seed_rows)}")
    print(f"json_records={len(records)}")
    print(f"source_checked_seed_rows={source_checked}")
    print(f"expert_review_requested_seed_rows={expert_review_requested}")
    print(f"source_checked_or_later_seed_rows={source_checked_or_later}")
    print(f"msresearch_seed_rows={msresearch_rows}")
    print(f"source_queue_rows={len(source_queue_rows)}")
    print(f"expert_review_queue_rows={len(expert_review_queue_rows)}")


if __name__ == "__main__":
    main()
