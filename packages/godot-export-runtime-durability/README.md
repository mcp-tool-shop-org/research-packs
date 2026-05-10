# godot-export-runtime-durability

**Topic:** What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?

**Frozen:** 2026-05-10 | **research-os version:** 0.1.0 | **Accepted claims:** 276 across 7 sections

---

## Executive summary

Godot narrative-game build durability is a layered release-state problem. Engine/export-template versioning, scene/resource serialization, save-state migration, scripting/runtime contracts, desktop platform requirements, mobile/web gatekeepers, and distribution surfaces all have separate failure and repair boundaries. Successful engine export is not a playable release.

This pack spans seven sections and 276 accepted claims across the full release surface of a Godot narrative game. The evidence base covers the engine's own documentation (Godot Foundation RSTs), platform-vendor documentation (Apple, Microsoft, Google), community integration tooling (GodotSteam, SaveState Lite, ForgeJSONGD), and issue evidence from GitHub searches. It does not cover Steamworks Partner SDK content, Nintendo/Sony/Microsoft console SDKs, or any layer that is JavaScript-rendered without a plain-text alternate — those surfaces are documented as inaccessible in the closed-surface ledger (see `audits/source-diversity-gaps.md`).

**Waiver disclosure:** Two waivers apply to Section 01 (`min_independent_publishers` and `primary_sources_required`) and one applies to Section 03 (`primary_sources_required`). All three are `gate.source_floor` waivers documented in full in the Waivers section below.

---

## Sections

| Section | Accepted claims | Gate | Synthesis eligible |
|---------|-----------------|------|-------------------|
| 01-engine-version-export-template-compat | 34 | warn | yes |
| 03-save-system-player-state-durability | 47 | warn | yes |
| 05-desktop-platform-export-durability | 19 | warn | yes |
| 02-scene-resource-serialization | 55 | warn | yes |
| 04-scripting-runtime-contracts | 48 | warn | yes |
| 06-mobile-web-export-durability | 53 | warn | yes |
| 07-distribution-surface-durability | 20 | warn | yes |

**Totals:** 276 accepted, 0 dispositioned, 0 unresolved contradictions

---

## How to read this pack

This package is part of the [`research-packs`](../../README.md) archive.

- **Lane 1 (synthesis):** You are here. See [`synthesis/final-report.md`](synthesis/final-report.md) for the full citation-clean prose.
- **Lane 2 (evidence):** [`pack/`](pack/) — full frozen ledgers, source cards, excerpts, claim reviews, gate results, and `audits/freeze-receipt.json`.
- **Lane 3 (method):** [`../../docs/`](../../docs/) — artifact contract, how-to-read, source quality notes.

To verify this pack's integrity: `node ../../scripts/verify-pack.mjs .` from this directory.

See [`docs/how-to-read-this.md`](docs/how-to-read-this.md) for pack-specific reading notes.
---

## Operator notes

Godot narrative-game build durability — layered release-state problem across engine/export-template versioning, scene/resource serialization, save-state migration, scripting/runtime contracts, desktop platform requirements, mobile/web gatekeepers, and distribution surfaces. Experiment 3 pack #3 of 3 — closes the Experiment 3 triangle (workflow / protocol / engine).
