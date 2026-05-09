# Adversarial Review: 02-model-file-identity

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-09T04:23:59.237Z
**Candidate claims:** 61
**Findings:** 106 (block: 8, warn: 28, info: 70)
**LLM findings rejected (ungrounded):** 3

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 19
- [NEEDS-SCOPE-REPAIR]: 6
- [NEEDS-HUMAN-REVIEW]: 7
- [ACCEPTED]: 29

## Findings

### [WARN] scope_widening (fnd_510d8b873105)

Claim overgeneralizes about creating new model files.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_6`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Rephrase to reflect the specific example from the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim states 'any text editor', while source only mentions 'new text file' as an example.

### [BLOCK] hidden_synthesis (fnd_14a516e8cb7a)

Claim asserts conclusion about model recognition not present in source.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_5`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Remove or rephrase the claim to reflect only what's mentioned in the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Source mentions 'subfolders', claim generalizes to 'correct folders'.

### [WARN] definition_drift (fnd_a13ea2fe0837)

Terms 'models' and 'checkpoints' used interchangeably across claims.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_3`, `clm_e1e83dbebd28_ollama_intern_5`
- **Source IDs:** `src_2e0add2bdec7`, `src_e1e83dbebd28`
- **Required action:** Consolidate or clarify the definition of 'models' in relation to 'checkpoints' across claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claims clm_2e0add2bdec7_ollama_intern_3, clm_e1e83dbebd28_ollama_intern_5 use both terms but source uses 'models/checkpoints'.

### [INFO] claim_overproduction (fnd_88a458312339)

Redundant claims about troubleshooting model errors.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_9`, `clm_e1e83dbebd28_ollama_intern_10`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consolidate these claims into one with both troubleshooting steps mentioned.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claims clm_e1e83dbebd28_ollama_intern_9 and clm_e1e83dbebd28_ollama_intern_10 are both advising users to check for corrupted files or low disk space, which is noise.

### [WARN] scope_widening (fnd_ab8d8d610e7c)

Claim clm_fcdd7f1c90e9_ollama_intern_18 asserts that disabling custom nodes is a troubleshooting step for any issue, but the source only recommends it for certain issues.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_18`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Narrow down the scope of claim clm_fcdd7f1c90e9_ollama_intern_18 to match the source's recommendation for specific issue types.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Source src_fcdd7f1c90e9 mentions 'custom node troubleshooting' without specifying all issues.

### [INFO] overgeneralized_claim (fnd_37aa9e4d5c3c)

Claim clm_c038edbf6251_ollama_intern_1 asserts that ComfyUI offers an option to enable API save, but the source only mentions 'API save' as one of the development mode options without specifying its functionality.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_1`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Clarify or specify the usage and functionality of API save in claim clm_c038edbf6251_ollama_intern_1 to match the source's level of detail.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source src_c038edbf6251 mentions 'API save' but does not explain what it does or when it's useful.

### [WARN] claim_overproduction (fnd_7d237640d47a)

Multiple claims restate the same setting functionality without adding synthesis value.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_9`, `clm_c038edbf6251_ollama_intern_10`, `clm_c038edbf6251_ollama_intern_11`, `clm_c038edbf6251_ollama_intern_12`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Review these claims for consolidation to reduce redundancy.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** All settings claims from src_c038edbf6251 are redundant and could be consolidated into one claim about adjustable search result components.

### [INFO] valid_but_low_value (fnd_49075905f2b8)

Claim is grounded but restates trivia information.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_1`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider removing this low-value claim.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The claim about nodes being fundamental building blocks is basic context and does not advance the purpose of the section.

### [WARN] definition_drift (fnd_257f646d0784)

Claim uses 'Comfy Core nodes' while another claim uses 'custom nodes'.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_7`, `clm_e519c32165e4_ollama_intern_17`
- **Source IDs:** (none)
- **Required action:** Clarify the difference between 'Comfy Core nodes' and 'custom nodes'.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** clm_6ccf8c48cc5a_ollama_intern_7 and clm_e519c32165e4_ollama_intern_17

### [INFO] claim_overproduction (fnd_a9c873a3f874)

Multiple claims from the same source reporting UI issues.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_17`, `clm_e519c32165e4_ollama_intern_18`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Merge redundant claims or provide clear differentiation.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_e519c32165e4_ollama_intern_17, clm_e519c32165e4_ollama_intern_18

### [INFO] valid_but_low_value (fnd_e9c2976121cf)

Claim merely states the Python version used by ComfyUI.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_20`
- **Source IDs:** (none)
- **Required action:** Remove or combine with another claim for brevity.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** clm_e519c32165e4_ollama_intern_20

### [WARN] hidden_synthesis (fnd_66b2ea6d5252)

Claim asserts a conclusion not present in the cited source

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_33`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Rephrase claim to reflect proposed solution rather than asserting it as a fact, or provide evidence from additional sources demonstrating success
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source (src_e519c32165e4) discusses an issue and proposes a solution, but claim clm_e519c32165e4_ollama_intern_33 synthesizes that changing cache control will 'fix' the issue without providing evidence of testing or successful resolution.

### [INFO] overgeneralized_claim (fnd_21428e54c19c)

Claim widens beyond what the source supports

- **Claim IDs:** `clm_d44182697e02_ollama_intern_2`
- **Source IDs:** `src_d44182697e02`
- **Required action:** Clarify that the generalization applies specifically to issue #10530
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Source (src_d44182697e02) discusses a specific issue (#10530) in ComfyUI frontend, but claim clm_d44182697e02_ollama_intern_2 generalizes this to 'the LoadVideo node type' without mentioning the specific issue or its relevance.

### [INFO] claim_overproduction (fnd_804fd36d734e)

Cluster of redundant claims from the same source

- **Claim IDs:** `clm_07126047391f_ollama_intern_10`, `clm_07126047391f_ollama_intern_11`, `clm_07126047391f_ollama_intern_12`
- **Source IDs:** `src_07126047391f`
- **Required action:** Combine these claims into a single, more cohesive statement about the direct download issue
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claims clm_07126047391f_ollama_intern_10, clm_07126047391f_ollama_intern_11, and clm_07126047391f_ollama_intern_12 are redundant, atomized claims from source src_07126047391f discussing the same direct download issue.

### [WARN] recommendation_exceeds_evidence (fnd_8a7c49943e4a)

Claim suggests that AMD users should install ROCm with pip, but the source only provides a command for installing PyTorch.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_15`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Rephrase the claim to reflect that only the installation of PyTorch is supported.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_f4ce9a16c6b4_ollama_intern_15's evidence_excerpt mentions 'install rocm' while providing a command to install PyTorch

### [INFO] overgeneralized_claim (fnd_804b3f2660d6)

Claim suggests that ComfyUI releases a new major stable version every two weeks, but the source only guarantees this for versions starting from v0.7.0.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_7`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Rephrase the claim to specify that this release schedule started with version v0.7.0.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** clm_f4ce9a16c6b4_ollama_intern_7's evidence_excerpt mentions 'roughly every 2 weeks' starting from v0.7.0

### [BLOCK] hidden_synthesis (fnd_d8111c03db4c)

Claim asserts that ComfyUI is a powerful and modular AI engine, but the source only states it's 'the most powerful and modular AI engine for content creation'.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_1`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Remove this claim or update it to match the exact wording from the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** clm_f4ce9a16c6b4_ollama_intern_1's assertion and src_f4ce9a16c6b4's evidence_excerpt

### [INFO] valid_but_low_value (fnd_1d5e625b7401)

Claim provides keybindings for ComfyUI, but this is low-leverage detail and not synthesis-worthy.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_10`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Remove or rephrase the claim to improve its value for synthesis.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_f4ce9a16c6b4_ollama_intern_10's assertion and evidence_excerpt

### [WARN] overgeneralized_claim (fnd_bf3830ee9531)

The claim asserts that GPU recommendations are located on a separate wiki page, but the source only mentions which GPUs are recommended.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_30`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Revise the claim to accurately reflect what is stated in the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source 'src_f4ce9a16c6b4' does not explicitly state that recommendations are located on a separate wiki page.

### [BLOCK] scope_widening (fnd_54df798f438e)

The asserts uses 'every', but the scope is narrow, mentioning only common companion weights.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_4`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Remove 'every' or broaden scope to include all checkpoints/weights.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Not every checkpoint or weights file works out of the box. For natively supported models and their common companion weights ...

### [BLOCK] temporal_mismatch (fnd_a4eb63a2e60b)

The asserts implies a current state ('does not natively support'), but the scope mentions an old date or stale context.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_9`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Update asserts to reflect current state of native support for GGUF models or clarify the context.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** ComfyUI does not natively support GGUF format models. To use GGUF models, you need to install community custom nodes such as ComfyUI-GGUF ...

### [WARN] scope_widening (fnd_588d92d7d552)

The asserts uses 'all' but the scope is limited to users facing performance issues.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_4`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Narrow down the asserts to match the specific user group mentioned in the scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Users can optimize ComfyUI performance using certain commands.

### [BLOCK] temporal_mismatch (fnd_dc1b5a6afeef)

The asserts implies a current state but the scope mentions 'users encountering any issue', which could refer to past or future issues.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_18`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Clarify whether the asserts applies to users currently experiencing issues or if it's general advice for potential future issues.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Disabling all custom nodes is a step in troubleshooting ComfyUI issues.

### [BLOCK] scope_widening (fnd_653352fc66e5)

Asserts uses 'always' but the scope is narrow ('this setting is enabled').

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_7`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Clarify the scope or remove universal quantifier 'always'.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Experimental nodes are displayed in search results if this setting is enabled.

### [WARN] scope_widening (fnd_ebb208d7cddc)

Asserts 'power' but scope is narrow, mentions only design and functionality.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_13`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Narrow the asserts to match the limited scope of software's design and functionality.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** ComfyUI employs nodes as fundamental components for its processing units.

### [WARN] temporal_mismatch (fnd_e737008633fa)

Asserts current state 'prevents stale frontend chunks' but evidence is dated 2025-07-15.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_11`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Update the asserts and evidence to reflect recent or current state.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Changing Cache-Control from no-cache to no-store prevents stale frontend chunks.

### [BLOCK] scope_widening (fnd_3c9625559c3e)

The asserts uses 'always' but the scope is narrow, suggesting universalisation from a single-source.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_33`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Revisit scope or adjust asserts to accurately reflect supported scenarios.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** asserts: Changing Cache-Control from no-cache to no-store always fixes this issue. scope: This solution applies specifically to the ComfyUI software's frontend caching behavior.

### [BLOCK] temporal_mismatch (fnd_2aff7c29009c)

The asserts implies a current/recent state but the scope mentions an old date ('cloud/1.41').

- **Claim IDs:** `clm_d44182697e02_ollama_intern_3`
- **Source IDs:** `src_d44182697e02`
- **Required action:** Update or clarify asserts to accurately reflect current state.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** asserts: A backport to cloud/1.41 is needed for staging release. scope: ComfyUI frontend issue #10530 (old release)

### [WARN] scope_widening (fnd_76ce69d88fb7)

The assert uses the universal quantifier 'are located' but the evidence excerpt only mentions a specific page.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_30`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Revise the assert to reflect that only one specific page is mentioned in the evidence excerpt.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** 'The GPU recommendations... are located on a separate wiki page.' vs. '[See this page...](https://github.com/comfyanonymous/ComfyUI/wiki/Which-GPU-should-I-buy-for-ComfyUI)'

### [INFO] missing_not_constraint (fnd_f6b6ab48ff36)

Claim clm_2e0add2bdec7_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_3`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Models are selected in the right loader node on the canvas in ComfyUI.

### [INFO] missing_not_constraint (fnd_7d51ae30510d)

Claim clm_2e0add2bdec7_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_4`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Not every checkpoint or weights file works out of the box in ComfyUI.

### [INFO] missing_not_constraint (fnd_e75684ca3808)

Claim clm_2e0add2bdec7_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_6`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can create a new model file using any text editor if it does not exist.

### [INFO] missing_not_constraint (fnd_7f67281cbba2)

Claim clm_2e0add2bdec7_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_9`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI does not natively support GGUF format models.

### [INFO] missing_not_constraint (fnd_4ca016e9dd28)

Claim clm_2e0add2bdec7_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2e0add2bdec7_ollama_intern_13`
- **Source IDs:** `src_2e0add2bdec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Ensure the correct model is selected in the loader node for it to work properly.

### [INFO] missing_not_constraint (fnd_4965e7e6a768)

Claim clm_e1e83dbebd28_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_4`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Prompt execution failed due to checkpoint name not being in the list.

### [INFO] missing_not_constraint (fnd_d6e1068e2491)

Claim clm_e1e83dbebd28_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_5`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Models must be in correct subfolders for ComfyUI to recognize them.

### [INFO] missing_not_constraint (fnd_5f098d88c93f)

Claim clm_e1e83dbebd28_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_9`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Re-downloading the model may resolve issues if it was corrupted during download.

### [INFO] missing_not_constraint (fnd_da526f24482e)

Claim clm_e1e83dbebd28_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_10`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Check available disk space to ensure there's enough for model loading.

### [INFO] missing_not_constraint (fnd_f54b48f05e22)

Claim clm_fcdd7f1c90e9_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_1`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI users can encounter common issues and troubleshooting steps.

### [INFO] missing_not_constraint (fnd_9e9f7d7fb1ea)

Claim clm_fcdd7f1c90e9_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_3`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Checking system requirements is a common solution for troubleshooting ComfyUI.

### [INFO] missing_not_constraint (fnd_dedba523a931)

Claim clm_fcdd7f1c90e9_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_4`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Users can optimize ComfyUI performance using certain commands.

### [INFO] missing_not_constraint (fnd_6ed5d9f1b7f1)

Claim clm_fcdd7f1c90e9_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_5`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Desktop Windows supports only NVIDIA GPUs with CUDA.

### [INFO] missing_not_constraint (fnd_0f45d365b531)

Claim clm_fcdd7f1c90e9_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_6`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Crashes in ComfyUI can be checked via Console app's crash reports.

### [INFO] missing_not_constraint (fnd_d99cf28f5d52)

Claim clm_fcdd7f1c90e9_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_11`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: API calls failing or timing out might be due to invalid API keys.

### [INFO] missing_not_constraint (fnd_6dc353bd0a82)

Claim clm_fcdd7f1c90e9_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_12`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Sufficient API credits are required for successful API calls.

### [INFO] missing_not_constraint (fnd_1c5dedfcbe40)

Claim clm_fcdd7f1c90e9_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_14`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Updating frontend dependencies is necessary after updating ComfyUI via Git.

### [INFO] missing_not_constraint (fnd_4bdfb14de3f7)

Claim clm_fcdd7f1c90e9_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_18`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Disabling all custom nodes is a step in troubleshooting ComfyUI issues.

### [INFO] missing_not_constraint (fnd_001f5852e787)

Claim clm_fcdd7f1c90e9_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_20`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: For ComfyUI users using comfy-cli, updating nodes can help solve issues.

### [INFO] missing_not_constraint (fnd_d571617a8050)

Claim clm_c038edbf6251_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_1`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI offers an option to enable development mode options including API save.

### [INFO] missing_not_constraint (fnd_a6b0ec8e2c56)

Claim clm_c038edbf6251_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_7`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Experimental nodes are displayed in search results if this setting is enabled.

### [INFO] missing_not_constraint (fnd_82a77f0ec238)

Claim clm_c038edbf6251_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_9`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Node usage frequency is displayed in search results if this setting is enabled.

### [INFO] missing_not_constraint (fnd_ce0efc215794)

Claim clm_c038edbf6251_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_10`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Node ID names are displayed in search results if this setting is enabled.

### [INFO] missing_not_constraint (fnd_62f021327692)

Claim clm_c038edbf6251_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_11`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Node categories are displayed in search results if this setting is enabled.

### [INFO] missing_not_constraint (fnd_e99f51333fc4)

Claim clm_c038edbf6251_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_12`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Node previews are displayed in search results if this setting is enabled.

### [INFO] missing_not_constraint (fnd_6dfa60ffa1bf)

Claim clm_c038edbf6251_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_13`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI can save and restore canvas position and zoom level in workflows.

### [INFO] missing_not_constraint (fnd_23495f285cb2)

Claim clm_c038edbf6251_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_16`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI provides an option to sort node IDs when saving workflows.

### [INFO] missing_not_constraint (fnd_51e4f1819ea4)

Claim clm_c038edbf6251_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_17`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI allows users to display warnings for missing nodes in workflows.

### [INFO] missing_not_constraint (fnd_92b5ef15ff59)

Claim clm_c038edbf6251_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_18`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI provides an option to require confirmation when clearing workflows.

### [INFO] missing_not_constraint (fnd_b890d03624c7)

Claim clm_6ccf8c48cc5a_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_1`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI uses nodes as fundamental building blocks for executing tasks.

### [INFO] missing_not_constraint (fnd_d050f74647cf)

Claim clm_6ccf8c48cc5a_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_7`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Comfy Core nodes use a fox icon for display, while custom nodes use their names.

### [INFO] missing_not_constraint (fnd_81461d008c37)

Claim clm_6ccf8c48cc5a_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_13`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI employs nodes as fundamental components for its processing units.

### [INFO] missing_not_constraint (fnd_ac83f07e5975)

Claim clm_e519c32165e4_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_9`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The exception message specifies that matrix shapes cannot be multiplied.

### [WARN] source_quality_problem (fnd_b0ae9416df16)

Claim clm_e519c32165e4_ollama_intern_9 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_9`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_b99566056d57)

Claim clm_e519c32165e4_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_11`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Changing Cache-Control from no-cache to no-store prevents stale frontend chunks.

### [WARN] source_quality_problem (fnd_7befb1107ca8)

Claim clm_e519c32165e4_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_11`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_1bb472547e45)

Claim clm_e519c32165e4_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_15`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A div blocking interactions overlays near half of the ComfyUI interface.

### [WARN] source_quality_problem (fnd_3c654a934fac)

Claim clm_e519c32165e4_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_15`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_01621a6168e5)

Claim clm_e519c32165e4_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_17`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Some UI elements in ComfyUI are not interactive where they block the screen.

### [WARN] source_quality_problem (fnd_749fec2662b5)

Claim clm_e519c32165e4_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_17`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_45fb50d2fccf)

Claim clm_e519c32165e4_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_18`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Some dropdown menus from the settings panel in ComfyUI are unselectable.

### [WARN] source_quality_problem (fnd_396a0c32bfe2)

Claim clm_e519c32165e4_ollama_intern_18 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_18`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_eb87ea3107d9)

Claim clm_e519c32165e4_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_19`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI startup time is displayed with the format 'YYYY-MM-DD HH:MM:SS.mmm'.

### [WARN] source_quality_problem (fnd_6e7e321a01ed)

Claim clm_e519c32165e4_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_19`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_7db24ee54ed7)

Claim clm_e519c32165e4_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_20`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI uses Python version 3.13.3 for its operations.

### [WARN] source_quality_problem (fnd_8c8b4be1266b)

Claim clm_e519c32165e4_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_20`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ab3d181fad4b)

Claim clm_e519c32165e4_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_21`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI's default frontend version is 1.21.3.

### [WARN] source_quality_problem (fnd_6167a9ecaa67)

Claim clm_e519c32165e4_ollama_intern_21 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_21`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e18fff5481c0)

Claim clm_e519c32165e4_ollama_intern_32 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_32`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue is stale frontend chunks caused by incorrect cache headers.

### [WARN] source_quality_problem (fnd_7aad019e63ab)

Claim clm_e519c32165e4_ollama_intern_32 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_32`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_2cbce371cfea)

Claim clm_e519c32165e4_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_33`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Changing Cache-Control from no-cache to no-store can fix this issue.

### [WARN] source_quality_problem (fnd_7ee2efb7c59d)

Claim clm_e519c32165e4_ollama_intern_33 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_33`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fa9c3abfd08e)

Claim clm_d44182697e02_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d44182697e02_ollama_intern_2`
- **Source IDs:** `src_d44182697e02`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The LoadVideo node type follows the same upload-widget codepath as LoadImage.

### [INFO] missing_not_constraint (fnd_28881f3dda40)

Claim clm_d44182697e02_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d44182697e02_ollama_intern_3`
- **Source IDs:** `src_d44182697e02`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A backport to `cloud/1.41` is needed for staging release.

### [INFO] missing_not_constraint (fnd_4e89dd72f7b0)

Claim clm_07126047391f_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_2`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The frontend bridge keeps older desktop builds working through URL fallback.

### [INFO] missing_not_constraint (fnd_faa7f5b16770)

Claim clm_07126047391f_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_3`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Each missing-model row is bound to the exact download returned by desktop.

### [WARN] source_quality_problem (fnd_c92b7f0ea307)

Claim clm_07126047391f_ollama_intern_3 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_3`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_ec1ff7b0e891)

Claim clm_07126047391f_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_10`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Direct model downloads from Hugging Face are unavailable due to network reasons.

### [WARN] source_quality_problem (fnd_8d04d4592b5f)

Claim clm_07126047391f_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_10`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_1a8e9ea8eb11)

Claim clm_07126047391f_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_11`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user encounters direct download issues due to network reasons.

### [WARN] source_quality_problem (fnd_455441ca4ff4)

Claim clm_07126047391f_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_11`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_b1ea19e970d6)

Claim clm_07126047391f_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_12`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user blocks completing tasks due to direct download issues.

### [WARN] source_quality_problem (fnd_62e8c31d1351)

Claim clm_07126047391f_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_12`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_de865737cca7)

Claim clm_07126047391f_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_14`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: E2E coverage for missing-media in subgraph interior deletion is lacking.

### [WARN] source_quality_problem (fnd_535880147172)

Claim clm_07126047391f_ollama_intern_14 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_14`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_583e7d7afb0d)

Claim clm_07126047391f_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_07126047391f_ollama_intern_16`
- **Source IDs:** `src_07126047391f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Cloud-mode realtime verification E2E is not covered by the current tests.

### [WARN] source_quality_problem (fnd_4191b287e23b)

Claim clm_07126047391f_ollama_intern_16 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_07126047391f_ollama_intern_16`
- **Source IDs:** `src_07126047391f`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_fdcd25849e75)

Claim clm_f4ce9a16c6b4_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_1`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI is a powerful and modular AI engine for visual professionals.

### [INFO] missing_not_constraint (fnd_099c633d191f)

Claim clm_f4ce9a16c6b4_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_3`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI natively supports the latest open-source state-of-the-art models.

### [INFO] missing_not_constraint (fnd_418a390bee45)

Claim clm_f4ce9a16c6b4_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_7`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI releases a new major stable version approximately every two weeks.

### [INFO] missing_not_constraint (fnd_86232710f4e8)

Claim clm_f4ce9a16c6b4_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_8`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Desktop builds a new release using the latest stable core version.

### [INFO] missing_not_constraint (fnd_248252798546)

Claim clm_f4ce9a16c6b4_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_9`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Frontend updates are merged into the core repository every two weeks.

### [INFO] missing_not_constraint (fnd_0537a2490e3d)

Claim clm_f4ce9a16c6b4_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_10`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: `Ctrl` + `Enter` queues up the current graph for generation.

### [INFO] missing_not_constraint (fnd_5ffb71e06558)

Claim clm_f4ce9a16c6b4_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_15`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: AMD users can install PyTorch with ROCm using pip.

### [INFO] missing_not_constraint (fnd_fdd2de7c5da1)

Claim clm_f4ce9a16c6b4_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_16`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI supports AMD GPUs, but hardware support is less than other builds.

### [INFO] missing_not_constraint (fnd_43bf2ba5b437)

Claim clm_f4ce9a16c6b4_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_17`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Nvidia users should install stable PyTorch using a specific pip command.

### [INFO] missing_not_constraint (fnd_b3a43f97499e)

Claim clm_f4ce9a16c6b4_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_30`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The GPU recommendations for ComfyUI users are located on a separate wiki page.

## Claim review decisions

### [ACCEPTED] `clm_2e0add2bdec7_ollama_intern_3`

Findings: definition_drift (warn).

Cites findings: `fnd_a13ea2fe0837`, `fnd_f6b6ab48ff36`.

### [NEEDS-SCOPE-REPAIR] `clm_2e0add2bdec7_ollama_intern_4`

Findings: scope_widening (block).

Cites findings: `fnd_54df798f438e`, `fnd_7d51ae30510d`.

### [NEEDS-SCOPE-REPAIR] `clm_2e0add2bdec7_ollama_intern_6`

Findings: scope_widening (warn).

Cites findings: `fnd_510d8b873105`, `fnd_e75684ca3808`.

### [NEEDS-SOURCE-REPAIR] `clm_2e0add2bdec7_ollama_intern_9`

Findings: temporal_mismatch (block).

Cites findings: `fnd_a4eb63a2e60b`, `fnd_7f67281cbba2`.

### [ACCEPTED] `clm_2e0add2bdec7_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_4ca016e9dd28`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_4965e7e6a768`.

### [NEEDS-HUMAN-REVIEW] `clm_e1e83dbebd28_ollama_intern_5`

Findings: hidden_synthesis (block); definition_drift (warn).

Cites findings: `fnd_14a516e8cb7a`, `fnd_a13ea2fe0837`, `fnd_d6e1068e2491`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_88a458312339`, `fnd_5f098d88c93f`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_88a458312339`, `fnd_da526f24482e`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_f54b48f05e22`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_9e9f7d7fb1ea`.

### [NEEDS-SCOPE-REPAIR] `clm_fcdd7f1c90e9_ollama_intern_4`

Findings: scope_widening (warn).

Cites findings: `fnd_588d92d7d552`, `fnd_dedba523a931`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_6ed5d9f1b7f1`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_0f45d365b531`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_d99cf28f5d52`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_6dc353bd0a82`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_1c5dedfcbe40`.

### [NEEDS-SOURCE-REPAIR] `clm_fcdd7f1c90e9_ollama_intern_18`

Findings: scope_widening (warn); temporal_mismatch (block).

Cites findings: `fnd_ab8d8d610e7c`, `fnd_dc1b5a6afeef`, `fnd_4bdfb14de3f7`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_20`

Only info-level findings; accepted.

Cites findings: `fnd_001f5852e787`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_37aa9e4d5c3c`, `fnd_d571617a8050`.

### [NEEDS-SCOPE-REPAIR] `clm_c038edbf6251_ollama_intern_7`

Findings: scope_widening (block).

Cites findings: `fnd_653352fc66e5`, `fnd_a6b0ec8e2c56`.

### [NEEDS-HUMAN-REVIEW] `clm_c038edbf6251_ollama_intern_9`

Findings: claim_overproduction (warn).

Cites findings: `fnd_7d237640d47a`, `fnd_82a77f0ec238`.

### [NEEDS-HUMAN-REVIEW] `clm_c038edbf6251_ollama_intern_10`

Findings: claim_overproduction (warn).

Cites findings: `fnd_7d237640d47a`, `fnd_ce0efc215794`.

### [NEEDS-HUMAN-REVIEW] `clm_c038edbf6251_ollama_intern_11`

Findings: claim_overproduction (warn).

Cites findings: `fnd_7d237640d47a`, `fnd_62f021327692`.

### [NEEDS-HUMAN-REVIEW] `clm_c038edbf6251_ollama_intern_12`

Findings: claim_overproduction (warn).

Cites findings: `fnd_7d237640d47a`, `fnd_e99f51333fc4`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_6dfa60ffa1bf`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_23495f285cb2`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_51e4f1819ea4`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_92b5ef15ff59`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_49075905f2b8`, `fnd_b890d03624c7`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_7`

Findings: definition_drift (warn).

Cites findings: `fnd_257f646d0784`, `fnd_d050f74647cf`.

### [NEEDS-SCOPE-REPAIR] `clm_6ccf8c48cc5a_ollama_intern_13`

Findings: scope_widening (warn).

Cites findings: `fnd_ebb208d7cddc`, `fnd_81461d008c37`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_9`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ac83f07e5975`, `fnd_b0ae9416df16`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_11`

Findings: temporal_mismatch (warn); source_quality_problem (warn).

Cites findings: `fnd_e737008633fa`, `fnd_b99566056d57`, `fnd_7befb1107ca8`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1bb472547e45`, `fnd_3c654a934fac`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_17`

Findings: definition_drift (warn); source_quality_problem (warn).

Cites findings: `fnd_257f646d0784`, `fnd_a9c873a3f874`, `fnd_01621a6168e5`, `fnd_749fec2662b5`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_18`

Findings: source_quality_problem (warn).

Cites findings: `fnd_a9c873a3f874`, `fnd_45fb50d2fccf`, `fnd_396a0c32bfe2`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_eb87ea3107d9`, `fnd_6e7e321a01ed`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e9c2976121cf`, `fnd_7db24ee54ed7`, `fnd_8c8b4be1266b`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_21`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ab3d181fad4b`, `fnd_6167a9ecaa67`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_32`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e18fff5481c0`, `fnd_7aad019e63ab`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_33`

Findings: hidden_synthesis (warn); scope_widening (block); source_quality_problem (warn).

Cites findings: `fnd_66b2ea6d5252`, `fnd_3c9625559c3e`, `fnd_2cbce371cfea`, `fnd_7ee2efb7c59d`.

### [ACCEPTED] `clm_d44182697e02_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_21428e54c19c`, `fnd_fa9c3abfd08e`.

### [NEEDS-SOURCE-REPAIR] `clm_d44182697e02_ollama_intern_3`

Findings: temporal_mismatch (block).

Cites findings: `fnd_2aff7c29009c`, `fnd_28881f3dda40`.

### [ACCEPTED] `clm_07126047391f_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_4e89dd72f7b0`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_3`

Findings: source_quality_problem (warn).

Cites findings: `fnd_faa7f5b16770`, `fnd_c92b7f0ea307`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_804fd36d734e`, `fnd_ec1ff7b0e891`, `fnd_8d04d4592b5f`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_804fd36d734e`, `fnd_1a8e9ea8eb11`, `fnd_455441ca4ff4`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_12`

Findings: source_quality_problem (warn).

Cites findings: `fnd_804fd36d734e`, `fnd_b1ea19e970d6`, `fnd_62e8c31d1351`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_14`

Findings: source_quality_problem (warn).

Cites findings: `fnd_de865737cca7`, `fnd_535880147172`.

### [NEEDS-SOURCE-REPAIR] `clm_07126047391f_ollama_intern_16`

Findings: source_quality_problem (warn).

Cites findings: `fnd_583e7d7afb0d`, `fnd_4191b287e23b`.

### [NEEDS-HUMAN-REVIEW] `clm_f4ce9a16c6b4_ollama_intern_1`

Findings: hidden_synthesis (block).

Cites findings: `fnd_d8111c03db4c`, `fnd_fdcd25849e75`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_099c633d191f`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_804b3f2660d6`, `fnd_418a390bee45`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_86232710f4e8`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_248252798546`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_1d5e625b7401`, `fnd_0537a2490e3d`.

### [NEEDS-HUMAN-REVIEW] `clm_f4ce9a16c6b4_ollama_intern_15`

Findings: recommendation_exceeds_evidence (warn).

Cites findings: `fnd_8a7c49943e4a`, `fnd_5ffb71e06558`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_fdd2de7c5da1`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_43bf2ba5b437`.

### [NEEDS-SCOPE-REPAIR] `clm_f4ce9a16c6b4_ollama_intern_30`

Findings: overgeneralized_claim (warn); scope_widening (warn).

Cites findings: `fnd_bf3830ee9531`, `fnd_76ce69d88fb7`, `fnd_b3a43f97499e`.
