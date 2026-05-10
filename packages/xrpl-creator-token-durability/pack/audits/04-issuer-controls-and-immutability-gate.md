# Gate Result: 04-issuer-controls-and-immutability

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-09T22:10:46.173Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); no waivers.

## Counts

- Claims: 170 total, 170 candidate, 170 with evidence excerpt, 0 orphan
- Sources: 80 total (70 primary / 0 secondary / 0 docs / 10 forum / 0 benchmark / 0 unknown), 5 independent publishers, 5 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 158 scoped, 12 universal/untagged, 2 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 78 unknown date

## Gate results

### [PASS] source_floor.min_sources

80 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

5 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS] source_floor.primary_sources_required

70 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

5 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 170 candidate claim(s) reference at least one source_id.

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

170/170 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_517d67dc1224_ollama_intern_1`, `clm_517d67dc1224_ollama_intern_2`, `clm_517d67dc1224_ollama_intern_3`, `clm_517d67dc1224_ollama_intern_4`, `clm_517d67dc1224_ollama_intern_5`, `clm_517d67dc1224_ollama_intern_6`, `clm_517d67dc1224_ollama_intern_7`, `clm_517d67dc1224_ollama_intern_8`, `clm_517d67dc1224_ollama_intern_9`, `clm_517d67dc1224_ollama_intern_10` (+160 more)

### [WARN] scope_integrity.no_untagged_universal_claims

12/170 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_0654c94c7a98_ollama_intern_1`, `clm_0654c94c7a98_ollama_intern_2`, `clm_0654c94c7a98_ollama_intern_3`, `clm_0654c94c7a98_ollama_intern_4`, `clm_0654c94c7a98_ollama_intern_5`, `clm_12ac7f4c315b_ollama_intern_6`, `clm_12ac7f4c315b_ollama_intern_8`, `clm_12ac7f4c315b_ollama_intern_9`, `clm_12ac7f4c315b_ollama_intern_10`, `clm_12ac7f4c315b_ollama_intern_11` (+2 more)

### [WARN] scope_integrity.not_constraint_present

Only 2/170 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_517d67dc1224_ollama_intern_1`, `clm_517d67dc1224_ollama_intern_2`, `clm_517d67dc1224_ollama_intern_3`, `clm_517d67dc1224_ollama_intern_4`, `clm_517d67dc1224_ollama_intern_5`, `clm_517d67dc1224_ollama_intern_6`, `clm_517d67dc1224_ollama_intern_7`, `clm_517d67dc1224_ollama_intern_8`, `clm_517d67dc1224_ollama_intern_9`, `clm_517d67dc1224_ollama_intern_10` (+158 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

158 scoped, 12 universal/untagged, 2 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

78 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_006880d4c42c`, `src_01e8d92d7e53`, `src_0255a2aac931`, `src_034a20f9fcbf`, `src_03f52c5d778f`, `src_051630391070`, `src_0654c94c7a98`, `src_097142ab08d3`, `src_0b01dd18d515`, `src_0fad2055eaed` (+68 more)

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

27 accepted claims from 9 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
