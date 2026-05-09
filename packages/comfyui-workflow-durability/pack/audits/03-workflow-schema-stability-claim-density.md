# Claim density audit: 03-workflow-schema-stability

- **Audit ID:** `cda_1778302389173_03-workflow-schema-stability`
- **Audited at:** 2026-05-09T04:53:09.173Z
- **research-os version:** 0.1.0
- **Candidate claims:** 198
- **Sources:** 11
- **Total source words:** 1,905,626
- **Claims per 1k source words (section):** 0.10
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 42
- **Generic-scope claims (scope mirrors source title):** 18

## Flags (4)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | block | Source src_26117b36a866 contributes 63 of 198 claims (32% of section). |
| `source_dominance` | warn | Source src_484224037767 contributes 35 of 198 claims (18% of section). |
| `source_dominance` | warn | Source src_f4ce9a16c6b4 contributes 33 of 198 claims (17% of section). |
| `high_per_word_density` | warn | Source src_f4ce9a16c6b4 has 8.5 claims per 1k source words — likely over-atomization. |

## Per source (11)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_26117b36a866` | 35,370 | 63 | 1.78 | 32% | 15 | 2 |
| `src_484224037767` | 14,667 | 35 | 2.39 | 18% | 16 | 0 |
| `src_f4ce9a16c6b4` | 3,865 | 33 | 8.54 | 17% | 4 | 0 |
| `src_5941285ed842` (docs.comfy.org) | 346,062 | 24 | 0.07 | 12% | 0 | 5 |
| `src_72d8ae653457` (docs.comfy.org) | 282,377 | 13 | 0.05 | 7% | 0 | 3 |
| `src_07437ed8d167` (docs.comfy.org) | 176,464 | 7 | 0.04 | 4% | 7 | 0 |
| `src_0a3149c031c5` (docs.comfy.org) | 181,084 | 6 | 0.03 | 3% | 0 | 0 |
| `src_967446798047` (docs.comfy.org) | 181,697 | 5 | 0.03 | 3% | 0 | 2 |
| `src_981216eba718` (docs.comfy.org) | 235,363 | 5 | 0.02 | 3% | 0 | 3 |
| `src_7c8ae5fe342a` (docs.comfy.org) | 228,055 | 4 | 0.02 | 2% | 0 | 0 |
| `src_049006574d3f` (docs.comfy.org) | 220,622 | 3 | 0.01 | 2% | 0 | 3 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._