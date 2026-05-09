# Gate Result: 03-workflow-schema-stability

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-09T05:03:52.163Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 198 total, 198 candidate, 198 with evidence excerpt, 0 orphan
- Sources: 48 total (1 primary / 17 secondary / 23 docs / 1 forum / 0 benchmark / 6 unknown), 2 independent publishers, 6 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 156 scoped, 42 universal/untagged, 6 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 47 unknown date

## Waivers applied

### source_floor.primary_sources_required

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** ComfyUI core versioning behavior is defined by the canonical maintainer surfaces: Comfy-Org repositories, GitHub release data, and docs.comfy.org. Independent third-party sources can discuss usage but are not primary sources for platform version semantics.
- **Compensating controls:**
  - Sources span multiple official artifact types: README, release metadata, CLI documentation, and docs.comfy.org pages.
  - GitHub API release data provides structured version history directly from the maintainer.
  - docs.comfy.org is the official documentation surface for workflow, custom node, and interface behavior.
  - Accepted claims still require span-grounded excerpts and promoted review decisions.

## Gate results

### [PASS] source_floor.min_sources

48 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

2 independent publisher(s) >= minimum 0.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.primary_sources_required

Found 1 primary source(s); minimum 2 required. Pre-waiver. Waiver granted with 4 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `src_d44182697e02`

### [WARN] source_floor.failed_fetches_visible

6 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 198 candidate claim(s) reference at least one source_id.

*Blocks synthesis:* false

### [PASS] claim_integrity.no_orphan_claims

All claim source_ids resolve to source cards.

*Blocks synthesis:* false

### [PASS] claim_integrity.source_hashes_present

All candidate claims carry source_hashes.

*Blocks synthesis:* false

### [PASS] claim_integrity.evidence_excerpt_present

All candidate claims carry an evidence_excerpt.

*Blocks synthesis:* false

### [PASS] claim_integrity.fetch_receipt_anchored

All candidate claims trace to at least one successful fetch receipt.

*Blocks synthesis:* false

### [WARN] claim_integrity.no_source_cluster_monopoly

198/198 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_981216eba718_ollama_intern_1`, `clm_981216eba718_ollama_intern_2`, `clm_981216eba718_ollama_intern_3`, `clm_981216eba718_ollama_intern_4`, `clm_981216eba718_ollama_intern_5`, `clm_7c8ae5fe342a_ollama_intern_1`, `clm_7c8ae5fe342a_ollama_intern_2`, `clm_7c8ae5fe342a_ollama_intern_3`, `clm_7c8ae5fe342a_ollama_intern_4`, `clm_049006574d3f_ollama_intern_1` (+188 more)

### [WARN] scope_integrity.no_untagged_universal_claims

42/198 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_07437ed8d167_ollama_intern_1`, `clm_07437ed8d167_ollama_intern_2`, `clm_07437ed8d167_ollama_intern_3`, `clm_07437ed8d167_ollama_intern_4`, `clm_07437ed8d167_ollama_intern_5`, `clm_07437ed8d167_ollama_intern_6`, `clm_07437ed8d167_ollama_intern_7`, `clm_f4ce9a16c6b4_ollama_intern_1`, `clm_f4ce9a16c6b4_ollama_intern_2`, `clm_f4ce9a16c6b4_ollama_intern_3` (+32 more)

### [WARN] scope_integrity.not_constraint_present

Only 6/198 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_981216eba718_ollama_intern_1`, `clm_981216eba718_ollama_intern_2`, `clm_981216eba718_ollama_intern_3`, `clm_981216eba718_ollama_intern_4`, `clm_981216eba718_ollama_intern_5`, `clm_7c8ae5fe342a_ollama_intern_1`, `clm_7c8ae5fe342a_ollama_intern_2`, `clm_7c8ae5fe342a_ollama_intern_3`, `clm_7c8ae5fe342a_ollama_intern_4`, `clm_049006574d3f_ollama_intern_1` (+182 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

156 scoped, 42 universal/untagged, 6 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

47 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_049006574d3f`, `src_07126047391f`, `src_07437ed8d167`, `src_0a0723012f3c`, `src_0a3149c031c5`, `src_118111ce7028`, `src_155d801f1917`, `src_19e3c332733b`, `src_19f4e9c54b47`, `src_1e2124f6f8d4` (+37 more)

### [PASS] contradiction.unresolved_visible

No contradictions recorded. A clean ledger is not proof of completeness — it means the detector found nothing.

*Blocks synthesis:* false

### [PASS] contradiction.unresolved_contradictions_block_synthesis

No high- or blocking-severity unresolved contradictions.

*Blocks synthesis:* false

### [WARN] contradiction.contradiction_required_by_policy

Pack policy requires contradiction coverage but no contradictions are recorded. A clean ledger may indicate a thin-source-set rather than genuine consensus. Adversarial review should re-examine.

*Blocks synthesis:* false

### [PASS] section_budget.budget_configured

Section budget: 45 minute(s). Pack default: 45.

*Blocks synthesis:* false

### [WARN] section_budget.runtime_tracking

Runtime tracking not yet implemented in v0.1; configured budget is recorded for future enforcement only. Extension policy (extension_requires_evidence=true) is documented but not enforced until actual run timestamps are tracked.

*Blocks synthesis:* false

### [PASS] accepted_claim_floor.min_accepted_claims_and_sources

39 accepted claims from 8 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
