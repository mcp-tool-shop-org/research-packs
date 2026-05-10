# Gate Result: 05-desktop-platform-export-durability

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T05:20:36.867Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); no waivers.

## Counts

- Claims: 231 total, 231 candidate, 231 with evidence excerpt, 0 orphan
- Sources: 30 total (2 primary / 3 secondary / 16 docs / 7 forum / 1 benchmark / 1 unknown), 6 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 219 scoped, 12 universal/untagged, 4 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 30 unknown date

## Gate results

### [PASS] source_floor.min_sources

30 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

6 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS] source_floor.primary_sources_required

2 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [PASS] source_floor.failed_fetches_visible

No failed fetches in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 231 candidate claim(s) reference at least one source_id.

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

231/231 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_1ceb96fdb33a_ollama_intern_1`, `clm_1ceb96fdb33a_ollama_intern_2`, `clm_1ceb96fdb33a_ollama_intern_3`, `clm_1ceb96fdb33a_ollama_intern_4`, `clm_1ceb96fdb33a_ollama_intern_5`, `clm_1ceb96fdb33a_ollama_intern_6`, `clm_1ceb96fdb33a_ollama_intern_7`, `clm_1ceb96fdb33a_ollama_intern_8`, `clm_1ceb96fdb33a_ollama_intern_9`, `clm_1ceb96fdb33a_ollama_intern_10` (+221 more)

### [WARN] scope_integrity.no_untagged_universal_claims

12/231 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_03cb99fe6df9_ollama_intern_7`, `clm_03cb99fe6df9_ollama_intern_13`, `clm_03cb99fe6df9_ollama_intern_14`, `clm_03cb99fe6df9_ollama_intern_15`, `clm_03cb99fe6df9_ollama_intern_16`, `clm_03cb99fe6df9_ollama_intern_17`, `clm_c3216b0c8944_ollama_intern_6`, `clm_c3216b0c8944_ollama_intern_9`, `clm_c3216b0c8944_ollama_intern_11`, `clm_da88881cf961_ollama_intern_8` (+2 more)

### [WARN] scope_integrity.not_constraint_present

Only 4/231 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_1ceb96fdb33a_ollama_intern_1`, `clm_1ceb96fdb33a_ollama_intern_2`, `clm_1ceb96fdb33a_ollama_intern_3`, `clm_1ceb96fdb33a_ollama_intern_4`, `clm_1ceb96fdb33a_ollama_intern_5`, `clm_1ceb96fdb33a_ollama_intern_6`, `clm_1ceb96fdb33a_ollama_intern_7`, `clm_1ceb96fdb33a_ollama_intern_8`, `clm_1ceb96fdb33a_ollama_intern_9`, `clm_1ceb96fdb33a_ollama_intern_10` (+217 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

219 scoped, 12 universal/untagged, 4 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

30 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_03cb99fe6df9`, `src_1ceb96fdb33a`, `src_1e4fa1dde3af`, `src_2b06a4f43c1e`, `src_4c6c14f4f6fa`, `src_53945c78a6f2`, `src_5b703b620109`, `src_6e935dbe9826`, `src_6ee62ab47888`, `src_6f54a167d232` (+20 more)

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
