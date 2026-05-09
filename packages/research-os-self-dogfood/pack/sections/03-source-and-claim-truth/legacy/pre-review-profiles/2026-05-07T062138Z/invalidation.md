# Review invalidation receipt: 03-source-and-claim-truth

- **Receipt ID:** `invr_1778134898025_03-source-and-claim-truth`
- **Contract label:** pre-review-profiles
- **Invalidated at:** 2026-05-07T06:21:38.025Z
- **research-os version:** 0.1.0

## Reason

reviewer experiments predated profile isolation; canonical state mixed Hermes and Qwen runs

## Archived artifacts (4)

| From | To |
|---|---|
| `audits/03-source-and-claim-truth-review.json` | `sections/03-source-and-claim-truth/legacy/pre-review-profiles/2026-05-07T062138Z/audits/03-source-and-claim-truth-review.json` |
| `audits/03-source-and-claim-truth-review.md` | `sections/03-source-and-claim-truth/legacy/pre-review-profiles/2026-05-07T062138Z/audits/03-source-and-claim-truth-review.md` |
| `audits/03-source-and-claim-truth-findings.jsonl` | `sections/03-source-and-claim-truth/legacy/pre-review-profiles/2026-05-07T062138Z/audits/03-source-and-claim-truth-findings.jsonl` |
| `sections/03-source-and-claim-truth/claim-reviews.jsonl` | `sections/03-source-and-claim-truth/legacy/pre-review-profiles/2026-05-07T062138Z/sections/03-source-and-claim-truth/claim-reviews.jsonl` |

---

_The reviewer profile data under `sections/<id>/reviews/<profile>/` is unaffected; this receipt only invalidates canonical (active) review state. Promote a profile via `research-os review-promote` to set new canonical truth._