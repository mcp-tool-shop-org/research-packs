# Claim density audit: 02-pack-artifact-contract

- **Audit ID:** `cda_1778190538487_02-pack-artifact-contract`
- **Audited at:** 2026-05-07T21:48:58.487Z
- **research-os version:** 0.1.0
- **Candidate claims:** 471
- **Sources:** 9
- **Total source words:** 97,319
- **Claims per 1k source words (section):** 4.84
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 57
- **Generic-scope claims (scope mirrors source title):** 90

## Flags (7)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_712838e1db63 contributes 150 of 471 claims (32% of section). |
| `source_dominance` | block | Source src_0801e1ee8a70 contributes 146 of 471 claims (31% of section). |
| `source_dominance` | block | Source src_cf2238f43a01 contributes 119 of 471 claims (25% of section). |
| `high_per_word_density` | warn | Source src_712838e1db63 has 6.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_0801e1ee8a70 has 7.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_62d58636ae35 has 6.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_c1e29cfcaa1e has 14.5 claims per 1k source words — likely over-atomization. |

## Per source (9)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_712838e1db63` (yaml.org) | 22,448 | 150 | 6.68 | 32% | 9 | 23 |
| `src_0801e1ee8a70` (www.w3.org) | 20,305 | 146 | 7.19 | 31% | 27 | 51 |
| `src_cf2238f43a01` | 33,152 | 119 | 3.59 | 25% | 0 | 0 |
| `src_62d58636ae35` (IETF Datatracker) | 4,295 | 29 | 6.75 | 6% | 14 | 2 |
| `src_bf5d0eef78f0` (json-schema.org) | 3,835 | 7 | 1.83 | 1% | 7 | 0 |
| `src_2cc80fcf07ba` (json-schema.org) | 3,682 | 6 | 1.63 | 1% | 0 | 0 |
| `src_c1e29cfcaa1e` (jsonlines.org) | 414 | 6 | 14.49 | 1% | 0 | 6 |
| `src_876b66b88858` (json-schema.org) | 4,578 | 4 | 0.87 | 1% | 0 | 4 |
| `src_b1ed6cf92876` (json-schema.org) | 4,610 | 4 | 0.87 | 1% | 0 | 4 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._