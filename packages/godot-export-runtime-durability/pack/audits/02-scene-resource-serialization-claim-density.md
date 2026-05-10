# Claim density audit: 02-scene-resource-serialization

- **Audit ID:** `cda_1778393874270_02-scene-resource-serialization`
- **Audited at:** 2026-05-10T06:17:54.270Z
- **research-os version:** 0.3.2
- **Candidate claims:** 402
- **Sources:** 11
- **Total source words:** 80,245
- **Claims per 1k source words (section):** 5.01
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 0
- **Generic-scope claims (scope mirrors source title):** 22

## Flags (9)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_d8935f3b0347 contributes 196 of 402 claims (49% of section). |
| `high_per_word_density` | warn | Source src_d8935f3b0347 has 11.5 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_3bf41f24d47a has 10.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_ef84790b4914 has 12.0 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_0b13e026c1cc has 10.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_cfb7cbc09d44 has 13.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_55a63071c9c1 has 10.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_943086ae5d37 has 13.0 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_bc58f284031b has 11.3 claims per 1k source words — likely over-atomization. |

## Per source (11)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_d8935f3b0347` (Godotengine) | 17,023 | 196 | 11.51 | 49% | 0 | 2 |
| `src_3bf41f24d47a` (Godotengine) | 2,820 | 29 | 10.28 | 7% | 0 | 0 |
| `src_8b484efdebe2` | 16,294 | 27 | 1.66 | 7% | 0 | 10 |
| `src_c50580a705c4` | 20,867 | 26 | 1.25 | 6% | 0 | 0 |
| `src_c5ed9836ffb5` | 14,789 | 26 | 1.76 | 6% | 0 | 0 |
| `src_ef84790b4914` (Godotengine) | 2,164 | 26 | 12.01 | 6% | 0 | 0 |
| `src_0b13e026c1cc` (Godotengine) | 2,055 | 21 | 10.22 | 5% | 0 | 0 |
| `src_cfb7cbc09d44` (Godotengine) | 1,159 | 16 | 13.81 | 4% | 0 | 10 |
| `src_55a63071c9c1` (Godotengine) | 1,182 | 12 | 10.15 | 3% | 0 | 0 |
| `src_943086ae5d37` (Godotengine) | 922 | 12 | 13.02 | 3% | 0 | 0 |
| `src_bc58f284031b` (Godotengine) | 970 | 11 | 11.34 | 3% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._