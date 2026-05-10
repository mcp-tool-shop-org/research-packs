# Gate Result: 01-engine-version-export-template-compat

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T03:23:09.507Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); 2 waiver(s) applied.

## Counts

- Claims: 150 total, 150 candidate, 150 with evidence excerpt, 0 orphan
- Sources: 8 total (1 primary / 0 secondary / 4 docs / 1 forum / 1 benchmark / 1 unknown), 1 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 139 scoped, 11 universal/untagged, 2 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 8 unknown date

## Waivers applied

### source_floor.min_independent_publishers

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** Section 01 documents Godot engine version semantics, export template
versioning, and the Godot 3.x to 4.x compatibility boundary from canonical
first-party sources. The authoritative source of truth for these behaviors
is structurally concentrated in Godot Foundation documentation and the
godotengine/godot release record. No independent third-party publisher can
be the ground-truth authority for how Godot's own engine versions and
export templates behave — third-party sources can only interpret or relay
Foundation-published behavior. The source_cluster_monopoly finding
(observed 2026-05-10 during review pass) cascaded needs_source_repair
to all 40 triaged claims due to single-publisher sourcing, which is the
structural incompatibility this waiver is designed for.

- **Compensating controls:**
  - Sources span multiple canonical artifact types: official tutorial RST (exporting_projects, feature_tags, exporting_pcks), migration guide RST (upgrading_to_godot_4), policy RST (release_policy), GitHub API release JSON, and GitHub Search API issue threads.
  - Claims remain span-grounded and reviewed individually; per-claim quality signals (scope_widening, source_quality_problem, missing_not_constraint) continue to apply normally.
  - Section synthesis must disclose the single-foundation source concentration and its implications for claim independence.
  - Publisher diversity for later sections (03, 05) is expected without waivers; Section 01 waiver is section-scoped, not pack-wide.

### source_floor.primary_sources_required

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** For canonical-engine sections, official Godot Foundation tutorial and
migration RST files are the primary authoritative evidence for engine
behavior — there is no separate specification document for Godot engine
version compatibility semantics. The extractor types these files as
source_type=docs (tutorial/how-to format) rather than primary (spec/
standards format). Only the releases JSON is typed primary. The gate
requires 2 primary-typed sources but the content is structurally
primary-equivalent: official first-party docs from the canonical
godotengine/godot-docs repo are the authoritative source for how the
engine behaves across versions. Adding a third-party primary source
would not add truth; it would add interpretation on top of foundation docs.

- **Compensating controls:**
  - 5 of 8 sources are raw RST files from the official godotengine/godot-docs repo — first-party content authored and maintained by the Godot Foundation.
  - The releases JSON endpoint (typed primary) provides structured release metadata confirming version history.
  - GitHub Search API issues provide corroborating real-world evidence of export template compatibility failures from user-reported observations.
  - All claims are span-grounded against literal excerpt text from these sources; the docs-type classification affects the gate check, not evidence quality.

## Gate results

### [PASS] source_floor.min_sources

8 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.min_independent_publishers

Found 1 independent publisher(s); minimum 4 required. Section-scoped waiver granted for 01-engine-version-export-template-compat with 4 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `Godotengine`

### [PASS+WAIVER] source_floor.primary_sources_required

Found 1 primary source(s); minimum 2 required. Pre-waiver. Section-scoped waiver granted for 01-engine-version-export-template-compat with 4 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `src_1e4fa1dde3af`

### [PASS] source_floor.failed_fetches_visible

No failed fetches in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 150 candidate claim(s) reference at least one source_id.

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

150/150 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_4c6c14f4f6fa_ollama_intern_1`, `clm_4c6c14f4f6fa_ollama_intern_2`, `clm_4c6c14f4f6fa_ollama_intern_3`, `clm_4c6c14f4f6fa_ollama_intern_4`, `clm_4c6c14f4f6fa_ollama_intern_5`, `clm_4c6c14f4f6fa_ollama_intern_6`, `clm_4c6c14f4f6fa_ollama_intern_7`, `clm_4c6c14f4f6fa_ollama_intern_8`, `clm_4c6c14f4f6fa_ollama_intern_9`, `clm_4c6c14f4f6fa_ollama_intern_10` (+140 more)

### [WARN] scope_integrity.no_untagged_universal_claims

11/150 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_6ee62ab47888_ollama_intern_1`, `clm_6ee62ab47888_ollama_intern_2`, `clm_6ee62ab47888_ollama_intern_3`, `clm_6ee62ab47888_ollama_intern_4`, `clm_6ee62ab47888_ollama_intern_5`, `clm_78aaa13e8387_ollama_intern_9`, `clm_78aaa13e8387_ollama_intern_10`, `clm_78aaa13e8387_ollama_intern_11`, `clm_78aaa13e8387_ollama_intern_12`, `clm_78aaa13e8387_ollama_intern_20` (+1 more)

### [WARN] scope_integrity.not_constraint_present

Only 2/150 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_4c6c14f4f6fa_ollama_intern_1`, `clm_4c6c14f4f6fa_ollama_intern_2`, `clm_4c6c14f4f6fa_ollama_intern_3`, `clm_4c6c14f4f6fa_ollama_intern_4`, `clm_4c6c14f4f6fa_ollama_intern_5`, `clm_4c6c14f4f6fa_ollama_intern_6`, `clm_4c6c14f4f6fa_ollama_intern_7`, `clm_4c6c14f4f6fa_ollama_intern_8`, `clm_4c6c14f4f6fa_ollama_intern_9`, `clm_4c6c14f4f6fa_ollama_intern_10` (+138 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

139 scoped, 11 universal/untagged, 2 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

8 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_1e4fa1dde3af`, `src_4c6c14f4f6fa`, `src_6e935dbe9826`, `src_6ee62ab47888`, `src_6f54a167d232`, `src_71469ccfe316`, `src_78aaa13e8387`, `src_d3bd0f1dae0c`

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

34 accepted claims from 7 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
