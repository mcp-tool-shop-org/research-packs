# Freeze Receipt: What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?

**Verdict:** [FROZEN]
**Pack ID:** `00002495e7b3`
**Frozen at:** 2026-05-10T09:46:27.052Z

> Freeze locks completed research truth. Every artifact below carries a sha256 fingerprint. The pack is now immutable evidence; any further mutation invalidates the receipt.

## Counts

- **Sources:** 70
- **Claims:** 272
- **Contradictions:** 0
- **Review findings:** 0
- **Gate results:** 7

## Sections

| Section | Status | Accepted claims | Sources | Contradictions |
|---|---|---|---|---|
| `01-engine-version-export-template-compat` | frozen | 34 | 0 | 0 |
| `03-save-system-player-state-durability` | frozen | 47 | 0 | 0 |
| `05-desktop-platform-export-durability` | frozen | 19 | 0 | 0 |
| `02-scene-resource-serialization` | frozen | 55 | 0 | 0 |
| `04-scripting-runtime-contracts` | frozen | 48 | 0 | 0 |
| `06-mobile-web-export-durability` | frozen | 53 | 0 | 0 |
| `07-distribution-surface-durability` | frozen | 20 | 0 | 0 |

## Citation coverage

- **Accepted claims:** 272
- **Cited in synthesis:** 114
- **Uncited accepted (informational):** 159

Uncited accepted claim_ids (preserved for future synthesis):
- `clm_03cb99fe6df9_ollama_intern_22`
- `clm_04c541af2502_ollama_intern_12`
- `clm_04c541af2502_ollama_intern_13`
- `clm_04c541af2502_ollama_intern_22`
- `clm_04c541af2502_ollama_intern_23`
- `clm_04c541af2502_ollama_intern_3`
- `clm_04c541af2502_ollama_intern_6`
- `clm_083cda9d9328_ollama_intern_11`
- `clm_083cda9d9328_ollama_intern_21`
- `clm_083cda9d9328_ollama_intern_22`
- `clm_0974a54becd4_ollama_intern_10`
- `clm_0974a54becd4_ollama_intern_12`
- `clm_0b13e026c1cc_ollama_intern_10`
- `clm_0b13e026c1cc_ollama_intern_17`
- `clm_0b13e026c1cc_ollama_intern_5`
- `clm_0b13e026c1cc_ollama_intern_6`
- `clm_0b13e026c1cc_ollama_intern_8`
- `clm_169fec56d321_ollama_intern_15`
- `clm_169fec56d321_ollama_intern_16`
- `clm_169fec56d321_ollama_intern_18`
- `clm_169fec56d321_ollama_intern_20`
- `clm_169fec56d321_ollama_intern_22`
- `clm_169fec56d321_ollama_intern_33`
- `clm_1e4fa1dde3af_ollama_intern_1`
- `clm_1e4fa1dde3af_ollama_intern_12`
- `clm_1e4fa1dde3af_ollama_intern_13`
- `clm_1e4fa1dde3af_ollama_intern_2`
- `clm_1e4fa1dde3af_ollama_intern_3`
- `clm_1e4fa1dde3af_ollama_intern_5`
- `clm_1e4fa1dde3af_ollama_intern_7`
- `clm_24107f739f88_ollama_intern_5`
- `clm_24107f739f88_ollama_intern_6`
- `clm_24107f739f88_ollama_intern_9`
- `clm_33eded38b390_ollama_intern_1`
- `clm_33eded38b390_ollama_intern_13`
- `clm_33eded38b390_ollama_intern_15`
- `clm_33eded38b390_ollama_intern_16`
- `clm_33eded38b390_ollama_intern_19`
- `clm_33eded38b390_ollama_intern_6`
- `clm_3bf41f24d47a_ollama_intern_1`
- `clm_3bf41f24d47a_ollama_intern_14`
- `clm_3bf41f24d47a_ollama_intern_26`
- `clm_3bf41f24d47a_ollama_intern_6`
- `clm_4c6c14f4f6fa_ollama_intern_1`
- `clm_4c6c14f4f6fa_ollama_intern_3`
- `clm_55a63071c9c1_ollama_intern_2`
- `clm_55a63071c9c1_ollama_intern_3`
- `clm_5670dbff3e4d_ollama_intern_11`
- `clm_5670dbff3e4d_ollama_intern_14`
- `clm_5670dbff3e4d_ollama_intern_16`
- `clm_5670dbff3e4d_ollama_intern_17`
- `clm_5670dbff3e4d_ollama_intern_2`
- `clm_5670dbff3e4d_ollama_intern_5`
- `clm_5670dbff3e4d_ollama_intern_6`
- `clm_5670dbff3e4d_ollama_intern_9`
- `clm_5fda19aa5cd8_ollama_intern_12`
- `clm_5fda19aa5cd8_ollama_intern_13`
- `clm_5fda19aa5cd8_ollama_intern_15`
- `clm_5fda19aa5cd8_ollama_intern_16`
- `clm_68be97293369_ollama_intern_32`
- `clm_6e935dbe9826_ollama_intern_1`
- `clm_6f54a167d232_ollama_intern_1`
- `clm_6f54a167d232_ollama_intern_11`
- `clm_6f54a167d232_ollama_intern_5`
- `clm_71469ccfe316_ollama_intern_27`
- `clm_71469ccfe316_ollama_intern_28`
- `clm_78aaa13e8387_ollama_intern_15`
- `clm_78aaa13e8387_ollama_intern_8`
- `clm_7d03db002fc2_ollama_intern_11`
- `clm_7d03db002fc2_ollama_intern_7`
- `clm_7d03db002fc2_ollama_intern_8`
- `clm_7e04a97ea278_ollama_intern_2`
- `clm_7f5634860b7d_ollama_intern_30`
- `clm_943086ae5d37_ollama_intern_1`
- `clm_943086ae5d37_ollama_intern_2`
- `clm_943086ae5d37_ollama_intern_3`
- `clm_943086ae5d37_ollama_intern_4`
- `clm_943086ae5d37_ollama_intern_5`
- `clm_a6a330af5a09_ollama_intern_8`
- `clm_a9fd72b46944_ollama_intern_10`
- `clm_a9fd72b46944_ollama_intern_6`
- `clm_ad0801f16070_ollama_intern_24`
- `clm_b777c089d810_ollama_intern_37`
- `clm_ba5aaca1a207_ollama_intern_104`
- `clm_ba5aaca1a207_ollama_intern_111`
- `clm_ba5aaca1a207_ollama_intern_115`
- `clm_ba5aaca1a207_ollama_intern_120`
- `clm_ba5aaca1a207_ollama_intern_121`
- `clm_bc58f284031b_ollama_intern_1`
- `clm_bc58f284031b_ollama_intern_10`
- `clm_bc58f284031b_ollama_intern_11`
- `clm_bc58f284031b_ollama_intern_3`
- `clm_c1cc3cb1f943_ollama_intern_1`
- `clm_c1cc3cb1f943_ollama_intern_10`
- `clm_c1cc3cb1f943_ollama_intern_3`
- `clm_c1cc3cb1f943_ollama_intern_4`
- `clm_c1cc3cb1f943_ollama_intern_8`
- `clm_c1cc3cb1f943_ollama_intern_9`
- `clm_c50580a705c4_ollama_intern_12`
- `clm_c50580a705c4_ollama_intern_14`
- `clm_c50580a705c4_ollama_intern_4`
- `clm_ce610c7a7992_ollama_intern_8`
- `clm_cfb7cbc09d44_ollama_intern_1`
- `clm_cfb7cbc09d44_ollama_intern_15`
- `clm_cfb7cbc09d44_ollama_intern_16`
- `clm_cfb7cbc09d44_ollama_intern_2`
- `clm_cfb7cbc09d44_ollama_intern_3`
- `clm_cfb7cbc09d44_ollama_intern_5`
- `clm_cfb7cbc09d44_ollama_intern_6`
- `clm_cfb7cbc09d44_ollama_intern_7`
- `clm_cfb7cbc09d44_ollama_intern_8`
- `clm_d02146dfcea5_ollama_intern_3`
- `clm_d02146dfcea5_ollama_intern_8`
- `clm_d49f293c82bf_ollama_intern_10`
- `clm_d49f293c82bf_ollama_intern_5`
- `clm_d49f293c82bf_ollama_intern_6`
- `clm_d49f293c82bf_ollama_intern_8`
- `clm_d5da902c1965_ollama_intern_5`
- `clm_d63ce314a50f_ollama_intern_1`
- `clm_d63ce314a50f_ollama_intern_24`
- `clm_d63ce314a50f_ollama_intern_25`
- `clm_d63ce314a50f_ollama_intern_30`
- `clm_d63ce314a50f_ollama_intern_5`
- `clm_d7289e5beb6d_ollama_intern_15`
- `clm_d7289e5beb6d_ollama_intern_16`
- `clm_d7289e5beb6d_ollama_intern_17`
- `clm_d8935f3b0347_ollama_intern_133`
- `clm_d8935f3b0347_ollama_intern_135`
- `clm_d8935f3b0347_ollama_intern_172`
- `clm_d8935f3b0347_ollama_intern_173`
- `clm_d8935f3b0347_ollama_intern_184`
- `clm_d8935f3b0347_ollama_intern_185`
- `clm_d8935f3b0347_ollama_intern_186`
- `clm_d8935f3b0347_ollama_intern_188`
- `clm_d8935f3b0347_ollama_intern_190`
- `clm_e3948fcd1578_ollama_intern_25`
- `clm_e3948fcd1578_ollama_intern_32`
- `clm_ec39871fb14e_ollama_intern_14`
- `clm_ec39871fb14e_ollama_intern_17`
- `clm_ec39871fb14e_ollama_intern_5`
- `clm_ec39871fb14e_ollama_intern_52`
- `clm_ec39871fb14e_ollama_intern_68`
- `clm_ec39871fb14e_ollama_intern_78`
- `clm_ef84790b4914_ollama_intern_12`
- `clm_ef84790b4914_ollama_intern_13`
- `clm_ef84790b4914_ollama_intern_14`
- `clm_ef84790b4914_ollama_intern_15`
- `clm_ef84790b4914_ollama_intern_22`
- `clm_ef84790b4914_ollama_intern_4`
- `clm_ef84790b4914_ollama_intern_5`
- `clm_f6badbefe774_ollama_intern_1`
- `clm_f6badbefe774_ollama_intern_5`
- `clm_f826c053d744_ollama_intern_1`
- `clm_f826c053d744_ollama_intern_10`
- `clm_f826c053d744_ollama_intern_12`
- `clm_f826c053d744_ollama_intern_13`
- `clm_f826c053d744_ollama_intern_15`
- `clm_f826c053d744_ollama_intern_2`
- `clm_f826c053d744_ollama_intern_3`

## Unresolved contradictions disclosed

_None._

## Waivers disclosed

- **source_floor.01-engine-version-export-template-compat.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 01 documents Godot engine version semantics, export template
versioning, and the Godot 3.x to 4.x compatibility boundary from canonical
first-party sources. The authoritative source of truth for these behaviors
is structurally concentrated in Godot Foundation documentation and the
godotengine/godot release record. No independent third-party publisher can
be the ground-truth authority for how Godot's own engine versions and
export templates behave — third-party sources can only interpret or relay
Foundation-published behavior. The source_cluster_monopoly finding
(observed 2026-05-10 during review pass) cascaded needs_source_repair
to all 40 triaged claims due to single-publisher sourcing, which is the
structural incompatibility this waiver is designed for.

  - Compensating: Sources span multiple canonical artifact types: official tutorial RST (exporting_projects, feature_tags, exporting_pcks), migration guide RST (upgrading_to_godot_4), policy RST (release_policy), GitHub API release JSON, and GitHub Search API issue threads.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim quality signals (scope_widening, source_quality_problem, missing_not_constraint) continue to apply normally.
  - Compensating: Section synthesis must disclose the single-foundation source concentration and its implications for claim independence.
  - Compensating: Publisher diversity for later sections (03, 05) is expected without waivers; Section 01 waiver is section-scoped, not pack-wide.
- **source_floor.01-engine-version-export-template-compat.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: For canonical-engine sections, official Godot Foundation tutorial and
migration RST files are the primary authoritative evidence for engine
behavior — there is no separate specification document for Godot engine
version compatibility semantics. The extractor types these files as
source_type=docs (tutorial/how-to format) rather than primary (spec/
standards format). Only the releases JSON is typed primary. The gate
requires 2 primary-typed sources but the content is structurally
primary-equivalent: official first-party docs from the canonical
godotengine/godot-docs repo are the authoritative source for how the
engine behaves across versions. Adding a third-party primary source
would not add truth; it would add interpretation on top of foundation docs.

  - Compensating: 5 of 8 sources are raw RST files from the official godotengine/godot-docs repo — first-party content authored and maintained by the Godot Foundation.
  - Compensating: The releases JSON endpoint (typed primary) provides structured release metadata confirming version history.
  - Compensating: GitHub Search API issues provide corroborating real-world evidence of export template compatibility failures from user-reported observations.
  - Compensating: All claims are span-grounded against literal excerpt text from these sources; the docs-type classification affects the gate check, not evidence quality.
- **source_floor.03-save-system-player-state-durability.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 03 uses Godot Foundation class-reference RST (class_fileaccess.rst,
class_configfile.rst, class_json.rst, class_resourcesaver.rst) and tutorial
RST (saving_games.rst) as the primary authoritative evidence for save API
behavior. The extractor types ALL godot-docs RST files as source_type=docs —
both tutorial RST and auto-generated class-reference RST (generated from
engine XML via make_rst.py). This is the F-40 finding: no RST file in the
godot-docs repo types as primary, regardless of whether it is a tutorial or
a class API reference. GitHub Search API results type as forum. Three
independent developer READMEs (youssof20, EiTaNBaRiBoA, MrRobinOfficial)
type as secondary. The gate requires 2 primary-typed sources; Section 03
has 0 primary-typed sources despite having 4 independent publishers.
This waiver covers only the primary_sources_required check. The
min_independent_publishers check PASSED without a waiver (4 publishers
>= 4 minimum), confirming Section 03's multi-publisher structure.

  - Compensating: 5 sources are raw RST files from the official godotengine/godot-docs repo (4 class-reference + 1 tutorial) — auto-generated from engine XML and first-party content maintained by the Godot Foundation.
  - Compensating: 3 independent developer sources (youssof20/savestate, EiTaNBaRiBoA/ForgeJSONGD, MrRobinOfficial/Godot-Saveable) provide corroborating real-world evidence of save system implementation practice.
  - Compensating: min_independent_publishers cleared on own merits (4 publishers confirmed by gate): no min_independent_publishers waiver applied or needed.
  - Compensating: All claims are span-grounded against literal excerpt text from sources; the docs/secondary-type classification affects the gate check, not evidence quality.
  - Compensating: GitHub Search API issues and specific issue #110466 (ResourceSaver regression) provide corroborating regression evidence.

## Integrity checks

- [PASS] **pack_audit_ready** — pack-audit verdict=ready_for_synthesis
- [PASS] **handoff_synthesis_ready** — cowork-handoff mode=synthesis_ready
- [PASS] **synthesis_workspace_present** — 5/5 synthesis files hashed
- [PASS] **final_report_cites_accepted_claims_only** — 113 citation(s); 0 unknown, 0 repair/rejected
- [PASS] **unresolved_contradictions_disclosed** — 0 contradiction(s) checked
- [PASS] **waivers_disclosed** — 3 waiver(s) checked
- [PASS] **canonical_artifacts_fingerprinted** — 122 artifact(s) hashed

## Synthesis fingerprints

| Path | Bytes | sha256 |
|---|---|---|
| `synthesis/cross-section-map.json` | 1533383 | `7d8fc2dc191a5d5b…` |
| `synthesis/cross-section-map.md` | 1063035 | `93d858d7aba25708…` |
| `synthesis/decision-brief.md` | 11911 | `a94a2ff88876e53a…` |
| `synthesis/working-report.md` | 15612 | `2aa3562800d5ee2e…` |
| `synthesis/final-report.md` | 29166 | `5a472f56a2dfd493…` |

## Canonical artifact fingerprints

Total: 122 files

| Path | Bytes | sha256 |
|---|---|---|
| `research.yaml` | 9862 | `a86d2edda93db26d…` |
| `sections/01-engine-version-export-template-compat/claims.jsonl` | 168004 | `daf92712ed1ddf9a…` |
| `sections/01-engine-version-export-template-compat/sources.jsonl` | 568 | `39c17251ba7c4c9d…` |
| `sections/01-engine-version-export-template-compat/claim-reviews.jsonl` | 34606 | `4425fcbf24964c2e…` |
| `sections/01-engine-version-export-template-compat/gates.yaml` | 411 | `62ef06de638518a8…` |
| `audits/01-engine-version-export-template-compat-gate.json` | 41210 | `ec43104122f445d3…` |
| `audits/01-engine-version-export-template-compat-review.json` | 70467 | `a76dce85d8f2e30f…` |
| `audits/01-engine-version-export-template-compat-findings.jsonl` | 80168 | `bc856174b397e272…` |
| `sections/03-save-system-player-state-durability/claims.jsonl` | 353080 | `2085184f6383d11c…` |
| `sections/03-save-system-player-state-durability/sources.jsonl` | 781 | `5c417918becbf5f4…` |
| `sections/03-save-system-player-state-durability/claim-reviews.jsonl` | 31204 | `5886f0b31e268c43…` |
| `sections/03-save-system-player-state-durability/gates.yaml` | 427 | `1cf1a66ce263a0f6…` |
| `audits/03-save-system-player-state-durability-gate.json` | 71503 | `02a8765251ee5f8f…` |
| `audits/03-save-system-player-state-durability-review.json` | 151927 | `f3f07d1e1465afb7…` |
| `audits/03-save-system-player-state-durability-findings.jsonl` | 95645 | `254ef5835049b606…` |
| `sections/05-desktop-platform-export-durability/claims.jsonl` | 272722 | `68e9a597fbd2bbad…` |
| `sections/05-desktop-platform-export-durability/sources.jsonl` | 781 | `111bee3f7376cfdb…` |
| `sections/05-desktop-platform-export-durability/claim-reviews.jsonl` | 23615 | `c34e5805898ac256…` |
| `sections/05-desktop-platform-export-durability/gates.yaml` | 547 | `47976157225c0ac7…` |
| `audits/05-desktop-platform-export-durability-gate.json` | 53093 | `b3108eb621ba7aff…` |
| `audits/05-desktop-platform-export-durability-review.json` | 129952 | `4b1a3892f2c4daf5…` |
| `audits/05-desktop-platform-export-durability-findings.jsonl` | 84425 | `f659df65ebcc72cf…` |
| `sections/02-scene-resource-serialization/claims.jsonl` | 405508 | `0659510272578e6d…` |
| `sections/02-scene-resource-serialization/sources.jsonl` | 781 | `c6c02ddfa3e910b9…` |
| `sections/02-scene-resource-serialization/claim-reviews.jsonl` | 33450 | `df7ab4a748c38cce…` |
| `sections/02-scene-resource-serialization/gates.yaml` | 517 | `7a7ffeff5f42109f…` |
| `audits/02-scene-resource-serialization-gate.json` | 83316 | `a0f972774f9b6153…` |
| `audits/02-scene-resource-serialization-review.json` | 149301 | `75a3000f18c8bbad…` |
| `audits/02-scene-resource-serialization-findings.jsonl` | 90823 | `dbcda5e0968f5b0f…` |
| `sections/04-scripting-runtime-contracts/claims.jsonl` | 403590 | `58bc7e49e8c6527d…` |
| `sections/04-scripting-runtime-contracts/sources.jsonl` | 639 | `c50d44153cd6f90c…` |
| `sections/04-scripting-runtime-contracts/claim-reviews.jsonl` | 31271 | `f19159d854ca8704…` |
| `sections/04-scripting-runtime-contracts/gates.yaml` | 431 | `c540dedcd0fe647b…` |
| `audits/04-scripting-runtime-contracts-gate.json` | 80920 | `ea193bb88c939b92…` |
| `audits/04-scripting-runtime-contracts-review.json` | 146403 | `b1dbc246fc3cd42e…` |
| `audits/04-scripting-runtime-contracts-findings.jsonl` | 90774 | `09b0c7ef5ecdfc58…` |
| `sections/06-mobile-web-export-durability/claims.jsonl` | 421913 | `13027c758d15893a…` |
| `sections/06-mobile-web-export-durability/sources.jsonl` | 994 | `8c786ca7ba0761c4…` |
| `sections/06-mobile-web-export-durability/claim-reviews.jsonl` | 35608 | `e155026359946127…` |
| `sections/06-mobile-web-export-durability/gates.yaml` | 398 | `1b3d039230fed25d…` |
| `audits/06-mobile-web-export-durability-gate.json` | 84796 | `ef123430ccdbf7bc…` |
| `audits/06-mobile-web-export-durability-review.json` | 166125 | `be2d6bffabafad7c…` |
| `audits/06-mobile-web-export-durability-findings.jsonl` | 102539 | `82f7f64e52a2cf11…` |
| `sections/07-distribution-surface-durability/claims.jsonl` | 125034 | `be974adb34336e97…` |
| `sections/07-distribution-surface-durability/sources.jsonl` | 497 | `5b560f39d75aea7d…` |
| `sections/07-distribution-surface-durability/claim-reviews.jsonl` | 11386 | `fd3e4f98dbe60cc6…` |
| `sections/07-distribution-surface-durability/gates.yaml` | 363 | `b8da12b84298b06a…` |
| `audits/07-distribution-surface-durability-gate.json` | 34126 | `954b83d7635e5fbe…` |
| `audits/07-distribution-surface-durability-review.json` | 48713 | `a0ea375774b22858…` |
| `audits/07-distribution-surface-durability-findings.jsonl` | 28683 | `34688a95532426de…` |
| `evidence/fetch-log.jsonl` | 54552 | `18cf1221134211a3…` |
| `evidence/citation-ledger.jsonl` | 0 | `e3b0c44298fc1c14…` |
| `evidence/source-cards/src_03cb99fe6df9.json` | 1596 | `75f0142b4fc49892…` |
| `evidence/source-cards/src_04c541af2502.json` | 2024 | `b7c4ecccfbdbb6de…` |
| `evidence/source-cards/src_083cda9d9328.json` | 1802 | `6b868fccb807dd80…` |
| `evidence/source-cards/src_0974a54becd4.json` | 1782 | `7933349f6b22e216…` |
| `evidence/source-cards/src_0b13e026c1cc.json` | 1773 | `f3e0464cfdfaf655…` |
| `evidence/source-cards/src_0cf4f6250555.json` | 1611 | `0361669a81b6bf9f…` |
| `evidence/source-cards/src_169fec56d321.json` | 1493 | `09b5c598df3c3df6…` |
| `evidence/source-cards/src_1ceb96fdb33a.json` | 1841 | `a3500aa01e3d0de6…` |
| `evidence/source-cards/src_1e4fa1dde3af.json` | 1185 | `0c9edd918299eb0c…` |
| `evidence/source-cards/src_24107f739f88.json` | 1433 | `00196805e5dbfd9e…` |
| `evidence/source-cards/src_2b06a4f43c1e.json` | 1332 | `941ab39b80e23d5c…` |
| `evidence/source-cards/src_33eded38b390.json` | 1676 | `f6e8a6b5f93908a6…` |
| `evidence/source-cards/src_37ec19efa9ba.json` | 1573 | `1bb5329665839e05…` |
| `evidence/source-cards/src_3bf41f24d47a.json` | 1299 | `fde1f80387b9febb…` |
| `evidence/source-cards/src_4c6c14f4f6fa.json` | 1416 | `dad23cd0bd0eb6ea…` |
| `evidence/source-cards/src_53945c78a6f2.json` | 1215 | `75ba3264acbcc5a5…` |
| `evidence/source-cards/src_55a63071c9c1.json` | 1560 | `94a869f63d52b7b3…` |
| `evidence/source-cards/src_5670dbff3e4d.json` | 1611 | `edfd4b50003ddd51…` |
| `evidence/source-cards/src_57341c85596c.json` | 2058 | `296a890cee1e2b9f…` |
| `evidence/source-cards/src_5b703b620109.json` | 1663 | `99bbf804391f0104…` |
| `evidence/source-cards/src_5fda19aa5cd8.json` | 1190 | `d4b7ec4d21dbc63d…` |
| `evidence/source-cards/src_639902f06da8.json` | 1685 | `6a9ee311d213acc4…` |
| `evidence/source-cards/src_68be97293369.json` | 1892 | `c2f3d7521b7af328…` |
| `evidence/source-cards/src_6e935dbe9826.json` | 1965 | `951a20f4d3e491b6…` |
| `evidence/source-cards/src_6ee62ab47888.json` | 1750 | `9e56912d26bd2531…` |
| `evidence/source-cards/src_6f54a167d232.json` | 1469 | `9378a70d9e821c09…` |
| `evidence/source-cards/src_71469ccfe316.json` | 1643 | `1dd8ec3130d172fe…` |
| `evidence/source-cards/src_78aaa13e8387.json` | 1500 | `3700757669af3c3f…` |
| `evidence/source-cards/src_7d03db002fc2.json` | 1309 | `1cafa6a5a2416057…` |
| `evidence/source-cards/src_7d0fca124716.json` | 1433 | `f1f74ca9fa432a60…` |
| `evidence/source-cards/src_7e04a97ea278.json` | 1709 | `1fa004bd87f135e5…` |
| `evidence/source-cards/src_7f5634860b7d.json` | 1754 | `180c97f47ecc2569…` |
| `evidence/source-cards/src_8b484efdebe2.json` | 2017 | `2878dae645a5ce4e…` |
| `evidence/source-cards/src_8e8c16fd06c4.json` | 1532 | `e794b9a58a3ef216…` |
| `evidence/source-cards/src_943086ae5d37.json` | 1772 | `aafac5a989082141…` |
| `evidence/source-cards/src_a6a330af5a09.json` | 1602 | `4d3b1510fd6881ce…` |
| `evidence/source-cards/src_a9fd72b46944.json` | 1685 | `af1315ba656045b1…` |
| `evidence/source-cards/src_ad0801f16070.json` | 1310 | `bf531e95df6867d1…` |
| `evidence/source-cards/src_b00e2fac5e30.json` | 2143 | `195e0c2e40cd9479…` |
| `evidence/source-cards/src_b2e50dff76fc.json` | 1672 | `9c496a258619b2f1…` |
| `evidence/source-cards/src_b777c089d810.json` | 1298 | `f564438ebf094321…` |
| `evidence/source-cards/src_ba5aaca1a207.json` | 1869 | `10b55e80751e8949…` |
| `evidence/source-cards/src_bc58f284031b.json` | 1258 | `77a8b918fa244a82…` |
| `evidence/source-cards/src_c1cc3cb1f943.json` | 2157 | `bb61aef162b857b5…` |
| `evidence/source-cards/src_c3216b0c8944.json` | 1686 | `84c5704524ba31b3…` |
| `evidence/source-cards/src_c50580a705c4.json` | 1692 | `3759748a7682eb57…` |
| `evidence/source-cards/src_c5ed9836ffb5.json` | 1555 | `4ac572c0de160611…` |
| `evidence/source-cards/src_ce610c7a7992.json` | 1314 | `0670c1cd140dc862…` |
| `evidence/source-cards/src_cfb7cbc09d44.json` | 1612 | `310f2227043df7ec…` |
| `evidence/source-cards/src_d02146dfcea5.json` | 1634 | `1d53698fd1cffba8…` |
| `evidence/source-cards/src_d3bd0f1dae0c.json` | 1610 | `2e76e7a937484775…` |
| `evidence/source-cards/src_d49f293c82bf.json` | 1763 | `e76f396fb9953086…` |
| `evidence/source-cards/src_d4edcfa48733.json` | 1850 | `5c2185e6ea7dd05b…` |
| `evidence/source-cards/src_d5da902c1965.json` | 1506 | `57f3fb1e86c1bc9e…` |
| `evidence/source-cards/src_d63ce314a50f.json` | 1751 | `c36e8a8e32caeda2…` |
| `evidence/source-cards/src_d726c169567d.json` | 1706 | `52a8e75059e7baa1…` |
| `evidence/source-cards/src_d7289e5beb6d.json` | 1990 | `f13b5c7835dd027c…` |
| `evidence/source-cards/src_d8935f3b0347.json` | 1387 | `97f7b2077b50c662…` |
| `evidence/source-cards/src_da88881cf961.json` | 1082 | `35162d9b2fbba472…` |
| `evidence/source-cards/src_e17170a435d3.json` | 1349 | `39b74dace82ae694…` |
| `evidence/source-cards/src_e3948fcd1578.json` | 1705 | `4e6ee9bc062cb413…` |
| `evidence/source-cards/src_e6e0e4cb4ec7.json` | 1681 | `1a34bd22404fa0f8…` |
| `evidence/source-cards/src_ec39871fb14e.json` | 1763 | `87f0842d29219042…` |
| `evidence/source-cards/src_ef2f01e1f840.json` | 1665 | `1e9c0bed99808655…` |
| `evidence/source-cards/src_ef84790b4914.json` | 1873 | `3d9b588b2965adae…` |
| `evidence/source-cards/src_f6ad03378646.json` | 1549 | `2173722fad9d0bc5…` |
| `evidence/source-cards/src_f6badbefe774.json` | 1396 | `017aa346a3af7373…` |
| `evidence/source-cards/src_f7e212bc013e.json` | 1713 | `24349408970d6172…` |
| `evidence/source-cards/src_f826c053d744.json` | 1394 | `cdd34e1143f25694…` |
| `evidence/source-cards/src_fc44452fd969.json` | 1248 | `fbbd3d8c3d17a4bf…` |
