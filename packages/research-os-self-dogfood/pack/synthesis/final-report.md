# Final Report

**Pack:** How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?
**Pack ID:** `5dca72a4300c`
**Decision question:** Lock the schemas, gates, prompt contracts, and CLI surface for research-os v0.1 so the remaining workflow links can be built against a real spec instead of guesses.

> **Guardrails (locked area):**
> - This file cannot be considered complete until the freeze step (Link 12) verifies citation coverage and claim-id existence.
> - Until then, treat this as a draft. Do not promote it externally.
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**

## Summary

This pack researched how research-os should structure a research-pack so that every research artifact becomes actionable implementation material for the repo. The evidence base comprises 296 accepted claims drawn from 8 sections, triaged from 2,647 candidate claims — an overproduction-then-curate design by intent. The research drew on external literature in serialization standards, provenance theory, citation practice, full-text search, AI-agent architecture, CLI design, and software testing methodology.

Key design choices are each grounded in evidence: JSONL ledgers are established serialization practice [claim:clm_c1e29cfcaa1e_ollama_intern_2], [claim:clm_c1e29cfcaa1e_ollama_intern_3]; the provenance model parallels concepts from PROV-DM [claim:clm_0801e1ee8a70_ollama_intern_13]; SQLite FTS5 is a viable local-first search substrate [claim:clm_e15c2248a5d8_ollama_intern_10]; the Cowork handoff leverages documented Claude Code capabilities [claim:clm_9a532b2b74e5_ollama_intern_3]; and the acceptance suite maps to established end-to-end and BDD testing practice [claim:clm_53ee6a9ec24b_ollama_intern_8], [claim:clm_642e49ac2548_ollama_intern_11].

Three active waivers acknowledge that research-os's primary design decisions are operator inputs, not publicly published primary sources. These waivers do not manufacture evidence; they establish the epistemic context for what the external literature can and cannot corroborate.

## Body

### Artifact serialization and schema contract (Section 02)

The JSON Lines format — used for research-os's append-only ledgers (`claims.jsonl`, `claim-reviews.jsonl`, `contradiction-resolutions.jsonl`, `claim-synthesis-dispositions.jsonl`) — is directly corroborated by its specification. JSON Lines works well with unix-style text processing tools and shell pipelines [claim:clm_c1e29cfcaa1e_ollama_intern_2]; it is a great format for log files [claim:clm_c1e29cfcaa1e_ollama_intern_3]; each line must be a valid JSON value [claim:clm_c1e29cfcaa1e_ollama_intern_5]; files may use the `.jsonl` extension [claim:clm_c1e29cfcaa1e_ollama_intern_6]. The JSON specification itself documents the six value types [claim:clm_62d58636ae35_ollama_intern_8], object and array structure [claim:clm_62d58636ae35_ollama_intern_9], [claim:clm_62d58636ae35_ollama_intern_10], and RFC 7159 as the normative reference [claim:clm_62d58636ae35_ollama_intern_28]. JSON Schema 2020-12 provides the meta-schema layer [claim:clm_b1ed6cf92876_ollama_intern_1], [claim:clm_b1ed6cf92876_ollama_intern_4].

The PROV Data Model's concepts of revision, quotation, alternate, derivation, and collection [claim:clm_0801e1ee8a70_ollama_intern_83], [claim:clm_0801e1ee8a70_ollama_intern_85], [claim:clm_0801e1ee8a70_ollama_intern_109], [claim:clm_0801e1ee8a70_ollama_intern_111] parallel research-os's `FetchReceipt`, `SourceCard`, and claim-revision patterns. The evidence does not prescribe research-os's schema directly; it establishes that the design's provenance concepts are grounded in a W3C standard with known semantics.

50 claims accepted from 471 candidates; 7 sources; 8 claims accepted via operator override (source_quality_problem findings judged false positives for IANA registry, OpenID Foundation, and JSON standards).

### Provenance and citation discipline (Section 03)

Section 03 has the richest directly relevant corpus. Provenance is an established discipline spanning archaeology, art history, and paleontology [claim:clm_bc94816a3373_ollama_intern_1]; it is authenticated through institutional processes before significant events [claim:clm_bc94816a3373_ollama_intern_19]. This grounds the `FetchReceipt` and `SourceCard` design as participants in a recognized tradition of chain-of-custody documentation.

Citation practice is also documented as a structural discipline: citations serve purposes beyond correct attribution, including identifying gaps and describing areas for further inquiry [claim:clm_d81a8a3d6bba_ollama_intern_2]; citation content varies by source type [claim:clm_d81a8a3d6bba_ollama_intern_5]; citation analysis is a widely used metascience method [claim:clm_d81a8a3d6bba_ollama_intern_35]. The failure modes that motivate research-os's adversarial review are documented: impact factor boosting [claim:clm_d81a8a3d6bba_ollama_intern_30], citation cartels [claim:clm_d81a8a3d6bba_ollama_intern_31], and a rise in overall publications without a corresponding rise in disruptive work [claim:clm_d81a8a3d6bba_ollama_intern_39].

The knowledge graph thread — that a knowledge graph uses a graph-structured data model to represent entities and their relationships [claim:clm_676ddfa834cc_ollama_intern_21], [claim:clm_676ddfa834cc_ollama_intern_22] — is the source of the only cross-section weave in this pack (see Limitations).

42 claims accepted from 715 candidates; 7 sources. This section is the primary regression fixture; 7 additional dispositioned claims (`out_of_bounds_regression_fixture`) are not cited anywhere in this synthesis.

### Gate framework (Section 04)

The gate concept is grounded in quality control as an established industrial discipline. Quality control originated in manufacturing [claim:clm_fb48d4730a5c_ollama_intern_11]; Walter Shewhart introduced statistical process control in 1924 [claim:clm_fb48d4730a5c_ollama_intern_12]; Joseph Juran extended quality planning in the 1950s [claim:clm_fb48d4730a5c_ollama_intern_13]; Six Sigma was applied to business strategy by Motorola in 1986 [claim:clm_fb48d4730a5c_ollama_intern_8]. These claims establish that inspection-based gating is a multi-decade, multi-industry practice — but they do not prescribe research-os's gate schema or waiver logic, which are operator-designed.

The gate-level `source_floor.primary_sources_required` waiver is active for this section. 20 of the 30 accepted claims are out-of-domain (ophthalmology, military diabetes study, smart city architecture, reCAPTCHA redirect); they are not cited as evidence for gate-design statements.

30 claims accepted from 131 candidates; 5 sources.

### Cowork handoff and Claude Code integration (Section 05)

Section 05 has the highest accepted-claim count (68) and the most directly on-topic corpus. Claude Code capabilities relevant to the Cowork handoff are well documented: Claude Code is available across terminal, IDE, desktop app, and browser [claim:clm_9a532b2b74e5_ollama_intern_3]; it can create commits and pull requests [claim:clm_9a532b2b74e5_ollama_intern_6]; it can run routines on a schedule [claim:clm_9a532b2b74e5_ollama_intern_8]; it can delegate tasks to subagents based on their descriptions [claim:clm_9a7d4217c64c_ollama_intern_3]; subagents inherit permission context from the main conversation [claim:clm_9a7d4217c64c_ollama_intern_30]; the `permissionMode` field controls permission-prompt handling [claim:clm_9a7d4217c64c_ollama_intern_29]; exit code 2 blocks a response [claim:clm_5be2e21d45c9_ollama_intern_149].

CLAUDE.md files provide persistent instructions that survive compaction at the project root [claim:clm_96b9a35307c0_ollama_intern_34]; instructions must be specific to be followed reliably [claim:clm_96b9a35307c0_ollama_intern_33]. Thoughtful context engineering is essential for capable AI agents [claim:clm_126e07cf0d68_ollama_intern_9]; performance degrades as the context window fills [claim:clm_9686dc1633cd_ollama_intern_3]; giving Claude a way to verify its work is crucial [claim:clm_9686dc1633cd_ollama_intern_4].

68 claims accepted from 548 candidates; 8 sources.

### Repo-knowledge integration via SQLite FTS5 (Section 06)

The SQLite FTS5 extension provides full-text search functionality in database applications [claim:clm_e15c2248a5d8_ollama_intern_10]. To use FTS5, a user creates a virtual table with one or more columns [claim:clm_e15c2248a5d8_ollama_intern_3]; the trigram tokenizer supports indexed GLOB and LIKE pattern matching [claim:clm_e15c2248a5d8_ollama_intern_37]; contentless tables support UPDATE and DELETE with care [claim:clm_e15c2248a5d8_ollama_intern_52]; custom tokenizers use the `fts5_tokenizer_v2` struct [claim:clm_e15c2248a5d8_ollama_intern_103]; synonym support is built in [claim:clm_e15c2248a5d8_ollama_intern_113]. WAL mode is significantly faster than the rollback journal in most scenarios [claim:clm_05cae033cedc_ollama_intern_3]; read performance deteriorates as the WAL file grows [claim:clm_05cae033cedc_ollama_intern_16]; checkpointing requires sync operations to avoid corruption [claim:clm_05cae033cedc_ollama_intern_17]. These claims establish that the SQLite FTS5 + WAL combination is a well-specified, production-ready substrate for a local-first search layer.

Elasticsearch [claim:clm_91705d06abdf_ollama_intern_9] and Faiss [claim:clm_ac6052de3047_ollama_intern_5] are documented alternatives but are not local-first by default; the evidence does not recommend either over SQLite FTS5 for the research-os use case — that choice is operator-designed.

43 claims accepted from 297 candidates; 7 sources; 22 accepted via operator override.

### CLI design and runtime flow (Section 07)

CLI design evidence grounds the principle of calibrated verbosity: too much output confuses users [claim:clm_458d9788c68d_ollama_intern_12]; too little also confuses [claim:clm_458d9788c68d_ollama_intern_13]; keeping a command simple enhances robustness [claim:clm_458d9788c68d_ollama_intern_19]. The 12-factor methodology holds that configuration is everything that varies between deploys [claim:clm_de50fc93ad72_ollama_intern_2] and should be stored in environment variables [claim:clm_de50fc93ad72_ollama_intern_4]. Commander.js's `--` argument stops option processing [claim:clm_0b75376a48e4_ollama_intern_16]; callback hooks can be added to commands for lifecycle events [claim:clm_0b75376a48e4_ollama_intern_34]; pass-through options are supported via `passThroughOptions()` [claim:clm_0b75376a48e4_ollama_intern_46].

The gate-level `source_floor.primary_sources_required` waiver is active for this section. The specific command interface and state machine for research-os are operator-designed and are not derivable from the external evidence.

29 claims accepted from 175 candidates; 6 sources.

### Acceptance suite (Section 08)

End-to-end testing checks the complete end-to-end process flow [claim:clm_53ee6a9ec24b_ollama_intern_8]; it is executed once system testing is completed [claim:clm_53ee6a9ec24b_ollama_intern_10]; it tracks defects by week, severity, and priority [claim:clm_53ee6a9ec24b_ollama_intern_12]. BDD can reveal gaps in understanding where more information is needed [claim:clm_642e49ac2548_ollama_intern_7]; automated examples act as guide-rails for development [claim:clm_642e49ac2548_ollama_intern_11]. Acceptance tests describe software behavior [claim:clm_eefec92990cb_ollama_intern_19] and are formal descriptions expressed as examples or usage scenarios [claim:clm_eefec92990cb_ollama_intern_20], [claim:clm_eefec92990cb_ollama_intern_24]. GitHub Actions enables automatic building and testing of projects [claim:clm_4b7a4ad94a3b_ollama_intern_1].

These claims confirm that the acceptance-suite design maps to established practice. They do not prescribe the specific test cases — those are operator-designed.

15 claims accepted from 201 candidates; 5 sources. 10 additional claims carry dispositions (6 parked, 2 preserved for human note, 2 needs_human_review_excluded); none are cited.

## Limitations and unresolved tensions

**Evidence base constraint.** The pack's primary design authority is operator input, not publicly published primary sources. The external literature provides corroboration for the problem domain and underlying technology choices but cannot validate specific schema decisions, gate thresholds, or workflow sequencing. Three active waivers formalize this constraint.

**Out-of-domain accepted claims.** Multiple sections contain accepted claims with no honest connection to the section's topic: astrophysics claims in Section 01 [claim:clm_a2f17fd8c9a6_ollama_intern_1], ophthalmology claims in Section 04 [claim:clm_55f4bfa87f54_ollama_intern_12], signal theory and cookie claims in Section 06 and 08 [claim:clm_5d98fdba0757_ollama_intern_4], [claim:clm_eefec92990cb_ollama_intern_21]. These passed the adversarial reviewer and are accepted — but they contribute no product-thesis evidence. They are disclosed here; they are not cited as evidence for any material statement in this report.

**Single cross-section weave.** Only one cross-section cluster is mechanically supported (`cls_d7170c650869`): knowledge-graph concepts span Sections 03 and 06 via shared source `src_676ddfa834cc`. Claim [claim:clm_676ddfa834cc_ollama_intern_26] appears in both sections' accepted sets. No other cross-section weave meets the criterion of at least one accepted claim in each section being woven. The 375 scope overlaps in the cross-section map do not resolve to additional honest weaves.

**Operator overrides.** 30 accepted claims (8 in Section 02, 22 in Section 06) carry `review_method: 'operator_override_source_quality'`. These are accepted despite heuristic `source_quality_problem` findings that the operator judged to be false positives. Their provenance is disclosed; they are used as evidence where appropriate.

**No preserved contradictions.** All 1,080 contradiction events in the pack were resolved or closed. No contradictions were formally preserved. This section would disclose them if any existed.

## Waivers disclosed

- **pack.source_floor** applied to `primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **gate.source_floor** applied to `04-gates-and-waivers.primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
- **gate.source_floor** applied to `07-cli-and-runtime-flow.primary_sources_required` — This pack researches the design intent of research-os itself. Primary sources for the design (Mike's spec decisions and the maintainer's reasoning) are operator input, not public publications. Public secondary sources about adjacent topics (citation systems, knowledge graphs, gating workflows, FTS5, Cowork patterns) provide independent corroboration where the design touches established practice.
