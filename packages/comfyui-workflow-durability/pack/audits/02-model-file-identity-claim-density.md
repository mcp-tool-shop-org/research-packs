# Claim density audit: 02-model-file-identity

- **Audit ID:** `cda_1778300358768_02-model-file-identity`
- **Audited at:** 2026-05-09T04:19:18.768Z
- **research-os version:** 0.1.0
- **Candidate claims:** 162
- **Sources:** 9
- **Total source words:** 994,438
- **Claims per 1k source words (section):** 0.16
- **Weak-scope claims (scope=null, not=null, substantive asserts):** 0
- **Generic-scope claims (scope mirrors source title):** 25

## Flags (3)

| Type | Severity | Message |
|---|---|---|
| `source_dominance` | warn | Source src_e519c32165e4 contributes 37 of 162 claims (23% of section). |
| `source_dominance` | warn | Source src_f4ce9a16c6b4 contributes 30 of 162 claims (19% of section). |
| `high_per_word_density` | warn | Source src_f4ce9a16c6b4 has 7.8 claims per 1k source words — likely over-atomization. |

## Per source (9)

| Source | Words | Claims | Per 1k words | Share | Weak scope | Generic scope |
|---|---:|---:|---:|---:|---:|---:|
| `src_e519c32165e4` | 25,082 | 37 | 1.48 | 23% | 0 | 0 |
| `src_f4ce9a16c6b4` | 3,865 | 30 | 7.76 | 19% | 0 | 11 |
| `src_fcdd7f1c90e9` | 204,525 | 20 | 0.10 | 12% | 0 | 2 |
| `src_c038edbf6251` | 187,749 | 18 | 0.10 | 11% | 0 | 1 |
| `src_07126047391f` | 13,937 | 16 | 1.15 | 10% | 0 | 9 |
| `src_2e0add2bdec7` | 188,208 | 14 | 0.07 | 9% | 0 | 1 |
| `src_6ccf8c48cc5a` | 185,898 | 13 | 0.07 | 8% | 0 | 0 |
| `src_e1e83dbebd28` | 181,103 | 11 | 0.06 | 7% | 0 | 1 |
| `src_d44182697e02` | 4,071 | 3 | 0.74 | 2% | 0 | 0 |

## Near-duplicate clusters (>= 3 members) — 0

_No near-duplicate clusters detected._

---

_This audit is read-only. The reviewer (Link 7) decides which claims are accepted, rejected, or flagged for collapse via `claim_overproduction` findings._