# Botontwerp v0.1

Datum: 2026-07-13
Status: concept

## Rollen

### Evidence Core Bot

Doel: entries aanmaken, bronnen koppelen, bewijsniveau voorstellen en reviewstatus bewaken.

Commands:

- `/item_add`
- `/item_update`
- `/item_review`
- `/evidence_level`
- `/source_check`

Output:

- item-ID
- samenvatting
- bewijsniveau
- ontbrekende velden
- claimbeperking
- volgende reviewactie

### Trial Monitor Bot

Doel: trialregistraties en publicaties volgen.

Commands:

- `/trial_add`
- `/trial_check`
- `/trial_update`
- `/trial_digest`

Output:

- trial-ID
- populatie
- primaire uitkomst
- status
- progressie-uitkomsten
- bronlinks
- publicatiestatus

### Structure Bot

Doel: targets koppelen aan UniProt, PDB, AlphaFold DB, AlphaFold 3-hypothesen en AlphaMissense-context.

Commands:

- `/target_structure`
- `/uniprot`
- `/alphafold`
- `/variant_context`
- `/interaction_hypothesis`

Output:

- targetidentiteit
- structuurstatus
- domeinen
- bindingsplaatsen
- interactiepartners
- variantlaag
- hypotheselabel
- claimbeperking

### Communication Bot

Doel: entries vertalen naar patiententaal, klinische samenvatting en onderzoekstaal.

Commands:

- `/patient_summary`
- `/clinical_summary`
- `/research_summary`
- `/telegram_update`

Output:

- korte patiententekst
- klinische nuance
- bronregel
- disclaimer

### Review Bot

Doel: claims controleren voordat tekst publiek wordt.

Commands:

- `/claim_check`
- `/guardrail_check`
- `/expert_review_request`
- `/publish_ready`

Output:

- claim die gecontroleerd is
- bron die de claim ondersteunt
- risico op te sterke formulering
- ontbrekende disclaimer
- publicatieadvies

## Reviewstatussen

- `draft`: aangemaakt maar niet gecontroleerd.
- `source_checked`: bronlinks en kernclaim gecontroleerd.
- `expert_review_requested`: klaargezet voor medische review.
- `expert_reviewed`: expertfeedback verwerkt.
- `published`: geschikt voor publieke evidence map.

## Minimale botguardrails

- Bots mogen geen behandeladvies geven.
- Bots mogen geen persoonlijke casus beoordelen.
- Bots moeten bij structurele voorspellingen altijd `computational hypothesis` tonen.
- Bots moeten bronlinks tonen bij inhoudelijke claims.
- Bots mogen geen publicatie-ready status geven zonder reviewstatus en laatste-reviewdatum.

