# Adversarial Review: 03-workflow-schema-stability

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-09T05:03:36.323Z
**Candidate claims:** 55
**Findings:** 85 (block: 9, warn: 16, info: 60)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 2
- [NEEDS-SCOPE-REPAIR]: 10
- [NEEDS-HUMAN-REVIEW]: 4
- [ACCEPTED]: 39

## Findings

### [WARN] definition_drift (fnd_a28c9d919097)

Inconsistent scope across claims for the same source.

- **Claim IDs:** `clm_981216eba718_ollama_intern_1`, `clm_981216eba718_ollama_intern_2`
- **Source IDs:** `src_981216eba718`
- **Required action:** Update claims to have consistent scope or provide rationale for the difference.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claim clm_981216eba718_ollama_intern_1 asserts a global scope for ComfyUI workflow JSON, while claim clm_981216eba718_ollama_intern_2 narrows it to version 1.

### [INFO] scope_widening (fnd_a711d688e10c)

Claim overgeneralizes the scope of the source.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_2`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Update claim to specify version 0.4 or provide evidence that it applies universally.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claim clm_7c8ae5fe342a_ollama_intern_2 asserts that the JSON schema is for ComfyUI workflow, while the source only supports version 0.4.

### [BLOCK] hidden_synthesis (fnd_fd3418840136)

Claim asserts a conclusion not present in the cited source.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_1`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Remove or modify claim to reflect that the guide is introduced elsewhere.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Source discusses Execution Model Inversion Guide, but claim clm_7c8ae5fe342a_ollama_intern_1 introduces it.

### [INFO] valid_but_low_value (fnd_90b80004c4e6)

Claim restates context, low leverage detail.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_3`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Remove or replace claim with higher value information.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_7c8ae5fe342a_ollama_intern_3 asserts a way to fetch documentation index, which is low value synthesis-wise.

### [WARN] overgeneralized_claim (fnd_3590b3007d19)

Claim overstates the visibility of API keys

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_6`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Revise clm_72d8ae653457_ollama_intern_6 to accurately reflect the source's limitation.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** src_72d8ae653457 explicitly states that API keys are only visible upon first creation, not 'at any point during their lifetime'.

### [BLOCK] hidden_synthesis (fnd_6590775c2d6e)

Claim introduces a conclusion not present in the source

- **Claim IDs:** `clm_5941285ed842_ollama_intern_4`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Remove clm_5941285ed842_ollama_intern_4 or revise it to reflect what the source actually supports.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** src_5941285ed842 does not explicitly state that the subscription is required for all API requests, only for running workflows.

### [WARN] definition_drift (fnd_77dff9f49fb0)

Different claims use 'Comfy Cloud API' and 'API' interchangeably

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_5`, `clm_5941285ed842_ollama_intern_4`
- **Source IDs:** `src_72d8ae653457`, `src_5941285ed842`
- **Required action:** Either standardize the terminology or specify when using 'API' that it refers to Comfy Cloud API.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** clm_72d8ae653457_ollama_intern_5 uses 'API' while clm_5941285ed842_ollama_intern_4 uses 'Comfy Cloud API'.

### [INFO] claim_overproduction (fnd_f54ac880e6f9)

Multiple claims cover the same topic of job monitoring methods

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_8`, `clm_72d8ae653457_ollama_intern_10`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consolidate claims into one covering both methods of job monitoring.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Both clm_72d8ae653457_ollama_intern_8 and clm_72d8ae653457_ollama_intern_10 discuss WebSocket for real-time updates.

### [INFO] valid_but_low_value (fnd_8db5c8be4e14)

Claim restates basic functionality of a node ID

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_11`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consider removing this claim as it does not provide new insight or synthesis.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** clm_72d8ae653457_ollama_intern_11 simply states that the node ID corresponds to output nodes, which is implicit in its purpose.

### [WARN] overgeneralized_claim (fnd_195fa059b3ed)

Claim overstates the scope of preview images sent during image generation.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_12`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Revise claim clm_5941285ed842_ollama_intern_12 to specify that it's about preview images during image generation.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source supports binary messages for preview images but claim asserts this is true for all API communications.

### [BLOCK] hidden_synthesis (fnd_260bb84ae993)

Claim asserts a conclusion not present in the cited source.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_17`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Remove claim clm_5941285ed842_ollama_intern_17 or provide evidence supporting its conclusion.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Source does not mention any details about how to retrieve generated files after job completion, but claim makes this assertion.

### [INFO] temporal_mismatch (fnd_4f929f8279cf)

Source is outdated for its implied scope.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_5`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Update claim clm_f4ce9a16c6b4_ollama_intern_5 to reflect current status of ComfyUI or remove it if no longer applicable.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claim asserts that ComfyUI offers a desktop application but the source is over a year old and current website does not mention this option.

### [WARN] scope_widening (fnd_3d0a3a14cdc6)

Claim overstates frequency of ComfyUI Core releases.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_7`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Revise claim to reflect the approximate nature of the release schedule.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The source mentions 'roughly every 2 weeks', not a guaranteed schedule.

### [INFO] overgeneralized_claim (fnd_0273ee37cefb)

Claim suggests all users should place SD checkpoints in models/checkpoints.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_13`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Clarify that the recommendation is targeted at users who follow this practice.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source only states 'users', not all users.

### [WARN] definition_drift (fnd_cde63541e465)

Term 'ComfyUI Desktop' used inconsistently.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_8`, `clm_f4ce9a16c6b4_ollama_intern_23`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Use consistent terminology for 'ComfyUI Desktop'.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** 'Desktop' is referred to as both a release ('builds a new release') and a repository ('ComfyUI Desktop').

### [INFO] claim_overproduction (fnd_4d013dec9778)

Cluster of low-value claims about keyboard shortcuts.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_10`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Merge redundant/atomized claims into a single, coherent description.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Multiple claims restate context or low-leverage details about keyboard shortcuts.

### [WARN] overgeneralized_claim (fnd_f4d1113485a4)

Claim overstates the retrieval method of workflow format from EXIF data.

- **Claim IDs:** `clm_484224037767_ollama_intern_1`
- **Source IDs:** `src_484224037767`
- **Required action:** Rephrase to indicate that EXIF data can be used but does not specify if it's the current method.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The source only mentions that EXIF data could be used for this purpose, not that it's the current or default method.

### [WARN] recommendation_exceeds_evidence (fnd_7fd6a6a68565)

Claim recommends user action not explicitly stated in the source.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_39`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Remove/rephrase claim to align with explicit recommendations given in the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The source mentions 'If the error persists, please report this' but does not suggest installing requirements or database.

### [BLOCK] hidden_synthesis (fnd_a41e63ba97b7)

Claim asserts conclusion not present in the cited source.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_17`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Remove or adjust claim to align with direct evidence provided by the source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The source mentions 'latent_image' is passed to 'KSampler', but does not state it's decoded as image output.

### [INFO] claim_overproduction (fnd_d62554d6f491)

Redundant claims about issue reproduction.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_25`, `clm_26117b36a866_ollama_intern_26`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Combine these claims into one that covers both aspects of issue reproduction.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claims clm_26117b36a866_ollama_intern_25, clm_26117b36a866_ollama_intern_26

### [INFO] valid_but_low_value (fnd_c56e48e0b938)

Claim provides low-leverage detail about user responsibility.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_38`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider removing this claim from the pack due to its low value.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** This claim is factual but does not add significant insight or actionable steps for users.

### [WARN] overgeneralized_claim (fnd_33192b03257b)

Claim overstates the issue's open duration.

- **Claim IDs:** `clm_484224037767_ollama_intern_4`
- **Source IDs:** `src_484224037767`
- **Required action:** Revise claim to reflect the status at the time of source data capture.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The source only shows the status at a specific point in time, not continuously.

### [INFO] hidden_synthesis (fnd_dc5d539145c4)

Claim asserts a conclusion not explicitly stated in the source.

- **Claim IDs:** `clm_484224037767_ollama_intern_5`
- **Source IDs:** `src_484224037767`
- **Required action:** Remove or clarify claim to align with explicit source information.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source does not specify that the issue has no labels associated with it, only that there are no assignees.

### [INFO] valid_but_low_value (fnd_c547ced91927)

Claim is grounded but restates obvious context.

- **Claim IDs:** `clm_484224037767_ollama_intern_6`
- **Source IDs:** `src_484224037767`
- **Required action:** Remove or revise claim to add value or combine with other claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The source explicitly states that the issue has one comment, making this claim redundant.

### [WARN] claim_overproduction (fnd_df78910b8eb9)

Cluster of atomized claims from one source creates synthesis noise.

- **Claim IDs:** `clm_484224037767_ollama_intern_4`, `clm_484224037767_ollama_intern_5`, `clm_484224037767_ollama_intern_6`
- **Source IDs:** `src_484224037767`
- **Required action:** Combine or revise claims to reduce redundancy and maintain synthesis value.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Claims clm_484224037767_ollama_intern_4, 5, and 6 all provide trivial details from the same source.

### [WARN] scope_widening (fnd_d4379d6c9415)

The asserts uses 'all' but the scope is narrow to ComfyUI workflow specification.

- **Claim IDs:** `clm_981216eba718_ollama_intern_2`
- **Source IDs:** `src_981216eba718`
- **Required action:** Narrow down the asserts to avoid making universal claims about the workflow JSON.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The asserts claims that 'The workflow JSON has a version number that is fixed at 1 for all', while the scope is limited to the ComfyUI workflow specification.

### [BLOCK] temporal_mismatch (fnd_42676890df7a)

The asserts about the Execution Model Inversion Guide implies a current state, but the scope mentions an old date or stale context.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_1`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Update the asserts and scope to reflect the current state of ComfyUI workflow versions.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The asserts claims that 'The source introduces the Execution Model Inversion Guide', while the scope mentions version 0.4 which might be outdated.

### [BLOCK] scope_widening (fnd_0dc527d3f093)

The asserts claims 'all API requests' but the evidence_excerpt only discusses 'running workflows via the API'.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_5`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Narrow down the scope of the asserts to match the specifics provided in the evidence_excerpt.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** All API requests require an API key passed via the X-API-Key header.

### [BLOCK] temporal_mismatch (fnd_2cfb480c02b0)

The asserts implies current state ('are') but the scope mentions an old date or stale context.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_10`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Update the asserts to reflect a specific historical context if intended, or revise to imply current state as suggested.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** You can monitor job completion using either polling or WebSocket for real-time updates. … Option B: WebSocket (Real-time Progress)

### [BLOCK] scope_widening (fnd_da4489acd1c1)

Assert uses 'always' but scope is narrow, suggesting a single-source generalisation

- **Claim IDs:** `clm_5941285ed842_ollama_intern_12`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Clarify the scope of the claim or remove universal quantifier to accurately represent the evidence.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** During image generation, ComfyUI sends binary WebSocket frames containing preview images.

### [WARN] temporal_mismatch (fnd_586b1b7c9635)

Assert implies current state but evidence excerpt mentions old date (Comfy Cloud API)

- **Claim IDs:** `clm_5941285ed842_ollama_intern_22`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Update the asserts or evidence excerpt to accurately represent the current state of Comfy Cloud API.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** curl -X POST " $BASE_URL /api/queue" 
-H "X-API-Key: $COMFY_CLOUD_API_KEY " 
-H "Content-Type: application/json" 
-d &#x27;{"delete": ["PROMPT_ID_HERE"]}&#x27;

### [BLOCK] scope_widening (fnd_f44fcaaed0ee)

The scope is 'ComfyUI Frontend' but the asserts uses universal quantifier 'every'.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_9`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Limit the use of universal quantifiers to the scope of ComfyUI Frontend.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Every 2+ weeks frontend updates are merged into the core repository

### [WARN] temporal_mismatch (fnd_940cb51b4820)

The asserts implies a current state but the evidence_excerpt mentions a specific past date.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_29`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Update asserts to reflect that this is no longer the current state or update evidence_excerpt to reflect the current state.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** As of August 15, 2024, we have transitioned to a new frontend...

### [WARN] scope_widening (fnd_03e5d9b60c7c)

The asserts uses universal quantifier 'always' but the scope is narrow.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_39`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Narrow down the scope of the claim or remove the universal quantifier.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** If the error persists, the user should report it as future database requirements will be necessary.

### [WARN] scope_widening (fnd_f3b185843cf0)

The asserts uses 'has no labels' universally, but the scope is narrow and single-sourced.

- **Claim IDs:** `clm_484224037767_ollama_intern_5`
- **Source IDs:** `src_484224037767`
- **Required action:** Clarify that this claim is specific to the time of creation or provide broader evidence for a universal claim.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The issue #1112 has no labels associated with it. ... This should be tested.

### [WARN] temporal_mismatch (fnd_d85af2fc9362)

The asserts implies a current state ('has received'), but the scope mentions 'at the time of this claim's creation'.

- **Claim IDs:** `clm_484224037767_ollama_intern_6`
- **Source IDs:** `src_484224037767`
- **Required action:** Clarify whether the number of comments is still accurate or update the claim to reflect the current state.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The issue #1112 has received one comment. ... This should be tested.

### [INFO] missing_not_constraint (fnd_771171cfe9a0)

Claim clm_981216eba718_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_981216eba718_ollama_intern_1`
- **Source IDs:** `src_981216eba718`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The workflow JSON for ComfyUI follows the JSON Schema.

### [INFO] missing_not_constraint (fnd_1f3b5de1618b)

Claim clm_981216eba718_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_981216eba718_ollama_intern_2`
- **Source IDs:** `src_981216eba718`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The workflow JSON has a version number that is fixed at 1.

### [INFO] missing_not_constraint (fnd_787ab3b5d839)

Claim clm_981216eba718_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_981216eba718_ollama_intern_3`
- **Source IDs:** `src_981216eba718`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The workflow JSON includes properties for links_ontop and align_to_grid.

### [INFO] missing_not_constraint (fnd_3c2bc8b9a5e8)

Claim clm_981216eba718_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_981216eba718_ollama_intern_5`
- **Source IDs:** `src_981216eba718`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The workflow JSON includes an array property for groups.

### [INFO] missing_not_constraint (fnd_b303946cc72c)

Claim clm_7c8ae5fe342a_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_1`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The source introduces the Execution Model Inversion Guide.

### [INFO] missing_not_constraint (fnd_b1eaccb24d45)

Claim clm_7c8ae5fe342a_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_2`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The source provides a JSON schema for a ComfyUI workflow.

### [INFO] missing_not_constraint (fnd_a8ac9dcd40b7)

Claim clm_7c8ae5fe342a_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_3`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The source mentions a way to fetch the complete documentation index.

### [INFO] missing_not_constraint (fnd_4c74ca4a1b75)

Claim clm_7c8ae5fe342a_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7c8ae5fe342a_ollama_intern_4`
- **Source IDs:** `src_7c8ae5fe342a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The JSON schema for ComfyUI workflow version 0.4 is referenced.

### [INFO] missing_not_constraint (fnd_747cc71d27de)

Claim clm_72d8ae653457_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_8`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Jobs can be monitored using either polling or WebSocket for real-time updates.

### [INFO] missing_not_constraint (fnd_a65ea94f031b)

Claim clm_72d8ae653457_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_10`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: WebSocket provides real-time progress updates and collects output metadata.

### [INFO] missing_not_constraint (fnd_1f0bc580b127)

Claim clm_72d8ae653457_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_11`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The node ID corresponds to the SaveImage or other output nodes in your workflow.

### [INFO] missing_not_constraint (fnd_06b566971f77)

Claim clm_72d8ae653457_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_72d8ae653457_ollama_intern_12`
- **Source IDs:** `src_72d8ae653457`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The /api/view endpoint returns a 302 redirect to a temporary signed URL.

### [INFO] missing_not_constraint (fnd_2daebe952ae6)

Claim clm_5941285ed842_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_2`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: WebSocket is used for real-time progress updates in Comfy Cloud API.

### [INFO] missing_not_constraint (fnd_fa86d8ab4baa)

Claim clm_5941285ed842_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_3`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Comfy Cloud API supports binary messages for preview images.

### [INFO] missing_not_constraint (fnd_d4c7b2c41f03)

Claim clm_5941285ed842_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_4`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Running workflows via Comfy Cloud API requires an active subscription.

### [INFO] missing_not_constraint (fnd_3b792f5489d4)

Claim clm_5941285ed842_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_12`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The API sends binary messages containing preview images during image generation.

### [INFO] missing_not_constraint (fnd_df55c8634656)

Claim clm_5941285ed842_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_13`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The API accepts UTF-8 encoded progress text in variable lengths.

### [INFO] missing_not_constraint (fnd_5278c8cdc439)

Claim clm_5941285ed842_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_14`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Metadata is encoded as UTF-8 JSON with variable bytes.

### [INFO] missing_not_constraint (fnd_1cc8349b9b38)

Claim clm_5941285ed842_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_15`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Raw JPEG/PNG bytes are transmitted for image data.

### [INFO] missing_not_constraint (fnd_a4fff81dc1ad)

Claim clm_5941285ed842_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_17`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Generated files can be retrieved after job completion.

### [INFO] missing_not_constraint (fnd_4760a58924de)

Claim clm_5941285ed842_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_18`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The API provides a curl command for downloading output files.

### [INFO] missing_not_constraint (fnd_5a41fef8b61d)

Claim clm_5941285ed842_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5941285ed842_ollama_intern_22`
- **Source IDs:** `src_5941285ed842`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The `/api/queue` endpoint supports deleting jobs by providing their IDs.

### [INFO] missing_not_constraint (fnd_f4d1f3ca9933)

Claim clm_967446798047_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_967446798047_ollama_intern_4`
- **Source IDs:** `src_967446798047`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can also define a @routes.get for routes that aren't changing anything.

### [INFO] missing_not_constraint (fnd_2f520a6d5383)

Claim clm_967446798047_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_967446798047_ollama_intern_5`
- **Source IDs:** `src_967446798047`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The client can use a new route by sending a FormData object with specific keys.

### [INFO] missing_not_constraint (fnd_24ddbf598884)

Claim clm_f4ce9a16c6b4_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_5`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI offers a desktop application for the easiest way to get started.

### [INFO] missing_not_constraint (fnd_0a7d708c600a)

Claim clm_f4ce9a16c6b4_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_6`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI offers a portable package for Windows users to get the latest commits.

### [INFO] missing_not_constraint (fnd_4816270bf806)

Claim clm_f4ce9a16c6b4_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_7`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Core releases a new major stable version roughly every 2 weeks.

### [INFO] missing_not_constraint (fnd_ec08c76e8165)

Claim clm_f4ce9a16c6b4_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_8`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Desktop builds a new release using the latest stable core version.

### [INFO] missing_not_constraint (fnd_1ae38cedf05a)

Claim clm_f4ce9a16c6b4_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_9`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI Frontend updates are merged into the core repository every 2 weeks.

### [INFO] missing_not_constraint (fnd_0526cb1048bb)

Claim clm_f4ce9a16c6b4_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_10`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: `Ctrl` + `Enter` queues up the current graph for generation.

### [INFO] missing_not_constraint (fnd_1182f0cf80e3)

Claim clm_f4ce9a16c6b4_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_13`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Users should place their SD checkpoints in models/checkpoints.

### [INFO] missing_not_constraint (fnd_9dd1de0d09c6)

Claim clm_f4ce9a16c6b4_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_23`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Users can enable ComfyUI-Manager with the `--enable-manager` flag.

### [INFO] missing_not_constraint (fnd_85fd9bdae8f8)

Claim clm_f4ce9a16c6b4_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_29`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI's frontend is now hosted in a separate repository, ComfyUI Frontend.

### [INFO] missing_not_constraint (fnd_15829ce4f9fa)

Claim clm_f4ce9a16c6b4_ollama_intern_31 has no 'not' constraint recorded.

- **Claim IDs:** `clm_f4ce9a16c6b4_ollama_intern_31`
- **Source IDs:** `src_f4ce9a16c6b4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The legacy frontend is preserved in the ComfyUI Legacy Frontend repository.

### [INFO] missing_not_constraint (fnd_d5a02912b6b5)

Claim clm_26117b36a866_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_1`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user experiences workflow saving issues that affect multiple tabs.

### [INFO] missing_not_constraint (fnd_175a65038601)

Claim clm_26117b36a866_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_3`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user has tried disabling custom nodes to solve the issue without success.

### [INFO] missing_not_constraint (fnd_8a09ce25c423)

Claim clm_26117b36a866_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_17`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI's nodes.py VAEDecode node outputs decoded image as its only return.

### [INFO] missing_not_constraint (fnd_b46c8ad78b94)

Claim clm_26117b36a866_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_18`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI uses GraphBuilder to create a graph for node execution in VAEDecode.

### [INFO] missing_not_constraint (fnd_cc0ca140868a)

Claim clm_26117b36a866_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_25`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A 500 response is returned to the client when the update button is clicked.

### [INFO] missing_not_constraint (fnd_bd91788fdde7)

Claim clm_26117b36a866_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_26`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue reproduces on a fresh ComfyUI install with no custom nodes loaded.

### [INFO] missing_not_constraint (fnd_24142bdd4542)

Claim clm_26117b36a866_ollama_intern_38 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_38`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user should ensure they have installed the latest requirements.

### [INFO] missing_not_constraint (fnd_6062f52f1a60)

Claim clm_26117b36a866_ollama_intern_40 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_40`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user should install nvidia-ml-py instead of pynvml if it's not available.

### [INFO] missing_not_constraint (fnd_a23487364b27)

Claim clm_26117b36a866_ollama_intern_42 has no 'not' constraint recorded.

- **Claim IDs:** `clm_26117b36a866_ollama_intern_42`
- **Source IDs:** `src_26117b36a866`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Node will start in minimal mode if 'nunchaku_versions.json' is not found.

### [INFO] missing_not_constraint (fnd_70acdd7b191b)

Claim clm_484224037767_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_1`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The current workflow format can be retrieved from EXIF data in saved images.

### [INFO] missing_not_constraint (fnd_a33864f01641)

Claim clm_484224037767_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_4`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue #1112 has been marked as open and is not currently assigned to anyone.

### [INFO] missing_not_constraint (fnd_6aee4c1ecf41)

Claim clm_484224037767_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_5`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue #1112 has no labels associated with it.

### [INFO] missing_not_constraint (fnd_3cc94fde25a6)

Claim clm_484224037767_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_6`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue #1112 has received one comment.

### [INFO] missing_not_constraint (fnd_4ab307114772)

Claim clm_484224037767_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_7`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ComfyUI returns a 403 Forbidden status code without proper authentication.

### [INFO] missing_not_constraint (fnd_3f211fbf8e9b)

Claim clm_484224037767_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_484224037767_ollama_intern_16`
- **Source IDs:** `src_484224037767`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A node's internal code performs a strict check using strength != 1.0.

## Claim review decisions

### [ACCEPTED] `clm_981216eba718_ollama_intern_1`

Findings: definition_drift (warn).

Cites findings: `fnd_a28c9d919097`, `fnd_771171cfe9a0`.

### [NEEDS-SCOPE-REPAIR] `clm_981216eba718_ollama_intern_2`

Findings: definition_drift (warn); scope_widening (warn).

Cites findings: `fnd_a28c9d919097`, `fnd_d4379d6c9415`, `fnd_1f3b5de1618b`.

### [ACCEPTED] `clm_981216eba718_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_787ab3b5d839`.

### [ACCEPTED] `clm_981216eba718_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_3c2bc8b9a5e8`.

### [NEEDS-SOURCE-REPAIR] `clm_7c8ae5fe342a_ollama_intern_1`

Findings: hidden_synthesis (block); temporal_mismatch (block).

Cites findings: `fnd_fd3418840136`, `fnd_42676890df7a`, `fnd_b303946cc72c`.

### [ACCEPTED] `clm_7c8ae5fe342a_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_a711d688e10c`, `fnd_b1eaccb24d45`.

### [ACCEPTED] `clm_7c8ae5fe342a_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_90b80004c4e6`, `fnd_a8ac9dcd40b7`.

### [ACCEPTED] `clm_7c8ae5fe342a_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_4c74ca4a1b75`.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_2`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_3`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_4`

No findings recorded for this claim by the current reviewer.

### [NEEDS-SCOPE-REPAIR] `clm_72d8ae653457_ollama_intern_5`

Findings: definition_drift (warn); scope_widening (block).

Cites findings: `fnd_77dff9f49fb0`, `fnd_0dc527d3f093`.

### [NEEDS-SCOPE-REPAIR] `clm_72d8ae653457_ollama_intern_6`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_3590b3007d19`.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_f54ac880e6f9`, `fnd_747cc71d27de`.

### [NEEDS-SOURCE-REPAIR] `clm_72d8ae653457_ollama_intern_10`

Findings: temporal_mismatch (block).

Cites findings: `fnd_f54ac880e6f9`, `fnd_2cfb480c02b0`, `fnd_a65ea94f031b`.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_8db5c8be4e14`, `fnd_1f0bc580b127`.

### [ACCEPTED] `clm_72d8ae653457_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_06b566971f77`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_2daebe952ae6`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_fa86d8ab4baa`.

### [NEEDS-HUMAN-REVIEW] `clm_5941285ed842_ollama_intern_4`

Findings: hidden_synthesis (block); definition_drift (warn).

Cites findings: `fnd_6590775c2d6e`, `fnd_77dff9f49fb0`, `fnd_d4c7b2c41f03`.

### [NEEDS-SCOPE-REPAIR] `clm_5941285ed842_ollama_intern_12`

Findings: overgeneralized_claim (warn); scope_widening (block).

Cites findings: `fnd_195fa059b3ed`, `fnd_da4489acd1c1`, `fnd_3b792f5489d4`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_df55c8634656`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_5278c8cdc439`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_1cc8349b9b38`.

### [NEEDS-HUMAN-REVIEW] `clm_5941285ed842_ollama_intern_17`

Findings: hidden_synthesis (block).

Cites findings: `fnd_260bb84ae993`, `fnd_a4fff81dc1ad`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_4760a58924de`.

### [ACCEPTED] `clm_5941285ed842_ollama_intern_22`

Findings: temporal_mismatch (warn).

Cites findings: `fnd_586b1b7c9635`, `fnd_5a41fef8b61d`.

### [ACCEPTED] `clm_967446798047_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_f4d1f3ca9933`.

### [ACCEPTED] `clm_967446798047_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_2f520a6d5383`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_4f929f8279cf`, `fnd_24ddbf598884`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_0a7d708c600a`.

### [NEEDS-SCOPE-REPAIR] `clm_f4ce9a16c6b4_ollama_intern_7`

Findings: scope_widening (warn).

Cites findings: `fnd_3d0a3a14cdc6`, `fnd_4816270bf806`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_8`

Findings: definition_drift (warn).

Cites findings: `fnd_cde63541e465`, `fnd_ec08c76e8165`.

### [NEEDS-SCOPE-REPAIR] `clm_f4ce9a16c6b4_ollama_intern_9`

Findings: scope_widening (block).

Cites findings: `fnd_f44fcaaed0ee`, `fnd_1ae38cedf05a`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_4d013dec9778`, `fnd_0526cb1048bb`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_0273ee37cefb`, `fnd_1182f0cf80e3`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_23`

Findings: definition_drift (warn).

Cites findings: `fnd_cde63541e465`, `fnd_9dd1de0d09c6`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_29`

Findings: temporal_mismatch (warn).

Cites findings: `fnd_940cb51b4820`, `fnd_85fd9bdae8f8`.

### [ACCEPTED] `clm_f4ce9a16c6b4_ollama_intern_31`

Only info-level findings; accepted.

Cites findings: `fnd_15829ce4f9fa`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_d5a02912b6b5`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_175a65038601`.

### [NEEDS-HUMAN-REVIEW] `clm_26117b36a866_ollama_intern_17`

Findings: hidden_synthesis (block).

Cites findings: `fnd_a41e63ba97b7`, `fnd_8a09ce25c423`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_b46c8ad78b94`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_25`

Only info-level findings; accepted.

Cites findings: `fnd_d62554d6f491`, `fnd_cc0ca140868a`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_26`

Only info-level findings; accepted.

Cites findings: `fnd_d62554d6f491`, `fnd_bd91788fdde7`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_38`

Only info-level findings; accepted.

Cites findings: `fnd_c56e48e0b938`, `fnd_24142bdd4542`.

### [NEEDS-SCOPE-REPAIR] `clm_26117b36a866_ollama_intern_39`

Findings: recommendation_exceeds_evidence (warn); scope_widening (warn).

Cites findings: `fnd_7fd6a6a68565`, `fnd_03e5d9b60c7c`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_40`

Only info-level findings; accepted.

Cites findings: `fnd_6062f52f1a60`.

### [ACCEPTED] `clm_26117b36a866_ollama_intern_42`

Only info-level findings; accepted.

Cites findings: `fnd_a23487364b27`.

### [NEEDS-SCOPE-REPAIR] `clm_484224037767_ollama_intern_1`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_f4d1113485a4`, `fnd_70acdd7b191b`.

### [NEEDS-SCOPE-REPAIR] `clm_484224037767_ollama_intern_4`

Findings: overgeneralized_claim (warn); claim_overproduction (warn).

Cites findings: `fnd_33192b03257b`, `fnd_df78910b8eb9`, `fnd_a33864f01641`.

### [NEEDS-SCOPE-REPAIR] `clm_484224037767_ollama_intern_5`

Findings: claim_overproduction (warn); scope_widening (warn).

Cites findings: `fnd_dc5d539145c4`, `fnd_df78910b8eb9`, `fnd_f3b185843cf0`, `fnd_6aee4c1ecf41`.

### [NEEDS-HUMAN-REVIEW] `clm_484224037767_ollama_intern_6`

Findings: claim_overproduction (warn); temporal_mismatch (warn).

Cites findings: `fnd_c547ced91927`, `fnd_df78910b8eb9`, `fnd_d85af2fc9362`, `fnd_3cc94fde25a6`.

### [ACCEPTED] `clm_484224037767_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_4ab307114772`.

### [ACCEPTED] `clm_484224037767_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_3f211fbf8e9b`.
