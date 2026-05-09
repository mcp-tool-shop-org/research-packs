# Claim density audit: 04-gates-and-waivers

- **Audit ID:** `cda_1778187340541_04-gates-and-waivers`
- **Audited at:** 2026-05-07T20:55:40.541Z
- **research-os version:** 0.1.0
- **Candidate claims:** 131
- **Sources:** 6
- **Total source words:** 25,109
- **Claims per 1k source words (section):** 5.22
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 5
- **Generic-scope claims (scope mirrors source title):** 15

## Flags (5)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_55f4bfa87f54 contributes 60 of 131 claims (46% of section). |
| `source_dominance` | warn | Source src_f0fe25b20f29 contributes 44 of 131 claims (34% of section). |
| `high_per_word_density` | warn | Source src_55f4bfa87f54 has 7.0 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_f0fe25b20f29 has 6.2 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_09a48e752e9b has 22.4 claims per 1k source words — likely over-atomization. |

## Per source (6)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_55f4bfa87f54` (pmc.ncbi.nlm.nih.gov) | 8,540 | 60 | 7.03 | 46% | 1 | 9 |
| `src_f0fe25b20f29` (pmc.ncbi.nlm.nih.gov) | 7,042 | 44 | 6.25 | 34% | 0 | 1 |
| `src_fb48d4730a5c` (en.wikipedia.org) | 4,865 | 15 | 3.08 | 11% | 0 | 3 |
| `src_09a48e752e9b` (help.puppet.com) | 268 | 6 | 22.39 | 5% | 4 | 0 |
| `src_bbd08b91cbb6` (pmc.ncbi.nlm.nih.gov) | 1,656 | 3 | 1.81 | 2% | 0 | 0 |
| `src_d2cd935fb884` (ieeexplore.ieee.org) | 2,738 | 3 | 1.10 | 2% | 0 | 2 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._