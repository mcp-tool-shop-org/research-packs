# Adversarial Review: 01-engine-version-export-template-compat

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-10T03:21:29.841Z
**Candidate claims:** 40
**Findings:** 51 (block: 2, warn: 6, info: 43)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 3
- [NEEDS-SCOPE-REPAIR]: 3
- [ACCEPTED]: 34

## Findings

### [INFO] valid_but_low_value (fnd_fe161a40efdc)

Claim clm_4c6c14f4f6fa_ollama_intern_1 reiterates basic context about Godot's early development.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_1`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [WARN] overgeneralized_claim (fnd_ee016e7873a4)

Claim clm_71469ccfe316_ollama_intern_3 suggests all Godot 4 upgrades result in larger binaries, but the source only discusses a comparison between Godot 4.0 and 3.x builds with the same enabled modules.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_4`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Clarify that while Godot 4 builds are generally larger, specific comparisons like 3.x vs 4.0 builds with matching settings should be made.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** While this can be mitigated by optimizing a build for size, a 4.0 build with a given set of enabled modules will remain larger compared to a 3.x build with the same modules.

### [WARN] scope_widening (fnd_5ddf2740b5bb)

The claim about disabling compression for resources to create smaller patch sizes is too broad. It should be limited to specific resource types that are known to cause larger patches.

- **Claim IDs:** `clm_6ee62ab47888_ollama_intern_9`
- **Source IDs:** `src_6ee62ab47888`
- **Required action:** Specify which resource types may benefit from disabling compression to create smaller patch sizes, if any.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** For the smallest patch size possible we recommend turning off compression for any resources you want to patch.

### [INFO] valid_but_low_value (fnd_9ac463382b92)

Claim clm_6f54a167d232_ollama_intern_8 restates well-known advice to backup before software upgrades, but this detail is too low-leverage for synthesis.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_8`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Avoid this finding by focusing analysis on higher-level claims with broader implications.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** source_ids: src_6f54a167d232

### [INFO] valid_but_low_value (fnd_bef58d0cec99)

The claims that maintenance releases are compatible with previous releases and recommended for adoption restated the evidence without adding synthesis.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_4`, `clm_1e4fa1dde3af_ollama_intern_5`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Maintenance releases are compatible with previous releases and are recommended for adoption.

### [BLOCK] scope_widening (fnd_a505fd52c3ee)

The claim that upgrading to Godot 4 may result in larger binary sizes for exported projects generalizes the issue across all projects, but the evidence only mentions a specific scenario with 'optimizing a build for size'. The broader scope of 'all projects' is unsupported by the narrow context.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_4`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Clarify if the increased binary size applies universally across all projects or only under specific circumstances.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** While this can be mitigated by optimizing a build for size, a 4.0 build with a given set of enabled modules will remain larger compared to a 3.x build with the same modules.

### [BLOCK] scope_widening (fnd_781df1cbaf2e)

The scope 'Godot game engine major release policy' is too narrow for the universal quantifier 'can only' in the assertion.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_17`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Narrow the scope or revise the assertion to avoid universal quantification.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Compatibility-breaking changes can only be performed in a new major release:

### [INFO] missing_not_constraint (fnd_19333a0f683e)

Claim clm_4c6c14f4f6fa_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_1`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot originally lacked a built-in means to export projects.

### [INFO] missing_not_constraint (fnd_5aba47ceba61)

Claim clm_4c6c14f4f6fa_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_3`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exporting a Godot project for PC involves compressing the project directory.

### [INFO] missing_not_constraint (fnd_204f38de06f2)

Claim clm_4c6c14f4f6fa_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_4`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot has a system for creating DLCs as extra package files.

### [INFO] missing_not_constraint (fnd_d0c85df4754b)

Claim clm_4c6c14f4f6fa_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_6`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's export menu allows creating export presets for various platforms.

### [INFO] missing_not_constraint (fnd_326b29f54cb2)

Claim clm_4c6c14f4f6fa_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_7`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot provides five different modes for exporting project resources.

### [INFO] missing_not_constraint (fnd_8336c5e78203)

Claim clm_6e935dbe9826_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6e935dbe9826_ollama_intern_1`
- **Source IDs:** `src_6e935dbe9826`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot has a system to tag availability of features.

### [INFO] missing_not_constraint (fnd_9bbfdd549f40)

Claim clm_6e935dbe9826_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6e935dbe9826_ollama_intern_3`
- **Source IDs:** `src_6e935dbe9826`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's feature tags can be queried at runtime from the singleton API.

### [INFO] missing_not_constraint (fnd_488d8d107c91)

Claim clm_6e935dbe9826_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6e935dbe9826_ollama_intern_10`
- **Source IDs:** `src_6e935dbe9826`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Feature tags can be used to customize the build process via ExportPlugin.

### [INFO] missing_not_constraint (fnd_06f4283c2f00)

Claim clm_71469ccfe316_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_3`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4 has a longer support period compared to Godot 3.x.

### [INFO] missing_not_constraint (fnd_7dd604ef484e)

Claim clm_71469ccfe316_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_4`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Upgrading to Godot 4 may result in larger binary sizes for exported projects.

### [INFO] missing_not_constraint (fnd_0801f0b0bba9)

Claim clm_71469ccfe316_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_16`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Some API renames in Godot 4 require manual replacement using the script editor.

### [INFO] missing_not_constraint (fnd_dc37bb8b188a)

Claim clm_71469ccfe316_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_22`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: AudioServer's device property is now output_device.

### [INFO] missing_not_constraint (fnd_45c121488629)

Claim clm_71469ccfe316_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_23`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Color names are now uppercase and use underscores between words.

### [INFO] missing_not_constraint (fnd_c2fb000fec32)

Claim clm_71469ccfe316_ollama_intern_27 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_27`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: 'hint_albedo' is now 'source_color'.

### [INFO] missing_not_constraint (fnd_9cd865eb30ae)

Claim clm_71469ccfe316_ollama_intern_28 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_28`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: 'hint_color' is now 'source_color'.

### [INFO] missing_not_constraint (fnd_688c637b61b5)

Claim clm_71469ccfe316_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_33`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In Godot 4, the `rotation` property replaces `rotation_degrees`.

### [INFO] missing_not_constraint (fnd_d1b9d2601be6)

Claim clm_71469ccfe316_ollama_intern_37 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_37`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In Godot 4, Camera2D's `zoom` property has inverted behavior.

### [INFO] missing_not_constraint (fnd_7783a22bd5e3)

Claim clm_71469ccfe316_ollama_intern_38 has no 'not' constraint recorded.

- **Claim IDs:** `clm_71469ccfe316_ollama_intern_38`
- **Source IDs:** `src_71469ccfe316`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: :ref:`class_Node`'s `remove_and_skip()` method was removed in Godot 4.

### [INFO] missing_not_constraint (fnd_e1996b284966)

Claim clm_6ee62ab47888_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ee62ab47888_ollama_intern_9`
- **Source IDs:** `src_6ee62ab47888`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Disabling compression for certain resources can help create smaller patch sizes.

### [INFO] missing_not_constraint (fnd_fedba25bc0e7)

Claim clm_6ee62ab47888_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6ee62ab47888_ollama_intern_11`
- **Source IDs:** `src_6ee62ab47888`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource packs can be loaded into a game using the ProjectSettings singleton.

### [INFO] missing_not_constraint (fnd_98e74689832f)

Claim clm_6f54a167d232_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_1`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's release policy involves constantly evolving stable branches.

### [INFO] missing_not_constraint (fnd_eb0cb4db55fe)

Claim clm_6f54a167d232_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_3`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The 'major' version in Godot is incremented for major compatibility breakages.

### [INFO] missing_not_constraint (fnd_cd61a18db90b)

Claim clm_6f54a167d232_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_5`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The latest patch release in a minor series receives active support.

### [INFO] missing_not_constraint (fnd_dd185fba971a)

Claim clm_6f54a167d232_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_6`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot recommends using Godot 4.x for new projects.

### [INFO] missing_not_constraint (fnd_4041e093647d)

Claim clm_6f54a167d232_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_8`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Upgrading software while working on a project is risky.

### [INFO] missing_not_constraint (fnd_31927fa3b77b)

Claim clm_6f54a167d232_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_11`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot aims to publish minor releases relatively frequently.

### [INFO] missing_not_constraint (fnd_35eb174f2fea)

Claim clm_6f54a167d232_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_6f54a167d232_ollama_intern_17`
- **Source IDs:** `src_6f54a167d232`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Compatibility-breaking changes can only be performed in a new major release.

### [INFO] missing_not_constraint (fnd_0313fc72b84c)

Claim clm_1e4fa1dde3af_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_1`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This release is compatible with previous ones.

### [INFO] missing_not_constraint (fnd_a21363ee3a92)

Claim clm_1e4fa1dde3af_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_2`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This release is recommended for adoption.

### [INFO] missing_not_constraint (fnd_96fc3f9ea05f)

Claim clm_1e4fa1dde3af_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_3`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Bugs should be reported on GitHub after checking if they haven't been reported.

### [INFO] missing_not_constraint (fnd_59705cf272cb)

Claim clm_1e4fa1dde3af_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_4`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Maintenance releases are compatible with previous releases.

### [INFO] missing_not_constraint (fnd_60a96f861ea3)

Claim clm_1e4fa1dde3af_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_5`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Maintenance releases are recommended for adoption.

### [INFO] missing_not_constraint (fnd_a8668b8e302a)

Claim clm_1e4fa1dde3af_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_7`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Godot game engine has released version 4.6.2-stable.

### [INFO] missing_not_constraint (fnd_01ef09f08b74)

Claim clm_1e4fa1dde3af_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_12`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Engine version 4.6.2 is a maintenance release.

### [INFO] missing_not_constraint (fnd_cfb7838202ec)

Claim clm_1e4fa1dde3af_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1e4fa1dde3af_ollama_intern_13`
- **Source IDs:** `src_1e4fa1dde3af`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Engine maintenance releases are compatible with previous releases.

### [INFO] missing_not_constraint (fnd_e1b5af74ffde)

Claim clm_d3bd0f1dae0c_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d3bd0f1dae0c_ollama_intern_10`
- **Source IDs:** `src_d3bd0f1dae0c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The MacOS settings are missing from the Export Template Manager dialog.

### [WARN] source_quality_problem (fnd_e2986e4d4ccb)

Claim clm_d3bd0f1dae0c_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d3bd0f1dae0c_ollama_intern_10`
- **Source IDs:** `src_d3bd0f1dae0c`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_ca84b16b5347)

Claim clm_d3bd0f1dae0c_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d3bd0f1dae0c_ollama_intern_11`
- **Source IDs:** `src_d3bd0f1dae0c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The export template downloader was refactored by PR #117072.

### [WARN] source_quality_problem (fnd_ddf9869def92)

Claim clm_d3bd0f1dae0c_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_d3bd0f1dae0c_ollama_intern_11`
- **Source IDs:** `src_d3bd0f1dae0c`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_73e45f8bf257)

Claim clm_78aaa13e8387_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_78aaa13e8387_ollama_intern_7`
- **Source IDs:** `src_78aaa13e8387`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot engine has compatibility issues with VisionOS.

### [WARN] source_quality_problem (fnd_ee5e866c4c73)

Claim clm_78aaa13e8387_ollama_intern_7 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_78aaa13e8387_ollama_intern_7`
- **Source IDs:** `src_78aaa13e8387`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_8b241749f31c)

Claim clm_78aaa13e8387_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_78aaa13e8387_ollama_intern_8`
- **Source IDs:** `src_78aaa13e8387`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot engine does not resume partial downloads for selected platforms.

### [INFO] missing_not_constraint (fnd_b82f14c7c46b)

Claim clm_78aaa13e8387_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_78aaa13e8387_ollama_intern_15`
- **Source IDs:** `src_78aaa13e8387`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An empty Godot project built on Mac Mini m3 crashes when opened on iPad mini 2.

### [WARN] source_cluster_monopoly (fnd_68dd2ed60ac5)

Every source for this section traces to a single publisher (Godotengine). Claims drawn from this section inherit a publisher-monopoly limitation.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_1`, `clm_4c6c14f4f6fa_ollama_intern_3`, `clm_4c6c14f4f6fa_ollama_intern_4`, `clm_4c6c14f4f6fa_ollama_intern_6`, `clm_4c6c14f4f6fa_ollama_intern_7`, `clm_6e935dbe9826_ollama_intern_1`, `clm_6e935dbe9826_ollama_intern_3`, `clm_6e935dbe9826_ollama_intern_10`, `clm_71469ccfe316_ollama_intern_3`, `clm_71469ccfe316_ollama_intern_4`, `clm_71469ccfe316_ollama_intern_16`, `clm_71469ccfe316_ollama_intern_22`, `clm_71469ccfe316_ollama_intern_23`, `clm_71469ccfe316_ollama_intern_27`, `clm_71469ccfe316_ollama_intern_28`, `clm_71469ccfe316_ollama_intern_33`, `clm_71469ccfe316_ollama_intern_37`, `clm_71469ccfe316_ollama_intern_38`, `clm_6ee62ab47888_ollama_intern_9`, `clm_6ee62ab47888_ollama_intern_11`, `clm_6f54a167d232_ollama_intern_1`, `clm_6f54a167d232_ollama_intern_3`, `clm_6f54a167d232_ollama_intern_5`, `clm_6f54a167d232_ollama_intern_6`, `clm_6f54a167d232_ollama_intern_8`, `clm_6f54a167d232_ollama_intern_11`, `clm_6f54a167d232_ollama_intern_17`, `clm_1e4fa1dde3af_ollama_intern_1`, `clm_1e4fa1dde3af_ollama_intern_2`, `clm_1e4fa1dde3af_ollama_intern_3`, `clm_1e4fa1dde3af_ollama_intern_4`, `clm_1e4fa1dde3af_ollama_intern_5`, `clm_1e4fa1dde3af_ollama_intern_7`, `clm_1e4fa1dde3af_ollama_intern_12`, `clm_1e4fa1dde3af_ollama_intern_13`, `clm_d3bd0f1dae0c_ollama_intern_10`, `clm_d3bd0f1dae0c_ollama_intern_11`, `clm_78aaa13e8387_ollama_intern_7`, `clm_78aaa13e8387_ollama_intern_8`, `clm_78aaa13e8387_ollama_intern_15`
- **Source IDs:** `src_1e4fa1dde3af`, `src_4c6c14f4f6fa`, `src_6e935dbe9826`, `src_6ee62ab47888`, `src_6f54a167d232`, `src_71469ccfe316`, `src_78aaa13e8387`, `src_d3bd0f1dae0c`
- **Required action:** Add at least one source from an independent publisher before treating these claims as broadly corroborated.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Section sources: 8; distinct publishers: 1 (Godotengine).

## Claim review decisions

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_1`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_fe161a40efdc`, `fnd_19333a0f683e`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_3`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_5aba47ceba61`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_4`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_204f38de06f2`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_6`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_d0c85df4754b`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_7`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_326b29f54cb2`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6e935dbe9826_ollama_intern_1`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_8336c5e78203`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6e935dbe9826_ollama_intern_3`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_9bbfdd549f40`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6e935dbe9826_ollama_intern_10`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_488d8d107c91`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_3`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_06f4283c2f00`, `fnd_68dd2ed60ac5`.

### [NEEDS-SCOPE-REPAIR] `clm_71469ccfe316_ollama_intern_4`

Findings: overgeneralized_claim (warn); scope_widening (block); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_ee016e7873a4`, `fnd_a505fd52c3ee`, `fnd_7dd604ef484e`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_16`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_0801f0b0bba9`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_22`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_dc37bb8b188a`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_23`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_45c121488629`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_27`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_c2fb000fec32`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_28`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_9cd865eb30ae`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_33`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_688c637b61b5`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_37`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_d1b9d2601be6`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_71469ccfe316_ollama_intern_38`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_7783a22bd5e3`, `fnd_68dd2ed60ac5`.

### [NEEDS-SCOPE-REPAIR] `clm_6ee62ab47888_ollama_intern_9`

Findings: scope_widening (warn); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_5ddf2740b5bb`, `fnd_e1996b284966`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6ee62ab47888_ollama_intern_11`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_fedba25bc0e7`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_1`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_98e74689832f`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_3`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_eb0cb4db55fe`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_5`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_cd61a18db90b`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_6`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_dd185fba971a`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_8`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_9ac463382b92`, `fnd_4041e093647d`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_6f54a167d232_ollama_intern_11`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_31927fa3b77b`, `fnd_68dd2ed60ac5`.

### [NEEDS-SCOPE-REPAIR] `clm_6f54a167d232_ollama_intern_17`

Findings: scope_widening (block); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_781df1cbaf2e`, `fnd_35eb174f2fea`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_1`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_0313fc72b84c`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_2`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_a21363ee3a92`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_3`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_96fc3f9ea05f`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_4`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_bef58d0cec99`, `fnd_59705cf272cb`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_5`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_bef58d0cec99`, `fnd_60a96f861ea3`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_7`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_a8668b8e302a`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_12`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_01ef09f08b74`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_1e4fa1dde3af_ollama_intern_13`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_cfb7838202ec`, `fnd_68dd2ed60ac5`.

### [NEEDS-SOURCE-REPAIR] `clm_d3bd0f1dae0c_ollama_intern_10`

Findings: source_quality_problem (warn); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_e1b5af74ffde`, `fnd_e2986e4d4ccb`, `fnd_68dd2ed60ac5`.

### [NEEDS-SOURCE-REPAIR] `clm_d3bd0f1dae0c_ollama_intern_11`

Findings: source_quality_problem (warn); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_ca84b16b5347`, `fnd_ddf9869def92`, `fnd_68dd2ed60ac5`.

### [NEEDS-SOURCE-REPAIR] `clm_78aaa13e8387_ollama_intern_7`

Findings: source_quality_problem (warn); source_cluster_monopoly (warn, waived).

Cites findings: `fnd_73e45f8bf257`, `fnd_ee5e866c4c73`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_78aaa13e8387_ollama_intern_8`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_8b241749f31c`, `fnd_68dd2ed60ac5`.

### [ACCEPTED] `clm_78aaa13e8387_ollama_intern_15`

Findings: source_cluster_monopoly (warn, waived).

Cites findings: `fnd_b82f14c7c46b`, `fnd_68dd2ed60ac5`.
