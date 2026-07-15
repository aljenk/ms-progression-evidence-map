# GitHub environment decision v0.1

Datum: 2026-07-13
Status: GitHub-moment bereikt

## Voor lokale uitwerking was GitHub nog niet nodig

GitHub is nog niet strikt nodig zolang we lokaal:

- templates ontwerpen
- eerste records invullen
- bronchecks doen
- expertvragen voorbereiden
- formats aanscherpen

## Wel nodig zodra een van deze punten geldt

GitHub wordt praktisch nodig bij:

- publieke of semi-publieke review door neuroloog of onderzoeker
- meer dan ongeveer 10 `source_checked` evidence-records
- meerdere mensen die tegelijk aan records werken
- wens voor issue-tracking per item of bronclaim
- changelog en versiebeheer per maandupdate
- website-publicatie via GitHub Pages, Vercel, Netlify of vergelijkbaar
- transparante audittrail voor wijzigingen in bewijsniveau

## Aanbevolen moment

Richt GitHub nu in. De eerste bronvaste batch van 10 records is bereikt. De repository is niet leeg, maar nog klein genoeg om de structuur te wijzigen zonder migratiepijn.

## Minimale repo-indeling

```text
data/evidence-records/
data/index.csv
docs/methodologie.md
docs/communication-kit.md
docs/expert-review/
website/
CHANGELOG.md
README.md
```

## Eerste GitHub-acties

1. Nieuwe private repo aanmaken.
2. `docs/ms-progression-evidence-map/` als eerste inhoud pushen.
3. Branch protection pas aanzetten na de eerste structuurcommit.
4. Issues aanmaken voor de 30 seed-items.
5. Labels maken: `source-check`, `expert-review`, `clinical`, `biomarker`, `structure`, `safety`, `publication-ready`.
