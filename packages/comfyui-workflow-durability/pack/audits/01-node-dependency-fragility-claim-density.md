# Claim density audit: 01-node-dependency-fragility

- **Audit ID:** `cda_1778296648480_01-node-dependency-fragility`
- **Audited at:** 2026-05-09T03:17:28.480Z
- **research-os version:** 0.1.0
- **Candidate claims:** 169
- **Sources:** 9
- **Total source words:** 975,453
- **Claims per 1k source words (section):** 0.17
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 9
- **Generic-scope claims (scope mirrors source title):** 45

## Flags (3)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_e519c32165e4 contributes 38 of 169 claims (22% of section). |
| `source_dominance` | warn | Source src_118111ce7028 contributes 30 of 169 claims (18% of section). |
| `high_per_word_density` | warn | Source src_118111ce7028 has 9.7 claims per 1k source words — likely over-atomization. |

## Per source (9)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_e519c32165e4` | 25,082 | 38 | 1.52 | 22% | 0 | 5 |
| `src_118111ce7028` | 3,086 | 30 | 9.72 | 18% | 0 | 19 |
| `src_ed31f644833c` | 10,835 | 27 | 2.49 | 16% | 4 | 3 |
| `src_55456d4dedfa` (docs.comfy.org) | 191,240 | 20 | 0.10 | 12% | 0 | 8 |
| `src_aede2f10d470` (docs.comfy.org) | 194,116 | 19 | 0.10 | 11% | 0 | 3 |
| `src_bd638b8de92f` (docs.comfy.org) | 191,641 | 12 | 0.06 | 7% | 0 | 0 |
| `src_f9b159fab5ef` (docs.comfy.org) | 179,781 | 11 | 0.06 | 7% | 0 | 6 |
| `src_2c5240f22e27` | 4,150 | 6 | 1.45 | 4% | 5 | 0 |
| `src_df4ad7d6f9c0` (docs.comfy.org) | 175,522 | 6 | 0.03 | 4% | 0 | 1 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._