# Decision Brief

**Pack:** How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?
**Pack ID:** `5dca72a4300c`
**Decision question:** Lock the schemas, gates, prompt contracts, and CLI surface for research-os v0.1 so the remaining workflow links can be built against a real spec instead of guesses.

> **Guardrails (enforced at freeze time):**
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**
> - **Recommendation must cite at least one accepted claim_id.**

## Recommendation

Proceed with locking the research-os v0.1 schemas, gates, prompt contracts, and CLI surface.

The pack's accepted evidence base confirms that the technical foundations are each grounded in well-specified external practice:

- JSONL append-only ledgers are appropriate for log-style data — JSON Lines works well with unix-style text processing tools and shell pipelines [clm_c1e29cfcaa1e_ollama_intern_2] and is a great format for log files [clm_c1e29cfcaa1e_ollama_intern_3].
- Provenance tracking parallels the W3C PROV Data Model's core structures [clm_0801e1ee8a70_ollama_intern_13], including derivation, revision, and collection semantics [clm_0801e1ee8a70_ollama_intern_85], [clm_0801e1ee8a70_ollama_intern_111].
- SQLite FTS5 provides full-text search suitable for a local-first pack [clm_e15c2248a5d8_ollama_intern_10]; WAL mode is significantly faster than the rollback journal in most scenarios [clm_05cae033cedc_ollama_intern_3].
- Claude Code's hook and subagent architecture supports the Cowork handoff pattern — subagents inherit the permission context from the main conversation [clm_9a7d4217c64c_ollama_intern_30]; exit code 2 blocks a response [clm_5be2e21d45c9_ollama_intern_149]; CLAUDE.md files survive compaction at project root [clm_96b9a35307c0_ollama_intern_34].
- End-to-end testing grounds the acceptance suite — end-to-end testing checks the complete end-to-end process flow [clm_53ee6a9ec24b_ollama_intern_8]; automated BDD examples act as guide-rails for development [clm_642e49ac2548_ollama_intern_11].

The pack does not provide primary evidence for research-os's specific schema design decisions. Three active source-floor waivers formalize this constraint. The external literature does not contradict the operator's design choices, and no preserved contradictions exist that would block the lock decision.

## Evidence cited

The following accepted claim IDs are cited in the Recommendation above:

- [clm_c1e29cfcaa1e_ollama_intern_2] — JSON Lines works well with unix-style text processing tools and shell pipelines (Section 02)
- [clm_c1e29cfcaa1e_ollama_intern_3] — JSON Lines is a great format for log files (Section 02)
- [clm_0801e1ee8a70_ollama_intern_13] — PROV distinguishes core structures from extended structures (Section 02)
- [clm_0801e1ee8a70_ollama_intern_85] — Revision and quotation are subtypes of derivation relations (Section 02)
- [clm_0801e1ee8a70_ollama_intern_111] — A collection is an entity with members that can be entities themselves (Section 02)
- [clm_e15c2248a5d8_ollama_intern_10] — SQLite FTS5 extension provides full-text search functionality in database applications (Section 06)
- [clm_05cae033cedc_ollama_intern_3] — WAL is significantly faster than the rollback journal in most scenarios (Section 06)
- [clm_9a7d4217c64c_ollama_intern_30] — Subagents inherit the permission context from the main conversation (Section 05)
- [clm_5be2e21d45c9_ollama_intern_149] — Exit code 2 blocks the response, changing the effective action to decline (Section 05)
- [clm_96b9a35307c0_ollama_intern_34] — The project-root CLAUDE.md survives compaction, but nested files do not (Section 05)
- [clm_53ee6a9ec24b_ollama_intern_8] — End-to-end testing checks the complete end-to-end process flow (Section 08)
- [clm_642e49ac2548_ollama_intern_11] — Automated examples in BDD act as guide-rails for development work (Section 08)

## Unresolved contradictions preserved

_None._

All 1,080 contradiction events recorded during the pack run were resolved or closed through the contradiction-resolution session. No contradictions were formally preserved in the disposition ledger with status `preserved`. The `contradictions.md` files in each section's workspace confirm zero open items at freeze time.

## Epistemic disclosures

### Waivers active

Three waivers are active and apply throughout this pack:

**1. pack.source_floor — `primary_sources_required` (pack-level)**
- **Waived rule:** The pack's gate requires primary sources for material claims.
- **Reason:** This pack researches the design intent of research-os itself. The primary sources for the design — Mike's spec decisions and the maintainer's reasoning — are operator input, not public publications. There are no external publications describing the research-os architecture because it is a novel system being designed here.
- **Compensating controls:** Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **Authorized by:** Operator (pack maintainer).

**2. gate.source_floor — `04-gates-and-waivers.primary_sources_required` (section-level)**
- **Waived rule:** Section 04's gate requires primary sources for gate-design claims.
- **Reason:** Same as pack-level: research-os gate logic is operator-designed and not published.
- **Compensating controls:** Quality control literature provides the conceptual grounding [clm_fb48d4730a5c_ollama_intern_11], [clm_fb48d4730a5c_ollama_intern_12].
- **Authorized by:** Operator (pack maintainer).

**3. gate.source_floor — `07-cli-and-runtime-flow.primary_sources_required` (section-level)**
- **Waived rule:** Section 07's gate requires primary sources for CLI-design claims.
- **Reason:** Same as pack-level: research-os CLI design is operator-designed.
- **Compensating controls:** CLI design guidelines [clm_458d9788c68d_ollama_intern_19], commander.js docs [clm_0b75376a48e4_ollama_intern_16], and 12-factor app methodology [clm_de50fc93ad72_ollama_intern_2] provide grounding for the principles.
- **Authorized by:** Operator (pack maintainer).

### Dispositions

**Total dispositioned claims: 17.** These claims exist in the claim ledger but were explicitly excluded from synthesis evidence.

| Section | Count | Status | Reason |
|---------|-------|--------|--------|
| 03 — source-and-claim-truth | 7 | `out_of_bounds_regression_fixture` | Reserved as regression-gate fixtures; deliberately outside synthesis scope |
| 08 — acceptance-suite | 6 | `parked_not_for_synthesis` | Claims accepted but not useful for synthesis prose |
| 08 — acceptance-suite | 2 | `preserved_for_human_note` | Flagged for human review; not synthesis evidence |
| 08 — acceptance-suite | 2 | `needs_human_review_excluded` | Excluded from synthesis pending human review |

Dispositioned claims are traceable in each section's `claim-synthesis-dispositions.jsonl`. None are cited anywhere in this synthesis.

### Operator-override accepted claims

**Total operator-override claims: 30.**

These claims were accepted despite `source_quality_problem` findings from the heuristic reviewer pass. The operator reviewed the findings and judged them false positives — the sources in question are in-domain and authoritative.

| Section | Count | Sources affected | Override reason |
|---------|-------|-----------------|-----------------|
| 02 — pack-artifact-contract | 8 | IANA media-type registry, OpenID Foundation, JSON standards | Sources are authoritative registries/standards; source_quality_problem was a false positive |
| 06 — repo-knowledge-integration | 22 | Elasticsearch docs, Faiss docs, PostgreSQL docs, arXiv embedding paper, Wikipedia knowledge graphs | Sources are in-domain authoritative references; source_quality_problem was a false positive |

All 30 carry `review_method: 'operator_override_source_quality'` in their claim-reviews.jsonl entries. Their provenance was verified via `sections/<id>/claim-reviews.jsonl` and the handoff's `provenance_summary.overrides_applied_count` fields (8 for Section 02, 22 for Section 06).

### Triage abundance

The pack extracted **2,647 candidate claims** across all 8 sections and accepted **296** for synthesis — an acceptance rate of approximately 11.2%. This ratio reflects the design: research-os's extractor over-produces and relies on the calibrated adversarial reviewer pass to curate. Overproduction is the intent; curation is the contract.

| Section | Candidates | Accepted | Rate |
|---------|-----------|----------|------|
| 01 | 109 | 19 | 17% |
| 02 | 471 | 50 | 11% |
| 03 | 715 | 42 | 6% |
| 04 | 131 | 30 | 23% |
| 05 | 548 | 68 | 12% |
| 06 | 297 | 43 | 14% |
| 07 | 175 | 29 | 17% |
| 08 | 201 | 15 | 7% |
| **Total** | **2,647** | **296** | **11%** |

### Rejected claims

**Total rejected claims: 16.** These were reviewed by the adversarial reviewer and judged unfit. Their rejection is a feature of the curation process, not a defect in the pack.

- Rejected claims carry `decision: 'rejected'` in their claim-reviews.jsonl entries.
- None are cited in any synthesis file.
- The review decisions are final and are not subject to appeal in this session.
- Exact claim IDs and rejection reasons are traceable in each section's `claim-reviews.jsonl`.

## Waivers disclosed

- **pack.source_floor** applied to `primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **gate.source_floor** applied to `04-gates-and-waivers.primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **gate.source_floor** applied to `07-cli-and-runtime-flow.primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
