# Expert review batch 001 v0.1

Datum: 2026-07-15
Status: ready_to_request
Scope: vier MS Research-records uit source-check batch 001

## Doel

Deze batch zet de eerste vier MS Research-records klaar voor medische of wetenschappelijke expertreview. De records zijn brongecheckt, maar nog niet gepubliceerd. De reviewvragen zijn bedoeld om overclaiming te voorkomen voordat GitHub Pages de data publiek presenteert.

## Reviewitems

### 1. `msresearch-pira-choroid-plexus`

Focus: PIRA biomarker claim boundary
Risico: high
Bronbasis: PMID 41666922, PMC12923943, PMID 42420786

Reviewvraag:

Is de huidige formulering correct begrensd tot associatie tussen choroid plexus volume, neuroaxonale schade en PIRA-risico, zonder causaliteit of individuele prognose te suggereren?

Te toetsen tekstlaag:

- `patient_summary`
- `clinical_summary`
- `research_summary`
- `evidence_label`
- `open_questions`

Specifieke checks:

- Bevestig of `PIRA-gerelateerde biomarkerhypothese` veilig genoeg is als publieke titel.
- Beoordeel of de link tussen choroid plexus volume, serum NfL en EDSS-worsening niet te causaal klinkt.
- Check of correcties voor hersenvolume, inflammatoire activiteit en cohortselectie duidelijk genoeg zichtbaar zijn.
- Geef aan of dit record apart moet blijven of beter onder een breder smouldering-MS cluster valt.

Issue-template starttekst:

```text
Evidence item ID: msresearch-pira-choroid-plexus
Review question: Is de huidige formulering correct begrensd tot associatie tussen choroid plexus volume, neuroaxonale schade en PIRA-risico, zonder causaliteit of individuele prognose te suggereren?
Current wording: Review patient_summary, clinical_summary, research_summary, evidence_label and open_questions in evidence-records/msresearch-pira-choroid-plexus.json.
Source basis: PMID 41666922; PMC12923943; PMID 42420786.
Risk if phrased too strongly: high
```

### 2. `msresearch-smouldering-ms-fingerprint`

Focus: smouldering MS terminology and imaging equivalence
Risico: high
Bronbasis: PMID 39711984, PMC11660293, PMID 38226694, PMC11370808

Reviewvraag:

Is de tekst duidelijk genoeg dat PRL, SEL en TSPO-PET kandidaatmarkers zijn voor chronic active lesions, maar niet gelijkgesteld mogen worden aan histopathologische CAL?

Te toetsen tekstlaag:

- `mechanism_summary`
- `patient_summary`
- `clinical_summary`
- `research_summary`
- `open_questions`

Specifieke checks:

- Kies voorkeursterminologie voor publieke communicatie: smeulende MS, chronic active lesions, PRL, SEL of een combinatie.
- Beoordeel of MRI-correlaten en histopathologische CAL voldoende gescheiden blijven.
- Check of standaardisatiegaten rond detectie, kwantificatie en monitoring duidelijk genoeg staan.
- Geef aan hoe dit record moet linken naar bestaande PRL- en SEL-records zonder dubbeling.

Issue-template starttekst:

```text
Evidence item ID: msresearch-smouldering-ms-fingerprint
Review question: Is de tekst duidelijk genoeg dat PRL, SEL en TSPO-PET kandidaatmarkers zijn voor chronic active lesions, maar niet gelijkgesteld mogen worden aan histopathologische CAL?
Current wording: Review mechanism_summary, patient_summary, clinical_summary, research_summary and open_questions in evidence-records/msresearch-smouldering-ms-fingerprint.json.
Source basis: PMID 39711984; PMC11660293; PMID 38226694; PMC11370808.
Risk if phrased too strongly: high
```

### 3. `msresearch-eye-scans`

Focus: OCT thresholds and population limits
Risico: medium
Bronbasis: PMID 40424561, PMC12153945, PMID 36372866

Reviewvraag:

Zijn de OCT-claims rond pRNFL, GCIPL en thinning rates correct begrensd tot prognostische associaties in longitudinale cohorten, met voldoende waarschuwing voor optic neuritis, RRMS-dominantie en centrumverschillen?

Te toetsen tekstlaag:

- `patient_summary`
- `clinical_summary`
- `research_summary`
- `evidence_label`
- `open_questions`

Specifieke checks:

- Beoordeel of bewijsniveau `B` passend is voor systematische reviews van longitudinale cohorten.
- Check of pRNFL, GCIPL en annualized thinning rates niet als zelfstandig behandelkompas klinken.
- Geef aan welke drempeltaal veilig is voor een publieke site.
- Beoordeel of optic neuritis en RRMS-dominantie prominenter moeten worden vermeld.

Issue-template starttekst:

```text
Evidence item ID: msresearch-eye-scans
Review question: Zijn de OCT-claims rond pRNFL, GCIPL en thinning rates correct begrensd tot prognostische associaties in longitudinale cohorten, met voldoende waarschuwing voor optic neuritis, RRMS-dominantie en centrumverschillen?
Current wording: Review patient_summary, clinical_summary, research_summary, evidence_label and open_questions in evidence-records/msresearch-eye-scans.json.
Source basis: PMID 40424561; PMC12153945; PMID 36372866.
Risk if phrased too strongly: medium
```

### 4. `msresearch-brain-age`

Focus: brain-age model interpretation
Risico: medium
Bronbasis: PMID 37119507, PMC10270248, PMID 32285956

Reviewvraag:

Is de brain-age tekst correct begrensd als niet-specifieke MRI-machine-learning biomarker voor disability accumulation, zonder individuele prognose of superioriteitsclaim ten opzichte van volumematen?

Te toetsen tekstlaag:

- `mechanism_summary`
- `patient_summary`
- `clinical_summary`
- `research_summary`
- `evidence_label`
- `open_questions`

Specifieke checks:

- Beoordeel of bewijsniveau `B` passend is voor de huidige cohortbasis.
- Check of niet-specificiteit van brain age duidelijk genoeg is.
- Beoordeel of modelafhankelijkheid, datasetbias en centrumvergelijkbaarheid zichtbaar genoeg zijn.
- Geef aan of brain age apart moet blijven of onder hersenatrofie en neurodegeneratie moet vallen.

Issue-template starttekst:

```text
Evidence item ID: msresearch-brain-age
Review question: Is de brain-age tekst correct begrensd als niet-specifieke MRI-machine-learning biomarker voor disability accumulation, zonder individuele prognose of superioriteitsclaim ten opzichte van volumematen?
Current wording: Review mechanism_summary, patient_summary, clinical_summary, research_summary, evidence_label and open_questions in evidence-records/msresearch-brain-age.json.
Source basis: PMID 37119507; PMC10270248; PMID 32285956.
Risk if phrased too strongly: medium
```

## Batchbesluit

Deze vier items blijven pre-publication. Publicatie via GitHub Pages kan technisch worden voorbereid, maar de site moet deze items zichtbaar labelen als `expert_review_requested` totdat feedback is verwerkt.
