# Gate Result: 02-scene-resource-serialization

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T06:22:40.151Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); no waivers.

## Counts

- Claims: 402 total, 402 candidate, 402 with evidence excerpt, 0 orphan
- Sources: 41 total (2 primary / 3 secondary / 24 docs / 10 forum / 1 benchmark / 1 unknown), 6 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 400 scoped, 2 universal/untagged, 11 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 41 unknown date

## Gate results

### [PASS] source_floor.min_sources

41 source card(s) >= minimum 8.

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

*Evidence:* `clm_3bf41f24d47a_ollama_intern_1`, `clm_3bf41f24d47a_ollama_intern_2`, `clm_3bf41f24d47a_ollama_intern_3`, `clm_3bf41f24d47a_ollama_intern_4`, `clm_3bf41f24d47a_ollama_intern_5`, `clm_3bf41f24d47a_ollama_intern_6`, `clm_3bf41f24d47a_ollama_intern_7`, `clm_3bf41f24d47a_ollama_intern_8`, `clm_3bf41f24d47a_ollama_intern_9`, `clm_3bf41f24d47a_ollama_intern_10` (+392 more)

### [WARN] scope_integrity.no_untagged_universal_claims

2/402 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_c50580a705c4_ollama_intern_2`, `clm_c50580a705c4_ollama_intern_3`

### [WARN] scope_integrity.not_constraint_present

Only 11/402 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_3bf41f24d47a_ollama_intern_1`, `clm_3bf41f24d47a_ollama_intern_2`, `clm_3bf41f24d47a_ollama_intern_3`, `clm_3bf41f24d47a_ollama_intern_4`, `clm_3bf41f24d47a_ollama_intern_5`, `clm_3bf41f24d47a_ollama_intern_6`, `clm_3bf41f24d47a_ollama_intern_7`, `clm_3bf41f24d47a_ollama_intern_8`, `clm_3bf41f24d47a_ollama_intern_9`, `clm_3bf41f24d47a_ollama_intern_10` (+381 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

400 scoped, 2 universal/untagged, 11 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

41 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_03cb99fe6df9`, `src_0b13e026c1cc`, `src_1ceb96fdb33a`, `src_1e4fa1dde3af`, `src_2b06a4f43c1e`, `src_3bf41f24d47a`, `src_4c6c14f4f6fa`, `src_53945c78a6f2`, `src_55a63071c9c1`, `src_5b703b620109` (+31 more)

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

55 accepted claims from 9 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
