# Adversarial Review: 04-scripting-runtime-contracts

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-10T07:24:53.599Z
**Candidate claims:** 76
**Findings:** 116 (block: 1, warn: 34, info: 81)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 21
- [NEEDS-SCOPE-REPAIR]: 6
- [NEEDS-HUMAN-REVIEW]: 1
- [ACCEPTED]: 48

## Findings

### [INFO] valid_but_low_value (fnd_93c3d045e893)

Claim restates established context and definitional boilerplate.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_1`
- **Source IDs:** `src_33eded38b390`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [WARN] overgeneralized_claim (fnd_713260bf7aea)

The claim that GDScript has less performance than statically typed languages is overgeneralized and does not account for other factors beyond just static vs dynamic typing.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_5`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Specify which statically typed languages GDScript performs worse than, and what specific aspects of performance are being compared.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** - While the main disadvantages are:

### [WARN] overgeneralized_claim (fnd_ae2698b8bf1f)

The claim that 'Projects written in C# using Godot 4 currently cannot be exported to the web platform' overgeneralizes based on the given evidence, which only states that web export is not supported in Godot 4.2 and earlier versions.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_4`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Rephrase the claim to only cover the limitations mentioned in the evidence, such as 'Projects written in C# using Godot 4.2 and earlier versions cannot be exported to the web platform'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Projects written in C# using Godot 4 currently cannot be exported to the web platform. To use C# on the web platform, consider Godot 3 instead. Android and iOS platform support is available as of Godot 4.2

### [INFO] valid_but_low_value (fnd_188452030ca4)

The claim about 'A tasks.json file can be used to build a C# project in Visual Studio Code' is valid but low value, as it simply restates the provided example without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_6`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Here is an example ``tasks.json``: … { "version": "2.0.0", "tasks": [ { "label": "build", "command": "dotnet", "type": "process", "args": [ "build" ], "problemMatcher": "$msCompile" } ] }

### [WARN] recommendation_exceeds_evidence (fnd_793c9fee5508)

The claim that 'Installing Visual Studio with the correct workloads includes required SDKs for Godot C# scripting' recommends an action that exceeds the evidence, which only states that Visual Studio will include the required SDKs if you have the correct workloads selected.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_7`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Rephrase the claim to only state what the evidence supports, such as 'Installing Visual Studio with the correct workloads ensures that the required SDKs for Godot C# scripting are included'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Visual Studio will include the required SDKs if you have the correct workloads selected, so you don't need to manually install the things listed in the "Prerequisites" section.

### [INFO] valid_but_low_value (fnd_8e03ecd806de)

The claim about 'In Godot, C# scripts are called every frame with the '_Process' method' is valid but low value, as it simply restates the provided code snippet without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_10`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** public override void _Process(double delta) { // Called every frame. Delta is time since the last frame. // Update game logic here. }

### [WARN] overgeneralized_claim (fnd_3d9c87707ece)

The claim that 'In Godot, global functions like 'print' are available in the GD static class' overgeneralizes based on the given evidence, which only states that functions normally in global scope in GDScript are available in the GD static class.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_11`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Rephrase the claim to only cover what the evidence states, such as 'Functions normally in global scope in GDScript are available in the GD static class'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** As you can see, functions normally in global scope in GDScript like Godot's "print" function are available in the "GD" static class which is part of the "Godot" namespace.

### [INFO] valid_but_low_value (fnd_cd2a46c4ef58)

The claim about 'In Godot, the C# API uses PascalCase instead of snake_case' is valid but low value, as it simply restates the provided information without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_12`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The C# API uses "PascalCase" instead of "snake_case" in GDScript/C++.

### [INFO] valid_but_low_value (fnd_cfd206fa2562)

The claim about 'Position property requires native interop calls which can affect performance' is valid but low value, as it simply restates the provided information without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_14`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Most properties of Godot C# objects that are based on "GodotObject" (e.g. any "Node" like "Control" or "Node3D" like "Camera3D") require native (interop) calls as they talk to Godot's C++ core.

### [INFO] valid_but_low_value (fnd_c0fc76dadc76)

The claim about 'Assigning values of Position into a local variable can improve performance' is valid but low value, as it simply restates the provided information without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_15`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Most properties of Godot C# objects that are based on "GodotObject" (e.g. any "Node" like "Control" or "Node3D" like "Camera3D") require native (interop) calls as they talk to Godot's C++ core.

### [INFO] valid_but_low_value (fnd_c93cf98451ce)

The claim about 'Godot automatically downloads and sets up newly added NuGet packages' is valid but low value, as it simply restates the provided information without adding new synthesis.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_18`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Godot automatically downloads and sets up newly added NuGet packages the next time it builds the project.

### [WARN] overgeneralized_claim (fnd_fe602b81c082)

The claim that 'In C#, global enum constants were moved to their own enums' overgeneralizes based on the given evidence, which only states that global enum constants were moved to their own enums.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_5`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Rephrase the claim to only cover what the evidence states, such as 'In C#, global enum constants were moved to their own enums'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Global enum constants were moved to their own enums. For example, "ERR_*" constants were moved to the "Error" enum.

### [INFO] valid_but_low_value (fnd_7626d6196ea6)

Claim clm_e3948fcd1578_ollama_intern_13 restates the encoding difference between C# and Godot Strings, but does not add new synthesis value.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_13`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Note that C# strings use UTF-16 encoding, while Godot Strings use UTF-32 encoding.

### [WARN] definition_drift (fnd_06a1a9ff7a6c)

The term 'implicit cast' is used differently across claims, with one claim mentioning using 'implicit cast instead of an explicit cast' and another discussing 'implicit casts (e.g., `var point: Vector3 = intersection`)', citing conflicting behavior.

- **Claim IDs:** `clm_68be97293369_ollama_intern_30`
- **Source IDs:** `src_68be97293369`
- **Required action:** Clarify the usage of 'implicit cast' in both claims to ensure consistency and avoid confusion.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** It is possible to work around this newly occurring error by changing the line to an implicit cast instead of an explicit cast, like so:

```
 var point: Vector3 = intersection
```

This regression was apparently introduced by https://github.com/godotengine/godot/pull/84043, which closed https://github.com/godotengine/god

### [INFO] valid_but_low_value (fnd_f071742fbe42)

Claim clm_68be97293369_ollama_intern_32 restates the context of GDScript Godot 4 migration regarding casting and does not contribute to synthesis.

- **Claim IDs:** `clm_68be97293369_ollama_intern_32`
- **Source IDs:** `src_68be97293369`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** But until nullable types are a thing, I would rather still be able to write `variant_value as [Type]` to explicitly mark intentional casts...

### [WARN] overgeneralized_claim (fnd_8cc53409f8e9)

Claim clm_68be97293369_ollama_intern_39 asserts the current Godot game state saving process is error-prone, but the provided evidence only states it's a common pattern across projects.

- **Claim IDs:** `clm_68be97293369_ollama_intern_39`
- **Source IDs:** `src_68be97293369`
- **Required action:** Clarify the claim to specify the nature of errors or issues observed with the current saving process, based on direct analysis rather than generalization.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** I've seen this pattern repeated in almost every Godot project I've worked on or reviewed.

### [INFO] valid_but_low_value (fnd_ebe002ccb66f)

Claim clm_7f5634860b7d_ollama_intern_11 asserts the current Godot engine version does not support web export, which is a fact supported by the evidence excerpts.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_11`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** This makes it impossible to create web builds afaik. [... various screenshots showing no option for web export]

### [WARN] overgeneralized_claim (fnd_6757c5ffeee2)

Claim clm_7f5634860b7d_ollama_intern_12 generalizes that all Godot engine projects require the 'wasm-tools' workload for web export, but the evidence only applies to this specific pull request.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_12`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Refine the claim to specify it's the requirement for this particular PR rather than a general rule across all Godot projects.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** It needs the `wasm-tools` workload. [... details about how the workload is used]

### [WARN] definition_drift (fnd_373c5889558d)

The terms 'PoC' and 'proof of concept' are used differently across claims clm_7f5634860b7d_ollama_intern_23 and clm_7f5634860b7d_ollama_intern_25 - the former uses it to mean a technical demonstration, while the latter likely refers to an unresolved issue.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_23`, `clm_7f5634860b7d_ollama_intern_25`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Clarify whether the 'PoC' being discussed is a functional technical demo or an unfixed bug report, and reconcile this definition across related claims.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** clm_7f5634860b7d_ollama_intern_23 asserts 'The PoC works best...' implying a functional demo, vs clm_7f5634860b7d_ollama_intern_25 states 'Download the editor and export templates from the [artifacts] in Actions.[^1]2.' which seems to refer to an issue rather than a working prototype.

### [INFO] claim_overproduction (fnd_364245f4993b)

Claims clm_7f5634860b7d_ollama_intern_23, clm_7f5634860b7d_ollama_intern_25, clm_7f5634860b7d_ollama_intern_30 and clm_7f5634860b7d_ollama_intern_31 are all closely related, detailing specific features of the .NET platform PR. Collectively they provide a lot of low-level detail but may not add much new synthesis value.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_23`, `clm_7f5634860b7d_ollama_intern_25`, `clm_7f5634860b7d_ollama_intern_30`, `clm_7f5634860b7d_ollama_intern_31`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Each claim discusses different aspects of how the .NET platform PR changes Godot's behavior and layout

### [WARN] overgeneralized_claim (fnd_f1a3d7c938dd)

The claim that porting a game to the Web platform may require interchanging assets is too broad and does not account for specific scenarios where no asset swapping is needed.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_46`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Clarify or narrow down the claim to only apply to scenarios where the Resource Remaps addon or similar tools are used.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source specifically mentions the Resource Remaps addon, which implies that in some cases, asset swapping is required, but does not generalize this to all games being ported to the Web.

### [WARN] definition_drift (fnd_05e0db6e67fb)

The claims about 'is_same()' and 'posmod()'/'fposmod()' functions use different terms to refer to the same functionality.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_22`, `clm_169fec56d321_ollama_intern_20`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Clarify the terms used in the claims to ensure consistency with their intended use cases.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The claim about 'is_same()' implies it is used for comparing values of different types, while the other claim suggests 'posmod()' and 'fposmod()' are used for mathematical remainder.

### [INFO] valid_but_low_value (fnd_8b2cf6e8a220)

The claim about GDScript supporting code regions using '#region' and '#endregion' provides grounded information but is not synthesis-worthy.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_33`
- **Source IDs:** `src_169fec56d321`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** This claim simply restates the syntax for defining code regions in GDScript.

### [WARN] scope_widening (fnd_e3f9c37a3960)

The claim that global functions like 'print' are available in the GD static class generalizes to all of Godot's C# scripting environment, but the evidence only provides a partial list and references the reader to other documentation for a full list.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_11`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Narrow the claim to focus on the specific example given in the evidence, or provide additional evidence supporting the broader generalization.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** As you can see, functions normally in global scope in GDScript like Godot's
``print`` function are available in the ``GD`` static class which is part of
the ``Godot`` namespace. For a full list of methods in the ``GD`` class, see the
class reference pages for :ref:`@GDScript <class_@gdscript>` and :ref:`@GlobalScope <class_@globalscope>`.

### [BLOCK] scope_widening (fnd_dd1b470768c1)

The claim about mixing GDScript and C# scripting languages in a single Godot project uses universal quantifiers but the provided scope is very narrow, discussing only possible interactions between two nodes.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_1`, `clm_d5da902c1965_ollama_intern_2`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Narrow the claim to focus only on instantiating C# nodes from GDScript, as the scope suggests.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Godot allows you to mix and match scripting languages to suit your needs. This means a single project can define nodes in both C# and GDScript.

### [WARN] scope_widening (fnd_c175b71fb1a7)

The asserts about a 'done_playing' signal being suggested by the user who reported issue #4 generalizes the suggestion to all audio sync issues.

- **Claim IDs:** `clm_68be97293369_ollama_intern_3`
- **Source IDs:** `src_68be97293369`
- **Required action:** Narrow the claims to only cover the specific suggestion made for issue #4, rather than applying it generally to all audio sync issues.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Also it would be cool if it could emit a "done_playing" signal.

### [INFO] missing_not_constraint (fnd_fc0519f9a59e)

Claim clm_04c541af2502_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_2`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exported class members are available for editing in the property editor.

### [INFO] missing_not_constraint (fnd_a923b15c9488)

Claim clm_04c541af2502_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_3`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exporting is done by using the '@export' annotation in GDScript.

### [INFO] missing_not_constraint (fnd_dfd316a3de40)

Claim clm_04c541af2502_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_6`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: @export_custom can be used to define input actions in GDScript.

### [INFO] missing_not_constraint (fnd_273aaaeb570a)

Claim clm_04c541af2502_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_7`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: @export_range can be used to limit editor input ranges in GDScript.

### [INFO] missing_not_constraint (fnd_fde145f6f438)

Claim clm_04c541af2502_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_12`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows exporting color properties without alpha as red-green-blue values.

### [INFO] missing_not_constraint (fnd_32833556ead5)

Claim clm_04c541af2502_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_13`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Nodes can be directly exported as properties in a GDScript script.

### [INFO] missing_not_constraint (fnd_a9395f871e9e)

Claim clm_04c541af2502_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_21`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can add explicit values using a colon in the @export_enum annotation.

### [INFO] missing_not_constraint (fnd_e5881ed40e65)

Claim clm_04c541af2502_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_22`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exported arrays can have initializers, but they must be constant expressions.

### [INFO] missing_not_constraint (fnd_c4bb6ca9c68f)

Claim clm_04c541af2502_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_04c541af2502_ollama_intern_23`
- **Source IDs:** `src_04c541af2502`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exported arrays can specify type using the same hints as before.

### [INFO] missing_not_constraint (fnd_2c8d59a8a5bb)

Claim clm_33eded38b390_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_1`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript allows games to be created quickly and efficiently.

### [INFO] missing_not_constraint (fnd_c15b8c17af76)

Claim clm_33eded38b390_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_2`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript is easy to get started with and has a small runtime size.

### [INFO] missing_not_constraint (fnd_5bb101e4b21d)

Claim clm_33eded38b390_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_5`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript has less performance than statically typed languages.

### [INFO] missing_not_constraint (fnd_db1f5bf33a5b)

Claim clm_33eded38b390_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_6`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript allows most code to be written and changed quickly.

### [INFO] missing_not_constraint (fnd_93dec3d0f873)

Claim clm_33eded38b390_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_13`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript uses for-in loops over iterables instead of traditional for loops.

### [INFO] missing_not_constraint (fnd_501d64d2ed9e)

Claim clm_33eded38b390_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_15`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The range() function in GDScript can take three arguments for custom iteration.

### [INFO] missing_not_constraint (fnd_66f7c45e3dab)

Claim clm_33eded38b390_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_16`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript supports custom iterators through overriding specific functions.

### [INFO] missing_not_constraint (fnd_60bf7effcb36)

Claim clm_33eded38b390_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_17`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Duck typing is a key concept in GDScript, making code design simpler.

### [INFO] missing_not_constraint (fnd_35ce0057afdb)

Claim clm_33eded38b390_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_18`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript allows games to be created quickly due to its dynamically typed nature.

### [INFO] missing_not_constraint (fnd_b2bf2eb8fc77)

Claim clm_33eded38b390_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_33eded38b390_ollama_intern_19`
- **Source IDs:** `src_33eded38b390`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In GDScript, duck typing is used to identify objects based on their methods.

### [INFO] missing_not_constraint (fnd_e589576e260b)

Claim clm_a9fd72b46944_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_3`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot does not bundle tools required to build and compile games written in C#.

### [INFO] missing_not_constraint (fnd_e0ed2780bfdd)

Claim clm_a9fd72b46944_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_4`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Using Godot 4, projects written in C# cannot be exported to the web platform.

### [INFO] missing_not_constraint (fnd_638e9668c0b1)

Claim clm_a9fd72b46944_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_6`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A tasks.json file can be used to build a C# project in Visual Studio Code.

### [INFO] missing_not_constraint (fnd_f2574393b290)

Claim clm_a9fd72b46944_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_10`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In Godot, C# scripts are called every frame with the '_Process' method.

### [INFO] missing_not_constraint (fnd_ac9f8848a56f)

Claim clm_a9fd72b46944_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_11`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In Godot, global functions like 'print' are available in the GD static class.

### [INFO] missing_not_constraint (fnd_18b4e1e2c422)

Claim clm_a9fd72b46944_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_12`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In Godot, the C# API uses PascalCase instead of snake_case.

### [INFO] missing_not_constraint (fnd_ac0b1fd68f90)

Claim clm_a9fd72b46944_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_14`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Position property requires native interop calls which can affect performance.

### [INFO] missing_not_constraint (fnd_b3f460ce3691)

Claim clm_a9fd72b46944_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_15`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Assigning values of Position into a local variable can improve performance.

### [INFO] missing_not_constraint (fnd_bac5b87b385a)

Claim clm_a9fd72b46944_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_a9fd72b46944_ollama_intern_18`
- **Source IDs:** `src_a9fd72b46944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot automatically downloads and sets up newly added NuGet packages.

### [INFO] missing_not_constraint (fnd_a4e956f5c89c)

Claim clm_e3948fcd1578_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_5`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In C#, global enum constants were moved to their own enums.

### [INFO] missing_not_constraint (fnd_7846537d995b)

Claim clm_e3948fcd1578_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_13`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: C# strings use UTF-16 encoding, while Godot Strings use UTF-32 encoding.

### [INFO] missing_not_constraint (fnd_e68f2032e508)

Claim clm_e3948fcd1578_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_23`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In C#, methods like get_rotation() were converted to properties named Rotation.

### [INFO] missing_not_constraint (fnd_4d4bfa090f6b)

Claim clm_e3948fcd1578_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_25`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In C#, methods like get_area() were converted to properties named Area.

### [INFO] missing_not_constraint (fnd_103e476f87d8)

Claim clm_e3948fcd1578_ollama_intern_32 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e3948fcd1578_ollama_intern_32`
- **Source IDs:** `src_e3948fcd1578`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Packed arrays are represented as System.Array in Godot's C# API.

### [INFO] missing_not_constraint (fnd_3369ba585979)

Claim clm_d5da902c1965_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_1`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows mixing GDScript and C# scripting languages in a single project.

### [INFO] missing_not_constraint (fnd_5ad24424fa28)

Claim clm_d5da902c1965_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_2`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A single Godot project can define nodes in both C# and GDScript.

### [INFO] missing_not_constraint (fnd_e6c66a3bfba4)

Claim clm_d5da902c1965_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_3`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows instantiating C# nodes from GDScript using `new()`.

### [INFO] missing_not_constraint (fnd_1f8d80f9bc48)

Claim clm_d5da902c1965_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_4`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows accessing C# fields from GDScript.

### [INFO] missing_not_constraint (fnd_962d76bdecd7)

Claim clm_d5da902c1965_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_5`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Accessing C# fields from GDScript is straightforward.

### [INFO] missing_not_constraint (fnd_b628f1160c2c)

Claim clm_d5da902c1965_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_8`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: C# methods can be called from GDScript with automatic type casting.

### [INFO] missing_not_constraint (fnd_524ad3f0af70)

Claim clm_d5da902c1965_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d5da902c1965_ollama_intern_9`
- **Source IDs:** `src_d5da902c1965`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript methods can be called from C# using GodotObject.Call().

### [INFO] missing_not_constraint (fnd_e8360ed8523f)

Claim clm_68be97293369_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_3`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The user who reported issue #4 also suggests adding a 'done_playing' signal.

### [WARN] source_quality_problem (fnd_076a6e9b230a)

Claim clm_68be97293369_ollama_intern_3 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_3`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_eeb7ff927d28)

Claim clm_68be97293369_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_6`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot engine currently scans only the main project assembly for scripts.

### [WARN] source_quality_problem (fnd_c445b3a78d0c)

Claim clm_68be97293369_ollama_intern_6 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_6`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_09d9ef007a9c)

Claim clm_68be97293369_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_9`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The PoC uses directory scanning to discover scripts in referenced assemblies.

### [WARN] source_quality_problem (fnd_658b70261c0b)

Claim clm_68be97293369_ollama_intern_9 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_9`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_c4d8b84ac714)

Claim clm_68be97293369_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_10`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The PoC uses a synthetic `csharp://` path scheme for out-of-tree scripts.

### [WARN] source_quality_problem (fnd_d2b5f84f2e77)

Claim clm_68be97293369_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_10`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_0db979dffc78)

Claim clm_68be97293369_ollama_intern_24 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_24`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_d01ae338a6c2)

Claim clm_68be97293369_ollama_intern_25 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_25`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_31d5da8fb382)

Claim clm_68be97293369_ollama_intern_28 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_28`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's bitflags evaluation on Windows differs from other platforms.

### [WARN] source_quality_problem (fnd_ac03c5839c65)

Claim clm_68be97293369_ollama_intern_28 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_28`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e44866470f0b)

Claim clm_68be97293369_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_30`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Implicit casts can work around explicit cast errors in Godot 4.

### [WARN] source_quality_problem (fnd_493a04d87f39)

Claim clm_68be97293369_ollama_intern_30 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_30`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_239ccc7e2bdc)

Claim clm_68be97293369_ollama_intern_39 has no 'not' constraint recorded.

- **Claim IDs:** `clm_68be97293369_ollama_intern_39`
- **Source IDs:** `src_68be97293369`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's current saving game state process is tedious and error-prone.

### [WARN] source_quality_problem (fnd_3fa2e5dbd01f)

Claim clm_68be97293369_ollama_intern_39 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_68be97293369_ollama_intern_39`
- **Source IDs:** `src_68be97293369`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_b065ca73b5b6)

Claim clm_7f5634860b7d_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_1`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: .NET platform will support web export using static LibGodot library.

### [WARN] source_quality_problem (fnd_37eed7a3fc17)

Claim clm_7f5634860b7d_ollama_intern_1 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_1`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_1cb197e57b3c)

Claim clm_7f5634860b7d_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_2`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: LibGodot setup uses a simple interface written in C# instead of the module mono.

### [WARN] source_quality_problem (fnd_cdfc426ce8c8)

Claim clm_7f5634860b7d_ollama_intern_2 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_2`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_60215ab67d52)

Claim clm_7f5634860b7d_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_3`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Mono initialization is handled by exporting a function when LibGodot is enabled.

### [WARN] source_quality_problem (fnd_a9bec26b72b9)

Claim clm_7f5634860b7d_ollama_intern_3 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_3`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_53829a3a1de0)

Claim clm_7f5634860b7d_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_11`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The current version of Godot engine does not support web export.

### [WARN] source_quality_problem (fnd_9f7d60b17ddd)

Claim clm_7f5634860b7d_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_11`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_f893bc920702)

Claim clm_7f5634860b7d_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_12`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To create web export, the 'wasm-tools' workload is required.

### [WARN] source_quality_problem (fnd_d03dd52062f5)

Claim clm_7f5634860b7d_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_12`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ede13eee4d2a)

Claim clm_7f5634860b7d_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_23`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The PoC works best when `project.godot` is placed at the solution root.

### [WARN] source_quality_problem (fnd_7d83a019703e)

Claim clm_7f5634860b7d_ollama_intern_23 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_23`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_a01c9d06aca1)

Claim clm_7f5634860b7d_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_25`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This PR closes https://github.com/godotengine/godot/issues/109834.

### [WARN] source_quality_problem (fnd_6cccb42f53d4)

Claim clm_7f5634860b7d_ollama_intern_25 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_25`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_f170d53a65bc)

Claim clm_7f5634860b7d_ollama_intern_31 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_31`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_d9ce7c5b954c)

Claim clm_7f5634860b7d_ollama_intern_46 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_46`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Porting an existing game to the Web platform may require interchanging assets.

### [WARN] source_quality_problem (fnd_46d05f1a13f1)

Claim clm_7f5634860b7d_ollama_intern_46 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7f5634860b7d_ollama_intern_46`
- **Source IDs:** `src_7f5634860b7d`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_683575de00f6)

Claim clm_ad0801f16070_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_4`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: By default, the PR initiates `scons` to compile the extension.

### [WARN] source_quality_problem (fnd_3207e9ec062e)

Claim clm_ad0801f16070_ollama_intern_4 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_4`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_60a55f85c4ed)

Claim clm_ad0801f16070_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_10`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDExtensions can now dynamically fallback to other configurations.

### [INFO] missing_not_constraint (fnd_4c588d40be61)

Claim clm_ad0801f16070_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_24`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The GodotInstance class is made accessible over the GDExtension API.

### [WARN] source_quality_problem (fnd_5db28c7a9724)

Claim clm_ad0801f16070_ollama_intern_29 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_29`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_58b15db4023e)

Claim clm_ad0801f16070_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_30`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Merging the change is a prerequisite for improving compatibility.

### [WARN] source_quality_problem (fnd_10ff61e7c7e9)

Claim clm_ad0801f16070_ollama_intern_30 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ad0801f16070_ollama_intern_30`
- **Source IDs:** `src_ad0801f16070`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_5594b0a2ea55)

Claim clm_169fec56d321_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_13`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript uses the keyword 'await' for waiting on signals or coroutines.

### [INFO] missing_not_constraint (fnd_2b46cb119333)

Claim clm_169fec56d321_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_15`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: 'void' is used in GDScript to represent functions that do not return any value.

### [INFO] missing_not_constraint (fnd_26f9aa782194)

Claim clm_169fec56d321_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_16`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In GDScript, the '+' operator is used for both addition and concatenation.

### [INFO] missing_not_constraint (fnd_01f2002380bd)

Claim clm_169fec56d321_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_18`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The '%%' operator is available only for integers, use fmod() for floats.

### [INFO] missing_not_constraint (fnd_c9fa06ef288f)

Claim clm_169fec56d321_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_20`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: posmod() and fposmod() functions should be used for mathematical remainder.

### [INFO] missing_not_constraint (fnd_9fdbef3767e8)

Claim clm_169fec56d321_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_22`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: is_same() function is safer for comparing values of different types.

### [INFO] missing_not_constraint (fnd_efbc65545d99)

Claim clm_169fec56d321_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_33`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript supports code regions using '#region' and '#endregion'.

### [INFO] missing_not_constraint (fnd_2f2b8cd1373b)

Claim clm_169fec56d321_ollama_intern_105 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_105`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: GDScript classes have an implicit constructor that is always called.

### [INFO] missing_not_constraint (fnd_764cfb531318)

Claim clm_169fec56d321_ollama_intern_109 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_109`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A class file's main constructor is denoted by the '_init' function.

### [INFO] missing_not_constraint (fnd_4ceb089af1f2)

Claim clm_169fec56d321_ollama_intern_115 has no 'not' constraint recorded.

- **Claim IDs:** `clm_169fec56d321_ollama_intern_115`
- **Source IDs:** `src_169fec56d321`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: `free()` and `queue_free()` delete a Node and all of its children recursively.

## Claim review decisions

### [ACCEPTED] `clm_04c541af2502_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_fc0519f9a59e`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_a923b15c9488`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_dfd316a3de40`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_273aaaeb570a`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_fde145f6f438`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_32833556ead5`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_a9395f871e9e`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_e5881ed40e65`.

### [ACCEPTED] `clm_04c541af2502_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_c4bb6ca9c68f`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_93c3d045e893`, `fnd_2c8d59a8a5bb`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_c15b8c17af76`.

### [NEEDS-SCOPE-REPAIR] `clm_33eded38b390_ollama_intern_5`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_713260bf7aea`, `fnd_5bb101e4b21d`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_db1f5bf33a5b`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_93dec3d0f873`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_501d64d2ed9e`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_66f7c45e3dab`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_60bf7effcb36`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_35ce0057afdb`.

### [ACCEPTED] `clm_33eded38b390_ollama_intern_19`

Only info-level findings; accepted.

Cites findings: `fnd_b2bf2eb8fc77`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_e589576e260b`.

### [NEEDS-SCOPE-REPAIR] `clm_a9fd72b46944_ollama_intern_4`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_ae2698b8bf1f`, `fnd_e0ed2780bfdd`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_188452030ca4`, `fnd_638e9668c0b1`.

### [NEEDS-HUMAN-REVIEW] `clm_a9fd72b46944_ollama_intern_7`

Findings: recommendation_exceeds_evidence (warn).

Cites findings: `fnd_793c9fee5508`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_8e03ecd806de`, `fnd_f2574393b290`.

### [NEEDS-SCOPE-REPAIR] `clm_a9fd72b46944_ollama_intern_11`

Findings: overgeneralized_claim (warn); scope_widening (warn).

Cites findings: `fnd_3d9c87707ece`, `fnd_e3f9c37a3960`, `fnd_ac9f8848a56f`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_cd2a46c4ef58`, `fnd_18b4e1e2c422`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_cfd206fa2562`, `fnd_ac0b1fd68f90`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_c0fc76dadc76`, `fnd_b3f460ce3691`.

### [ACCEPTED] `clm_a9fd72b46944_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_c93cf98451ce`, `fnd_bac5b87b385a`.

### [NEEDS-SCOPE-REPAIR] `clm_e3948fcd1578_ollama_intern_5`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_fe602b81c082`, `fnd_a4e956f5c89c`.

### [ACCEPTED] `clm_e3948fcd1578_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_7626d6196ea6`, `fnd_7846537d995b`.

### [ACCEPTED] `clm_e3948fcd1578_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_e68f2032e508`.

### [ACCEPTED] `clm_e3948fcd1578_ollama_intern_25`

Only info-level findings; accepted.

Cites findings: `fnd_4d4bfa090f6b`.

### [ACCEPTED] `clm_e3948fcd1578_ollama_intern_32`

Only info-level findings; accepted.

Cites findings: `fnd_103e476f87d8`.

### [NEEDS-SCOPE-REPAIR] `clm_d5da902c1965_ollama_intern_1`

Findings: scope_widening (block).

Cites findings: `fnd_dd1b470768c1`, `fnd_3369ba585979`.

### [NEEDS-SCOPE-REPAIR] `clm_d5da902c1965_ollama_intern_2`

Findings: scope_widening (block).

Cites findings: `fnd_dd1b470768c1`, `fnd_5ad24424fa28`.

### [ACCEPTED] `clm_d5da902c1965_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_e6c66a3bfba4`.

### [ACCEPTED] `clm_d5da902c1965_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_1f8d80f9bc48`.

### [ACCEPTED] `clm_d5da902c1965_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_962d76bdecd7`.

### [ACCEPTED] `clm_d5da902c1965_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_b628f1160c2c`.

### [ACCEPTED] `clm_d5da902c1965_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_524ad3f0af70`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_3`

Findings: scope_widening (warn); source_quality_problem (warn).

Cites findings: `fnd_c175b71fb1a7`, `fnd_e8360ed8523f`, `fnd_076a6e9b230a`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_6`

Findings: source_quality_problem (warn).

Cites findings: `fnd_eeb7ff927d28`, `fnd_c445b3a78d0c`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_9`

Findings: source_quality_problem (warn).

Cites findings: `fnd_09d9ef007a9c`, `fnd_658b70261c0b`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c4d8b84ac714`, `fnd_d2b5f84f2e77`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_24`

Findings: source_quality_problem (warn).

Cites findings: `fnd_0db979dffc78`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_25`

Findings: source_quality_problem (warn).

Cites findings: `fnd_d01ae338a6c2`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_28`

Findings: source_quality_problem (warn).

Cites findings: `fnd_31d5da8fb382`, `fnd_ac03c5839c65`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_30`

Findings: definition_drift (warn); source_quality_problem (warn).

Cites findings: `fnd_06a1a9ff7a6c`, `fnd_e44866470f0b`, `fnd_493a04d87f39`.

### [ACCEPTED] `clm_68be97293369_ollama_intern_32`

Only info-level findings; accepted.

Cites findings: `fnd_f071742fbe42`.

### [NEEDS-SOURCE-REPAIR] `clm_68be97293369_ollama_intern_39`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_8cc53409f8e9`, `fnd_239ccc7e2bdc`, `fnd_3fa2e5dbd01f`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_1`

Findings: source_quality_problem (warn).

Cites findings: `fnd_b065ca73b5b6`, `fnd_37eed7a3fc17`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_2`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1cb197e57b3c`, `fnd_cdfc426ce8c8`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_3`

Findings: source_quality_problem (warn).

Cites findings: `fnd_60215ab67d52`, `fnd_a9bec26b72b9`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ebe002ccb66f`, `fnd_53829a3a1de0`, `fnd_9f7d60b17ddd`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_12`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_6757c5ffeee2`, `fnd_f893bc920702`, `fnd_d03dd52062f5`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_23`

Findings: definition_drift (warn); source_quality_problem (warn).

Cites findings: `fnd_373c5889558d`, `fnd_364245f4993b`, `fnd_ede13eee4d2a`, `fnd_7d83a019703e`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_25`

Findings: definition_drift (warn); source_quality_problem (warn).

Cites findings: `fnd_373c5889558d`, `fnd_364245f4993b`, `fnd_a01c9d06aca1`, `fnd_6cccb42f53d4`.

### [ACCEPTED] `clm_7f5634860b7d_ollama_intern_30`

Only info-level findings; accepted.

Cites findings: `fnd_364245f4993b`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_31`

Findings: source_quality_problem (warn).

Cites findings: `fnd_364245f4993b`, `fnd_f170d53a65bc`.

### [NEEDS-SOURCE-REPAIR] `clm_7f5634860b7d_ollama_intern_46`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_f1a3d7c938dd`, `fnd_d9ce7c5b954c`, `fnd_46d05f1a13f1`.

### [NEEDS-SOURCE-REPAIR] `clm_ad0801f16070_ollama_intern_4`

Findings: source_quality_problem (warn).

Cites findings: `fnd_683575de00f6`, `fnd_3207e9ec062e`.

### [ACCEPTED] `clm_ad0801f16070_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_60a55f85c4ed`.

### [ACCEPTED] `clm_ad0801f16070_ollama_intern_24`

Only info-level findings; accepted.

Cites findings: `fnd_4c588d40be61`.

### [NEEDS-SOURCE-REPAIR] `clm_ad0801f16070_ollama_intern_29`

Findings: source_quality_problem (warn).

Cites findings: `fnd_5db28c7a9724`.

### [NEEDS-SOURCE-REPAIR] `clm_ad0801f16070_ollama_intern_30`

Findings: source_quality_problem (warn).

Cites findings: `fnd_58b15db4023e`, `fnd_10ff61e7c7e9`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_5594b0a2ea55`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_2b46cb119333`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_26f9aa782194`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_01f2002380bd`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_20`

Findings: definition_drift (warn).

Cites findings: `fnd_05e0db6e67fb`, `fnd_c9fa06ef288f`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_22`

Findings: definition_drift (warn).

Cites findings: `fnd_05e0db6e67fb`, `fnd_9fdbef3767e8`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_33`

Only info-level findings; accepted.

Cites findings: `fnd_8b2cf6e8a220`, `fnd_efbc65545d99`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_105`

Only info-level findings; accepted.

Cites findings: `fnd_2f2b8cd1373b`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_109`

Only info-level findings; accepted.

Cites findings: `fnd_764cfb531318`.

### [ACCEPTED] `clm_169fec56d321_ollama_intern_115`

Only info-level findings; accepted.

Cites findings: `fnd_4ceb089af1f2`.
