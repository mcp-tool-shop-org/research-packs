# Gate Result: 05-cowork-handoff

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-08T04:51:53.100Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); no waivers.

## Counts

- Claims: 548 total, 548 candidate, 548 with evidence excerpt, 0 orphan
- Sources: 65 total (13 primary / 39 secondary / 2 docs / 0 forum / 0 benchmark / 11 unknown), 31 independent publishers, 66 failed fetches
- Contradictions: 921 total (0 unresolved, 0 high/blocking)
- Scope integrity: 514 scoped, 34 universal/untagged, 10 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 62 unknown date

## Gate results

### [PASS] source_floor.min_sources

65 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

31 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS] source_floor.primary_sources_required

13 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

66 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 548 candidate claim(s) reference at least one source_id.

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

548/548 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_67b29d913d85_ollama_intern_1`, `clm_67b29d913d85_ollama_intern_2`, `clm_67b29d913d85_ollama_intern_3`, `clm_67b29d913d85_ollama_intern_4`, `clm_67b29d913d85_ollama_intern_5`, `clm_67b29d913d85_ollama_intern_6`, `clm_67b29d913d85_ollama_intern_7`, `clm_67b29d913d85_ollama_intern_8`, `clm_67b29d913d85_ollama_intern_9`, `clm_b9c427878132_ollama_intern_1` (+538 more)

### [WARN] scope_integrity.no_untagged_universal_claims

34/548 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_59b5d7b9e7e4_ollama_intern_9`, `clm_59b5d7b9e7e4_ollama_intern_10`, `clm_5be2e21d45c9_ollama_intern_19`, `clm_5be2e21d45c9_ollama_intern_47`, `clm_5be2e21d45c9_ollama_intern_48`, `clm_5be2e21d45c9_ollama_intern_49`, `clm_5be2e21d45c9_ollama_intern_50`, `clm_5be2e21d45c9_ollama_intern_51`, `clm_5be2e21d45c9_ollama_intern_52`, `clm_96b9a35307c0_ollama_intern_11` (+24 more)

### [WARN] scope_integrity.not_constraint_present

Only 10/548 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_67b29d913d85_ollama_intern_1`, `clm_67b29d913d85_ollama_intern_2`, `clm_67b29d913d85_ollama_intern_3`, `clm_67b29d913d85_ollama_intern_4`, `clm_67b29d913d85_ollama_intern_5`, `clm_67b29d913d85_ollama_intern_6`, `clm_67b29d913d85_ollama_intern_7`, `clm_67b29d913d85_ollama_intern_8`, `clm_67b29d913d85_ollama_intern_9`, `clm_b9c427878132_ollama_intern_1` (+528 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

514 scoped, 34 universal/untagged, 10 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

62 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_05cae033cedc`, `src_0801e1ee8a70`, `src_099defe2e6d6`, `src_09a48e752e9b`, `src_0b75376a48e4`, `src_126e07cf0d68`, `src_155c4be7850d`, `src_27eaf34f91a3`, `src_2cc80fcf07ba`, `src_2ed88e8cb886` (+52 more)

### [PASS] contradiction.unresolved_visible

All 921 contradiction(s) recorded are resolved.

*Blocks synthesis:* false

### [PASS] contradiction.unresolved_contradictions_block_synthesis

No high- or blocking-severity unresolved contradictions.

*Blocks synthesis:* false

### [PASS] contradiction.contradiction_required_by_policy

Contradiction ledger has 921 entry(ies); policy satisfied.

*Blocks synthesis:* false

### [PASS] section_budget.budget_configured

Section budget: 45 minute(s). Pack default: 45.

*Blocks synthesis:* false

### [WARN] section_budget.runtime_tracking

Runtime tracking not yet implemented in v0.1; configured budget is recorded for future enforcement only. Extension policy (extension_requires_evidence=true) is documented but not enforced until actual run timestamps are tracked.

*Blocks synthesis:* false

### [PASS] accepted_claim_floor.min_accepted_claims_and_sources

68 accepted claims from 8 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
