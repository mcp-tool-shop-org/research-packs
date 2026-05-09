# Gate Result: 01-product-thesis

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-07T21:18:57.877Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); no waivers.

## Counts

- Claims: 109 total, 109 candidate, 109 with evidence excerpt, 0 orphan
- Sources: 44 total (5 primary / 27 secondary / 1 docs / 0 forum / 0 benchmark / 11 unknown), 20 independent publishers, 56 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 98 scoped, 11 universal/untagged, 1 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 43 unknown date

## Gate results

### [PASS] source_floor.min_sources

44 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

20 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS] source_floor.primary_sources_required

5 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

56 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 109 candidate claim(s) reference at least one source_id.

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

109/109 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_d474bc1158c2_ollama_intern_1`, `clm_d474bc1158c2_ollama_intern_2`, `clm_d474bc1158c2_ollama_intern_3`, `clm_d474bc1158c2_ollama_intern_4`, `clm_d474bc1158c2_ollama_intern_5`, `clm_d474bc1158c2_ollama_intern_6`, `clm_d474bc1158c2_ollama_intern_7`, `clm_d474bc1158c2_ollama_intern_8`, `clm_d474bc1158c2_ollama_intern_9`, `clm_d474bc1158c2_ollama_intern_10` (+99 more)

### [WARN] scope_integrity.no_untagged_universal_claims

11/109 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_d474bc1158c2_ollama_intern_1`, `clm_d474bc1158c2_ollama_intern_2`, `clm_d474bc1158c2_ollama_intern_4`, `clm_d474bc1158c2_ollama_intern_5`, `clm_d474bc1158c2_ollama_intern_6`, `clm_770d35522c16_ollama_intern_3`, `clm_770d35522c16_ollama_intern_4`, `clm_770d35522c16_ollama_intern_5`, `clm_770d35522c16_ollama_intern_6`, `clm_d474bc1158c2_ollama_intern_65` (+1 more)

### [WARN] scope_integrity.not_constraint_present

Only 1/109 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_d474bc1158c2_ollama_intern_1`, `clm_d474bc1158c2_ollama_intern_2`, `clm_d474bc1158c2_ollama_intern_3`, `clm_d474bc1158c2_ollama_intern_4`, `clm_d474bc1158c2_ollama_intern_5`, `clm_d474bc1158c2_ollama_intern_6`, `clm_d474bc1158c2_ollama_intern_7`, `clm_d474bc1158c2_ollama_intern_8`, `clm_d474bc1158c2_ollama_intern_9`, `clm_d474bc1158c2_ollama_intern_10` (+98 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

98 scoped, 11 universal/untagged, 1 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

43 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_05cae033cedc`, `src_099defe2e6d6`, `src_09a48e752e9b`, `src_0b75376a48e4`, `src_155c4be7850d`, `src_27eaf34f91a3`, `src_2fff6e91c56c`, `src_308195df859c`, `src_458d9788c68d`, `src_53ee6a9ec24b` (+33 more)

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

19 accepted claims from 7 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
