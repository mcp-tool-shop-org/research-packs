# Decision Brief

**Pack:** What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?
**Pack ID:** `179752ef486d`
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

A workflow JSON file alone is not sufficient for durability. A runnable ComfyUI workflow depends on six interdependent state elements that must be tracked together as a bundle. A local-first workflow control plane must record all six to keep a workflow runnable across time.

**Element 1 — ComfyUI core version.** ComfyUI Core releases a new major stable version roughly every 2 weeks, and ComfyUI Desktop builds a new release using the latest stable core version [claim:clm_f4ce9a16c6b4_ollama_intern_7] [claim:clm_f4ce9a16c6b4_ollama_intern_8]. Without pinning the core version, a workflow may encounter changed node APIs or removed defaults.

**Element 2 — Python/PyTorch/CUDA environment.** The first step in manual installation is creating a virtual environment [claim:clm_664a4a54b4c3_ollama_intern_2], and installing PyTorch with the correct versions is a required step [claim:clm_664a4a54b4c3_ollama_intern_5]. ComfyUI supports PyTorch versions from 2.4 onwards and only certain PyTorch features work on newer versions [claim:clm_a8c5d541c698_ollama_intern_6] [claim:clm_a8c5d541c698_ollama_intern_7]. The environment triple (Python version + PyTorch version + CUDA/ROCm variant) must be captured.

**Element 3 — Custom-node dependency state.** Custom node dependency conflicts can occur in ComfyUI [claim:clm_55456d4dedfa_ollama_intern_3]. Custom node version control is based on Git version control [claim:clm_55456d4dedfa_ollama_intern_13]. ComfyUI Manager is the recommended method for installing custom nodes [claim:clm_f9b159fab5ef_ollama_intern_2], and it can detect missing nodes after installation [claim:clm_55456d4dedfa_ollama_intern_19]. The commit hash of each installed node, plus its pip dependency manifest, must be tracked.

**Element 4 — Model-file identity.** Prompt execution fails when a checkpoint name is not in the loader node's list [claim:clm_e1e83dbebd28_ollama_intern_4]. Models from different architecture families cannot be used together [claim:clm_e1e83dbebd28_ollama_intern_3]. The control plane must record each model by name and, where available, by file hash, to allow verification after retrieval.

**Element 5 — Workflow/API schema format.** The workflow JSON for ComfyUI follows the JSON Schema [claim:clm_981216eba718_ollama_intern_1]. The JSON schema for ComfyUI workflow version 0.4 is referenced in official documentation [claim:clm_7c8ae5fe342a_ollama_intern_4]. The frontend will transition to a snapshot from the legacy repository [claim:clm_f4ce9a16c6b4_ollama_intern_29]. Schema version must be captured alongside the workflow JSON.

**Element 6 — Distribution metadata and reproducibility gaps.** Snapshot support is incomplete for custom nodes not managed by Git [claim:clm_e7045b6bccdb_ollama_intern_5]. Later images in a batch are non-reproducible due to altered embedded metadata [claim:clm_e19e5e376175_ollama_intern_12] [claim:clm_e19e5e376175_ollama_intern_21]. No workarounds or solutions are available for the missing-model download failure [claim:clm_d56e68044c24_ollama_intern_7], and this failure is not limited to video models [claim:clm_d56e68044c24_ollama_intern_21]. These gaps mean that community-shared workflows cannot be reliably bootstrapped with current tooling; the control plane must compensate by recording full model provenance and node snapshots at share time.

**Community-source-accessibility finding (preserved):** Current community distribution tooling does not reliably transmit the full state bundle. The missing-model download path is broken [claim:clm_d56e68044c24_ollama_intern_7] [claim:clm_d56e68044c24_ollama_intern_21], snapshot restore is deferred to the next startup [claim:clm_e7045b6bccdb_ollama_intern_4], and snapshot coverage excludes non-Git nodes [claim:clm_e7045b6bccdb_ollama_intern_5]. A control plane that captures the bundle at authoring time is the compensating control.

## Evidence cited

- `clm_f4ce9a16c6b4_ollama_intern_7` — S06: ComfyUI Core release cadence (~2 weeks)
- `clm_f4ce9a16c6b4_ollama_intern_8` — S06/S02/S03/S04: Desktop tracks latest stable core
- `clm_f4ce9a16c6b4_ollama_intern_29` — S06/S03: Frontend legacy snapshot transition
- `clm_664a4a54b4c3_ollama_intern_5` — S04: Installing PyTorch correct versions is required
- `clm_a8c5d541c698_ollama_intern_6` — S04: PyTorch 2.4+ required
- `clm_a8c5d541c698_ollama_intern_7` — S04: PyTorch feature/version dependency
- `clm_664a4a54b4c3_ollama_intern_2` — S04: Virtual environment is first install step
- `clm_55456d4dedfa_ollama_intern_3` — S01: Custom node dependency conflicts
- `clm_55456d4dedfa_ollama_intern_13` — S01: Node version control via Git
- `clm_55456d4dedfa_ollama_intern_19` — S01: Manager detects missing nodes
- `clm_f9b159fab5ef_ollama_intern_2` — S01: Manager is recommended install method
- `clm_e1e83dbebd28_ollama_intern_4` — S02/S08: Checkpoint name not in list → failure
- `clm_e1e83dbebd28_ollama_intern_3` — S08: Architecture family mismatch → failure
- `clm_981216eba718_ollama_intern_1` — S03: Workflow JSON follows JSON Schema
- `clm_7c8ae5fe342a_ollama_intern_4` — S03: Schema version 0.4 referenced
- `clm_e7045b6bccdb_ollama_intern_5` — S05: Snapshot incomplete for non-Git nodes
- `clm_e7045b6bccdb_ollama_intern_4` — S05: Snapshot restore deferred to next startup
- `clm_e19e5e376175_ollama_intern_12` — S05: Later batch images non-reproducible
- `clm_e19e5e376175_ollama_intern_21` — S05: Batch metadata alteration confirmed
- `clm_d56e68044c24_ollama_intern_7` — S05: No workaround for Download All failure
- `clm_d56e68044c24_ollama_intern_21` — S05: Download All failure not limited to video models

## Unresolved contradictions preserved

- `cnt_f38573f37716_ollama_intern` — scope_conflict, severity medium
- `cnt_21c3d1e7419f_ollama_intern` — definition_conflict, severity medium
- `cnt_f42b263bbe62_ollama_intern` — direct_conflict, severity medium
- `cnt_080bb959a2a3_ollama_intern` — direct_conflict, severity medium
- `cnt_e79326b001b6_ollama_intern` — direct_conflict, severity medium
- `cnt_a1a719a9f2b8_ollama_intern` — direct_conflict, severity medium
- `cnt_1e4f2129c53b_ollama_intern` — direct_conflict, severity medium
- `cnt_9c8a42519e8e_ollama_intern` — direct_conflict, severity high
- `cnt_382cf9771f4c_ollama_intern` — direct_conflict, severity medium
- `cnt_59443972b2ea_ollama_intern` — scope_conflict, severity medium
- `cnt_8840323d580f_ollama_intern` — scope_conflict, severity low
- `cnt_7082f21290d5_ollama_intern` — direct_conflict, severity medium
- `cnt_8ee37f1d24b8_ollama_intern` — direct_conflict, severity medium
- `cnt_04b7c4c0218d_ollama_intern` — direct_conflict, severity medium
- `cnt_19a1573b6bcf_ollama_intern` — definition_conflict, severity low
- `cnt_d407a1e37818_ollama_intern` — direct_conflict, severity medium
- `cnt_686027a58ad2_ollama_intern` — definition_conflict, severity medium
- `cnt_4de62f0af7ef_ollama_intern` — direct_conflict, severity medium
- `cnt_8344053d4de9_ollama_intern` — direct_conflict, severity medium
- `cnt_23268c1b5807_ollama_intern` — definition_conflict, severity medium
- `cnt_3acb816e79d0_ollama_intern` — definition_conflict, severity medium
- `cnt_42e98f1fffac_ollama_intern` — direct_conflict, severity medium
- `cnt_96f2f2ebc956_ollama_intern` — scope_conflict, severity medium
- `cnt_7a50a26fd3a8_ollama_intern` — direct_conflict, severity medium
- `cnt_f74a31118f9c_ollama_intern` — direct_conflict, severity medium
- `cnt_33ad73d19ff8_ollama_intern` — direct_conflict, severity medium
- `cnt_fc6dd10e8d28_ollama_intern` — direct_conflict, severity medium
- `cnt_9816bacd934b_ollama_intern` — direct_conflict, severity medium
- `cnt_2f16e9a70413_ollama_intern` — direct_conflict, severity medium
- `cnt_b3b52e152b21_ollama_intern` — scope_conflict, severity medium
- `cnt_062b6f6968dc_ollama_intern` — scope_conflict, severity low
- `cnt_d21ab772a096_ollama_intern` — direct_conflict, severity medium
- `cnt_711664a1c9fa_ollama_intern` — direct_conflict, severity medium
- `cnt_c123be12bf60_ollama_intern` — direct_conflict, severity medium
- `cnt_24e058ab675e_ollama_intern` — scope_conflict, severity medium
- `cnt_cd7eaebdfbf5_ollama_intern` — direct_conflict, severity medium
- `cnt_03f6ac6d1c6f_ollama_intern` — direct_conflict, severity medium
- `cnt_b5234b07fd98_ollama_intern` — scope_conflict, severity low
- `cnt_7a9a9527acfd_ollama_intern` — scope_conflict, severity medium
- `cnt_716685b980ed_ollama_intern` — scope_conflict, severity medium
- `cnt_30e5d5d55574_ollama_intern` — direct_conflict, severity medium
- `cnt_10f12ecc47de_ollama_intern` — direct_conflict, severity medium
- `cnt_4df7383d5230_ollama_intern` — direct_conflict, severity medium
- `cnt_2065d5fcfa19_ollama_intern` — direct_conflict, severity medium
- `cnt_c2711d345695_ollama_intern` — scope_conflict, severity medium
- `cnt_af58528b5d74_ollama_intern` — direct_conflict, severity high
- `cnt_c5879e570d1e_ollama_intern` — direct_conflict, severity medium
- `cnt_9303efa95382_ollama_intern` — scope_conflict, severity medium
- `cnt_e89ecdbdb2b1_ollama_intern` — direct_conflict, severity medium
- `cnt_33c7fe8da3c5_ollama_intern` — scope_conflict, severity low
- `cnt_2a3b7dd292c0_ollama_intern` — temporal_conflict, severity medium
- `cnt_ce4921f79d3c_ollama_intern` — scope_conflict, severity medium
- `cnt_88a9b747da83_ollama_intern` — scope_conflict, severity low
- `cnt_1e62c83bf6de_ollama_intern` — direct_conflict, severity medium
- `cnt_41168affb7d2_ollama_intern` — scope_conflict, severity medium
- `cnt_ab7d95eae2e6_ollama_intern` — scope_conflict, severity medium
- `cnt_a3a402f76fb2_ollama_intern` — scope_conflict, severity low
- `cnt_30e19f900471_ollama_intern` — direct_conflict, severity medium
- `cnt_93911c456c08_ollama_intern` — definition_conflict, severity medium
- `cnt_723895670f4b_ollama_intern` — scope_conflict, severity medium
- `cnt_97163970cf72_ollama_intern` — scope_conflict, severity low
- `cnt_97b89c687fe2_ollama_intern` — scope_conflict, severity medium
- `cnt_e16821cff583_ollama_intern` — definition_conflict, severity medium
- `cnt_e133db9cb19c_ollama_intern` — scope_conflict, severity medium
- `cnt_454ef29ba13e_ollama_intern` — scope_conflict, severity low
- `cnt_41316f0bdd4c_ollama_intern` — scope_conflict, severity medium
- `cnt_b81438c05a3b_ollama_intern` — scope_conflict, severity medium
- `cnt_3d61c06ad520_ollama_intern` — scope_conflict, severity medium
- `cnt_e820ae557c91_ollama_intern` — direct_conflict, severity medium
- `cnt_0c831e08af09_ollama_intern` — scope_conflict, severity low
- `cnt_99fb7401356b_ollama_intern` — scope_conflict, severity medium
- `cnt_f05a0af91b70_ollama_intern` — scope_conflict, severity low
- `cnt_96005502ff1f_ollama_intern` — direct_conflict, severity medium
- `cnt_ce3411c340a2_ollama_intern` — definition_conflict, severity medium
- `cnt_b645eafb675f_ollama_intern` — definition_conflict, severity medium
- `cnt_13ddda82c8cc_ollama_intern` — direct_conflict, severity medium
- `cnt_4da1593c9998_ollama_intern` — direct_conflict, severity medium
- `cnt_e5d5e9310dd2_ollama_intern` — scope_conflict, severity low
- `cnt_0cca54e9f42d_ollama_intern` — direct_conflict, severity medium
- `cnt_38523ee8ca75_ollama_intern` — direct_conflict, severity medium
- `cnt_0a2b07adc2c7_ollama_intern` — direct_conflict, severity high
- `cnt_a19727c2d637_ollama_intern` — direct_conflict, severity medium
- `cnt_cc80cd5d0928_ollama_intern` — direct_conflict, severity medium
- `cnt_507a116a8d26_ollama_intern` — direct_conflict, severity medium
- `cnt_3168941441c0_ollama_intern` — direct_conflict, severity medium
- `cnt_89b0f98cf55c_ollama_intern` — definition_conflict, severity medium
- `cnt_8020bc7dcd0d_ollama_intern` — direct_conflict, severity medium
- `cnt_c7dbefd712be_ollama_intern` — scope_conflict, severity medium
- `cnt_636e9ae9f130_ollama_intern` — direct_conflict, severity medium
- `cnt_b8a1ebda2a53_ollama_intern` — scope_conflict, severity medium
- `cnt_09d4340580f4_ollama_intern` — definition_conflict, severity medium
- `cnt_9fc5c0e8be88_ollama_intern` — direct_conflict, severity medium
- `cnt_7402f0cd0c38_ollama_intern` — scope_conflict, severity medium
- `cnt_8167a5b07d8c_ollama_intern` — scope_conflict, severity medium
- `cnt_374b8c855c8f_ollama_intern` — definition_conflict, severity low
- `cnt_accb4df71fa6_ollama_intern` — scope_conflict, severity medium
- `cnt_64c403533b5a_ollama_intern` — definition_conflict, severity low
- `cnt_3320766588e3_ollama_intern` — direct_conflict, severity medium
- `cnt_7774b59a012e_ollama_intern` — scope_conflict, severity medium
- `cnt_4330eccaea5d_ollama_intern` — direct_conflict, severity medium
- `cnt_38b8504f8100_ollama_intern` — direct_conflict, severity medium
- `cnt_be4547a36b2c_ollama_intern` — direct_conflict, severity medium
- `cnt_52db8e3fa5a1_ollama_intern` — direct_conflict, severity high
- `cnt_a2238c1c8a5b_ollama_intern` — direct_conflict, severity medium
- `cnt_161e476670cf_ollama_intern` — scope_conflict, severity low
- `cnt_f7852374658c_ollama_intern` — direct_conflict, severity medium
- `cnt_8624b6a29a9a_ollama_intern` — direct_conflict, severity medium
- `cnt_d767c5461688_ollama_intern` — direct_conflict, severity medium
- `cnt_a2752a72a8a9_ollama_intern` — direct_conflict, severity medium
- `cnt_8d7b13df2fad_ollama_intern` — definition_conflict, severity medium
- `cnt_945e2a434dba_ollama_intern` — definition_conflict, severity medium
- `cnt_d275955c98a7_ollama_intern` — direct_conflict, severity medium
- `cnt_f0cdc21e659e_ollama_intern` — direct_conflict, severity high
- `cnt_310aa75f0593_ollama_intern` — direct_conflict, severity medium
- `cnt_643c271b7c55_ollama_intern` — direct_conflict, severity medium
- `cnt_9ed270871d67_ollama_intern` — definition_conflict, severity medium
- `cnt_9a49d7b945dc_ollama_intern` — definition_conflict, severity medium
- `cnt_ecc8affa92d2_ollama_intern` — scope_conflict, severity medium
- `cnt_5f1dda93f541_ollama_intern` — direct_conflict, severity medium
- `cnt_dd89dbd0b46d_ollama_intern` — scope_conflict, severity low
- `cnt_693030b1a884_ollama_intern` — definition_conflict, severity medium
- `cnt_45199cb0b478_ollama_intern` — scope_conflict, severity low
- `cnt_c02ca7349707_ollama_intern` — definition_conflict, severity low
- `cnt_f6188b8e436d_ollama_intern` — definition_conflict, severity medium
- `cnt_c7dbcf05f985_ollama_intern` — scope_conflict, severity low
- `cnt_a381905cdf3c_ollama_intern` — scope_conflict, severity medium
- `cnt_80d337453717_ollama_intern` — definition_conflict, severity medium
- `cnt_a8dc9b448567_ollama_intern` — definition_conflict, severity medium
- `cnt_90e9c5cbfc0a_ollama_intern` — temporal_conflict, severity medium
- `cnt_4444c501fc92_ollama_intern` — scope_conflict, severity medium
- `cnt_687cbdde2af6_ollama_intern` — definition_conflict, severity medium
- `cnt_9bace00a1253_ollama_intern` — definition_conflict, severity medium
- `cnt_f0ffc366debd_ollama_intern` — definition_conflict, severity low
- `cnt_af76424fc415_ollama_intern` — definition_conflict, severity medium
- `cnt_45b99cbf9d4c_ollama_intern` — definition_conflict, severity medium
- `cnt_6e732ec1791f_ollama_intern` — direct_conflict, severity medium
- `cnt_48bcf184604f_ollama_intern` — scope_conflict, severity low
- `cnt_dbe25141d7cd_ollama_intern` — direct_conflict, severity medium
- `cnt_8f017ec5eab7_ollama_intern` — temporal_conflict, severity medium
- `cnt_eee6851d4afd_ollama_intern` — scope_conflict, severity low
- `cnt_38f2d2a465d4_ollama_intern` — direct_conflict, severity medium
- `cnt_6759af3377ac_ollama_intern` — scope_conflict, severity medium
- `cnt_22b641b58d06_ollama_intern` — scope_conflict, severity low
- `cnt_b44bd062f4c2_ollama_intern` — definition_conflict, severity medium
- `cnt_d8f140641cb3_ollama_intern` — scope_conflict, severity medium
- `cnt_bc3930125525_ollama_intern` — definition_conflict, severity medium
- `cnt_6d87eb5155f9_ollama_intern` — scope_conflict, severity medium
- `cnt_741d84053481_ollama_intern` — direct_conflict, severity medium
- `cnt_c91da8e6735c_ollama_intern` — scope_conflict, severity low
- `cnt_c12d98d73a8f_ollama_intern` — definition_conflict, severity medium
- `cnt_e16be69aa29f_ollama_intern` — scope_conflict, severity medium
- `cnt_733eef12c03a_ollama_intern` — scope_conflict, severity medium
- `cnt_321b0dae0b47_ollama_intern` — definition_conflict, severity medium
- `cnt_9a3f96fcca35_ollama_intern` — definition_conflict, severity medium
- `cnt_ccc6413766b8_ollama_intern` — definition_conflict, severity medium
- `cnt_dc27527f561a_ollama_intern` — scope_conflict, severity medium
- `cnt_4f743ac9014f_ollama_intern` — direct_conflict, severity medium
- `cnt_b7b0a9c9ed06_ollama_intern` — definition_conflict, severity medium
- `cnt_95eb8245bc6f_ollama_intern` — temporal_conflict, severity low
- `cnt_ca1f561ae168_ollama_intern` — scope_conflict, severity medium
- `cnt_7f07900cb405_ollama_intern` — scope_conflict, severity low
- `cnt_7b4768dfe09d_ollama_intern` — definition_conflict, severity medium
- `cnt_b580e61187b2_ollama_intern` — direct_conflict, severity medium
- `cnt_6ee9aa0a66f4_ollama_intern` — definition_conflict, severity medium
- `cnt_7c6372f2a527_ollama_intern` — definition_conflict, severity medium
- `cnt_d04575443743_ollama_intern` — scope_conflict, severity medium
- `cnt_123d6a0d9e84_ollama_intern` — definition_conflict, severity medium
- `cnt_2c145ac0a0be_ollama_intern` — direct_conflict, severity medium
- `cnt_d000531908cf_ollama_intern` — definition_conflict, severity medium
- `cnt_4b17e2373d63_ollama_intern` — definition_conflict, severity low
- `cnt_60dc6780d54d_ollama_intern` — scope_conflict, severity medium

## Waivers disclosed

- **pack.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
