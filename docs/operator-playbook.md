# Operator Playbook

This document distills operating doctrine for running research packs to freeze using [`research-os`](https://github.com/mcp-tool-shop-org/research-os). It is a living document — each arc contributes earned doctrine.

<!-- Filled at v1 Experiment 1 closeout — see research-os/docs/experiment-1-proof.md when published. -->

The full external-domain operator playbook (covering source-format preferences, discovery fallbacks, contradiction-detector selection, model-env discipline, and publisher-null interpretation) will be published here at ComfyUI pack freeze, alongside `research-os/docs/experiment-1-proof.md`.

---

## What this will cover

When published, this playbook will address:

- **Source format preferences:** When to prefer `raw.githubusercontent.com` over GitHub UI HTML; when to prefer `api.github.com/search/issues` over `/issues?q=`; when `llms.txt` aggregate sources are appropriate and how triage handles their expected dominance
- **Discovery fallbacks:** When LLM-discover hallucination is high, operator-staged URLs as the primary source-acquisition path; the `urls.operator-staged.txt` pattern
- **Contradiction-detector selection:** When the ollama-intern detector stalls on narrow-topic sections (high Jaccard overlap), and how to force the heuristic detector by clearing `OLLAMA_INTERN_MODEL`
- **Model-env discipline:** Setting `OLLAMA_INTERN_MODEL` explicitly via PowerShell before any LLM-dependent command; why the Bash env-prefix pattern fails on Windows
- **Publisher-null interpretation:** Why `publisher: null` is non-deterministic across source types and sessions; why `min_independent_publishers: 0` is correct for packs where publisher extraction is unreliable
- **GitHub API gotchas:** The `q=` parameter is silently dropped on `/issues` endpoints; the search API form (`/search/issues?q=repo:Owner/Repo+keyword`) is canonical for keyword-filtered results
- **Session junk claims:** When bad sources produce HTML-chrome claims, consider `research-os invalidate` to remove them before running `contradict map` — junk claims contaminate the contradiction pool across sessions

---

## v0.1 self-dogfood arc — structural notes

The v0.1 dogfood pack used `mistral-nemo:12b` as the extractor and reviewer model (hermes3:8b not pulled on the 5080 rig at the time). The `hermes-two-pass` review profile is calibrated against the seeded-failure fixture with `hermes3:8b` as the canonical model. The dogfood arc's proof is honest — it discloses the model substitution — but a hermes3-based receipt is Experiment 6 in the roadmap.

The primary lesson from the v0.1 arc is architectural, not source-quality: the overproduction-then-curate design (extract abundance → triage shape → review accept synthesis-worthy) works. The gate's readiness predicate must count active blockers, not candidate-set completeness. Pattern 2 (active-blocker readiness) is the anti-pattern that caused split-brain verdicts between audit and cowork handoff during the arc; it was fixed before freeze.
