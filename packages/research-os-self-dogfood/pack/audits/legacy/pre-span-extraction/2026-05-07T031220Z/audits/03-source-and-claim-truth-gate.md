# Gate Result: 03-source-and-claim-truth

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-07T02:19:13.143Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 14 total, 14 candidate, 14 with evidence excerpt, 0 orphan
- Sources: 10 total (1 primary / 9 secondary / 0 docs / 0 forum / 0 benchmark / 0 unknown), 5 independent publishers, 3 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 0 scoped, 14 universal/untagged, 0 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 9 unknown date

## Waivers applied

### source_floor.primary_sources_required

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **Compensating controls:**
  - Adversarial reviewer pass required on every section before synthesis.
  - Cross-section contradiction mapping required across all sections.
  - Each section must cite >=4 independent publishers; source cluster monopoly is a section-level blocker.
  - Final-report citations must be claim-level traceable via [claim:clm_...] references.
  - Every active waiver disclosed in synthesis/decision-brief.md and synthesis/final-report.md by family.applied_to.

## Gate results

### [PASS] source_floor.min_sources

10 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

5 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.primary_sources_required

Found 1 primary source(s); minimum 2 required. Pre-waiver. Waiver granted with 5 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `src_a135974ea838`

### [WARN] source_floor.failed_fetches_visible

3 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 14 candidate claim(s) reference at least one source_id.

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

14/14 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_d81a8a3d6bba_heuristic_1`, `clm_d81a8a3d6bba_heuristic_2`, `clm_155c4be7850d_heuristic_1`, `clm_155c4be7850d_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_1`, `clm_d39cd3ba0ef2_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_3`, `clm_caedf4b2d8e0_heuristic_1`, `clm_caedf4b2d8e0_heuristic_2`, `clm_caedf4b2d8e0_heuristic_3` (+4 more)

### [WARN] scope_integrity.no_untagged_universal_claims

14/14 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_d81a8a3d6bba_heuristic_1`, `clm_d81a8a3d6bba_heuristic_2`, `clm_155c4be7850d_heuristic_1`, `clm_155c4be7850d_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_1`, `clm_d39cd3ba0ef2_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_3`, `clm_caedf4b2d8e0_heuristic_1`, `clm_caedf4b2d8e0_heuristic_2`, `clm_caedf4b2d8e0_heuristic_3` (+4 more)

### [WARN] scope_integrity.not_constraint_present

Only 0/14 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_d81a8a3d6bba_heuristic_1`, `clm_d81a8a3d6bba_heuristic_2`, `clm_155c4be7850d_heuristic_1`, `clm_155c4be7850d_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_1`, `clm_d39cd3ba0ef2_heuristic_2`, `clm_d39cd3ba0ef2_heuristic_3`, `clm_caedf4b2d8e0_heuristic_1`, `clm_caedf4b2d8e0_heuristic_2`, `clm_caedf4b2d8e0_heuristic_3` (+4 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

0 scoped, 14 universal/untagged, 0 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

9 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_05cae033cedc`, `src_155c4be7850d`, `src_63e3516c85f3`, `src_676ddfa834cc`, `src_a135974ea838`, `src_bc94816a3373`, `src_d39cd3ba0ef2`, `src_d81a8a3d6bba`, `src_e15c2248a5d8`

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
