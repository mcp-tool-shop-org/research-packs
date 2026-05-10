# Claim density audit: 01-engine-version-export-template-compat

- **Audit ID:** `cda_1778382949395_01-engine-version-export-template-compat`
- **Audited at:** 2026-05-10T03:15:49.395Z
- **research-os version:** 0.3.2
- **Candidate claims:** 150
- **Sources:** 8
- **Total source words:** 164,669
- **Claims per 1k source words (section):** 0.91
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 9
- **Generic-scope claims (scope mirrors source title):** 42

## Flags (6)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_71469ccfe316 contributes 42 of 150 claims (28% of section). |
| `high_per_word_density` | warn | Source src_71469ccfe316 has 9.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_6ee62ab47888 has 9.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_6f54a167d232 has 8.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_4c6c14f4f6fa has 9.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_6e935dbe9826 has 9.0 claims per 1k source words — likely over-atomization. |

## Per source (8)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_71469ccfe316` | 4,619 | 42 | 9.09 | 28% | 0 | 26 |
| `src_78aaa13e8387` | 14,578 | 21 | 1.44 | 14% | 4 | 2 |
| `src_6ee62ab47888` | 1,844 | 17 | 9.22 | 11% | 5 | 2 |
| `src_6f54a167d232` (Godotengine) | 2,082 | 17 | 8.17 | 11% | 0 | 4 |
| `src_4c6c14f4f6fa` | 1,634 | 16 | 9.79 | 11% | 0 | 0 |
| `src_1e4fa1dde3af` | 120,989 | 14 | 0.12 | 9% | 0 | 5 |
| `src_d3bd0f1dae0c` | 17,807 | 13 | 0.73 | 9% | 0 | 2 |
| `src_6e935dbe9826` | 1,116 | 10 | 8.96 | 7% | 0 | 1 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._