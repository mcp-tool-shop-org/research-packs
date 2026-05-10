# Decision Brief

**Pack:** What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?
**Pack ID:** `63d430e311c1`
**Decision question:** _(no decision recorded in research.yaml)_

> **Guardrails (enforced at freeze time):**
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**
> - **Recommendation must cite at least one accepted claim_id.**

## Recommendation

Treat every Godot narrative game release as a seven-layer state problem, not a single export step. Each layer has an independent failure mode that is not caught by the layers above or below it. A studio or solo developer managing a live game needs a decision per layer — not a one-time export. The seven decisions are listed below.

## Decisions a creator must make — per layer

**Layer 1 — Engine version and export template pin.**
Decision: pin the engine version at project start and define a policy for when upgrades are acceptable. Godot major versions break API compatibility [claim:clm_6f54a167d232_ollama_intern_3]. Godot 4.x is the foundation's recommended track for new projects [claim:clm_6f54a167d232_ollama_intern_6] with a longer support period than 3.x [claim:clm_71469ccfe316_ollama_intern_3]. Upgrading mid-project is explicitly risky [claim:clm_6f54a167d232_ollama_intern_8]. The decision is not whether to use Godot 4 — it is whether the project will track minor releases (safe) or tolerate being on an older minor without backports.

**Layer 2 — Reference graph discipline.**
Decision: establish a path and UID discipline for all scene and resource files before the asset library grows. Resources can be nested and saved on disk [claim:clm_3bf41f24d47a_ollama_intern_4]; `set_uid` provides stable path-independent references [claim:clm_f826c053d744_ollama_intern_14]. The decision is whether to use UIDs consistently (durable), or rely on path strings (fragile under reorganization).

**Layer 3 — Save schema versioning.**
Decision: adopt a versioned save schema before shipping the first build that persists player state. The engine's save APIs (`FileAccess` [claim:clm_ec39871fb14e_ollama_intern_1], `ConfigFile` [claim:clm_d02146dfcea5_ollama_intern_2], `JSON` [claim:clm_a6a330af5a09_ollama_intern_2]) do not provide schema migration. `SaveState Lite`'s forward-merge capability [claim:clm_f6ad03378646_ollama_intern_4] provides this, but only if it is adopted before incompatible schema changes accumulate. The decision is whether to invest in migration infrastructure early or accept a hard reset of player saves on every schema change.

**Layer 4 — Scripting language and toolchain policy.**
Decision: pick one primary scripting language with a clear policy for cross-language interop. GDScript requires no external toolchain; C# requires toolchain management outside Godot [claim:clm_a9fd72b46944_ollama_intern_3] and carries a UTF-16/UTF-32 encoding boundary [claim:clm_e3948fcd1578_ollama_intern_13]. The interop works [claim:clm_d5da902c1965_ollama_intern_3] [claim:clm_d5da902c1965_ollama_intern_9] but adds a surface that requires ongoing maintenance. GDExtension has a binary-placement constraint: the library file must be co-located with the Godot executable [claim:clm_0cf4f6250555_ollama_intern_2]. The decision is: which script path(s), what toolchain policy, and what deployment layout discipline.

**Layer 5 — Desktop code signing and certificate management.**
Decision: obtain signing certificates for each target platform before first public release. macOS requires signing and notarization by default [claim:clm_03cb99fe6df9_ollama_intern_6]; App Store distribution requires App Sandbox [claim:clm_03cb99fe6df9_ollama_intern_19]. Windows MSIX deployment requires package signing [claim:clm_ef2f01e1f840_ollama_intern_1]. These are not optional steps. The decision is: which signing path (Apple Developer Program for Mac, MSIX certificate for Windows), and who owns the certificate renewal calendar.

**Layer 6 — Mobile/web platform policy compliance.**
Decision: evaluate platform policy before targeting mobile or web. The C# web export gap is active: C# projects using Godot 4 cannot be exported to the web currently [claim:clm_d63ce314a50f_ollama_intern_3]. Android requires OpenJDK 17 [claim:clm_d726c169567d_ollama_intern_3]; APK compressed size is capped at 200MB on Play Console [claim:clm_5fda19aa5cd8_ollama_intern_7]. iOS requires post-export Xcode steps [claim:clm_37ec19efa9ba_ollama_intern_6] [claim:clm_37ec19efa9ba_ollama_intern_7]. App Store submission requires complete, accurate, non-harmful content [claim:clm_ba5aaca1a207_ollama_intern_10] [claim:clm_ba5aaca1a207_ollama_intern_12]. The decision is: which platforms to target, and whether the project's scripting language is compatible with all intended platforms.

**Layer 7 — Distribution channel selection and verification ceiling.**
Decision: choose distribution channels based on public verifiability of their requirements. itch.io creator documentation is fully accessible: project pages are private by default and must be set to Public [claim:clm_7d03db002fc2_ollama_intern_9] [claim:clm_7d03db002fc2_ollama_intern_10]; pricing and download key mechanics are documentable from primary sources [claim:clm_fc44452fd969_ollama_intern_7] [claim:clm_ce610c7a7992_ollama_intern_3]. For Steam distribution, Valve's Steamworks documentation is JavaScript-rendered with no alternate endpoint — the public verification ceiling sits at community integration tools (GodotSteam [claim:clm_8e8c16fd06c4_ollama_intern_5]) and GitHub issue evidence, not at Steamworks SDK requirements. Console platforms are entirely login-gated or JavaScript-rendered. The decision for Steam or console targets: obtain partner-access credentials and document SDK requirements from first-party sources before asserting durability for those channels.

## Repair-mode signals — what to watch per layer

| Layer | Signal that the layer needs repair |
|---|---|
| 1 — Engine version | Godot major version bump; API deprecation warnings in script editor; export preset failures after upgrade |
| 2 — Reference graph | `ResourceLoader.exists()` returning false for previously valid paths [claim:clm_ef84790b4914_ollama_intern_11]; missing-resource errors at runtime |
| 3 — Save schema | Player save file fails to load after any schema change; `ConfigFile` parsing fails due to property name constraint violations [claim:clm_d02146dfcea5_ollama_intern_6] |
| 4 — Scripting | C# build failure after MSBuild/SDK upgrade; GDExtension load failure due to binary placement [claim:clm_0cf4f6250555_ollama_intern_2]; API rename errors after engine upgrade [claim:clm_71469ccfe316_ollama_intern_16] |
| 5 — Desktop signing | macOS Gatekeeper rejection; Windows MSIX deployment failure; notarization error from Apple [claim:clm_c3216b0c8944_ollama_intern_19]; certificate expiry |
| 6 — Mobile/web | APK size exceeds 200MB compressed [claim:clm_5fda19aa5cd8_ollama_intern_7]; iOS Xcode step failures; App Store review rejection; Godot AAB build freeze [claim:clm_e17170a435d3_ollama_intern_24] |
| 7 — Distribution | itch.io page visibility not set to Public [claim:clm_7d03db002fc2_ollama_intern_10]; HTML5 payment model not matching creator intent [claim:clm_57341c85596c_ollama_intern_8]; GodotSteam build failure after Godot major version bump |

## Pack-3's public verification ceiling

For Steam distribution and console platforms, the public verification ceiling is a structural constraint documented in this pack:

- **itch.io:** Fully verifiable via server-rendered creator documentation. All itch.io distribution mechanics in the accepted claim set are from primary-accessible sources.
- **Steam (Steamworks Partner):** All `partner.steamgames.com/*` and `store.steampowered.com/*` URLs returned HTTP 200 but are jQuery/client-side rendered with zero extractable prose. No Markdown API alternate is known. The entire Valve web stack is inaccessible to the v0.1 fetch model. The accepted evidence for Steam is limited to GodotSteam (community integration tool) [claim:clm_8e8c16fd06c4_ollama_intern_5] and GitHub issue evidence. Steamworks SDK requirements are not in this pack.
- **Console platforms (Nintendo, Sony, Microsoft):** All developer portals are either login-gated or JavaScript-rendered. No console SDK requirements are in the accepted claim set.

Operators targeting Steam or console platforms must supplement this pack with partner-access sources. The ceiling is the v0.1 fetch model's inability to render client-side JavaScript, not a gap in the research methodology.

Full closed-surface ledger: `audits/source-diversity-gaps.md`.

## Evidence cited

```
clm_6f54a167d232_ollama_intern_3   clm_6f54a167d232_ollama_intern_6   clm_71469ccfe316_ollama_intern_3
clm_6f54a167d232_ollama_intern_8   clm_3bf41f24d47a_ollama_intern_4   clm_f826c053d744_ollama_intern_14
clm_ec39871fb14e_ollama_intern_1   clm_d02146dfcea5_ollama_intern_2   clm_a6a330af5a09_ollama_intern_2
clm_f6ad03378646_ollama_intern_4   clm_a9fd72b46944_ollama_intern_3   clm_e3948fcd1578_ollama_intern_13
clm_d5da902c1965_ollama_intern_3   clm_d5da902c1965_ollama_intern_9   clm_0cf4f6250555_ollama_intern_2
clm_03cb99fe6df9_ollama_intern_6   clm_03cb99fe6df9_ollama_intern_19  clm_ef2f01e1f840_ollama_intern_1
clm_d63ce314a50f_ollama_intern_3   clm_d726c169567d_ollama_intern_3   clm_5fda19aa5cd8_ollama_intern_7
clm_37ec19efa9ba_ollama_intern_6   clm_37ec19efa9ba_ollama_intern_7   clm_ba5aaca1a207_ollama_intern_10
clm_ba5aaca1a207_ollama_intern_12  clm_7d03db002fc2_ollama_intern_9   clm_7d03db002fc2_ollama_intern_10
clm_fc44452fd969_ollama_intern_7   clm_ce610c7a7992_ollama_intern_3   clm_8e8c16fd06c4_ollama_intern_5
clm_ef84790b4914_ollama_intern_11  clm_d02146dfcea5_ollama_intern_6   clm_c3216b0c8944_ollama_intern_19
clm_71469ccfe316_ollama_intern_16  clm_57341c85596c_ollama_intern_8   clm_e17170a435d3_ollama_intern_24
```

## Unresolved contradictions preserved

_None. Pack-3 produced 0 unresolved contradictions across all 7 sections._

## Waivers disclosed

- **gate.source_floor** applied to `01-engine-version-export-template-compat.min_independent_publishers` — Section 01 documents Godot engine version semantics from canonical first-party sources. The authoritative source of truth is structurally concentrated in Godot Foundation documentation and the godotengine/godot release record. No independent third-party publisher can be the ground-truth authority for how Godot's own engine versions and export templates behave.

- **gate.source_floor** applied to `01-engine-version-export-template-compat.primary_sources_required` — Official Godot Foundation tutorial and migration RST files are the primary authoritative evidence for engine behavior. The extractor types these files as source_type=docs (tutorial/how-to format) rather than primary. The content is structurally primary-equivalent.

- **gate.source_floor** applied to `03-save-system-player-state-durability.primary_sources_required` — Section 03 uses Godot Foundation class-reference RST files as primary evidence for save API behavior. The extractor types all godot-docs RST files as source_type=docs regardless of whether they are tutorials or class API references (F-40). Section 03 has 0 primary-typed sources despite having 4 independent publishers. The min_independent_publishers check PASSED without a waiver.
