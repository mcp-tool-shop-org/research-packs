# Cowork Handoff: What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?

**Pack ID:** `179752ef486d`
**Mode:** [SYNTHESIS READY] synthesis_ready
**Synthesis allowed:** yes
**Generated:** 2026-05-09T08:10:29.610Z
**Index:** missing

> Pack mode=synthesis_ready; 8 section(s) total, 8 synthesis-eligible, 0 blocked or unrun. 302 accepted claim(s); 182 need repair; 0 dispositioned; 2 rejected; 0 unresolved contradiction(s); 8 waiver(s).

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
| `01-node-dependency-fragility` | gated | warn | yes | 169 | 40 | 13 | 0 | 0 |
| `02-model-file-identity` | gated | warn | yes | 162 | 29 | 32 | 0 | 0 |
| `03-workflow-schema-stability` | gated | warn | yes | 198 | 39 | 16 | 0 | 0 |
| `04-environment-reproducibility` | gated | warn | yes | 284 | 74 | 11 | 1 | 0 |
| `05-community-distribution-patterns` | gated | warn | yes | 108 | 15 | 17 | 0 | 0 |
| `06-comfyui-core-versioning` | gated | warn | yes | 377 | 33 | 51 | 1 | 0 |
| `07-existing-control-plane-attempts` | gated | warn | yes | 140 | 21 | 15 | 0 | 0 |
| `08-failure-taxonomy` | gated | warn | yes | 187 | 51 | 27 | 0 | 0 |

### Accepted claims (synthesis-ready)

- `clm_aede2f10d470_ollama_intern_2`
- `clm_aede2f10d470_ollama_intern_3`
- `clm_aede2f10d470_ollama_intern_12`
- `clm_aede2f10d470_ollama_intern_14`
- `clm_aede2f10d470_ollama_intern_17`
- `clm_aede2f10d470_ollama_intern_19`
- `clm_f9b159fab5ef_ollama_intern_1`
- `clm_f9b159fab5ef_ollama_intern_2`
- `clm_55456d4dedfa_ollama_intern_1`
- `clm_55456d4dedfa_ollama_intern_2`
- `clm_55456d4dedfa_ollama_intern_3`
- `clm_55456d4dedfa_ollama_intern_5`
- `clm_55456d4dedfa_ollama_intern_6`
- `clm_55456d4dedfa_ollama_intern_13`
- `clm_55456d4dedfa_ollama_intern_17`
- `clm_55456d4dedfa_ollama_intern_19`
- `clm_bd638b8de92f_ollama_intern_1`
- `clm_bd638b8de92f_ollama_intern_3`
- `clm_bd638b8de92f_ollama_intern_10`
- `clm_118111ce7028_ollama_intern_2`
- `clm_118111ce7028_ollama_intern_5`
- `clm_118111ce7028_ollama_intern_6`
- `clm_118111ce7028_ollama_intern_9`
- `clm_118111ce7028_ollama_intern_11`
- `clm_118111ce7028_ollama_intern_21`
- `clm_118111ce7028_ollama_intern_27`
- `clm_e519c32165e4_ollama_intern_7`
- `clm_e519c32165e4_ollama_intern_8`
- `clm_e519c32165e4_ollama_intern_10`
- `clm_e519c32165e4_ollama_intern_15`
- `clm_e519c32165e4_ollama_intern_17`
- `clm_e519c32165e4_ollama_intern_19`
- `clm_e519c32165e4_ollama_intern_27`
- `clm_2c5240f22e27_ollama_intern_3`
- `clm_ed31f644833c_ollama_intern_1`
- `clm_ed31f644833c_ollama_intern_3`
- `clm_ed31f644833c_ollama_intern_7`
- `clm_ed31f644833c_ollama_intern_9`
- `clm_ed31f644833c_ollama_intern_14`
- `clm_ed31f644833c_ollama_intern_21`
- `clm_2e0add2bdec7_ollama_intern_3`
- `clm_2e0add2bdec7_ollama_intern_13`
- `clm_e1e83dbebd28_ollama_intern_4`
- `clm_e1e83dbebd28_ollama_intern_9`
- `clm_e1e83dbebd28_ollama_intern_10`
- `clm_fcdd7f1c90e9_ollama_intern_1`
- `clm_fcdd7f1c90e9_ollama_intern_3`
- `clm_fcdd7f1c90e9_ollama_intern_5`
- `clm_fcdd7f1c90e9_ollama_intern_6`
- `clm_fcdd7f1c90e9_ollama_intern_11`
- `clm_fcdd7f1c90e9_ollama_intern_12`
- `clm_fcdd7f1c90e9_ollama_intern_14`
- `clm_fcdd7f1c90e9_ollama_intern_20`
- `clm_c038edbf6251_ollama_intern_1`
- `clm_c038edbf6251_ollama_intern_13`
- `clm_c038edbf6251_ollama_intern_16`
- `clm_c038edbf6251_ollama_intern_17`
- `clm_c038edbf6251_ollama_intern_18`
- `clm_6ccf8c48cc5a_ollama_intern_1`
- `clm_6ccf8c48cc5a_ollama_intern_7`
- `clm_d44182697e02_ollama_intern_2`
- `clm_07126047391f_ollama_intern_2`
- `clm_f4ce9a16c6b4_ollama_intern_3`
- `clm_f4ce9a16c6b4_ollama_intern_7`
- `clm_f4ce9a16c6b4_ollama_intern_8`
- `clm_f4ce9a16c6b4_ollama_intern_9`
- `clm_f4ce9a16c6b4_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_16`
- `clm_f4ce9a16c6b4_ollama_intern_17`
- `clm_981216eba718_ollama_intern_1`
- `clm_981216eba718_ollama_intern_3`
- `clm_981216eba718_ollama_intern_5`
- `clm_7c8ae5fe342a_ollama_intern_2`
- `clm_7c8ae5fe342a_ollama_intern_3`
- `clm_7c8ae5fe342a_ollama_intern_4`
- `clm_72d8ae653457_ollama_intern_2`
- `clm_72d8ae653457_ollama_intern_3`
- `clm_72d8ae653457_ollama_intern_4`
- `clm_72d8ae653457_ollama_intern_8`
- `clm_72d8ae653457_ollama_intern_11`
- `clm_72d8ae653457_ollama_intern_12`
- `clm_5941285ed842_ollama_intern_2`
- `clm_5941285ed842_ollama_intern_3`
- `clm_5941285ed842_ollama_intern_13`
- `clm_5941285ed842_ollama_intern_14`
- `clm_5941285ed842_ollama_intern_15`
- `clm_5941285ed842_ollama_intern_18`
- `clm_5941285ed842_ollama_intern_22`
- `clm_967446798047_ollama_intern_4`
- `clm_967446798047_ollama_intern_5`
- `clm_f4ce9a16c6b4_ollama_intern_5`
- `clm_f4ce9a16c6b4_ollama_intern_6`
- `clm_f4ce9a16c6b4_ollama_intern_8`
- `clm_f4ce9a16c6b4_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_13`
- `clm_f4ce9a16c6b4_ollama_intern_23`
- `clm_f4ce9a16c6b4_ollama_intern_29`
- `clm_f4ce9a16c6b4_ollama_intern_31`
- `clm_26117b36a866_ollama_intern_1`
- `clm_26117b36a866_ollama_intern_3`
- `clm_26117b36a866_ollama_intern_18`
- `clm_26117b36a866_ollama_intern_25`
- `clm_26117b36a866_ollama_intern_26`
- `clm_26117b36a866_ollama_intern_38`
- `clm_26117b36a866_ollama_intern_40`
- `clm_26117b36a866_ollama_intern_42`
- `clm_484224037767_ollama_intern_7`
- `clm_484224037767_ollama_intern_16`
- `clm_a8c5d541c698_ollama_intern_4`
- `clm_a8c5d541c698_ollama_intern_5`
- `clm_a8c5d541c698_ollama_intern_6`
- `clm_a8c5d541c698_ollama_intern_7`
- `clm_a8c5d541c698_ollama_intern_8`
- `clm_a8c5d541c698_ollama_intern_11`
- `clm_664a4a54b4c3_ollama_intern_2`
- `clm_664a4a54b4c3_ollama_intern_3`
- `clm_664a4a54b4c3_ollama_intern_4`
- `clm_664a4a54b4c3_ollama_intern_5`
- `clm_664a4a54b4c3_ollama_intern_7`
- `clm_664a4a54b4c3_ollama_intern_9`
- `clm_664a4a54b4c3_ollama_intern_12`
- `clm_664a4a54b4c3_ollama_intern_13`
- `clm_664a4a54b4c3_ollama_intern_14`
- `clm_664a4a54b4c3_ollama_intern_15`
- `clm_b81c03003037_ollama_intern_3`
- `clm_b81c03003037_ollama_intern_5`
- `clm_b81c03003037_ollama_intern_8`
- `clm_b81c03003037_ollama_intern_9`
- `clm_b81c03003037_ollama_intern_17`
- `clm_b81c03003037_ollama_intern_21`
- `clm_2a30a3ff7502_ollama_intern_2`
- `clm_2a30a3ff7502_ollama_intern_3`
- `clm_2a30a3ff7502_ollama_intern_7`
- `clm_75194fe21c45_ollama_intern_1`
- `clm_75194fe21c45_ollama_intern_3`
- `clm_75194fe21c45_ollama_intern_5`
- `clm_75194fe21c45_ollama_intern_6`
- `clm_fcdd7f1c90e9_ollama_intern_5`
- `clm_fcdd7f1c90e9_ollama_intern_11`
- `clm_fcdd7f1c90e9_ollama_intern_12`
- `clm_fcdd7f1c90e9_ollama_intern_13`
- `clm_fcdd7f1c90e9_ollama_intern_14`
- `clm_fcdd7f1c90e9_ollama_intern_15`
- `clm_fcdd7f1c90e9_ollama_intern_19`
- `clm_fcdd7f1c90e9_ollama_intern_20`
- `clm_2e0add2bdec7_ollama_intern_4`
- `clm_2e0add2bdec7_ollama_intern_6`
- `clm_2e0add2bdec7_ollama_intern_7`
- `clm_2e0add2bdec7_ollama_intern_9`
- `clm_2e0add2bdec7_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_7`
- `clm_f4ce9a16c6b4_ollama_intern_8`
- `clm_f4ce9a16c6b4_ollama_intern_9`
- `clm_f4ce9a16c6b4_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_13`
- `clm_f4ce9a16c6b4_ollama_intern_14`
- `clm_f4ce9a16c6b4_ollama_intern_21`
- `clm_f4ce9a16c6b4_ollama_intern_23`
- `clm_f4ce9a16c6b4_ollama_intern_26`
- `clm_f4ce9a16c6b4_ollama_intern_27`
- `clm_ccc15b6a3971_ollama_intern_1`
- `clm_ccc15b6a3971_ollama_intern_2`
- `clm_ccc15b6a3971_ollama_intern_3`
- `clm_ccc15b6a3971_ollama_intern_4`
- `clm_ccc15b6a3971_ollama_intern_5`
- `clm_ccc15b6a3971_ollama_intern_6`
- `clm_aa570bcb9060_ollama_intern_4`
- `clm_aa570bcb9060_ollama_intern_10`
- `clm_aa570bcb9060_ollama_intern_12`
- `clm_aa570bcb9060_ollama_intern_14`
- `clm_aa570bcb9060_ollama_intern_16`
- `clm_aa570bcb9060_ollama_intern_17`
- `clm_aa570bcb9060_ollama_intern_27`
- `clm_2086dbbb6560_ollama_intern_4`
- `clm_2086dbbb6560_ollama_intern_7`
- `clm_2086dbbb6560_ollama_intern_15`
- `clm_2086dbbb6560_ollama_intern_16`
- `clm_2086dbbb6560_ollama_intern_17`
- `clm_2086dbbb6560_ollama_intern_24`
- `clm_2086dbbb6560_ollama_intern_35`
- `clm_2086dbbb6560_ollama_intern_39`
- `clm_2086dbbb6560_ollama_intern_47`
- `clm_e7045b6bccdb_ollama_intern_4`
- `clm_e7045b6bccdb_ollama_intern_5`
- `clm_fcdd7f1c90e9_ollama_intern_4`
- `clm_fcdd7f1c90e9_ollama_intern_10`
- `clm_fcdd7f1c90e9_ollama_intern_11`
- `clm_fcdd7f1c90e9_ollama_intern_12`
- `clm_fcdd7f1c90e9_ollama_intern_13`
- `clm_fcdd7f1c90e9_ollama_intern_15`
- `clm_fcdd7f1c90e9_ollama_intern_17`
- `clm_fcdd7f1c90e9_ollama_intern_18`
- `clm_fcdd7f1c90e9_ollama_intern_19`
- `clm_d56e68044c24_ollama_intern_7`
- `clm_d56e68044c24_ollama_intern_21`
- `clm_e19e5e376175_ollama_intern_12`
- `clm_e19e5e376175_ollama_intern_21`
- `clm_fbbdece73b76_ollama_intern_19`
- `clm_b507da5fa466_ollama_intern_2`
- `clm_b507da5fa466_ollama_intern_3`
- `clm_b507da5fa466_ollama_intern_4`
- `clm_b507da5fa466_ollama_intern_5`
- `clm_b507da5fa466_ollama_intern_6`
- `clm_f4ce9a16c6b4_ollama_intern_7`
- `clm_f4ce9a16c6b4_ollama_intern_8`
- `clm_f4ce9a16c6b4_ollama_intern_27`
- `clm_f4ce9a16c6b4_ollama_intern_29`
- `clm_e804faef8c79_ollama_intern_1`
- `clm_e804faef8c79_ollama_intern_5`
- `clm_e804faef8c79_ollama_intern_10`
- `clm_e804faef8c79_ollama_intern_11`
- `clm_e804faef8c79_ollama_intern_16`
- `clm_e804faef8c79_ollama_intern_17`
- `clm_e804faef8c79_ollama_intern_24`
- `clm_f311c690b666_ollama_intern_6`
- `clm_f311c690b666_ollama_intern_8`
- `clm_f311c690b666_ollama_intern_100`
- `clm_f311c690b666_ollama_intern_101`
- `clm_f311c690b666_ollama_intern_103`
- `clm_f311c690b666_ollama_intern_105`
- `clm_f311c690b666_ollama_intern_106`
- `clm_07437ed8d167_ollama_intern_1`
- `clm_55456d4dedfa_ollama_intern_2`
- `clm_55456d4dedfa_ollama_intern_6`
- `clm_55456d4dedfa_ollama_intern_8`
- `clm_55456d4dedfa_ollama_intern_9`
- `clm_55456d4dedfa_ollama_intern_20`
- `clm_2ae04b870db8_ollama_intern_1`
- `clm_2ae04b870db8_ollama_intern_3`
- `clm_2ae04b870db8_ollama_intern_4`
- `clm_1e2124f6f8d4_ollama_intern_1`
- `clm_1e2124f6f8d4_ollama_intern_21`
- `clm_1e2124f6f8d4_ollama_intern_24`
- `clm_1e2124f6f8d4_ollama_intern_27`
- `clm_4c437e284d95_ollama_intern_1`
- `clm_e804faef8c79_ollama_intern_4`
- `clm_e804faef8c79_ollama_intern_8`
- `clm_e804faef8c79_ollama_intern_9`
- `clm_cf20a276ca4d_ollama_intern_8`
- `clm_cf20a276ca4d_ollama_intern_9`
- `clm_cf20a276ca4d_ollama_intern_10`
- `clm_cf20a276ca4d_ollama_intern_14`
- `clm_cf20a276ca4d_ollama_intern_15`
- `clm_a52f23a8cbd2_ollama_intern_5`
- `clm_a295cc4f28d3_ollama_intern_2`
- `clm_a295cc4f28d3_ollama_intern_3`
- `clm_a295cc4f28d3_ollama_intern_9`
- `clm_417fb676dd7b_ollama_intern_5`
- `clm_c39e382ce301_ollama_intern_1`
- `clm_c39e382ce301_ollama_intern_3`
- `clm_8f706291ff12_ollama_intern_4`
- `clm_fcdd7f1c90e9_ollama_intern_15`
- `clm_fcdd7f1c90e9_ollama_intern_16`
- `clm_fcdd7f1c90e9_ollama_intern_17`
- `clm_fcdd7f1c90e9_ollama_intern_19`
- `clm_fcdd7f1c90e9_ollama_intern_20`
- `clm_aede2f10d470_ollama_intern_10`
- `clm_aede2f10d470_ollama_intern_11`
- `clm_aede2f10d470_ollama_intern_12`
- `clm_aede2f10d470_ollama_intern_13`
- `clm_aede2f10d470_ollama_intern_14`
- `clm_e1e83dbebd28_ollama_intern_1`
- `clm_e1e83dbebd28_ollama_intern_3`
- `clm_e1e83dbebd28_ollama_intern_5`
- `clm_e1e83dbebd28_ollama_intern_9`
- `clm_e1e83dbebd28_ollama_intern_11`
- `clm_6ccf8c48cc5a_ollama_intern_6`
- `clm_6ccf8c48cc5a_ollama_intern_9`
- `clm_6ccf8c48cc5a_ollama_intern_13`
- `clm_6ccf8c48cc5a_ollama_intern_14`
- `clm_f9b159fab5ef_ollama_intern_1`
- `clm_f9b159fab5ef_ollama_intern_2`
- `clm_f9b159fab5ef_ollama_intern_4`
- `clm_f9b159fab5ef_ollama_intern_5`
- `clm_f9b159fab5ef_ollama_intern_8`
- `clm_e7045b6bccdb_ollama_intern_1`
- `clm_e7045b6bccdb_ollama_intern_3`
- `clm_e7045b6bccdb_ollama_intern_7`
- `clm_e7045b6bccdb_ollama_intern_8`
- `clm_c038edbf6251_ollama_intern_2`
- `clm_c038edbf6251_ollama_intern_3`
- `clm_c038edbf6251_ollama_intern_4`
- `clm_c038edbf6251_ollama_intern_5`
- `clm_c038edbf6251_ollama_intern_7`
- `clm_c038edbf6251_ollama_intern_8`
- `clm_e519c32165e4_ollama_intern_6`
- `clm_e519c32165e4_ollama_intern_8`
- `clm_e519c32165e4_ollama_intern_9`
- `clm_e519c32165e4_ollama_intern_19`
- `clm_e519c32165e4_ollama_intern_24`
- `clm_e519c32165e4_ollama_intern_25`
- `clm_e519c32165e4_ollama_intern_26`
- `clm_e519c32165e4_ollama_intern_28`
- `clm_0a0723012f3c_ollama_intern_5`
- `clm_0a0723012f3c_ollama_intern_13`
- `clm_0a0723012f3c_ollama_intern_18`
- `clm_0a0723012f3c_ollama_intern_21`
- `clm_0a0723012f3c_ollama_intern_22`
- `clm_ed31f644833c_ollama_intern_1`
- `clm_ed31f644833c_ollama_intern_3`
- `clm_ed31f644833c_ollama_intern_5`
- `clm_ed31f644833c_ollama_intern_6`

### Claims needing repair

- `clm_aede2f10d470_ollama_intern_7`
- `clm_aede2f10d470_ollama_intern_9`
- `clm_55456d4dedfa_ollama_intern_4`
- `clm_55456d4dedfa_ollama_intern_12`
- `clm_bd638b8de92f_ollama_intern_5`
- `clm_118111ce7028_ollama_intern_4`
- `clm_118111ce7028_ollama_intern_26`
- `clm_e519c32165e4_ollama_intern_6`
- `clm_e519c32165e4_ollama_intern_33`
- `clm_e519c32165e4_ollama_intern_37`
- `clm_ed31f644833c_ollama_intern_24`
- `clm_ed31f644833c_ollama_intern_26`
- `clm_ed31f644833c_ollama_intern_27`
- `clm_2e0add2bdec7_ollama_intern_4`
- `clm_2e0add2bdec7_ollama_intern_6`
- `clm_2e0add2bdec7_ollama_intern_9`
- `clm_e1e83dbebd28_ollama_intern_5`
- `clm_fcdd7f1c90e9_ollama_intern_4`
- `clm_fcdd7f1c90e9_ollama_intern_18`
- `clm_c038edbf6251_ollama_intern_7`
- `clm_c038edbf6251_ollama_intern_9`
- `clm_c038edbf6251_ollama_intern_10`
- `clm_c038edbf6251_ollama_intern_11`
- `clm_c038edbf6251_ollama_intern_12`
- `clm_6ccf8c48cc5a_ollama_intern_13`
- `clm_e519c32165e4_ollama_intern_9`
- `clm_e519c32165e4_ollama_intern_11`
- `clm_e519c32165e4_ollama_intern_15`
- `clm_e519c32165e4_ollama_intern_17`
- `clm_e519c32165e4_ollama_intern_18`
- `clm_e519c32165e4_ollama_intern_19`
- `clm_e519c32165e4_ollama_intern_20`
- `clm_e519c32165e4_ollama_intern_21`
- `clm_e519c32165e4_ollama_intern_32`
- `clm_e519c32165e4_ollama_intern_33`
- `clm_d44182697e02_ollama_intern_3`
- `clm_07126047391f_ollama_intern_3`
- `clm_07126047391f_ollama_intern_10`
- `clm_07126047391f_ollama_intern_11`
- `clm_07126047391f_ollama_intern_12`
- `clm_07126047391f_ollama_intern_14`
- `clm_07126047391f_ollama_intern_16`
- `clm_f4ce9a16c6b4_ollama_intern_1`
- `clm_f4ce9a16c6b4_ollama_intern_15`
- `clm_f4ce9a16c6b4_ollama_intern_30`
- `clm_981216eba718_ollama_intern_2`
- `clm_7c8ae5fe342a_ollama_intern_1`
- `clm_72d8ae653457_ollama_intern_5`
- `clm_72d8ae653457_ollama_intern_6`
- `clm_72d8ae653457_ollama_intern_10`
- `clm_5941285ed842_ollama_intern_4`
- `clm_5941285ed842_ollama_intern_12`
- `clm_5941285ed842_ollama_intern_17`
- `clm_f4ce9a16c6b4_ollama_intern_7`
- `clm_f4ce9a16c6b4_ollama_intern_9`
- `clm_26117b36a866_ollama_intern_17`
- `clm_26117b36a866_ollama_intern_39`
- `clm_484224037767_ollama_intern_1`
- `clm_484224037767_ollama_intern_4`
- `clm_484224037767_ollama_intern_5`
- `clm_484224037767_ollama_intern_6`
- `clm_a8c5d541c698_ollama_intern_1`
- `clm_a8c5d541c698_ollama_intern_12`
- `clm_b81c03003037_ollama_intern_11`
- `clm_2a30a3ff7502_ollama_intern_1`
- `clm_2a30a3ff7502_ollama_intern_12`
- `clm_f9b159fab5ef_ollama_intern_1`
- `clm_fcdd7f1c90e9_ollama_intern_8`
- `clm_aa570bcb9060_ollama_intern_18`
- `clm_aa570bcb9060_ollama_intern_26`
- `clm_aa570bcb9060_ollama_intern_31`
- `clm_2086dbbb6560_ollama_intern_49`
- `clm_fcdd7f1c90e9_ollama_intern_6`
- `clm_cea54dbbe5e3_ollama_intern_14`
- `clm_cea54dbbe5e3_ollama_intern_19`
- `clm_cea54dbbe5e3_ollama_intern_20`
- `clm_cea54dbbe5e3_ollama_intern_21`
- `clm_cea54dbbe5e3_ollama_intern_22`
- `clm_cea54dbbe5e3_ollama_intern_23`
- `clm_cea54dbbe5e3_ollama_intern_29`
- `clm_cea54dbbe5e3_ollama_intern_31`
- `clm_cea54dbbe5e3_ollama_intern_34`
- `clm_cea54dbbe5e3_ollama_intern_36`
- `clm_d56e68044c24_ollama_intern_6`
- `clm_d56e68044c24_ollama_intern_11`
- `clm_d56e68044c24_ollama_intern_13`
- `clm_d56e68044c24_ollama_intern_17`
- `clm_d56e68044c24_ollama_intern_19`
- `clm_e19e5e376175_ollama_intern_16`
- `clm_8a319c76148c_ollama_intern_1`
- `clm_8a319c76148c_ollama_intern_3`
- `clm_8a319c76148c_ollama_intern_4`
- `clm_8a319c76148c_ollama_intern_5`
- `clm_8a319c76148c_ollama_intern_6`
- `clm_8a319c76148c_ollama_intern_8`
- `clm_8a319c76148c_ollama_intern_9`
- `clm_8a319c76148c_ollama_intern_11`
- `clm_8a319c76148c_ollama_intern_14`
- `clm_fbbdece73b76_ollama_intern_1`
- `clm_fbbdece73b76_ollama_intern_2`
- `clm_fbbdece73b76_ollama_intern_4`
- `clm_fbbdece73b76_ollama_intern_5`
- `clm_fbbdece73b76_ollama_intern_6`
- `clm_fbbdece73b76_ollama_intern_14`
- `clm_990ca9d75d8b_ollama_intern_1`
- `clm_990ca9d75d8b_ollama_intern_2`
- `clm_990ca9d75d8b_ollama_intern_4`
- `clm_990ca9d75d8b_ollama_intern_5`
- `clm_990ca9d75d8b_ollama_intern_13`
- `clm_990ca9d75d8b_ollama_intern_14`
- `clm_990ca9d75d8b_ollama_intern_16`
- `clm_990ca9d75d8b_ollama_intern_17`
- `clm_990ca9d75d8b_ollama_intern_30`
- `clm_990ca9d75d8b_ollama_intern_32`
- `clm_155d801f1917_ollama_intern_1`
- `clm_b507da5fa466_ollama_intern_1`
- `clm_fbbdece73b76_ollama_intern_20`
- `clm_fbbdece73b76_ollama_intern_23`
- `clm_f4ce9a16c6b4_ollama_intern_9`
- `clm_f4ce9a16c6b4_ollama_intern_10`
- `clm_f4ce9a16c6b4_ollama_intern_12`
- `clm_f4ce9a16c6b4_ollama_intern_24`
- `clm_f4ce9a16c6b4_ollama_intern_25`
- `clm_e804faef8c79_ollama_intern_2`
- `clm_e804faef8c79_ollama_intern_3`
- `clm_e804faef8c79_ollama_intern_15`
- `clm_f311c690b666_ollama_intern_1`
- `clm_f311c690b666_ollama_intern_10`
- `clm_f311c690b666_ollama_intern_104`
- `clm_55456d4dedfa_ollama_intern_1`
- `clm_55456d4dedfa_ollama_intern_5`
- `clm_55456d4dedfa_ollama_intern_15`
- `clm_55456d4dedfa_ollama_intern_16`
- `clm_55456d4dedfa_ollama_intern_19`
- `clm_bd638b8de92f_ollama_intern_1`
- `clm_bd638b8de92f_ollama_intern_2`
- `clm_bd638b8de92f_ollama_intern_5`
- `clm_19f4e9c54b47_ollama_intern_1`
- `clm_19f4e9c54b47_ollama_intern_2`
- `clm_19f4e9c54b47_ollama_intern_3`
- `clm_1e2124f6f8d4_ollama_intern_2`
- `clm_1e2124f6f8d4_ollama_intern_3`
- `clm_1e2124f6f8d4_ollama_intern_10`
- `clm_1e2124f6f8d4_ollama_intern_15`
- `clm_1e2124f6f8d4_ollama_intern_16`
- `clm_1e2124f6f8d4_ollama_intern_22`
- `clm_e804faef8c79_ollama_intern_1`
- `clm_e804faef8c79_ollama_intern_5`
- `clm_e804faef8c79_ollama_intern_21`
- `clm_cf20a276ca4d_ollama_intern_18`
- `clm_cf20a276ca4d_ollama_intern_21`
- `clm_cf20a276ca4d_ollama_intern_24`
- `clm_cf20a276ca4d_ollama_intern_25`
- `clm_cf20a276ca4d_ollama_intern_28`
- `clm_417fb676dd7b_ollama_intern_4`
- `clm_fcdd7f1c90e9_ollama_intern_1`
- `clm_fcdd7f1c90e9_ollama_intern_2`
- `clm_fcdd7f1c90e9_ollama_intern_11`
- `clm_fcdd7f1c90e9_ollama_intern_13`
- `clm_fcdd7f1c90e9_ollama_intern_14`
- `clm_aede2f10d470_ollama_intern_1`
- `clm_aede2f10d470_ollama_intern_16`
- `clm_e1e83dbebd28_ollama_intern_2`
- `clm_e1e83dbebd28_ollama_intern_4`
- `clm_6ccf8c48cc5a_ollama_intern_1`
- `clm_6ccf8c48cc5a_ollama_intern_2`
- `clm_6ccf8c48cc5a_ollama_intern_3`
- `clm_e7045b6bccdb_ollama_intern_2`
- `clm_e7045b6bccdb_ollama_intern_6`
- `clm_e7045b6bccdb_ollama_intern_9`
- `clm_c038edbf6251_ollama_intern_1`
- `clm_e519c32165e4_ollama_intern_7`
- `clm_e519c32165e4_ollama_intern_22`
- `clm_0a0723012f3c_ollama_intern_1`
- `clm_0a0723012f3c_ollama_intern_2`
- `clm_0a0723012f3c_ollama_intern_8`
- `clm_0a0723012f3c_ollama_intern_24`
- `clm_ed31f644833c_ollama_intern_8`
- `clm_ed31f644833c_ollama_intern_22`
- `clm_ed31f644833c_ollama_intern_23`
- `clm_ed31f644833c_ollama_intern_25`
- `clm_ed31f644833c_ollama_intern_26`

### Rejected claims

- `clm_fcdd7f1c90e9_ollama_intern_1`
- `clm_f4ce9a16c6b4_ollama_intern_30`

### Unresolved contradictions

_None._

### Active waivers

- **pack.source_floor** applied to `primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `01-node-dependency-fragility.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `02-model-file-identity.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `03-workflow-schema-stability.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `04-environment-reproducibility.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `06-comfyui-core-versioning.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `07-existing-control-plane-attempts.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.
- **gate.source_floor** applied to `08-failure-taxonomy.primary_sources_required`
  - Reason: ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
  - Compensating: Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - Compensating: GitHub API release data provides structured version history directly from the maintainer.
  - Compensating: docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Compensating: Accepted claims still require span-grounded excerpts and promoted review decisions.

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

## Warnings (from handoff generation)

- Pack-local index missing at .research-os/index.sqlite — Cowork can still operate from canonical artifacts, but `research-os query` will refuse until you run `research-os index build --all`.
