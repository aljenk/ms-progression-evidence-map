# Bot operating model v0.1

Datum: 2026-07-15
Status: live repo-structuur

## Doel

Deze botstructuur maakt van de evidence map een reproduceerbare workflow. Bots en mensen werken via dezelfde statussen, issue-templates, data-index en validatiecheck.

## Live onderdelen in de repo

- `.github/ISSUE_TEMPLATE/evidence-item.yml`: intake voor nieuwe items.
- `.github/ISSUE_TEMPLATE/source-check.yml`: broncheck met exacte claimbeperking.
- `.github/ISSUE_TEMPLATE/expert-review.yml`: medische of wetenschappelijke reviewvraag.
- `.github/workflows/evidence-map-checks.yml`: validatie bij push en pull request.
- `.github/labels.yml`: labelset voor GitHub-triage.
- `scripts/validate_evidence_map.py`: lokale en CI-validatie.
- `data/index.csv`: botvriendelijke index van records en prioritaire discovery-items.
- `data/source-check-queue.csv`: queue met primaire bronkandidaten en exact te testen claims.
- `data/expert-review-queue.csv`: queue met exacte expertreviewvragen voor brongecheckte records.

## Workflow

1. Intake: nieuw onderwerp komt binnen via issue of seedlijst.
2. Triage: categorie, MS-context, eerste bron en claimbeperking worden vastgelegd.
3. Source check: primaire bron wordt gezocht en exact gekoppeld aan een beperkte claim.
4. Record build: pas daarna wordt een JSON-record gemaakt of bijgewerkt.
5. Guardrail check: validator controleert velden, bronnen, statussen en verboden typografie.
6. Expert review: medische of wetenschappelijke review wordt gevraagd voor risicovolle claims.
7. Publication ready: alleen na broncheck, disclaimer, reviewstatus en laatste reviewdatum.

## Statusregels

- `needs_primary_source_check`: discovery-item, geen evidence-claim.
- `draft`: record bestaat, maar bronclaim is nog niet volledig gecontroleerd.
- `source_checked`: bronlink en kernclaim zijn gecontroleerd.
- `expert_review_requested`: klaargezet voor externe review.
- `expert_reviewed`: feedback verwerkt.
- `published`: geschikt voor publieke evidence map.

## Botguardrails

- Geen behandeladvies.
- Geen persoonlijke casusbeoordeling.
- Geen verhoging van bewijsniveau op basis van MS Research, sponsorberichten of computationele voorspellingen.
- Geen publicatieadvies zonder bron, claimbeperking en medische disclaimer.
- Elke structurele of computationele conclusie blijft `hypothesis` totdat klinisch bewijs apart bestaat.

## Eerste botroutines

- Dagelijkse triage: nieuwe issues labelen en ontbrekende velden terugvragen.
- Source-check batch: 3 tot 5 `needs_primary_source_check` items per ronde naar primaire bron zoeken.
- Source-check queue: kandidaatbronnen toevoegen aan `data/source-check-queue.csv`, daarna pas extraheren.
- Expert-review queue: source-checked records met claimrisico toevoegen aan `data/expert-review-queue.csv`.
- Trial monitor: ClinicalTrials.gov-items opnieuw controleren bij statuswijziging.
- Publication gate: `python scripts/validate_evidence_map.py` uitvoeren voor elke merge.

## Expertreview batch 001

De eerste expertreviewbatch staat in `expert-review-batch-001-v0.1.md`. De vier MS Research-records in deze batch hebben status `expert_review_requested`:

- `msresearch-pira-choroid-plexus`: PIRA-causaliteit en individuele prognose voorkomen.
- `msresearch-smouldering-ms-fingerprint`: PRL, SEL, TSPO-PET en histopathologische CAL niet gelijkstellen.
- `msresearch-eye-scans`: OCT-drempels, optic neuritis en populatiegrenzen toetsen.
- `msresearch-brain-age`: machine-learning biomarker niet als individuele prognose of superioriteitsclaim presenteren.
