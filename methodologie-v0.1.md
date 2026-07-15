# Methodologie v0.1

Datum: 2026-07-13
Status: concept voor expertreview

## Scope

De MS Progression Evidence Map ordent kennis over progressie bij multiple sclerose, met nadruk op progressie zonder duidelijke relapses, PIRA, progressieve MS, neurodegeneratie, remyelinisatie, neuroprotectie, biomarkers en relevante trials.

De kaart is bedoeld voor:

- voorbereiding van gesprekken met artsen en onderzoekers
- transparante uitleg voor patienten en naasten
- researchprioritering
- het volgen van trials en bewijsverandering

De kaart is niet bedoeld voor:

- behandeladvies
- zelfmedicatie of repurposingadvies
- diagnose, prognose of klinische variantinterpretatie
- ranglijst van "beste" behandelingen

## Evidence objecten

Elke entry valt in een of meer categorieen:

- interventie
- target
- biomarker
- trial
- mechanisme
- structurele biologie
- veiligheidsignaal
- open onderzoeksvraag

## Uitkomstmaten

Uitkomsten worden apart gecodeerd, zodat relapse-effecten niet worden verward met progressie-effecten:

- relapse-reductie
- MRI-activiteit
- hersenvolume of atrofie
- EDSS
- CDP, confirmed disability progression
- PIRA, progression independent of relapse activity
- NfL, neurofilament light
- cognitie
- handfunctie
- loopfunctie
- kwaliteit van leven
- patientgerapporteerde uitkomsten

## Bewijsniveaus

Voor v0.1 gebruiken we vijf labels:

| Label | Betekenis | Minimumeis |
| --- | --- | --- |
| A | klinisch progressiebewijs | fase 3 of sterke klinische studie met progressie-uitkomst |
| B | klinisch MS-bewijs zonder harde progressieclaim | MS-studie met relapse, MRI of gemengde disability-uitkomst |
| C | biomarker- of mechanistisch bewijs | plausibel mechanisme, biomarker of preklinische data |
| D | computationele hypothese | AlphaFold, AlphaMissense, docking, pathway- of omics-prioritering |
| E | open vraag | onvoldoende bewijs, alleen rationale of expertvraag |

Regel: een entry krijgt nooit een hoger bewijsniveau door computationele structuurdata alleen. Structurele biologie kan uitleg en prioritering verbeteren, maar niet aantonen dat een behandeling progressie vertraagt.

## Bronbeleid

Voorkeursvolgorde:

1. peer-reviewed klinische publicaties
2. trialregisters zoals ClinicalTrials.gov of EU Clinical Trials Register
3. richtlijnen en professionele MS-organisaties
4. preprints, congresabstracts of sponsorberichten, duidelijk gelabeld
5. databasebronnen zoals UniProt, PDB, AlphaFold DB, AlphaMissense en ChEMBL

Elke entry bevat minimaal:

- bronlink
- bronsoort
- publicatie- of registratiedatum waar beschikbaar
- datum laatste review
- korte claim die rechtstreeks uit de bron volgt

## Reviewflow

Nieuwe of gewijzigde entries doorlopen vier stappen:

1. Intake: onderwerp, categorie en bronlinks vastleggen.
2. Extractie: mechanisme, populatie, uitkomstmaten, veiligheidsignalen en open vragen invullen.
3. Claimcheck: controleren of de samenvatting niet sterker is dan de bron.
4. Expertreview: medische review markeren als gevraagd, ontvangen of verwerkt.

## Guardrails

- Geen behandeladvies.
- Geen persoonlijke medische interpretatie.
- Geen suggestie dat repurposing veilig of effectief is zonder klinisch bewijs.
- Geen docking-score of AlphaFold-output presenteren als werkzaamheidsbewijs.
- Geen AlphaMissense-labels presenteren als ACMG/AMP-klinische classificatie.
- Altijd vermelden wanneer een conclusie alleen hypothese of mechanistische plausibiliteit is.

## Minimale definitie van publiceerbaar

Een item is pas publiceerbaar als het:

- een categorie heeft
- een bewijsniveau heeft
- minimaal een bronlink heeft
- uitkomstmaten apart codeert
- een patiententaal-samenvatting heeft
- een claimbeperking of disclaimer heeft
- een laatste-reviewdatum heeft

