# Source-check batch 001 v0.1

Datum: 2026-07-15
Status: primaire bronkandidaten gevonden, extractie nog nodig

## Doel

Deze batch zet de eerste MS Research-discovery items om naar een uitvoerbare broncheck-queue. De items blijven `needs_primary_source_check` totdat de primaire bron volledig is gelezen, de exacte claim is geextraheerd en de claimbeperking is vastgelegd.

## Selectie

Gekozen items:

- `msresearch-pira-choroid-plexus`
- `msresearch-smouldering-ms-fingerprint`
- `msresearch-eye-scans`
- `msresearch-brain-age`

Deze vier items zijn gekozen omdat ze direct aansluiten op bestaande clusters in de evidence map: PIRA, PRL, SEL, chronic active lesions, OCT en hersenatrofie.

## Primaire bronkandidaten

De volledige queue staat in `data/source-check-queue.csv`.

### Choroid plexus en PIRA

- PMID 41666922: `Choroid plexus enlargement associates with serum neurofilament and predicts relapse-free progression in multiple sclerosis`.
- DOI: `10.1016/j.xcrm.2026.102609`.
- PMID 42420786: `Paramagnetic Rim Lesions and Choroid Plexus Volume at Diagnosis Are Associated With Cognitive Progression Independent of Relapse and MRI Activity in Early Relapsing-Remitting Multiple Sclerosis`.
- DOI: `10.1002/acn3.70448`.

Te testen claim: choroid plexus volume kan relevant zijn als progressie- of PIRA-gerelateerde biomarker, maar alleen binnen de onderzochte populatie en uitkomstmaat.

### Smeulende MS en chronic active lesions

- PMID 39711984: `Chronic active lesions in multiple sclerosis: classification, terminology, and clinical significance`.
- DOI: `10.1177/17562864241306684`.
- PMID 38226694: `Imaging chronic active lesions in multiple sclerosis: a consensus statement`.
- DOI: `10.1093/brain/awae013`.

Te testen claim: chronic active lesion-terminologie en beeldvorming kunnen de smeulende-MS-laag ondersteunen, maar zijn geen zelfstandig behandeladvies.

### Oogscans en OCT

- PMID 40424561: `Retinal Optical Coherence Tomography Longitudinal Measures as Prognostic Biomarkers in Multiple Sclerosis: Systematic Review and Meta-Analysis`.
- DOI: `10.1212/NXI.0000000000200416`.
- PMID 36372866: `Optical coherence tomography as a prognostic tool for disability progression in MS: a systematic review`.
- DOI: `10.1007/s00415-022-11474-4`.

Te testen claim: OCT-maten kunnen prognostische biomarkerwaarde hebben voor MS-uitkomsten, met duidelijke beperkingen per populatie, maat en studiedesign.

### Hersenleeftijd

- PMID 37119507: `Brain age predicts disability accumulation in multiple sclerosis`.
- DOI: `10.1002/acn3.51782`.
- PMID 32285956: `Longitudinal Assessment of Multiple Sclerosis with the Brain-Age Paradigm`.
- DOI: `10.1002/ana.25746`.

Te testen claim: brain-age modellen kunnen samenhangen met disability accumulation of progressie, maar zijn nog biomarkercontext en geen klinisch beslisinstrument.

## Volgende extractiestap

Per bron:

1. Populatie vastleggen.
2. Uitkomstmaat vastleggen.
3. Effectmaat of kernbevinding noteren.
4. Claimbeperking schrijven.
5. Seed-item bijwerken naar `draft` of JSON-record aanmaken.
6. Alleen bij volledige claimcheck status verhogen naar `source_checked`.

## Guardrail

MS Research blijft discovery-bron. De PubMed/DOI-bronnen in deze batch zijn kandidaten voor primaire broncheck. Geen van deze items krijgt een behandelclaim of publicatie-ready status zonder volledige extractie en review.
