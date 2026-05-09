# Cowork Handoff: How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?

**Pack ID:** `5dca72a4300c`
**Mode:** [SYNTHESIS READY] synthesis_ready
**Synthesis allowed:** yes
**Generated:** 2026-05-08T07:40:47.412Z
**Index:** present

> Pack mode=synthesis_ready; 8 section(s) total, 8 synthesis-eligible, 0 blocked or unrun. 296 accepted claim(s); 0 need repair; 17 dispositioned; 16 rejected; 0 unresolved contradiction(s); 3 waiver(s).

## Operating mode

Required sections are synthesis-eligible, accepted claims exist, no unwaived blocking contradictions remain. You may perform cross-section synthesis using accepted claim_ids only. You may not introduce new facts or cite outside the source ledger.

## What you may do

- Reason across sections to draft `synthesis/cross-section-map.md`.
- Produce `synthesis/decision-brief.md` answering the pack's `decision` field, citing only accepted_claim_ids.
- Draft `synthesis/final-report.md` if (and only if) the decision brief is honest about unresolved tensions.
- Use `research-os query "<term>"` to retrieve grounded artifacts; never paraphrase past the indexed evidence.

## What you may not do (always — these are pack invariants)

- Mutate sections/<id>/claims.jsonl directly — it is extraction truth (append-only via research-os tools)
- Mutate evidence/source-cards/*.json or evidence/fetch-log.jsonl — these are fetched-truth artifacts
- Mutate audits/*-gate.json or audits/*-review.json — these are immutable audit snapshots
- Cite a source_id that is not present in evidence/source-cards/
- Cite a claim_id that is not present in sections/<id>/claims.jsonl
- Treat a claim with scope=null as broadly applicable — null-scope means scope-undetermined, not scope-universal
- Widen the scope of a claim beyond what the source explicitly supports
- Flatten an unresolved contradiction; preserve it deliberately or route it through claim-reviews
- Write final synthesis prose unless mode == synthesis_ready
- Reconcile contradictions silently — use research-os contradict map / research-os review with explicit decisions

## Pack state

| Section | Status | Gate verdict | Synthesis-eligible | Candidate claims | Accepted | Need repair | Rejected | Unresolved contradictions |
|---|---|---|---|---|---|---|---|---|
| `01-product-thesis` | reviewed | warn | yes | 109 | 19 | 0 | 0 | 0 |
| `02-pack-artifact-contract` | gated | warn | yes | 471 | 50 | 0 | 0 | 0 |
| `03-source-and-claim-truth` | reviewed | warn | yes | 715 | 42 | 0 | 1 | 0 |
| `04-gates-and-waivers` | reviewed | warn | yes | 131 | 30 | 0 | 0 | 0 |
| `05-cowork-handoff` | gated | warn | yes | 548 | 68 | 0 | 15 | 0 |
| `06-repo-knowledge-integration` | gated | warn | yes | 297 | 43 | 0 | 0 | 0 |
| `07-cli-and-runtime-flow` | reviewed | warn | yes | 175 | 29 | 0 | 0 | 0 |
| `08-acceptance-suite` | gated | warn | yes | 201 | 15 | 0 | 0 | 0 |

### Accepted claims (synthesis-ready)

- `clm_d474bc1158c2_ollama_intern_19`
- `clm_d474bc1158c2_ollama_intern_38`
- `clm_56b5f3cd926b_ollama_intern_1`
- `clm_56b5f3cd926b_ollama_intern_2`
- `clm_56b5f3cd926b_ollama_intern_3`
- `clm_d574302fe3de_ollama_intern_4`
- `clm_770d35522c16_ollama_intern_1`
- `clm_770d35522c16_ollama_intern_2`
- `clm_d474bc1158c2_ollama_intern_58`
- `clm_d474bc1158c2_ollama_intern_60`
- `clm_d474bc1158c2_ollama_intern_62`
- `clm_98d43428beed_ollama_intern_3`
- `clm_a2f17fd8c9a6_ollama_intern_1`
- `clm_a2f17fd8c9a6_ollama_intern_2`
- `clm_a2f17fd8c9a6_ollama_intern_6`
- `clm_a2f17fd8c9a6_ollama_intern_7`
- `clm_a2f17fd8c9a6_ollama_intern_8`
- `clm_a2f17fd8c9a6_ollama_intern_9`
- `clm_923564b918e1_ollama_intern_3`
- `clm_cf2238f43a01_ollama_intern_10`
- `clm_cf2238f43a01_ollama_intern_11`
- `clm_cf2238f43a01_ollama_intern_98`
- `clm_cf2238f43a01_ollama_intern_105`
- `clm_cf2238f43a01_ollama_intern_106`
- `clm_cf2238f43a01_ollama_intern_110`
- `clm_cf2238f43a01_ollama_intern_114`
- `clm_cf2238f43a01_ollama_intern_115`
- `clm_cf2238f43a01_ollama_intern_118`
- `clm_cf2238f43a01_ollama_intern_119`
- `clm_2cc80fcf07ba_ollama_intern_4`
- `clm_b1ed6cf92876_ollama_intern_1`
- `clm_b1ed6cf92876_ollama_intern_2`
- `clm_b1ed6cf92876_ollama_intern_3`
- `clm_b1ed6cf92876_ollama_intern_4`
- `clm_62d58636ae35_ollama_intern_8`
- `clm_62d58636ae35_ollama_intern_9`
- `clm_62d58636ae35_ollama_intern_10`
- `clm_62d58636ae35_ollama_intern_11`
- `clm_62d58636ae35_ollama_intern_13`
- `clm_62d58636ae35_ollama_intern_17`
- `clm_62d58636ae35_ollama_intern_19`
- `clm_62d58636ae35_ollama_intern_23`
- `clm_62d58636ae35_ollama_intern_28`
- `clm_62d58636ae35_ollama_intern_29`
- `clm_c1e29cfcaa1e_ollama_intern_2`
- `clm_c1e29cfcaa1e_ollama_intern_3`
- `clm_c1e29cfcaa1e_ollama_intern_4`
- `clm_c1e29cfcaa1e_ollama_intern_5`
- `clm_c1e29cfcaa1e_ollama_intern_6`
- `clm_712838e1db63_ollama_intern_16`
- `clm_712838e1db63_ollama_intern_17`
- `clm_712838e1db63_ollama_intern_20`
- `clm_712838e1db63_ollama_intern_64`
- `clm_712838e1db63_ollama_intern_82`
- `clm_712838e1db63_ollama_intern_104`
- `clm_712838e1db63_ollama_intern_122`
- `clm_712838e1db63_ollama_intern_128`
- `clm_712838e1db63_ollama_intern_141`
- `clm_712838e1db63_ollama_intern_147`
- `clm_0801e1ee8a70_ollama_intern_13`
- `clm_0801e1ee8a70_ollama_intern_52`
- `clm_0801e1ee8a70_ollama_intern_80`
- `clm_0801e1ee8a70_ollama_intern_83`
- `clm_0801e1ee8a70_ollama_intern_85`
- `clm_0801e1ee8a70_ollama_intern_109`
- `clm_0801e1ee8a70_ollama_intern_110`
- `clm_0801e1ee8a70_ollama_intern_111`
- `clm_0801e1ee8a70_ollama_intern_127`
- `clm_0801e1ee8a70_ollama_intern_132`
- `clm_676ddfa834cc_ollama_intern_1`
- `clm_d39cd3ba0ef2_ollama_intern_5`
- `clm_d39cd3ba0ef2_ollama_intern_6`
- `clm_d39cd3ba0ef2_ollama_intern_7`
- `clm_d81a8a3d6bba_ollama_intern_1`
- `clm_d81a8a3d6bba_ollama_intern_2`
- `clm_d81a8a3d6bba_ollama_intern_3`
- `clm_d81a8a3d6bba_ollama_intern_5`
- `clm_d81a8a3d6bba_ollama_intern_30`
- `clm_d81a8a3d6bba_ollama_intern_31`
- `clm_d81a8a3d6bba_ollama_intern_35`
- `clm_d81a8a3d6bba_ollama_intern_39`
- `clm_676ddfa834cc_ollama_intern_5`
- `clm_676ddfa834cc_ollama_intern_21`
- `clm_676ddfa834cc_ollama_intern_22`
- `clm_676ddfa834cc_ollama_intern_23`
- `clm_676ddfa834cc_ollama_intern_24`
- `clm_676ddfa834cc_ollama_intern_26`
- `clm_bc94816a3373_ollama_intern_1`
- `clm_bc94816a3373_ollama_intern_3`
- `clm_bc94816a3373_ollama_intern_7`
- `clm_bc94816a3373_ollama_intern_19`
- `clm_bc94816a3373_ollama_intern_22`
- `clm_bc94816a3373_ollama_intern_72`
- `clm_bc94816a3373_ollama_intern_73`
- `clm_155c4be7850d_ollama_intern_14`
- `clm_155c4be7850d_ollama_intern_15`
- `clm_155c4be7850d_ollama_intern_17`
- `clm_155c4be7850d_ollama_intern_18`
- `clm_155c4be7850d_ollama_intern_42`
- `clm_155c4be7850d_ollama_intern_43`
- `clm_155c4be7850d_ollama_intern_46`
- `clm_caedf4b2d8e0_ollama_intern_101`
- `clm_caedf4b2d8e0_ollama_intern_103`
- `clm_caedf4b2d8e0_ollama_intern_104`
- `clm_caedf4b2d8e0_ollama_intern_105`
- `clm_caedf4b2d8e0_ollama_intern_127`
- `clm_caedf4b2d8e0_ollama_intern_128`
- `clm_caedf4b2d8e0_ollama_intern_374`
- `clm_a135974ea838_ollama_intern_7`
- `clm_a135974ea838_ollama_intern_8`
- `clm_a135974ea838_ollama_intern_9`
- `clm_fb48d4730a5c_ollama_intern_1`
- `clm_fb48d4730a5c_ollama_intern_3`
- `clm_fb48d4730a5c_ollama_intern_6`
- `clm_fb48d4730a5c_ollama_intern_7`
- `clm_fb48d4730a5c_ollama_intern_8`
- `clm_fb48d4730a5c_ollama_intern_11`
- `clm_fb48d4730a5c_ollama_intern_12`
- `clm_fb48d4730a5c_ollama_intern_13`
- `clm_d2cd935fb884_ollama_intern_1`
- `clm_d2cd935fb884_ollama_intern_2`
- `clm_d2cd935fb884_ollama_intern_3`
- `clm_55f4bfa87f54_ollama_intern_12`
- `clm_55f4bfa87f54_ollama_intern_22`
- `clm_55f4bfa87f54_ollama_intern_29`
- `clm_55f4bfa87f54_ollama_intern_31`
- `clm_55f4bfa87f54_ollama_intern_32`
- `clm_55f4bfa87f54_ollama_intern_40`
- `clm_f0fe25b20f29_ollama_intern_1`
- `clm_f0fe25b20f29_ollama_intern_3`
- `clm_f0fe25b20f29_ollama_intern_4`
- `clm_f0fe25b20f29_ollama_intern_5`
- `clm_f0fe25b20f29_ollama_intern_6`
- `clm_f0fe25b20f29_ollama_intern_13`
- `clm_f0fe25b20f29_ollama_intern_14`
- `clm_f0fe25b20f29_ollama_intern_15`
- `clm_f0fe25b20f29_ollama_intern_43`
- `clm_f0fe25b20f29_ollama_intern_44`
- `clm_bbd08b91cbb6_ollama_intern_1`
- `clm_bbd08b91cbb6_ollama_intern_2`
- `clm_bbd08b91cbb6_ollama_intern_3`
- `clm_9a532b2b74e5_ollama_intern_3`
- `clm_9a532b2b74e5_ollama_intern_6`
- `clm_9a532b2b74e5_ollama_intern_8`
- `clm_9a7d4217c64c_ollama_intern_1`
- `clm_9a7d4217c64c_ollama_intern_3`
- `clm_9a7d4217c64c_ollama_intern_14`
- `clm_9a7d4217c64c_ollama_intern_15`
- `clm_9a7d4217c64c_ollama_intern_16`
- `clm_9a7d4217c64c_ollama_intern_29`
- `clm_9a7d4217c64c_ollama_intern_30`
- `clm_9a7d4217c64c_ollama_intern_31`
- `clm_9a7d4217c64c_ollama_intern_35`
- `clm_9a7d4217c64c_ollama_intern_40`
- `clm_5be2e21d45c9_ollama_intern_1`
- `clm_5be2e21d45c9_ollama_intern_23`
- `clm_5be2e21d45c9_ollama_intern_27`
- `clm_5be2e21d45c9_ollama_intern_29`
- `clm_5be2e21d45c9_ollama_intern_56`
- `clm_5be2e21d45c9_ollama_intern_106`
- `clm_5be2e21d45c9_ollama_intern_109`
- `clm_5be2e21d45c9_ollama_intern_125`
- `clm_5be2e21d45c9_ollama_intern_148`
- `clm_5be2e21d45c9_ollama_intern_149`
- `clm_96b9a35307c0_ollama_intern_1`
- `clm_96b9a35307c0_ollama_intern_2`
- `clm_96b9a35307c0_ollama_intern_5`
- `clm_96b9a35307c0_ollama_intern_18`
- `clm_96b9a35307c0_ollama_intern_21`
- `clm_96b9a35307c0_ollama_intern_23`
- `clm_96b9a35307c0_ollama_intern_29`
- `clm_96b9a35307c0_ollama_intern_32`
- `clm_96b9a35307c0_ollama_intern_33`
- `clm_96b9a35307c0_ollama_intern_34`
- `clm_c8975a95117b_ollama_intern_1`
- `clm_c8975a95117b_ollama_intern_11`
- `clm_c8975a95117b_ollama_intern_12`
- `clm_c8975a95117b_ollama_intern_13`
- `clm_c8975a95117b_ollama_intern_20`
- `clm_c8975a95117b_ollama_intern_23`
- `clm_c8975a95117b_ollama_intern_28`
- `clm_c8975a95117b_ollama_intern_29`
- `clm_c8975a95117b_ollama_intern_30`
- `clm_c8975a95117b_ollama_intern_55`
- `clm_486f1e6121c8_ollama_intern_1`
- `clm_486f1e6121c8_ollama_intern_6`
- `clm_486f1e6121c8_ollama_intern_12`
- `clm_486f1e6121c8_ollama_intern_13`
- `clm_486f1e6121c8_ollama_intern_14`
- `clm_486f1e6121c8_ollama_intern_17`
- `clm_486f1e6121c8_ollama_intern_29`
- `clm_486f1e6121c8_ollama_intern_32`
- `clm_486f1e6121c8_ollama_intern_33`
- `clm_486f1e6121c8_ollama_intern_36`
- `clm_9686dc1633cd_ollama_intern_2`
- `clm_9686dc1633cd_ollama_intern_3`
- `clm_9686dc1633cd_ollama_intern_4`
- `clm_9686dc1633cd_ollama_intern_16`
- `clm_9686dc1633cd_ollama_intern_17`
- `clm_9686dc1633cd_ollama_intern_18`
- `clm_9686dc1633cd_ollama_intern_20`
- `clm_9686dc1633cd_ollama_intern_21`
- `clm_9686dc1633cd_ollama_intern_22`
- `clm_9686dc1633cd_ollama_intern_30`
- `clm_126e07cf0d68_ollama_intern_9`
- `clm_126e07cf0d68_ollama_intern_13`
- `clm_126e07cf0d68_ollama_intern_14`
- `clm_126e07cf0d68_ollama_intern_15`
- `clm_9a532b2b74e5_ollama_intern_15`
- `clm_e15c2248a5d8_ollama_intern_3`
- `clm_e15c2248a5d8_ollama_intern_10`
- `clm_e15c2248a5d8_ollama_intern_37`
- `clm_e15c2248a5d8_ollama_intern_52`
- `clm_e15c2248a5d8_ollama_intern_55`
- `clm_e15c2248a5d8_ollama_intern_58`
- `clm_e15c2248a5d8_ollama_intern_103`
- `clm_e15c2248a5d8_ollama_intern_105`
- `clm_e15c2248a5d8_ollama_intern_113`
- `clm_e15c2248a5d8_ollama_intern_124`
- `clm_05cae033cedc_ollama_intern_3`
- `clm_05cae033cedc_ollama_intern_16`
- `clm_05cae033cedc_ollama_intern_17`
- `clm_05cae033cedc_ollama_intern_23`
- `clm_05cae033cedc_ollama_intern_25`
- `clm_05cae033cedc_ollama_intern_27`
- `clm_05cae033cedc_ollama_intern_32`
- `clm_05cae033cedc_ollama_intern_33`
- `clm_05cae033cedc_ollama_intern_35`
- `clm_05cae033cedc_ollama_intern_36`
- `clm_5d98fdba0757_ollama_intern_4`
- `clm_5d98fdba0757_ollama_intern_5`
- `clm_5d98fdba0757_ollama_intern_6`
- `clm_5d98fdba0757_ollama_intern_7`
- `clm_5d98fdba0757_ollama_intern_9`
- `clm_91705d06abdf_ollama_intern_4`
- `clm_91705d06abdf_ollama_intern_5`
- `clm_91705d06abdf_ollama_intern_6`
- `clm_91705d06abdf_ollama_intern_7`
- `clm_91705d06abdf_ollama_intern_8`
- `clm_91705d06abdf_ollama_intern_9`
- `clm_91705d06abdf_ollama_intern_10`
- `clm_91705d06abdf_ollama_intern_11`
- `clm_91705d06abdf_ollama_intern_12`
- `clm_91705d06abdf_ollama_intern_14`
- `clm_676ddfa834cc_ollama_intern_26`
- `clm_676ddfa834cc_ollama_intern_27`
- `clm_676ddfa834cc_ollama_intern_29`
- `clm_f110ffbdbe7c_ollama_intern_2`
- `clm_f110ffbdbe7c_ollama_intern_3`
- `clm_ac6052de3047_ollama_intern_3`
- `clm_ac6052de3047_ollama_intern_4`
- `clm_ac6052de3047_ollama_intern_5`
- `clm_27eaf34f91a3_ollama_intern_1`
- `clm_27eaf34f91a3_ollama_intern_4`
- `clm_27eaf34f91a3_ollama_intern_6`
- `clm_458d9788c68d_ollama_intern_12`
- `clm_458d9788c68d_ollama_intern_13`
- `clm_458d9788c68d_ollama_intern_19`
- `clm_458d9788c68d_ollama_intern_29`
- `clm_458d9788c68d_ollama_intern_30`
- `clm_458d9788c68d_ollama_intern_32`
- `clm_458d9788c68d_ollama_intern_35`
- `clm_458d9788c68d_ollama_intern_62`
- `clm_458d9788c68d_ollama_intern_75`
- `clm_458d9788c68d_ollama_intern_76`
- `clm_de50fc93ad72_ollama_intern_1`
- `clm_de50fc93ad72_ollama_intern_2`
- `clm_de50fc93ad72_ollama_intern_3`
- `clm_de50fc93ad72_ollama_intern_4`
- `clm_0b75376a48e4_ollama_intern_10`
- `clm_0b75376a48e4_ollama_intern_16`
- `clm_0b75376a48e4_ollama_intern_19`
- `clm_0b75376a48e4_ollama_intern_20`
- `clm_0b75376a48e4_ollama_intern_21`
- `clm_0b75376a48e4_ollama_intern_26`
- `clm_0b75376a48e4_ollama_intern_27`
- `clm_0b75376a48e4_ollama_intern_34`
- `clm_0b75376a48e4_ollama_intern_46`
- `clm_0b75376a48e4_ollama_intern_52`
- `clm_65308ebae4e9_ollama_intern_1`
- `clm_96d4bf47e20b_ollama_intern_1`
- `clm_53ee6a9ec24b_ollama_intern_5`
- `clm_53ee6a9ec24b_ollama_intern_6`
- `clm_53ee6a9ec24b_ollama_intern_8`
- `clm_53ee6a9ec24b_ollama_intern_10`
- `clm_53ee6a9ec24b_ollama_intern_12`
- `clm_642e49ac2548_ollama_intern_7`
- `clm_642e49ac2548_ollama_intern_9`
- `clm_642e49ac2548_ollama_intern_11`
- `clm_ae13d4956c22_ollama_intern_9`
- `clm_eefec92990cb_ollama_intern_19`
- `clm_eefec92990cb_ollama_intern_20`
- `clm_eefec92990cb_ollama_intern_21`
- `clm_eefec92990cb_ollama_intern_22`
- `clm_eefec92990cb_ollama_intern_24`
- `clm_4b7a4ad94a3b_ollama_intern_1`

### Claims needing repair

_None._

### Rejected claims

- `clm_bc94816a3373_ollama_intern_2`
- `clm_2fff6e91c56c_ollama_intern_4`
- `clm_59b5d7b9e7e4_ollama_intern_6`
- `clm_ea1a84785166_ollama_intern_5`
- `clm_ea1a84785166_ollama_intern_6`
- `clm_ea1a84785166_ollama_intern_7`
- `clm_ea1a84785166_ollama_intern_8`
- `clm_ea1a84785166_ollama_intern_10`
- `clm_ea1a84785166_ollama_intern_14`
- `clm_ea1a84785166_ollama_intern_15`
- `clm_ea1a84785166_ollama_intern_17`
- `clm_ea1a84785166_ollama_intern_19`
- `clm_ea1a84785166_ollama_intern_20`
- `clm_59b5d7b9e7e4_ollama_intern_11`
- `clm_59b5d7b9e7e4_ollama_intern_12`
- `clm_59b5d7b9e7e4_ollama_intern_13`

### Unresolved contradictions

_None._

### Active waivers

- **pack.source_floor** applied to `primary_sources_required`
  - Reason: This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
  - Compensating: Adversarial reviewer pass required on every section before synthesis.
  - Compensating: Cross-section contradiction mapping required across all sections.
  - Compensating: Each section must cite >=4 independent publishers; source cluster monopoly is a section-level blocker.
  - Compensating: Final-report citations must be claim-level traceable via [claim:clm_...] references.
  - Compensating: Every active waiver disclosed in synthesis/decision-brief.md and synthesis/final-report.md by family.applied_to.
- **gate.source_floor** applied to `04-gates-and-waivers.primary_sources_required`
  - Reason: This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
  - Compensating: Adversarial reviewer pass required on every section before synthesis.
  - Compensating: Cross-section contradiction mapping required across all sections.
  - Compensating: Each section must cite >=4 independent publishers; source cluster monopoly is a section-level blocker.
  - Compensating: Final-report citations must be claim-level traceable via [claim:clm_...] references.
  - Compensating: Every active waiver disclosed in synthesis/decision-brief.md and synthesis/final-report.md by family.applied_to.
- **gate.source_floor** applied to `07-cli-and-runtime-flow.primary_sources_required`
  - Reason: This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
  - Compensating: Adversarial reviewer pass required on every section before synthesis.
  - Compensating: Cross-section contradiction mapping required across all sections.
  - Compensating: Each section must cite >=4 independent publishers; source cluster monopoly is a section-level blocker.
  - Compensating: Final-report citations must be claim-level traceable via [claim:clm_...] references.
  - Compensating: Every active waiver disclosed in synthesis/decision-brief.md and synthesis/final-report.md by family.applied_to.

## Recommended next actions

1. Run `research-os query "<term>"` to navigate the indexed evidence base before drafting synthesis.
2. Draft `synthesis/cross-section-map.md` listing how accepted claims relate across sections (no new facts).
3. Draft `synthesis/decision-brief.md` for the pack's `decision` field, citing only accepted_claim_ids.
4. When done, suggest the user run `research-os index build --all` and `research-os cowork handoff` to refresh the runtime contract.

## Allowed write paths

- `handoffs/cowork-options.md`
- `handoffs/cowork-notes.md`
- `synthesis/cross-section-map.md`
- `synthesis/decision-brief.md`
- `synthesis/final-report.md`
- `synthesis/working-report.md`
- `sections/<id>/brief.md (final form, drawing from accepted claims only)`

## Useful index queries

- `research-os query "source_floor"` — surface gate failures grounded in audit JSON.
- `research-os query "source_cluster_monopoly"` — find publisher-monopoly findings and the claims they touch.
- `research-os query "candidate" --type claim` — list candidate claims that haven't been accepted yet.
- `research-os query "blocked" --type gate_result` — every gate that blocks synthesis.
- `research-os query "<term>"` — full-text search; every hit points to a canonical artifact path.

## Stop conditions

- Final synthesis artifacts written to `synthesis/`.
- Pack-level `max_runtime_minutes` (in `research.yaml`) is exhausted — surface partial state honestly.

## Final instruction

Do not introduce unsupported claims. Preserve unresolved contradictions. Do not widen scope beyond the source-tagged scope. Cite only `claim_id` and `source_id` values that already exist in this pack. The pack is the source of authority — this handoff is a layout step, not new truth.
