# Working Report

**Pack:** What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?
**Pack ID:** `179752ef486d`

> **Guardrails:**
> - This is the working synthesis area. Drafts here are not final.
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**
> - **Every paragraph must cite at least one accepted_claim_id (inline `[claim:clm_...]`).**
> - **Unresolved contradictions must remain visible in the prose, not summarized away.**

## Working synthesis

### Bundle thesis

The research question asks what makes ComfyUI workflows durable over time and what a local-first control plane must track to keep them runnable. The evidence across all eight sections points to a single structural answer: a workflow JSON file is a necessary but insufficient artifact. Durability requires capturing a surrounding state bundle composed of six elements. Failing to track any one element produces a class of reproducible failure that cannot be resolved by re-reading the workflow JSON alone.

### Section thread: 01 — Custom-node dependency fragility

Custom nodes are installed into ComfyUI's working directory and managed through ComfyUI Manager, which is the recommended installation method [claim:clm_f9b159fab5ef_ollama_intern_2]. Custom node version control is based on Git version control [claim:clm_55456d4dedfa_ollama_intern_13], meaning that node state is representable as a commit hash per installed repository. Custom node dependency conflicts can occur [claim:clm_55456d4dedfa_ollama_intern_3], and individual nodes can be temporarily disabled to isolate the source of a conflict [claim:clm_55456d4dedfa_ollama_intern_2]. Binary search over the node set is a documented troubleshooting approach [claim:clm_aede2f10d470_ollama_intern_2]. Manager can detect missing nodes after installation [claim:clm_55456d4dedfa_ollama_intern_19] and can install them on demand [claim:clm_1e2124f6f8d4_ollama_intern_21]. The control-plane implication is that node state at workflow-save time must be snapshotted as a list of (repository URL, commit hash, pip dependency state) tuples, not just node names.

Note: Snapshot support is incomplete for custom nodes not managed by Git [claim:clm_e7045b6bccdb_ollama_intern_5]. Non-Git nodes fall outside the current Manager snapshot mechanism and require separate tracking.

### Section thread: 02 — Model-file identity

Models are selected in a loader node on the canvas by name [claim:clm_2e0add2bdec7_ollama_intern_3]. Prompt execution fails when a checkpoint name is not found in the loader's model list [claim:clm_e1e83dbebd28_ollama_intern_4]. Models from different architecture families cannot be used together [claim:clm_e1e83dbebd28_ollama_intern_3]. If a model file is corrupted during download, re-downloading may resolve the issue [claim:clm_e1e83dbebd28_ollama_intern_9]. ComfyUI provides a UI option to display warnings for missing nodes in workflows [claim:clm_c038edbf6251_ollama_intern_17]. The control-plane implication is that model-file identity must be recorded by filename and, where available, by file hash, to allow detection of missing or corrupted files before workflow execution.

### Section thread: 03 — Workflow/API schema stability

The workflow JSON for ComfyUI follows the JSON Schema specification [claim:clm_981216eba718_ollama_intern_1]. The JSON schema for ComfyUI workflow version 0.4 is the current versioned reference [claim:clm_7c8ae5fe342a_ollama_intern_4]. The workflow JSON includes specific properties such as `links_ontop`, `align_to_grid`, and `groups` [claim:clm_981216eba718_ollama_intern_3] [claim:clm_981216eba718_ollama_intern_5]. The current ComfyUI frontend will be a snapshot from the legacy repository [claim:clm_f4ce9a16c6b4_ollama_intern_29]. ComfyUI Desktop builds a new release using the latest stable core version [claim:clm_f4ce9a16c6b4_ollama_intern_8]. The control-plane implication is that the schema version must be stored alongside the workflow JSON; workflows saved under one schema version may not load cleanly under a different frontend version.

Contradiction preserved: `cnt_9c8a42519e8e_ollama_intern` (direct_conflict, high severity) — unresolved tension in this section about API schema behavior.

### Section thread: 04 — Environment reproducibility

The first step in manual installation is creating a virtual environment [claim:clm_664a4a54b4c3_ollama_intern_2]. Installing PyTorch with the correct versions is a required step [claim:clm_664a4a54b4c3_ollama_intern_5], and ComfyUI supports PyTorch versions from 2.4 onwards [claim:clm_a8c5d541c698_ollama_intern_6]. Some PyTorch features and optimizations only work on newer versions [claim:clm_a8c5d541c698_ollama_intern_7]. GPU driver updates may be necessary when ComfyUI fails to start [claim:clm_a8c5d541c698_ollama_intern_11]. ComfyUI Portable is currently only supported on Windows [claim:clm_a8c5d541c698_ollama_intern_4]. The control-plane implication is that the full environment triple (Python version + PyTorch version + CUDA/ROCm build variant + OS) must be captured in the bundle.

**Waiver active:** `gate.source_floor` applied to `04-environment-reproducibility.primary_sources_required` — ComfyUI core versioning behavior is defined by canonical maintainer surfaces; independent third-party sources can discuss usage but are not primary sources.

### Section thread: 05 — Community distribution patterns

Restoration of snapshots takes effect on the next ComfyUI startup [claim:clm_e7045b6bccdb_ollama_intern_4]. Snapshot support is incomplete for custom nodes not managed by Git [claim:clm_e7045b6bccdb_ollama_intern_5]. Later images in a batch are non-reproducible due to altered embedded metadata [claim:clm_e19e5e376175_ollama_intern_12] [claim:clm_e19e5e376175_ollama_intern_21]. No workarounds or solutions are currently available for the missing-model download failure [claim:clm_d56e68044c24_ollama_intern_7], and this failure is not limited to video models [claim:clm_d56e68044c24_ollama_intern_21].

**Community-source-accessibility finding:** The current community-shared workflow ecosystem lacks tooling to reliably reconstruct the full state bundle. Two confirmed gaps: (a) the model download path is broken and has no workaround [claim:clm_d56e68044c24_ollama_intern_7]; (b) snapshot coverage excludes non-Git nodes [claim:clm_e7045b6bccdb_ollama_intern_5]. A local-first control plane that captures bundle state at authoring time is the compensating control for both gaps.

### Section thread: 06 — ComfyUI core versioning

ComfyUI Core releases a new major stable version roughly every 2 weeks [claim:clm_f4ce9a16c6b4_ollama_intern_7]. comfy-cli enables cross-platform compatibility with Windows, macOS, and Linux [claim:clm_e804faef8c79_ollama_intern_4] and supports ComfyUI installation and management. The `comfy which` command checks the target workspace path [claim:clm_e804faef8c79_ollama_intern_10] [claim:clm_e804faef8c79_ollama_intern_11]. The `comfy node restore-snapshot` command restores a specific node snapshot [claim:clm_e804faef8c79_ollama_intern_17]. The ~2-week release cadence means that a workflow pinned to a specific core version can drift from the ambient installation within days if no version lock is maintained.

**Waiver active:** `gate.source_floor` applied to `06-comfyui-core-versioning.primary_sources_required`.

Note: Multiple contradictions (>100) preserved in section 06. The high contradiction density reflects that many source excerpts overlap in scope (version bumps described from different angles). These are recorded in `sections/06-comfyui-core-versioning/contradictions.jsonl` and are not flattened here.

### Section thread: 07 — Existing control-plane attempts

ComfyUI Manager offers management functions for custom nodes [claim:clm_1e2124f6f8d4_ollama_intern_1] and supports installing missing nodes [claim:clm_1e2124f6f8d4_ollama_intern_21]. Manager version 3.0 was released in March 2023 [claim:clm_4c437e284d95_ollama_intern_1], establishing it as a durable community tool. comfy-cli provides workspace targeting via `--workspace`, `--recent`, and `--here` options (these cannot be combined) [claim:clm_cf20a276ca4d_ollama_intern_10], and supports showing information about custom nodes [claim:clm_cf20a276ca4d_ollama_intern_14] and installing specific node packs [claim:clm_cf20a276ca4d_ollama_intern_15]. Pinokio scripts are isolated by design and stored under an isolated location [claim:clm_a295cc4f28d3_ollama_intern_3]. CUDA or ROCm installation is necessary depending on the GPU [claim:clm_8f706291ff12_ollama_intern_4]. The available tooling covers node management and workspace addressing but does not yet integrate model-file identity tracking, environment snapshotting, or schema versioning into a single control-plane artifact.

**Waiver active:** `gate.source_floor` applied to `07-existing-control-plane-attempts.primary_sources_required`.

### Section thread: 08 — Failure taxonomy

Tensor size mismatch errors occur when models from different architecture families are combined [claim:clm_e1e83dbebd28_ollama_intern_1]. Models from different architecture families cannot be used together [claim:clm_e1e83dbebd28_ollama_intern_3]. Custom node frontend extension conflicts surface as preview image display problems [claim:clm_aede2f10d470_ollama_intern_3]. Updating frontend dependencies is necessary after updating ComfyUI via Git [claim:clm_fcdd7f1c90e9_ollama_intern_15]. Backing up all custom nodes is the documented first step in troubleshooting [claim:clm_aede2f10d470_ollama_intern_12]. The backup/restore cycle itself depends on the control-plane bundle: without knowing which node versions were installed, restoring to a known-good state requires reconstructing that state from external sources.

**Waiver active:** `gate.source_floor` applied to `08-failure-taxonomy.primary_sources_required`.

### Cross-section weave

Five bundle elements cross-cut multiple sections:
- **Core version** appears in S06 (release cadence), S02 (Desktop stable), S03 (schema snapshot), S04 (PyTorch compatibility).
- **Node state** appears in S01 (dependency conflicts), S07 (Manager/comfy-cli tooling), S05 (snapshot incompleteness), S08 (isolation troubleshooting).
- **Model identity** appears in S02 (loader name match), S08 (architecture family constraint), S05 (Download All failure).
- **Environment** appears in S04 (venv + PyTorch), S06 (venv creation in comfy-cli), S07 (CUDA/ROCm install).
- **Distribution metadata** appears in S05 (batch metadata corruption, snapshot gaps) as an unmet requirement across all elements.

The failure taxonomy (S08) confirms that every bundle element, when missing or mismatched, produces a distinct and documented failure class. This convergence from independent sections supports the bundle thesis.

### Out-of-domain disclosures

Claims `clm_b507da5fa466_ollama_intern_2` through `_6` appear in S06 accepted set but assert facts about GitHub Copilot, GitHub Spark, and GitHub Sponsors — product feature pages likely loaded as adjacent content. These claims are accepted_for_synthesis by the reviewer but their asserts are out-of-scope for the bundle thesis and are not cited in this synthesis.

Claims `clm_72d8ae653457_ollama_intern_2` through `_12` in S03 describe Comfy Cloud API concurrency behavior. These are in scope for workflow distribution but not for the local-first control-plane question; they are noted but not cited in the core synthesis prose.
