# Gate Result: 06-mobile-web-export-durability

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T08:30:04.836Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); no waivers.

## Counts

- Claims: 402 total, 402 candidate, 402 with evidence excerpt, 0 orphan
- Sources: 63 total (2 primary / 3 secondary / 41 docs / 16 forum / 0 benchmark / 1 unknown), 8 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 398 scoped, 4 universal/untagged, 6 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 63 unknown date

## Gate results

### [PASS] source_floor.min_sources

63 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

8 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS] source_floor.primary_sources_required

2 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [PASS] source_floor.failed_fetches_visible

No failed fetches in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 402 candidate claim(s) reference at least one source_id.

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

402/402 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_37ec19efa9ba_ollama_intern_1`, `clm_37ec19efa9ba_ollama_intern_2`, `clm_37ec19efa9ba_ollama_intern_3`, `clm_37ec19efa9ba_ollama_intern_4`, `clm_37ec19efa9ba_ollama_intern_5`, `clm_37ec19efa9ba_ollama_intern_6`, `clm_37ec19efa9ba_ollama_intern_7`, `clm_37ec19efa9ba_ollama_intern_8`, `clm_37ec19efa9ba_ollama_intern_9`, `clm_37ec19efa9ba_ollama_intern_10` (+392 more)

### [WARN] scope_integrity.no_untagged_universal_claims

4/402 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_ba5aaca1a207_ollama_intern_2`, `clm_ba5aaca1a207_ollama_intern_3`, `clm_ba5aaca1a207_ollama_intern_5`, `clm_ba5aaca1a207_ollama_intern_6`

### [WARN] scope_integrity.not_constraint_present

Only 6/402 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_37ec19efa9ba_ollama_intern_1`, `clm_37ec19efa9ba_ollama_intern_2`, `clm_37ec19efa9ba_ollama_intern_3`, `clm_37ec19efa9ba_ollama_intern_4`, `clm_37ec19efa9ba_ollama_intern_5`, `clm_37ec19efa9ba_ollama_intern_6`, `clm_37ec19efa9ba_ollama_intern_7`, `clm_37ec19efa9ba_ollama_intern_8`, `clm_37ec19efa9ba_ollama_intern_9`, `clm_37ec19efa9ba_ollama_intern_10` (+386 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

398 scoped, 4 universal/untagged, 6 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

63 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_03cb99fe6df9`, `src_04c541af2502`, `src_083cda9d9328`, `src_0974a54becd4`, `src_0b13e026c1cc`, `src_169fec56d321`, `src_1ceb96fdb33a`, `src_1e4fa1dde3af`, `src_24107f739f88`, `src_2b06a4f43c1e` (+53 more)

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

53 accepted claims from 13 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
