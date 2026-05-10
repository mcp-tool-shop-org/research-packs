# Adversarial Review: 05-desktop-platform-export-durability

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-10T05:20:09.388Z
**Candidate claims:** 56
**Findings:** 110 (block: 2, warn: 43, info: 65)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [REJECTED]: 2
- [NEEDS-SOURCE-REPAIR]: 26
- [NEEDS-SCOPE-REPAIR]: 8
- [NEEDS-HUMAN-REVIEW]: 1
- [ACCEPTED]: 19

## Findings

### [INFO] valid_but_low_value (fnd_f4cb60070eb3)

Claim clm_1ceb96fdb33a_ollama_intern_7 restates basic context about Godot's platform support.

- **Claim IDs:** `clm_1ceb96fdb33a_ollama_intern_7`
- **Source IDs:** `src_1ceb96fdb33a`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [WARN] overgeneralized_claim (fnd_bc0a66095a45)

Claim clm_5b703b620109_ollama_intern_1 overgeneralizes about default macOS app execution policy.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_1`
- **Source IDs:** `src_5b703b620109`, `src_03cb99fe6df9`
- **Required action:** Clarify claim only applies to user-approval, not kernel-level restrictions like sandboxing.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium

### [INFO] valid_but_low_value (fnd_4b2cd1a6a751)

Claim clm_7d0fca124716_ollama_intern_1 restates basic context about Godot's platform support.

- **Claim IDs:** `clm_7d0fca124716_ollama_intern_1`
- **Source IDs:** `src_7d0fca124716`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [WARN] overgeneralized_claim (fnd_92bb66d4fd4e)

The claim that macOS apps should avoid relying on relative paths from the application folder is too broad and does not account for specific use cases where relative paths may be appropriate.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_3`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Clarify or narrow the scope of the claim to only apply in situations where using relative paths would be problematic.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** In general, macOS apps should avoid relying on relative paths from the application folder.

### [INFO] valid_but_low_value (fnd_cad94ed67123)

The claim that building an app using custom export templates and OSXCross does not sign it is a grounded fact but may not be synthesis-worthy as it details a specific technical process.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_8`
- **Source IDs:** `src_5b703b620109`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** App is built using custom export templates, compiled using OSXCross, and it is not signed at all.

### [INFO] valid_but_low_value (fnd_f911f5db380c)

The claim that ad-hoc signing the app yourself enables it to run on macOS is a grounded fact but may not be synthesis-worthy as it details a specific technical process.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_10`
- **Source IDs:** `src_5b703b620109`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** To run this app, you can ad-hoc sign it yourself:

### [WARN] recommendation_exceeds_evidence (fnd_70104d029051)

The claim that notarization usually takes less than an hour implies a quick process, but the source only states 'which usually takes less than an hour', allowing for variability beyond what is explicitly supported.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_15`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** Specify a more concrete timeframe or caveat about variability if applicable.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When you click Next, Xcode uploads your archive to the notary service. When the upload is complete, the notary service begins the scanning process, which usually takes less than an hour.

### [WARN] overgeneralized_claim (fnd_51e22c46b180)

The claim that Apple provides documentation on how to customize the notarization workflow is too broad. It should be clarified if it applies only to certain aspects or for specific user roles.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_18`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** Specify which aspects of customization are documented.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** For information about how to incorporate notarization into your custom build scripts, see [Customizing the notarization workflow](/documentation/Security/customizing-the-notarization-workflow).

### [INFO] valid_but_low_value (fnd_dcabae38c172)

The claim that Apple offers guidance on resolving common notarization issues is a grounded fact but may not be synthesis-worthy as it details a specific resource.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_19`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** [Resolving common notarization issues](/documentation/Security/resolving-common-notarization-issues)

### [WARN] overgeneralized_claim (fnd_72e0d62c00c0)

The claim that SignTool is available in the Bin folder of Windows SDK installation path is too broad and does not account for different versions or configurations.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_2`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Specify which specific version and location SignTool is available in.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** SignTool is available as part of the [Windows Software Development Kit (SDK)](https://developer.microsoft.com/windows/downloads/windows-sdk). The tool is installed in the `in` folder of the Windows SDK installation path, for example: `C:\Program Files (x86)\Windows Kits\10\bin\10.0.22621.0\x64\signtool.exe`.

### [WARN] overgeneralized_claim (fnd_27f39bbfa84f)

The claim that catalog databases are used for automatic lookup of catalog files overgeneralizes the use case and does not specify who or what uses them.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_10`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Clarify who or what utilizes catalog databases for this purpose.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** [!NOTE] Catalog databases are used for automatic lookup of catalog files.

### [WARN] overgeneralized_claim (fnd_f6c751251b72)

The claim that SignTool generates an error if the /fd option isn't specified while signing overgeneralizes and does not account for exceptions or alternative scenarios.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_11`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Specify any exceptions or when this is generally applicable.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** /fd *alg* | Specifies the file digest algorithm to use for creating file signatures. **Note**: If the /fd option isn't specified while signing, the command generates an error.

### [WARN] overgeneralized_claim (fnd_31235b38b812)

The claim that the /i option specifies the issuer's name of the signing certificate overgeneralizes and does not account for when this may be unnecessary or automatically determined.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_13`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Clarify under which circumstances using /i is necessary or useful.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** /i *IssuerName* | Specifies the name of the issuer of the signing certificate. … This value can be a substring of the entire issuer name.

### [WARN] overgeneralized_claim (fnd_ce8e8fef0c86)

The claim that 'SignTool can add a catalog file to the system component and driver database' overgeneralizes the scope of SignTool.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_26`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Clarify the specific operation and limitations of adding catalog files with SignTool.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** /u option generates a unique name if necessary to prevent replacing an existing catalog file named *MyCatalogFileName.cat*...

### [INFO] valid_but_low_value (fnd_3012d1cb6c50)

The claim about Godot's visionOS VR plugin supporting Immersive experiences is valid but low value, as it does not contribute to the overall synthesis.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_12`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Introduce Vision Pro VR plugin for Immersive support...

### [WARN] overgeneralized_claim (fnd_816fc88a232f)

The claim that Godot's visionOS platform supports the Platformer demo project overgeneralizes based on limited evidence.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_13`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Clarify scope of demo project compatibility with visionOS
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source states 'We have verified the project continues to work on iOS, and it now runs natively on visionOS.' This does not confirm full support for the demo across all features/platforms as implied by the claim.

### [INFO] definition_drift (fnd_e338646ccead)

The claim that Godot's iOS and visionOS export plugins share the majority of their code conflicts with a later claim that macOS notarization is not supported in Godot 3.2.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_15`, `clm_e6e0e4cb4ec7_ollama_intern_24`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Investigate version differences between iOS/visionOS export plugins
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The first claim states 'It's easier to review commit by commit, to see how the changes were incrementally implemented.

### Documentation Considerations

Now, the export plugin for `iOS` and `visionOS` share the majority of the code...' The later claim states 'macOS notarization is not supported in Godot 3.2 when exporting from Windows.' This implies a difference between versions.

### [BLOCK] recommendation_exceeds_evidence (fnd_9c8073c6f3a3)

The claim that macOS notarization is not supported in Godot 3.2 when exporting from Windows implies unsupported actions based on limited evidence.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_24`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Do not advise unsupported actions based on limited testing
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The source states 'Likewise, we have not tested deploying directly to an iOS device using ios_deploy (used with Xcode versions prior to 14.0).' This does not confirm lack of macOS notarization support as claimed.

### [INFO] valid_but_low_value (fnd_114e82feba63)

The claim about renaming the 'Windows Universal' export option to 'UWP' is grounded but provides low-leverage synthesis.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_23`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Focus review on high-value synthesis candidates
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** This individual technical detail does not advance broader understanding or guide action beyond its stated scope.

### [INFO] valid_but_low_value (fnd_597ab3956e24)

The claim about the lack of macOS notarization support in Godot 4.2 stable when exporting from Windows is grounded but provides low-leverage synthesis.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_27`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Focus review on high-value synthesis candidates
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** This individual technical detail does not advance broader understanding or guide action beyond its stated scope.

### [INFO] valid_but_low_value (fnd_001646ebfa7a)

The claim about the lack of macOS notarization support in Godot 3.2 when exporting from Windows is grounded but provides low-leverage synthesis.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_24`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Focus review on high-value synthesis candidates
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** This individual technical detail does not advance broader understanding or guide action beyond its stated scope.

### [WARN] overgeneralized_claim (fnd_3d2ab5c0e1cd)

The claim that Godot Engine currently supports exporting to OpenHarmony overgeneralizes based on limited evidence.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_1`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Clarify scope of export compatibility with OpenHarmony
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source cites a pull request titled 'Port to OpenHarmony' which does not confirm full export support as implied by the claim.

### [BLOCK] recommendation_exceeds_evidence (fnd_a1982332ca89)

The claim that Godot Engine does not pick up the main.gd.remap file when exporting to UWP implies unsupported actions based on limited evidence.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_5`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Do not advise unsupported actions based on limited testing
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Citing 'Install and run' suggests advising users to take unsupported steps.

### [WARN] recommendation_exceeds_evidence (fnd_99af0dc61564)

The claim that signtool cannot sign the file when exporting to UWP exceeds the evidence provided, which only shows an error message but does not confirm that signtool is specifically unable to sign the file.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_11`, `clm_da88881cf961_ollama_intern_12`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Clarify whether the issue with signtool is confirmed or if it is a different tool or process causing the failure to sign.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source excerpt shows an error message indicating the file format cannot be signed. However, it does not definitively state that signtool itself is incapable of signing the file.

### [INFO] valid_but_low_value (fnd_b9ce16da05a8)

Claim restates that MacOS export template is missing, but the evidence is already given in the source.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_28`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [WARN] scope_widening (fnd_6d310ba0b6e7)

The claim that 'By default, macOS will run only applications that are signed and notarized' uses a universal quantifier ('by default') but the scope is very narrow, only applying to running Godot apps on macOS.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_1`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Provide evidence of this behavior for all macOS applications to support the claim's universality.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** By default, macOS will run only applications that are signed and notarized.

### [WARN] scope_widening (fnd_964726c68797)

The claim about SignTool's usage with catalog databases generalizes the tool's purpose beyond its specific use case.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_10`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** To avoid scope widening, the claim should be more specific to the context mentioned in the evidence excerpt.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** > [!NOTE] Catalog databases are used for automatic lookup of catalog files.

### [WARN] scope_widening (fnd_4beb3f20519d)

The asserts uses a universal quantifier (always) but the scope is a single platform.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_1`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Clarify if this applies universally or only to specific platforms.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Godot Engine currently supports exporting to OpenHarmony.

### [INFO] missing_not_constraint (fnd_b83e7a121140)

Claim clm_1ceb96fdb33a_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1ceb96fdb33a_ollama_intern_7`
- **Source IDs:** `src_1ceb96fdb33a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot supports embedding PCK files when exporting for Windows.

### [INFO] missing_not_constraint (fnd_775fd1b3e023)

Claim clm_1ceb96fdb33a_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1ceb96fdb33a_ollama_intern_8`
- **Source IDs:** `src_1ceb96fdb33a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot allows changing executable icons during Windows export.

### [INFO] missing_not_constraint (fnd_fc3e8b258de5)

Claim clm_1ceb96fdb33a_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_1ceb96fdb33a_ollama_intern_9`
- **Source IDs:** `src_1ceb96fdb33a`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot supports encryption key customization for Windows export.

### [INFO] missing_not_constraint (fnd_d30b03d0608c)

Claim clm_03cb99fe6df9_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_03cb99fe6df9_ollama_intern_2`
- **Source IDs:** `src_03cb99fe6df9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The exported.app bundle supports both Intel x86_64 and ARM64 architectures.

### [INFO] missing_not_constraint (fnd_13ef2684898c)

Claim clm_03cb99fe6df9_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_03cb99fe6df9_ollama_intern_6`
- **Source IDs:** `src_03cb99fe6df9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: macOS will run only applications that are signed and notarized by default.

### [INFO] missing_not_constraint (fnd_be8d62c84109)

Claim clm_03cb99fe6df9_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_03cb99fe6df9_ollama_intern_19`
- **Source IDs:** `src_03cb99fe6df9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To distribute an app through the App Store, you must enable the App Sandbox.

### [INFO] missing_not_constraint (fnd_9e6ed6db8c05)

Claim clm_03cb99fe6df9_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_03cb99fe6df9_ollama_intern_21`
- **Source IDs:** `src_03cb99fe6df9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can override default entitlements by selecting custom entitlements file.

### [INFO] missing_not_constraint (fnd_7352727366c5)

Claim clm_03cb99fe6df9_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_03cb99fe6df9_ollama_intern_22`
- **Source IDs:** `src_03cb99fe6df9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The 'Enabled' entitlement enables the App Sandbox.

### [INFO] missing_not_constraint (fnd_fd72df681466)

Claim clm_7d0fca124716_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7d0fca124716_ollama_intern_1`
- **Source IDs:** `src_7d0fca124716`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot provides a method to export projects for Linux.

### [INFO] missing_not_constraint (fnd_ed63c3b2a172)

Claim clm_5b703b620109_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_1`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: By default, macOS will run only applications that are signed and notarized.

### [INFO] missing_not_constraint (fnd_dea1410fec8a)

Claim clm_5b703b620109_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_3`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: macOS apps should avoid relying on relative paths from the application folder.

### [INFO] missing_not_constraint (fnd_4f51cca3ac29)

Claim clm_5b703b620109_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_8`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Building an app using custom export templates and OSXCross does not sign it.

### [INFO] missing_not_constraint (fnd_9c02a069e77e)

Claim clm_5b703b620109_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5b703b620109_ollama_intern_10`
- **Source IDs:** `src_5b703b620109`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Ad-hoc signing the app yourself enables it to run on macOS.

### [INFO] missing_not_constraint (fnd_49e530be3983)

Claim clm_c3216b0c8944_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_15`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The notarization process usually takes less than an hour.

### [INFO] missing_not_constraint (fnd_06f451f7cc4d)

Claim clm_c3216b0c8944_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_18`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apple provides documentation on how to customize the notarization workflow.

### [INFO] missing_not_constraint (fnd_ffe123f60b8e)

Claim clm_c3216b0c8944_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c3216b0c8944_ollama_intern_19`
- **Source IDs:** `src_c3216b0c8944`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apple offers guidance on resolving common notarization issues.

### [INFO] missing_not_constraint (fnd_c15010f9625e)

Claim clm_d7289e5beb6d_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_2`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool is available in the Bin folder of Windows SDK installation path.

### [INFO] missing_not_constraint (fnd_8460d352a873)

Claim clm_d7289e5beb6d_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_10`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Catalog databases are used for automatic lookup of catalog files.

### [INFO] missing_not_constraint (fnd_e69deaeb96a5)

Claim clm_d7289e5beb6d_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_11`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool generates an error if the `/fd` option isn't specified while signing.

### [INFO] missing_not_constraint (fnd_fdb68ff4ccf6)

Claim clm_d7289e5beb6d_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_13`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: /i option specifies the issuer's name of the signing certificate.

### [INFO] missing_not_constraint (fnd_8f0061ab29d8)

Claim clm_d7289e5beb6d_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_15`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: /n option specifies the subject's name of the signing certificate.

### [INFO] missing_not_constraint (fnd_2ddbcd34771b)

Claim clm_d7289e5beb6d_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_16`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: /ph generates page hashes for executable files if supported.

### [INFO] missing_not_constraint (fnd_0bece59fc411)

Claim clm_d7289e5beb6d_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_17`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool can time stamp PKCS #7 files using the '/p7' option.

### [INFO] missing_not_constraint (fnd_725606c8512e)

Claim clm_d7289e5beb6d_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_18`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool requires either the '/t' or '/tr' option for time stamping files.

### [INFO] missing_not_constraint (fnd_c245aaf77675)

Claim clm_d7289e5beb6d_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_23`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool returns a zero exit code upon successful execution.

### [INFO] missing_not_constraint (fnd_fc5f50ccdd30)

Claim clm_d7289e5beb6d_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d7289e5beb6d_ollama_intern_26`
- **Source IDs:** `src_d7289e5beb6d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SignTool can add a catalog file to the system component and driver database.

### [INFO] missing_not_constraint (fnd_8cf0f0aa7fe0)

Claim clm_ef2f01e1f840_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef2f01e1f840_ollama_intern_1`
- **Source IDs:** `src_ef2f01e1f840`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: App package signing is required for MSIX packages to be deployable on Windows.

### [INFO] missing_not_constraint (fnd_a9a540907813)

Claim clm_ef2f01e1f840_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ef2f01e1f840_ollama_intern_13`
- **Source IDs:** `src_ef2f01e1f840`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Signing an MSIX package ensures its authenticity and integrity.

### [INFO] missing_not_constraint (fnd_3a110d4be662)

Claim clm_e6e0e4cb4ec7_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_11`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4.2 stable on Windows does not successfully notarize projects for macOS.

### [WARN] source_quality_problem (fnd_1ce663b32b32)

Claim clm_e6e0e4cb4ec7_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_11`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_18cd5b39b106)

Claim clm_e6e0e4cb4ec7_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_12`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's visionOS VR plugin supports creating Immersive experiences.

### [WARN] source_quality_problem (fnd_02b2a8f00761)

Claim clm_e6e0e4cb4ec7_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_12`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_d73208f20b40)

Claim clm_e6e0e4cb4ec7_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_13`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's visionOS platform supports the Platformer demo project.

### [WARN] source_quality_problem (fnd_47030bcd07b5)

Claim clm_e6e0e4cb4ec7_ollama_intern_13 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_13`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_6e3b0bc48f78)

Claim clm_e6e0e4cb4ec7_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_15`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's iOS and visionOS export plugins share the majority of their code.

### [WARN] source_quality_problem (fnd_188126b64fa0)

Claim clm_e6e0e4cb4ec7_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_15`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_8900da93fa89)

Claim clm_e6e0e4cb4ec7_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_17`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4.2 stable on Windows does not successfully perform macOS notarization.

### [WARN] source_quality_problem (fnd_a1ec598c04f8)

Claim clm_e6e0e4cb4ec7_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_17`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_bf9c9f9db920)

Claim clm_e6e0e4cb4ec7_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_23`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The 'Windows Universal' export option has been renamed to 'UWP'.

### [WARN] source_quality_problem (fnd_0cefffff50d5)

Claim clm_e6e0e4cb4ec7_ollama_intern_23 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_23`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ea3bf54868d9)

Claim clm_e6e0e4cb4ec7_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_24`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: macOS notarization is not supported in Godot 3.2 when exporting from Windows.

### [WARN] source_quality_problem (fnd_148c1d29279b)

Claim clm_e6e0e4cb4ec7_ollama_intern_24 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_24`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fc2ee211a169)

Claim clm_e6e0e4cb4ec7_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_26`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4.2 does not successfully notarize macOS exports on Windows.

### [WARN] source_quality_problem (fnd_c4dfa35e233a)

Claim clm_e6e0e4cb4ec7_ollama_intern_26 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_26`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_713a7c2d52ba)

Claim clm_e6e0e4cb4ec7_ollama_intern_27 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_27`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4.2 stable on Windows does not successfully notarize macOS exports.

### [WARN] source_quality_problem (fnd_52e78da948ea)

Claim clm_e6e0e4cb4ec7_ollama_intern_27 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_27`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_4124a46517bb)

Claim clm_e6e0e4cb4ec7_ollama_intern_31 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_31`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: There is a minimal reproduction project available for this issue.

### [WARN] source_quality_problem (fnd_eb7c7dea5092)

Claim clm_e6e0e4cb4ec7_ollama_intern_31 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e6e0e4cb4ec7_ollama_intern_31`
- **Source IDs:** `src_e6e0e4cb4ec7`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_71fe902818d0)

Claim clm_da88881cf961_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_1`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Engine currently supports exporting to OpenHarmony.

### [WARN] source_quality_problem (fnd_756e65c049ec)

Claim clm_da88881cf961_ollama_intern_1 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_1`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_0bfeb235065e)

Claim clm_da88881cf961_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_5`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Engine does not pick up the main.gd.remap file when exporting to UWP.

### [WARN] source_quality_problem (fnd_5562f84028e8)

Claim clm_da88881cf961_ollama_intern_5 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_5`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ac274dfb7539)

Claim clm_da88881cf961_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_11`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The generated UWP file is damaged and cannot be run.

### [WARN] source_quality_problem (fnd_27b5240ed31f)

Claim clm_da88881cf961_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_11`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_f0bf23dc6c66)

Claim clm_da88881cf961_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_12`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Signtool cannot sign the file when exporting to UWP.

### [WARN] source_quality_problem (fnd_de65208576b3)

Claim clm_da88881cf961_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_12`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_2730595853f8)

Claim clm_da88881cf961_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_15`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Engine crashes after exporting a project due to missing database.db file.

### [WARN] source_quality_problem (fnd_84325f5dda1c)

Claim clm_da88881cf961_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_15`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_de88b542b69a)

Claim clm_da88881cf961_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_17`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Error message about file access appears in console window when opening Godot.

### [WARN] source_quality_problem (fnd_e5ec4e243fc3)

Claim clm_da88881cf961_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_17`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_49ad3f208c2c)

Claim clm_da88881cf961_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_20`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Steps to reproduce the issue of file handling on macOS have been provided.

### [WARN] source_quality_problem (fnd_767b1b8cb282)

Claim clm_da88881cf961_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_20`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_0ea09c2428e2)

Claim clm_da88881cf961_ollama_intern_37 has no 'not' constraint recorded.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_37`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: After successful compilation, the extension works immediately with no fuss.

### [WARN] source_quality_problem (fnd_b71734acc9f0)

Claim clm_da88881cf961_ollama_intern_37 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_37`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_9107b502161b)

Claim clm_da88881cf961_ollama_intern_43 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_43`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_3f0a1ad4a5f1)

Claim clm_da88881cf961_ollama_intern_44 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_da88881cf961_ollama_intern_44`
- **Source IDs:** `src_da88881cf961`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ca24c2da3a5e)

Claim clm_2b06a4f43c1e_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_5`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's Linux export templates have issues that require additional steps.

### [WARN] source_quality_problem (fnd_37bfe874372a)

Claim clm_2b06a4f43c1e_ollama_intern_5 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_5`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ec785a687c0e)

Claim clm_2b06a4f43c1e_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_7`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's Linux export templates require API level 17 or higher.

### [WARN] source_quality_problem (fnd_3622e16ec131)

Claim clm_2b06a4f43c1e_ollama_intern_7 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_7`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_9b029cac1b1c)

Claim clm_2b06a4f43c1e_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_8`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: JDK 17 is the only supported version for Godot's Linux export templates.

### [WARN] source_quality_problem (fnd_06d3994ee950)

Claim clm_2b06a4f43c1e_ollama_intern_8 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_8`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e7abbd18491a)

Claim clm_2b06a4f43c1e_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_13`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The display name of the Linux/BSD platform has been changed in Godot

### [WARN] source_quality_problem (fnd_d3f5ac8216eb)

Claim clm_2b06a4f43c1e_ollama_intern_13 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_13`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_1a074bd8a08b)

Claim clm_2b06a4f43c1e_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_14`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot does not currently support Wayland on Linux/BSD platforms

### [WARN] source_quality_problem (fnd_0bb2512cfc0e)

Claim clm_2b06a4f43c1e_ollama_intern_14 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_14`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fb1d8977d46d)

Claim clm_2b06a4f43c1e_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_15`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's export templates currently support Linux and BSD platforms.

### [WARN] source_quality_problem (fnd_b32212c02f1b)

Claim clm_2b06a4f43c1e_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_15`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_508808adcca7)

Claim clm_2b06a4f43c1e_ollama_intern_28 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_28`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The export template for MacOS is missing.

### [WARN] source_quality_problem (fnd_8b284fdd9a6a)

Claim clm_2b06a4f43c1e_ollama_intern_28 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_28`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_a9d1e3948d90)

Claim clm_2b06a4f43c1e_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_29`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: There are no reported minimal reproduction projects for this issue.

### [WARN] source_quality_problem (fnd_a1ce900d1864)

Claim clm_2b06a4f43c1e_ollama_intern_29 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2b06a4f43c1e_ollama_intern_29`
- **Source IDs:** `src_2b06a4f43c1e`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

## Claim review decisions

### [ACCEPTED] `clm_1ceb96fdb33a_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_f4cb60070eb3`, `fnd_b83e7a121140`.

### [ACCEPTED] `clm_1ceb96fdb33a_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_775fd1b3e023`.

### [ACCEPTED] `clm_1ceb96fdb33a_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_fc3e8b258de5`.

### [ACCEPTED] `clm_03cb99fe6df9_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_d30b03d0608c`.

### [ACCEPTED] `clm_03cb99fe6df9_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_13ef2684898c`.

### [ACCEPTED] `clm_03cb99fe6df9_ollama_intern_19`

Only info-level findings; accepted.

Cites findings: `fnd_be8d62c84109`.

### [ACCEPTED] `clm_03cb99fe6df9_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_9e6ed6db8c05`.

### [ACCEPTED] `clm_03cb99fe6df9_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_7352727366c5`.

### [ACCEPTED] `clm_7d0fca124716_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_4b2cd1a6a751`, `fnd_fd72df681466`.

### [NEEDS-SCOPE-REPAIR] `clm_5b703b620109_ollama_intern_1`

Findings: overgeneralized_claim (warn); scope_widening (warn).

Cites findings: `fnd_bc0a66095a45`, `fnd_6d310ba0b6e7`, `fnd_ed63c3b2a172`.

### [NEEDS-SCOPE-REPAIR] `clm_5b703b620109_ollama_intern_3`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_92bb66d4fd4e`, `fnd_dea1410fec8a`.

### [ACCEPTED] `clm_5b703b620109_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_cad94ed67123`, `fnd_4f51cca3ac29`.

### [ACCEPTED] `clm_5b703b620109_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_f911f5db380c`, `fnd_9c02a069e77e`.

### [NEEDS-HUMAN-REVIEW] `clm_c3216b0c8944_ollama_intern_15`

Findings: recommendation_exceeds_evidence (warn).

Cites findings: `fnd_70104d029051`, `fnd_49e530be3983`.

### [NEEDS-SCOPE-REPAIR] `clm_c3216b0c8944_ollama_intern_18`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_51e22c46b180`, `fnd_06f451f7cc4d`.

### [ACCEPTED] `clm_c3216b0c8944_ollama_intern_19`

Only info-level findings; accepted.

Cites findings: `fnd_dcabae38c172`, `fnd_ffe123f60b8e`.

### [NEEDS-SCOPE-REPAIR] `clm_d7289e5beb6d_ollama_intern_2`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_72e0d62c00c0`, `fnd_c15010f9625e`.

### [NEEDS-SCOPE-REPAIR] `clm_d7289e5beb6d_ollama_intern_10`

Findings: overgeneralized_claim (warn); scope_widening (warn).

Cites findings: `fnd_27f39bbfa84f`, `fnd_964726c68797`, `fnd_8460d352a873`.

### [NEEDS-SCOPE-REPAIR] `clm_d7289e5beb6d_ollama_intern_11`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_f6c751251b72`, `fnd_e69deaeb96a5`.

### [NEEDS-SCOPE-REPAIR] `clm_d7289e5beb6d_ollama_intern_13`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_31235b38b812`, `fnd_fdb68ff4ccf6`.

### [ACCEPTED] `clm_d7289e5beb6d_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_8f0061ab29d8`.

### [ACCEPTED] `clm_d7289e5beb6d_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_2ddbcd34771b`.

### [ACCEPTED] `clm_d7289e5beb6d_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_0bece59fc411`.

### [ACCEPTED] `clm_d7289e5beb6d_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_725606c8512e`.

### [ACCEPTED] `clm_d7289e5beb6d_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_c245aaf77675`.

### [NEEDS-SCOPE-REPAIR] `clm_d7289e5beb6d_ollama_intern_26`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_ce8e8fef0c86`, `fnd_fc5f50ccdd30`.

### [ACCEPTED] `clm_ef2f01e1f840_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_8cf0f0aa7fe0`.

### [ACCEPTED] `clm_ef2f01e1f840_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_a9a540907813`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_3a110d4be662`, `fnd_1ce663b32b32`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_12`

Findings: source_quality_problem (warn).

Cites findings: `fnd_3012d1cb6c50`, `fnd_18cd5b39b106`, `fnd_02b2a8f00761`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_13`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_816fc88a232f`, `fnd_d73208f20b40`, `fnd_47030bcd07b5`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e338646ccead`, `fnd_6e3b0bc48f78`, `fnd_188126b64fa0`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_17`

Findings: source_quality_problem (warn).

Cites findings: `fnd_8900da93fa89`, `fnd_a1ec598c04f8`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_23`

Findings: source_quality_problem (warn).

Cites findings: `fnd_114e82feba63`, `fnd_bf9c9f9db920`, `fnd_0cefffff50d5`.

### [REJECTED] `clm_e6e0e4cb4ec7_ollama_intern_24`

Findings: recommendation_exceeds_evidence (block); source_quality_problem (warn).

Cites findings: `fnd_e338646ccead`, `fnd_9c8073c6f3a3`, `fnd_001646ebfa7a`, `fnd_ea3bf54868d9`, `fnd_148c1d29279b`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_26`

Findings: source_quality_problem (warn).

Cites findings: `fnd_fc2ee211a169`, `fnd_c4dfa35e233a`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_27`

Findings: source_quality_problem (warn).

Cites findings: `fnd_597ab3956e24`, `fnd_713a7c2d52ba`, `fnd_52e78da948ea`.

### [NEEDS-SOURCE-REPAIR] `clm_e6e0e4cb4ec7_ollama_intern_31`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4124a46517bb`, `fnd_eb7c7dea5092`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_1`

Findings: overgeneralized_claim (warn); scope_widening (warn); source_quality_problem (warn).

Cites findings: `fnd_3d2ab5c0e1cd`, `fnd_4beb3f20519d`, `fnd_71fe902818d0`, `fnd_756e65c049ec`.

### [REJECTED] `clm_da88881cf961_ollama_intern_5`

Findings: recommendation_exceeds_evidence (block); source_quality_problem (warn).

Cites findings: `fnd_a1982332ca89`, `fnd_0bfeb235065e`, `fnd_5562f84028e8`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_11`

Findings: recommendation_exceeds_evidence (warn); source_quality_problem (warn).

Cites findings: `fnd_99af0dc61564`, `fnd_ac274dfb7539`, `fnd_27b5240ed31f`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_12`

Findings: recommendation_exceeds_evidence (warn); source_quality_problem (warn).

Cites findings: `fnd_99af0dc61564`, `fnd_f0bf23dc6c66`, `fnd_de65208576b3`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_2730595853f8`, `fnd_84325f5dda1c`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_17`

Findings: source_quality_problem (warn).

Cites findings: `fnd_de88b542b69a`, `fnd_e5ec4e243fc3`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_49ad3f208c2c`, `fnd_767b1b8cb282`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_37`

Findings: source_quality_problem (warn).

Cites findings: `fnd_0ea09c2428e2`, `fnd_b71734acc9f0`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_43`

Findings: source_quality_problem (warn).

Cites findings: `fnd_9107b502161b`.

### [NEEDS-SOURCE-REPAIR] `clm_da88881cf961_ollama_intern_44`

Findings: source_quality_problem (warn).

Cites findings: `fnd_3f0a1ad4a5f1`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_5`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ca24c2da3a5e`, `fnd_37bfe874372a`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_7`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ec785a687c0e`, `fnd_3622e16ec131`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_8`

Findings: source_quality_problem (warn).

Cites findings: `fnd_9b029cac1b1c`, `fnd_06d3994ee950`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_13`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e7abbd18491a`, `fnd_d3f5ac8216eb`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_14`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1a074bd8a08b`, `fnd_0bb2512cfc0e`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_fb1d8977d46d`, `fnd_b32212c02f1b`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_28`

Findings: source_quality_problem (warn).

Cites findings: `fnd_b9ce16da05a8`, `fnd_508808adcca7`, `fnd_8b284fdd9a6a`.

### [NEEDS-SOURCE-REPAIR] `clm_2b06a4f43c1e_ollama_intern_29`

Findings: source_quality_problem (warn).

Cites findings: `fnd_a9d1e3948d90`, `fnd_a1ce900d1864`.
