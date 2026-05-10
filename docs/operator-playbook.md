# Operator Playbook

This document distills operating doctrine for running research packs to freeze using [`research-os`](https://github.com/mcp-tool-shop-org/research-os). It is a living document — each arc contributes earned doctrine.

Mirrored in the `research-os` handbook at [`/handbook/operator-playbook/`](https://mcp-tool-shop-org.github.io/research-os/handbook/).

---

## Source format preferences

### Avoid GitHub UI HTML

GitHub release pages, issue list pages, and wiki pages fetch successfully (HTTP 200, ~600 KB body) but deliver JavaScript-rendered chrome, not page content. The research-os fetch layer captures what the server returns; it has no headless browser. Claims extracted from GitHub UI HTML are grounded to navigation boilerplate ("GitHub Copilot", "GitHub Spark", "GitHub Sponsors"), not research content.

**Prefer instead:**
- `raw.githubusercontent.com/<owner>/<repo>/master/<file>` — raw file content, no chrome
- `api.github.com/repos/<owner>/<repo>/releases?per_page=20` — JSON release metadata
- `api.github.com/repos/<owner>/<repo>/tags?per_page=20` — JSON tag list (use when a repo uses tags instead of releases, e.g., ComfyUI-Manager)
- `api.github.com/search/issues?q=repo:<Owner>/<Repo>+keyword1+keyword2&per_page=20` — keyword-filtered GitHub issues (see below)
- `docs.<project>.org/` or `<project>.readthedocs.io/` — server-rendered documentation pages

**Check first:** Fetch the URL and verify that the response contains real prose, not JavaScript bundle tags. A 200 OK with `<script type="module">` dominant content is a GitHub UI HTML page.

### Use the GitHub Search API for keyword-filtered issues

The GitHub Issues endpoint (`/repos/<owner>/<repo>/issues`) silently ignores the `q=` parameter. A URL like:

```
api.github.com/repos/Owner/Repo/issues?state=all&q=missing%20model&per_page=20
```

returns the 20 most recent issues regardless of the `q=` value. The parameter is not an error — it is silently dropped.

For keyword-filtered results, use the search API:

```
api.github.com/search/issues?q=repo:Owner/Repo+keyword1+keyword2&per_page=20
```

The search endpoint returns a `{total_count, items}` JSON dict (not a plain array). The first excerpt for this source type is typically a JSON metadata fragment (`[{"url":"...","repository_url":"..."}`); excerpts from `_002` onward contain coherent issue prose.

### `llms.txt` aggregate sources

Projects that publish `llms.txt` (e.g., `docs.comfy.org/llms.txt`) bundle their full documentation as a single concatenated file for LLM consumption. These sources produce expected `source_dominance` — 50%+ of extracted claims from a single URL is normal and correct. The triage layer's `parked_overdense_source` cap handles this correctly.

Approve `llms.txt` URLs when you need breadth over precision; use individual doc page URLs when you need a targeted section. Expect triage to cap the aggregate source; the net accepted claims will be proportionate to the quality of the underlying docs, not the file size.

---

## Discovery

### Operator-staged URLs over LLM discovery for code-repository topics

LLM-based discovery (`research-os discover run`) works well for topics where the source landscape is broadly documented and stable. For code-repository topics (framework documentation, tool configuration, version-specific behavior), LLM discover hallucination is high — discovered URLs are often wrong repos, wrong orgs, or invented paths.

**The reliable path for code-repository topics:**
1. Verify URLs manually against the canonical project documentation, GitHub API, and search results before gather.
2. Stage them in `urls.operator-staged.txt` in the section directory.
3. Run `research-os gather <section> --url <url>` or `--approved` against the staged list.
4. Bypass `research-os discover run` entirely for this class of topic.

The `urls.operator-staged.txt` pattern is a first-class input; `discover run` is an optional accelerator for topics where the source landscape is well-indexed.

---

## Contradiction detection

### Heuristic detector is the standard for narrow-topic documentation sections

The ollama-intern contradiction detector uses a Jaccard token-overlap prefilter before running LLM classification on pairs. On narrow-topic sections (all claims share vocabulary like "workflow," "json," "schema," "install," "node"), the prefilter passes a large fraction of the N×(N-1)/2 pairs for LLM classification. With 50+ claims and high token overlap, the detector can stall for 20+ minutes with zero output.

**Canonical surface (research-os ≥ v0.3.0): pass `--detector heuristic` to `contradict map`.**

```powershell
# PowerShell
research-os contradict map <section> --triaged-only --detector heuristic
```

The flag is the canonical operator surface: it is environment-independent, fails fast on invalid values, and announces the chosen detector visibly on every run. The three modes — `auto` (default, env-var-driven), `heuristic` (always works, no LLM), `ollama-intern` (require LLM, fail visibly if unavailable) — are documented in the research-os handbook's [contradict map](https://mcp-tool-shop-org.github.io/research-os/handbook/contradict-map/) page.

**Do not rely on clearing `OLLAMA_INTERN_MODEL` to force fallback.** That earlier workaround was state-dependent: it worked when no default model was installed but stopped working silently once `hermes3:8b` (the default) was pulled — `contradict map` in `auto` mode would re-acquire the default and stall on narrow-topic sections. F-09 from Experiment 3 Session 1 (XRPL pack) earned the `--detector` flag fix; the env-var-clearing pattern is now superseded.

The heuristic detector is pure CPU, completes in seconds for 1,000+ pairs, and correctly finds zero contradictions on sections where claims describe orthogonal aspects of the same phenomenon (failure modes, configuration settings, schema fields).

**When to use the ollama-intern detector:** Wide-topic sections where claims span genuinely different domains (e.g., different tools in a survey section, different failure categories). The prefilter passes fewer pairs because vocabulary overlap is low, so the LLM calls complete in reasonable time. Use `--detector ollama-intern` to require the LLM detector explicitly and fail visibly if the configured model is unavailable, instead of silently falling back to heuristic.

---

## Model environment discipline

### Set `OLLAMA_INTERN_MODEL` explicitly via PowerShell before every LLM-dependent command

`research-os` uses `OLLAMA_INTERN_MODEL` as the environment variable for the Ollama model. Every LLM-dependent command — `claim extract`, `review`, `contradict map` — reads this variable. If it is unset, the commands default to `hermes3:8b`; if that model is not pulled, they fall back to heuristic silently.

```powershell
# PowerShell — set before each LLM-dependent command
$env:OLLAMA_INTERN_MODEL = "hermes3:8b"
research-os claim extract <section>
research-os review <section> --triaged-only --preset hermes-two-pass --profile hermes-two-pass
```

**Why PowerShell, not Bash env-prefix:** On Windows, the Bash `VAR=value command` env-prefix pattern fails due to shell dispatch. Set the variable as a PowerShell `$env:` assignment.

**Silent fallback risks:** If `OLLAMA_INTERN_MODEL` is set to a model that isn't pulled, claim extract silently falls to the heuristic extractor. Heuristic extractor produces `parked_weak_scope` claims (quality ~0.15) vs ollama_intern's `needs_scope_repair` claims (quality ~0.75). Running `claim extract` without the env var can leave zero claims selected for review. Verify the model is pulled before running LLM-dependent commands.

**Background processes:** `OLLAMA_INTERN_MODEL` set in a foreground shell does not propagate into background processes spawned mid-session on Windows. If a command spawns a subprocess in a new shell, re-set the env var in that subprocess.

---

## Publisher-null interpretation

### `publisher: null` is non-deterministic — not a signal of low source quality

The `publisher` field in research-os source cards is populated by an extraction step that can fail for multiple reasons. Across the ComfyUI arc (10 sessions, 8 sections), the same domain (`docs.comfy.org`) returned `publisher: "docs.comfy.org"` in some sessions and `publisher: null` in others, with no deterministic pattern. GitHub API sources (`raw.githubusercontent.com`, `api.github.com`) consistently return `publisher: null`.

**Do not use `publisher: null` as a quality signal.** A source card with `publisher: null` may be a high-quality primary source from the canonical maintainer.

**Pack-level workaround (DEPRECATED as of research-os v0.3.1):** Set `min_independent_publishers: 0` in the pack gate config when publisher extraction is unreliable. This prevents the gate from failing on publisher diversity when the field cannot be trusted. The admitted sources are still evaluated on accepted claim count and source diversity.

> **Deprecated as of research-os v0.3.1.** The pack-level `min_independent_publishers: 0` workaround applies a global guard relaxation across every section in the pack — including sections where multi-publisher diversity is genuinely useful. Use **section-scoped source waivers** (below) instead, which apply only to the section that needs them and disclose the rationale + compensating controls in the audit trail. The historical pack-level pattern remains valid for already-frozen packs (e.g., `packages/comfyui-workflow-durability/`) — its freeze receipt is unchanged. New packs should prefer the section-scoped pattern.

---

## Section-scoped source waivers (research-os ≥ v0.3.1)

**Use section-scoped source waivers when publisher diversity is structurally incompatible with the section's truth source, not when a section merely failed to find enough sources.**

This is the load-bearing distinction. The waiver is a discipline-shifting tool, not a shortcut around weak research. The same canonical phrasing appears in [research-os/docs/section-scoped-waivers.md](https://github.com/mcp-tool-shop-org/research-os/blob/main/docs/section-scoped-waivers.md) and the [handbook page](https://mcp-tool-shop-org.github.io/research-os/handbook/section-scoped-waivers/) — public guidance is consistent across the surface by design.

### When to use it (valid cases)

Section-scoped waivers exist for sections where the truth itself is **structurally single-publisher**. Adding third-party publishers cannot improve ground truth in these cases — it can only add interpretation layers on top of the canonical authority.

- **Canonical protocol-definition sections** — XRPL XLS standards, Ethereum EIPs on a single chain, BIPs for a single Bitcoin codebase. The protocol foundation IS the canonical source. Earned by Experiment 3 (XRPL pack Session 2, 2026-05-09).
- **Single-vendor API definition sections** — a vendor's own OpenAPI spec is the canonical truth for the API itself; third-party "API explainers" are downstream interpretations, not corroborating primaries.
- **Single-foundation standards sections** — W3C / IETF / IEEE specs where the standards body is the canonical authority by design.

The common shape: the section is documenting *what something is* against its canonical specifying authority, not *what people think about it*.

### When NOT to use it (invalid cases)

Three patterns operators must NOT use the waiver mechanism for. Each is a research-quality failure dressed up as a publisher-diversity exception.

- **"I couldn't find enough independent sources"** — not a waiver case. Either expand source curation (academic papers, exchange/custodian operational docs, independent block explorers, sourced journalism) or honestly accept Terminal B for the section. The publisher-diversity floor is doing what it was designed to do: catching under-curation.
- **"The reviewer is being too strict"** — not a waiver case. The reviewer's per-claim findings continue to apply normally regardless of any waiver. Per-claim `source_quality_problem`, `scope_widening`, `overgeneralized_claim`, etc. still route claims to repair. The section-scoped waiver only neutralises the *section-wide* `source_cluster_monopoly` finding's contribution to per-claim decision routing — it does not silence per-claim quality signals.
- **"I want to ship faster"** — not a waiver case. The waiver requires audit-disclosed `reason` and non-empty `compensating_controls[]`; an empty or hand-wavy waiver fails schema validation.

### Schema and example

The waiver lives under `primary_source_waiver.section_waivers[]` in `research.yaml`. Each entry stands alone; multiple entries can target different sections, or the same section with different scopes (`min_independent_publishers`, `primary_sources_required`).

```yaml
primary_source_waiver:
  status: none
  compensating_controls: []
  section_waivers:
    - section_id: 01-token-surface-and-standards
      scope: min_independent_publishers
      reason: |
        Section 01 defines XRPL token surfaces from canonical protocol sources.
        The authoritative source of truth is intentionally concentrated in XRPL
        Foundation documentation, XLS standards, and rippled implementation/release
        records. Third-party publishers can explain or interpret these standards,
        but they are not primary authorities for protocol semantics.
      compensating_controls:
        - "Sources span multiple canonical artifact types: xrpl.org docs, rendered XLS standards, raw standards markdown, rippled release data, and GitHub implementation discussions."
        - "Claims remain span-grounded and reviewed individually."
        - "Section synthesis must disclose the single-foundation source concentration."
        - "Third-party sources may be added in later sections for adoption, marketplace, metadata, or operational interpretation, but are not required for protocol-definition truth."
```

### Required components

Three operator disciplines must hold for the waiver to be honest:

1. **`reason`** — non-empty (schema-enforced; empty values fail validation).
2. **`compensating_controls[]`** — at least one entry (schema-enforced).
3. **Synthesis-time disclosure** — the section's `final-report.md` must explicitly surface that the publisher concentration was deliberately accepted, with the rationale visible in the prose. NOT enforced by code; required by operator practice. The waiver mechanism captures the structural fact in `research.yaml` and the freeze receipt; the synthesis-time disclosure carries the same fact into the human-readable output.

### Counterexamples within the same pack

Within a single pack, the waiver applies to some sections and not others. Within the XRPL creator-token pack:

- **Section 01 (token surface and standards)** — canonical protocol; waiver applies.
- **Section 07 (metadata and off-chain durability)** — spans IPFS, Arweave, HTTP-served metadata, marketplace indexers; multi-publisher diversity is genuinely useful; do NOT waive.

When in doubt: the waiver is for sections that document *what something is*, not *what people think about it*.

### Pack policy still wins

`gates.source_floor.primary_source_waiver_allowed: false` blocks BOTH pack-level and section-scoped waivers. An operator cannot smuggle a waiver past pack policy by rerouting it to section scope.

---

## Community-distribution tier

### Public community galleries are not text-stable under the v0.1 fetch model

Community workflow galleries (OpenArt, CivitAI, Comfy Workflows) are JavaScript-rendered single-page applications or payment-walled. The research-os fetch layer captures static HTTP responses — it has no JavaScript execution context.

- Payment-walled URLs return HTTP 402 or redirect to login pages
- JS-CSR shells return 200 OK with a Next.js or React bundle — no extractable prose
- `<head>` meta tags may contain a few words of context but not substantive research content

This is not an extraction failure — it is a structural incompatibility between the v0.1 fetch model and client-side-rendered sources. For topics where community galleries are the primary evidence surface (workflow sharing behavior, distribution metadata, community adoption patterns), this means the evidence base is limited to canonical documentation and GitHub issues that discuss gallery-side behavior from the user perspective.

**Mitigation:** Use GitHub Search API issues to capture user-reported evidence about community distribution behavior. The `repo:<Owner>/<Repo>+workflow+missing+nodes` search surface captures community-facing frictions even when the gallery URLs themselves are inaccessible.

---

## Session junk claims

### Consider `research-os invalidate` before running `contradict map` when early sessions gathered bad sources

The `claims.jsonl` ledger is append-only. If session 1 gathered JavaScript-chrome sources and produced 50–100 junk HTML-chrome claims, those claims remain in the pool across all subsequent sessions. When `contradict map` runs later (after good sources have been gathered), it pairs junk claims against quality claims, generating a large number of false-positive contradictions (junk×quality category).

For sections where session 1 used bad sources and later sessions gathered replacements:

1. Run `research-os invalidate <section> --source <bad_source_id>` to mark the bad source's claims as invalid before running `contradict map`.
2. Or: accept the contaminated contradiction pool and use the sampling protocol to bulk-classify junk×quality pairs by structural category (see below).

---

## Contradiction sampling protocol for large corpora

When a section has more than 100 unresolved contradictions after `contradict map`, individual per-entry judgment at scale is intractable. Use this protocol:

1. Sample at least 10–15 contradictions across structural categories (junk×quality, quality×quality, junk×junk).
2. Classify the sample individually with per-entry reasons.
3. Identify category-level structural patterns from the sample ("junk×quality where junk is HTML chrome", "quality×quality where claims are complementary aspects of the same feature").
4. Bulk-classify remaining contradictions only by structural category, with the category's shared reason explicitly citing sample evidence ("Sampled 15 of 445 quality×quality pairs; 15/15 were complementary-claim false positives. Bulk rejection per category.").
5. Record both the sample evidence and the bulk reason in the closure ledger.
6. Do NOT use bulk classification on high/blocking severity contradictions — those require per-entry individual judgment.

---

## Pack publish admission accounting (research-os ≥ v0.3.2)

`pack publish` derives the per-section `accepted_claims` count from the **effective accepted set** — unique `claim_id`s whose latest canonical review decision is `accepted_for_synthesis`. Latest-decision-wins precedence per `claim_id`. This is the single canonical "accepted claims" definition that every consumer of the closure ledger uses.

### Why the change matters

`claim-reviews.jsonl` is append-only by design, and reviewer windows can overlap. The same `claim_id` can legitimately receive multiple `accepted_for_synthesis` records — each a real review record, none a duplicate to discard. The pre-v0.3.2 admission contract used a strict equality check between the raw row count in `claim-reviews.jsonl` and the legacy `pack-audit.json::accepted_claims` count, which surfaced a "closure-ledger seam disagreement" refusal whenever windows overlapped.

The v0.3.2 contract derives the effective set first, then admits.

### What the operator sees

When the legacy `pack-audit.json::accepted_claims` count differs from the effective set, `pack publish` emits a single warning per affected section:

```
section <id>: legacy pack-audit.json accepted_claims (24) differs from
effective accepted set (19). Using effective count (19) in manifest.
Legacy audit count preserved in pack/audits/pack-audit.json (immutable
per Law 15).
```

Admission proceeds. The archive manifest's `sections[].accepted_claims` reflects the effective count (19 in the example). The legacy audit file is preserved verbatim inside `pack/audits/pack-audit.json` because freeze artifacts are immutable.

### What still hard-refuses

The contract continues to refuse on real integrity problems:

- **Phantom claim_id** — a `claim_id` cited as accepted in `claim-reviews.jsonl` but absent from `claims.jsonl`.
- **Incompatible duplicate decisions** — same `claim_id` + same `created_at` carrying different decision values (e.g., one `accepted_for_synthesis`, one `rejected`).
- **Section gate not synthesis-eligible** — gate result missing or `synthesis_eligible: false`.

These are not soft-warns — they signal a damaged closure ledger and pack publish exits 2 without writing.

### Earned by

XRPL creator-token durability pack (Experiment 3 pack #2 of 3, Session K, 2026-05-10). Section 07 surfaced the seam: 24 raw `accepted_for_synthesis` rows but only 19 unique `claim_id`s. Refusal was correct under the v0.3.1 admission contract; v0.3.2 reconciles the contract with the closure-ledger reality. Earlier frozen packs (`comfyui-workflow-durability`, `research-os-self-dogfood`) regress identically — their effective count matched the legacy count, so neither sees a warning.

---

## v0.1 self-dogfood arc — structural notes

The v0.1 dogfood pack used `mistral-nemo:12b` as the extractor and reviewer model (hermes3:8b not pulled on the 5080 rig at the time). The `hermes-two-pass` review profile is calibrated against the seeded-failure fixture with `hermes3:8b` as the canonical model. The dogfood arc's proof is honest — it discloses the model substitution — but a hermes3-based receipt is Experiment 6 in the roadmap.

The primary lesson from the v0.1 arc is architectural, not source-quality: the overproduction-then-curate design (extract abundance → triage shape → review accept synthesis-worthy) works. The gate's readiness predicate must count active blockers, not candidate-set completeness. Pattern 2 (active-blocker readiness) was earned during the v0.1 dogfood arc; its enforcement was extended to cover the calibrated reviewer's full decision vocabulary (`needs_scope_repair`, `needs_source_repair`, `needs_human_review`) during v1 Experiment 1 (commit `22b5dba`).
