# Source Quality Notes

This document accumulates per-arc findings about source quality, source-type compatibility, and evidence gaps discovered while running packs to freeze. It is a living record — each new pack arc contributes findings.

<!-- Filled at v1 Experiment 1 closeout — see research-os/docs/experiment-1-proof.md when published. -->

---

## v0.1 Self-dogfood arc (research-os-self-dogfood)

*Pack frozen 2026-05-08. See `packages/research-os-self-dogfood/` for the full evidence base.*

The v0.1 self-dogfood pack researched `research-os`'s own spec — a deliberately self-referential topic. Source quality findings from this arc are limited to structural observations (JSONL as a format, SQLite FTS5 as a substrate, CLI design patterns) because the pack's primary sources are operator inputs (the design decisions themselves), not publications. A `primary_source_waiver` is active for all 8 sections.

**Key structural finding:** The overproduction-then-curate architecture (2,647 candidate claims → 296 accepted) performed as designed. The triage layer's `parked_overdense_source` cap prevented any single source from dominating synthesis. The adversarial reviewer's `valid_but_low_value` category correctly filtered low-signal claims that passed the source-truth bar but added no synthesis value.

**Note on section 03 (source-and-claim-truth):** This section is the primary regression fixture for `research-os` itself. 715 candidates were extracted; 42 were accepted. The high candidate count reflects the density of citation-practice and provenance literature. The 7 dispositioned claims (`out_of_bounds_regression_fixture`) are intentionally excluded from synthesis and must not be cited in future work.

---

## v1 Experiment 1 arc (comfyui-workflow-durability)

*Pack frozen 2026-05-09. See `packages/comfyui-workflow-durability/` for the full evidence base.*

Eight sections, 11 sessions, 302 accepted claims across 8 sources categories. The section topic is ComfyUI workflow durability — a domain with no vocabulary overlap with `research-os` itself, making this the first genuine non-self-referential proof of the chain.

### GitHub UI HTML is not a reliable evidence source

GitHub release pages, issue list pages, and wiki pages fetch successfully (HTTP 200) but deliver JavaScript-rendered chrome. Session 1 of Section 06 fetched 8 GitHub UI HTML pages and produced structurally grounded but semantically invalid claims ("desktop release includes GitHub Copilot Write better code with AI"). The chain held — the gate correctly blocked Section 06. The fix was source-swapping to text-accessible URLs (`raw.githubusercontent.com`, `docs.comfy.org`, `api.github.com`).

**Surface signal:** A source card with `source_type: unknown`, `publisher: null`, and zero key_points is almost always a GitHub UI HTML page. Gather-time detection of this pattern is a v0.2 candidate.

### Community gallery tier is not text-stable under v0.1 fetch

All three public community workflow gallery URLs failed text-accessibility:
- `comfyworkflows.com/` → HTTP 402 Payment Required (payment-walled)
- `openart.ai/workflows` → JavaScript CSR shell (Next.js, no extractable prose)
- `civitai.com/models?types=Workflows` → JavaScript shell (76 KB, prose only in `<head>` meta)

This is the strongest Experiment 1 finding: the section most directly about community distribution patterns (`05-community-distribution-patterns`) could not reach the community distribution tier. Evidence came from canonical docs and GitHub Search API user-reported issues instead. This gap is structural — the v0.1 fetch model has no headless browser — and is a v0.2 candidate.

### `llms.txt` aggregate sources produce expected source_dominance

Projects that publish `llms.txt` bundle their full documentation as a single file. When staged alongside individual doc pages from the same domain, the aggregate URL contributed 51% of extracted claims in one section (Section 06, Session 2). The triage `parked_overdense_source` cap handled this correctly. Not a defect — document the expected source_dominance signal in the discovery provider hint.

### GitHub Search API issues: first excerpt is a JSON metadata fragment

When fetching `api.github.com/search/issues`, the first excerpt (`_001`) is the raw JSON array header fragment (`[{"url":"...","repository_url":"..."}`). Coherent issue prose starts at `_002`. The LLM extractor correctly ignores `_001` and extracts from coherent excerpts. Section 08 produced 51 accepted claims from API sources. Structural fix (JSON-aware chunker) is a v0.2 candidate.

### `docs.comfy.org` injects `llms.txt` crawler guidance into page content

All `docs.comfy.org` pages returned content mixing real prose with meta-instructions ("Fetch the complete documentation index at: https://docs.comfy.org/llms.txt"). Key_points can include both real documentation and crawler-directive entries. The chain handles it correctly — real key_points produce real claims, meta-instructions produce shallow claims filtered by triage/review. A gather-time content-shape detector for crawler-meta-instruction patterns is a v0.2 candidate.

### Publisher extraction is non-deterministic across all source types

The `publisher` field in source cards is unreliable. The same domain (`docs.comfy.org`) returned `publisher: "docs.comfy.org"` in some sessions and `publisher: null` in others. GitHub API sources (`raw.githubusercontent.com`, `api.github.com`) consistently return `publisher: null`. Pattern across 10 sessions: non-deterministic, not a stable null. Do not use `publisher: null` as a quality signal. Set `min_independent_publishers: 0` in pack gate config for packs where publisher extraction is unreliable. Publisher derivation from URL canonical form is a v0.2 candidate.

### Ollama-intern contradiction detector stalls on narrow-topic sections (5/5 consecutive)

The ollama-intern contradiction detector uses a Jaccard token-overlap prefilter. On narrow-topic documentation sections (all claims share vocabulary like "workflow," "json," "node," "install"), the prefilter passes a large fraction of N×(N-1)/2 pairs for LLM classification. The detector stalled at 5 minutes with zero output on all 5 sections where it was attempted (Sections 01–05). Heuristic fallback (clear `OLLAMA_INTERN_MODEL`, force CPU-only detector) completed in seconds and found 0 contradictions — appropriate for sections where claims describe orthogonal aspects of the same phenomenon. The ollama-intern detector has never completed on any section in this arc.

### Large-page extraction abort (Section 05)

`docs.comfy.org/development/core-concepts/workflow` (1.78 MB body) fetched cleanly but produced 0 accepted claims because extraction aborted. The `ollama_intern_propositional_paged` extractor aborts on pages above an empirical context-window threshold. Pages >500 KB are at risk. A large-page chunker before extractor LLM calls is a v0.2 candidate.

### LLM discovery had 100% hallucination rate for this topic

All 8 discovered URLs from `research-os discover run` in the first Section 07 session were wrong GitHub repos, wrong orgs, or invented paths. Operator-staged URLs via `urls.operator-staged.txt` were the reliable source-acquisition path for all 8 sections. Discovery is an optional accelerator — it is not reliable for code-repository topics where the source landscape is not broadly indexed by domain name alone.
