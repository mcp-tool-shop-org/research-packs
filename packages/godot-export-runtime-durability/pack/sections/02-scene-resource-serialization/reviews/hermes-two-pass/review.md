# Adversarial Review: 02-scene-resource-serialization

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-10T06:22:20.636Z
**Candidate claims:** 82
**Findings:** 118 (block: 0, warn: 28, info: 90)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 16
- [NEEDS-SCOPE-REPAIR]: 11
- [ACCEPTED]: 55

## Findings

### [INFO] valid_but_low_value (fnd_4814246520c7)

The claim states a basic fact about the purpose of Resource in Godot, which is adequately supported by the evidence.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_26`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Resource primarily serves as a container for serializable objects.

### [WARN] overgeneralized_claim (fnd_4859c535de7c)

The ResourceLoader class documentation contains scattered claims about its functionality and usage, some of which are overgeneralized or not fully supported by the provided evidence excerpts.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_1`, `clm_ef84790b4914_ollama_intern_3`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Reviewers should be cautious when relying on these excerpts to fully characterize ResourceLoader's purpose and usage across the Godot Engine.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The evidence excerpts cover specific methods and features of ResourceLoader but do not comprehensively support broad claims about its architecture role or resource management system scope.

### [INFO] valid_but_low_value (fnd_45cd24c6b691)

Claim clm_ef84790b4914_ollama_intern_11 describes a specific ResourceLoader method but provides low leverage synthesis as it is a straightforward description of the 'exists' functionality.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_11`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** While accurate, this claim may not contribute significantly to high-level understanding of ResourceLoader's role.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The evidence excerpt directly states the purpose and parameters of the 'exists' method.

### [WARN] definition_drift (fnd_b829149600e1)

PackedScene's 'save' method saves a node and all its child nodes, but the claim conflates this with SceneTree saving orphan nodes.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_3`, `clm_d8935f3b0347_ollama_intern_133`
- **Source IDs:** `src_bc58f284031b`, `src_d8935f3b0347`
- **Required action:** Clarify that 'saving' means different things in the context of PackedScene and SceneTree, and which child nodes are involved.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The evidence excerpts for claims clm_bc58f284031b_ollama_intern_3 and clm_d8935f3b0347_ollama_intern_133 refer to different functionality - PackedScene saving a node tree vs SceneTree finding orphans. They reuse 'save' language but the APIs operate on distinct graph sections.

### [INFO] valid_but_low_value (fnd_f68ce9f0ed49)

Claim clm_bc58f284031b_ollama_intern_11 states PackedScene enables scene manipulation but this is contextual trivia.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_11`
- **Source IDs:** `src_bc58f284031b`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The evidence excerpt lists method Javadoc for a range of Node APIs. This claim does not uniquely synthesize new facts or clearly widen scope; it restates the utility of an object model, which is low-leverage boilerplate detail in this context.

### [WARN] overgeneralized_claim (fnd_8add2c1bd5f6)

The claim that resources in Godot are loaded only once from disk and shared across the project overgeneralizes the source, which only supports single-use resource loading within a single process.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_2`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Clarify or split this claim into two: one about single-use loading and another about shared access across nodes
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When the engine loads a resource from disk, **it only loads it once**. If a copy of that resource is already in memory, trying to load the resource again will return the same copy every time.

### [WARN] scope_widening (fnd_9ed1d1233e78)

The claim that nodes and resources can contain other resources as properties widens beyond the source, which only discusses general property export for objects like nodes or resources.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_3`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Restrict claim scope to just nodes and resources being able to contain resources as properties
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Every object, be it a Node or a Resource, can export properties. There are many types of Properties...

### [INFO] valid_but_low_value (fnd_02975a0b449a)

The claim about using PackedScene.instantiate() to instantiate a scene is valid but low value, as it simply restates existing knowledge.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_6`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** To get an instance of the scene, you have to use the PackedScene.instantiate() method.

### [INFO] valid_but_low_value (fnd_8ecf8404907d)

The claim that Godot's resources automatically free themselves when no longer in use is valid but low value, as it restates basic resource management behavior.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_8`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When a Resource is no longer in use, it will automatically free itself...

### [INFO] valid_but_low_value (fnd_47679fce4469)

The claim about Godot's Inspector editing resource files is valid but low value, as it states a built-in editor feature.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_10`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** - Godot Engine's Inspector renders and edits Resource files out-of-the-box...

### [WARN] overgeneralized_claim (fnd_44bc157c2849)

The claim that 'Scenes should be used for creating concepts specific to a game' overgeneralizes the use of scenes, as scenes can be used for more than just game-specific concepts.

- **Claim IDs:** `clm_55a63071c9c1_ollama_intern_1`
- **Source IDs:** `src_55a63071c9c1`
- **Required action:** Clarify that scenes are not only for game-specific concepts but also for reusable tools and declarative code extensions
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When designing a game in Godot Engine. When to use scenes versus scripts

### [INFO] recommendation_exceeds_evidence (fnd_4edff6a3637a)

The recommendation to use 'res://' for accessing files relative to the project's root folder seems broader than the evidence provided, as it suggests a general practice without specifying its limitations or alternatives.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_5`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Specify when and how 'res://' should be used, and mention alternatives like 'user://' for persistent user data
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** You can access any file relative to it by writing paths starting with 'res://', which stands for resources. For example, you can access an image file 'character.png' located in the project's root folder in code with the following path: 'res://character.png'.

### [INFO] valid_but_low_value (fnd_146d50da2d98)

The claim 'Godot supports UNIX-style path separators on all platforms' is valid but provides low-value information, as the fact that Godot uses UNIX-style path separators is already established in the context.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_2`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** N/A
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Including Windows. To make supporting multiple platforms easier, Godot uses **UNIX-style path separators** (forward slash ``/``). These work on all platforms, **including Windows**.

### [WARN] overgeneralized_claim (fnd_aa0de436f007)

The claim that '[project_name]' can be overridden on a per-platform basis using feature tags overgeneralizes the scope, as it only applies to the application name in Project Settings, not the project directory itself.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_9`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Clarify that '[project_name]' override via feature tags only applies to application name, not project directory paths.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** you can override it on a per-platform basis using :ref:`feature tags <doc_feature_tags>"

### [INFO] valid_but_low_value (fnd_16d55ee65c38)

The claim about Godot automatically importing files placed directly in the project folder restates well-known import mechanisms.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_1`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [INFO] valid_but_low_value (fnd_0adc400a1404)

The claim about Godot supporting manual file copy and drag-and-drop for resource files restates an import mechanism detail.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_2`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [INFO] valid_but_low_value (fnd_5658b7726a93)

The claim that imported assets are hidden internally in a 'res://.godot/imported/' folder restates the import mechanism's internal behavior.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_3`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [INFO] valid_but_low_value (fnd_5afca0353554)

The claim that accessing imported assets via code requires the Resource Loader restates an import mechanism's programming necessity.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_4`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [INFO] valid_but_low_value (fnd_c83b59ecee8b)

The claim that the Resource Loader cannot access non-imported files restates a Resource Loader limitation.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_5`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium

### [INFO] valid_but_low_value (fnd_04882fc2b279)

The claim restates that a simple fix would be to rearrange the code slightly in Godot's VariantParser to handle reading '-INF' or any negated identifier, without adding new information.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_5`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** A simple fix would be to rearrange this code slightly, so that it only needs to check for a leading ' - ' once.

### [WARN] overgeneralized_claim (fnd_b0f246a8a660)

The claim that 'Godot creates two new PNG files when double-clicking on a `.gltf` file' overgeneralizes from the given context which discusses issues with importing specific types of resources, not the general behavior when double-clicking `.gltf` files.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_8`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Clarify or limit the claim to only the specific import issues mentioned, rather than making a general statement about behavior when double-clicking `.gltf` files.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The evidence excerpt mentions specific issues with importing `icon.svg` and that an error occurs when double-clicking PNG files in a minimal reproduction project. This does not directly support the claim about Godot creating two new PNG files for all `.gltf` files.

### [INFO] valid_but_low_value (fnd_4def4c7aa427)

The claim 'A minimal reproduction project is available to demonstrate this issue' restates the provided context and does not add significant synthesis value on its own.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_11`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [WARN] overgeneralized_claim (fnd_97665fb5c4d6)

The claim that 'The cyclic resource loading issue particularly affects Curve resources' overgeneralizes from the source which discusses this issue across multiple Godot versions, but does not focus specifically on Curve resources.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_21`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Specify if this issue is particularly severe or prevalent in Curve resources beyond the general Godot versions it affects.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** While the claim mentions Curve resources are affected, the provided context discusses issues in versions 4.6.1, 4.6, and 4.5 without focusing solely on Curves.

### [INFO] valid_but_low_value (fnd_98e0dfa2e814)

The claim 'The Godot engine contains a check in Range.cpp that disallows non-finite values' restates the provided context and does not add significant synthesis value on its own.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_19`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [WARN] overgeneralized_claim (fnd_597cb764dc37)

The claim that removing NodePath usages can 'mitigate null-related issues in Godot' overgeneralizes based on a single anecdote of a problem being resolved.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_23`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** The claim should be revised to only reflect the specific scenario mentioned, rather than making broad generalizations about mitigating all null issues.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Thanks to this it seems like the rare problems related to NodePaths being null is now gone.

### [WARN] scope_widening (fnd_0d19b640cb45)

The claim about Godot encountering a hard crash when loading scenes after hours of gameplay widens the scope to imply it's an engine-wide issue, but the evidence suggests it's specific to Windows.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_26`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** The claim should specify that the hard crash issue is only known to affect Windows users based on the provided evidence.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** This might be a Windows specific problem... they get the most playtime and thus encounter this random problem the most.

### [WARN] scope_widening (fnd_7e0fddb54563)

The claim about the returned value of `get_process_delta_time` may vary from frame to frame uses a universal quantifier ('may') but the scope is quite narrow, discussing a single method.

- **Claim IDs:** `clm_d8935f3b0347_ollama_intern_141`
- **Source IDs:** `src_d8935f3b0347`
- **Required action:** Revise the claim to better match the scope or provide additional context.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** :ref:`float<class_float>` **get_process_delta_time**\ ( \ ) |const| :ref:`🔗<class_Node_method_get_process_delta_time>` … Returns the time elapsed (in seconds) since the last process callback. This value is identical to :ref:`_process()<class_Node_private_method__process>`'s ``delta`` parameter, and may vary from frame to frame. See also :ref:`NOTIFICATION_PROCESS<class_Node_constant_NOTIFICATION_PROCESS>`.

### [WARN] scope_widening (fnd_4eeb3b051b6b)

The universal quantifier 'all' is used in the claim, but the scope mentions specific Godot versions (4.6.1, 4.6, and 4.5).

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_16`, `clm_c50580a705c4_ollama_intern_17`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Rephrase the claim to be more specific about the affected versions or narrow down the scope of the assertion.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The assert: The cyclic resource loading issue particularly affects Curve resources.
The scope: The source asserts that this cyclic resource loading issue affects Godot versions 4.6.1, 4.6, and 4.5.

### [INFO] missing_not_constraint (fnd_6b1e93284b51)

Claim clm_3bf41f24d47a_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_1`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource serves primarily as data containers for serializable objects.

### [INFO] missing_not_constraint (fnd_5d572af537f8)

Claim clm_3bf41f24d47a_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_2`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource is a base class for all Godot-specific resource types.

### [INFO] missing_not_constraint (fnd_d2a669fd6b79)

Claim clm_3bf41f24d47a_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_3`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resources are reference-counted and freed when no longer in use.

### [INFO] missing_not_constraint (fnd_082c47d9ac32)

Claim clm_3bf41f24d47a_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_4`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resources can be nested within other resources and saved on disk.

### [INFO] missing_not_constraint (fnd_438c48f1cb7f)

Claim clm_3bf41f24d47a_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_6`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource has a private method called _get_rid()

### [INFO] missing_not_constraint (fnd_f3dbebb56664)

Claim clm_3bf41f24d47a_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_9`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: If 'duplicate' is true, each scene instance using the resource has its own copy.

### [INFO] missing_not_constraint (fnd_bf4697cade63)

Claim clm_3bf41f24d47a_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_10`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Changing 'duplicate' at runtime does not affect already created duplicates.

### [INFO] missing_not_constraint (fnd_99e014861178)

Claim clm_3bf41f24d47a_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_14`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource.duplicate() returns a new resource with copied export properties.

### [INFO] missing_not_constraint (fnd_6665e022653f)

Claim clm_3bf41f24d47a_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_15`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource.duplicate() returns a deep copy if the 'deep' parameter is true.

### [INFO] missing_not_constraint (fnd_7aca74eea17b)

Claim clm_3bf41f24d47a_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_3bf41f24d47a_ollama_intern_26`
- **Source IDs:** `src_3bf41f24d47a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resource primarily serves as a container for serializable objects.

### [INFO] missing_not_constraint (fnd_dc777c2646da)

Claim clm_ef84790b4914_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_1`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ResourceLoader is a singleton used to load resource files from the filesystem.

### [INFO] missing_not_constraint (fnd_d9fa179f6ea4)

Claim clm_ef84790b4914_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_3`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ResourceLoader is not used to load non-resource files such as plain text files.

### [INFO] missing_not_constraint (fnd_0099a82b8a1a)

Claim clm_ef84790b4914_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_4`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The ResourceLoader class has a method called add_resource_format_loader.

### [INFO] missing_not_constraint (fnd_04c5542e5afc)

Claim clm_ef84790b4914_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_5`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The ResourceLoader class has an enumeration called ThreadLoadStatus.

### [INFO] missing_not_constraint (fnd_2409c9ac09f6)

Claim clm_ef84790b4914_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_11`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: exists checks if a resource exists based on the provided path and type hint.

### [INFO] missing_not_constraint (fnd_c6331498c404)

Claim clm_ef84790b4914_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_12`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ResourceLoader returns whether a recognized resource exists for the given path.

### [INFO] missing_not_constraint (fnd_d211b8d42edb)

Claim clm_ef84790b4914_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_13`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ResourceLoader can take an optional type hint to specify the resource type.

### [INFO] missing_not_constraint (fnd_748f2cafe374)

Claim clm_ef84790b4914_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_14`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: get_cached_ref() returns the cached resource reference for a given path.

### [INFO] missing_not_constraint (fnd_b65e97f84eb5)

Claim clm_ef84790b4914_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_15`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: get_dependencies() returns the dependencies for a resource at a given path.

### [INFO] missing_not_constraint (fnd_2a1c4f31dfb0)

Claim clm_ef84790b4914_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef84790b4914_ollama_intern_22`
- **Source IDs:** `src_ef84790b4914`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: ResourceLoader.load_threaded_request() loads resources using threads.

### [INFO] missing_not_constraint (fnd_ad6f00a6e2be)

Claim clm_bc58f284031b_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_1`
- **Source IDs:** `src_bc58f284031b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PackedScene is an abstraction of a serialized scene.

### [INFO] missing_not_constraint (fnd_88f9bd62ccb4)

Claim clm_bc58f284031b_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_3`
- **Source IDs:** `src_bc58f284031b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PackedScene can save a node to a file, including all nodes it owns.

### [INFO] missing_not_constraint (fnd_d096f0cce950)

Claim clm_bc58f284031b_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_10`
- **Source IDs:** `src_bc58f284031b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PackedScene provides an interface to load serialized scenes.

### [INFO] missing_not_constraint (fnd_1bdf551cb488)

Claim clm_bc58f284031b_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_bc58f284031b_ollama_intern_11`
- **Source IDs:** `src_bc58f284031b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PackedScene enables manipulation of serialized scenes.

### [INFO] missing_not_constraint (fnd_e861de8614ba)

Claim clm_d8935f3b0347_ollama_intern_141 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d8935f3b0347_ollama_intern_141`
- **Source IDs:** `src_d8935f3b0347`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The returned value of `get_process_delta_time` may vary from frame to frame.

### [INFO] missing_not_constraint (fnd_c58f1a74ad7d)

Claim clm_d8935f3b0347_ollama_intern_172 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d8935f3b0347_ollama_intern_172`
- **Source IDs:** `src_d8935f3b0347`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The remove_from_group method removes a node from a specific group.

### [INFO] missing_not_constraint (fnd_2eccb4b0b5dd)

Claim clm_d8935f3b0347_ollama_intern_173 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d8935f3b0347_ollama_intern_173`
- **Source IDs:** `src_d8935f3b0347`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The reparent method changes a node's parent while preserving owner if possible.

### [INFO] missing_not_constraint (fnd_c7fbcff68548)

Claim clm_d8935f3b0347_ollama_intern_190 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d8935f3b0347_ollama_intern_190`
- **Source IDs:** `src_d8935f3b0347`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Enabling `set_process_shortcut_input` enables shortcut processing for a node.

### [INFO] missing_not_constraint (fnd_77bb17303f29)

Claim clm_0b13e026c1cc_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_2`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resources in Godot are loaded only once from disk and shared across the project.

### [INFO] missing_not_constraint (fnd_35a620939346)

Claim clm_0b13e026c1cc_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_3`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Nodes and resources in Godot can contain other resources as properties.

### [INFO] missing_not_constraint (fnd_563dad1b1baf)

Claim clm_0b13e026c1cc_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_5`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Scenes saved to disk in Godot are resources of type PackedScene.

### [INFO] missing_not_constraint (fnd_1f6c031db559)

Claim clm_0b13e026c1cc_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_6`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To instantiate an instance of a scene, use the PackedScene.instantiate() method.

### [INFO] missing_not_constraint (fnd_97551ca88ee7)

Claim clm_0b13e026c1cc_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_8`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's resources automatically free themselves when no longer in use.

### [INFO] missing_not_constraint (fnd_7b92716f3088)

Claim clm_0b13e026c1cc_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_10`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's Inspector renders and edits resource files out-of-the-box.

### [INFO] missing_not_constraint (fnd_180eff9b662f)

Claim clm_0b13e026c1cc_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0b13e026c1cc_ollama_intern_17`
- **Source IDs:** `src_0b13e026c1cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Resources in Godot can store data separate from nodes.

### [INFO] missing_not_constraint (fnd_f3ccd05500e7)

Claim clm_55a63071c9c1_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_55a63071c9c1_ollama_intern_1`
- **Source IDs:** `src_55a63071c9c1`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Scenes should be used for creating concepts specific to a game.

### [INFO] missing_not_constraint (fnd_466d07741fe6)

Claim clm_55a63071c9c1_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_55a63071c9c1_ollama_intern_2`
- **Source IDs:** `src_55a63071c9c1`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Scripts are best suited for reusable tools across projects.

### [INFO] missing_not_constraint (fnd_ccde5cd08a81)

Claim clm_55a63071c9c1_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_55a63071c9c1_ollama_intern_3`
- **Source IDs:** `src_55a63071c9c1`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Scenes define an engine class extension with declarative code.

### [INFO] missing_not_constraint (fnd_40d0c2b02b79)

Claim clm_cfb7cbc09d44_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_1`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot uses UNIX-style path separators in its projects.

### [INFO] missing_not_constraint (fnd_9addea97609e)

Claim clm_cfb7cbc09d44_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_2`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot supports UNIX-style path separators on all platforms.

### [INFO] missing_not_constraint (fnd_d62dbb22db25)

Claim clm_cfb7cbc09d44_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_3`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot recommends using forward slashes in path-related methods.

### [INFO] missing_not_constraint (fnd_ec34a7035ea3)

Claim clm_cfb7cbc09d44_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_5`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot uses 'res://' to access files relative to the project's root folder.

### [INFO] missing_not_constraint (fnd_e50018d4f099)

Claim clm_cfb7cbc09d44_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_6`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot uses 'user://' to access persistent user data.

### [INFO] missing_not_constraint (fnd_2a749c040451)

Claim clm_cfb7cbc09d44_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_7`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot uses UNIX-style path separators in project files.

### [INFO] missing_not_constraint (fnd_73266130b0d5)

Claim clm_cfb7cbc09d44_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_8`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Project-specific data in Godot is stored under '[project_name]' directory.

### [INFO] missing_not_constraint (fnd_8371650d33ba)

Claim clm_cfb7cbc09d44_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_9`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: '[project_name]' can be overridden on a per-platform basis using feature tags.

### [INFO] missing_not_constraint (fnd_9c9982779ebb)

Claim clm_cfb7cbc09d44_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_15`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Steam release of Godot uses self-contained mode by default.

### [INFO] missing_not_constraint (fnd_1cf4228a6daf)

Claim clm_cfb7cbc09d44_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_cfb7cbc09d44_ollama_intern_16`
- **Source IDs:** `src_cfb7cbc09d44`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Self-contained mode is not yet supported in exported Godot projects.

### [INFO] missing_not_constraint (fnd_965877a8172d)

Claim clm_943086ae5d37_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_1`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot automatically imports files placed directly in the project folder.

### [INFO] missing_not_constraint (fnd_b5be927439cb)

Claim clm_943086ae5d37_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_2`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot supports manual file copy and drag-and-drop for resource files.

### [INFO] missing_not_constraint (fnd_049ee818160f)

Claim clm_943086ae5d37_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_3`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Imported assets are hidden internally in a ``res://.godot/imported/`` folder.

### [INFO] missing_not_constraint (fnd_f44dda6697b7)

Claim clm_943086ae5d37_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_943086ae5d37_ollama_intern_5`
- **Source IDs:** `src_943086ae5d37`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Resource Loader cannot access non-imported files.

### [INFO] missing_not_constraint (fnd_a87f64e7dcea)

Claim clm_c5ed9836ffb5_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_1`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Users can type both 'inf' and 'INF' in Godot's editor inspector.

### [WARN] source_quality_problem (fnd_76193981b386)

Claim clm_c5ed9836ffb5_ollama_intern_1 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_1`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_644fddf4baa8)

Claim clm_c5ed9836ffb5_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_3`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Capitalizing displayed and serialized non-finite values improves consistency.

### [WARN] source_quality_problem (fnd_7e4f3768bcdf)

Claim clm_c5ed9836ffb5_ollama_intern_3 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_3`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_3ad0723f3b29)

Claim clm_c5ed9836ffb5_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_4`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: VariantParser cannot parse '-INF' as a single thing.

### [WARN] source_quality_problem (fnd_1446d3784300)

Claim clm_c5ed9836ffb5_ollama_intern_4 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_4`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_48ba25e34d34)

Claim clm_c5ed9836ffb5_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_5`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A fix can be implemented to handle '-INF' correctly in VariantParser.

### [WARN] source_quality_problem (fnd_f375a509e0a1)

Claim clm_c5ed9836ffb5_ollama_intern_5 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_5`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e0ac1d000512)

Claim clm_c5ed9836ffb5_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_10`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The author is using Godot Engine version v4.5.2.rc.custom_build.

### [WARN] source_quality_problem (fnd_20b18aeac495)

Claim clm_c5ed9836ffb5_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_10`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_622ecf5a88e8)

Claim clm_c5ed9836ffb5_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_19`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's slider node has inconsistent behavior regarding its minimum value.

### [WARN] source_quality_problem (fnd_634225905488)

Claim clm_c5ed9836ffb5_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_19`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_4936d24568a7)

Claim clm_c5ed9836ffb5_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_20`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Setting the slider's value to zero explicitly does not resolve the issue.

### [WARN] source_quality_problem (fnd_38e5d2e340bc)

Claim clm_c5ed9836ffb5_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_20`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ac350e8d250e)

Claim clm_c5ed9836ffb5_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_21`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The initial value of the slider is not stored in the .tscn file.

### [WARN] source_quality_problem (fnd_98edbd8cc4bb)

Claim clm_c5ed9836ffb5_ollama_intern_21 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_21`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e99c10d76256)

Claim clm_c5ed9836ffb5_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_24`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's editor displays non-finite values such as infinity and NaN in real-time.

### [WARN] source_quality_problem (fnd_cdc8641798c2)

Claim clm_c5ed9836ffb5_ollama_intern_24 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_24`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_364e677128c0)

Claim clm_c5ed9836ffb5_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_25`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows users to modify 'inf' and 'INF' values through the editor.

### [WARN] source_quality_problem (fnd_7f45374e1e79)

Claim clm_c5ed9836ffb5_ollama_intern_25 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c5ed9836ffb5_ollama_intern_25`
- **Source IDs:** `src_c5ed9836ffb5`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_feb69f903376)

Claim clm_c50580a705c4_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_4`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue particularly affects Curve and potentially other exported resources.

### [INFO] missing_not_constraint (fnd_7f185c0a1b5b)

Claim clm_c50580a705c4_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_8`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot creates two new PNG files when double-clicking on a `.gltf` file.

### [INFO] missing_not_constraint (fnd_1aaf88639f7a)

Claim clm_c50580a705c4_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_11`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A minimal reproduction project is available to demonstrate this issue.

### [WARN] source_quality_problem (fnd_88e1622b2178)

Claim clm_c50580a705c4_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_11`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_7afdda832adf)

Claim clm_c50580a705c4_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_12`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The error seems to be exclusive to Godot version 4.4.beta3.

### [INFO] missing_not_constraint (fnd_414c7d2f0b10)

Claim clm_c50580a705c4_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_14`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Creating a new `EmployeeJob` resource works fine, even in v4.4.beta3.

### [INFO] missing_not_constraint (fnd_c8ce060b792e)

Claim clm_c50580a705c4_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_16`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The cyclic resource loading issue particularly affects Curve resources.

### [WARN] source_quality_problem (fnd_95070570bb5e)

Claim clm_c50580a705c4_ollama_intern_16 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_16`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_49c9bcabd2d8)

Claim clm_c50580a705c4_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_17`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The cyclic resource loading issue may also affect other exported resources.

### [INFO] missing_not_constraint (fnd_bceedafa4daf)

Claim clm_c50580a705c4_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_20`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot version 4.6.1 experiences cyclic resource loading issues.

### [WARN] source_quality_problem (fnd_5f3d8a90798c)

Claim clm_c50580a705c4_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_20`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ab04f8874e53)

Claim clm_c50580a705c4_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c50580a705c4_ollama_intern_21`
- **Source IDs:** `src_c50580a705c4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Curve resources are particularly affected by cyclic loading issues in Godot.

### [INFO] missing_not_constraint (fnd_eea619b1753f)

Claim clm_8b484efdebe2_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_7`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Default values for PackedScene are not saved in Godot engine.

### [WARN] source_quality_problem (fnd_2386652c5092)

Claim clm_8b484efdebe2_ollama_intern_7 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_7`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_2dea6936ca7f)

Claim clm_8b484efdebe2_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_19`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Godot engine contains a check in Range.cpp that disallows non-finite values.

### [WARN] source_quality_problem (fnd_6f5b68706a76)

Claim clm_8b484efdebe2_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_19`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_8bfe12aa1772)

Claim clm_8b484efdebe2_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_23`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Removing NodePath usages from code can mitigate null-related issues in Godot.

### [WARN] source_quality_problem (fnd_711a2849fa7e)

Claim clm_8b484efdebe2_ollama_intern_26 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_8b484efdebe2_ollama_intern_26`
- **Source IDs:** `src_8b484efdebe2`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

## Claim review decisions

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_6b1e93284b51`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_5d572af537f8`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_d2a669fd6b79`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_082c47d9ac32`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_438c48f1cb7f`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_f3dbebb56664`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_bf4697cade63`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_99e014861178`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_6665e022653f`.

### [ACCEPTED] `clm_3bf41f24d47a_ollama_intern_26`

Only info-level findings; accepted.

Cites findings: `fnd_4814246520c7`, `fnd_7aca74eea17b`.

### [NEEDS-SCOPE-REPAIR] `clm_ef84790b4914_ollama_intern_1`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_4859c535de7c`, `fnd_dc777c2646da`.

### [NEEDS-SCOPE-REPAIR] `clm_ef84790b4914_ollama_intern_3`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_4859c535de7c`, `fnd_d9fa179f6ea4`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_0099a82b8a1a`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_04c5542e5afc`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_45cd24c6b691`, `fnd_2409c9ac09f6`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_c6331498c404`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_d211b8d42edb`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_748f2cafe374`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_b65e97f84eb5`.

### [ACCEPTED] `clm_ef84790b4914_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_2a1c4f31dfb0`.

### [ACCEPTED] `clm_bc58f284031b_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_ad6f00a6e2be`.

### [ACCEPTED] `clm_bc58f284031b_ollama_intern_3`

Findings: definition_drift (warn).

Cites findings: `fnd_b829149600e1`, `fnd_88f9bd62ccb4`.

### [ACCEPTED] `clm_bc58f284031b_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_d096f0cce950`.

### [ACCEPTED] `clm_bc58f284031b_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_f68ce9f0ed49`, `fnd_1bdf551cb488`.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_133`

Findings: definition_drift (warn).

Cites findings: `fnd_b829149600e1`.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_135`

No findings recorded for this claim by the current reviewer.

### [NEEDS-SCOPE-REPAIR] `clm_d8935f3b0347_ollama_intern_141`

Findings: scope_widening (warn).

Cites findings: `fnd_7e0fddb54563`, `fnd_e861de8614ba`.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_172`

Only info-level findings; accepted.

Cites findings: `fnd_c58f1a74ad7d`.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_173`

Only info-level findings; accepted.

Cites findings: `fnd_2eccb4b0b5dd`.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_184`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_185`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_186`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_188`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d8935f3b0347_ollama_intern_190`

Only info-level findings; accepted.

Cites findings: `fnd_c7fbcff68548`.

### [NEEDS-SCOPE-REPAIR] `clm_0b13e026c1cc_ollama_intern_2`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_8add2c1bd5f6`, `fnd_77bb17303f29`.

### [NEEDS-SCOPE-REPAIR] `clm_0b13e026c1cc_ollama_intern_3`

Findings: scope_widening (warn).

Cites findings: `fnd_9ed1d1233e78`, `fnd_35a620939346`.

### [ACCEPTED] `clm_0b13e026c1cc_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_563dad1b1baf`.

### [ACCEPTED] `clm_0b13e026c1cc_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_02975a0b449a`, `fnd_1f6c031db559`.

### [ACCEPTED] `clm_0b13e026c1cc_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_8ecf8404907d`, `fnd_97551ca88ee7`.

### [ACCEPTED] `clm_0b13e026c1cc_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_47679fce4469`, `fnd_7b92716f3088`.

### [ACCEPTED] `clm_0b13e026c1cc_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_180eff9b662f`.

### [NEEDS-SCOPE-REPAIR] `clm_55a63071c9c1_ollama_intern_1`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_44bc157c2849`, `fnd_f3ccd05500e7`.

### [ACCEPTED] `clm_55a63071c9c1_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_466d07741fe6`.

### [ACCEPTED] `clm_55a63071c9c1_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_ccde5cd08a81`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_40d0c2b02b79`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_146d50da2d98`, `fnd_9addea97609e`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_d62dbb22db25`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_4edff6a3637a`, `fnd_ec34a7035ea3`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_e50018d4f099`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_2a749c040451`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_73266130b0d5`.

### [NEEDS-SCOPE-REPAIR] `clm_cfb7cbc09d44_ollama_intern_9`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_aa0de436f007`, `fnd_8371650d33ba`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_9c9982779ebb`.

### [ACCEPTED] `clm_cfb7cbc09d44_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_1cf4228a6daf`.

### [ACCEPTED] `clm_943086ae5d37_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_16d55ee65c38`, `fnd_965877a8172d`.

### [ACCEPTED] `clm_943086ae5d37_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_0adc400a1404`, `fnd_b5be927439cb`.

### [ACCEPTED] `clm_943086ae5d37_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_5658b7726a93`, `fnd_049ee818160f`.

### [ACCEPTED] `clm_943086ae5d37_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_5afca0353554`.

### [ACCEPTED] `clm_943086ae5d37_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_c83b59ecee8b`, `fnd_f44dda6697b7`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_1`

Findings: source_quality_problem (warn).

Cites findings: `fnd_a87f64e7dcea`, `fnd_76193981b386`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_3`

Findings: source_quality_problem (warn).

Cites findings: `fnd_644fddf4baa8`, `fnd_7e4f3768bcdf`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_4`

Findings: source_quality_problem (warn).

Cites findings: `fnd_3ad0723f3b29`, `fnd_1446d3784300`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_5`

Findings: source_quality_problem (warn).

Cites findings: `fnd_04882fc2b279`, `fnd_48ba25e34d34`, `fnd_f375a509e0a1`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e0ac1d000512`, `fnd_20b18aeac495`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_622ecf5a88e8`, `fnd_634225905488`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4936d24568a7`, `fnd_38e5d2e340bc`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_21`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ac350e8d250e`, `fnd_98edbd8cc4bb`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_24`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e99c10d76256`, `fnd_cdc8641798c2`.

### [NEEDS-SOURCE-REPAIR] `clm_c5ed9836ffb5_ollama_intern_25`

Findings: source_quality_problem (warn).

Cites findings: `fnd_364e677128c0`, `fnd_7f45374e1e79`.

### [ACCEPTED] `clm_c50580a705c4_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_feb69f903376`.

### [NEEDS-SCOPE-REPAIR] `clm_c50580a705c4_ollama_intern_8`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_b0f246a8a660`, `fnd_7f185c0a1b5b`.

### [NEEDS-SOURCE-REPAIR] `clm_c50580a705c4_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4def4c7aa427`, `fnd_1aaf88639f7a`, `fnd_88e1622b2178`.

### [ACCEPTED] `clm_c50580a705c4_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_7afdda832adf`.

### [ACCEPTED] `clm_c50580a705c4_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_414c7d2f0b10`.

### [NEEDS-SOURCE-REPAIR] `clm_c50580a705c4_ollama_intern_16`

Findings: scope_widening (warn); source_quality_problem (warn).

Cites findings: `fnd_4eeb3b051b6b`, `fnd_c8ce060b792e`, `fnd_95070570bb5e`.

### [NEEDS-SCOPE-REPAIR] `clm_c50580a705c4_ollama_intern_17`

Findings: scope_widening (warn).

Cites findings: `fnd_4eeb3b051b6b`, `fnd_49c9bcabd2d8`.

### [NEEDS-SOURCE-REPAIR] `clm_c50580a705c4_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_bceedafa4daf`, `fnd_5f3d8a90798c`.

### [NEEDS-SCOPE-REPAIR] `clm_c50580a705c4_ollama_intern_21`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_97665fb5c4d6`, `fnd_ab04f8874e53`.

### [NEEDS-SOURCE-REPAIR] `clm_8b484efdebe2_ollama_intern_7`

Findings: source_quality_problem (warn).

Cites findings: `fnd_eea619b1753f`, `fnd_2386652c5092`.

### [NEEDS-SOURCE-REPAIR] `clm_8b484efdebe2_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_98e0dfa2e814`, `fnd_2dea6936ca7f`, `fnd_6f5b68706a76`.

### [NEEDS-SCOPE-REPAIR] `clm_8b484efdebe2_ollama_intern_23`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_597cb764dc37`, `fnd_8bfe12aa1772`.

### [NEEDS-SOURCE-REPAIR] `clm_8b484efdebe2_ollama_intern_26`

Findings: scope_widening (warn); source_quality_problem (warn).

Cites findings: `fnd_0d19b640cb45`, `fnd_711a2849fa7e`.
