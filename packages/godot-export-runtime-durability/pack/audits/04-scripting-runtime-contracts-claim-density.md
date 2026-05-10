# Claim density audit: 04-scripting-runtime-contracts

- **Audit ID:** `cda_1778397608936_04-scripting-runtime-contracts`
- **Audited at:** 2026-05-10T07:20:08.936Z
- **research-os version:** 0.3.2
- **Candidate claims:** 382
- **Sources:** 9
- **Total source words:** 78,998
- **Claims per 1k source words (section):** 4.84
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 8
- **Generic-scope claims (scope mirrors source title):** 60

## Flags (12)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_169fec56d321 contributes 128 of 382 claims (34% of section). |
| `source_dominance` | block | Source src_7f5634860b7d contributes 56 of 382 claims (15% of section). |
| `source_dominance` | block | Source src_68be97293369 contributes 51 of 382 claims (13% of section). |
| `source_dominance` | warn | Source src_04c541af2502 contributes 33 of 382 claims (9% of section). |
| `source_dominance` | warn | Source src_e3948fcd1578 contributes 33 of 382 claims (9% of section). |
| `source_dominance` | warn | Source src_ad0801f16070 contributes 30 of 382 claims (8% of section). |
| `high_per_word_density` | warn | Source src_169fec56d321 has 10.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_04c541af2502 has 11.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_e3948fcd1578 has 7.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_33eded38b390 has 11.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_a9fd72b46944 has 9.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d5da902c1965 has 11.1 claims per 1k source words — likely over-atomization. |

## Per source (9)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_169fec56d321` (Godotengine) | 12,448 | 128 | 10.28 | 34% | 1 | 31 |
| `src_7f5634860b7d` | 21,036 | 56 | 2.66 | 15% | 2 | 7 |
| `src_68be97293369` | 13,909 | 51 | 3.67 | 13% | 1 | 10 |
| `src_04c541af2502` (Godotengine) | 2,968 | 33 | 11.12 | 9% | 0 | 8 |
| `src_e3948fcd1578` (Godotengine) | 4,436 | 33 | 7.44 | 9% | 1 | 0 |
| `src_ad0801f16070` | 19,409 | 30 | 1.55 | 8% | 3 | 1 |
| `src_33eded38b390` (Godotengine) | 1,778 | 21 | 11.81 | 5% | 0 | 3 |
| `src_a9fd72b46944` (Godotengine) | 2,021 | 19 | 9.40 | 5% | 0 | 0 |
| `src_d5da902c1965` (Godotengine) | 993 | 11 | 11.08 | 3% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._