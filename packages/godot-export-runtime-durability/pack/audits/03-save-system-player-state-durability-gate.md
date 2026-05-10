# Gate Result: 03-save-system-player-state-durability

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-10T04:33:34.969Z

> Verdict: warn. synthesis-eligible. no failures; 6 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 323 total, 323 candidate, 323 with evidence excerpt, 0 orphan
- Sources: 19 total (1 primary / 3 secondary / 9 docs / 4 forum / 1 benchmark / 1 unknown), 4 independent publishers, 0 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 311 scoped, 12 universal/untagged, 3 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 19 unknown date

## Waivers applied

### source_floor.primary_sources_required

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** Section 03 uses Godot Foundation class-reference RST (class_fileaccess.rst,
class_configfile.rst, class_json.rst, class_resourcesaver.rst) and tutorial
RST (saving_games.rst) as the primary authoritative evidence for save API
behavior. The extractor types ALL godot-docs RST files as source_type=docs —
both tutorial RST and auto-generated class-reference RST (generated from
engine XML via make_rst.py). This is the F-40 finding: no RST file in the
godot-docs repo types as primary, regardless of whether it is a tutorial or
a class API reference. GitHub Search API results type as forum. Three
independent developer READMEs (youssof20, EiTaNBaRiBoA, MrRobinOfficial)
type as secondary. The gate requires 2 primary-typed sources; Section 03
has 0 primary-typed sources despite having 4 independent publishers.
This waiver covers only the primary_sources_required check. The
min_independent_publishers check PASSED without a waiver (4 publishers
>= 4 minimum), confirming Section 03's multi-publisher structure.

- **Compensating controls:**
  - 5 sources are raw RST files from the official godotengine/godot-docs repo (4 class-reference + 1 tutorial) — auto-generated from engine XML and first-party content maintained by the Godot Foundation.
  - 3 independent developer sources (youssof20/savestate, EiTaNBaRiBoA/ForgeJSONGD, MrRobinOfficial/Godot-Saveable) provide corroborating real-world evidence of save system implementation practice.
  - min_independent_publishers cleared on own merits (4 publishers confirmed by gate): no min_independent_publishers waiver applied or needed.
  - All claims are span-grounded against literal excerpt text from sources; the docs/secondary-type classification affects the gate check, not evidence quality.
  - GitHub Search API issues and specific issue #110466 (ResourceSaver regression) provide corroborating regression evidence.

## Gate results

### [PASS] source_floor.min_sources

19 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS] source_floor.min_independent_publishers

4 independent publisher(s) >= minimum 4.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.primary_sources_required

Found 1 primary source(s); minimum 2 required. Pre-waiver. Section-scoped waiver granted for 03-save-system-player-state-durability with 5 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `src_1e4fa1dde3af`

### [PASS] source_floor.failed_fetches_visible

No failed fetches in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 323 candidate claim(s) reference at least one source_id.

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

323/323 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_c1cc3cb1f943_ollama_intern_1`, `clm_c1cc3cb1f943_ollama_intern_2`, `clm_c1cc3cb1f943_ollama_intern_3`, `clm_c1cc3cb1f943_ollama_intern_4`, `clm_c1cc3cb1f943_ollama_intern_5`, `clm_c1cc3cb1f943_ollama_intern_6`, `clm_c1cc3cb1f943_ollama_intern_7`, `clm_c1cc3cb1f943_ollama_intern_8`, `clm_c1cc3cb1f943_ollama_intern_9`, `clm_c1cc3cb1f943_ollama_intern_10` (+313 more)

### [WARN] scope_integrity.no_untagged_universal_claims

12/323 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_c1cc3cb1f943_ollama_intern_13`, `clm_c1cc3cb1f943_ollama_intern_14`, `clm_c1cc3cb1f943_ollama_intern_15`, `clm_c1cc3cb1f943_ollama_intern_16`, `clm_a6a330af5a09_ollama_intern_12`, `clm_a6a330af5a09_ollama_intern_13`, `clm_a6a330af5a09_ollama_intern_14`, `clm_a6a330af5a09_ollama_intern_15`, `clm_a6a330af5a09_ollama_intern_16`, `clm_f6badbefe774_ollama_intern_13` (+2 more)

### [WARN] scope_integrity.not_constraint_present

Only 3/323 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_c1cc3cb1f943_ollama_intern_1`, `clm_c1cc3cb1f943_ollama_intern_2`, `clm_c1cc3cb1f943_ollama_intern_3`, `clm_c1cc3cb1f943_ollama_intern_4`, `clm_c1cc3cb1f943_ollama_intern_5`, `clm_c1cc3cb1f943_ollama_intern_6`, `clm_c1cc3cb1f943_ollama_intern_7`, `clm_c1cc3cb1f943_ollama_intern_8`, `clm_c1cc3cb1f943_ollama_intern_9`, `clm_c1cc3cb1f943_ollama_intern_10` (+310 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

311 scoped, 12 universal/untagged, 3 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

19 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_1e4fa1dde3af`, `src_4c6c14f4f6fa`, `src_53945c78a6f2`, `src_6e935dbe9826`, `src_6ee62ab47888`, `src_6f54a167d232`, `src_71469ccfe316`, `src_78aaa13e8387`, `src_a6a330af5a09`, `src_b00e2fac5e30` (+9 more)

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

47 accepted claims from 8 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
