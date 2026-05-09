# Claim density audit: 06-comfyui-core-versioning

- **Audit ID:** `cda_1778274954400_06-comfyui-core-versioning`
- **Audited at:** 2026-05-08T21:15:54.400Z
- **research-os version:** 0.1.0
- **Candidate claims:** 377
- **Sources:** 14
- **Total source words:** 1,006,618
- **Claims per 1k source words (section):** 0.37
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 18
- **Generic-scope claims (scope mirrors source title):** 25

## Flags (7)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_f311c690b666 contributes 194 of 377 claims (51% of section). |
| `source_dominance` | warn | Source src_990ca9d75d8b contributes 32 of 377 claims (8% of section). |
| `source_dominance` | warn | Source src_f4ce9a16c6b4 contributes 31 of 377 claims (8% of section). |
| `high_per_word_density` | warn | Source src_f311c690b666 has 6.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_990ca9d75d8b has 6.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_f4ce9a16c6b4 has 8.0 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_e804faef8c79 has 11.0 claims per 1k source words — likely over-atomization. |

## Per source (14)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_f311c690b666` | 31,489 | 194 | 6.16 | 51% | 0 | 0 |
| `src_990ca9d75d8b` | 5,089 | 32 | 6.29 | 8% | 1 | 0 |
| `src_f4ce9a16c6b4` | 3,865 | 31 | 8.02 | 8% | 10 | 5 |
| `src_e804faef8c79` | 2,186 | 24 | 10.98 | 6% | 0 | 11 |
| `src_fbbdece73b76` | 15,585 | 23 | 1.48 | 6% | 0 | 5 |
| `src_55456d4dedfa` | 191,240 | 22 | 0.12 | 6% | 2 | 4 |
| `src_8a319c76148c` | 2,898 | 14 | 4.83 | 4% | 0 | 0 |
| `src_bd638b8de92f` | 191,641 | 11 | 0.06 | 3% | 0 | 0 |
| `src_07437ed8d167` | 176,464 | 6 | 0.03 | 2% | 5 | 0 |
| `src_b507da5fa466` | 1,259 | 6 | 4.77 | 2% | 0 | 0 |
| `src_2ae04b870db8` | 176,683 | 5 | 0.03 | 1% | 0 | 0 |
| `src_df4ad7d6f9c0` | 175,522 | 5 | 0.03 | 1% | 0 | 0 |
| `src_19f4e9c54b47` | 31,054 | 3 | 0.10 | 1% | 0 | 0 |
| `src_155d801f1917` | 1,643 | 1 | 0.61 | 0% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._