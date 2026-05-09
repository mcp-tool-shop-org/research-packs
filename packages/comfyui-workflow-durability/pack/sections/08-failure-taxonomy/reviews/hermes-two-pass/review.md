# Adversarial Review: 08-failure-taxonomy

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-09T02:49:39.590Z
**Candidate claims:** 78
**Findings:** 110 (block: 8, warn: 17, info: 85)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 4
- [NEEDS-SCOPE-REPAIR]: 10
- [NEEDS-HUMAN-REVIEW]: 13
- [ACCEPTED]: 51

## Findings

### [WARN] scope_widening (fnd_50c734014c0b)

Claim asserts about ComfyUI startup but evidence only discusses requirements.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_2`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Reword claim to reflect requirement check rather than broad startup assertion.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** src_fcdd7f1c90e9: Ensure your system meets the minimum requirements

### [INFO] definition_drift (fnd_7f2acf107a5e)

Inconsistent use of 'scope' term across claims.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_2`, `clm_fcdd7f1c90e9_ollama_intern_13`
- **Source IDs:** (none)
- **Required action:** Standardize use of 'scope' term across claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Compare claim_id: clm_fcdd7f1c90e9_ollama_intern_2 (scope: ComfyUI startup) and clm_fcdd7f1c90e9_ollama_intern_13 (scope: When using ComfyUI).

### [WARN] claim_overproduction (fnd_740b18122596)

Multiple redundant claims about API call issues.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_11`, `clm_fcdd7f1c90e9_ollama_intern_13`, `clm_fcdd7f1c90e9_ollama_intern_14`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Combine related claims or remove duplicates to reduce synthesis noise.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** src_fcdd7f1c90e9: Symptoms: API calls fail, timeout errors...

### [INFO] valid_but_low_value (fnd_0a5a091452c6)

Trivial claim about checking console/terminal for error messages.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_19`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Remove or reword claim to provide more value in synthesis.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** src_fcdd7f1c90e9: Check console/terminal for error messages

### [WARN] overgeneralized_claim (fnd_43a91561c41f)

Claim overstates the cause of UI issues to 'all custom nodes', while the source specifies 'frontend extensions'

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_1`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Update claim to match specific source mention of frontend extensions
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_aede2f10d470_ollama_intern_1: asserts: ComfyUI custom nodes can cause issues like broken UI or blank screen.

### [INFO] claim_overproduction (fnd_24607c202358)

Multiple claims (clm_aede2f10d470_ollama_intern_11 to clm_aede2f10d470_ollama_intern_12) detail steps of troubleshooting process, but collectively they are redundant and not synthesis-worthy

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_11`, `clm_aede2f10d470_ollama_intern_12`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Combine these claims into a single, more general claim about troubleshooting process
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** clm_aede2f10d470_ollama_intern_11 to clm_aede2f10d470_ollama_intern_12

### [WARN] hidden_synthesis (fnd_858e64402a2d)

Claim (clm_e1e83dbebd28_ollama_intern_2) asserts that models from different architecture families cannot be used together, but this is not explicitly stated in the source, only inferred

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_2`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Update claim to reflect that this is an inference from the source's mention of 'root cause'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_e1e83dbebd28_ollama_intern_2: asserts: Models from different architecture families cannot be used together.

### [WARN] overgeneralized_claim (fnd_851527ee3abf)

Claim widens beyond what the source supports.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_4`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Clarify or narrow down the scope of the claim to only include SD1.5 and SDXL ControlNets.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Source only mentions SD1.5 and SDXL ControlNets, but claim asserts all ControlNet models must match base checkpoint architecture.

### [INFO] definition_drift (fnd_e498b1f5aba7)

Different claims use the term 'architecture' differently.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_4`, `clm_e1e83dbebd28_ollama_intern_5`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Clarify what is meant by 'architecture' in each claim or use consistent terminology.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_e1e83dbebd28_ollama_intern_4 uses 'architecture' to mean model family, while claim clm_e1e83dbebd28_ollama_intern_5 uses it to mean workflow models within the same architecture.

### [WARN] claim_overproduction (fnd_0c81ff1232c2)

Multiple redundant claims about nodes in ComfyUI.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_1`, `clm_6ccf8c48cc5a_ollama_intern_2`, `clm_6ccf8c48cc5a_ollama_intern_3`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Combine or remove redundant claims about nodes in ComfyUI.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claims clm_6ccf8c48cc5a_ollama_intern_1, clm_6ccf8c48cc5a_ollama_intern_2, and clm_6ccf8c48cc5a_ollama_intern_3 restate similar information about nodes in ComfyUI.

### [INFO] valid_but_low_value (fnd_7598bfac0234)

Claim restates trivia about nodes in ComfyUI.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_9`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Remove or rewrite claim clm_6ccf8c48cc5a_ollama_intern_9 to provide more valuable information about nodes in ComfyUI.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_6ccf8c48cc5a_ollama_intern_9 simply states that right-clicking on a node expands its context menu, which is trivial and not synthesis-worthy.

### [WARN] scope_widening (fnd_39a07fc19cc7)

Claim overstates the automation of snapshots in ComfyUI-Manager.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_6`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Clarify the claim to accurately reflect the source information.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source explicitly mentions 'Save snapshot' button press for automatic saving, not merely using ComfyUI-Manager's interface as implied by claim clm_e7045b6bccdb_ollama_intern_6.

### [INFO] overgeneralized_claim (fnd_63a9ee78ac04)

Claim overgeneralizes the functionality of ComfyUI-Manager.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_2`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Limit the scope of the claim to reflect the legacy interface or specify that other installation methods exist.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source mentions legacy interface, but claim clm_e7045b6bccdb_ollama_intern_2 implies all installations are through this interface. Other methods like ZIP downloads exist (clm_f9b159fab5ef_ollama_intern_8).

### [WARN] definition_drift (fnd_c2b50dc4a7de)

Inconsistent usage of 'ComfyUI Manager' vs. 'ComfyUI-Manager' in claims.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_2`, `clm_e7045b6bccdb_ollama_intern_1`, `clm_e7045b6bccdb_ollama_intern_3`
- **Source IDs:** `src_f9b159fab5ef`, `src_e7045b6bccdb`
- **Required action:** Maintain consistent terminology across all related claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claim clm_f9b159fab5ef_ollama_intern_2 uses 'ComfyUI Manager', while others use '-'.

### [WARN] overgeneralized_claim (fnd_7aa84880204e)

Claim clm_e7045b6bccdb_ollama_intern_9 overgeneralizes the statement about snapshot support incompleteness.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_9`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Revise the claim to include 'custom nodes not managed by Git' to match the evidence.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The source only mentions custom nodes not managed by Git, but the claim does not specify this limitation.

### [INFO] claim_overproduction (fnd_40bfc36f6bf0)

Claims clm_c038edbf6251_ollama_intern_1 to clm_c038edbf6251_ollama_intern_8 contain redundant information about ComfyUI settings.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_1`, `clm_c038edbf6251_ollama_intern_2`, `clm_c038edbf6251_ollama_intern_3`, `clm_c038edbf6251_ollama_intern_4`, `clm_c038edbf6251_ollama_intern_5`, `clm_c038edbf6251_ollama_intern_7`, `clm_c038edbf6251_ollama_intern_8`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider combining these claims into a single, more general claim about ComfyUI's customization options.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** These claims collectively restate the available options in ComfyUI settings without synthesis or new insights.

### [WARN] definition_drift (fnd_6a4f1f874b7f)

Inconsistent terminology used for the same concept across claims.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_7`, `clm_e519c32165e4_ollama_intern_25`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Reconcile terminology used for data types across claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** claim clm_e519c32165e4_ollama_intern_7 uses 'data type', while clm_e519c32165e4_ollama_intern_25 uses '(1, 1, 1), |u1'

### [INFO] claim_overproduction (fnd_7ef0c7550564)

Multiple redundant claims about nodes loaded successfully.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_22`, `clm_e519c32165e4_ollama_intern_24`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Merge or remove redundant claims about node loading success.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_e519c32165e4_ollama_intern_22 and clm_e519c32165e4_ollama_intern_24 both assert the successful loading of nodes, but with different numbers.

### [INFO] valid_but_low_value (fnd_d0ca44f9e695)

Claim provides low-value detail about the number of loaded nodes.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_24`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Reconsider inclusion of claim providing low-value detail about node loading success.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_e519c32165e4_ollama_intern_24 asserts that 220 nodes were successfully loaded, but this is not synthesis-worthy and could be omitted or merged with other claims.

### [WARN] claim_overproduction (fnd_c19b4611cf3a)

Multiple claims repeat the same issue of ignored subgraph node data export.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_1`, `clm_0a0723012f3c_ollama_intern_2`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Merge redundant claims to avoid synthesis noise.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** clm_0a0723012f3c_ollama_intern_1 and clm_0a0723012f3c_ollama_intern_2

### [INFO] scope_widening (fnd_3476301efa6b)

Claim about multiple users affected is unsupported by the source, which only mentions one user.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_22`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Narrow claim scope to match evidence or provide additional sources for broader scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_0a0723012f3c_ollama_intern_22

### [WARN] claim_overproduction (fnd_f02c684aa1a1)

Claims clm_ed31f644833c_ollama_intern_22, clm_ed31f644833c_ollama_intern_23, clm_ed31f644833c_ollama_intern_25, and clm_ed31f644833c_ollama_intern_26 are redundant as they all refer to the same issue #2847 in ComfyUI Manager.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_22`, `clm_ed31f644833c_ollama_intern_23`, `clm_ed31f644833c_ollama_intern_25`, `clm_ed31f644833c_ollama_intern_26`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Review or combine these claims for efficiency.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** All claims refer to the same source with identical confidence

### [BLOCK] scope_widening (fnd_731409492e84)

'Always' implies a universal claim, but the scope is limited to troubleshooting.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_1`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Revise 'asserts' and/or 'scope' to accurately represent the generalizability of the statement.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Before diving into detailed troubleshooting... always try these common solutions:

### [WARN] temporal_mismatch (fnd_8e1f26f7b545)

'Check console/terminal for error messages' is presented as a current practice, but the provided evidence is outdated.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_19`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Update 'scope' to include the current date or provide context that justifies the timelessness of the claim.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** (No direct temporal indication in evidence_excerpt)

### [BLOCK] scope_widening (fnd_dc8356acbccf)

The asserts uses the universal quantifier 'can cause' but the evidence_excerpt only discusses custom nodes with frontend extensions, not all custom nodes.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_1`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Narrow down the asserts to match the scope of the evidence_excerpt or provide broader evidence to support a wider scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** For custom nodes, we can prioritize troubleshooting those with frontend extensions, as they cause the most issues.

### [BLOCK] temporal_mismatch (fnd_1c36453af0ab)

The asserts implies a current state ('can cause') but the scope mentions an old date ('How to Troubleshoot and Solve ComfyUI Model Issues').

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_16`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Clarify whether the asserts refers to current or historical issues, matching the evidence_excerpt's temporal scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** How to Troubleshoot and Solve ComfyUI Model Issues

### [WARN] temporal_mismatch (fnd_451bb7543474)

The asserts implies a current state ('is the recommended method') but the evidence_excerpt mentions 'Method 1', which could be outdated.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_2`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Clarify whether Method 1 is still the recommended method or update the asserts accordingly
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Method 1: ComfyUI Manager (Recommended)

### [BLOCK] scope_widening (fnd_9dc9da507749)

The asserts uses the universal quantifier 'can be installed' but the scope is narrow ('using ComfyUI-Manager's legacy interface').

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_2`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Narrow down the asserts to match the scope or widen the scope if applicable
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Install, update, and manage custom nodes with ComfyUI-Manager using the legacy interface

### [WARN] temporal_mismatch (fnd_ce08d566d591)

Asserts implies current/recent state but scope mentions legacy interface.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_8`, `clm_e7045b6bccdb_ollama_intern_9`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Clarify whether this behavior is still applicable in the current version of ComfyUI-Manager.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When using ComfyUI-Manager with its legacy interface

### [BLOCK] scope_widening (fnd_5d02b98c8f2f)

Asserts uses universal quantifier 'all' but scope is narrow (ComfyUI settings).

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_1`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Narrow the asserts to match the specific setting or context within ComfyUI.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Enable dev mode options (API save, etc.) … Function : Enables development mode options (such as API save, etc.)

### [WARN] scope_widening (fnd_a115c3884c78)

The asserts uses 'all' but the scope is limited to processing images using PIL.Image.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_7`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Rephrase or qualify the asserts to match the narrower scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** While processing images using PIL.Image

### [BLOCK] temporal_mismatch (fnd_4330957d4ddc)

The asserts implies a current/recent state but the evidence excerpt mentions old dates or stale contexts.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_22`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Update the asserts to reflect the correct version or state of ComfyUI.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Comfyroll Studio v1.76 is loaded with 175 nodes.

### [WARN] scope_widening (fnd_366f2b56dcf3)

Asserts uses 'always' but the scope is limited to a specific Firefox version.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_8`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Qualify the asserts with the specific Firefox version or remove 'always'.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** ComfyUI frontend version 1.43.10 crashes completely when running on Firefox.

### [BLOCK] temporal_mismatch (fnd_5f15ad42b629)

Asserts implies a current state but the evidence_excerpt mentions old versions.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_24`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Update the asserts to reflect the current state or remove outdated information from the evidence_excerpt.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** ComfyUI frontend version: 1.41.18, 1.42.3

### [BLOCK] temporal_mismatch (fnd_c0e2266424ce)

The assert implies a current state but the scope mentions an old date.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_8`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Update the assert or scope to match the correct timeframe.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** 'The ComfyUI-Manager project has been rebranded to SOLRICKS.' vs 'scope: ComfyUI-Manager project'.

### [INFO] missing_not_constraint (fnd_6202238e84e3)

Claim clm_fcdd7f1c90e9_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_1`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI troubleshooting guide provides common solutions for various issues.

### [INFO] missing_not_constraint (fnd_c3b2d23e9bb6)

Claim clm_fcdd7f1c90e9_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_2`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI requires meeting system requirements for proper functioning.

### [INFO] missing_not_constraint (fnd_a29be5b16a0c)

Claim clm_fcdd7f1c90e9_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_11`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: API calls failing or timing out could be due to invalid API keys.

### [INFO] missing_not_constraint (fnd_3dff6536108d)

Claim clm_fcdd7f1c90e9_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_13`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A faulty internet connection can lead to API call failures and timeouts.

### [INFO] missing_not_constraint (fnd_7464c1503196)

Claim clm_fcdd7f1c90e9_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_14`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Service downtime can cause 'Failed to connect to server' errors.

### [INFO] missing_not_constraint (fnd_5b6ca84fabcc)

Claim clm_fcdd7f1c90e9_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_15`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Updating frontend dependencies is necessary after updating ComfyUI via Git.

### [INFO] missing_not_constraint (fnd_5fbdc01ccb01)

Claim clm_fcdd7f1c90e9_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_16`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Login issues when not on localhost can be resolved by generating an API key.

### [INFO] missing_not_constraint (fnd_a89ad466a911)

Claim clm_fcdd7f1c90e9_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_17`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To install PyTorch for Intel Arc A-Series Graphics, use the following command.

### [INFO] missing_not_constraint (fnd_10aab089a0b5)

Claim clm_fcdd7f1c90e9_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_19`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Check console/terminal for error messages during troubleshooting.

### [INFO] missing_not_constraint (fnd_84b9ff613425)

Claim clm_fcdd7f1c90e9_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_fcdd7f1c90e9_ollama_intern_20`
- **Source IDs:** `src_fcdd7f1c90e9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To update Comfy nodes, use the command 'comfy node update all'.

### [INFO] missing_not_constraint (fnd_cc89d1aae98f)

Claim clm_aede2f10d470_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_1`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI custom nodes can cause issues like broken UI or blank screen.

### [INFO] missing_not_constraint (fnd_23556dc166ef)

Claim clm_aede2f10d470_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_10`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The process of backing up custom nodes can be done manually or using Comfy CLI.

### [INFO] missing_not_constraint (fnd_2f07331adce8)

Claim clm_aede2f10d470_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_11`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To start troubleshooting, navigate to the <YOUR_COMFYUI_FOLDER>/ComfyUI/ folder.

### [INFO] missing_not_constraint (fnd_eef3b5534a3b)

Claim clm_aede2f10d470_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_12`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: When troubleshooting, first backup all custom nodes to a temporary folder.

### [INFO] missing_not_constraint (fnd_9b3676f83503)

Claim clm_aede2f10d470_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_13`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Desktop issues can be reported on GitHub

### [INFO] missing_not_constraint (fnd_df967164045b)

Claim clm_aede2f10d470_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_14`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Frontend issues can be reported on GitHub

### [INFO] missing_not_constraint (fnd_107b2a8f09ef)

Claim clm_aede2f10d470_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_aede2f10d470_ollama_intern_16`
- **Source IDs:** `src_aede2f10d470`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Model issues have a dedicated troubleshooting page

### [INFO] missing_not_constraint (fnd_d4863540672c)

Claim clm_e1e83dbebd28_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_1`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The size of tensor a must match the size of tensor b at non-singleton dimension.

### [INFO] missing_not_constraint (fnd_adc55e30f0d2)

Claim clm_e1e83dbebd28_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_2`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Tensor dimensions must have the same number of channels.

### [INFO] missing_not_constraint (fnd_75509ca5ed15)

Claim clm_e1e83dbebd28_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_3`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Models from different architecture families cannot be used together.

### [INFO] missing_not_constraint (fnd_695f22cb8eda)

Claim clm_e1e83dbebd28_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_4`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ControlNet models must match the architecture of the base checkpoint.

### [INFO] missing_not_constraint (fnd_12106de59d6a)

Claim clm_e1e83dbebd28_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_5`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Keep all workflow models within the same architecture family.

### [INFO] missing_not_constraint (fnd_04f225d064c2)

Claim clm_e1e83dbebd28_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_9`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Re-downloading the model may resolve issues if it was corrupted during download.

### [INFO] missing_not_constraint (fnd_a2d9e0e10248)

Claim clm_e1e83dbebd28_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e1e83dbebd28_ollama_intern_11`
- **Source IDs:** `src_e1e83dbebd28`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Check file permissions to ensure ComfyUI can read the model files.

### [INFO] missing_not_constraint (fnd_946f47820b15)

Claim clm_6ccf8c48cc5a_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_1`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In ComfyUI, nodes are the fundamental building blocks for executing tasks.

### [INFO] missing_not_constraint (fnd_6b209246594d)

Claim clm_6ccf8c48cc5a_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_2`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Nodes connect to each other through links in ComfyUI.

### [INFO] missing_not_constraint (fnd_2981db49ad81)

Claim clm_6ccf8c48cc5a_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_3`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Each node in ComfyUI has its own unique functionality and Python logic.

### [INFO] missing_not_constraint (fnd_dab56a875980)

Claim clm_6ccf8c48cc5a_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_6`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Nodes in ComfyUI have different data types indicated by colors.

### [INFO] missing_not_constraint (fnd_cc0f4acf54ef)

Claim clm_6ccf8c48cc5a_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_9`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: By right-clicking on a node, you can expand the corresponding node context menu.

### [INFO] missing_not_constraint (fnd_ca29ca704b4e)

Claim clm_6ccf8c48cc5a_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_13`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The 'Bypass' mode allows subsequent nodes to receive unprocessed data.

### [INFO] missing_not_constraint (fnd_fab822d1fea1)

Claim clm_6ccf8c48cc5a_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ccf8c48cc5a_ollama_intern_14`
- **Source IDs:** `src_6ccf8c48cc5a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI's documentation is built and hosted on Mintlify.

### [INFO] missing_not_constraint (fnd_76c990dfaa96)

Claim clm_f9b159fab5ef_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_1`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI offers different methods to install custom nodes.

### [INFO] missing_not_constraint (fnd_37c5e4d2f470)

Claim clm_f9b159fab5ef_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_2`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Manager is the recommended method for installing custom nodes.

### [INFO] missing_not_constraint (fnd_b890f0ed621a)

Claim clm_f9b159fab5ef_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_4`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Custom nodes are extensions for ComfyUI that add new functionality.

### [INFO] missing_not_constraint (fnd_5c0125cf4ee4)

Claim clm_f9b159fab5ef_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_5`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Before installing custom nodes, review them carefully to ensure system security.

### [INFO] missing_not_constraint (fnd_0757ca145604)

Claim clm_f9b159fab5ef_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f9b159fab5ef_ollama_intern_8`
- **Source IDs:** `src_f9b159fab5ef`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Restart ComfyUI and refresh the browser to verify successful installation.

### [INFO] missing_not_constraint (fnd_283625b3ad52)

Claim clm_e7045b6bccdb_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_1`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI-Manager provides an interface for managing custom nodes.

### [INFO] missing_not_constraint (fnd_f700b6a5ba29)

Claim clm_e7045b6bccdb_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_2`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Custom nodes can be installed using ComfyUI-Manager.

### [INFO] missing_not_constraint (fnd_0ec67aa4fce4)

Claim clm_e7045b6bccdb_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_6`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Snapshots are automatically saved when the Save snapshot button is pressed.

### [INFO] missing_not_constraint (fnd_87c43221d371)

Claim clm_e7045b6bccdb_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_7`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Snapshot files are stored in a default location under the user's directory.

### [INFO] missing_not_constraint (fnd_b74365aa5d57)

Claim clm_e7045b6bccdb_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_8`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Restoration of snapshots takes effect on the next ComfyUI startup.

### [INFO] missing_not_constraint (fnd_487f60965e49)

Claim clm_e7045b6bccdb_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e7045b6bccdb_ollama_intern_9`
- **Source IDs:** `src_e7045b6bccdb`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Snapshot support is incomplete for custom nodes not managed by Git.

### [INFO] missing_not_constraint (fnd_cd4a56070236)

Claim clm_c038edbf6251_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_1`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI offers an option to enable development mode options such as API save.

### [INFO] missing_not_constraint (fnd_5cde921933ca)

Claim clm_c038edbf6251_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_2`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The name displayed in the model library tree view can be customized.

### [INFO] missing_not_constraint (fnd_4dfbd4856ed2)

Claim clm_c038edbf6251_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_3`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Automatically loading all model folders can cause loading delays.

### [INFO] missing_not_constraint (fnd_ad66c01c3e1e)

Claim clm_c038edbf6251_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_4`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI provides options to display deprecated nodes in search results.

### [INFO] missing_not_constraint (fnd_1b3052e43a7c)

Claim clm_c038edbf6251_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_5`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI displays experimental nodes in search results.

### [INFO] missing_not_constraint (fnd_391074af1502)

Claim clm_c038edbf6251_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_7`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI controls the number of recommended nodes displayed in search results.

### [INFO] missing_not_constraint (fnd_de28726f70f7)

Claim clm_c038edbf6251_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c038edbf6251_ollama_intern_8`
- **Source IDs:** `src_c038edbf6251`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI saves and restores canvas position and zoom level in workflows.

### [INFO] missing_not_constraint (fnd_1f06c4b94981)

Claim clm_e519c32165e4_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_6`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The source explicitly mentions that ComfyUI cannot handle a specific data type.

### [INFO] missing_not_constraint (fnd_5f5fb67c857d)

Claim clm_e519c32165e4_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_7`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The error encountered is a KeyError with the message ((1, 1, 1), '|u1').

### [INFO] missing_not_constraint (fnd_3790797e417d)

Claim clm_e519c32165e4_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_8`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user is attempting to disable custom nodes to address the issue.

### [INFO] missing_not_constraint (fnd_fe22d1b93672)

Claim clm_e519c32165e4_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_9`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user expects to run the native workflow example without any issues.

### [INFO] missing_not_constraint (fnd_0c621bb07d01)

Claim clm_e519c32165e4_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_19`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Some UI elements are unselectable and inaccessible due to blocking divs.

### [INFO] missing_not_constraint (fnd_ec917d62595a)

Claim clm_e519c32165e4_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_22`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Comfyroll Studio v1.76 is loaded with 175 nodes.

### [INFO] missing_not_constraint (fnd_aeea6bb8061c)

Claim clm_e519c32165e4_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_24`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Loaded 220 nodes successfully.

### [INFO] missing_not_constraint (fnd_62410a3035be)

Claim clm_e519c32165e4_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e519c32165e4_ollama_intern_26`
- **Source IDs:** `src_e519c32165e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue was introduced by the merge in pull request #7119.

### [INFO] missing_not_constraint (fnd_bafb4e8fe3d2)

Claim clm_0a0723012f3c_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_1`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The final exported API JSON still contains ignored subgraph node data.

### [INFO] missing_not_constraint (fnd_2bef711f599f)

Claim clm_0a0723012f3c_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_2`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Ignored nodes should be ignored when exporting to API JSON.

### [INFO] missing_not_constraint (fnd_33f219a36e36)

Claim clm_0a0723012f3c_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_5`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Opening another workflow in ComfyUI overwrites the currently open workflow.

### [INFO] missing_not_constraint (fnd_416a122307b1)

Claim clm_0a0723012f3c_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_8`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI frontend version 1.43.10 crashes completely when running on Firefox.

### [INFO] missing_not_constraint (fnd_1a61ec4fd832)

Claim clm_0a0723012f3c_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_13`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SimpleMath+ nodes lose input `a` when converted to API workflow.

### [INFO] missing_not_constraint (fnd_7fd7e72fb75d)

Claim clm_0a0723012f3c_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_18`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Each subgraph should independently remember its own viewport position.

### [INFO] missing_not_constraint (fnd_7a01fdb7d800)

Claim clm_0a0723012f3c_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_21`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Workflows fail to run after updating the frontend package.

### [INFO] missing_not_constraint (fnd_1bfb3a0b6b96)

Claim clm_0a0723012f3c_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_22`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This behavior appears to affect multiple users.

### [INFO] missing_not_constraint (fnd_c50c5bc1104c)

Claim clm_0a0723012f3c_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0a0723012f3c_ollama_intern_24`
- **Source IDs:** `src_0a0723012f3c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Closing the workflow gives an error message in the top corner of the screen.

### [INFO] missing_not_constraint (fnd_c2e515fab7d4)

Claim clm_ed31f644833c_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_1`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue #2864 is about adding a custom node called ComfyUI-BodyRatioMapper.

### [INFO] missing_not_constraint (fnd_d437824dc186)

Claim clm_ed31f644833c_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_3`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Issue #2863 introduces a new custom node called ComfyUI Image Feeder.

### [INFO] missing_not_constraint (fnd_5ab6e56caf6f)

Claim clm_ed31f644833c_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_5`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The PR adds the ComfyUI-Toggle-Pass node to the custom node list.

### [INFO] missing_not_constraint (fnd_b6ffb5917e84)

Claim clm_ed31f644833c_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_6`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The MachinePainting Nodes pack includes image-processing utilities for ComfyUI.

### [INFO] missing_not_constraint (fnd_725be21acb93)

Claim clm_ed31f644833c_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_8`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The ComfyUI-Manager project has been rebranded to SOLRICKS.

### [INFO] missing_not_constraint (fnd_a12c708cdc45)

Claim clm_ed31f644833c_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_22`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The node captures any frame as an image output.

### [INFO] missing_not_constraint (fnd_d65f9037c70b)

Claim clm_ed31f644833c_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_23`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The node offers four particle types: smoke, sparks, light rays, and star-warp.

### [INFO] missing_not_constraint (fnd_12689fd07d4d)

Claim clm_ed31f644833c_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_25`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The node allows custom texture support for multiple textures.

### [INFO] missing_not_constraint (fnd_388ce8886baf)

Claim clm_ed31f644833c_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ed31f644833c_ollama_intern_26`
- **Source IDs:** `src_ed31f644833c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The node has been tested and works with ComfyUI.

## Claim review decisions

### [NEEDS-SCOPE-REPAIR] `clm_fcdd7f1c90e9_ollama_intern_1`

Findings: scope_widening (block).

Cites findings: `fnd_731409492e84`, `fnd_6202238e84e3`.

### [NEEDS-SCOPE-REPAIR] `clm_fcdd7f1c90e9_ollama_intern_2`

Findings: scope_widening (warn).

Cites findings: `fnd_50c734014c0b`, `fnd_7f2acf107a5e`, `fnd_c3b2d23e9bb6`.

### [NEEDS-HUMAN-REVIEW] `clm_fcdd7f1c90e9_ollama_intern_11`

Findings: claim_overproduction (warn).

Cites findings: `fnd_740b18122596`, `fnd_a29be5b16a0c`.

### [NEEDS-HUMAN-REVIEW] `clm_fcdd7f1c90e9_ollama_intern_13`

Findings: claim_overproduction (warn).

Cites findings: `fnd_7f2acf107a5e`, `fnd_740b18122596`, `fnd_3dff6536108d`.

### [NEEDS-HUMAN-REVIEW] `clm_fcdd7f1c90e9_ollama_intern_14`

Findings: claim_overproduction (warn).

Cites findings: `fnd_740b18122596`, `fnd_7464c1503196`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_5b6ca84fabcc`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_5fbdc01ccb01`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_a89ad466a911`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_19`

Findings: temporal_mismatch (warn).

Cites findings: `fnd_0a5a091452c6`, `fnd_8e1f26f7b545`, `fnd_10aab089a0b5`.

### [ACCEPTED] `clm_fcdd7f1c90e9_ollama_intern_20`

Only info-level findings; accepted.

Cites findings: `fnd_84b9ff613425`.

### [NEEDS-SCOPE-REPAIR] `clm_aede2f10d470_ollama_intern_1`

Findings: overgeneralized_claim (warn); scope_widening (block).

Cites findings: `fnd_43a91561c41f`, `fnd_dc8356acbccf`, `fnd_cc89d1aae98f`.

### [ACCEPTED] `clm_aede2f10d470_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_23556dc166ef`.

### [ACCEPTED] `clm_aede2f10d470_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_24607c202358`, `fnd_2f07331adce8`.

### [ACCEPTED] `clm_aede2f10d470_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_24607c202358`, `fnd_eef3b5534a3b`.

### [ACCEPTED] `clm_aede2f10d470_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_9b3676f83503`.

### [ACCEPTED] `clm_aede2f10d470_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_df967164045b`.

### [NEEDS-SOURCE-REPAIR] `clm_aede2f10d470_ollama_intern_16`

Findings: temporal_mismatch (block).

Cites findings: `fnd_1c36453af0ab`, `fnd_107b2a8f09ef`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_d4863540672c`.

### [NEEDS-HUMAN-REVIEW] `clm_e1e83dbebd28_ollama_intern_2`

Findings: hidden_synthesis (warn).

Cites findings: `fnd_858e64402a2d`, `fnd_adc55e30f0d2`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_75509ca5ed15`.

### [NEEDS-SCOPE-REPAIR] `clm_e1e83dbebd28_ollama_intern_4`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_851527ee3abf`, `fnd_e498b1f5aba7`, `fnd_695f22cb8eda`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_e498b1f5aba7`, `fnd_12106de59d6a`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_04f225d064c2`.

### [ACCEPTED] `clm_e1e83dbebd28_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_a2d9e0e10248`.

### [NEEDS-HUMAN-REVIEW] `clm_6ccf8c48cc5a_ollama_intern_1`

Findings: claim_overproduction (warn).

Cites findings: `fnd_0c81ff1232c2`, `fnd_946f47820b15`.

### [NEEDS-HUMAN-REVIEW] `clm_6ccf8c48cc5a_ollama_intern_2`

Findings: claim_overproduction (warn).

Cites findings: `fnd_0c81ff1232c2`, `fnd_6b209246594d`.

### [NEEDS-HUMAN-REVIEW] `clm_6ccf8c48cc5a_ollama_intern_3`

Findings: claim_overproduction (warn).

Cites findings: `fnd_0c81ff1232c2`, `fnd_2981db49ad81`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_dab56a875980`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_7598bfac0234`, `fnd_cc0f4acf54ef`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_ca29ca704b4e`.

### [ACCEPTED] `clm_6ccf8c48cc5a_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_fab822d1fea1`.

### [ACCEPTED] `clm_f9b159fab5ef_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_76c990dfaa96`.

### [ACCEPTED] `clm_f9b159fab5ef_ollama_intern_2`

Findings: definition_drift (warn); temporal_mismatch (warn).

Cites findings: `fnd_c2b50dc4a7de`, `fnd_451bb7543474`, `fnd_37c5e4d2f470`.

### [ACCEPTED] `clm_f9b159fab5ef_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_b890f0ed621a`.

### [ACCEPTED] `clm_f9b159fab5ef_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_5c0125cf4ee4`.

### [ACCEPTED] `clm_f9b159fab5ef_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_0757ca145604`.

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_1`

Findings: definition_drift (warn).

Cites findings: `fnd_c2b50dc4a7de`, `fnd_283625b3ad52`.

### [NEEDS-SCOPE-REPAIR] `clm_e7045b6bccdb_ollama_intern_2`

Findings: scope_widening (block).

Cites findings: `fnd_63a9ee78ac04`, `fnd_9dc9da507749`, `fnd_f700b6a5ba29`.

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_3`

Findings: definition_drift (warn).

Cites findings: `fnd_c2b50dc4a7de`.

### [NEEDS-SCOPE-REPAIR] `clm_e7045b6bccdb_ollama_intern_6`

Findings: scope_widening (warn).

Cites findings: `fnd_39a07fc19cc7`, `fnd_0ec67aa4fce4`.

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_87c43221d371`.

### [ACCEPTED] `clm_e7045b6bccdb_ollama_intern_8`

Findings: temporal_mismatch (warn).

Cites findings: `fnd_ce08d566d591`, `fnd_b74365aa5d57`.

### [NEEDS-SCOPE-REPAIR] `clm_e7045b6bccdb_ollama_intern_9`

Findings: overgeneralized_claim (warn); temporal_mismatch (warn).

Cites findings: `fnd_7aa84880204e`, `fnd_ce08d566d591`, `fnd_487f60965e49`.

### [NEEDS-SCOPE-REPAIR] `clm_c038edbf6251_ollama_intern_1`

Findings: scope_widening (block).

Cites findings: `fnd_40bfc36f6bf0`, `fnd_5d02b98c8f2f`, `fnd_cd4a56070236`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_5cde921933ca`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_4dfbd4856ed2`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_ad66c01c3e1e`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_1b3052e43a7c`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_391074af1502`.

### [ACCEPTED] `clm_c038edbf6251_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_40bfc36f6bf0`, `fnd_de28726f70f7`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_1f06c4b94981`.

### [NEEDS-SCOPE-REPAIR] `clm_e519c32165e4_ollama_intern_7`

Findings: definition_drift (warn); scope_widening (warn).

Cites findings: `fnd_6a4f1f874b7f`, `fnd_a115c3884c78`, `fnd_5f5fb67c857d`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_3790797e417d`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_fe22d1b93672`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_19`

Only info-level findings; accepted.

Cites findings: `fnd_0c621bb07d01`.

### [NEEDS-SOURCE-REPAIR] `clm_e519c32165e4_ollama_intern_22`

Findings: temporal_mismatch (block).

Cites findings: `fnd_7ef0c7550564`, `fnd_4330957d4ddc`, `fnd_ec917d62595a`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_24`

Only info-level findings; accepted.

Cites findings: `fnd_7ef0c7550564`, `fnd_d0ca44f9e695`, `fnd_aeea6bb8061c`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_25`

Findings: definition_drift (warn).

Cites findings: `fnd_6a4f1f874b7f`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_26`

Only info-level findings; accepted.

Cites findings: `fnd_62410a3035be`.

### [ACCEPTED] `clm_e519c32165e4_ollama_intern_28`

No findings recorded for this claim by the current reviewer.

### [NEEDS-HUMAN-REVIEW] `clm_0a0723012f3c_ollama_intern_1`

Findings: claim_overproduction (warn).

Cites findings: `fnd_c19b4611cf3a`, `fnd_bafb4e8fe3d2`.

### [NEEDS-HUMAN-REVIEW] `clm_0a0723012f3c_ollama_intern_2`

Findings: claim_overproduction (warn).

Cites findings: `fnd_c19b4611cf3a`, `fnd_2bef711f599f`.

### [ACCEPTED] `clm_0a0723012f3c_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_33f219a36e36`.

### [NEEDS-SCOPE-REPAIR] `clm_0a0723012f3c_ollama_intern_8`

Findings: scope_widening (warn).

Cites findings: `fnd_366f2b56dcf3`, `fnd_416a122307b1`.

### [ACCEPTED] `clm_0a0723012f3c_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_1a61ec4fd832`.

### [ACCEPTED] `clm_0a0723012f3c_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_7fd7e72fb75d`.

### [ACCEPTED] `clm_0a0723012f3c_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_7a01fdb7d800`.

### [ACCEPTED] `clm_0a0723012f3c_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_3476301efa6b`, `fnd_1bfb3a0b6b96`.

### [NEEDS-SOURCE-REPAIR] `clm_0a0723012f3c_ollama_intern_24`

Findings: temporal_mismatch (block).

Cites findings: `fnd_5f15ad42b629`, `fnd_c50c5bc1104c`.

### [ACCEPTED] `clm_ed31f644833c_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_c2e515fab7d4`.

### [ACCEPTED] `clm_ed31f644833c_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_d437824dc186`.

### [ACCEPTED] `clm_ed31f644833c_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_5ab6e56caf6f`.

### [ACCEPTED] `clm_ed31f644833c_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_b6ffb5917e84`.

### [NEEDS-SOURCE-REPAIR] `clm_ed31f644833c_ollama_intern_8`

Findings: temporal_mismatch (block).

Cites findings: `fnd_c0e2266424ce`, `fnd_725be21acb93`.

### [NEEDS-HUMAN-REVIEW] `clm_ed31f644833c_ollama_intern_22`

Findings: claim_overproduction (warn).

Cites findings: `fnd_f02c684aa1a1`, `fnd_a12c708cdc45`.

### [NEEDS-HUMAN-REVIEW] `clm_ed31f644833c_ollama_intern_23`

Findings: claim_overproduction (warn).

Cites findings: `fnd_f02c684aa1a1`, `fnd_d65f9037c70b`.

### [NEEDS-HUMAN-REVIEW] `clm_ed31f644833c_ollama_intern_25`

Findings: claim_overproduction (warn).

Cites findings: `fnd_f02c684aa1a1`, `fnd_12689fd07d4d`.

### [NEEDS-HUMAN-REVIEW] `clm_ed31f644833c_ollama_intern_26`

Findings: claim_overproduction (warn).

Cites findings: `fnd_f02c684aa1a1`, `fnd_388ce8886baf`.
