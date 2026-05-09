# Claim density audit: 01-product-thesis

- **Audit ID:** `cda_1778188698560_01-product-thesis`
- **Audited at:** 2026-05-07T21:18:18.560Z
- **research-os version:** 0.1.0
- **Candidate claims:** 109
- **Sources:** 8
- **Total source words:** 28,198
- **Claims per 1k source words (section):** 3.87
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 11
- **Generic-scope claims (scope mirrors source title):** 6

## Flags (4)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_d474bc1158c2 contributes 65 of 109 claims (60% of section). |
| `high_per_word_density` | warn | Source src_d474bc1158c2 has 6.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_a2f17fd8c9a6 has 10.5 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_308195df859c has 5.5 claims per 1k source words — likely over-atomization. |

## Per source (8)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_d474bc1158c2` (en.wikipedia.org) | 10,547 | 65 | 6.16 | 60% | 6 | 2 |
| `src_56b5f3cd926b` (force11.org) | 9,849 | 11 | 1.12 | 10% | 0 | 0 |
| `src_a2f17fd8c9a6` (arXiv.org) | 954 | 10 | 10.48 | 9% | 0 | 0 |
| `src_770d35522c16` (www.doi.org) | 1,404 | 7 | 4.99 | 6% | 5 | 0 |
| `src_d574302fe3de` (GO FAIR) | 3,371 | 6 | 1.78 | 6% | 0 | 2 |
| `src_308195df859c` (arXiv.org) | 722 | 4 | 5.54 | 4% | 0 | 2 |
| `src_923564b918e1` (arXiv.org) | 682 | 3 | 4.40 | 3% | 0 | 0 |
| `src_98d43428beed` (arXiv.org) | 669 | 3 | 4.48 | 3% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._