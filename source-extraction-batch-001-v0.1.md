# Source extraction batch 001 v0.1

Datum: 2026-07-15
Status: abstract-extractie afgerond, full-paper extractie nog nodig

## Doel

Deze batch verwerkt de PubMed-abstracts van de eerste 8 primaire bronkandidaten. De bijbehorende seed-items zijn naar `draft` gezet, maar niet naar `source_checked`. Daarvoor is nog volledige paperextractie nodig.

## Extracties

### Choroid plexus en PIRA

Item: `msresearch-pira-choroid-plexus`

Bron 1:

- PMID: 41666922
- DOI: 10.1016/j.xcrm.2026.102609
- Titel: Choroid plexus enlargement associates with serum neurofilament and predicts relapse-free progression in multiple sclerosis.
- Populatie: prospectieve multicenter longitudinale MS-cohortstudie; abstract noemt 891 mensen met MS en 434 geincludeerd.
- Uitkomst: serum NfL, disability worsening en progression independent of relapse activity.
- Kernextractie: choroid plexus volume correleerde met serum NfL en hoog choroid plexus volume gaf volgens abstract verhoogd risico op disability worsening en relapse-free progression.
- Claimbeperking: dit ondersteunt een biomarkerhypothese voor neuroaxonale schade en relapse-vrije progressie, niet een behandeladvies of individuele prognose.

Bron 2:

- PMID: 42420786
- DOI: 10.1002/acn3.70448
- Titel: Paramagnetic Rim Lesions and Choroid Plexus Volume at Diagnosis Are Associated With Cognitive Progression Independent of Relapse and MRI Activity in Early Relapsing-Remitting Multiple Sclerosis.
- Populatie: 87 mensen met vroege RRMS bij diagnose.
- Uitkomst: cognitive progression independent of relapse/MRI activity, in het abstract `PIRMA` genoemd.
- Kernextractie: PRL's en choroid plexus volume bij diagnose waren geassocieerd met cognitieve progressie onafhankelijk van relapse en MRI-activiteit.
- Claimbeperking: populatie is vroege RRMS en uitkomst is cognitieve progressie; niet generaliseren naar alle progressieve MS.

### Smeulende MS en chronic active lesions

Item: `msresearch-smouldering-ms-fingerprint`

Bron 1:

- PMID: 39711984
- DOI: 10.1177/17562864241306684
- Titel: Chronic active lesions in multiple sclerosis: classification, terminology, and clinical significance.
- Populatie: review over MS-breed concept chronic active lesions.
- Uitkomst: classificatie, terminologie, klinische betekenis en beeldvormingscorrelaten.
- Kernextractie: chronic active white matter lesions worden beschreven als onderdeel van smouldering neuroinflammation; PRL's en SELs worden als in-vivo correlaten genoemd.
- Claimbeperking: review ondersteunt mechanistisch en terminologisch cluster, niet directe werkzaamheidsclaims.

Bron 2:

- PMID: 38226694
- DOI: 10.1093/brain/awae013
- Titel: Imaging chronic active lesions in multiple sclerosis: a consensus statement.
- Populatie: consensus statement over beeldvorming van chronic active lesions.
- Uitkomst: definities en meetaanpak voor PRL, SEL en PET-afgeleide markers.
- Kernextractie: PRL's, MRI-defined slowly expanding lesions en TSPO-PET-laesies worden kandidaat-biomarkers voor chronic active lesions genoemd, met expliciete standaardisatiegaten.
- Claimbeperking: consensus ondersteunt definities en meetbeperkingen; biomarkers zijn niet gelijkwaardig aan histopathologie en nog niet automatisch klinisch beslissend.

### Oogscans en OCT

Item: `msresearch-eye-scans`

Bron 1:

- PMID: 40424561
- DOI: 10.1212/NXI.0000000000200416
- Titel: Retinal Optical Coherence Tomography Longitudinal Measures as Prognostic Biomarkers in Multiple Sclerosis: Systematic Review and Meta-Analysis.
- Populatie: systematische review en meta-analyse van longitudinale OCT-studies; abstract noemt 14 studies en 3683 deelnemers.
- Uitkomst: pRNFL en GCIPL dikte en jaarlijkse thinning als voorspellers van ziekteprogressie.
- Kernextractie: pRNFL en GCIPL drempels en thinning rates waren geassocieerd met hoger risico op toekomstige disability progression.
- Claimbeperking: ondersteunt OCT als prognostische biomarkercontext, niet als losstaand behandelkompas.

Bron 2:

- PMID: 36372866
- DOI: 10.1007/s00415-022-11474-4
- Titel: Optical coherence tomography as a prognostic tool for disability progression in MS: a systematic review.
- Populatie: kwalitatieve systematische review; abstract noemt 8 longitudinale MS-cohortstudies, waarvan 5 alleen RRMS.
- Uitkomst: pRNFL en mGCIPL atrofie als voorspellers van klinische verslechtering.
- Kernextractie: lage pRNFL/mGCIPL en hogere jaarlijkse thinning waren geassocieerd met disability progression in latere jaren, vooral binnen RRMS-studies.
- Claimbeperking: RRMS-dominantie en optic-neuritis-correctie moeten zichtbaar blijven; niet automatisch toepassen op alle progressieve MS.

### Hersenleeftijd

Item: `msresearch-brain-age`

Bron 1:

- PMID: 37119507
- DOI: 10.1002/acn3.51782
- Titel: Brain age predicts disability accumulation in multiple sclerosis.
- Populatie: groot longitudinaal real-world MRI-dataset; abstract noemt meer dan 13000 imaging sessions van meer dan 6000 MS-patienten.
- Uitkomst: predicted brain age, disability, lesion burden, disease course en disability accumulation.
- Kernextractie: MS was geassocieerd met hogere predicted brain age en advanced brain age voorspelde latere disability accumulation.
- Claimbeperking: machine-learning biomarker, geen individueel prognose-instrument zonder klinische context.

Bron 2:

- PMID: 32285956
- DOI: 10.1002/ana.25746
- Titel: Longitudinal Assessment of Multiple Sclerosis with the Brain-Age Paradigm.
- Populatie: longitudinaal multicenter sample met 3565 MRI-scans bij 1204 MS/CIS-patienten en 150 controles.
- Uitkomst: brain-PAD, EDSS en disability progression.
- Kernextractie: brain-PAD was hoger bij MS dan controles, het hoogst bij SPMS, en baseline brain-PAD was geassocieerd met time-to-disability progression.
- Claimbeperking: brain age kan prognostische biomarkercontext bieden, maar genormaliseerd hersenvolume was in het abstract sterker voorspellend.

## Statuswijziging

De volgende seed-items zijn bijgewerkt naar `draft`:

- `msresearch-pira-choroid-plexus`
- `msresearch-smouldering-ms-fingerprint`
- `msresearch-eye-scans`
- `msresearch-brain-age`

## Volgende stap

Voor promotie naar `source_checked`:

1. Full text of volledige open-access tekst lezen waar beschikbaar.
2. Effectmaten, populatie, follow-up en beperkingen exact overnemen.
3. JSON-record per item maken of bestaand biomarkerrecord uitbreiden.
4. Expertreviewvraag formuleren voor overclaim-risico.
