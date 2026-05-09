# Claim density audit: 04-environment-reproducibility

- **Audit ID:** `cda_1778305356970_04-environment-reproducibility`
- **Audited at:** 2026-05-09T05:42:36.970Z
- **research-os version:** 0.1.0
- **Candidate claims:** 284
- **Sources:** 12
- **Total source words:** 1,573,739
- **Claims per 1k source words (section):** 0.18
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 67
- **Generic-scope claims (scope mirrors source title):** 70

## Flags (8)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_2086dbbb6560 contributes 59 of 284 claims (21% of section). |
| `source_dominance` | warn | Source src_aa570bcb9060 contributes 40 of 284 claims (14% of section). |
| `source_dominance` | warn | Source src_b81c03003037 contributes 30 of 284 claims (11% of section). |
| `source_dominance` | warn | Source src_f4ce9a16c6b4 contributes 30 of 284 claims (11% of section). |
| `high_per_word_density` | warn | Source src_f4ce9a16c6b4 has 7.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_ccc15b6a3971 has 72.9 claims per 1k source words — likely over-atomization. |
| `large_near_duplicate_cluster` | block | Cluster of 8 claims share a normalised assertion: "Fetch the complete documentation index at: https://docs.comfy.org/llms.txt". |
| `large_near_duplicate_cluster` | block | Cluster of 8 claims share a normalised assertion: "Use this file to discover all available pages before exploring further.". |

## Per source (12)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_2086dbbb6560` | 26,945 | 59 | 2.19 | 21% | 25 | 0 |
| `src_aa570bcb9060` | 29,410 | 40 | 1.36 | 14% | 8 | 0 |
| `src_b81c03003037` (docs.comfy.org) | 205,010 | 30 | 0.15 | 11% | 4 | 19 |
| `src_f4ce9a16c6b4` | 3,865 | 30 | 7.76 | 11% | 9 | 0 |
| `src_fcdd7f1c90e9` (docs.comfy.org) | 204,525 | 23 | 0.11 | 8% | 2 | 3 |
| `src_2e0add2bdec7` (docs.comfy.org) | 188,208 | 18 | 0.10 | 6% | 2 | 6 |
| `src_2a30a3ff7502` (docs.comfy.org) | 188,895 | 17 | 0.09 | 6% | 2 | 10 |
| `src_664a4a54b4c3` (docs.comfy.org) | 189,155 | 17 | 0.09 | 6% | 2 | 14 |
| `src_f9b159fab5ef` (docs.comfy.org) | 179,781 | 16 | 0.09 | 6% | 8 | 6 |
| `src_a8c5d541c698` (docs.comfy.org) | 177,284 | 14 | 0.08 | 5% | 2 | 1 |
| `src_75194fe21c45` (docs.comfy.org) | 180,565 | 13 | 0.07 | 5% | 2 | 5 |
| `src_ccc15b6a3971` | 96 | 7 | 72.92 | 2% | 1 | 6 |

## Near-duplicate clusters (>= 3 members) — 2

Each row is a cluster of claims whose normalised assertions collapse to the same key.

| Members | Representative assertion |
|---:|---|
| 8 | Fetch the complete documentation index at: https://docs.comfy.org/llms.txt |
| 8 | Use this file to discover all available pages before exploring further. |

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._