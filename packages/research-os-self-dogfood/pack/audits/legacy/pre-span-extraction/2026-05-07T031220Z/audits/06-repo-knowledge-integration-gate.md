# Gate Result: 06-repo-knowledge-integration

**Verdict:** BLOCKED
**Synthesis eligible:** no
**Checked at:** 2026-05-07T00:34:30.645Z

> Verdict: blocked. NOT synthesis-eligible. 3 failure(s); 6 warning(s); no waivers.

## Blocking reasons

- source_floor.min_sources: Found 2 source card(s); minimum 8 required.
- source_floor.min_independent_publishers: Found 1 independent publisher(s); minimum 4 required.
- source_floor.primary_sources_required: Found 0 primary source(s); minimum 2 required. Pre-waiver.

## Counts

- Claims: 4 total, 4 candidate, 4 with evidence excerpt, 0 orphan
- Sources: 2 total (0 primary / 2 secondary / 0 docs / 0 forum / 0 benchmark / 0 unknown), 1 independent publishers, 1 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 4 scoped, 0 universal/untagged, 1 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 2 unknown date

## Gate results

### [FAIL] source_floor.min_sources

Found 2 source card(s); minimum 8 required.

*Blocks synthesis:* true

*Evidence:* `src_05cae033cedc`, `src_e15c2248a5d8`

### [FAIL] source_floor.min_independent_publishers

Found 1 independent publisher(s); minimum 4 required.

*Blocks synthesis:* true

*Evidence:* `sqlite.org`

### [FAIL] source_floor.primary_sources_required

Found 0 primary source(s); minimum 2 required. Pre-waiver.

*Blocks synthesis:* true

### [WARN] source_floor.failed_fetches_visible

1 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 4 candidate claim(s) reference at least one source_id.

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

4/4 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_e15c2248a5d8_ollama_intern_1`, `clm_05cae033cedc_ollama_intern_1`, `clm_05cae033cedc_ollama_intern_2`, `clm_05cae033cedc_ollama_intern_3`

### [PASS] scope_integrity.no_untagged_universal_claims

Every candidate claim has a non-null scope.

*Blocks synthesis:* false

### [WARN] scope_integrity.not_constraint_present

Only 1/4 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_05cae033cedc_ollama_intern_1`, `clm_05cae033cedc_ollama_intern_2`, `clm_05cae033cedc_ollama_intern_3`

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

4 scoped, 0 universal/untagged, 1 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

2 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_05cae033cedc`, `src_e15c2248a5d8`

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

## Next actions

- Run `research-os gather` with additional URLs to reach the minimum source count.
- Add sources from additional publishers to satisfy publisher diversity.
- Add primary sources or grant a primary_source_waiver in research.yaml with a reason and compensating_controls.
