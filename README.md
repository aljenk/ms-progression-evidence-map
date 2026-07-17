# MS Progression Evidence Map - deliverables v0.1

Datum: 2026-07-13
Status: eerste werkbare deliverables
Context: Telegram-groep "MS Progression Evidence Map"
Licentie: CC BY 4.0 voor tekst en data, tenzij bij een specifiek bronbestand anders staat vermeld.

## Doel

Deze map bevat de eerste concrete deliverables voor een living evidence project rond MS-progressie. De insteek is research- en gespreksvoorbereiding, niet behandeladvies.

## Medische disclaimer

Deze repository bevat researchinformatie. De inhoud is geen medisch advies, geen diagnosehulp en geen behandeladvies. Bespreek medische keuzes altijd met een bevoegde arts. Trialresultaten, biomarkers en computationele of structurele analyses gelden alleen binnen hun broncontext en mogen niet als persoonlijke behandelroute worden gebruikt.

## Bestanden

- `methodologie-v0.1.md`: scope, bewijsniveaus, bronbeleid, reviewflow en guardrails.
- `evidence-item-schema-v0.1.md`: vast schema voor interventies, targets, biomarkers, trials en structurele biologie.
- `seed-items-v0.1.csv`: startlijst met 30 items voor de eerste evidence core.
- `trial-monitor-v0.1.md`: eerste trial-monitor met velden, reviewregels en BTK-startentries.
- `structure-biology-template-v0.1.md`: template voor AlphaFold, PDB, UniProt, varianten en interacties.
- `communication-kit-v0.1.md`: korte uitleg, disclaimers en formats voor patienten, clinici en onderzoekers.
- `MEDICAL-DISCLAIMER.md`: centrale medische disclaimer voor de repository.
- `LICENSE.md`: licentieverklaring voor hergebruik van tekst en data.
- `bot-design-v0.1.md`: rollen, commands, datavelden en reviewflow voor de eerste botlaag.
- `evidence-records/`: eerste bronvaste JSON-records voor BTK, HERCULES en PERSEUS.
- `next-steps-backlog-v0.1.md`: uitvoerbare backlog voor de volgende werkronde.
- `publication-readiness-checklist-v0.1.md`: checklist voor publicatie en stopcriteria.
- `github-environment-decision-v0.1.md`: wanneer GitHub nodig wordt en minimale repo-opzet.
- `msresearch-source-discovery-v0.1.md`: MS Research als Nederlandse source-discovery en stakeholderbron.
- `bot-operating-model-v0.1.md`: live botworkflow met intake, source-check, expertreview en publicatiegate.
- `data/index.csv`: botvriendelijke index voor records en prioritaire discovery-items.
- `data/source-check-queue.csv`: uitvoerbare queue met primaire bronkandidaten per batch.
- `data/expert-review-queue.csv`: queue met exacte expertreviewvragen voor brongecheckte records.
- `index.html` en `site/`: GitHub Pages-dashboard voor de evidence records.
- `.github/ISSUE_TEMPLATE/`: issue-templates voor evidence-intake, source-check en expertreview.
- `.github/workflows/evidence-map-checks.yml`: automatische validatie op push en pull request.
- `.github/workflows/pages.yml`: valideert `main` en publiceert daarna automatisch de `gh-pages` branch.
- `scripts/validate_evidence_map.py`: lokale validator voor CSV, JSON, index en guardrails.
- `CHANGELOG.md`: wijzigingen per release of werkbatch.
- `source-check-batch-001-v0.1.md`: eerste primaire bronkandidaten voor MS Research-discovery items.
- `source-extraction-batch-001-v0.1.md`: abstract-extractie voor batch 001 en draft-promotie van vier items.
- `expert-review-batch-001-v0.1.md`: expertreviewvragen voor de eerste vier MS Research-records.

## Eerste uitgewerkte records

- `evidence-records/btk-tolebrutinib-hercules.json`
- `evidence-records/btk-tolebrutinib-perseus.json`
- `evidence-records/btk-target-structure.json`
- `evidence-records/ocrelizumab-ppms-oratorio.json`
- `evidence-records/neuroprotection-ibudilast-sprint-ms.json`
- `evidence-records/simvastatin-spms-msstat.json`
- `evidence-records/nfl-serum-biomarker.json`
- `evidence-records/gfap-serum-biomarker.json`
- `evidence-records/paramagnetic-rim-lesions.json`
- `evidence-records/slowly-expanding-lesions.json`
- `evidence-records/msresearch-pira-choroid-plexus.json`
- `evidence-records/msresearch-smouldering-ms-fingerprint.json`
- `evidence-records/msresearch-eye-scans.json`
- `evidence-records/msresearch-brain-age.json`

## Source discovery

MS Research is toegevoegd als Nederlandse source-discovery en stakeholderbron. De eerste 12 relevante projecten staan in `seed-items-v0.1.csv` met reviewstatus `needs_primary_source_check`. Deze items mogen pas inhoudelijke evidence-claims krijgen na controle van primaire bronnen zoals PubMed, trialregisters, DOI-pagina's, centrumspagina's of publicaties van de betrokken onderzoeksgroepen.

De eerste broncheckbatch staat in `source-check-batch-001-v0.1.md` en `data/source-check-queue.csv`.

De eerste abstract-extractie staat in `source-extraction-batch-001-v0.1.md`. Vier MS Research-items zijn daarna met open-access full-text controle of primaire PubMed-bron naar JSON-record gezet. De bijbehorende expertreviewvragen staan in `expert-review-batch-001-v0.1.md` en `data/expert-review-queue.csv`; deze records hebben status `expert_review_requested` totdat feedback is verwerkt.

## GitHub-moment

GitHub is nu het logische volgende infrastructuurpunt. De eerste 10 brongecheckte records zijn gehaald. Richt GitHub in voordat de neuroloog-review, issue-tracking of publieke website wordt voorbereid.

## Botstructuur live

De eerste botstructuur is ingericht in GitHub:

- intake loopt via issue-template `Evidence item intake`
- broncontrole loopt via issue-template `Source check`
- medische of wetenschappelijke toetsing loopt via issue-template `Expert review`
- elke push en pull request draait `scripts/validate_evidence_map.py`
- `data/index.csv` geeft bots een compacte startindex
- `.github/labels.yml` legt de triagelabels vast

Deze structuur doet nog geen automatische medische beoordeling. Zij bewaakt alleen workflow, bronstatus, claimbeperking en publicatiegate.

## GitHub Pages voorbereiding

Een publieke GitHub Pages-laag kan nu technisch worden voorbereid op basis van `data/index.csv`, `data/source-check-queue.csv`, `data/expert-review-queue.csv` en `evidence-records/*.json`. De site moet reviewstatussen zichtbaar tonen. Items met `expert_review_requested` mogen als pre-review researchkaart zichtbaar zijn, maar niet als gepubliceerde evidenceclaim.

De eerste Pages-versie staat in `index.html` en `site/`. Het dashboard bevat een korte intro met statusuitleg en uitleg van bewijsniveau A tot en met E, laadt `data/index.csv`, `data/expert-review-queue.csv` en de JSON-records direct vanuit de repository. De recorddetailweergave toont daarnaast een publicatiegate met disclaimer, claimgrens, volgende actie en bij `expert_review_requested` de open expertvraag. De workflow `.github/workflows/pages.yml` valideert de evidence map en publiceert daarna automatisch de `gh-pages` branch.

Aanbevolen GitHub Pages-instelling:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/root`

Deze instelling houdt publicatie simpel. De Action blijft nuttig als automatische validatie- en publicatiestap vanaf `main`.

## Centrale lijn

Elke entry moet expliciet scheiden tussen:

- klinisch bewijs
- biomarkerbewijs
- mechanistisch bewijs
- computationele hypothese

AlphaFold, AlphaFold 3 en AlphaMissense worden gebruikt als structurele hypothese- en prioriteringslaag. Ze tellen niet als klinisch bewijs voor werkzaamheid.

## Bronnen voor v0.1

- National MS Society, disease-modifying therapies: https://www.nationalmssociety.org/managing-ms/treating-ms/disease-modifying-therapies
- Progressive MS Alliance: https://www.progressivemsalliance.org/what-we-do/
- PubMed, HERCULES tolebrutinib nrSPMS: https://pubmed.ncbi.nlm.nih.gov/40202696/
- ClinicalTrials.gov, HERCULES NCT04411641: https://clinicaltrials.gov/study/NCT04411641
- ClinicalTrials.gov, PERSEUS NCT04458051: https://clinicaltrials.gov/study/NCT04458051
- AlphaFold DB: https://alphafold.ebi.ac.uk/
- AlphaFold 3, Nature 2024: https://www.nature.com/articles/s41586-024-07487-w
- AlphaMissense: https://alphamissense.hegelab.org/
