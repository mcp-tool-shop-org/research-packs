# How to read this pack

This is the `comfyui-workflow-durability` package — the frozen evidence base for Experiment 1 of the `research-os` v1 arc.

**Topic:** What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?

**Frozen:** 2026-05-09T08:30:02.276Z | **Sections:** 8 | **Accepted claims:** 302

---

For a general introduction to what claim IDs mean, what "frozen" means, what the freeze receipt is, and how to navigate the evidence layers, see [docs/how-to-read-a-pack.md](../../docs/how-to-read-a-pack.md).

---

## Pack-specific notes

### Bundle thesis

The synthesis thesis is a six-element state bundle. Every section of the pack provides evidence for at least one element. The elements are:

1. **ComfyUI core version** — tracked by section 06; release cadence ~2 weeks means drift is fast
2. **Python / PyTorch / CUDA environment** — tracked by section 04
3. **Custom-node dependency state** — tracked by section 01; state is a (repository URL, Git commit hash, pip dependency state) tuple per node
4. **Model checkpoint identity** — tracked by section 02; name + file hash, not name alone
5. **Workflow/API schema format** — tracked by section 03; schema version must be stored with the JSON
6. **Distribution metadata** — tracked by section 05; the community-distribution tier has three confirmed gaps (broken model download path, incomplete snapshot coverage, batch metadata corruption)

### Why all 8 gates show `warn`

Every section gate verdict is `warn` (not `pass` or `fail`). This reflects that all eight sections carry a `gate.source_floor` waiver — ComfyUI core versioning behavior is defined by canonical Comfy-Org maintainer surfaces (raw.githubusercontent.com, docs.comfy.org, api.github.com), and independent third-party sources discuss usage but are not primary sources for platform version semantics. The waiver converts a `primary_sources_required` failure to `pass_with_waiver`; all eight sections passed the accepted-claim floor and source-diversity floor.

### Contradiction records: 171 preserved

The pack carries 171 preserved contradiction records. These are not active blockers — they were disclosed and preserved at freeze. The closure ledger (`sections/*/contradiction-resolutions.jsonl`) records the disposition of every detected contradiction. The freeze succeeded because all 171 records were resolved (disclosed) before freeze ran. The synthesis files disclose them by category in `synthesis/decision-brief.md`.

### Community-source-accessibility finding

Section 05 (`05-community-distribution-patterns`) is the strongest Experiment 1 finding. The three public community-gallery URLs that would be most useful for studying workflow sharing were all inaccessible under the v0.1 fetch model:

- `comfyworkflows.com/` → HTTP 402 Payment Required
- `openart.ai/workflows` → JavaScript shell (CSR, no extractable prose)
- `civitai.com/models?types=Workflows` → JavaScript shell

This is not a gap in the research execution — it is an honest structural finding about what the text-stable source tier can and cannot reach. The evidence base for section 05 uses the canonical docs and GitHub Search API issues endpoints that were text-accessible.

### Waivers

Eight `gate.source_floor` waivers are active, one per section. One pack-level `pack.source_floor` waiver is also active. All are disclosed in `synthesis/decision-brief.md`.

### Operating mode used

This pack was gathered with operator-staged URLs as the primary source-acquisition path. LLM-discover hallucination was 100% on the first attempt (all 8 discovered URLs were wrong GitHub repos or invented URLs). The reliable path for all 8 sections was: verify URLs against `docs.comfy.org` and `api.github.com` before gather, stage them in `urls.operator-staged.txt`, and bypass discovery. See [docs/operator-playbook.md](../../docs/operator-playbook.md) for the full operating doctrine earned by this arc.

### Verify this pack

From the `research-packs` root:

```bash
node scripts/verify-pack.mjs packages/comfyui-workflow-durability
```

This re-computes sha256 fingerprints for every canonical artifact in `pack/` and compares them to the freeze receipt. PASS confirms the pack has not been modified since freeze.
