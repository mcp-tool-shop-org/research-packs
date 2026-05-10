# Gate Result: 02-account-and-key-management

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-09T21:08:07.759Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 173 total, 173 candidate, 173 with evidence excerpt, 0 orphan
- Sources: 71 total (63 primary / 0 secondary / 0 docs / 8 forum / 0 benchmark / 0 unknown), 3 independent publishers, 5 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 171 scoped, 2 universal/untagged, 0 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 69 unknown date

## Waivers applied

### source_floor.min_independent_publishers

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** Section 02 documents XRPL account and key management semantics —
AccountRoot fields, master key disablement (lsfDisableMaster),
regular key (SetRegularKey), signer-list-based multi-signing
(SignerListSet), ticket-based authorization (TicketCreate), account
deletion (AccountDelete), and permission/delegation values. The
authoritative source of truth for these mechanics is intentionally
concentrated in XRPL Foundation documentation at xrpl.org and the
rippled implementation. Whether SetRegularKey, SignerListSet,
AccountDelete, or AccountSet behave a particular way is defined
by the protocol-defining body; third-party explainers describe how
operators consume these mechanics but cannot provide more
authoritative ground truth than xrpl.org's transaction-type and
ledger-entry-type references.

- **Compensating controls:**
  - Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org account concept docs (Accounts overview, cryptographic-keys, multi-signing, tickets), xrpl.org transaction-type references (AccountSet, SetRegularKey, SignerListSet, AccountDelete, TicketCreate), xrpl.org ledger-entry-type references (AccountRoot, SignerList), permission-values data-type reference, and account_info JSON-RPC method documentation.
  - Supplementary GitHub Search API issues (XRPLF/rippled AccountDelete + NFT edge cases) are typed as forum (developer-discussion supplementary) and provide deletion-precondition edge-case evidence beyond what canonical docs surface; canonical claims still trace to xrpl.org first-party sources only.
  - Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver. Wallet-UX claims (e.g., 'wallet provides signer UI') and ticket-as-key-recovery conflations are wallet-feature or category errors, not protocol claims, and per-claim findings should route them to scope_repair or rejection without the waiver covering for the mismatch.
  - Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01 and Section 03 discipline. Account and key semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.

## Gate results

### [PASS] source_floor.min_sources

71 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.min_independent_publishers

Found 3 independent publisher(s); minimum 4 required. Section-scoped waiver granted for 02-account-and-key-management with 5 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `XRPL.org`, `XRP Ledger Foundation`, `xrpl.org`

### [PASS] source_floor.primary_sources_required

63 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

5 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 173 candidate claim(s) reference at least one source_id.

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

173/173 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_cef2c31af42d_ollama_intern_1`, `clm_cef2c31af42d_ollama_intern_2`, `clm_cef2c31af42d_ollama_intern_3`, `clm_cef2c31af42d_ollama_intern_4`, `clm_cef2c31af42d_ollama_intern_5`, `clm_cef2c31af42d_ollama_intern_6`, `clm_cef2c31af42d_ollama_intern_7`, `clm_cef2c31af42d_ollama_intern_8`, `clm_cef2c31af42d_ollama_intern_9`, `clm_117260e9e17f_ollama_intern_1` (+163 more)

### [WARN] scope_integrity.no_untagged_universal_claims

2/173 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_ec68826269c9_ollama_intern_7`, `clm_ec68826269c9_ollama_intern_8`

### [WARN] scope_integrity.not_constraint_present

Only 0/173 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_cef2c31af42d_ollama_intern_1`, `clm_cef2c31af42d_ollama_intern_2`, `clm_cef2c31af42d_ollama_intern_3`, `clm_cef2c31af42d_ollama_intern_4`, `clm_cef2c31af42d_ollama_intern_5`, `clm_cef2c31af42d_ollama_intern_6`, `clm_cef2c31af42d_ollama_intern_7`, `clm_cef2c31af42d_ollama_intern_8`, `clm_cef2c31af42d_ollama_intern_9`, `clm_117260e9e17f_ollama_intern_1` (+163 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

171 scoped, 2 universal/untagged, 0 with 'not' constraint.

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

32 accepted claims from 12 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
