# Adversarial Review: 05-community-distribution-patterns

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-09T07:05:46.185Z
**Candidate claims:** 32
**Findings:** 51 (block: 0, warn: 18, info: 33)
**LLM findings rejected (ungrounded):** 1

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 15
- [NEEDS-SCOPE-REPAIR]: 2
- [ACCEPTED]: 15

## Findings

### [WARN] overgeneralized_claim (fnd_5db283e19173)

The claim that 'ComfyUI crashes can be checked by looking at Console app's crash reports' overgeneralizes the solution to ComfyUI crashes.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_6`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Clarify or narrow the scope of the claim based on the limited evidence provided.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source only provides a general tip to check Console for crash reports, not an assertion that this fully addresses all crash issues.

### [WARN] definition_drift (fnd_9e0269288df0)

The claim that 'The PR auto-registers node replacements from JSON files' conflicts with the claim that 'Custom node replacements can be auto-registered from JSON files'. The first claim suggests that the PR itself is responsible for registering node replacements, while the second claim suggests it is the custom nodes that register themselves.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_31`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Clarify which entity is responsible for auto-registering node replacements based on the JSON files
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The PR auto-registers node replacements from JSON files (clm_fcdd7f1c90e9_ollama_intern_29) vs Custom node replacements can be auto-registered from JSON files (clm_cea54dbbe5e3_ollama_intern_31)

### [INFO] valid_but_low_value (fnd_1448f6a2b519)

The claim states that the 'Download All' button is unresponsive, but does not add new information beyond what was already described in previous claims.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_11`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** clm_d56e68044c24_ollama_intern_11

### [WARN] overgeneralized_claim (fnd_ac6ff380ca48)

The claim about developers preferring to attach workflow metadata directly on the node itself overgeneralizes from a single source, potentially missing other methods or preferences in the ComfyUI community.

- **Claim IDs:** `clm_e19e5e376175_ollama_intern_16`
- **Source IDs:** `src_e19e5e376175`
- **Required action:** To improve claim integrity, gather additional sources or evidence to represent a broader sample of developer preferences in ComfyUI.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Majority of developers would prefer to attach this data on the node itself.
- It's difficult to track which model applies to which node widget, which can be an issue for maintainability longterm

### [INFO] missing_not_constraint (fnd_2234ef108753)

Claim clm_e7045b6bccdb_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_4`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Restoration of snapshots takes effect on the next ComfyUI startup.

### [INFO] missing_not_constraint (fnd_2c6e8613a9d8)

Claim clm_e7045b6bccdb_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_5`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Snapshot support is incomplete for custom nodes not managed by Git.

### [INFO] missing_not_constraint (fnd_864a1daa650c)

Claim clm_fcdd7f1c90e9_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_4`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Desktop Windows only supports NVIDIA GPUs with CUDA.

### [INFO] missing_not_constraint (fnd_aeb1a70c455b)

Claim clm_fcdd7f1c90e9_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_6`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI crashes can be checked by looking at Console app's crash reports.

### [INFO] missing_not_constraint (fnd_798eb91e974c)

Claim clm_fcdd7f1c90e9_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_10`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: API calls failing or timing out might be due to invalid API keys.

### [INFO] missing_not_constraint (fnd_d868a3066671)

Claim clm_fcdd7f1c90e9_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_11`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Insufficient API credits could cause API calls to fail or time out.

### [INFO] missing_not_constraint (fnd_437a5a49740c)

Claim clm_fcdd7f1c90e9_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_12`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Internet connectivity issues can cause API call failures and timeouts.

### [INFO] missing_not_constraint (fnd_f645cd098f9f)

Claim clm_fcdd7f1c90e9_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_13`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Service downtime can lead to failed API calls and timeouts.

### [INFO] missing_not_constraint (fnd_f9f7a40bc716)

Claim clm_fcdd7f1c90e9_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_15`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Incorrect port usage can result in failed connections to ComfyUI.

### [INFO] missing_not_constraint (fnd_e15865322168)

Claim clm_fcdd7f1c90e9_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_17`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: For effective troubleshooting, disable all custom nodes in ComfyUI.

### [INFO] missing_not_constraint (fnd_5ae22f3dc9d3)

Claim clm_fcdd7f1c90e9_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_18`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Check console/terminal for error messages when troubleshooting ComfyUI.

### [INFO] missing_not_constraint (fnd_6654fd124dd9)

Claim clm_fcdd7f1c90e9_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_19`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: If using comfy-cli, updating all nodes can help resolve issues.

### [INFO] missing_not_constraint (fnd_f8b5661380a7)

Claim clm_cea54dbbe5e3_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_14`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The ComfyUI system generates an error message when it fails to get input nodes.

### [WARN] source_quality_problem (fnd_51f2b47153ef)

Claim clm_cea54dbbe5e3_ollama_intern_14 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_14`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_4b21a2d7df10)

Claim clm_cea54dbbe5e3_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_19`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The source sets the stream length and signals termination of the stream.

### [WARN] source_quality_problem (fnd_eea9bcc9c4bf)

Claim clm_cea54dbbe5e3_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_19`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_554a63c25900)

Claim clm_cea54dbbe5e3_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_20`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Streams in ComfyUI cannot fan out.

### [WARN] source_quality_problem (fnd_fa46ceab668e)

Claim clm_cea54dbbe5e3_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_20`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_37ca40301199)

Claim clm_cea54dbbe5e3_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_21`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Saving and previewing intermediate results is a common task in ComfyUI.

### [WARN] source_quality_problem (fnd_ab3616e7658b)

Claim clm_cea54dbbe5e3_ollama_intern_21 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_21`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_29c9956191cd)

Claim clm_cea54dbbe5e3_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_22`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The default CPU allocator in ComfyUI cannot allocate memory for large streams.

### [WARN] source_quality_problem (fnd_bfa789e31740)

Claim clm_cea54dbbe5e3_ollama_intern_22 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_22`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ae10e6e604a8)

Claim clm_cea54dbbe5e3_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_23`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Executing workflows from cached latents can reduce RAM usage in ComfyUI.

### [WARN] source_quality_problem (fnd_c8740a653b0b)

Claim clm_cea54dbbe5e3_ollama_intern_23 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_23`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_cdbf7b31bd39)

Claim clm_cea54dbbe5e3_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_29`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The PR auto-registers node replacements from JSON files.

### [WARN] source_quality_problem (fnd_f9acbd1d3269)

Claim clm_cea54dbbe5e3_ollama_intern_29 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_29`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_780c71425fa2)

Claim clm_cea54dbbe5e3_ollama_intern_31 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_31`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Custom node replacements can be auto-registered from JSON files.

### [WARN] source_quality_problem (fnd_30e0a04c71a8)

Claim clm_cea54dbbe5e3_ollama_intern_31 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_31`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_999cac7367c6)

Claim clm_cea54dbbe5e3_ollama_intern_34 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_34`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The feature applies to custom nodes within the ComfyUI system.

### [WARN] source_quality_problem (fnd_8ba2c5a44db2)

Claim clm_cea54dbbe5e3_ollama_intern_34 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_34`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e226333c153c)

Claim clm_cea54dbbe5e3_ollama_intern_36 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_36`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The current implementation saves `batch_size - 1` PngInfo allocations.

### [WARN] source_quality_problem (fnd_4e61914b67c6)

Claim clm_cea54dbbe5e3_ollama_intern_36 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_cea54dbbe5e3_ollama_intern_36`
- **Source IDs:** `src_cea54dbbe5e3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fa2545fe423d)

Claim clm_d56e68044c24_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_6`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Individual 'Download' buttons for missing models also do not work.

### [WARN] source_quality_problem (fnd_f5060d9fe26b)

Claim clm_d56e68044c24_ollama_intern_6 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_6`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_434b5f632420)

Claim clm_d56e68044c24_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_7`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: There are no workarounds or solutions available for this issue.

### [INFO] missing_not_constraint (fnd_d2d620e11876)

Claim clm_d56e68044c24_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_11`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The 'Download All' button is unresponsive on Windows systems.

### [WARN] source_quality_problem (fnd_7c529385228c)

Claim clm_d56e68044c24_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_11`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_3a0c51be248a)

Claim clm_d56e68044c24_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_13`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The OOM happens during `encode()` (forward pass), not during model loading.

### [WARN] source_quality_problem (fnd_c09204e5c42b)

Claim clm_d56e68044c24_ollama_intern_13 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_13`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ded85687a858)

Claim clm_d56e68044c24_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_17`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: All models have a sha256 to find them in case they are moved or relocated.

### [WARN] source_quality_problem (fnd_2e34a47cd5b6)

Claim clm_d56e68044c24_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_17`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_194171dc2caa)

Claim clm_d56e68044c24_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_19`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Custom nodes are not installed or the wrong version.

### [WARN] source_quality_problem (fnd_c1093319fe3b)

Claim clm_d56e68044c24_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_19`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_c33aaa79f3d1)

Claim clm_d56e68044c24_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d56e68044c24_ollama_intern_21`
- **Source IDs:** `src_d56e68044c24`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue with the 'Download All' button is not limited to video models.

### [INFO] missing_not_constraint (fnd_cb443a0cd8b5)

Claim clm_e19e5e376175_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e19e5e376175_ollama_intern_12`
- **Source IDs:** `src_e19e5e376175`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Later images in the batch are not reproducible due to altered metadata.

### [INFO] missing_not_constraint (fnd_3c286bf4916e)

Claim clm_e19e5e376175_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e19e5e376175_ollama_intern_16`
- **Source IDs:** `src_e19e5e376175`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Many developers prefer to attach workflow metadata directly on the node itself.

### [INFO] missing_not_constraint (fnd_cb3272215aa9)

Claim clm_e19e5e376175_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e19e5e376175_ollama_intern_21`
- **Source IDs:** `src_e19e5e376175`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Later images in a batch are non-reproducible due to altered embedded metadata.

## Claim review decisions

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_2234ef108753`.

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_2c6e8613a9d8`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_864a1daa650c`.

### [NEEDS-SCOPE-REPAIR] `clm_fcdd7f1c90e9_ollama_intern_6`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_5db283e19173`, `fnd_aeb1a70c455b`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_798eb91e974c`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_d868a3066671`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_437a5a49740c`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_f645cd098f9f`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_f9f7a40bc716`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_e15865322168`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_5ae22f3dc9d3`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_19`

Only info-level findings; accepted.

Cites findings: `fnd_6654fd124dd9`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_14`

Findings: source_quality_problem (warn).

Cites findings: `fnd_f8b5661380a7`, `fnd_51f2b47153ef`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4b21a2d7df10`, `fnd_eea9bcc9c4bf`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_554a63c25900`, `fnd_fa46ceab668e`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_21`

Findings: source_quality_problem (warn).

Cites findings: `fnd_37ca40301199`, `fnd_ab3616e7658b`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_22`

Findings: source_quality_problem (warn).

Cites findings: `fnd_29c9956191cd`, `fnd_bfa789e31740`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_23`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ae10e6e604a8`, `fnd_c8740a653b0b`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_29`

Findings: source_quality_problem (warn).

Cites findings: `fnd_cdbf7b31bd39`, `fnd_f9acbd1d3269`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_31`

Findings: definition_drift (warn); source_quality_problem (warn).

Cites findings: `fnd_9e0269288df0`, `fnd_780c71425fa2`, `fnd_30e0a04c71a8`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_34`

Findings: source_quality_problem (warn).

Cites findings: `fnd_999cac7367c6`, `fnd_8ba2c5a44db2`.

### [NEEDS-SOURCE-REPAIR] `clm_cea54dbbe5e3_ollama_intern_36`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e226333c153c`, `fnd_4e61914b67c6`.

### [NEEDS-SOURCE-REPAIR] `clm_d56e68044c24_ollama_intern_6`

Findings: source_quality_problem (warn).

Cites findings: `fnd_fa2545fe423d`, `fnd_f5060d9fe26b`.

### [ACCEPTED] `clm_d56e68044c24_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_434b5f632420`.

### [NEEDS-SOURCE-REPAIR] `clm_d56e68044c24_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1448f6a2b519`, `fnd_d2d620e11876`, `fnd_7c529385228c`.

### [NEEDS-SOURCE-REPAIR] `clm_d56e68044c24_ollama_intern_13`

Findings: source_quality_problem (warn).

Cites findings: `fnd_3a0c51be248a`, `fnd_c09204e5c42b`.

### [NEEDS-SOURCE-REPAIR] `clm_d56e68044c24_ollama_intern_17`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ded85687a858`, `fnd_2e34a47cd5b6`.

### [NEEDS-SOURCE-REPAIR] `clm_d56e68044c24_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_194171dc2caa`, `fnd_c1093319fe3b`.

### [ACCEPTED] `clm_d56e68044c24_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_c33aaa79f3d1`.

### [ACCEPTED] `clm_e19e5e376175_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_cb443a0cd8b5`.

### [NEEDS-SCOPE-REPAIR] `clm_e19e5e376175_ollama_intern_16`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_ac6ff380ca48`, `fnd_3c286bf4916e`.

### [ACCEPTED] `clm_e19e5e376175_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_cb3272215aa9`.
