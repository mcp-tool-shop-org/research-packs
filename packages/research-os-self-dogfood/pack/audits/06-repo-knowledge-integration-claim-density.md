# Claim density audit: 06-repo-knowledge-integration

- **Audit ID:** `cda_1778181412591_06-repo-knowledge-integration`
- **Audited at:** 2026-05-07T19:16:52.591Z
- **research-os version:** 0.1.0
- **Candidate claims:** 297
- **Sources:** 7
- **Total source words:** 49,268
- **Claims per 1k source words (section):** 6.03
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 29
- **Generic-scope claims (scope mirrors source title):** 54

## Flags (6)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_e15c2248a5d8 contributes 188 of 297 claims (63% of section). |
| `source_dominance` | warn | Source src_05cae033cedc contributes 45 of 297 claims (15% of section). |
| `high_per_word_density` | warn | Source src_e15c2248a5d8 has 7.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_05cae033cedc has 8.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_5d98fdba0757 has 11.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_f110ffbdbe7c has 8.9 claims per 1k source words — likely over-atomization. |

## Per source (7)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_e15c2248a5d8` (sqlite.org) | 26,555 | 188 | 7.08 | 63% | 7 | 47 |
| `src_05cae033cedc` (sqlite.org) | 5,549 | 45 | 8.11 | 15% | 12 | 7 |
| `src_676ddfa834cc` | 5,976 | 29 | 4.85 | 10% | 4 | 0 |
| `src_91705d06abdf` | 2,843 | 14 | 4.92 | 5% | 3 | 0 |
| `src_5d98fdba0757` | 796 | 9 | 11.31 | 3% | 1 | 0 |
| `src_ac6052de3047` | 7,211 | 9 | 1.25 | 3% | 2 | 0 |
| `src_f110ffbdbe7c` | 338 | 3 | 8.88 | 1% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._