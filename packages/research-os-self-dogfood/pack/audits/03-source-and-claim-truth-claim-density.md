# Claim density audit: 03-source-and-claim-truth

- **Audit ID:** `cda_1778128094204_03-source-and-claim-truth`
- **Audited at:** 2026-05-07T04:28:14.204Z
- **research-os version:** 0.1.0
- **Candidate claims:** 715
- **Sources:** 7
- **Total source words:** 104,634
- **Claims per 1k source words (section):** 6.83
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 361
- **Generic-scope claims (scope mirrors source title):** 33

## Flags (11)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_caedf4b2d8e0 contributes 438 of 715 claims (61% of section). |
| `source_dominance` | block | Source src_bc94816a3373 contributes 89 of 715 claims (12% of section). |
| `source_dominance` | block | Source src_d81a8a3d6bba contributes 76 of 715 claims (11% of section). |
| `source_dominance` | block | Source src_155c4be7850d contributes 51 of 715 claims (7% of section). |
| `high_per_word_density` | warn | Source src_caedf4b2d8e0 has 7.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_bc94816a3373 has 7.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d81a8a3d6bba has 6.6 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_155c4be7850d has 5.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d39cd3ba0ef2 has 9.0 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_a135974ea838 has 10.6 claims per 1k source words — likely over-atomization. |
| `weak_scope_majority` | warn | 361 of 715 claims (50%) carry no scope and no not constraint. |

## Per source (7)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_caedf4b2d8e0` (www.w3.org) | 61,815 | 438 | 7.09 | 61% | 265 | 20 |
| `src_bc94816a3373` (en.wikipedia.org) | 11,949 | 89 | 7.45 | 12% | 12 | 0 |
| `src_d81a8a3d6bba` (en.wikipedia.org) | 11,484 | 76 | 6.62 | 11% | 27 | 0 |
| `src_155c4be7850d` (en.wikipedia.org) | 9,669 | 51 | 5.27 | 7% | 28 | 7 |
| `src_676ddfa834cc` (en.wikipedia.org) | 5,976 | 26 | 4.35 | 4% | 10 | 0 |
| `src_d39cd3ba0ef2` (www.w3.org) | 2,894 | 26 | 8.98 | 4% | 19 | 1 |
| `src_a135974ea838` (arXiv.org) | 847 | 9 | 10.63 | 1% | 0 | 5 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._