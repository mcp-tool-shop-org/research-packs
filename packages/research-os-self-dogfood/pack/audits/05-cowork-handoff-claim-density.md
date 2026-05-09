# Claim density audit: 05-cowork-handoff

- **Audit ID:** `cda_1778208897914_05-cowork-handoff`
- **Audited at:** 2026-05-08T02:54:57.914Z
- **research-os version:** 0.1.0
- **Candidate claims:** 548
- **Sources:** 13
- **Total source words:** 1,130,493
- **Claims per 1k source words (section):** 0.48
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 33
- **Generic-scope claims (scope mirrors source title):** 210

## Flags (11)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_5be2e21d45c9 contributes 162 of 548 claims (30% of section). |
| `source_dominance` | block | Source src_c8975a95117b contributes 81 of 548 claims (15% of section). |
| `source_dominance` | block | Source src_9a7d4217c64c contributes 73 of 548 claims (13% of section). |
| `source_dominance` | warn | Source src_486f1e6121c8 contributes 49 of 548 claims (9% of section). |
| `source_dominance` | warn | Source src_9686dc1633cd contributes 43 of 548 claims (8% of section). |
| `source_dominance` | warn | Source src_96b9a35307c0 contributes 34 of 548 claims (6% of section). |
| `high_per_word_density` | warn | Source src_59b5d7b9e7e4 has 15.6 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_67b29d913d85 has 14.4 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_2fff6e91c56c has 12.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_b9c427878132 has 7.2 claims per 1k source words — likely over-atomization. |
| `large_near_duplicate_cluster` | warn | Cluster of 3 claims share a normalised assertion: "arXiv is committed to the values of openness, community, excellence, and user data privacy.". |

## Per source (13)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_5be2e21d45c9` (code.claude.com) | 297,622 | 162 | 0.54 | 30% | 7 | 101 |
| `src_c8975a95117b` (code.claude.com) | 169,680 | 81 | 0.48 | 15% | 10 | 41 |
| `src_9a7d4217c64c` (code.claude.com) | 151,705 | 73 | 0.48 | 13% | 0 | 33 |
| `src_486f1e6121c8` (code.claude.com) | 150,637 | 49 | 0.33 | 9% | 7 | 14 |
| `src_9686dc1633cd` (code.claude.com) | 113,446 | 43 | 0.38 | 8% | 2 | 6 |
| `src_96b9a35307c0` (code.claude.com) | 107,414 | 34 | 0.32 | 6% | 5 | 6 |
| `src_126e07cf0d68` (www.anthropic.com) | 14,320 | 27 | 1.89 | 5% | 0 | 7 |
| `src_ea1a84785166` | 22,100 | 23 | 1.04 | 4% | 0 | 0 |
| `src_9a532b2b74e5` (code.claude.com) | 100,382 | 16 | 0.16 | 3% | 0 | 2 |
| `src_59b5d7b9e7e4` | 832 | 13 | 15.63 | 2% | 2 | 0 |
| `src_67b29d913d85` | 833 | 12 | 14.41 | 2% | 0 | 0 |
| `src_2fff6e91c56c` | 823 | 10 | 12.15 | 2% | 0 | 0 |
| `src_b9c427878132` | 699 | 5 | 7.15 | 1% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 1

Each row is a cluster of claims whose normalised assertions collapse to the same key.

| Members | Representative assertion |
|---:|---|
| 3 | arXiv is committed to the values of openness, community, excellence, and user data privacy. |

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._