# Gate Result: 03-on-ledger-state-and-reserves

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-09T21:08:08.428Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 197 total, 197 candidate, 197 with evidence excerpt, 0 orphan
- Sources: 71 total (63 primary / 0 secondary / 0 docs / 8 forum / 0 benchmark / 0 unknown), 3 independent publishers, 5 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 182 scoped, 15 universal/untagged, 4 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 69 unknown date

## Waivers applied

### source_floor.min_independent_publishers

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** Section 03 documents XRPL on-ledger state representations (NFTokenPage,
MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot) and the
reserve mechanics (base + owner reserve) that govern account-level
token storage. The authoritative source of truth for these ledger-entry
types and the JSON-RPC methods that read them (account_objects,
ledger_entry, account_info) is intentionally concentrated in XRPL
Foundation documentation at xrpl.org and the rippled implementation.
These artifacts define the on-ledger schema by construction; third-party
publishers describe how operators consume them, but cannot provide
authoritative ground truth for the schema itself.

- **Compensating controls:**
  - Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org ledger-entry-type reference pages (NFTokenPage, MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot), xrpl.org reserve-concept documentation, xrpl.org JSON-RPC method documentation (account_objects, ledger_entry, account_info), and the ledger-entry-types index page.
  - Supplementary GitHub Search API issues from XRPLF/rippled are typed as forum (developer-discussion, not first-party canonical) and provide deletion-edge-case evidence; canonical claims trace to xrpl.org first-party sources only.
  - Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver.
  - Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01's discipline. Each ledger-entry-type claim's authoritative basis is the protocol foundation's own definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.

## Gate results

### [PASS] source_floor.min_sources

71 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.min_independent_publishers

Found 3 independent publisher(s); minimum 4 required. Section-scoped waiver granted for 03-on-ledger-state-and-reserves with 5 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `XRPL.org`, `XRP Ledger Foundation`, `xrpl.org`

### [PASS] source_floor.primary_sources_required

63 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

5 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 197 candidate claim(s) reference at least one source_id.

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

197/197 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_525532c48160_ollama_intern_1`, `clm_525532c48160_ollama_intern_2`, `clm_525532c48160_ollama_intern_3`, `clm_525532c48160_ollama_intern_4`, `clm_525532c48160_ollama_intern_5`, `clm_525532c48160_ollama_intern_6`, `clm_525532c48160_ollama_intern_7`, `clm_525532c48160_ollama_intern_8`, `clm_525532c48160_ollama_intern_9`, `clm_525532c48160_ollama_intern_10` (+187 more)

### [WARN] scope_integrity.no_untagged_universal_claims

15/197 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_006880d4c42c_ollama_intern_7`, `clm_006880d4c42c_ollama_intern_8`, `clm_006880d4c42c_ollama_intern_9`, `clm_006880d4c42c_ollama_intern_15`, `clm_006880d4c42c_ollama_intern_16`, `clm_006880d4c42c_ollama_intern_17`, `clm_006880d4c42c_ollama_intern_18`, `clm_006880d4c42c_ollama_intern_19`, `clm_006880d4c42c_ollama_intern_20`, `clm_006880d4c42c_ollama_intern_23` (+5 more)

### [WARN] scope_integrity.not_constraint_present

Only 4/197 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_525532c48160_ollama_intern_1`, `clm_525532c48160_ollama_intern_2`, `clm_525532c48160_ollama_intern_3`, `clm_525532c48160_ollama_intern_6`, `clm_525532c48160_ollama_intern_7`, `clm_525532c48160_ollama_intern_8`, `clm_525532c48160_ollama_intern_9`, `clm_525532c48160_ollama_intern_10`, `clm_006880d4c42c_ollama_intern_1`, `clm_006880d4c42c_ollama_intern_2` (+183 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

182 scoped, 15 universal/untagged, 4 with 'not' constraint.

*Blocks synthesis:* false

### [PASS] freshness.no_stale_sources

No max_source_age_months configured; per-source recency not evaluated.

*Blocks synthesis:* false

### [WARN] freshness.publication_date_known

69 source(s) have no parseable published_at. Recency cannot be evaluated for these.

*Blocks synthesis:* false

*Evidence:* `src_006880d4c42c`, `src_01e8d92d7e53`, `src_0255a2aac931`, `src_034a20f9fcbf`, `src_03f52c5d778f`, `src_051630391070`, `src_0654c94c7a98`, `src_097142ab08d3`, `src_0fad2055eaed`, `src_117260e9e17f` (+59 more)

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

42 accepted claims from 13 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
