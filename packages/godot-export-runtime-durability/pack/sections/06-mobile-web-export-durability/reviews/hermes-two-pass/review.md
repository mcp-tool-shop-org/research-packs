# Adversarial Review: 06-mobile-web-export-durability

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-10T08:29:46.303Z
**Candidate claims:** 87
**Findings:** 135 (block: 0, warn: 36, info: 99)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 24
- [NEEDS-SCOPE-REPAIR]: 9
- [NEEDS-HUMAN-REVIEW]: 1
- [ACCEPTED]: 53

## Findings

### [WARN] overgeneralized_claim (fnd_ef00be896a97)

Claim clm_37ec19efa9ba_ollama_intern_2 suggests Godot projects can be built and submitted to the iOS App Store, but the source only covers exporting a project for iOS devices.

- **Claim IDs:** `clm_37ec19efa9ba_ollama_intern_2`
- **Source IDs:** `src_37ec19efa9ba`
- **Required action:** Clarify that while the guide explains how to export a project for iOS devices, it does not cover the full process of submitting an app to the App Store.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** This page describes how to export a Godot project to iOS.

### [WARN] overgeneralized_claim (fnd_7cc2fe9c3caa)

Claim clm_d726c169567d_ollama_intern_1 implies the guide covers the full process of exporting a Godot project to Android, but it only explains the initial setup.

- **Claim IDs:** `clm_d726c169567d_ollama_intern_1`
- **Source IDs:** `src_d726c169567d`
- **Required action:** Note that while this guide covers the beginning steps of exporting a Godot project for Android, more detailed information is needed to fully complete the process.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** This page describes how to export a Godot project to Android.

### [INFO] valid_but_low_value (fnd_6f4be1511c6c)

Claim clm_d63ce314a50f_ollama_intern_5 is a low-value detail about the suggested 'index.html' filename for Web projects.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_5`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** We suggest users to export their Web projects with 'index.html' as the file name.

### [WARN] scope_widening (fnd_f1039480ae2d)

The claim that 'One-click deploy supports Android, iOS, desktop platforms, and Web platforms' widens the scope beyond what is supported for the Web platform.

- **Claim IDs:** `clm_b2e50dff76fc_ollama_intern_4`
- **Source IDs:** `src_b2e50dff76fc`
- **Required action:** Rephrase the claim to accurately reflect what is supported for each platform individually.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The evidence shows that while Godot supports exporting for Android, iOS, and desktop platforms with one-click deploy, running the exported web project requires additional steps and is only accessible on localhost by default.

### [INFO] valid_but_low_value (fnd_9658ae534c32)

The claim that 'Different devices prefer data in different formats for running games' is valid but not synthesis-worthy as it restates low-leverage detail.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_6`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [WARN] scope_widening (fnd_3f9931a5e9c1)

The claim that 'The App Store is curated to provide a safe experience for users' widens the scope beyond what the source supports, which is more specific about curating apps for safety, security, and privacy.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_1`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Clarify the claim to only apply to curating apps for safety, security, and privacy, not providing a great opportunity for all developers.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** guiding principle of the App Store is simple—we want to provide a safe experience for users to get apps and a great opportunity for all developers to be successful. We do this by offering a highly curated App Store where every app is reviewed by experts and an editorial team helps users discover new apps every day. We also scan each app for malware and other software that may impact user safety, security, and privacy.

### [INFO] valid_but_low_value (fnd_153e710f8e45)

The claim 'Complete and accurate app information is required for submission' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_10`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Ensure that all app information and metadata is complete and accurate

### [WARN] overgeneralized_claim (fnd_d4722536e131)

The claim that 'In-app purchases require detailed explanations in the App Review notes' overgeneralizes, as the source specifically mentions non-obvious features and in-app purchases.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_11`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Specify 'non-obvious features and in-app purchases' instead of just 'in-app purchases'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Include detailed explanations of non-obvious features and in-app purchases in the App Review notes, including supporting documentation where appropriate

### [INFO] valid_but_low_value (fnd_842cc7f5e37a)

The claim 'Apps should not contain offensive, upsetting, or harmful content' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_12`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** When people install an app from the App Store, they want to feel confident that it’s safe to do so—that the app doesn’t contain upsetting or offensive content...

### [WARN] overgeneralized_claim (fnd_07c9532bc844)

The claim that 'Apps may link to external purchase methods with proper entitlements' overgeneralizes, as the source mentions specific regions and requirements.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_55`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Specify 'specific regions' instead of just 'apps'
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** 3.1.1(a) Link to Other Purchase Methods: Developers may apply for entitlements to provide a link in their app to a website the developer owns or maintains responsibility for in order to purchase digital content or services...

### [INFO] valid_but_low_value (fnd_52ff0fc73af5)

The claim 'Apps must not write false or inaccurate data into HealthKit' is valid but low value, as it restates a basic requirement for apps using HealthKit.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_104`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** (ii) Apps must not write false or inaccurate data into HealthKit...

### [INFO] valid_but_low_value (fnd_531d8a766fe5)

The claim 'Sweepstakes and contests must be sponsored by the developer of the app' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_111`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** 5.3.1 Sweepstakes and contests must be sponsored by the developer of the app.

### [INFO] valid_but_low_value (fnd_5a7aa00db761)

The claim 'VPN apps must comply with local laws regarding VPN services' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_115`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** VPN apps must not violate local laws...

### [INFO] valid_but_low_value (fnd_6dcf95698931)

The claim 'MDM apps must declare what user data will be collected and how it will be used' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_120`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** You must make a clear declaration of what user data will be collected and how it will be used on an app screen prior to any user action to purchase or otherwise use the service.

### [INFO] valid_but_low_value (fnd_f92072cdc2d1)

The claim 'MDM apps must not sell, use, or disclose user data to third parties' is valid but low value, as it restates a basic requirement for app submissions.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_121`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Apps offering MDM services may not sell, use, or disclose to third parties any data for any purpose...

### [WARN] overgeneralized_claim (fnd_74fa76575ab3)

The claim that 'Package names for app files are unique and permanent on Google Play' overgeneralizes, as package names can be changed by the developer.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_4`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Clarify that while initial package names are chosen by developers, they may change these names when uploading subsequent versions to Google Play.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Evidence shows that package names can be modified in the Play Console when uploading a new version of an app.

### [WARN] recommendation_exceeds_evidence (fnd_20a2d9c4d301)

The claim that 'Apps on Google Play have a size limit, which is based on the maximum compressed size of your APKs at the time of download' recommends an action (checking APK compression) not directly supported by the evidence.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_5`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Rephrase to remove any implied recommendation about how developers should check or address app size limits.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The source states there is a size limit for apps on Google Play, but does not specify checking the compressed size of APKs as the recommended course of action.

### [INFO] valid_but_low_value (fnd_629ff1c2ba1a)

The claim that 'Play Console uses gzip to estimate what your app's download size will be' is grounded but not synthesis-worthy, as it simply restates existing functionality.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_6`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** This detail about using gzip compression is likely well-known to developers and does not contribute new insights or conclusions.

### [WARN] overgeneralized_claim (fnd_853e7d3771af)

The claim that Android Studio provides guidance on publishing Android apps is more general than the specific page it cites, which focuses on using Studio to prepare an app for publication.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_4`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Rephrase to note Studio's role in preparing apps for publication, not that it provides general guidance on publishing.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Evidence excerpt: 'Publier votre application | Android Studio | Android Developers'

### [INFO] valid_but_low_value (fnd_27bf1805f638)

The claim that this page presents the process of preparing an Android app for publication restates obvious context.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_11`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Not applicable - this is a valid but low-value claim.

### [INFO] valid_but_low_value (fnd_e50f80a6bc73)

This claim restates a specific detail about the Godot Editor crashing during iOS export, but does not contribute to broader synthesis.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_10`
- **Source IDs:** `src_b777c089d810`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The claim focuses on a crash during the iOS export process in version 4.7-beta1.

### [INFO] valid_but_low_value (fnd_d30b09efb6b0)

Claim clm_b777c089d810_ollama_intern_20 restates a known crash issue without adding significant synthesis.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_20`
- **Source IDs:** `src_b777c089d810`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** The claim restates that there is a crash during iOS export, which is a factual detail but does not add new context or synthesis.

### [WARN] recommendation_exceeds_evidence (fnd_d0acb7c5714c)

The claim that enabling VRAM compression for Android export in Godot is recommended, exceeds the evidence provided which only discusses exporting unsigned HAP files and using custom export templates.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_10`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** The source should be updated to only recommend exporting unsigned HAP files for Android, not enable VRAM compression.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** ### Export the unsigned hap/app

Adds an OpenHarmony preset in the [export menu](https://docs.godotengine.org/en/latest/tutorials/export/exporting_projects.html#export-menu). 

Check **Advanced Options**, and then specify `custom_template/debug` and `custom_template/release` as the export templates you just downloaded.[^4]

### [INFO] valid_but_low_value (fnd_d4b13acee54b)

The claim that the release APK file generated by Godot is larger than the debug one, restates a low-leverage detail without adding significant synthesis value.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_15`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [INFO] valid_but_low_value (fnd_21814c23b24a)

The claim that Godot freezes completely while building an AAB file, restates a low-leverage detail without adding significant synthesis value.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_24`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [INFO] valid_but_low_value (fnd_afab32b4ea7c)

The claim that the issue occurs specifically with an emulator, in this case BlueStack, restates a low-leverage detail without adding significant synthesis value.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_26`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [INFO] valid_but_low_value (fnd_aca46c1cacad)

The claim that the warning appears when using GLES3, but disappears when changed to GLES2, restates a low-leverage detail without adding significant synthesis value.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_27`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low

### [WARN] overgeneralized_claim (fnd_a1d506025855)

Claim clm_7e04a97ea278_ollama_intern_25 overgeneralizes the issue to both Godot 3 and 4.6, while the evidence only supports issues in 4.6.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_25`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Clarify or split the claim to specify the version of Godot affected by the web export issues.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** The evidence excerpt mentions specific web export issues in 4.6, but the claim states that these issues also affect Godot 3.

### [INFO] valid_but_low_value (fnd_889ba1dab4fb)

Claim clm_7e04a97ea278_ollama_intern_26 is a valid but low-value claim, as it provides technical detail without contributing to the overall synthesis.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_26`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The claim states that Web workers are equivalent to threads for the web platform, which is a factual statement but does not advance the discussion of web export issues.

### [WARN] scope_widening (fnd_f60ac479088d)

The use of 'always' in the claim suggests a universal truth, but the scope is limited to a specific Godot version and operating system combination.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_15`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Review if the claim can be narrowed down to be more specific to the provided context or if it holds true in other scenarios.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** ...The release file is bigger than debug one. ... This observation applies to Godot version 3.3.2 on Ubuntu 20.04.2 LTS using GLES2 backend...

### [INFO] missing_not_constraint (fnd_a741fa81998a)

Claim clm_37ec19efa9ba_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_37ec19efa9ba_ollama_intern_2`
- **Source IDs:** `src_37ec19efa9ba`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This guide explains how to export a Godot project specifically for iOS.

### [INFO] missing_not_constraint (fnd_0597a4801af3)

Claim clm_37ec19efa9ba_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_37ec19efa9ba_ollama_intern_6`
- **Source IDs:** `src_37ec19efa9ba`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: After exporting, select the Godot project in Xcode's Project navigator.

### [INFO] missing_not_constraint (fnd_8cf1a24dc6cd)

Claim clm_37ec19efa9ba_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_37ec19efa9ba_ollama_intern_7`
- **Source IDs:** `src_37ec19efa9ba`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Delete the exported_xcode_project_name.pck file from the Xcode project.

### [INFO] missing_not_constraint (fnd_92a920e8e924)

Claim clm_37ec19efa9ba_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_37ec19efa9ba_ollama_intern_8`
- **Source IDs:** `src_37ec19efa9ba`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Special iOS plugins can be used in Godot for enhanced functionality.

### [INFO] missing_not_constraint (fnd_cfe39503dc86)

Claim clm_d726c169567d_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d726c169567d_ollama_intern_1`
- **Source IDs:** `src_d726c169567d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This page guides users on how to export a Godot project to Android.

### [INFO] missing_not_constraint (fnd_366ce7040aab)

Claim clm_d726c169567d_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d726c169567d_ollama_intern_3`
- **Source IDs:** `src_d726c169567d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Users must install OpenJDK 17 to export a Godot project to Android.

### [INFO] missing_not_constraint (fnd_61bb6b1ea06f)

Claim clm_d726c169567d_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d726c169567d_ollama_intern_15`
- **Source IDs:** `src_d726c169567d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A list of Android export environment variables is available in the Godot editor.

### [INFO] missing_not_constraint (fnd_e2fa60ef5a03)

Claim clm_d63ce314a50f_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_1`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: HTML5 export enables publishing Godot Engine games in browsers.

### [INFO] missing_not_constraint (fnd_e61520a61a59)

Claim clm_d63ce314a50f_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_3`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: C# projects using Godot 4 cannot be exported to the web currently.

### [INFO] missing_not_constraint (fnd_786d02552c32)

Claim clm_d63ce314a50f_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_5`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The suggested file name for Web projects is 'index.html'.

### [INFO] missing_not_constraint (fnd_9b385a008b56)

Claim clm_d63ce314a50f_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_6`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot 4 targets WebGL 2.0 for the web platform.

### [INFO] missing_not_constraint (fnd_5a239c9c7ce8)

Claim clm_d63ce314a50f_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_24`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The generated HTML file can be used as DirectoryIndex in Apache servers.

### [INFO] missing_not_constraint (fnd_db3a7bfea0a3)

Claim clm_d63ce314a50f_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_25`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The HTML page draws the game at maximum size within the browser window.

### [INFO] missing_not_constraint (fnd_c04348deae01)

Claim clm_d63ce314a50f_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d63ce314a50f_ollama_intern_30`
- **Source IDs:** `src_d63ce314a50f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Firefox users can unregister the service worker via its developer tools.

### [INFO] missing_not_constraint (fnd_dcd33f4fa3d2)

Claim clm_4c6c14f4f6fa_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_1`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot originally did not have a means for exporting projects automatically.

### [INFO] missing_not_constraint (fnd_66e6722f9f44)

Claim clm_4c6c14f4f6fa_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_4`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot has a system for creating DLCs as extra package files.

### [INFO] missing_not_constraint (fnd_338bf14d583c)

Claim clm_4c6c14f4f6fa_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_6`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Different devices prefer data in different formats for running games.

### [INFO] missing_not_constraint (fnd_0ec2423c7a60)

Claim clm_4c6c14f4f6fa_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_7`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot's export system offers five different modes for exporting projects.

### [INFO] missing_not_constraint (fnd_7b859102e9b8)

Claim clm_4c6c14f4f6fa_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4c6c14f4f6fa_ollama_intern_14`
- **Source IDs:** `src_4c6c14f4f6fa`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PCK is the default and recommended format for most Godot project exports.

### [INFO] missing_not_constraint (fnd_0f50a1d71387)

Claim clm_b2e50dff76fc_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b2e50dff76fc_ollama_intern_4`
- **Source IDs:** `src_b2e50dff76fc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: One-click deploy supports Android, iOS, desktop platforms, and Web platforms.

### [INFO] missing_not_constraint (fnd_b48afa550ac4)

Claim clm_ba5aaca1a207_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_1`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The App Store is curated to provide a safe experience for users.

### [INFO] missing_not_constraint (fnd_a06384a5229e)

Claim clm_ba5aaca1a207_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_10`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Complete and accurate app information is required for submission.

### [INFO] missing_not_constraint (fnd_013139a6b91d)

Claim clm_ba5aaca1a207_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_11`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In-app purchases require detailed explanations in the App Review notes.

### [INFO] missing_not_constraint (fnd_bf9b05950e9f)

Claim clm_ba5aaca1a207_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_12`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apps should not contain offensive, upsetting, or harmful content.

### [INFO] missing_not_constraint (fnd_184772152dd5)

Claim clm_ba5aaca1a207_ollama_intern_55 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_55`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apps may link to external purchase methods with proper entitlements.

### [INFO] missing_not_constraint (fnd_acf5dd0c3f55)

Claim clm_ba5aaca1a207_ollama_intern_104 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_104`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apps must not write false or inaccurate data into HealthKit.

### [INFO] missing_not_constraint (fnd_a4695fd351b7)

Claim clm_ba5aaca1a207_ollama_intern_111 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_111`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Sweepstakes and contests must be sponsored by the developer of the app.

### [INFO] missing_not_constraint (fnd_edc82a7b2f6d)

Claim clm_ba5aaca1a207_ollama_intern_115 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_115`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: VPN apps must comply with local laws regarding VPN services.

### [INFO] missing_not_constraint (fnd_80545016e208)

Claim clm_ba5aaca1a207_ollama_intern_120 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_120`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: MDM apps must declare what user data will be collected and how it will be used.

### [INFO] missing_not_constraint (fnd_cecb5b99871f)

Claim clm_ba5aaca1a207_ollama_intern_121 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ba5aaca1a207_ollama_intern_121`
- **Source IDs:** `src_ba5aaca1a207`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: MDM apps must not sell, use, or disclose user data to third parties.

### [INFO] missing_not_constraint (fnd_f0c8b5182111)

Claim clm_083cda9d9328_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_083cda9d9328_ollama_intern_10`
- **Source IDs:** `src_083cda9d9328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A limited number of registered devices can be used for distributing a beta app.

### [INFO] missing_not_constraint (fnd_8fa461091acb)

Claim clm_083cda9d9328_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_083cda9d9328_ollama_intern_11`
- **Source IDs:** `src_083cda9d9328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Stripping Swift symbols can reduce the size of a distributed app.

### [INFO] missing_not_constraint (fnd_4f3a48ee5dde)

Claim clm_083cda9d9328_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_083cda9d9328_ollama_intern_13`
- **Source IDs:** `src_083cda9d9328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Xcode can automatically manage signing for distributed apps.

### [INFO] missing_not_constraint (fnd_c63ed58ece2a)

Claim clm_083cda9d9328_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_083cda9d9328_ollama_intern_21`
- **Source IDs:** `src_083cda9d9328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The organizer in Xcode allows review of beta tester feedback.

### [INFO] missing_not_constraint (fnd_9a41764bd3c6)

Claim clm_083cda9d9328_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_083cda9d9328_ollama_intern_22`
- **Source IDs:** `src_083cda9d9328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The App Store distribution facilitates viewing metrics reports in the organizer.

### [INFO] missing_not_constraint (fnd_2d7855bbafbe)

Claim clm_5fda19aa5cd8_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_4`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Package names for app files are unique and permanent on Google Play.

### [INFO] missing_not_constraint (fnd_a8e5194c468f)

Claim clm_5fda19aa5cd8_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_5`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Apps on Google Play have size limits based on the maximum compressed APK size.

### [INFO] missing_not_constraint (fnd_9c12e9de8c84)

Claim clm_5fda19aa5cd8_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_6`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Play Console uses gzip to estimate the actual download size of apps.

### [INFO] missing_not_constraint (fnd_fe2143f8ba25)

Claim clm_5fda19aa5cd8_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_7`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The maximum compressed download size of APKs for one device is 200MB.

### [INFO] missing_not_constraint (fnd_4dda79bee2b1)

Claim clm_5fda19aa5cd8_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_12`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can choose a category and add tags to your apps or game in Play Console.

### [INFO] missing_not_constraint (fnd_f61ef4e3e9dd)

Claim clm_5fda19aa5cd8_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_13`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Your contact information is available to users on your app's store listing.

### [INFO] missing_not_constraint (fnd_e165d57da1b7)

Claim clm_5fda19aa5cd8_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_15`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To distribute a watch face on Google Play, you need to create it first.

### [INFO] missing_not_constraint (fnd_c2f5c9926896)

Claim clm_5fda19aa5cd8_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5fda19aa5cd8_ollama_intern_16`
- **Source IDs:** `src_5fda19aa5cd8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can request more time to complete a policy declaration for your app.

### [INFO] missing_not_constraint (fnd_c4ccbac6cfef)

Claim clm_5670dbff3e4d_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_2`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Android developers can create AI-optimized apps using Gemini APIs and more.

### [INFO] missing_not_constraint (fnd_f01c38776be7)

Claim clm_5670dbff3e4d_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_4`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Android Studio provides guidance on publishing Android apps.

### [INFO] missing_not_constraint (fnd_5ab4aaf8471a)

Claim clm_5670dbff3e4d_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_5`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The documentation explores options for builds, distribution, and optimization.

### [INFO] missing_not_constraint (fnd_89f2143d13b6)

Claim clm_5670dbff3e4d_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_6`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Android Studio guides users through principles of workflows.

### [INFO] missing_not_constraint (fnd_9ed309262150)

Claim clm_5670dbff3e4d_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_9`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The preparation stage involves compiling a version of the application.

### [INFO] missing_not_constraint (fnd_0b78e6fa4189)

Claim clm_5670dbff3e4d_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_11`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This page presents the process of preparing an Android app for publication.

### [INFO] missing_not_constraint (fnd_795984f3bcc3)

Claim clm_5670dbff3e4d_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_14`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Update application resources to publish it.

### [INFO] missing_not_constraint (fnd_d4b2c4a75250)

Claim clm_5670dbff3e4d_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5670dbff3e4d_ollama_intern_16`
- **Source IDs:** `src_5670dbff3e4d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Prepare servers and services that your app depends on.

### [INFO] missing_not_constraint (fnd_5b3c979b47e8)

Claim clm_0974a54becd4_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0974a54becd4_ollama_intern_10`
- **Source IDs:** `src_0974a54becd4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: WebAssembly enables C/C++ code to run in web browsers.

### [INFO] missing_not_constraint (fnd_00578d6f9ca4)

Claim clm_0974a54becd4_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0974a54becd4_ollama_intern_11`
- **Source IDs:** `src_0974a54becd4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: WebAssembly also supports Rust as a compilation source.

### [INFO] missing_not_constraint (fnd_a42c5928553b)

Claim clm_0974a54becd4_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_0974a54becd4_ollama_intern_12`
- **Source IDs:** `src_0974a54becd4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: WebAssembly provides a JavaScript API for loading and running WebAssembly code.

### [INFO] missing_not_constraint (fnd_ec6b9ad8d762)

Claim clm_24107f739f88_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_24107f739f88_ollama_intern_5`
- **Source IDs:** `src_24107f739f88`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The <canvas> element is used by both WebGL and the Canvas API for 2D graphics.

### [INFO] missing_not_constraint (fnd_7668a5d34fc6)

Claim clm_24107f739f88_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_24107f739f88_ollama_intern_6`
- **Source IDs:** `src_24107f739f88`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Pixi.js is a fast, open-source 2D WebGL renderer.

### [INFO] missing_not_constraint (fnd_15b1e0995255)

Claim clm_24107f739f88_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_24107f739f88_ollama_intern_9`
- **Source IDs:** `src_24107f739f88`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: webgl-lint will help find errors in your WebGL code and provide useful info.

### [INFO] missing_not_constraint (fnd_81a6a803938a)

Claim clm_b777c089d810_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_9`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exporting the project after following method B causes it to crash when executed.

### [WARN] source_quality_problem (fnd_e7072973fb21)

Claim clm_b777c089d810_ollama_intern_9 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_9`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_e15bcd38b2da)

Claim clm_b777c089d810_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_10`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Godot Editor version 4.7-beta1 crashes during the iOS export process.

### [WARN] source_quality_problem (fnd_6040b7123ab3)

Claim clm_b777c089d810_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_10`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_4468dbd5516b)

Claim clm_b777c089d810_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_11`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The iOS export process is affected when the platform plugin is enabled.

### [WARN] source_quality_problem (fnd_7e131021ae0e)

Claim clm_b777c089d810_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_11`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_082e994236f9)

Claim clm_b777c089d810_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_12`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The Platformer demo project works on iOS but crashes during export to visionOS.

### [WARN] source_quality_problem (fnd_282c753392c5)

Claim clm_b777c089d810_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_12`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fa5e2f22650e)

Claim clm_b777c089d810_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_20`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot Editor version 4.7-beta1 crashes during iOS export process.

### [WARN] source_quality_problem (fnd_0c8108575f73)

Claim clm_b777c089d810_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_20`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_26d3114eac94)

Claim clm_b777c089d810_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_21`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The crash occurs when exporting an app with the platform plugin enabled.

### [WARN] source_quality_problem (fnd_a266755b4cf8)

Claim clm_b777c089d810_ollama_intern_21 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_21`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_cd44ae6937fc)

Claim clm_b777c089d810_ollama_intern_29 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_29`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_db311174cae8)

Claim clm_b777c089d810_ollama_intern_30 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_30`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [WARN] source_quality_problem (fnd_5057baaa387f)

Claim clm_b777c089d810_ollama_intern_36 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_b777c089d810_ollama_intern_36`
- **Source IDs:** `src_b777c089d810`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_8ef3546db559)

Claim clm_e17170a435d3_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_8`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot users can set a key password for Android export.

### [WARN] source_quality_problem (fnd_fea68afd2084)

Claim clm_e17170a435d3_ollama_intern_8 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_8`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_466c8613729e)

Claim clm_e17170a435d3_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_9`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot users can specify JDK path for Android export.

### [WARN] source_quality_problem (fnd_c9b13e1c4c70)

Claim clm_e17170a435d3_ollama_intern_9 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_9`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fb91291ebb1c)

Claim clm_e17170a435d3_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_10`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot users can enable VRAM compression for Android export.

### [WARN] source_quality_problem (fnd_2b43987c8486)

Claim clm_e17170a435d3_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_10`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_8b476fab9d07)

Claim clm_e17170a435d3_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_11`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot users can specify custom export templates for Android.

### [WARN] source_quality_problem (fnd_902d375701c2)

Claim clm_e17170a435d3_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_11`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_86d77ddfbc3a)

Claim clm_e17170a435d3_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_12`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot users can export unsigned HAP files for Android.

### [WARN] source_quality_problem (fnd_8a09edb098ae)

Claim clm_e17170a435d3_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_12`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_b45b87cab19a)

Claim clm_e17170a435d3_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_15`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The release APK file generated by Godot is larger than the debug one.

### [WARN] source_quality_problem (fnd_b7a4f46296e0)

Claim clm_e17170a435d3_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_15`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_5937b981cbad)

Claim clm_e17170a435d3_ollama_intern_24 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_24`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Godot freezes completely while building an AAB file.

### [INFO] missing_not_constraint (fnd_b3a9d9d09fba)

Claim clm_e17170a435d3_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_26`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue occurs specifically with an emulator, in this case BlueStack.

### [WARN] source_quality_problem (fnd_7b32297b745e)

Claim clm_e17170a435d3_ollama_intern_26 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_26`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_9cce2995d5de)

Claim clm_e17170a435d3_ollama_intern_27 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_27`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The warning appears when using GLES3, but disappears when changed to GLES2.

### [WARN] source_quality_problem (fnd_024ae8f7ce63)

Claim clm_e17170a435d3_ollama_intern_27 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_e17170a435d3_ollama_intern_27`
- **Source IDs:** `src_e17170a435d3`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_cf160ccca8cb)

Claim clm_7e04a97ea278_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_2`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The error occurs even with debug builds.

### [INFO] missing_not_constraint (fnd_9848b55a2f5a)

Claim clm_7e04a97ea278_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_10`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue persists with both transparent and non-transparent textures.

### [WARN] source_quality_problem (fnd_fd9540b5e6a2)

Claim clm_7e04a97ea278_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_10`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_df776375a295)

Claim clm_7e04a97ea278_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_13`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: LinkError occurs due to 'godot_webxr_is_session_supported' not being a Function.

### [WARN] source_quality_problem (fnd_a0240edb0a04)

Claim clm_7e04a97ea278_ollama_intern_13 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_13`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_1697e8d0236b)

Claim clm_7e04a97ea278_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_14`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Aborted error occurs due to premature call to '_emscripten_stack_set_limits'.

### [WARN] source_quality_problem (fnd_d8c76997b422)

Claim clm_7e04a97ea278_ollama_intern_14 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_14`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_f84fee1f1533)

Claim clm_7e04a97ea278_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_16`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The issue occurs specifically during web export, not other types of exports.

### [WARN] source_quality_problem (fnd_c53fa27e3136)

Claim clm_7e04a97ea278_ollama_intern_16 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_16`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_c70873b89aba)

Claim clm_7e04a97ea278_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_17`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The memory access out of bounds errors occur during release builds.

### [WARN] source_quality_problem (fnd_4f26272b3bd7)

Claim clm_7e04a97ea278_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_17`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_fe22e6d17c29)

Claim clm_7e04a97ea278_ollama_intern_25 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_25`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Web export issues are not limited to Godot 3, but also affect Godot 4.6.

### [INFO] missing_not_constraint (fnd_eae8d3653f38)

Claim clm_7e04a97ea278_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_26`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Web workers are the equivalent of threads for the web platform.

### [WARN] source_quality_problem (fnd_4c22c23327ec)

Claim clm_7e04a97ea278_ollama_intern_26 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_26`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_2381179a262d)

Claim clm_7e04a97ea278_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_33`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Upgrading from Godot 4.5.1 to 4.6 can cause memory access out of bounds errors.

### [WARN] source_quality_problem (fnd_0ae4f3a8f63d)

Claim clm_7e04a97ea278_ollama_intern_33 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_7e04a97ea278_ollama_intern_33`
- **Source IDs:** `src_7e04a97ea278`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

## Claim review decisions

### [NEEDS-SCOPE-REPAIR] `clm_37ec19efa9ba_ollama_intern_2`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_ef00be896a97`, `fnd_a741fa81998a`.

### [ACCEPTED] `clm_37ec19efa9ba_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_0597a4801af3`.

### [ACCEPTED] `clm_37ec19efa9ba_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_8cf1a24dc6cd`.

### [ACCEPTED] `clm_37ec19efa9ba_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_92a920e8e924`.

### [NEEDS-SCOPE-REPAIR] `clm_d726c169567d_ollama_intern_1`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_7cc2fe9c3caa`, `fnd_cfe39503dc86`.

### [ACCEPTED] `clm_d726c169567d_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_366ce7040aab`.

### [ACCEPTED] `clm_d726c169567d_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_61bb6b1ea06f`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_e2fa60ef5a03`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_e61520a61a59`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_6f4be1511c6c`, `fnd_786d02552c32`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_9b385a008b56`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_24`

Only info-level findings; accepted.

Cites findings: `fnd_5a239c9c7ce8`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_25`

Only info-level findings; accepted.

Cites findings: `fnd_db3a7bfea0a3`.

### [ACCEPTED] `clm_d63ce314a50f_ollama_intern_30`

Only info-level findings; accepted.

Cites findings: `fnd_c04348deae01`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_dcd33f4fa3d2`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_66e6722f9f44`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_9658ae534c32`, `fnd_338bf14d583c`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_0ec2423c7a60`.

### [ACCEPTED] `clm_4c6c14f4f6fa_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_7b859102e9b8`.

### [NEEDS-SCOPE-REPAIR] `clm_b2e50dff76fc_ollama_intern_4`

Findings: scope_widening (warn).

Cites findings: `fnd_f1039480ae2d`, `fnd_0f50a1d71387`.

### [NEEDS-SCOPE-REPAIR] `clm_ba5aaca1a207_ollama_intern_1`

Findings: scope_widening (warn).

Cites findings: `fnd_3f9931a5e9c1`, `fnd_b48afa550ac4`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_153e710f8e45`, `fnd_a06384a5229e`.

### [NEEDS-SCOPE-REPAIR] `clm_ba5aaca1a207_ollama_intern_11`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_d4722536e131`, `fnd_013139a6b91d`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_842cc7f5e37a`, `fnd_bf9b05950e9f`.

### [NEEDS-SCOPE-REPAIR] `clm_ba5aaca1a207_ollama_intern_55`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_07c9532bc844`, `fnd_184772152dd5`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_104`

Only info-level findings; accepted.

Cites findings: `fnd_52ff0fc73af5`, `fnd_acf5dd0c3f55`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_111`

Only info-level findings; accepted.

Cites findings: `fnd_531d8a766fe5`, `fnd_a4695fd351b7`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_115`

Only info-level findings; accepted.

Cites findings: `fnd_5a7aa00db761`, `fnd_edc82a7b2f6d`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_120`

Only info-level findings; accepted.

Cites findings: `fnd_6dcf95698931`, `fnd_80545016e208`.

### [ACCEPTED] `clm_ba5aaca1a207_ollama_intern_121`

Only info-level findings; accepted.

Cites findings: `fnd_f92072cdc2d1`, `fnd_cecb5b99871f`.

### [ACCEPTED] `clm_083cda9d9328_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_f0c8b5182111`.

### [ACCEPTED] `clm_083cda9d9328_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_8fa461091acb`.

### [ACCEPTED] `clm_083cda9d9328_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_4f3a48ee5dde`.

### [ACCEPTED] `clm_083cda9d9328_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_c63ed58ece2a`.

### [ACCEPTED] `clm_083cda9d9328_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_9a41764bd3c6`.

### [NEEDS-SCOPE-REPAIR] `clm_5fda19aa5cd8_ollama_intern_4`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_74fa76575ab3`, `fnd_2d7855bbafbe`.

### [NEEDS-HUMAN-REVIEW] `clm_5fda19aa5cd8_ollama_intern_5`

Findings: recommendation_exceeds_evidence (warn).

Cites findings: `fnd_20a2d9c4d301`, `fnd_a8e5194c468f`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_629ff1c2ba1a`, `fnd_9c12e9de8c84`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_fe2143f8ba25`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_4dda79bee2b1`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_f61ef4e3e9dd`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_e165d57da1b7`.

### [ACCEPTED] `clm_5fda19aa5cd8_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_c2f5c9926896`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_c4ccbac6cfef`.

### [NEEDS-SCOPE-REPAIR] `clm_5670dbff3e4d_ollama_intern_4`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_853e7d3771af`, `fnd_f01c38776be7`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_5ab4aaf8471a`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_89f2143d13b6`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_9ed309262150`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_27bf1805f638`, `fnd_0b78e6fa4189`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_795984f3bcc3`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_d4b2c4a75250`.

### [ACCEPTED] `clm_5670dbff3e4d_ollama_intern_17`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_0974a54becd4_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_5b3c979b47e8`.

### [ACCEPTED] `clm_0974a54becd4_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_00578d6f9ca4`.

### [ACCEPTED] `clm_0974a54becd4_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_a42c5928553b`.

### [ACCEPTED] `clm_24107f739f88_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_ec6b9ad8d762`.

### [ACCEPTED] `clm_24107f739f88_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_7668a5d34fc6`.

### [ACCEPTED] `clm_24107f739f88_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_15b1e0995255`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_9`

Findings: source_quality_problem (warn).

Cites findings: `fnd_81a6a803938a`, `fnd_e7072973fb21`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_e50f80a6bc73`, `fnd_e15bcd38b2da`, `fnd_6040b7123ab3`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4468dbd5516b`, `fnd_7e131021ae0e`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_12`

Findings: source_quality_problem (warn).

Cites findings: `fnd_082e994236f9`, `fnd_282c753392c5`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_d30b09efb6b0`, `fnd_fa5e2f22650e`, `fnd_0c8108575f73`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_21`

Findings: source_quality_problem (warn).

Cites findings: `fnd_26d3114eac94`, `fnd_a266755b4cf8`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_29`

Findings: source_quality_problem (warn).

Cites findings: `fnd_cd44ae6937fc`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_30`

Findings: source_quality_problem (warn).

Cites findings: `fnd_db311174cae8`.

### [NEEDS-SOURCE-REPAIR] `clm_b777c089d810_ollama_intern_36`

Findings: source_quality_problem (warn).

Cites findings: `fnd_5057baaa387f`.

### [ACCEPTED] `clm_b777c089d810_ollama_intern_37`

No findings recorded for this claim by the current reviewer.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_8`

Findings: source_quality_problem (warn).

Cites findings: `fnd_8ef3546db559`, `fnd_fea68afd2084`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_9`

Findings: source_quality_problem (warn).

Cites findings: `fnd_466c8613729e`, `fnd_c9b13e1c4c70`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_10`

Findings: recommendation_exceeds_evidence (warn); source_quality_problem (warn).

Cites findings: `fnd_d0acb7c5714c`, `fnd_fb91291ebb1c`, `fnd_2b43987c8486`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_8b476fab9d07`, `fnd_902d375701c2`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_12`

Findings: source_quality_problem (warn).

Cites findings: `fnd_86d77ddfbc3a`, `fnd_8a09edb098ae`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_15`

Findings: scope_widening (warn); source_quality_problem (warn).

Cites findings: `fnd_d4b13acee54b`, `fnd_f60ac479088d`, `fnd_b45b87cab19a`, `fnd_b7a4f46296e0`.

### [ACCEPTED] `clm_e17170a435d3_ollama_intern_24`

Only info-level findings; accepted.

Cites findings: `fnd_21814c23b24a`, `fnd_5937b981cbad`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_26`

Findings: source_quality_problem (warn).

Cites findings: `fnd_afab32b4ea7c`, `fnd_b3a9d9d09fba`, `fnd_7b32297b745e`.

### [NEEDS-SOURCE-REPAIR] `clm_e17170a435d3_ollama_intern_27`

Findings: source_quality_problem (warn).

Cites findings: `fnd_aca46c1cacad`, `fnd_9cce2995d5de`, `fnd_024ae8f7ce63`.

### [ACCEPTED] `clm_7e04a97ea278_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_cf160ccca8cb`.

### [ACCEPTED] `clm_7e04a97ea278_ollama_intern_5`

No findings recorded for this claim by the current reviewer.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_9848b55a2f5a`, `fnd_fd9540b5e6a2`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_13`

Findings: source_quality_problem (warn).

Cites findings: `fnd_df776375a295`, `fnd_a0240edb0a04`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_14`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1697e8d0236b`, `fnd_d8c76997b422`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_16`

Findings: source_quality_problem (warn).

Cites findings: `fnd_f84fee1f1533`, `fnd_c53fa27e3136`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_17`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c70873b89aba`, `fnd_4f26272b3bd7`.

### [NEEDS-SCOPE-REPAIR] `clm_7e04a97ea278_ollama_intern_25`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_a1d506025855`, `fnd_fe22e6d17c29`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_26`

Findings: source_quality_problem (warn).

Cites findings: `fnd_889ba1dab4fb`, `fnd_eae8d3653f38`, `fnd_4c22c23327ec`.

### [NEEDS-SOURCE-REPAIR] `clm_7e04a97ea278_ollama_intern_33`

Findings: source_quality_problem (warn).

Cites findings: `fnd_2381179a262d`, `fnd_0ae4f3a8f63d`.
