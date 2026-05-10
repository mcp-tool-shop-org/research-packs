# Synthesis readiness

> Pack audit aggregates existing research truth. It does not create new truth, resolve failures, or hide section-level evidence. The canonical artifacts (claims, source-cards, fetch-log, gate/review JSON) are the source of authority — these rollups are pointers.

**Pack verdict:** [READY FOR SYNTHESIS] ready_for_synthesis
**Synthesis allowed:** yes
**Cowork handoff mode:** synthesis_ready
**Workspace allowed:** yes

## Section detail

| Section | Status | Gate | Eligible | Candidates | Accepted | Repair | Rejected | Blocking reasons |
|---|---|---|---|---|---|---|---|---|
| `01-engine-version-export-template-compat` | gated | warn | yes | 150 | 34 | 6 | 0 | _(none)_ |
| `03-save-system-player-state-durability` | gated | warn | yes | 323 | 47 | 29 | 0 | _(none)_ |
| `05-desktop-platform-export-durability` | gated | warn | yes | 231 | 19 | 35 | 2 | _(none)_ |
| `02-scene-resource-serialization` | gated | warn | yes | 402 | 55 | 27 | 0 | _(none)_ |
| `04-scripting-runtime-contracts` | gated | warn | yes | 382 | 48 | 28 | 0 | _(none)_ |
| `06-mobile-web-export-durability` | gated | warn | yes | 402 | 53 | 34 | 0 | _(none)_ |
| `07-distribution-surface-durability` | gated | warn | yes | 113 | 20 | 8 | 0 | _(none)_ |

## Recommended next actions

1. Run `research-os synth workspace` to lay out the synthesis area.
2. Run `research-os index build --all` to refresh the queryable index.
