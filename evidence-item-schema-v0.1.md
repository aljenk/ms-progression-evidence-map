# Evidence item schema v0.1

Datum: 2026-07-13
Status: conceptschema

## Velden

| Veld | Type | Verplicht | Toelichting |
| --- | --- | --- | --- |
| `id` | string | ja | Stabiele korte ID, bijvoorbeeld `btk-tolebrutinib-hercules`. |
| `title` | string | ja | Publieke titel. |
| `category` | enum | ja | `intervention`, `target`, `biomarker`, `trial`, `mechanism`, `structure`, `safety`, `question`. |
| `subcategory` | string | nee | Bijvoorbeeld `BTK inhibitor`, `remyelination`, `fluid biomarker`. |
| `ms_context` | list | ja | `RRMS`, `SPMS`, `nrSPMS`, `PPMS`, `PIRA`, `progressive MS`, `preclinical`. |
| `mechanism_summary` | text | ja | Mechanisme in maximaal 80 woorden. |
| `patient_summary` | text | ja | Wat dit wel en niet betekent in patiententaal. |
| `clinical_summary` | text | ja | Korte klinische samenvatting. |
| `research_summary` | text | nee | Mechanistische of methodologische nuance. |
| `outcomes` | list | ja | Kies uit de uitkomstmaten in `methodologie-v0.1.md`. |
| `evidence_level` | enum | ja | `A`, `B`, `C`, `D`, `E`. |
| `evidence_label` | string | ja | Korte uitleg van het bewijsniveau. |
| `trial_status` | string | nee | `not_applicable`, `recruiting`, `active`, `completed`, `published`, `unknown`. |
| `safety_notes` | text | nee | Belangrijkste risico's, alleen bronvast. |
| `open_questions` | list | ja | Wat ontbreekt of onzeker blijft. |
| `sources` | list | ja | URL, bronsoort, datum, claim. |
| `last_reviewed` | date | ja | YYYY-MM-DD. |
| `review_status` | enum | ja | `draft`, `source_checked`, `expert_review_requested`, `expert_reviewed`, `published`. |
| `medical_disclaimer` | text | ja | Standaard of item-specifiek. |

## Structurele-biologie velden

Deze velden zijn optioneel voor interventies en verplicht voor target- of structurele-biologie entries.

| Veld | Type | Toelichting |
| --- | --- | --- |
| `gene_symbol` | string | Bijvoorbeeld `BTK`. |
| `protein_name` | string | Naam volgens UniProt. |
| `uniprot_id` | string | Bijvoorbeeld `Q06187`. |
| `pdb_ids` | list | Experimentele structuren waar relevant. |
| `alphafold_id` | string | AlphaFold DB entry waar beschikbaar. |
| `structure_confidence` | string | Korte interpretatie van confidence, niet als klinische claim. |
| `domains` | list | Functionele domeinen. |
| `binding_sites` | list | Bronvaste bindingsplaatsen. |
| `interaction_partners` | list | Alleen met bron. |
| `variant_layer` | text | AlphaMissense of andere variantinformatie, gelabeld als researchcontext. |
| `structure_claim_limit` | text | Waarom dit geen werkzaamheidsbewijs is. |

## JSON voorbeeld

```json
{
  "id": "btk-tolebrutinib-hercules",
  "title": "Tolebrutinib bij non-relapsing SPMS",
  "category": "intervention",
  "subcategory": "BTK inhibitor",
  "ms_context": ["nrSPMS", "progressive MS"],
  "mechanism_summary": "BTK-remming richt zich op B-cel- en myeloide immuunsignalering, met interesse in compartimentale ontsteking.",
  "patient_summary": "Dit is onderzoek naar progressie zonder duidelijke relapses. Het is geen persoonlijk behandeladvies.",
  "clinical_summary": "Fase 3 HERCULES onderzocht 6-maands confirmed disability progression bij nrSPMS.",
  "outcomes": ["CDP", "EDSS", "safety"],
  "evidence_level": "A",
  "evidence_label": "Klinische fase 3-publicatie met progressie-uitkomst.",
  "trial_status": "published",
  "safety_notes": "Veiligheidsignalen moeten uit de publicatie en registratiedata worden overgenomen.",
  "open_questions": ["Regulatoire status", "Langetermijnveiligheid", "Vertaling naar andere progressieve populaties"],
  "sources": [
    {
      "url": "https://pubmed.ncbi.nlm.nih.gov/40202696/",
      "type": "peer_reviewed_publication",
      "claim": "PubMed beschrijft lager risico op disability progression in nonrelapsing SPMS."
    },
    {
      "url": "https://clinicaltrials.gov/study/NCT04411641",
      "type": "trial_registry",
      "claim": "ClinicalTrials.gov registreert HERCULES met 6-maands CDP als progressiegerelateerde uitkomst."
    }
  ],
  "last_reviewed": "2026-07-13",
  "review_status": "source_checked",
  "medical_disclaimer": "Researchsamenvatting, geen behandeladvies."
}
```

