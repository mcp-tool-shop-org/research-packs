# Freeze Receipt: What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?

**Verdict:** [FROZEN]
**Pack ID:** `000063d75a07`
**Frozen at:** 2026-05-09T08:30:02.276Z

> Freeze locks completed research truth. Every artifact below carries a sha256 fingerprint. The pack is now immutable evidence; any further mutation invalidates the receipt.

## Counts

- **Sources:** 59
- **Claims:** 252
- **Contradictions:** 171
- **Review findings:** 0
- **Gate results:** 8

## Sections

| Section | Status | Accepted claims | Sources | Contradictions |
|---|---|---|---|---|
| `01-node-dependency-fragility` | frozen | 40 | 0 | 0 |
| `02-model-file-identity` | frozen | 29 | 0 | 0 |
| `03-workflow-schema-stability` | frozen | 39 | 0 | 0 |
| `04-environment-reproducibility` | frozen | 74 | 0 | 0 |
| `05-community-distribution-patterns` | frozen | 15 | 0 | 0 |
| `06-comfyui-core-versioning` | frozen | 33 | 0 | 0 |
| `07-existing-control-plane-attempts` | frozen | 21 | 0 | 0 |
| `08-failure-taxonomy` | frozen | 51 | 0 | 0 |

## Citation coverage

- **Accepted claims:** 252
- **Cited in synthesis:** 47
- **Uncited accepted (informational):** 206

Uncited accepted claim_ids (preserved for future synthesis):
- `clm_07126047391f_ollama_intern_2`
- `clm_07437ed8d167_ollama_intern_1`
- `clm_0a0723012f3c_ollama_intern_13`
- `clm_0a0723012f3c_ollama_intern_18`
- `clm_0a0723012f3c_ollama_intern_21`
- `clm_0a0723012f3c_ollama_intern_22`
- `clm_0a0723012f3c_ollama_intern_5`
- `clm_118111ce7028_ollama_intern_11`
- `clm_118111ce7028_ollama_intern_2`
- `clm_118111ce7028_ollama_intern_21`
- `clm_118111ce7028_ollama_intern_27`
- `clm_118111ce7028_ollama_intern_5`
- `clm_118111ce7028_ollama_intern_6`
- `clm_118111ce7028_ollama_intern_9`
- `clm_1e2124f6f8d4_ollama_intern_24`
- `clm_1e2124f6f8d4_ollama_intern_27`
- `clm_2086dbbb6560_ollama_intern_15`
- `clm_2086dbbb6560_ollama_intern_16`
- `clm_2086dbbb6560_ollama_intern_17`
- `clm_2086dbbb6560_ollama_intern_24`
- `clm_2086dbbb6560_ollama_intern_35`
- `clm_2086dbbb6560_ollama_intern_39`
- `clm_2086dbbb6560_ollama_intern_4`
- `clm_2086dbbb6560_ollama_intern_47`
- `clm_2086dbbb6560_ollama_intern_7`
- `clm_26117b36a866_ollama_intern_1`
- `clm_26117b36a866_ollama_intern_18`
- `clm_26117b36a866_ollama_intern_25`
- `clm_26117b36a866_ollama_intern_26`
- `clm_26117b36a866_ollama_intern_3`
- `clm_26117b36a866_ollama_intern_38`
- `clm_26117b36a866_ollama_intern_40`
- `clm_26117b36a866_ollama_intern_42`
- `clm_2a30a3ff7502_ollama_intern_2`
- `clm_2a30a3ff7502_ollama_intern_3`
- `clm_2a30a3ff7502_ollama_intern_7`
- `clm_2ae04b870db8_ollama_intern_1`
- `clm_2ae04b870db8_ollama_intern_3`
- `clm_2ae04b870db8_ollama_intern_4`
- `clm_2c5240f22e27_ollama_intern_3`
- `clm_2e0add2bdec7_ollama_intern_10`
- `clm_2e0add2bdec7_ollama_intern_13`
- `clm_2e0add2bdec7_ollama_intern_4`
- `clm_2e0add2bdec7_ollama_intern_6`
- `clm_2e0add2bdec7_ollama_intern_7`
- `clm_2e0add2bdec7_ollama_intern_9`
- `clm_417fb676dd7b_ollama_intern_5`
- `clm_484224037767_ollama_intern_16`
- `clm_484224037767_ollama_intern_7`
- `clm_55456d4dedfa_ollama_intern_1`
- `clm_55456d4dedfa_ollama_intern_17`
- `clm_55456d4dedfa_ollama_intern_20`
- `clm_55456d4dedfa_ollama_intern_5`
- `clm_55456d4dedfa_ollama_intern_6`
- `clm_55456d4dedfa_ollama_intern_8`
- `clm_55456d4dedfa_ollama_intern_9`
- `clm_5941285ed842_ollama_intern_13`
- `clm_5941285ed842_ollama_intern_14`
- `clm_5941285ed842_ollama_intern_15`
- `clm_5941285ed842_ollama_intern_18`
- `clm_5941285ed842_ollama_intern_2`
- `clm_5941285ed842_ollama_intern_22`
- `clm_5941285ed842_ollama_intern_3`
- `clm_664a4a54b4c3_ollama_intern_12`
- `clm_664a4a54b4c3_ollama_intern_13`
- `clm_664a4a54b4c3_ollama_intern_14`
- `clm_664a4a54b4c3_ollama_intern_15`
- `clm_664a4a54b4c3_ollama_intern_3`
- `clm_664a4a54b4c3_ollama_intern_4`
- `clm_664a4a54b4c3_ollama_intern_7`
- `clm_664a4a54b4c3_ollama_intern_9`
- `clm_6ccf8c48cc5a_ollama_intern_1`
- `clm_6ccf8c48cc5a_ollama_intern_14`
- `clm_6ccf8c48cc5a_ollama_intern_6`
- `clm_6ccf8c48cc5a_ollama_intern_7`
- `clm_6ccf8c48cc5a_ollama_intern_9`
- `clm_72d8ae653457_ollama_intern_11`
- `clm_72d8ae653457_ollama_intern_12`
- `clm_72d8ae653457_ollama_intern_2`
- `clm_72d8ae653457_ollama_intern_3`
- `clm_72d8ae653457_ollama_intern_4`
- `clm_72d8ae653457_ollama_intern_8`
- `clm_75194fe21c45_ollama_intern_1`
- `clm_75194fe21c45_ollama_intern_3`
- `clm_75194fe21c45_ollama_intern_5`
- `clm_75194fe21c45_ollama_intern_6`
- `clm_7c8ae5fe342a_ollama_intern_2`
- `clm_7c8ae5fe342a_ollama_intern_3`
- `clm_967446798047_ollama_intern_4`
- `clm_967446798047_ollama_intern_5`
- `clm_a295cc4f28d3_ollama_intern_2`
- `clm_a295cc4f28d3_ollama_intern_9`
- `clm_a52f23a8cbd2_ollama_intern_5`
- `clm_a8c5d541c698_ollama_intern_5`
- `clm_a8c5d541c698_ollama_intern_8`
- `clm_aa570bcb9060_ollama_intern_10`
- `clm_aa570bcb9060_ollama_intern_12`
- `clm_aa570bcb9060_ollama_intern_14`
- `clm_aa570bcb9060_ollama_intern_16`
- `clm_aa570bcb9060_ollama_intern_17`
- `clm_aa570bcb9060_ollama_intern_27`
- `clm_aa570bcb9060_ollama_intern_4`
- `clm_aede2f10d470_ollama_intern_10`
- `clm_aede2f10d470_ollama_intern_11`
- `clm_aede2f10d470_ollama_intern_13`
- `clm_aede2f10d470_ollama_intern_14`
- `clm_aede2f10d470_ollama_intern_17`
- `clm_aede2f10d470_ollama_intern_19`
- `clm_b507da5fa466_ollama_intern_2`
- `clm_b507da5fa466_ollama_intern_3`
- `clm_b507da5fa466_ollama_intern_4`
- `clm_b507da5fa466_ollama_intern_5`
- `clm_b507da5fa466_ollama_intern_6`
- `clm_b81c03003037_ollama_intern_17`
- `clm_b81c03003037_ollama_intern_21`
- `clm_b81c03003037_ollama_intern_3`
- `clm_b81c03003037_ollama_intern_5`
- `clm_b81c03003037_ollama_intern_8`
- `clm_b81c03003037_ollama_intern_9`
- `clm_bd638b8de92f_ollama_intern_1`
- `clm_bd638b8de92f_ollama_intern_10`
- `clm_bd638b8de92f_ollama_intern_3`
- `clm_c038edbf6251_ollama_intern_1`
- `clm_c038edbf6251_ollama_intern_13`
- `clm_c038edbf6251_ollama_intern_16`
- `clm_c038edbf6251_ollama_intern_18`
- `clm_c038edbf6251_ollama_intern_2`
- `clm_c038edbf6251_ollama_intern_3`
- `clm_c038edbf6251_ollama_intern_4`
- `clm_c038edbf6251_ollama_intern_5`
- `clm_c038edbf6251_ollama_intern_8`
- `clm_c39e382ce301_ollama_intern_1`
- `clm_c39e382ce301_ollama_intern_3`
- `clm_ccc15b6a3971_ollama_intern_1`
- `clm_ccc15b6a3971_ollama_intern_2`
- `clm_ccc15b6a3971_ollama_intern_3`
- `clm_ccc15b6a3971_ollama_intern_4`
- `clm_ccc15b6a3971_ollama_intern_5`
- `clm_ccc15b6a3971_ollama_intern_6`
- `clm_cf20a276ca4d_ollama_intern_8`
- `clm_cf20a276ca4d_ollama_intern_9`
- `clm_d44182697e02_ollama_intern_2`
- `clm_e1e83dbebd28_ollama_intern_10`
- `clm_e1e83dbebd28_ollama_intern_11`
- `clm_e519c32165e4_ollama_intern_10`
- `clm_e519c32165e4_ollama_intern_24`
- `clm_e519c32165e4_ollama_intern_25`
- `clm_e519c32165e4_ollama_intern_26`
- `clm_e519c32165e4_ollama_intern_27`
- `clm_e519c32165e4_ollama_intern_28`
- `clm_e519c32165e4_ollama_intern_7`
- `clm_e519c32165e4_ollama_intern_8`
- `clm_e7045b6bccdb_ollama_intern_1`
- `clm_e7045b6bccdb_ollama_intern_3`
- `clm_e7045b6bccdb_ollama_intern_7`
- `clm_e7045b6bccdb_ollama_intern_8`
- `clm_e804faef8c79_ollama_intern_16`
- `clm_e804faef8c79_ollama_intern_24`
- `clm_e804faef8c79_ollama_intern_8`
- `clm_e804faef8c79_ollama_intern_9`
- `clm_ed31f644833c_ollama_intern_1`
- `clm_ed31f644833c_ollama_intern_14`
- `clm_ed31f644833c_ollama_intern_21`
- `clm_ed31f644833c_ollama_intern_3`
- `clm_ed31f644833c_ollama_intern_5`
- `clm_ed31f644833c_ollama_intern_6`
- `clm_ed31f644833c_ollama_intern_7`
- `clm_ed31f644833c_ollama_intern_9`
- `clm_f311c690b666_ollama_intern_100`
- `clm_f311c690b666_ollama_intern_101`
- `clm_f311c690b666_ollama_intern_103`
- `clm_f311c690b666_ollama_intern_105`
- `clm_f311c690b666_ollama_intern_106`
- `clm_f311c690b666_ollama_intern_6`
- `clm_f311c690b666_ollama_intern_8`
- `clm_f4ce9a16c6b4_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_13`
- `clm_f4ce9a16c6b4_ollama_intern_14`
- `clm_f4ce9a16c6b4_ollama_intern_16`
- `clm_f4ce9a16c6b4_ollama_intern_17`
- `clm_f4ce9a16c6b4_ollama_intern_21`
- `clm_f4ce9a16c6b4_ollama_intern_23`
- `clm_f4ce9a16c6b4_ollama_intern_26`
- `clm_f4ce9a16c6b4_ollama_intern_27`
- `clm_f4ce9a16c6b4_ollama_intern_3`
- `clm_f4ce9a16c6b4_ollama_intern_31`
- `clm_f4ce9a16c6b4_ollama_intern_5`
- `clm_f4ce9a16c6b4_ollama_intern_6`
- `clm_f4ce9a16c6b4_ollama_intern_9`
- `clm_f9b159fab5ef_ollama_intern_4`
- `clm_f9b159fab5ef_ollama_intern_5`
- `clm_f9b159fab5ef_ollama_intern_8`
- `clm_fbbdece73b76_ollama_intern_19`
- `clm_fcdd7f1c90e9_ollama_intern_10`
- `clm_fcdd7f1c90e9_ollama_intern_11`
- `clm_fcdd7f1c90e9_ollama_intern_12`
- `clm_fcdd7f1c90e9_ollama_intern_13`
- `clm_fcdd7f1c90e9_ollama_intern_14`
- `clm_fcdd7f1c90e9_ollama_intern_16`
- `clm_fcdd7f1c90e9_ollama_intern_17`
- `clm_fcdd7f1c90e9_ollama_intern_18`
- `clm_fcdd7f1c90e9_ollama_intern_19`
- `clm_fcdd7f1c90e9_ollama_intern_20`
- `clm_fcdd7f1c90e9_ollama_intern_3`
- `clm_fcdd7f1c90e9_ollama_intern_4`
- `clm_fcdd7f1c90e9_ollama_intern_5`

## Unresolved contradictions disclosed

- `cnt_f38573f37716_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_21c3d1e7419f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f42b263bbe62_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_080bb959a2a3_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e79326b001b6_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a1a719a9f2b8_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_1e4f2129c53b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9c8a42519e8e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, high) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_382cf9771f4c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_59443972b2ea_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8840323d580f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7082f21290d5_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8ee37f1d24b8_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_04b7c4c0218d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_19a1573b6bcf_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d407a1e37818_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_686027a58ad2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4de62f0af7ef_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8344053d4de9_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_23268c1b5807_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_3acb816e79d0_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_42e98f1fffac_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_96f2f2ebc956_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7a50a26fd3a8_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f74a31118f9c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_33ad73d19ff8_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_fc6dd10e8d28_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9816bacd934b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_2f16e9a70413_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b3b52e152b21_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_062b6f6968dc_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d21ab772a096_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_711664a1c9fa_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c123be12bf60_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_24e058ab675e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_cd7eaebdfbf5_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_03f6ac6d1c6f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b5234b07fd98_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7a9a9527acfd_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_716685b980ed_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_30e5d5d55574_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_10f12ecc47de_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4df7383d5230_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_2065d5fcfa19_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c2711d345695_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_af58528b5d74_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, high) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c5879e570d1e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9303efa95382_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e89ecdbdb2b1_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_33c7fe8da3c5_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_2a3b7dd292c0_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, temporal_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ce4921f79d3c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_88a9b747da83_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_1e62c83bf6de_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_41168affb7d2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ab7d95eae2e6_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a3a402f76fb2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_30e19f900471_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_93911c456c08_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_723895670f4b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_97163970cf72_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_97b89c687fe2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e16821cff583_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e133db9cb19c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_454ef29ba13e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_41316f0bdd4c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b81438c05a3b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_3d61c06ad520_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e820ae557c91_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_0c831e08af09_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_99fb7401356b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f05a0af91b70_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_96005502ff1f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ce3411c340a2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b645eafb675f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_13ddda82c8cc_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4da1593c9998_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e5d5e9310dd2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_0cca54e9f42d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_38523ee8ca75_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_0a2b07adc2c7_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, high) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a19727c2d637_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_cc80cd5d0928_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_507a116a8d26_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_3168941441c0_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_89b0f98cf55c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8020bc7dcd0d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c7dbefd712be_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_636e9ae9f130_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b8a1ebda2a53_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_09d4340580f4_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9fc5c0e8be88_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7402f0cd0c38_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8167a5b07d8c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_374b8c855c8f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_accb4df71fa6_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_64c403533b5a_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_3320766588e3_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7774b59a012e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4330eccaea5d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_38b8504f8100_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_be4547a36b2c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_52db8e3fa5a1_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, high) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a2238c1c8a5b_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_161e476670cf_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f7852374658c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8624b6a29a9a_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d767c5461688_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a2752a72a8a9_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8d7b13df2fad_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_945e2a434dba_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d275955c98a7_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f0cdc21e659e_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, high) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_310aa75f0593_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_643c271b7c55_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9ed270871d67_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9a49d7b945dc_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ecc8affa92d2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_5f1dda93f541_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_dd89dbd0b46d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_693030b1a884_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_45199cb0b478_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c02ca7349707_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f6188b8e436d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c7dbcf05f985_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a381905cdf3c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_80d337453717_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_a8dc9b448567_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_90e9c5cbfc0a_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, temporal_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4444c501fc92_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_687cbdde2af6_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9bace00a1253_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_f0ffc366debd_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_af76424fc415_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_45b99cbf9d4c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_6e732ec1791f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_48bcf184604f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_dbe25141d7cd_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_8f017ec5eab7_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, temporal_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_eee6851d4afd_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_38f2d2a465d4_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_6759af3377ac_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_22b641b58d06_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b44bd062f4c2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d8f140641cb3_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_bc3930125525_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_6d87eb5155f9_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_741d84053481_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c91da8e6735c_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_c12d98d73a8f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_e16be69aa29f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_733eef12c03a_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_321b0dae0b47_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_9a3f96fcca35_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ccc6413766b8_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_dc27527f561a_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4f743ac9014f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b7b0a9c9ed06_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_95eb8245bc6f_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, temporal_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_ca1f561ae168_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7f07900cb405_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7b4768dfe09d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_b580e61187b2_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_6ee9aa0a66f4_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_7c6372f2a527_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d04575443743_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_123d6a0d9e84_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_2c145ac0a0be_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, direct_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_d000531908cf_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_4b17e2373d63_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, definition_conflict, low) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
- `cnt_60dc6780d54d_ollama_intern` (`06-comfyui-core-versioning,07-existing-control-plane-attempts`, scope_conflict, medium) — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`

## Waivers disclosed

- **source_floor.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.01-node-dependency-fragility.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.02-model-file-identity.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.03-workflow-schema-stability.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.04-environment-reproducibility.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.06-comfyui-core-versioning.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.07-existing-control-plane-attempts.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **source_floor.08-failure-taxonomy.primary_sources_required** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.

## Integrity checks

- [PASS] **pack_audit_ready** — pack-audit verdict=ready_for_synthesis
- [PASS] **handoff_synthesis_ready** — cowork-handoff mode=synthesis_ready
- [PASS] **synthesis_workspace_present** — 5/5 synthesis files hashed
- [PASS] **final_report_cites_accepted_claims_only** — 28 citation(s); 0 unknown, 0 repair/rejected
- [PASS] **unresolved_contradictions_disclosed** — 171 contradiction(s) checked
- [PASS] **waivers_disclosed** — 8 waiver(s) checked
- [PASS] **canonical_artifacts_fingerprinted** — 119 artifact(s) hashed

## Synthesis fingerprints

| Path | Bytes | sha256 |
|---|---|---|
| `synthesis/cross-section-map.json` | 2256998 | `d2c6b41056fda6b7…` |
| `synthesis/cross-section-map.md` | 1579414 | `a8565adb5e3c6465…` |
| `synthesis/decision-brief.md` | 21211 | `06b1fa25b4032963…` |
| `synthesis/working-report.md` | 11973 | `5f43baf9f013a76a…` |
| `synthesis/final-report.md` | 26259 | `217d9cadc3da3a37…` |

## Canonical artifact fingerprints

Total: 119 files

| Path | Bytes | sha256 |
|---|---|---|
| `research.yaml` | 4834 | `caed1d79267e8c6a…` |
| `sections/01-node-dependency-fragility/claims.jsonl` | 186721 | `9a78d4942e5eefc4…` |
| `sections/01-node-dependency-fragility/sources.jsonl` | 639 | `e9e8840f54b3a8f4…` |
| `sections/01-node-dependency-fragility/claim-reviews.jsonl` | 21738 | `4faf4e25e66e6ebb…` |
| `sections/01-node-dependency-fragility/gates.yaml` | 326 | `710ae794c5df7382…` |
| `audits/01-node-dependency-fragility-gate.json` | 43765 | `9316024fd08b75d7…` |
| `audits/01-node-dependency-fragility-review.json` | 98431 | `4f8923b7a1e63d59…` |
| `audits/01-node-dependency-fragility-findings.jsonl` | 59813 | `e4dc506b17ea37c3…` |
| `sections/02-model-file-identity/claims.jsonl` | 167610 | `7d1b143c8d48565e…` |
| `sections/02-model-file-identity/sources.jsonl` | 639 | `af4acf2734083966…` |
| `sections/02-model-file-identity/claim-reviews.jsonl` | 25376 | `9d98a386e460fd35…` |
| `sections/02-model-file-identity/gates.yaml` | 334 | `cfbe4cb12751ab7e…` |
| `audits/02-model-file-identity-gate.json` | 41200 | `4457633531f1131d…` |
| `audits/02-model-file-identity-review.json` | 126803 | `c9daac336344e698…` |
| `audits/02-model-file-identity-findings.jsonl` | 79691 | `a186a796682ee5fa…` |
| `sections/03-workflow-schema-stability/claims.jsonl` | 212459 | `fa303212e27cfd3b…` |
| `sections/03-workflow-schema-stability/sources.jsonl` | 781 | `fcfd0ca063c413c2…` |
| `sections/03-workflow-schema-stability/claim-reviews.jsonl` | 22774 | `82bf14227211d6b0…` |
| `sections/03-workflow-schema-stability/gates.yaml` | 369 | `7c621c8ebb322623…` |
| `audits/03-workflow-schema-stability-gate.json` | 52027 | `dad1835cee108857…` |
| `audits/03-workflow-schema-stability-review.json` | 105114 | `cbdeabcd5b62c106…` |
| `audits/03-workflow-schema-stability-findings.jsonl` | 64316 | `b1a63f4db8d2a0e5…` |
| `sections/04-environment-reproducibility/claims.jsonl` | 287837 | `d21eff5fe4bc96ae…` |
| `sections/04-environment-reproducibility/sources.jsonl` | 852 | `41b138abc73ae2fa…` |
| `sections/04-environment-reproducibility/claim-reviews.jsonl` | 111550 | `e21c80705cbbf63e…` |
| `sections/04-environment-reproducibility/gates.yaml` | 338 | `2fb1a00b85bc4b2b…` |
| `audits/04-environment-reproducibility-gate.json` | 68957 | `3ba2759814aa24c9…` |
| `audits/04-environment-reproducibility-review.json` | 145528 | `8f7b5fa83bf05722…` |
| `audits/04-environment-reproducibility-findings.jsonl` | 232627 | `52113588b625df67…` |
| `sections/05-community-distribution-patterns/claims.jsonl` | 132091 | `59243776d7d47d52…` |
| `sections/05-community-distribution-patterns/sources.jsonl` | 426 | `90df0c4e9870942e…` |
| `sections/05-community-distribution-patterns/claim-reviews.jsonl` | 13114 | `0b6f050f377ef9a4…` |
| `sections/05-community-distribution-patterns/gates.yaml` | 374 | `24c70f6aa511cba8…` |
| `audits/05-community-distribution-patterns-gate.json` | 31661 | `40be37be1d72a1f5…` |
| `audits/05-community-distribution-patterns-review.json` | 62536 | `5b1cb8005129f7ee…` |
| `audits/05-community-distribution-patterns-findings.jsonl` | 38455 | `27c4dcf158549183…` |
| `sections/06-comfyui-core-versioning/claims.jsonl` | 331055 | `fa65febeec7def14…` |
| `sections/06-comfyui-core-versioning/sources.jsonl` | 994 | `a8a39936b1e3dc3b…` |
| `sections/06-comfyui-core-versioning/contradictions.jsonl` | 964776 | `9465c18a43d97c11…` |
| `sections/06-comfyui-core-versioning/claim-reviews.jsonl` | 355839 | `f81d4a758190b7b9…` |
| `sections/06-comfyui-core-versioning/gates.yaml` | 382 | `8b9339f16585c831…` |
| `audits/06-comfyui-core-versioning-gate.json` | 80482 | `7d0b50bbb119b24b…` |
| `audits/06-comfyui-core-versioning-review.json` | 189270 | `be06bc9310cfdf9d…` |
| `audits/06-comfyui-core-versioning-findings.jsonl` | 1799916 | `a4049594a819a81c…` |
| `sections/07-existing-control-plane-attempts/claims.jsonl` | 137670 | `0856eba8fc2f00c6…` |
| `sections/07-existing-control-plane-attempts/sources.jsonl` | 710 | `a3371947c770abff…` |
| `sections/07-existing-control-plane-attempts/claim-reviews.jsonl` | 14977 | `47d084e4d42104bf…` |
| `sections/07-existing-control-plane-attempts/gates.yaml` | 384 | `4f308e9439434389…` |
| `audits/07-existing-control-plane-attempts-gate.json` | 39025 | `ed5e17d87639f49b…` |
| `audits/07-existing-control-plane-attempts-review.json` | 68247 | `bea7e460c62c9778…` |
| `audits/07-existing-control-plane-attempts-findings.jsonl` | 41494 | `a2f4a7b87d5b669d…` |
| `sections/08-failure-taxonomy/claims.jsonl` | 192443 | `1359eaa2aff5e9c3…` |
| `sections/08-failure-taxonomy/sources.jsonl` | 781 | `b0e5d78c408e143f…` |
| `sections/08-failure-taxonomy/claim-reviews.jsonl` | 63996 | `fa48200666d1c830…` |
| `sections/08-failure-taxonomy/gates.yaml` | 401 | `c199b12da8a8d9ca…` |
| `audits/08-failure-taxonomy-gate.json` | 46456 | `d6a643a38354c3f7…` |
| `audits/08-failure-taxonomy-review.json` | 138519 | `b56044168a3b4981…` |
| `audits/08-failure-taxonomy-findings.jsonl` | 165366 | `4722b66fca485a8e…` |
| `evidence/fetch-log.jsonl` | 61558 | `e7d8c5501cc45bfb…` |
| `evidence/citation-ledger.jsonl` | 0 | `e3b0c44298fc1c14…` |
| `evidence/source-cards/src_049006574d3f.json` | 808 | `0ec182eeea2a2d8e…` |
| `evidence/source-cards/src_07126047391f.json` | 1373 | `862e76eff627c571…` |
| `evidence/source-cards/src_07437ed8d167.json` | 1580 | `19f7d87ebd2d8037…` |
| `evidence/source-cards/src_0a0723012f3c.json` | 5116 | `8a4b1dd073bfb716…` |
| `evidence/source-cards/src_0a3149c031c5.json` | 885 | `5831a80fb118447f…` |
| `evidence/source-cards/src_118111ce7028.json` | 1084 | `eb5fedfc387b1216…` |
| `evidence/source-cards/src_155d801f1917.json` | 702 | `380f548c0fcc047c…` |
| `evidence/source-cards/src_19e3c332733b.json` | 700 | `300d88a147eb6a05…` |
| `evidence/source-cards/src_19f4e9c54b47.json` | 847 | `53a8bc09f4c18fd3…` |
| `evidence/source-cards/src_1e2124f6f8d4.json` | 1088 | `72de6e6550b9230d…` |
| `evidence/source-cards/src_2086dbbb6560.json` | 4063 | `8ffcb34286d281d3…` |
| `evidence/source-cards/src_26117b36a866.json` | 4631 | `40368c1681e0cd4b…` |
| `evidence/source-cards/src_2a30a3ff7502.json` | 959 | `e97f114303a0a806…` |
| `evidence/source-cards/src_2ae04b870db8.json` | 904 | `48cc7a09ec1e1092…` |
| `evidence/source-cards/src_2c5240f22e27.json` | 18120 | `be17acfe330979b5…` |
| `evidence/source-cards/src_2e0add2bdec7.json` | 887 | `12f73b0d1f03f3e3…` |
| `evidence/source-cards/src_417fb676dd7b.json` | 1550 | `9c8cdc1fe55b8621…` |
| `evidence/source-cards/src_484224037767.json` | 7680 | `51fc6d7a7477f28e…` |
| `evidence/source-cards/src_4c437e284d95.json` | 657 | `d7f31783478d2669…` |
| `evidence/source-cards/src_55456d4dedfa.json` | 1019 | `cd735c58e48a3e80…` |
| `evidence/source-cards/src_5941285ed842.json` | 859 | `a15fc63285bd2c7d…` |
| `evidence/source-cards/src_664a4a54b4c3.json` | 913 | `3786a78a439350bd…` |
| `evidence/source-cards/src_6ccf8c48cc5a.json` | 1119 | `e3919ed9fab3a31a…` |
| `evidence/source-cards/src_72d8ae653457.json` | 1000 | `835fd353ede136db…` |
| `evidence/source-cards/src_75194fe21c45.json` | 845 | `79795705d9672bf6…` |
| `evidence/source-cards/src_7c8ae5fe342a.json` | 819 | `47022676fbd00e05…` |
| `evidence/source-cards/src_8a319c76148c.json` | 663 | `3fb37c0bf2b43f26…` |
| `evidence/source-cards/src_8f706291ff12.json` | 866 | `97b97941495696cf…` |
| `evidence/source-cards/src_967446798047.json` | 879 | `ed672082575a1133…` |
| `evidence/source-cards/src_981216eba718.json` | 807 | `1131725c9226ef7f…` |
| `evidence/source-cards/src_990ca9d75d8b.json` | 652 | `5fad700295ef1b15…` |
| `evidence/source-cards/src_a295cc4f28d3.json` | 906 | `8d3eca6a667fb38a…` |
| `evidence/source-cards/src_a52f23a8cbd2.json` | 1284 | `f2165cbe2cec0462…` |
| `evidence/source-cards/src_a8c5d541c698.json` | 910 | `c9a011c8baf68fa2…` |
| `evidence/source-cards/src_aa570bcb9060.json` | 7769 | `bb07fcced8f0f77a…` |
| `evidence/source-cards/src_aede2f10d470.json` | 1057 | `2f3b1edb1f6f335e…` |
| `evidence/source-cards/src_b507da5fa466.json` | 719 | `e57edd4521495f0f…` |
| `evidence/source-cards/src_b81c03003037.json` | 953 | `7818ce5084d591d6…` |
| `evidence/source-cards/src_bd638b8de92f.json` | 858 | `bb370ef7922949e0…` |
| `evidence/source-cards/src_c038edbf6251.json` | 896 | `517c59afe1fccf47…` |
| `evidence/source-cards/src_c39e382ce301.json` | 10133 | `c913d09012c7eb43…` |
| `evidence/source-cards/src_ccc15b6a3971.json` | 1236 | `8921d67988544a91…` |
| `evidence/source-cards/src_cea54dbbe5e3.json` | 1911 | `2eaad062a9f6b080…` |
| `evidence/source-cards/src_cf20a276ca4d.json` | 1238 | `5fd537bb8a9c724a…` |
| `evidence/source-cards/src_d44182697e02.json` | 766 | `36251cee59a03d1f…` |
| `evidence/source-cards/src_d56e68044c24.json` | 1464 | `d9a355c44682b28c…` |
| `evidence/source-cards/src_df4ad7d6f9c0.json` | 845 | `86bf2c4d467ca973…` |
| `evidence/source-cards/src_e19e5e376175.json` | 2029 | `adf144726a9e5c56…` |
| `evidence/source-cards/src_e1e83dbebd28.json` | 1223 | `f77d01e61871af51…` |
| `evidence/source-cards/src_e519c32165e4.json` | 1439 | `abe5d1ec600f4d77…` |
| `evidence/source-cards/src_e7045b6bccdb.json` | 1414 | `93e5645bcb89b662…` |
| `evidence/source-cards/src_e804faef8c79.json` | 2391 | `7a3e72974eb6095f…` |
| `evidence/source-cards/src_ed31f644833c.json` | 40665 | `ad57fdf812c1bec7…` |
| `evidence/source-cards/src_f311c690b666.json` | 1255 | `bdab26974439523c…` |
| `evidence/source-cards/src_f4ce9a16c6b4.json` | 3108 | `265a4e799f93372a…` |
| `evidence/source-cards/src_f6c7ab7a2205.json` | 2986 | `116e9a9ed05fd684…` |
| `evidence/source-cards/src_f9b159fab5ef.json` | 1033 | `be948e32909d63c6…` |
| `evidence/source-cards/src_fbbdece73b76.json` | 604 | `74749be5f62114c1…` |
| `evidence/source-cards/src_fcdd7f1c90e9.json` | 1156 | `66149240064d468d…` |
