# Claim density audit: 05-desktop-platform-export-durability

- **Audit ID:** `cda_1778390182207_05-desktop-platform-export-durability`
- **Audited at:** 2026-05-10T05:16:22.207Z
- **research-os version:** 0.3.2
- **Candidate claims:** 231
- **Sources:** 11
- **Total source words:** 99,492
- **Claims per 1k source words (section):** 2.32
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 10
- **Generic-scope claims (scope mirrors source title):** 23

## Flags (11)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_da88881cf961 contributes 44 of 231 claims (19% of section). |
| `source_dominance` | warn | Source src_e6e0e4cb4ec7 contributes 35 of 231 claims (15% of section). |
| `source_dominance` | warn | Source src_03cb99fe6df9 contributes 31 of 231 claims (13% of section). |
| `high_per_word_density` | warn | Source src_03cb99fe6df9 has 17.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d7289e5beb6d has 9.5 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_c3216b0c8944 has 10.5 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_ef2f01e1f840 has 10.9 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_1ceb96fdb33a has 13.3 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_5b703b620109 has 13.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d4edcfa48733 has 19.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_7d0fca124716 has 10.7 claims per 1k source words — likely over-atomization. |

## Per source (11)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_da88881cf961` | 17,928 | 44 | 2.45 | 19% | 1 | 2 |
| `src_e6e0e4cb4ec7` | 53,944 | 35 | 0.65 | 15% | 0 | 3 |
| `src_03cb99fe6df9` (Godotengine) | 1,756 | 31 | 17.65 | 13% | 6 | 1 |
| `src_2b06a4f43c1e` | 17,618 | 29 | 1.65 | 13% | 2 | 3 |
| `src_d7289e5beb6d` (Microsoft) | 2,750 | 26 | 9.45 | 11% | 0 | 0 |
| `src_c3216b0c8944` (Apple Inc.) | 1,806 | 19 | 10.52 | 8% | 1 | 5 |
| `src_ef2f01e1f840` (Microsoft) | 1,285 | 14 | 10.89 | 6% | 0 | 1 |
| `src_1ceb96fdb33a` (Godotengine) | 750 | 10 | 13.33 | 4% | 0 | 0 |
| `src_5b703b620109` (Godotengine) | 727 | 10 | 13.76 | 4% | 0 | 8 |
| `src_d4edcfa48733` (Apple Inc.) | 365 | 7 | 19.18 | 3% | 0 | 0 |
| `src_7d0fca124716` (Godotengine) | 563 | 6 | 10.66 | 3% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._