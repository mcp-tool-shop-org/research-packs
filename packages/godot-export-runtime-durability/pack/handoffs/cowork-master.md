# Cowork Handoff: What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?

**Pack ID:** `63d430e311c1`
**Mode:** [SYNTHESIS READY] synthesis_ready
**Synthesis allowed:** yes
**Generated:** 2026-05-10T09:22:36.065Z
**Index:** present

> Pack mode=synthesis_ready; 7 section(s) total, 7 synthesis-eligible, 0 blocked or unrun. 276 accepted claim(s); 167 need repair; 0 dispositioned; 2 rejected; 0 unresolved contradiction(s); 3 waiver(s).

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
| `01-engine-version-export-template-compat` | gated | warn | yes | 150 | 34 | 6 | 0 | 0 |
| `03-save-system-player-state-durability` | gated | warn | yes | 323 | 47 | 29 | 0 | 0 |
| `05-desktop-platform-export-durability` | gated | warn | yes | 231 | 19 | 35 | 2 | 0 |
| `02-scene-resource-serialization` | gated | warn | yes | 402 | 55 | 27 | 0 | 0 |
| `04-scripting-runtime-contracts` | gated | warn | yes | 382 | 48 | 28 | 0 | 0 |
| `06-mobile-web-export-durability` | gated | warn | yes | 402 | 53 | 34 | 0 | 0 |
| `07-distribution-surface-durability` | gated | warn | yes | 113 | 20 | 8 | 0 | 0 |

### Accepted claims (synthesis-ready)

- `clm_4c6c14f4f6fa_ollama_intern_1`
- `clm_4c6c14f4f6fa_ollama_intern_3`
- `clm_4c6c14f4f6fa_ollama_intern_4`
- `clm_4c6c14f4f6fa_ollama_intern_6`
- `clm_4c6c14f4f6fa_ollama_intern_7`
- `clm_6e935dbe9826_ollama_intern_1`
- `clm_6e935dbe9826_ollama_intern_3`
- `clm_6e935dbe9826_ollama_intern_10`
- `clm_71469ccfe316_ollama_intern_3`
- `clm_71469ccfe316_ollama_intern_16`
- `clm_71469ccfe316_ollama_intern_22`
- `clm_71469ccfe316_ollama_intern_23`
- `clm_71469ccfe316_ollama_intern_27`
- `clm_71469ccfe316_ollama_intern_28`
- `clm_71469ccfe316_ollama_intern_33`
- `clm_71469ccfe316_ollama_intern_37`
- `clm_71469ccfe316_ollama_intern_38`
- `clm_6ee62ab47888_ollama_intern_11`
- `clm_6f54a167d232_ollama_intern_1`
- `clm_6f54a167d232_ollama_intern_3`
- `clm_6f54a167d232_ollama_intern_5`
- `clm_6f54a167d232_ollama_intern_6`
- `clm_6f54a167d232_ollama_intern_8`
- `clm_6f54a167d232_ollama_intern_11`
- `clm_1e4fa1dde3af_ollama_intern_1`
- `clm_1e4fa1dde3af_ollama_intern_2`
- `clm_1e4fa1dde3af_ollama_intern_3`
- `clm_1e4fa1dde3af_ollama_intern_4`
- `clm_1e4fa1dde3af_ollama_intern_5`
- `clm_1e4fa1dde3af_ollama_intern_7`
- `clm_1e4fa1dde3af_ollama_intern_12`
- `clm_1e4fa1dde3af_ollama_intern_13`
- `clm_78aaa13e8387_ollama_intern_8`
- `clm_78aaa13e8387_ollama_intern_15`
- `clm_c1cc3cb1f943_ollama_intern_1`
- `clm_c1cc3cb1f943_ollama_intern_3`
- `clm_c1cc3cb1f943_ollama_intern_4`
- `clm_c1cc3cb1f943_ollama_intern_8`
- `clm_c1cc3cb1f943_ollama_intern_9`
- `clm_c1cc3cb1f943_ollama_intern_10`
- `clm_ec39871fb14e_ollama_intern_1`
- `clm_ec39871fb14e_ollama_intern_3`
- `clm_ec39871fb14e_ollama_intern_5`
- `clm_ec39871fb14e_ollama_intern_14`
- `clm_ec39871fb14e_ollama_intern_17`
- `clm_ec39871fb14e_ollama_intern_50`
- `clm_ec39871fb14e_ollama_intern_51`
- `clm_ec39871fb14e_ollama_intern_52`
- `clm_ec39871fb14e_ollama_intern_68`
- `clm_ec39871fb14e_ollama_intern_78`
- `clm_d02146dfcea5_ollama_intern_2`
- `clm_d02146dfcea5_ollama_intern_3`
- `clm_d02146dfcea5_ollama_intern_4`
- `clm_d02146dfcea5_ollama_intern_6`
- `clm_d02146dfcea5_ollama_intern_8`
- `clm_a6a330af5a09_ollama_intern_2`
- `clm_a6a330af5a09_ollama_intern_8`
- `clm_f826c053d744_ollama_intern_1`
- `clm_f826c053d744_ollama_intern_2`
- `clm_f826c053d744_ollama_intern_3`
- `clm_f826c053d744_ollama_intern_6`
- `clm_f826c053d744_ollama_intern_9`
- `clm_f826c053d744_ollama_intern_10`
- `clm_f826c053d744_ollama_intern_12`
- `clm_f826c053d744_ollama_intern_13`
- `clm_f826c053d744_ollama_intern_14`
- `clm_f826c053d744_ollama_intern_15`
- `clm_f6ad03378646_ollama_intern_4`
- `clm_f6ad03378646_ollama_intern_6`
- `clm_d49f293c82bf_ollama_intern_4`
- `clm_d49f293c82bf_ollama_intern_5`
- `clm_d49f293c82bf_ollama_intern_6`
- `clm_d49f293c82bf_ollama_intern_7`
- `clm_d49f293c82bf_ollama_intern_8`
- `clm_d49f293c82bf_ollama_intern_10`
- `clm_f6badbefe774_ollama_intern_1`
- `clm_f6badbefe774_ollama_intern_3`
- `clm_f6badbefe774_ollama_intern_4`
- `clm_f6badbefe774_ollama_intern_5`
- `clm_f6badbefe774_ollama_intern_9`
- `clm_f6badbefe774_ollama_intern_12`
- `clm_1ceb96fdb33a_ollama_intern_7`
- `clm_1ceb96fdb33a_ollama_intern_8`
- `clm_1ceb96fdb33a_ollama_intern_9`
- `clm_03cb99fe6df9_ollama_intern_2`
- `clm_03cb99fe6df9_ollama_intern_6`
- `clm_03cb99fe6df9_ollama_intern_19`
- `clm_03cb99fe6df9_ollama_intern_21`
- `clm_03cb99fe6df9_ollama_intern_22`
- `clm_7d0fca124716_ollama_intern_1`
- `clm_5b703b620109_ollama_intern_8`
- `clm_5b703b620109_ollama_intern_10`
- `clm_c3216b0c8944_ollama_intern_19`
- `clm_d7289e5beb6d_ollama_intern_15`
- `clm_d7289e5beb6d_ollama_intern_16`
- `clm_d7289e5beb6d_ollama_intern_17`
- `clm_d7289e5beb6d_ollama_intern_18`
- `clm_d7289e5beb6d_ollama_intern_23`
- `clm_ef2f01e1f840_ollama_intern_1`
- `clm_ef2f01e1f840_ollama_intern_13`
- `clm_3bf41f24d47a_ollama_intern_1`
- `clm_3bf41f24d47a_ollama_intern_2`
- `clm_3bf41f24d47a_ollama_intern_3`
- `clm_3bf41f24d47a_ollama_intern_4`
- `clm_3bf41f24d47a_ollama_intern_6`
- `clm_3bf41f24d47a_ollama_intern_9`
- `clm_3bf41f24d47a_ollama_intern_10`
- `clm_3bf41f24d47a_ollama_intern_14`
- `clm_3bf41f24d47a_ollama_intern_15`
- `clm_3bf41f24d47a_ollama_intern_26`
- `clm_ef84790b4914_ollama_intern_4`
- `clm_ef84790b4914_ollama_intern_5`
- `clm_ef84790b4914_ollama_intern_11`
- `clm_ef84790b4914_ollama_intern_12`
- `clm_ef84790b4914_ollama_intern_13`
- `clm_ef84790b4914_ollama_intern_14`
- `clm_ef84790b4914_ollama_intern_15`
- `clm_ef84790b4914_ollama_intern_22`
- `clm_bc58f284031b_ollama_intern_1`
- `clm_bc58f284031b_ollama_intern_3`
- `clm_bc58f284031b_ollama_intern_10`
- `clm_bc58f284031b_ollama_intern_11`
- `clm_d8935f3b0347_ollama_intern_133`
- `clm_d8935f3b0347_ollama_intern_135`
- `clm_d8935f3b0347_ollama_intern_172`
- `clm_d8935f3b0347_ollama_intern_173`
- `clm_d8935f3b0347_ollama_intern_184`
- `clm_d8935f3b0347_ollama_intern_185`
- `clm_d8935f3b0347_ollama_intern_186`
- `clm_d8935f3b0347_ollama_intern_188`
- `clm_d8935f3b0347_ollama_intern_190`
- `clm_0b13e026c1cc_ollama_intern_5`
- `clm_0b13e026c1cc_ollama_intern_6`
- `clm_0b13e026c1cc_ollama_intern_8`
- `clm_0b13e026c1cc_ollama_intern_10`
- `clm_0b13e026c1cc_ollama_intern_17`
- `clm_55a63071c9c1_ollama_intern_2`
- `clm_55a63071c9c1_ollama_intern_3`
- `clm_cfb7cbc09d44_ollama_intern_1`
- `clm_cfb7cbc09d44_ollama_intern_2`
- `clm_cfb7cbc09d44_ollama_intern_3`
- `clm_cfb7cbc09d44_ollama_intern_5`
- `clm_cfb7cbc09d44_ollama_intern_6`
- `clm_cfb7cbc09d44_ollama_intern_7`
- `clm_cfb7cbc09d44_ollama_intern_8`
- `clm_cfb7cbc09d44_ollama_intern_15`
- `clm_cfb7cbc09d44_ollama_intern_16`
- `clm_943086ae5d37_ollama_intern_1`
- `clm_943086ae5d37_ollama_intern_2`
- `clm_943086ae5d37_ollama_intern_3`
- `clm_943086ae5d37_ollama_intern_4`
- `clm_943086ae5d37_ollama_intern_5`
- `clm_c50580a705c4_ollama_intern_4`
- `clm_c50580a705c4_ollama_intern_12`
- `clm_c50580a705c4_ollama_intern_14`
- `clm_04c541af2502_ollama_intern_2`
- `clm_04c541af2502_ollama_intern_3`
- `clm_04c541af2502_ollama_intern_6`
- `clm_04c541af2502_ollama_intern_7`
- `clm_04c541af2502_ollama_intern_12`
- `clm_04c541af2502_ollama_intern_13`
- `clm_04c541af2502_ollama_intern_21`
- `clm_04c541af2502_ollama_intern_22`
- `clm_04c541af2502_ollama_intern_23`
- `clm_33eded38b390_ollama_intern_1`
- `clm_33eded38b390_ollama_intern_2`
- `clm_33eded38b390_ollama_intern_6`
- `clm_33eded38b390_ollama_intern_13`
- `clm_33eded38b390_ollama_intern_15`
- `clm_33eded38b390_ollama_intern_16`
- `clm_33eded38b390_ollama_intern_17`
- `clm_33eded38b390_ollama_intern_18`
- `clm_33eded38b390_ollama_intern_19`
- `clm_a9fd72b46944_ollama_intern_3`
- `clm_a9fd72b46944_ollama_intern_6`
- `clm_a9fd72b46944_ollama_intern_10`
- `clm_a9fd72b46944_ollama_intern_12`
- `clm_a9fd72b46944_ollama_intern_14`
- `clm_a9fd72b46944_ollama_intern_15`
- `clm_a9fd72b46944_ollama_intern_18`
- `clm_e3948fcd1578_ollama_intern_13`
- `clm_e3948fcd1578_ollama_intern_23`
- `clm_e3948fcd1578_ollama_intern_25`
- `clm_e3948fcd1578_ollama_intern_32`
- `clm_d5da902c1965_ollama_intern_3`
- `clm_d5da902c1965_ollama_intern_4`
- `clm_d5da902c1965_ollama_intern_5`
- `clm_d5da902c1965_ollama_intern_8`
- `clm_d5da902c1965_ollama_intern_9`
- `clm_68be97293369_ollama_intern_32`
- `clm_7f5634860b7d_ollama_intern_30`
- `clm_ad0801f16070_ollama_intern_10`
- `clm_ad0801f16070_ollama_intern_24`
- `clm_169fec56d321_ollama_intern_13`
- `clm_169fec56d321_ollama_intern_15`
- `clm_169fec56d321_ollama_intern_16`
- `clm_169fec56d321_ollama_intern_18`
- `clm_169fec56d321_ollama_intern_20`
- `clm_169fec56d321_ollama_intern_22`
- `clm_169fec56d321_ollama_intern_33`
- `clm_169fec56d321_ollama_intern_105`
- `clm_169fec56d321_ollama_intern_109`
- `clm_169fec56d321_ollama_intern_115`
- `clm_37ec19efa9ba_ollama_intern_6`
- `clm_37ec19efa9ba_ollama_intern_7`
- `clm_37ec19efa9ba_ollama_intern_8`
- `clm_d726c169567d_ollama_intern_3`
- `clm_d726c169567d_ollama_intern_15`
- `clm_d63ce314a50f_ollama_intern_1`
- `clm_d63ce314a50f_ollama_intern_3`
- `clm_d63ce314a50f_ollama_intern_5`
- `clm_d63ce314a50f_ollama_intern_6`
- `clm_d63ce314a50f_ollama_intern_24`
- `clm_d63ce314a50f_ollama_intern_25`
- `clm_d63ce314a50f_ollama_intern_30`
- `clm_4c6c14f4f6fa_ollama_intern_1`
- `clm_4c6c14f4f6fa_ollama_intern_4`
- `clm_4c6c14f4f6fa_ollama_intern_6`
- `clm_4c6c14f4f6fa_ollama_intern_7`
- `clm_4c6c14f4f6fa_ollama_intern_14`
- `clm_ba5aaca1a207_ollama_intern_10`
- `clm_ba5aaca1a207_ollama_intern_12`
- `clm_ba5aaca1a207_ollama_intern_104`
- `clm_ba5aaca1a207_ollama_intern_111`
- `clm_ba5aaca1a207_ollama_intern_115`
- `clm_ba5aaca1a207_ollama_intern_120`
- `clm_ba5aaca1a207_ollama_intern_121`
- `clm_083cda9d9328_ollama_intern_10`
- `clm_083cda9d9328_ollama_intern_11`
- `clm_083cda9d9328_ollama_intern_13`
- `clm_083cda9d9328_ollama_intern_21`
- `clm_083cda9d9328_ollama_intern_22`
- `clm_5fda19aa5cd8_ollama_intern_6`
- `clm_5fda19aa5cd8_ollama_intern_7`
- `clm_5fda19aa5cd8_ollama_intern_12`
- `clm_5fda19aa5cd8_ollama_intern_13`
- `clm_5fda19aa5cd8_ollama_intern_15`
- `clm_5fda19aa5cd8_ollama_intern_16`
- `clm_5670dbff3e4d_ollama_intern_2`
- `clm_5670dbff3e4d_ollama_intern_5`
- `clm_5670dbff3e4d_ollama_intern_6`
- `clm_5670dbff3e4d_ollama_intern_9`
- `clm_5670dbff3e4d_ollama_intern_11`
- `clm_5670dbff3e4d_ollama_intern_14`
- `clm_5670dbff3e4d_ollama_intern_16`
- `clm_5670dbff3e4d_ollama_intern_17`
- `clm_0974a54becd4_ollama_intern_10`
- `clm_0974a54becd4_ollama_intern_11`
- `clm_0974a54becd4_ollama_intern_12`
- `clm_24107f739f88_ollama_intern_5`
- `clm_24107f739f88_ollama_intern_6`
- `clm_24107f739f88_ollama_intern_9`
- `clm_b777c089d810_ollama_intern_37`
- `clm_e17170a435d3_ollama_intern_24`
- `clm_7e04a97ea278_ollama_intern_2`
- `clm_7e04a97ea278_ollama_intern_5`
- `clm_7d03db002fc2_ollama_intern_1`
- `clm_7d03db002fc2_ollama_intern_2`
- `clm_7d03db002fc2_ollama_intern_4`
- `clm_7d03db002fc2_ollama_intern_5`
- `clm_7d03db002fc2_ollama_intern_7`
- `clm_7d03db002fc2_ollama_intern_8`
- `clm_7d03db002fc2_ollama_intern_9`
- `clm_7d03db002fc2_ollama_intern_10`
- `clm_7d03db002fc2_ollama_intern_11`
- `clm_57341c85596c_ollama_intern_8`
- `clm_fc44452fd969_ollama_intern_7`
- `clm_fc44452fd969_ollama_intern_8`
- `clm_fc44452fd969_ollama_intern_10`
- `clm_ce610c7a7992_ollama_intern_3`
- `clm_ce610c7a7992_ollama_intern_8`
- `clm_8e8c16fd06c4_ollama_intern_4`
- `clm_8e8c16fd06c4_ollama_intern_5`
- `clm_0cf4f6250555_ollama_intern_2`
- `clm_639902f06da8_ollama_intern_11`
- `clm_639902f06da8_ollama_intern_12`

### Claims needing repair

- `clm_71469ccfe316_ollama_intern_4`
- `clm_6ee62ab47888_ollama_intern_9`
- `clm_6f54a167d232_ollama_intern_17`
- `clm_d3bd0f1dae0c_ollama_intern_10`
- `clm_d3bd0f1dae0c_ollama_intern_11`
- `clm_78aaa13e8387_ollama_intern_7`
- `clm_c1cc3cb1f943_ollama_intern_5`
- `clm_d02146dfcea5_ollama_intern_1`
- `clm_d02146dfcea5_ollama_intern_5`
- `clm_d02146dfcea5_ollama_intern_22`
- `clm_d02146dfcea5_ollama_intern_23`
- `clm_d02146dfcea5_ollama_intern_24`
- `clm_f7e212bc013e_ollama_intern_13`
- `clm_f7e212bc013e_ollama_intern_18`
- `clm_f7e212bc013e_ollama_intern_22`
- `clm_f7e212bc013e_ollama_intern_24`
- `clm_f7e212bc013e_ollama_intern_25`
- `clm_f7e212bc013e_ollama_intern_26`
- `clm_f7e212bc013e_ollama_intern_37`
- `clm_f7e212bc013e_ollama_intern_43`
- `clm_f7e212bc013e_ollama_intern_46`
- `clm_f7e212bc013e_ollama_intern_51`
- `clm_b00e2fac5e30_ollama_intern_5`
- `clm_b00e2fac5e30_ollama_intern_11`
- `clm_b00e2fac5e30_ollama_intern_14`
- `clm_b00e2fac5e30_ollama_intern_19`
- `clm_b00e2fac5e30_ollama_intern_25`
- `clm_b00e2fac5e30_ollama_intern_28`
- `clm_b00e2fac5e30_ollama_intern_29`
- `clm_b00e2fac5e30_ollama_intern_30`
- `clm_b00e2fac5e30_ollama_intern_34`
- `clm_b00e2fac5e30_ollama_intern_35`
- `clm_f6ad03378646_ollama_intern_2`
- `clm_f6ad03378646_ollama_intern_3`
- `clm_f6badbefe774_ollama_intern_2`
- `clm_5b703b620109_ollama_intern_1`
- `clm_5b703b620109_ollama_intern_3`
- `clm_c3216b0c8944_ollama_intern_15`
- `clm_c3216b0c8944_ollama_intern_18`
- `clm_d7289e5beb6d_ollama_intern_2`
- `clm_d7289e5beb6d_ollama_intern_10`
- `clm_d7289e5beb6d_ollama_intern_11`
- `clm_d7289e5beb6d_ollama_intern_13`
- `clm_d7289e5beb6d_ollama_intern_26`
- `clm_e6e0e4cb4ec7_ollama_intern_11`
- `clm_e6e0e4cb4ec7_ollama_intern_12`
- `clm_e6e0e4cb4ec7_ollama_intern_13`
- `clm_e6e0e4cb4ec7_ollama_intern_15`
- `clm_e6e0e4cb4ec7_ollama_intern_17`
- `clm_e6e0e4cb4ec7_ollama_intern_23`
- `clm_e6e0e4cb4ec7_ollama_intern_26`
- `clm_e6e0e4cb4ec7_ollama_intern_27`
- `clm_e6e0e4cb4ec7_ollama_intern_31`
- `clm_da88881cf961_ollama_intern_1`
- `clm_da88881cf961_ollama_intern_11`
- `clm_da88881cf961_ollama_intern_12`
- `clm_da88881cf961_ollama_intern_15`
- `clm_da88881cf961_ollama_intern_17`
- `clm_da88881cf961_ollama_intern_20`
- `clm_da88881cf961_ollama_intern_37`
- `clm_da88881cf961_ollama_intern_43`
- `clm_da88881cf961_ollama_intern_44`
- `clm_2b06a4f43c1e_ollama_intern_5`
- `clm_2b06a4f43c1e_ollama_intern_7`
- `clm_2b06a4f43c1e_ollama_intern_8`
- `clm_2b06a4f43c1e_ollama_intern_13`
- `clm_2b06a4f43c1e_ollama_intern_14`
- `clm_2b06a4f43c1e_ollama_intern_15`
- `clm_2b06a4f43c1e_ollama_intern_28`
- `clm_2b06a4f43c1e_ollama_intern_29`
- `clm_ef84790b4914_ollama_intern_1`
- `clm_ef84790b4914_ollama_intern_3`
- `clm_d8935f3b0347_ollama_intern_141`
- `clm_0b13e026c1cc_ollama_intern_2`
- `clm_0b13e026c1cc_ollama_intern_3`
- `clm_55a63071c9c1_ollama_intern_1`
- `clm_cfb7cbc09d44_ollama_intern_9`
- `clm_c5ed9836ffb5_ollama_intern_1`
- `clm_c5ed9836ffb5_ollama_intern_3`
- `clm_c5ed9836ffb5_ollama_intern_4`
- `clm_c5ed9836ffb5_ollama_intern_5`
- `clm_c5ed9836ffb5_ollama_intern_10`
- `clm_c5ed9836ffb5_ollama_intern_19`
- `clm_c5ed9836ffb5_ollama_intern_20`
- `clm_c5ed9836ffb5_ollama_intern_21`
- `clm_c5ed9836ffb5_ollama_intern_24`
- `clm_c5ed9836ffb5_ollama_intern_25`
- `clm_c50580a705c4_ollama_intern_8`
- `clm_c50580a705c4_ollama_intern_11`
- `clm_c50580a705c4_ollama_intern_16`
- `clm_c50580a705c4_ollama_intern_17`
- `clm_c50580a705c4_ollama_intern_20`
- `clm_c50580a705c4_ollama_intern_21`
- `clm_8b484efdebe2_ollama_intern_7`
- `clm_8b484efdebe2_ollama_intern_19`
- `clm_8b484efdebe2_ollama_intern_23`
- `clm_8b484efdebe2_ollama_intern_26`
- `clm_33eded38b390_ollama_intern_5`
- `clm_a9fd72b46944_ollama_intern_4`
- `clm_a9fd72b46944_ollama_intern_7`
- `clm_a9fd72b46944_ollama_intern_11`
- `clm_e3948fcd1578_ollama_intern_5`
- `clm_d5da902c1965_ollama_intern_1`
- `clm_d5da902c1965_ollama_intern_2`
- `clm_68be97293369_ollama_intern_3`
- `clm_68be97293369_ollama_intern_6`
- `clm_68be97293369_ollama_intern_9`
- `clm_68be97293369_ollama_intern_10`
- `clm_68be97293369_ollama_intern_24`
- `clm_68be97293369_ollama_intern_25`
- `clm_68be97293369_ollama_intern_28`
- `clm_68be97293369_ollama_intern_30`
- `clm_68be97293369_ollama_intern_39`
- `clm_7f5634860b7d_ollama_intern_1`
- `clm_7f5634860b7d_ollama_intern_2`
- `clm_7f5634860b7d_ollama_intern_3`
- `clm_7f5634860b7d_ollama_intern_11`
- `clm_7f5634860b7d_ollama_intern_12`
- `clm_7f5634860b7d_ollama_intern_23`
- `clm_7f5634860b7d_ollama_intern_25`
- `clm_7f5634860b7d_ollama_intern_31`
- `clm_7f5634860b7d_ollama_intern_46`
- `clm_ad0801f16070_ollama_intern_4`
- `clm_ad0801f16070_ollama_intern_29`
- `clm_ad0801f16070_ollama_intern_30`
- `clm_37ec19efa9ba_ollama_intern_2`
- `clm_d726c169567d_ollama_intern_1`
- `clm_b2e50dff76fc_ollama_intern_4`
- `clm_ba5aaca1a207_ollama_intern_1`
- `clm_ba5aaca1a207_ollama_intern_11`
- `clm_ba5aaca1a207_ollama_intern_55`
- `clm_5fda19aa5cd8_ollama_intern_4`
- `clm_5fda19aa5cd8_ollama_intern_5`
- `clm_5670dbff3e4d_ollama_intern_4`
- `clm_b777c089d810_ollama_intern_9`
- `clm_b777c089d810_ollama_intern_10`
- `clm_b777c089d810_ollama_intern_11`
- `clm_b777c089d810_ollama_intern_12`
- `clm_b777c089d810_ollama_intern_20`
- `clm_b777c089d810_ollama_intern_21`
- `clm_b777c089d810_ollama_intern_29`
- `clm_b777c089d810_ollama_intern_30`
- `clm_b777c089d810_ollama_intern_36`
- `clm_e17170a435d3_ollama_intern_8`
- `clm_e17170a435d3_ollama_intern_9`
- `clm_e17170a435d3_ollama_intern_10`
- `clm_e17170a435d3_ollama_intern_11`
- `clm_e17170a435d3_ollama_intern_12`
- `clm_e17170a435d3_ollama_intern_15`
- `clm_e17170a435d3_ollama_intern_26`
- `clm_e17170a435d3_ollama_intern_27`
- `clm_7e04a97ea278_ollama_intern_10`
- `clm_7e04a97ea278_ollama_intern_13`
- `clm_7e04a97ea278_ollama_intern_14`
- `clm_7e04a97ea278_ollama_intern_16`
- `clm_7e04a97ea278_ollama_intern_17`
- `clm_7e04a97ea278_ollama_intern_25`
- `clm_7e04a97ea278_ollama_intern_26`
- `clm_7e04a97ea278_ollama_intern_33`
- `clm_57341c85596c_ollama_intern_16`
- `clm_0cf4f6250555_ollama_intern_6`
- `clm_0cf4f6250555_ollama_intern_18`
- `clm_0cf4f6250555_ollama_intern_21`
- `clm_0cf4f6250555_ollama_intern_22`
- `clm_0cf4f6250555_ollama_intern_24`
- `clm_0cf4f6250555_ollama_intern_28`
- `clm_639902f06da8_ollama_intern_10`

### Rejected claims

- `clm_e6e0e4cb4ec7_ollama_intern_24`
- `clm_da88881cf961_ollama_intern_5`

### Unresolved contradictions

_None._

### Active waivers

- **gate.source_floor** applied to `01-engine-version-export-template-compat.min_independent_publishers`
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
- **gate.source_floor** applied to `01-engine-version-export-template-compat.primary_sources_required`
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
- **gate.source_floor** applied to `03-save-system-player-state-durability.primary_sources_required`
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
