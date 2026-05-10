# Gate Result: 04-scripting-runtime-contracts

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T07:25:15.616Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); no waivers.

## Counts

- Claims: 382 total, 382 candidate, 382 with evidence excerpt, 0 orphan
- Sources: 50 total (2 primary / 3 secondary / 31 docs / 13 forum / 0 benchmark / 1 unknown), 6 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 374 scoped, 8 universal/untagged, 7 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 50 unknown date

## Gate results

### [PASS] source_floor.min_sources

50 source card(s) >= minimum 8.

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

All 382 candidate claim(s) reference at least one source_id.

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

382/382 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_04c541af2502_ollama_intern_1`, `clm_04c541af2502_ollama_intern_2`, `clm_04c541af2502_ollama_intern_3`, `clm_04c541af2502_ollama_intern_4`, `clm_04c541af2502_ollama_intern_5`, `clm_04c541af2502_ollama_intern_6`, `clm_04c541af2502_ollama_intern_7`, `clm_04c541af2502_ollama_intern_8`, `clm_04c541af2502_ollama_intern_9`, `clm_04c541af2502_ollama_intern_10` (+372 more)

### [WARN] scope_integrity.no_untagged_universal_claims

8/382 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_e3948fcd1578_ollama_intern_33`, `clm_68be97293369_ollama_intern_17`, `clm_7f5634860b7d_ollama_intern_47`, `clm_7f5634860b7d_ollama_intern_56`, `clm_ad0801f16070_ollama_intern_7`, `clm_ad0801f16070_ollama_intern_8`, `clm_ad0801f16070_ollama_intern_9`, `clm_169fec56d321_ollama_intern_5`

### [WARN] scope_integrity.not_constraint_present

Only 7/382 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_04c541af2502_ollama_intern_1`, `clm_04c541af2502_ollama_intern_2`, `clm_04c541af2502_ollama_intern_3`, `clm_04c541af2502_ollama_intern_4`, `clm_04c541af2502_ollama_intern_5`, `clm_04c541af2502_ollama_intern_6`, `clm_04c541af2502_ollama_intern_7`, `clm_04c541af2502_ollama_intern_8`, `clm_04c541af2502_ollama_intern_9`, `clm_04c541af2502_ollama_intern_10` (+365 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

374 scoped, 8 universal/untagged, 7 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

50 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_03cb99fe6df9`, `src_04c541af2502`, `src_0b13e026c1cc`, `src_169fec56d321`, `src_1ceb96fdb33a`, `src_1e4fa1dde3af`, `src_2b06a4f43c1e`, `src_33eded38b390`, `src_3bf41f24d47a`, `src_4c6c14f4f6fa` (+40 more)

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

48 accepted claims from 9 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
