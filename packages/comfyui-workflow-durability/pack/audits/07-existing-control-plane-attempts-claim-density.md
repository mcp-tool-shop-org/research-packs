# Claim density audit: 07-existing-control-plane-attempts

- **Audit ID:** `cda_1778290474918_07-existing-control-plane-attempts`
- **Audited at:** 2026-05-09T01:34:34.918Z
- **research-os version:** 0.1.0
- **Candidate claims:** 140
- **Sources:** 10
- **Total source words:** 190,782
- **Claims per 1k source words (section):** 0.73
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 29
- **Generic-scope claims (scope mirrors source title):** 39

## Flags (9)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_cf20a276ca4d contributes 35 of 140 claims (25% of section). |
| `source_dominance` | warn | Source src_1e2124f6f8d4 contributes 33 of 140 claims (24% of section). |
| `high_per_word_density` | warn | Source src_cf20a276ca4d has 9.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_1e2124f6f8d4 has 10.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_e804faef8c79 has 11.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_a295cc4f28d3 has 11.9 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_417fb676dd7b has 12.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_a52f23a8cbd2 has 13.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_f6c7ab7a2205 has 15.4 claims per 1k source words — likely over-atomization. |

## Per source (10)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_cf20a276ca4d` (PyPI) | 3,615 | 35 | 9.68 | 25% | 11 | 0 |
| `src_1e2124f6f8d4` | 3,086 | 33 | 10.69 | 24% | 3 | 15 |
| `src_e804faef8c79` | 2,186 | 25 | 11.44 | 18% | 3 | 8 |
| `src_a295cc4f28d3` | 1,012 | 12 | 11.86 | 9% | 2 | 9 |
| `src_8f706291ff12` (docs.comfy.org) | 178,239 | 9 | 0.05 | 6% | 2 | 1 |
| `src_417fb676dd7b` | 663 | 8 | 12.07 | 6% | 3 | 2 |
| `src_a52f23a8cbd2` | 612 | 8 | 13.07 | 6% | 3 | 0 |
| `src_c39e382ce301` | 1,110 | 4 | 3.60 | 3% | 1 | 3 |
| `src_f6c7ab7a2205` | 259 | 4 | 15.44 | 3% | 1 | 1 |
| `src_4c437e284d95` | 0 | 2 | 0.00 | 1% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._