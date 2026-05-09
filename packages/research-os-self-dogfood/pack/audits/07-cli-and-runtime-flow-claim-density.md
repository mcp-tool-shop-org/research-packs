# Claim density audit: 07-cli-and-runtime-flow

- **Audit ID:** `cda_1778186510497_07-cli-and-runtime-flow`
- **Audited at:** 2026-05-07T20:41:50.497Z
- **research-os version:** 0.1.0
- **Candidate claims:** 175
- **Sources:** 6
- **Total source words:** 106,258
- **Claims per 1k source words (section):** 1.65
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 33
- **Generic-scope claims (scope mirrors source title):** 38

## Flags (6)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_458d9788c68d contributes 85 of 175 claims (49% of section). |
| `source_dominance` | block | Source src_0b75376a48e4 contributes 59 of 175 claims (34% of section). |
| `high_per_word_density` | warn | Source src_458d9788c68d has 7.5 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_27eaf34f91a3 has 56.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_de50fc93ad72 has 14.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_65308ebae4e9 has 2000.0 claims per 1k source words — likely over-atomization. |

## Per source (6)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_458d9788c68d` (clig.dev) | 11,329 | 85 | 7.50 | 49% | 12 | 22 |
| `src_0b75376a48e4` (GitHub) | 50,063 | 59 | 1.18 | 34% | 8 | 16 |
| `src_27eaf34f91a3` (sourceware.org) | 195 | 11 | 56.41 | 6% | 5 | 0 |
| `src_de50fc93ad72` (12factor.net) | 682 | 10 | 14.66 | 6% | 5 | 0 |
| `src_96d4bf47e20b` (nodejs.org) | 43,988 | 8 | 0.18 | 5% | 3 | 0 |
| `src_65308ebae4e9` (docs.npmjs.com) | 1 | 2 | 2000.00 | 1% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._