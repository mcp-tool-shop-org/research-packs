# Synthesis readiness

> Pack audit aggregates existing research truth. It does not create new truth, resolve failures, or hide section-level evidence. The canonical artifacts (claims, source-cards, fetch-log, gate/review JSON) are the source of authority — these rollups are pointers.

**Pack verdict:** [READY FOR SYNTHESIS] ready_for_synthesis
**Synthesis allowed:** yes
**Cowork handoff mode:** synthesis_ready
**Workspace allowed:** yes

## Section detail

| Section | Status | Gate | Eligible | Candidates | Accepted | Repair | Rejected | Blocking reasons |
|---|---|---|---|---|---|---|---|---|
| `01-node-dependency-fragility` | frozen | warn | yes | 169 | 40 | 13 | 0 | _(none)_ |
| `02-model-file-identity` | frozen | warn | yes | 162 | 29 | 32 | 0 | _(none)_ |
| `03-workflow-schema-stability` | frozen | warn | yes | 198 | 39 | 16 | 0 | _(none)_ |
| `04-environment-reproducibility` | frozen | warn | yes | 284 | 74 | 11 | 1 | _(none)_ |
| `05-community-distribution-patterns` | frozen | warn | yes | 108 | 15 | 17 | 0 | _(none)_ |
| `06-comfyui-core-versioning` | frozen | warn | yes | 377 | 33 | 51 | 1 | _(none)_ |
| `07-existing-control-plane-attempts` | frozen | warn | yes | 140 | 21 | 15 | 0 | _(none)_ |
| `08-failure-taxonomy` | frozen | warn | yes | 187 | 51 | 27 | 0 | _(none)_ |

## Recommended next actions

1. Run `research-os synth workspace` to lay out the synthesis area.
2. Run `research-os index build --all` to refresh the queryable index.
