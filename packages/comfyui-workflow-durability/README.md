# comfyui-workflow-durability

**Topic:** What makes ComfyUI workflows durable over time, and what should a local-first workflow control plane track to keep them runnable?

**Frozen:** 2026-05-09 | **research-os version:** 0.1.1 | **Accepted claims:** 302 across 8 sections

---

## Executive summary

ComfyUI workflow durability depends on a surrounding state bundle, not on the workflow JSON file alone. A runnable workflow requires six interdependent elements to be captured and tracked together: the ComfyUI core version, the Python/PyTorch/CUDA environment, the installed custom-node dependency state (by Git commit hash), the identity of each model checkpoint by name, the versioned workflow/API schema format, and distribution metadata. Current community tooling has confirmed gaps in capturing this bundle: the missing-model download path is non-functional [claim:clm_d56e68044c24_ollama_intern_7], snapshot coverage excludes non-Git nodes [claim:clm_e7045b6bccdb_ollama_intern_5], and batch-image metadata is altered in ways that break reproducibility [claim:clm_e19e5e376175_ollama_intern_12]. A local-first workflow control plane that captures the bundle at authoring time is the compensating control for all three gaps.

**Waiver disclosure:** All eight sections carry a `gate.source_floor` waiver. ComfyUI core versioning behavior is defined by canonical Comfy-Org maintainer surfaces; independent third-party sources discuss usage but are not primary sources for platform version semantics.

---

## Sections

| Section | Accepted claims | Gate | Synthesis eligible |
|---------|-----------------|------|-------------------|
| 01-node-dependency-fragility | 40 | warn | yes |
| 02-model-file-identity | 29 | warn | yes |
| 03-workflow-schema-stability | 39 | warn | yes |
| 04-environment-reproducibility | 74 | warn | yes |
| 05-community-distribution-patterns | 15 | warn | yes |
| 06-comfyui-core-versioning | 33 | warn | yes |
| 07-existing-control-plane-attempts | 21 | warn | yes |
| 08-failure-taxonomy | 51 | warn | yes |

**Totals:** 302 accepted, 0 dispositioned, Preserved contradiction records: 171

---

## How to read this pack

This package is part of the [`research-packs`](../../README.md) archive.

- **Lane 1 (synthesis):** You are here. See [`synthesis/final-report.md`](synthesis/final-report.md) for the full citation-clean prose.
- **Lane 2 (evidence):** [`pack/`](pack/) — full frozen ledgers, source cards, excerpts, claim reviews, gate results, and `audits/freeze-receipt.json`.
- **Lane 3 (method):** [`../../docs/`](../../docs/) — artifact contract, how-to-read, source quality notes.

To verify this pack's integrity: `node ../../scripts/verify-pack.mjs .` from this directory.

See [`docs/how-to-read-this.md`](docs/how-to-read-this.md) for pack-specific reading notes.

---

## Operator notes

ComfyUI arc operating mode: operator-staged URLs over LLM discovery; text-accessible sources only (raw.githubusercontent.com, docs.comfy.org, api.github.com/search); GitHub Search API canonical form for keyword filtering — the /issues?q= parameter is silently dropped; heuristic contradiction detector for narrow-topic sections (5/5 sessions: ollama-intern stalled every time); llms.txt aggregate-source acceptance with triage capping; community-distribution surfaces inaccessible (JS-shell + paywall + stale-URL — strongest Experiment 1 finding); publisher-null is non-deterministic across all source types, not just GitHub — min_independent_publishers: 0 workaround required for the full arc; hermes3:8b two-pass calibrated reviewer used for sections 04–08; Pattern 2 predicate fix (commit 22b5dba) shipped mid-arc when hermes3 full decision vocabulary exposed stale candidate-set-completeness predicates in audit and cowork handoff.
