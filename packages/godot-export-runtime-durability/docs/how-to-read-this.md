# How to read: godot-export-runtime-durability

**Pack:** `godot-export-runtime-durability`
**Topic:** What makes a Godot narrative game build durable across engine versions, export templates, platform targets, asset pipelines, save/runtime behavior, and distribution surfaces?
**Frozen:** 2026-05-10
**Accepted claims:** 276 accepted claims across 7 sections

---

## What this pack answers

A successful Godot engine export is not the same thing as a durable playable release. This pack answers the seven-layer question: what must hold simultaneously for a Godot narrative game to remain buildable, runnable, and distributable across the full lifecycle of an active project?

The synthesis identifies seven independent failure and repair boundaries — engine version and export template pin, scene/resource reference graph discipline, save schema versioning, scripting language and toolchain policy, desktop code signing and certificate management, mobile/web platform policy compliance, and distribution channel selection. Each layer can fail independently of the others. A studio or solo developer managing a live game needs a decision per layer, not a one-time export.

---

## How the evidence is structured

Seven sections, each investigating one durability layer:

| Section | Layer | Key questions |
|---------|-------|---------------|
| `01-engine-version-export-template-compat` | Engine version + export templates | What does a Godot version upgrade break? How are export templates pinned? |
| `02-scene-resource-serialization` | Scene/resource serialization | How do UID and path references interact with file reorganization? |
| `03-save-system-player-state-durability` | Save/player-state durability | What do the built-in save APIs provide? What do they not provide (schema migration)? |
| `04-scripting-runtime-contracts` | Scripting + runtime contracts | GDScript vs C# toolchain; GDExtension binary-placement constraints |
| `05-desktop-platform-export-durability` | Desktop platform requirements | macOS signing + notarization; Windows MSIX + Gatekeeper |
| `06-mobile-web-export-durability` | Mobile + web gatekeepers | Android/iOS store requirements; C# web export gap; APK size caps |
| `07-distribution-surface-durability` | Distribution surfaces | itch.io (fully accessible); Steam/console (JS-rendered or login-gated) |

The run order was non-sequential by design (01→03→05→02→04→06→07) to exercise gate accumulation across varying publisher shapes early. Section 01 carries two `gate.source_floor` waivers (single-publisher, run first); Section 03 carries one; Sections 02, 04, 05, 06, 07 required no waivers.

---

## Where to start

1. **`synthesis/final-report.md`** — The full layered durability thesis. Starts with the advisor-locked frame ("Godot narrative-game build durability is a layered release-state problem"), walks all seven layers with claim citations, then closes with a seven-layer control plane checklist. Read this first.

2. **`synthesis/decision-brief.md`** — Per-layer operator decisions. One decision per layer: what to pin, what to adopt before first release, what toolchain policy to set, what certificates to obtain. Includes a repair-mode signal table (what to watch per layer) and a public verification ceiling disclosure for Steam and console targets.

3. **`synthesis/working-report.md`** — Methodology and caveats. Five methodology findings disclosed: gate accumulation timing (F-43), source-type classification instability (F-40), source-cluster-monopoly warning misfire (F-41), Valve/Steam JS-rendering barrier (F-44), and the gate-semantics design call. The closed-surface ledger (9 inaccessible URLs) is here.

4. **`synthesis/cross-section-map.md`** — The full seven-layer cross-section evidence map. 1MB+ file; use it to trace claim clusters across sections.

5. **`pack/audits/freeze-receipt.json`** — Fingerprint verification. Run `node ../../scripts/verify-pack.mjs .` from this directory to independently verify all artifact hashes against the receipt.

---

## Interpreting claim IDs

Claims are referenced as `[claim:clm_<hex>]` in the synthesis prose. To look up a claim:

1. Open `pack/sections/<section-id>/claims.jsonl`
2. Find the entry with matching `claim_id`
3. The `asserts` field is the claim; `evidence_excerpt` is the literal source span

Accepted vs rejected: `pack/sections/<section-id>/claim-reviews.jsonl` — latest entry per `claim_id` wins.

---

## Public verification ceiling

Steam distribution and console platforms have a structural verification ceiling in this pack. All `partner.steamgames.com/*` and `store.steampowered.com/*` URLs return HTTP 200 but are JavaScript-rendered with zero extractable prose — no Markdown API alternate is known for Valve (unlike Apple's `developer.apple.com/documentation/*` which has a plain-text alternate). Console developer portals are similarly login-gated or JS-rendered. The accepted evidence for Steam distribution is limited to GodotSteam community integration tooling and GitHub issue evidence.

Operators targeting Steam or console platforms must supplement this pack with partner-access sources. Full closed-surface ledger: `pack/audits/source-diversity-gaps.md`.

---

## Preserved contradiction records

This pack has no preserved contradiction records (0 unresolved contradictions across all 7 sections).

---

## Verifying integrity

From this directory:

```bash
node ../../scripts/verify-pack.mjs .
```

Expected output: `PASS  godot-export-runtime-durability` with `receipt_sha256=55a65792caed9c026e76d4913c939a0f656a777a0a130e0b8a0d29ad6cf41235`.

See [`../../docs/how-to-read-a-pack.md`](../../docs/how-to-read-a-pack.md) for the general guide.
