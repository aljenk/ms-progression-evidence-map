# Publicatiechecklist v0.1

Datum: 2026-07-13
Status: concept

## Per item

Een item mag naar `published` als alle punten waar zijn:

- `id` is stabiel.
- categorie en subtype zijn ingevuld.
- MS-context is ingevuld.
- uitkomstmaten zijn gescheiden.
- bewijsniveau is ingevuld en uitgelegd.
- minimaal een bronlink is gecontroleerd.
- laatste-reviewdatum is ingevuld.
- patiententaal is aanwezig.
- klinische samenvatting is aanwezig.
- claimbeperking is aanwezig.
- medische disclaimer is aanwezig.
- bij structurele claims staat expliciet `computational hypothesis` of vergelijkbare begrenzing.

## Voor batch-publicatie

Een batch mag publiek als:

- minimaal een arts of domeinexpert de methodologie heeft gezien, of de site duidelijk als pre-review is gelabeld.
- elk item met status `expert_review_requested` zichtbaar als pre-review is gelabeld.
- er geen behandeladvies of repurposingadvies in de teksten staat.
- elke A- of B-claim terugleidbaar is naar een klinische bron of trialregister.
- elke D-claim zichtbaar als computationele hypothese is gelabeld.
- changelog en reviewdatum zichtbaar zijn.
- de Pages-site `expert_review_requested` expliciet als pre-review toont.

## Stopcriteria

Niet publiceren als:

- een item een middel als werkzaam presenteert zonder populatie en uitkomstmaat.
- relapse-reductie wordt vermengd met progressieremming.
- AlphaFold, docking of AlphaMissense als klinisch bewijs wordt gepresenteerd.
- veiligheidsinformatie ontbreekt bij interventies.
- bronlinks ontbreken of niet meer werken.
