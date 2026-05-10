# Claim density audit: 07-metadata-and-off-chain-durability

- **Audit ID:** `cda_1778366283035_07-metadata-and-off-chain-durability`
- **Audited at:** 2026-05-09T22:38:03.035Z
- **research-os version:** 0.3.1
- **Candidate claims:** 264
- **Sources:** 11
- **Total source words:** 332,403
- **Claims per 1k source words (section):** 0.79
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 91
- **Generic-scope claims (scope mirrors source title):** 12

## Flags (9)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_313e0214db27 contributes 90 of 264 claims (34% of section). |
| `source_dominance` | warn | Source src_c24e3cf6d930 contributes 42 of 264 claims (16% of section). |
| `source_dominance` | warn | Source src_d6c57c6845e6 contributes 40 of 264 claims (15% of section). |
| `source_dominance` | warn | Source src_2185c0910a10 contributes 35 of 264 claims (13% of section). |
| `high_per_word_density` | warn | Source src_313e0214db27 has 7.6 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_d6c57c6845e6 has 16.8 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_0b01dd18d515 has 9.1 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_37c1413248e9 has 8.7 claims per 1k source words — likely over-atomization. |
| `high_per_word_density` | warn | Source src_48463ecf8302 has 5.0 claims per 1k source words — likely over-atomization. |

## Per source (11)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_313e0214db27` | 11,891 | 90 | 7.57 | 34% | 51 | 6 |
| `src_c24e3cf6d930` | 49,779 | 42 | 0.84 | 16% | 0 | 6 |
| `src_d6c57c6845e6` (IPFS Docs) | 2,381 | 40 | 16.80 | 15% | 11 | 0 |
| `src_2185c0910a10` | 102,746 | 35 | 0.34 | 13% | 13 | 0 |
| `src_517d67dc1224` | 48,022 | 13 | 0.27 | 5% | 4 | 0 |
| `src_0b01dd18d515` | 1,211 | 11 | 9.08 | 4% | 5 | 0 |
| `src_37c1413248e9` (IPFS) | 1,146 | 10 | 8.73 | 4% | 0 | 0 |
| `src_accb45067034` | 23,307 | 10 | 0.43 | 4% | 1 | 0 |
| `src_3cc91a11ac53` | 44,474 | 6 | 0.13 | 2% | 1 | 0 |
| `src_ff9fbb4f8527` | 47,046 | 5 | 0.11 | 2% | 5 | 0 |
| `src_48463ecf8302` | 400 | 2 | 5.00 | 1% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._