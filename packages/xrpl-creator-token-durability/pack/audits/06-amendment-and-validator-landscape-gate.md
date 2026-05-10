# Gate Result: 06-amendment-and-validator-landscape

**Verdict:** WARN
**Synthesis eligible:** yes
**Checked at:** 2026-05-09T21:37:00.307Z

> Verdict: warn. synthesis-eligible. no failures; 7 warning(s); 1 waiver(s) applied.

## Counts

- Claims: 358 total, 358 candidate, 358 with evidence excerpt, 0 orphan
- Sources: 71 total (63 primary / 0 secondary / 0 docs / 8 forum / 0 benchmark / 0 unknown), 3 independent publishers, 5 failed fetches
- Contradictions: 0 total (0 unresolved, 0 high/blocking)
- Scope integrity: 352 scoped, 6 universal/untagged, 7 with 'not' constraint, 0 overgeneralization risk(s) (0 blocking)
- Freshness: policy required, 0 stale, 69 unknown date

## Waivers applied

### source_floor.min_independent_publishers

- **Original status:** fail
- **New status:** pass_with_waiver
- **Reason:** Section 06 documents XRPL's amendment system and validator landscape
— the meta-layer mechanism by which every other section's protocol
behavior can change. Topics include the 80% validator consensus
threshold, 2-week activation window, EnableAmendment pseudo-
transaction, specific amendments (XLS-20 non-fungible tokens,
XLS-33 multi-purpose tokens, XLS-39 Clawback, DisallowIncoming,
TokenEscrow, NFTokenModify), amendment deprecation paths, the
Amendments ledger-entry, the FeeSettings ledger-entry, the
NegativeUNL ledger-entry, validator distribution, and UNL
(Unique Node List) operator configuration. The authoritative
source of truth for amendment-system mechanics, voting thresholds,
and activation timelines is intentionally concentrated in XRPL
Foundation documentation (xrpl.org concepts and references;
xls.xrpl.org rendered standards) and the rippled implementation
(release notes via api.github.com/repos/XRPLF/rippled/releases as
canonical release endpoint, Feature.cpp). Third-party explainers
describe how operators consume these mechanisms but cannot provide
more authoritative ground truth than the protocol-defining body
and the validator code that enforces consensus.

- **Compensating controls:**
  - Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org concept docs (amendments, consensus-protocol, peer-protocol, /resources/known-amendments registry), xrpl.org pseudo-transaction-type reference (EnableAmendment), xrpl.org ledger-entry-type references (Amendments, FeeSettings, NegativeUNL), xrpl.org JSON-RPC method references (feature, server_info), xls.xrpl.org rendered XLS-0020 (NFTs) + XLS-0033 (MPTs) standards, and api.github.com/repos/XRPLF/rippled/releases as canonical release endpoint (typed primary, not forum).
  - Supplementary GitHub Search API issues (XRPLF/rippled amendment + majority + activation discussions) are typed as forum (developer-discussion supplementary); canonical claims still trace to xrpl.org / xls.xrpl.org / rippled-releases first-party sources only.
  - Claims remain span-grounded and reviewed individually; per-claim findings continue to apply normally regardless of waiver. Specific scope discipline for this section: amendment-state ≠ feature-availability (an amendment can be voting / majority-not-yet-activated / activated / obsoleted — distinct states); validator quorum is 80% (NOT simple majority) and 2-week window (NOT instant); per-amendment voting (NOT pack voting); XRPL amendment governance is unique (NO token-vote, NO on-chain governance proposals, NO DAO mechanisms — validator-driven via UNL); specific amendments have distinct identities (XLS-20 ≠ XLS-33 ≠ XLS-39, do NOT lump as 'NFT amendments' or 'token amendments'); validator distribution is NOT a stable global property (UNL is operator-configured).
  - Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Sections 01-05 discipline. Amendment-system semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap. The synthesis contribution thesis: XRPL token durability is amendment-state-dependent — the control plane must track amendment state per protocol concern (NFTs, MPTs, Clawback, TokenEscrow, DisallowIncoming) and per UNL configuration. Section 06's accepted claims will surface implicit dependencies in Sections 01-05's accepted claims (e.g., 'XLS-20 enabled NFTokens' cross-references Section 01's NFToken paradigm). The pack synthesis at freeze time must weave Section 06's amendment-state framework across all prior sections' mechanism claims.
  - Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.

## Gate results

### [PASS] source_floor.min_sources

71 source card(s) >= minimum 8.

*Blocks synthesis:* false

### [PASS+WAIVER] source_floor.min_independent_publishers

Found 3 independent publisher(s); minimum 4 required. Section-scoped waiver granted for 06-amendment-and-validator-landscape with 5 compensating control(s); converted from fail to pass_with_waiver.

*Blocks synthesis:* false

*Evidence:* `XRPL.org`, `XRP Ledger Foundation`, `xrpl.org`

### [PASS] source_floor.primary_sources_required

63 primary source(s) >= minimum 2.

*Blocks synthesis:* false

### [WARN] source_floor.failed_fetches_visible

5 fetch attempt(s) recorded as non-ok in fetch-log.jsonl.

*Blocks synthesis:* false

### [PASS] claim_integrity.every_claim_needs_source

All 358 candidate claim(s) reference at least one source_id.

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

358/358 claim(s) source from a single publisher. Independent corroboration recommended before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_03f52c5d778f_ollama_intern_1`, `clm_03f52c5d778f_ollama_intern_2`, `clm_03f52c5d778f_ollama_intern_3`, `clm_03f52c5d778f_ollama_intern_4`, `clm_03f52c5d778f_ollama_intern_5`, `clm_03f52c5d778f_ollama_intern_6`, `clm_03f52c5d778f_ollama_intern_7`, `clm_03f52c5d778f_ollama_intern_8`, `clm_03f52c5d778f_ollama_intern_9`, `clm_03f52c5d778f_ollama_intern_10` (+348 more)

### [WARN] scope_integrity.no_untagged_universal_claims

6/358 candidate claim(s) have scope=null. These must not be treated as broad-applicability claims downstream — they are scope-undetermined, not scope-universal. Run a richer extractor or add scope manually before synthesis.

*Blocks synthesis:* false

*Evidence:* `clm_5412494af521_ollama_intern_1`, `clm_5412494af521_ollama_intern_2`, `clm_5412494af521_ollama_intern_3`, `clm_5412494af521_ollama_intern_4`, `clm_5412494af521_ollama_intern_5`, `clm_d16112dea1e0_ollama_intern_11`

### [WARN] scope_integrity.not_constraint_present

Only 7/358 candidate claim(s) carry a 'not' constraint. The 'not' field is the structural defense against overgeneralization; sparse coverage means downstream synthesis must be more cautious.

*Blocks synthesis:* false

*Evidence:* `clm_03f52c5d778f_ollama_intern_1`, `clm_03f52c5d778f_ollama_intern_2`, `clm_03f52c5d778f_ollama_intern_3`, `clm_03f52c5d778f_ollama_intern_4`, `clm_03f52c5d778f_ollama_intern_5`, `clm_03f52c5d778f_ollama_intern_6`, `clm_03f52c5d778f_ollama_intern_7`, `clm_03f52c5d778f_ollama_intern_8`, `clm_03f52c5d778f_ollama_intern_9`, `clm_03f52c5d778f_ollama_intern_10` (+341 more)

### [PASS] scope_integrity.no_blocking_overgeneralization

No high- or blocking-severity overgeneralization_risk contradictions.

*Blocks synthesis:* false

### [PASS] scope_integrity.scope_tagging_summary

352 scoped, 6 universal/untagged, 7 with 'not' constraint.

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

56 accepted claims from 8 distinct sources (minimum: 3 from 2).

*Blocks synthesis:* false
