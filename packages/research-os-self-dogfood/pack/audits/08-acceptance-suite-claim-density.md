# Claim density audit: 08-acceptance-suite

- **Audit ID:** `cda_1778204033052_08-acceptance-suite`
- **Audited at:** 2026-05-08T01:33:53.052Z
- **research-os version:** 0.1.0
- **Candidate claims:** 201
- **Sources:** 7
- **Total source words:** 98,789
- **Claims per 1k source words (section):** 2.03
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 59
- **Generic-scope claims (scope mirrors source title):** 63

## Flags (4)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_099defe2e6d6 contributes 104 of 201 claims (52% of section). |
| `high_per_word_density` | warn | Source src_099defe2e6d6 has 6.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_642e49ac2548 has 13.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_2ed88e8cb886 has 12.4 claims per 1k source words — likely over-atomization. |

## Per source (7)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_099defe2e6d6` (en.wikipedia.org) | 16,240 | 104 | 6.40 | 52% | 10 | 53 |
| `src_eefec92990cb` (Agile Alliance | Promoting a more effective, humane, and sustainable way of working) | 25,940 | 26 | 1.00 | 13% | 14 | 2 |
| `src_53ee6a9ec24b` (Guru99) | 29,814 | 17 | 0.57 | 8% | 5 | 0 |
| `src_642e49ac2548` (cucumber.io) | 1,222 | 16 | 13.09 | 8% | 11 | 1 |
| `src_ae13d4956c22` (International Software Testing Qualifications Board) | 17,465 | 14 | 0.80 | 7% | 5 | 3 |
| `src_2ed88e8cb886` (martinfowler.com) | 1,045 | 13 | 12.44 | 6% | 9 | 1 |
| `src_4b7a4ad94a3b` (GitHub Docs) | 7,063 | 11 | 1.56 | 5% | 5 | 3 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._