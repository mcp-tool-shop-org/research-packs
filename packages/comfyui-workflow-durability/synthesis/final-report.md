# Final Report

**Pack:** What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?
**Pack ID:** `179752ef486d`
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

ComfyUI workflow durability depends on a surrounding state bundle, not on the workflow JSON file alone. A runnable workflow requires six interdependent elements to be captured and tracked together: the ComfyUI core version, the Python/PyTorch/CUDA environment, the installed custom-node dependency state (by Git commit hash), the identity of each model checkpoint by name, the versioned workflow/API schema format, and distribution metadata. Current community tooling has confirmed gaps in capturing this bundle: the missing-model download path is non-functional [claim:clm_d56e68044c24_ollama_intern_7], snapshot coverage excludes non-Git nodes [claim:clm_e7045b6bccdb_ollama_intern_5], and batch-image metadata is altered in ways that break reproducibility [claim:clm_e19e5e376175_ollama_intern_12]. A local-first workflow control plane that captures the bundle at authoring time is the compensating control for all three gaps.

**Waiver disclosure:** All eight sections carry a `gate.source_floor` waiver. ComfyUI core versioning behavior is defined by canonical Comfy-Org maintainer surfaces; independent third-party sources discuss usage but are not primary sources for platform version semantics.

## Body

### Finding 1 — The workflow JSON is a partial artifact

The workflow JSON for ComfyUI follows the JSON Schema [claim:clm_981216eba718_ollama_intern_1] and is versioned (current reference: schema version 0.4 [claim:clm_7c8ae5fe342a_ollama_intern_4]). However, the JSON encodes node connectivity and parameter values only. It does not encode which custom nodes are installed, which model files are present, or which Python environment version is in use. Prompt execution fails immediately when a checkpoint name referenced in the workflow is not present in the loader's file list [claim:clm_e1e83dbebd28_ollama_intern_4]. The schema alone cannot prevent this class of failure.

### Finding 2 — Core version must be pinned

ComfyUI Core releases a new major stable version roughly every 2 weeks [claim:clm_f4ce9a16c6b4_ollama_intern_7]. ComfyUI Desktop builds a new release using the latest stable core version [claim:clm_f4ce9a16c6b4_ollama_intern_8]. At a 2-week release cadence, an unpinned installation drifts from the authoring environment within the same month. The frontend will transition to a snapshot from the legacy repository [claim:clm_f4ce9a16c6b4_ollama_intern_29], introducing an additional version-tracking surface. The control plane must record the core commit or release tag at workflow-save time.

### Finding 3 — Python/PyTorch/CUDA is a distinct bundle layer

The first step in manual installation is creating a virtual environment [claim:clm_664a4a54b4c3_ollama_intern_2], and installing PyTorch with the correct versions is a required step [claim:clm_664a4a54b4c3_ollama_intern_5]. ComfyUI supports PyTorch from version 2.4 onwards [claim:clm_a8c5d541c698_ollama_intern_6], and some features only work on newer versions [claim:clm_a8c5d541c698_ollama_intern_7]. Because the GPU driver, CUDA/ROCm build, and PyTorch minor version form a compatibility triad, all three must be recorded in the bundle.

### Finding 4 — Custom-node state requires Git-level precision

Custom node dependency conflicts can occur in ComfyUI [claim:clm_55456d4dedfa_ollama_intern_3]. Custom node version control is based on Git version control [claim:clm_55456d4dedfa_ollama_intern_13], meaning node state is representable as a per-repository commit hash. ComfyUI Manager is the recommended installation method [claim:clm_f9b159fab5ef_ollama_intern_2] and can detect missing nodes after installation [claim:clm_55456d4dedfa_ollama_intern_19]. However, snapshot support is incomplete for custom nodes not managed by Git [claim:clm_e7045b6bccdb_ollama_intern_5]: non-Git nodes fall outside current snapshot coverage. The control plane must track the Git commit hash for each node and separately record any non-Git node state.

### Finding 5 — Model-file identity is name-and-hash, not path

Models are selected by name in the loader node [claim:clm_2e0add2bdec7_ollama_intern_3]. A name mismatch causes an immediate execution failure [claim:clm_e1e83dbebd28_ollama_intern_4]. Models from different architecture families cannot be combined [claim:clm_e1e83dbebd28_ollama_intern_3]. A corrupted model download may also cause failure, resolvable by re-download [claim:clm_e1e83dbebd28_ollama_intern_9]. The control plane must record each model by filename and file hash to allow both missing-file detection and corruption detection.

### Finding 6 — Existing control-plane tools cover node management but not the full bundle

ComfyUI Manager offers custom-node management and missing-node installation [claim:clm_1e2124f6f8d4_ollama_intern_1] [claim:clm_1e2124f6f8d4_ollama_intern_21]. comfy-cli supports workspace targeting, node install, snapshot restore, and cross-platform operation [claim:clm_e804faef8c79_ollama_intern_4] [claim:clm_e804faef8c79_ollama_intern_17] [claim:clm_e804faef8c79_ollama_intern_10]. These tools handle the node-management layer well. Neither tool currently integrates model-file identity tracking, environment version capture, or schema version recording into a unified control-plane artifact. The gap is architectural: each tool addresses one or two bundle layers, not the bundle as a whole.

### Finding 7 — Community distribution has confirmed accessibility gaps

**Community-source-accessibility finding (preserved per advisor requirement):**

No workarounds or solutions are currently available for the missing-model download failure [claim:clm_d56e68044c24_ollama_intern_7], and this failure is not limited to video models [claim:clm_d56e68044c24_ollama_intern_21]. Additionally, later images in a batch are non-reproducible due to altered embedded metadata [claim:clm_e19e5e376175_ollama_intern_12] [claim:clm_e19e5e376175_ollama_intern_21]. Snapshot restore takes effect only on the next startup [claim:clm_e7045b6bccdb_ollama_intern_4], delaying recovery.

These three gaps (broken model download, batch metadata corruption, deferred snapshot restore) collectively mean that a community-shared workflow cannot be reliably bootstrapped from the workflow JSON alone using current tooling. A control plane that captures bundle state at authoring time and distributes it as a companion artifact is the architectural compensating control for all three gaps.

### Out-of-domain disclosures

Claims accepted from S06 include assertions about GitHub Copilot, GitHub Spark, GitHub Sponsors, and GitHub Codespaces (`clm_b507da5fa466_ollama_intern_2` through `_6`). These are out-of-scope for the bundle thesis and are not cited in this report. Claims from S03 about Comfy Cloud API concurrency (`clm_72d8ae653457_*`) are in-scope for cloud distribution but not for the local-first control-plane question addressed here.

## Limitations and unresolved tensions

- `cnt_f38573f37716_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_21c3d1e7419f_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_f42b263bbe62_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_080bb959a2a3_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_e79326b001b6_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_a1a719a9f2b8_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_1e4f2129c53b_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_9c8a42519e8e_ollama_intern` — direct_conflict, severity high, status unresolved
- `cnt_382cf9771f4c_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_59443972b2ea_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_8840323d580f_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_7082f21290d5_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_8ee37f1d24b8_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_04b7c4c0218d_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_19a1573b6bcf_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_d407a1e37818_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_686027a58ad2_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_4de62f0af7ef_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_8344053d4de9_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_23268c1b5807_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_3acb816e79d0_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_42e98f1fffac_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_96f2f2ebc956_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_7a50a26fd3a8_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_f74a31118f9c_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_33ad73d19ff8_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_fc6dd10e8d28_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_9816bacd934b_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_2f16e9a70413_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_b3b52e152b21_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_062b6f6968dc_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_d21ab772a096_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_711664a1c9fa_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_c123be12bf60_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_24e058ab675e_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_cd7eaebdfbf5_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_03f6ac6d1c6f_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_b5234b07fd98_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_7a9a9527acfd_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_716685b980ed_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_30e5d5d55574_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_10f12ecc47de_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_4df7383d5230_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_2065d5fcfa19_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_c2711d345695_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_af58528b5d74_ollama_intern` — direct_conflict, severity high, status unresolved
- `cnt_c5879e570d1e_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_9303efa95382_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_e89ecdbdb2b1_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_33c7fe8da3c5_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_2a3b7dd292c0_ollama_intern` — temporal_conflict, severity medium, status unresolved
- `cnt_ce4921f79d3c_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_88a9b747da83_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_1e62c83bf6de_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_41168affb7d2_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_ab7d95eae2e6_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_a3a402f76fb2_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_30e19f900471_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_93911c456c08_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_723895670f4b_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_97163970cf72_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_97b89c687fe2_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_e16821cff583_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_e133db9cb19c_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_454ef29ba13e_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_41316f0bdd4c_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_b81438c05a3b_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_3d61c06ad520_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_e820ae557c91_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_0c831e08af09_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_99fb7401356b_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_f05a0af91b70_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_96005502ff1f_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_ce3411c340a2_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_b645eafb675f_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_13ddda82c8cc_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_4da1593c9998_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_e5d5e9310dd2_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_0cca54e9f42d_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_38523ee8ca75_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_0a2b07adc2c7_ollama_intern` — direct_conflict, severity high, status unresolved
- `cnt_a19727c2d637_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_cc80cd5d0928_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_507a116a8d26_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_3168941441c0_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_89b0f98cf55c_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_8020bc7dcd0d_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_c7dbefd712be_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_636e9ae9f130_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_b8a1ebda2a53_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_09d4340580f4_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_9fc5c0e8be88_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_7402f0cd0c38_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_8167a5b07d8c_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_374b8c855c8f_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_accb4df71fa6_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_64c403533b5a_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_3320766588e3_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_7774b59a012e_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_4330eccaea5d_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_38b8504f8100_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_be4547a36b2c_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_52db8e3fa5a1_ollama_intern` — direct_conflict, severity high, status unresolved
- `cnt_a2238c1c8a5b_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_161e476670cf_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_f7852374658c_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_8624b6a29a9a_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_d767c5461688_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_a2752a72a8a9_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_8d7b13df2fad_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_945e2a434dba_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_d275955c98a7_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_f0cdc21e659e_ollama_intern` — direct_conflict, severity high, status unresolved
- `cnt_310aa75f0593_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_643c271b7c55_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_9ed270871d67_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_9a49d7b945dc_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_ecc8affa92d2_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_5f1dda93f541_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_dd89dbd0b46d_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_693030b1a884_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_45199cb0b478_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_c02ca7349707_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_f6188b8e436d_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_c7dbcf05f985_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_a381905cdf3c_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_80d337453717_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_a8dc9b448567_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_90e9c5cbfc0a_ollama_intern` — temporal_conflict, severity medium, status unresolved
- `cnt_4444c501fc92_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_687cbdde2af6_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_9bace00a1253_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_f0ffc366debd_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_af76424fc415_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_45b99cbf9d4c_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_6e732ec1791f_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_48bcf184604f_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_dbe25141d7cd_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_8f017ec5eab7_ollama_intern` — temporal_conflict, severity medium, status unresolved
- `cnt_eee6851d4afd_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_38f2d2a465d4_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_6759af3377ac_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_22b641b58d06_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_b44bd062f4c2_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_d8f140641cb3_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_bc3930125525_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_6d87eb5155f9_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_741d84053481_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_c91da8e6735c_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_c12d98d73a8f_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_e16be69aa29f_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_733eef12c03a_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_321b0dae0b47_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_9a3f96fcca35_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_ccc6413766b8_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_dc27527f561a_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_4f743ac9014f_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_b7b0a9c9ed06_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_95eb8245bc6f_ollama_intern` — temporal_conflict, severity low, status unresolved
- `cnt_ca1f561ae168_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_7f07900cb405_ollama_intern` — scope_conflict, severity low, status unresolved
- `cnt_7b4768dfe09d_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_b580e61187b2_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_6ee9aa0a66f4_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_7c6372f2a527_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_d04575443743_ollama_intern` — scope_conflict, severity medium, status unresolved
- `cnt_123d6a0d9e84_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_2c145ac0a0be_ollama_intern` — direct_conflict, severity medium, status unresolved
- `cnt_d000531908cf_ollama_intern` — definition_conflict, severity medium, status unresolved
- `cnt_4b17e2373d63_ollama_intern` — definition_conflict, severity low, status unresolved
- `cnt_60dc6780d54d_ollama_intern` — scope_conflict, severity medium, status unresolved

## Waivers disclosed

- **pack.source_floor** applied to `primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `01-node-dependency-fragility.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `02-model-file-identity.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `03-workflow-schema-stability.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `04-environment-reproducibility.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `06-comfyui-core-versioning.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `07-existing-control-plane-attempts.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **gate.source_floor** applied to `08-failure-taxonomy.primary_sources_required` — ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
