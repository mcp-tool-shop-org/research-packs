# Pack Audit: What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?

**Pack ID:** `000063d75a07`
**Verdict:** [READY FOR SYNTHESIS] ready_for_synthesis
**Synthesis allowed:** yes
**Generated:** 2026-05-09T08:39:38.514Z
**Cowork handoff mode:** synthesis_ready
**Workspace allowed:** yes

> Pack audit aggregates existing research truth. It does not create new truth, resolve failures, or hide section-level evidence. The canonical artifacts (claims, source-cards, fetch-log, gate/review JSON) are the source of authority — these rollups are pointers.

## Counts at a glance

- **Sections:** 8 total — 8 ready, 0 in repair, 0 blocked, 0 without gate, 0 without review
- **Claims:** 1625 total (1625 candidate; 302 accepted, 182 repair, 2 rejected, 1139 no_review, 0 orphan)
- **Sources:** 59 total (2 primary, 20 secondary, 28 docs, 3 forum, 0 benchmark, 6 unknown), 3 publishers, 6 failed fetches; 8/8 sections have at least one source
- **Contradictions:** 1043 total (0 unresolved, 0 high/blocking, 0 reconciled, 0 preserved_deliberately, 0 rejected); 7 sections have an empty contradiction ledger — *empty is not proof of completeness, only that the configured detector found nothing*
- **Review:** 8/8 sections have had `research-os review` run; 334 blocking findings recorded
- **Waivers:** 8 total (0 invalid)

## Section synthesis-readiness

| Section | Status | Gate | Synthesis-eligible | Candidates | Accepted | Repair | Rejected |
|---|---|---|---|---|---|---|---|
| `01-node-dependency-fragility` | frozen | warn | yes | 169 | 40 | 13 | 0 |
| `02-model-file-identity` | frozen | warn | yes | 162 | 29 | 32 | 0 |
| `03-workflow-schema-stability` | frozen | warn | yes | 198 | 39 | 16 | 0 |
| `04-environment-reproducibility` | frozen | warn | yes | 284 | 74 | 11 | 1 |
| `05-community-distribution-patterns` | frozen | warn | yes | 108 | 15 | 17 | 0 |
| `06-comfyui-core-versioning` | frozen | warn | yes | 377 | 33 | 51 | 1 |
| `07-existing-control-plane-attempts` | frozen | warn | yes | 140 | 21 | 15 | 0 |
| `08-failure-taxonomy` | frozen | warn | yes | 187 | 51 | 27 | 0 |

## Audit files (canonical pointers)

- `audits/pack-audit.json`
- `audits/pack-audit.md`
- `audits/orphan-claims.json`
- `audits/orphan-claims.md`
- `audits/stale-sources.json`
- `audits/stale-sources.md`
- `audits/weak-sources.json`
- `audits/weak-sources.md`
- `audits/unresolved-contradictions.json`
- `audits/unresolved-contradictions.md`
- `audits/scope-widening-risks.json`
- `audits/scope-widening-risks.md`
- `audits/source-diversity-gaps.json`
- `audits/source-diversity-gaps.md`
- `audits/synthesis-readiness.json`
- `audits/synthesis-readiness.md`

## Recommended next actions

1. Run `research-os synth workspace` to lay out the synthesis area.
2. Run `research-os index build --all` to refresh the queryable index.
