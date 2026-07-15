# Next steps backlog v0.1

Datum: 2026-07-13
Status: uitvoerbare backlog

## Doel voor de volgende werkronde

Van de eerste 30 seed-items moeten minimaal 10 items naar `source_checked`, waarvan 3 met volledige evidence-record JSON. De BTK-lijn is het eerste voorbeeld.

## Batch 1: BTK-lijn afronden

1. HERCULES effectmaat en veiligheidsdata uit NEJM-publicatie extraheren.
2. PERSEUS resultatenstatus apart controleren.
3. BTK targetfiche aanvullen met PDB-structuren en inhibitorbindingscontext.
4. Patiententaal, klinische tekst en researchtekst laten controleren door MS-neuroloog.
5. Beslissen welke veiligheidsinformatie verplicht zichtbaar is bij BTK-remmers.

## Batch 2: progressie-biomarkers

1. Serum NfL. Eerste JSON-record source checked.
2. Serum GFAP. Eerste JSON-record source checked.
3. Hersenvolumeverlies.
4. Paramagnetic rim lesions. Eerste JSON-record source checked.
5. Slowly expanding lesions. Eerste JSON-record source checked.

Per biomarker:

- definieer meetmethode
- koppel aan progressie-uitkomsten
- benoem beperkingen
- voeg minimaal twee bronnen toe
- maak patiententaalversie

## Batch 3: bestaande progressieve-MS interventies

1. Ocrelizumab bij PPMS. Eerste JSON-record source checked.
2. Ibudilast bij progressieve MS. Eerste JSON-record source checked.
3. Simvastatin bij SPMS. Eerste JSON-record source checked, inclusief fase 3-correctie.
4. Rituximab in progressieve MS, alleen met strakke claimbeperking.
5. Remyelinisatievoorbeelden: clemastine en opicinumab.

## Publicatievoorbereiding

1. Kies opslagvorm voor publieke kaart: JSON records plus CSV-index.
2. Maak `public-ready` criterium in elk record.
3. Maak eerste reviewpakket voor neuroloog: 10 items, methodologie en claimcheck.
4. Maak changelogformat.
5. Maak minimaal viable website-outline met filters:
   - categorie
   - MS-context
   - bewijsniveau
   - uitkomstmaat
   - reviewstatus

## GitHub-beslispunt

GitHub is nu nodig voor de volgende fase: de eerste 10 `source_checked` records zijn gehaald. Maak de repo aan voordat de externe neuroloog-review, issue-tracking of publieke website start.

## Expertreviewvragen voor batch 1

- Is bewijsniveau A voor HERCULES correct geformuleerd binnen alleen de nrSPMS-populatie?
- Moet PERSEUS als E blijven totdat resultaten apart zijn verwerkt, ondanks completed status?
- Welke veiligheidsclaims rond BTK-remming moeten altijd zichtbaar zijn?
- Is de BTK-structurele laag medisch zinvol of te gedetailleerd voor publieke communicatie?
