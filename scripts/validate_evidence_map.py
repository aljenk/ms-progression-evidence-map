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
    validate_text()
    msresearch_rows = sum(1 for row in seed_rows if row["id"].startswith("msresearch-"))
    source_checked = sum(1 for row in seed_rows if row["review_status"] == "source_checked")
    print("EVIDENCE_MAP_VALIDATION_OK")
    print(f"seed_rows={len(seed_rows)}")
    print(f"json_records={len(records)}")
    print(f"source_checked_seed_rows={source_checked}")
    print(f"msresearch_seed_rows={msresearch_rows}")


if __name__ == "__main__":
    main()
