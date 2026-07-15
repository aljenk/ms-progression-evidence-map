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

## GitHub-moment

GitHub is nu het logische volgende infrastructuurpunt. De eerste 10 brongecheckte records zijn gehaald. Richt GitHub in voordat de neuroloog-review, issue-tracking of publieke website wordt voorbereid.

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
