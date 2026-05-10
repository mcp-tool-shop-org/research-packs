# Final Report

**Pack:** What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?
**Pack ID:** `63d430e311c1`
**Decision question:** _(no decision recorded in research.yaml)_

> **Guardrails (locked area):**
> - This file cannot be considered complete until the freeze step (Link 12) verifies citation coverage and claim-id existence.
> - Until then, treat this as a draft. Do not promote it externally.
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**

## Summary

Godot narrative-game build durability is a layered release-state problem. Engine/export-template versioning, scene/resource serialization, save-state migration, scripting/runtime contracts, desktop platform requirements, mobile/web gatekeepers, and distribution surfaces all have separate failure and repair boundaries. Successful engine export is not a playable release.

This pack spans seven sections and 276 accepted claims across the full release surface of a Godot narrative game. The evidence base covers the engine's own documentation (Godot Foundation RSTs), platform-vendor documentation (Apple, Microsoft, Google), community integration tooling (GodotSteam, SaveState Lite, ForgeJSONGD), and issue evidence from GitHub searches. It does not cover Steamworks Partner SDK content, Nintendo/Sony/Microsoft console SDKs, or any layer that is JavaScript-rendered without a plain-text alternate — those surfaces are documented as inaccessible in the closed-surface ledger (see `audits/source-diversity-gaps.md`).

**Waiver disclosure:** Two waivers apply to Section 01 (`min_independent_publishers` and `primary_sources_required`) and one applies to Section 03 (`primary_sources_required`). All three are `gate.source_floor` waivers documented in full in the Waivers section below.

## Body

### Layer 1 — Engine versions and export templates

Godot's release policy defines a `major` version increment as a signal for major compatibility breakages [claim:clm_6f54a167d232_ollama_intern_3]. The foundation recommends using Godot 4.x for new projects [claim:clm_6f54a167d232_ollama_intern_6], and Godot 4 carries a longer support period than the 3.x series [claim:clm_71469ccfe316_ollama_intern_3]. Upgrading software while working on a project is explicitly acknowledged as risky [claim:clm_6f54a167d232_ollama_intern_8]. Godot publishes maintenance releases that are compatible with previous releases in the same minor series [claim:clm_1e4fa1dde3af_ollama_intern_4].

The 3.x→4.x transition required manual replacement of many API identifiers. Some renames are caught by the script editor; others require manual search [claim:clm_71469ccfe316_ollama_intern_16]. Concrete breakages confirmed by the accepted evidence include: `AudioServer.device` renamed to `output_device` [claim:clm_71469ccfe316_ollama_intern_22], the `rotation_degrees` property replaced by `rotation` [claim:clm_71469ccfe316_ollama_intern_33], `Camera2D.zoom` behavior inverted [claim:clm_71469ccfe316_ollama_intern_37], `Node.remove_and_skip()` removed entirely [claim:clm_71469ccfe316_ollama_intern_38], and color constant names now uppercase with underscores [claim:clm_71469ccfe316_ollama_intern_23].

On the export side, Godot provides export presets per platform [claim:clm_4c6c14f4f6fa_ollama_intern_6] with five distinct modes for exporting project resources [claim:clm_4c6c14f4f6fa_ollama_intern_7]. PCK is the default and recommended format for most Godot exports [claim:clm_4c6c14f4f6fa_ollama_intern_14]. Feature tags are queryable at runtime via the singleton API [claim:clm_6e935dbe9826_ollama_intern_3] and can customize the build process via `ExportPlugin` [claim:clm_6e935dbe9826_ollama_intern_10]. Godot also supports DLC-style distribution via extra package files [claim:clm_4c6c14f4f6fa_ollama_intern_4], and resource packs can be loaded at runtime using `ProjectSettings` [claim:clm_6ee62ab47888_ollama_intern_11].

The durability risk at this layer: an engine upgrade mid-project requires auditing every API rename, reviewing export preset compatibility, and re-testing each platform target. The accepted evidence from Godot Foundation documentation is authoritative for engine behavior; two waivers cover the structural concentration of that authority in a single publisher.

### Layer 2 — Scene and resource serialization

`Resource` is the base class for all Godot-specific resource types [claim:clm_3bf41f24d47a_ollama_intern_2]. Resources are reference-counted and freed when no longer in use [claim:clm_3bf41f24d47a_ollama_intern_3]. Resources can be nested within other resources and saved on disk [claim:clm_3bf41f24d47a_ollama_intern_4]. When a sub-resource has `duplicate: true`, each scene instance receives its own copy; changing this setting at runtime does not affect already-created duplicates [claim:clm_3bf41f24d47a_ollama_intern_9] [claim:clm_3bf41f24d47a_ollama_intern_10]. `Resource.duplicate(deep=true)` produces a deep copy of all nested export properties [claim:clm_3bf41f24d47a_ollama_intern_15].

`ResourceLoader` provides an `exists()` check to confirm whether a resource exists at a given path before loading [claim:clm_ef84790b4914_ollama_intern_11]. `ResourceSaver` manages the write side: `FLAG_BUNDLE_RESOURCES` bundles sub-resources when saving [claim:clm_f826c053d744_ollama_intern_6], and `FLAG_REPLACE_SUBRESOURCE_PATHS` transfers path ownership to saved subresources [claim:clm_f826c053d744_ollama_intern_9]. The `set_uid` method associates a UID with a resource path [claim:clm_f826c053d744_ollama_intern_14], providing a stable identifier when file paths change.

Third-party tooling extends the foundation: `SaveState Lite` supports forward merge for older save files [claim:clm_f6ad03378646_ollama_intern_4] and centralizes atomic commits for Godot projects [claim:clm_f6ad03378646_ollama_intern_6]. `ForgeJSONGD` provides JSON comparison and manipulation [claim:clm_d49f293c82bf_ollama_intern_4] with C# interoperability [claim:clm_d49f293c82bf_ollama_intern_7].

The durability risk at this layer: path-based resource references break when files are moved or renamed. UID assignments migrate references, but coherence requires consistent schema across every scene, resource, and import. The reference graph — not just the individual APIs — is the load-bearing structure.

### Layer 3 — Save-state and player-state durability

`FileAccess` provides the primitive file I/O layer for Godot [claim:clm_ec39871fb14e_ollama_intern_1]. Files are automatically closed only if the process exits "normally" [claim:clm_ec39871fb14e_ollama_intern_3]; abnormal exits can leave files open. The class uses the same decoding mechanics as `bytes_to_var()` for stored variants [claim:clm_ec39871fb14e_ollama_intern_50]. Critically, deserialized objects from untrusted sources can pose security threats [claim:clm_ec39871fb14e_ollama_intern_51]; any save file that crosses machine boundaries must be treated with this constraint in mind.

`ConfigFile` provides an INI-style persistence layer [claim:clm_d02146dfcea5_ollama_intern_2] with an important constraint: section and property names cannot contain spaces [claim:clm_d02146dfcea5_ollama_intern_6]. `ConfigFile` objects can be saved to and parsed from a file [claim:clm_d02146dfcea5_ollama_intern_4]. `JSON.stringify()` converts any data type to a JSON string [claim:clm_a6a330af5a09_ollama_intern_2], providing the serialization primitive for JSON-based save formats.

Third-party tooling adds the schema-migration layer the foundation APIs do not provide. `SaveState Lite` supports forward merge for older files [claim:clm_f6ad03378646_ollama_intern_4] — the critical capability for games that must migrate existing player saves after a schema change — and provides atomic commits [claim:clm_f6ad03378646_ollama_intern_6]. An ISaveable-interface plugin extends this with encrypted saves [claim:clm_f6badbefe774_ollama_intern_3] [claim:clm_f6badbefe774_ollama_intern_12], per-node save/load modular contracts [claim:clm_f6badbefe774_ollama_intern_4], and audio-setting persistence [claim:clm_f6badbefe774_ollama_intern_9].

The durability risk at this layer: the foundation save APIs provide primitives, not schema migration. A game that stores player state must implement its own versioned migration path or depend on a library that does. This is a developer-owned discipline; the engine does not absorb it.

### Layer 4 — Scripting runtime contracts

GDScript provides a small runtime footprint [claim:clm_33eded38b390_ollama_intern_2] with dynamic typing and duck typing as core design properties [claim:clm_33eded38b390_ollama_intern_18] [claim:clm_33eded38b390_ollama_intern_17]. The `@export` annotation and variants (`@export_range`, `@export_custom`, `@export_enum`) expose properties to the editor [claim:clm_04c541af2502_ollama_intern_2] [claim:clm_04c541af2502_ollama_intern_7] [claim:clm_04c541af2502_ollama_intern_21]. The `await` keyword handles signal and coroutine waiting [claim:clm_169fec56d321_ollama_intern_13]. Classes have an implicit constructor always called; the explicit constructor is the `_init` function [claim:clm_169fec56d321_ollama_intern_105] [claim:clm_169fec56d321_ollama_intern_109]. `free()` and `queue_free()` delete a node and all of its children recursively [claim:clm_169fec56d321_ollama_intern_115].

C# introduces a separate external toolchain dependency: Godot does not bundle the tools required to build C# projects [claim:clm_a9fd72b46944_ollama_intern_3]. C# strings use UTF-16 encoding while Godot Strings use UTF-32 [claim:clm_e3948fcd1578_ollama_intern_13], introducing a marshalling boundary. The `Position` property requires native interop calls that can affect performance; assigning to a local variable is the mitigation [claim:clm_a9fd72b46944_ollama_intern_14] [claim:clm_a9fd72b46944_ollama_intern_15]. Godot automatically downloads and sets up newly added NuGet packages [claim:clm_a9fd72b46944_ollama_intern_18]. The C# API uses PascalCase rather than snake_case; methods like `get_rotation()` map to properties like `Rotation` [claim:clm_a9fd72b46944_ollama_intern_12] [claim:clm_e3948fcd1578_ollama_intern_23].

GDScript-C# interoperability is confirmed: C# nodes can be instantiated from GDScript [claim:clm_d5da902c1965_ollama_intern_3], C# fields are accessible from GDScript [claim:clm_d5da902c1965_ollama_intern_4], and methods can be called bidirectionally — C# from GDScript [claim:clm_d5da902c1965_ollama_intern_8] and GDScript from C# via `GodotObject.Call()` [claim:clm_d5da902c1965_ollama_intern_9]. GDExtension provides a dynamic fallback configuration system [claim:clm_ad0801f16070_ollama_intern_10], but the GDExtension library file cannot be loaded from a folder separate from the Godot executable [claim:clm_0cf4f6250555_ollama_intern_2] — a binary-placement constraint that affects deployment.

The durability risk at this layer is multi-axis: GDScript API renames accumulate across major engine versions [claim:clm_71469ccfe316_ollama_intern_16]; C# requires an external toolchain that is not engine-bundled [claim:clm_a9fd72b46944_ollama_intern_3]; C# and GDScript share a UTF-16/UTF-32 encoding boundary [claim:clm_e3948fcd1578_ollama_intern_13]; GDExtension has a binary-placement deployment constraint [claim:clm_0cf4f6250555_ollama_intern_2]. Each scripting path has a distinct failure surface.

### Layer 5 — Desktop platform export

On macOS, the operating system runs only applications that are signed and notarized by default [claim:clm_03cb99fe6df9_ollama_intern_6]. Distribution via the App Store additionally requires enabling App Sandbox [claim:clm_03cb99fe6df9_ollama_intern_19]. The exported `.app` bundle supports both Intel x86_64 and ARM64 architectures [claim:clm_03cb99fe6df9_ollama_intern_2]. Building via OSXCross does not produce a signed binary; ad-hoc signing must be applied separately for the app to run on macOS [claim:clm_5b703b620109_ollama_intern_8] [claim:clm_5b703b620109_ollama_intern_10]. Custom entitlements can be provided to override defaults [claim:clm_03cb99fe6df9_ollama_intern_21]. Apple provides guidance on resolving common notarization issues [claim:clm_c3216b0c8944_ollama_intern_19].

On Windows, MSIX package signing is required for deployment [claim:clm_ef2f01e1f840_ollama_intern_1] and ensures package authenticity and integrity [claim:clm_ef2f01e1f840_ollama_intern_13]. `SignTool` is the signing tool; it requires either `/t` or `/tr` for time-stamping [claim:clm_d7289e5beb6d_ollama_intern_18] and returns a zero exit code on success [claim:clm_d7289e5beb6d_ollama_intern_23]. Windows export also supports PCK file embedding, icon customization, and encryption key configuration [claim:clm_1ceb96fdb33a_ollama_intern_7] [claim:clm_1ceb96fdb33a_ollama_intern_8] [claim:clm_1ceb96fdb33a_ollama_intern_9].

Linux export is supported directly from the Godot editor [claim:clm_7d0fca124716_ollama_intern_1].

The durability risk at this layer: code signing is a platform-gated requirement. macOS notarization is an Apple review process; Windows MSIX signing requires a valid certificate. Both certificates expire. Renewal is a recurring operational cost that is not tracked by the engine.

### Layer 6 — Mobile and web export

Android export requires OpenJDK 17 [claim:clm_d726c169567d_ollama_intern_3]; a list of Android export environment variables is available in the Godot editor [claim:clm_d726c169567d_ollama_intern_15]. Not setting up `JAVA_HOME` causes APK signing failures [claim:clm_639902f06da8_ollama_intern_12]; running with `--verbose` helps diagnose these failures [claim:clm_639902f06da8_ollama_intern_11]. Godot has a known issue where it freezes completely while building an AAB file [claim:clm_e17170a435d3_ollama_intern_24]. Switching thread modes after the initial export can cause errors in subsequent exports [claim:clm_7e04a97ea278_ollama_intern_5].

iOS export requires post-export Xcode steps: selecting the project in Xcode's navigator [claim:clm_37ec19efa9ba_ollama_intern_6], deleting the exported PCK file from the Xcode project [claim:clm_37ec19efa9ba_ollama_intern_7], and optionally enabling iOS-specific plugins [claim:clm_37ec19efa9ba_ollama_intern_8]. Xcode can automatically manage signing for distributed apps [claim:clm_083cda9d9328_ollama_intern_13].

Web export in Godot 4 targets WebGL 2.0 [claim:clm_d63ce314a50f_ollama_intern_6]. **C# projects using Godot 4 cannot be exported to the web currently** [claim:clm_d63ce314a50f_ollama_intern_3]. HTML5 games on itch.io accept payments only as donations [claim:clm_57341c85596c_ollama_intern_8]. WebAssembly supports C/C++ and Rust as compilation sources [claim:clm_0974a54becd4_ollama_intern_11].

App Store submission requires complete and accurate app information [claim:clm_ba5aaca1a207_ollama_intern_10] and content that is not offensive or harmful [claim:clm_ba5aaca1a207_ollama_intern_12]. Play Console estimates APK download size using gzip [claim:clm_5fda19aa5cd8_ollama_intern_6]; the maximum compressed download size for one device is 200MB [claim:clm_5fda19aa5cd8_ollama_intern_7]. A limited number of registered devices can be used for distributing a beta app [claim:clm_083cda9d9328_ollama_intern_10].

The durability risk at this layer spans five axes: toolchain versioning (OpenJDK version dependency), post-export platform steps (Xcode, signing workflows), browser runtime limitations (the C# web export gap), store policy compliance (App Store review guidelines, Play Console policy declarations), and known active engine issues during build.

### Layer 7 — Distribution surfaces

On itch.io, project pages are private by default [claim:clm_7d03db002fc2_ollama_intern_9] and must be explicitly set to `Public` for publishing [claim:clm_7d03db002fc2_ollama_intern_10]. The platform supports HTML5, Flash, Java, and Unity embeds [claim:clm_7d03db002fc2_ollama_intern_4] and accepts file uploads via direct upload, Dropbox, or external links [claim:clm_7d03db002fc2_ollama_intern_5]. A free itch.io account suffices to create a project page [claim:clm_7d03db002fc2_ollama_intern_2]. Creators can set pricing, offer discounts, and enable Early Access models [claim:clm_fc44452fd969_ollama_intern_7] [claim:clm_fc44452fd969_ollama_intern_8] [claim:clm_fc44452fd969_ollama_intern_10]. Download keys can be generated singularly or in bulk [claim:clm_ce610c7a7992_ollama_intern_3]. HTML5 games on itch.io accept payments only as donations [claim:clm_57341c85596c_ollama_intern_8].

For Steam distribution, GodotSteam is the community integration tool for connecting Godot projects to the Steamworks API. Pre-compiled versions of GodotSteam are available from Codeberg [claim:clm_8e8c16fd06c4_ollama_intern_5]. Contributing to GodotSteam is done via pull-requests and donations [claim:clm_8e8c16fd06c4_ollama_intern_4].

**The public verification ceiling.** All of Valve's web presence — both Steamworks Partner documentation pages and the public-facing store pages — returns HTTP 200 but is client-side rendered via jQuery with zero extractable prose. No Markdown API alternate is known (contrast: Apple's developer documentation has an alternate API at `docs.developer.apple.com`). This is documented in the closed-surface ledger in `audits/source-diversity-gaps.md`. The research-os v0.1 fetch model cannot verify any Steamworks SDK requirement. Nintendo, Sony, and Microsoft console SDK portals are either login-gated or JavaScript-rendered and are absent from the accepted claim set. This is the structural ceiling: the boundary of what this research base can honestly assert about distribution-layer durability is drawn here, not at the partner login gate.

### What the sections share

Three patterns run across all seven layers:

**The engine's own documentation is necessary but not sufficient.** Sections 01–04 cover the engine's behavior with authority from Godot Foundation sources. Sections 05–07 show that store policy, platform signing, toolchain management, and distribution mechanics live entirely outside the engine's documentation surface. A release-durability model needs both.

**Every layer has its own failure-and-repair axis.** An engine upgrade breaks layer 1; a path rename breaks layer 2; a schema change without a migration path breaks layer 3; a C# toolchain upgrade breaks layer 4; a signing certificate expiry breaks layer 5; a Play Console policy change breaks layer 6; a Steam SDK update is not publicly verifiable and cannot be tracked at layer 7. Each axis is independently breakable and independently repaired.

**Developer-side discipline carries each layer.** The engine provides APIs, export presets, and toolchain integrations; it does not enforce migration discipline for save files, certificate renewal schedules, or itch.io publishing-state reviews. Each layer places explicit responsibility on the developer or operator.

### The 7 must-carry findings

**Finding 1 — Export success is not platform acceptance.** Building an exportable binary is a distinct step from distributing it. macOS requires signing and notarization by default [claim:clm_03cb99fe6df9_ollama_intern_6]; App Store distribution additionally requires App Sandbox [claim:clm_03cb99fe6df9_ollama_intern_19]. Windows MSIX deployment requires package signing [claim:clm_ef2f01e1f840_ollama_intern_1]. App Store review requires complete, accurate, non-harmful content [claim:clm_ba5aaca1a207_ollama_intern_10] [claim:clm_ba5aaca1a207_ollama_intern_12]. These are platform-enforced gates that exist outside the Godot export pipeline.

**Finding 2 — Official engine docs are authoritative but not sufficient for real-world release durability.** Godot Foundation documentation covers engine behavior accurately: release policy [claim:clm_6f54a167d232_ollama_intern_6], version compatibility [claim:clm_71469ccfe316_ollama_intern_3], and export mechanics [claim:clm_4c6c14f4f6fa_ollama_intern_7]. But platform signing requirements (Sections 05–06), save-schema migration tooling [claim:clm_f6ad03378646_ollama_intern_4], community integration [claim:clm_8e8c16fd06c4_ollama_intern_5], and distribution mechanics [claim:clm_7d03db002fc2_ollama_intern_10] require sources beyond the foundation's own documentation.

**Finding 3 — Save durability depends on developer-owned schema versioning, not just the file API.** `FileAccess` provides read/write primitives [claim:clm_ec39871fb14e_ollama_intern_1]; `ConfigFile` provides INI-style persistence [claim:clm_d02146dfcea5_ollama_intern_2]; `JSON.stringify()` provides serialization [claim:clm_a6a330af5a09_ollama_intern_2]. None of these APIs performs schema migration across versions. `SaveState Lite`'s forward-merge capability [claim:clm_f6ad03378646_ollama_intern_4] is a third-party tool, not a built-in engine feature. The migration discipline is developer-owned.

**Finding 4 — Scene/resource durability depends on reference graph coherence — imports, resources, PackedScene, and paths.** Resources can be nested and saved on disk [claim:clm_3bf41f24d47a_ollama_intern_4]; `FLAG_REPLACE_SUBRESOURCE_PATHS` supports path migration on save [claim:clm_f826c053d744_ollama_intern_9]; `set_uid` maintains stable identifiers when paths change [claim:clm_f826c053d744_ollama_intern_14]. Moving a resource without updating all references breaks the graph; the APIs provide the tooling, but coherence discipline is developer-managed.

**Finding 5 — Scripting durability spans syntax, runtime semantics, C#/.NET toolchain, and extension compatibility.** GDScript and C# are both supported and interoperable [claim:clm_d5da902c1965_ollama_intern_3] [claim:clm_d5da902c1965_ollama_intern_9]. Their failure modes are distinct: GDScript breaks on API renames [claim:clm_71469ccfe316_ollama_intern_16]; C# requires an external toolchain not bundled by Godot [claim:clm_a9fd72b46944_ollama_intern_3] and carries a UTF-16/UTF-32 encoding boundary [claim:clm_e3948fcd1578_ollama_intern_13]; GDExtension has a binary-placement deployment constraint [claim:clm_0cf4f6250555_ollama_intern_2]. Each scripting path is an independent durability surface.

**Finding 6 — Mobile/web durability spans engine export, store policy, signing, browser runtime, and runtime limitations.** The web export gap is explicit: C# projects using Godot 4 cannot be exported to the web currently [claim:clm_d63ce314a50f_ollama_intern_3]. Android requires OpenJDK 17 [claim:clm_d726c169567d_ollama_intern_3]. The maximum APK compressed size on Play Console is 200MB [claim:clm_5fda19aa5cd8_ollama_intern_7]. iOS requires post-export Xcode steps [claim:clm_37ec19efa9ba_ollama_intern_6] [claim:clm_37ec19efa9ba_ollama_intern_7]. Each mobile/web platform axis is independently breakable.

**Finding 7 — Distribution durability has a public verification ceiling: itch.io and GodotSteam are usable; Steamworks and console SDKs are not text-stable or publicly accessible.** itch.io creator documentation is server-rendered and fully accessible [claim:clm_7d03db002fc2_ollama_intern_1] [claim:clm_fc44452fd969_ollama_intern_7] [claim:clm_ce610c7a7992_ollama_intern_3]. GodotSteam provides integration evidence and is available from Codeberg [claim:clm_8e8c16fd06c4_ollama_intern_5]. Valve's entire web stack returns JavaScript-rendered shells with no extractable prose and no known alternate endpoint. Console portals are login-gated or JavaScript-rendered. This is the structural verification ceiling. See `audits/source-diversity-gaps.md` for the full closed-surface ledger.

### The three-pack parallel

This pack is the third in a pattern. Pack-1 (ComfyUI workflow durability) showed that the workflow JSON is not the workflow — the runnable state is a six-layer bundle including environment, custom nodes, and model files. Pack-2 (XRPL creator-token durability) showed that ledger finality is not the whole creator-token story — the durability bundle includes issuer trust, DEX liquidity, holder behavior, and bridge mechanics. Pack-3 completes the pattern: successful Godot engine export is not a playable release. In all three cases, the platform's advertised primary artifact is a partial artifact. The release-state bundle lives in surrounding layers — environment, policies, signing, distribution mechanics — not in the exported artifact itself.

### Closing

A creator-side control plane that takes this pack's findings seriously would track seven layers independently:

1. Pinned engine version and export template with per-version API-change audit
2. Scene/resource reference graph with UID assignments and path-coherence verification
3. Save-schema version with a forward-migration code path and tested migration logic
4. Scripting runtime version with per-language toolchain requirements (MSBuild for C#, GDExtension binary layout)
5. Desktop signing certificate expiry and notarization status per platform target
6. Store-policy compliance state per mobile/web target (App Store review readiness, Play Console policy declarations, web C# export gap status)
7. Distribution channel health (itch.io publishing state, Steam distribution surface status subject to the public verification ceiling)

A release that passes all seven layers is a durable release. A release that passes only the engine-export layer and calls it done has a documented failure probability at each of the remaining six surfaces.

## Limitations and unresolved tensions

_None recorded. Pack-3 produced 0 unresolved contradictions across all 7 sections (0 pairs flagged by the contradiction detector across 2003 total claims). The public verification ceiling documented in Layer 7 is a structural constraint, not an unresolved tension — its scope is recorded in the closed-surface ledger._

## Waivers disclosed

- **gate.source_floor** applied to `01-engine-version-export-template-compat.min_independent_publishers` — Section 01 documents Godot engine version semantics, export template versioning, and the Godot 3.x to 4.x compatibility boundary from canonical first-party sources. The authoritative source of truth for these behaviors is structurally concentrated in Godot Foundation documentation and the godotengine/godot release record. No independent third-party publisher can be the ground-truth authority for how Godot's own engine versions and export templates behave — third-party sources can only interpret or relay Foundation-published behavior. The source_cluster_monopoly finding (observed 2026-05-10 during review pass) cascaded needs_source_repair to all 40 triaged claims due to single-publisher sourcing, which is the structural incompatibility this waiver is designed for.

- **gate.source_floor** applied to `01-engine-version-export-template-compat.primary_sources_required` — For canonical-engine sections, official Godot Foundation tutorial and migration RST files are the primary authoritative evidence for engine behavior — there is no separate specification document for Godot engine version compatibility semantics. The extractor types these files as source_type=docs (tutorial/how-to format) rather than primary (spec/standards format). Only the releases JSON is typed primary. The gate requires 2 primary-typed sources but the content is structurally primary-equivalent: official first-party docs from the canonical godotengine/godot-docs repo are the authoritative source for how the engine behaves across versions. Adding a third-party primary source would not add truth; it would add interpretation on top of foundation docs.

- **gate.source_floor** applied to `03-save-system-player-state-durability.primary_sources_required` — Section 03 uses Godot Foundation class-reference RST (class_fileaccess.rst, class_configfile.rst, class_json.rst, class_resourcesaver.rst) and tutorial RST (saving_games.rst) as the primary authoritative evidence for save API behavior. The extractor types ALL godot-docs RST files as source_type=docs — both tutorial RST and auto-generated class-reference RST (generated from engine XML via make_rst.py). This is the F-40 finding: no RST file in the godot-docs repo types as primary, regardless of whether it is a tutorial or a class API reference. GitHub Search API results type as forum. Three independent developer READMEs (youssof20, EiTaNBaRiBoA, MrRobinOfficial) type as secondary. The gate requires 2 primary-typed sources; Section 03 has 0 primary-typed sources despite having 4 independent publishers. This waiver covers only the primary_sources_required check. The min_independent_publishers check PASSED without a waiver (4 publishers >= 4 minimum), confirming Section 03's multi-publisher structure.
