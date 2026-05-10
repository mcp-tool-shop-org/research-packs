# Claim density audit: 04-issuer-controls-and-immutability

- **Audit ID:** `cda_1778355813559_04-issuer-controls-and-immutability`
- **Audited at:** 2026-05-09T19:43:33.559Z
- **research-os version:** 0.3.1
- **Candidate claims:** 170
- **Sources:** 13
- **Total source words:** 537,640
- **Claims per 1k source words (section):** 0.32
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 10
- **Generic-scope claims (scope mirrors source title):** 15

## Flags (2)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_12ac7f4c315b contributes 41 of 170 claims (24% of section). |
| `high_per_word_density` | warn | Source src_eae6b2d1d42d has 10.7 claims per 1k source words — likely over-atomization. |

## Per source (13)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_12ac7f4c315b` | 12,994 | 41 | 3.16 | 24% | 5 | 0 |
| `src_097142ab08d3` | 49,112 | 21 | 0.43 | 12% | 0 | 11 |
| `src_9505395adfe8` | 48,324 | 21 | 0.43 | 12% | 0 | 0 |
| `src_eae6b2d1d42d` | 1,401 | 15 | 10.71 | 9% | 0 | 3 |
| `src_517d67dc1224` | 48,022 | 11 | 0.23 | 6% | 0 | 0 |
| `src_90368c8bfc17` | 48,035 | 11 | 0.23 | 6% | 0 | 0 |
| `src_d0882a19791f` | 47,755 | 9 | 0.19 | 5% | 0 | 0 |
| `src_319355bfb19d` | 46,258 | 8 | 0.17 | 5% | 0 | 0 |
| `src_92f5c74d9bda` | 47,330 | 8 | 0.17 | 5% | 0 | 0 |
| `src_e98d1069b3a8` | 47,325 | 8 | 0.17 | 5% | 0 | 0 |
| `src_4727592a5328` | 47,063 | 6 | 0.13 | 4% | 0 | 1 |
| `src_ff9fbb4f8527` | 47,046 | 6 | 0.13 | 4% | 0 | 0 |
| `src_0654c94c7a98` | 46,975 | 5 | 0.11 | 3% | 5 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._