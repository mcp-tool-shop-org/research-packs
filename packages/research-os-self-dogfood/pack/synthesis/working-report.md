# Working Report

**Pack:** How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?
**Pack ID:** `5dca72a4300c`

> **Guardrails:**
> - This is the working synthesis area. Drafts here are not final.
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**
> - **Every paragraph must cite at least one accepted_claim_id (inline `[clm_...]`).**
> - **Unresolved contradictions must remain visible in the prose, not summarized away.**

## Working synthesis

---

### Section 01 — `01-product-thesis`

**Purpose:** What research-os is, what it refuses to become, and what workflow must not be broken.

**Accepted claims:** 19 | **Accepted sources:** 7 | **Candidates:** 109

**Triage abundance:** 109 candidate claims were triaged from 7 sources. The review accepted 19, reflecting the strongest signals that cleared the calibrated reviewer pass.

**Evidence threads:**

The accepted evidence base for this section covers two themes from the external literature: research integrity principles and open-science infrastructure. Neither directly documents research-os's product decisions — those are operator inputs, not public publications (the active pack-level source-floor waiver applies here). What the evidence provides is external corroboration for the *problem domain* research-os addresses.

On research integrity: Hoaxing, forging, trimming, and cooking are established forms of scientific fraud (`clm_d474bc1158c2_ollama_intern_19`, scope: "Scientific research practices identified by Charles Babbage in 1830"). Promoting open research culture can enhance scientific integrity (`clm_d474bc1158c2_ollama_intern_58`, scope: "The field of scientific research, particularly regarding openness and transparency"). Many scientists are concerned about the reproducibility of research findings (`clm_d474bc1158c2_ollama_intern_60`, scope: "The current state of scientific research regarding reproducibility"). The OECD published a report on scientific integrity best practices in 2007 (`clm_d474bc1158c2_ollama_intern_38`, scope: "OECD's actions"). These claims collectively establish that the research integrity problem is real, recognized by international bodies, and linked to structural practices — not individual bad actors.

On open-science infrastructure: FORCE11 is a non-profit organization focused on improving knowledge creation and sharing (`clm_56b5f3cd926b_ollama_intern_1`, `clm_56b5f3cd926b_ollama_intern_2`, scope: "FORCE11's mission statement" and "organizational details provided on their website"). The DOI Foundation is a not-for-profit organization governing the DOI system (`clm_770d35522c16_ollama_intern_2`, scope: "On behalf of agencies managing DOI registries"). The DOI system uses fake DOI schemes as a warning (`clm_770d35522c16_ollama_intern_1`, scope: "Users of the Digital Object Identifier (DOI) system"). These claims demonstrate that the open-science community has organized around persistent identifier infrastructure — a pattern research-os parallels at the research-artifact level.

**Out-of-domain claims in this section's accepted set:** Seven accepted claims in Section 01 are clearly out-of-domain for the product-thesis topic. These include claims about HR Car (a luminous blue variable star) (`clm_a2f17fd8c9a6_ollama_intern_1`, `clm_a2f17fd8c9a6_ollama_intern_2`, `clm_a2f17fd8c9a6_ollama_intern_6`, `clm_a2f17fd8c9a6_ollama_intern_7`, `clm_a2f17fd8c9a6_ollama_intern_8`, `clm_a2f17fd8c9a6_ollama_intern_9`), about Hawking evaporation (`clm_923564b918e1_ollama_intern_3`), about machine learning and molecular dynamics limitations (`clm_98d43428beed_ollama_intern_3`), and about a data steward certificate course (`clm_d574302fe3de_ollama_intern_4`) and FORCE11 cookie policy (`clm_56b5f3cd926b_ollama_intern_3`). These claims passed the adversarial reviewer — they are accepted — but they cannot be synthesized into product-thesis statements because no honest connection exists between astrophysics and research-os's design. The out-of-domain claims are disclosed here; they are not cited as evidence for any material statement in this working report.

**Waivers active:** Pack-level `source_floor.primary_sources_required` waiver. The design intent of research-os is not published in accessible primary sources. Secondary sources about adjacent topics (research integrity, open-science infrastructure) provide independent corroboration where the design touches established practice.

**Source diversity:** 7 distinct sources contributed accepted claims. In-domain: Wikipedia (research integrity), FORCE11, DOI Foundation. Out-of-domain: arXiv astrophysics paper (HR Car), arXiv physics paper (Hawking evaporation), data-steward course website, Wikipedia (used for both in-domain and out-of-domain content from the same source).

---

### Section 02 — `02-pack-artifact-contract`

**Purpose:** Exact folder structure, file schemas, required ledgers, receipts, and freeze outputs.

**Accepted claims:** 50 | **Accepted sources:** 7 | **Candidates:** 471

**Triage abundance:** 471 candidate claims were triaged from 7 sources. The review accepted 50. Note: 8 of the 50 accepted claims carry `review_method: 'operator_override_source_quality'` — accepted despite a `source_quality_problem` finding from the heuristic pass, because the operator judged those findings false positives for these specific sources (IANA registry, OpenID Foundation, JSON standards).

**Evidence threads:**

The strongest evidence thread in Section 02 covers the serialization standards that underpin research-os's artifact ledgers. The JSON Lines format — used for research-os's append-only ledgers — is well-documented: JSON Lines works well with unix-style text processing tools and shell pipelines (`clm_c1e29cfcaa1e_ollama_intern_2`, scope: "The JSON Lines text format"). JSON Lines is a great format for log files (`clm_c1e29cfcaa1e_ollama_intern_3`). The format has three requirements (`clm_c1e29cfcaa1e_ollama_intern_4`): each line must be a valid JSON value (`clm_c1e29cfcaa1e_ollama_intern_5`), and files may use the `.jsonl` extension (`clm_c1e29cfcaa1e_ollama_intern_6`). These claims directly support the design choice of JSONL for `claims.jsonl`, `claim-reviews.jsonl`, `contradiction-resolutions.jsonl`, and `claim-synthesis-dispositions.jsonl`.

On JSON itself: JSON can represent four primitive types and two structured types — objects and arrays (`clm_62d58636ae35_ollama_intern_8`, scope: "The structure of JSON data"). An object is an unordered collection of zero or more name/value pairs (`clm_62d58636ae35_ollama_intern_9`); an array is an ordered sequence of values (`clm_62d58636ae35_ollama_intern_10`). The terms 'object' and 'array' come from JavaScript conventions (`clm_62d58636ae35_ollama_intern_11`). A JSON text is a sequence of tokens (`clm_62d58636ae35_ollama_intern_13`). JSON numbers follow a specific grammar (`clm_62d58636ae35_ollama_intern_17`, `clm_62d58636ae35_ollama_intern_19`). Software implementations must test object member names for equality when comparing strings with escaped characters unconverted (`clm_62d58636ae35_ollama_intern_23`, scope: "When comparing strings with escaped characters unconverted"). RFC 7159 is the normative specification (`clm_62d58636ae35_ollama_intern_28`, scope: "As of March 2014"). RFC 4627 was written by Douglas Crockford (`clm_62d58636ae35_ollama_intern_29`, scope: "Historical context of the JSON specification").

On JSON Schema: The current version is 2020-12 (`clm_b1ed6cf92876_ollama_intern_1`). The previous version was 2019-09 (`clm_b1ed6cf92876_ollama_intern_2`). The specification splits into Core and Validation (`clm_b1ed6cf92876_ollama_intern_3`). Meta-schemas are schemas against which other schemas can be validated (`clm_b1ed6cf92876_ollama_intern_4`). JSON Schema documentation helps users learn the basics of schema design (`clm_2cc80fcf07ba_ollama_intern_4`, scope: "JSON Schema users, schema design basics").

On YAML: The YAML spec documents repeated-node handling via anchors and aliases (`clm_712838e1db63_ollama_intern_16`), complex mapping keys with `?` prefix (`clm_712838e1db63_ollama_intern_17`), folded scalar newline behavior (`clm_712838e1db63_ollama_intern_20`, `clm_712838e1db63_ollama_intern_122`), backslash escape sequences in double-quoted scalars (`clm_712838e1db63_ollama_intern_64`), multi-line comment token separation (`clm_712838e1db63_ollama_intern_82`), implicit keys via single-quoted strings (`clm_712838e1db63_ollama_intern_104`), flow nodes embedded in block collections (`clm_712838e1db63_ollama_intern_128`), JSON schema support as an option (`clm_712838e1db63_ollama_intern_141`, scope: "When processing JSON files"), and that YAML schemas should be based on the core schema (`clm_712838e1db63_ollama_intern_147`).

On PROV-DM: PROV distinguishes core structures from extended structures (`clm_0801e1ee8a70_ollama_intern_13`, scope: "The PROV data model organization"). PROV-DM relations are indexed according to their two primary elements (`clm_0801e1ee8a70_ollama_intern_52`). Invalidation of an entity can be recorded with optional identifiers (`clm_0801e1ee8a70_ollama_intern_80`, scope: "The PROV-DM model for invalidation"). Derivations can optionally include attributes for further information (`clm_0801e1ee8a70_ollama_intern_83`). Revision and quotation are subtypes of derivation relations (`clm_0801e1ee8a70_ollama_intern_85`). A collection is an entity with members that can be entities themselves (`clm_0801e1ee8a70_ollama_intern_111`, scope: "In PROV-DM"). PROV-DM allows describing partial states of entities using attributes and associated values, for the purpose of refining provenance descriptions (`clm_0801e1ee8a70_ollama_intern_132`). BBC News desktop and mobile versions are alternates of each other (`clm_0801e1ee8a70_ollama_intern_109`, scope: "In the context of BBC News website"), and two versions of a technical report are alternates (`clm_0801e1ee8a70_ollama_intern_110`) — establishing the PROV `alternate` concept. The `QUALIFIED_NAME` convenience notation is defined (`clm_0801e1ee8a70_ollama_intern_127`, scope: "The explanation of 'QUALIFIED_NAME' in the PROV Data Model").

On IANA media types and OpenID Foundation: The IANA maintains contact information for media type registrations (`clm_cf2238f43a01_ollama_intern_110`, scope: "IANA's role in the internet infrastructure"). The IANA Registry of Media Types was last updated on 2026-04-16 (`clm_cf2238f43a01_ollama_intern_119`). The OpenID Foundation has an Artifact Binding Working Group (`clm_cf2238f43a01_ollama_intern_114`) and a Digital Credentials Protocols Working Group (`clm_cf2238f43a01_ollama_intern_115`). Several specific IANA media type registrations are documented (`clm_cf2238f43a01_ollama_intern_10`, `clm_cf2238f43a01_ollama_intern_11`, `clm_cf2238f43a01_ollama_intern_98`). Contact information structure details (`clm_cf2238f43a01_ollama_intern_105`, `clm_cf2238f43a01_ollama_intern_106`, `clm_cf2238f43a01_ollama_intern_118`). These are more tangential — they establish context about registered artifact and protocol namespaces but do not directly prescribe research-os's artifact structure.

**Waivers active:** None section-specific. Pack-level waiver applies.

**Source diversity:** 7 distinct sources (IANA registry, OpenID Foundation, JSON Schema docs, JSON RFC, JSON Lines spec, YAML spec, PROV-DM W3C spec).

---

### Section 03 — `03-source-and-claim-truth`

**Purpose:** How source cards, claim extraction, citations, confidence, uncertainty, and unsupported claims work.

**Accepted claims:** 42 | **Accepted sources:** 7 | **Candidates:** 715

**Triage abundance:** 715 candidate claims were triaged from 7 sources. This is the largest candidate pool in the pack and the primary regression fixture section. The review accepted 42. 7 additional claims carry the `out_of_bounds_regression_fixture` disposition and must NOT be cited as evidence.

**Evidence threads:**

Section 03 has the richest and most directly relevant accepted-claim corpus in the pack. Three strong evidence threads emerge.

**Thread 1: Provenance as a discipline.** Provenance refers to the chronology of an object's ownership, custody, or location, applicable across archaeology, paleontology, and art history (`clm_bc94816a3373_ollama_intern_1`, scope: "The concept of provenance is applicable in various fields such as archaeology, paleontology, and art history"). Establishing the provenance of a painting can confirm its date, artist, subject, and authenticity (`clm_bc94816a3373_ollama_intern_3`, scope: "Painting provenance has implications for ownership disputes, authenticity, and dating"). Museums in colonial origin countries are starting to publicly present provenance information for objects in their collections (`clm_bc94816a3373_ollama_intern_7`, scope: "discussions about restitution of cultural objects in museum collections"). Provenance for pianos is authenticated before significant events like museum induction, auction, or estate appraisal (`clm_bc94816a3373_ollama_intern_19`, scope: "The domain of piano provenance authentication in relation to museum items, auction, and estate"). Piano provenance experts often have college degrees and professional experience and may belong to appraiser societies (`clm_bc94816a3373_ollama_intern_22`, scope: "The field of piano provenance expertise and its associations"). These claims establish provenance as a rigorous, institutionalized practice — the conceptual grounding for research-os's `FetchReceipt`, `SourceCard`, and `evidence_excerpt` design.

Two accepted claims in this section are out-of-domain: spandrels as introduced by Gould and Lewontin (`clm_bc94816a3373_ollama_intern_72`, scope: "Places the concept of spandrels within the broader context of provenance") and genetic adaptation in small populations (`clm_bc94816a3373_ollama_intern_73`, scope: "The potential limitations of small populations in adapting"). These passed the reviewer but cannot be connected to source/claim truth design. Disclosed here; not cited as evidence for any material statement.

**Thread 2: Citation as a structured practice.** A citation in an intellectual work is an abbreviated expression that denotes an entry in bibliographic references, acknowledging the relevance of other works (`clm_d81a8a3d6bba_ollama_intern_1`, scope: "Intellectual works across various disciplines and academic fields"). Citations serve purposes beyond correct attribution, including identifying gaps in knowledge and describing areas for further inquiry (`clm_d81a8a3d6bba_ollama_intern_2`, scope: "The broader role of citations in advancing research and knowledge"). Citation conventions vary by system, with each associated with different disciplines and style guides (`clm_d81a8a3d6bba_ollama_intern_3`, scope: "The diversity of citation systems and styles used across different fields"). Citation content varies by source type (`clm_d81a8a3d6bba_ollama_intern_5`, scope: "The basic elements commonly included in citations for different sources"). Citation analysis is a widely used method in metascience (`clm_d81a8a3d6bba_ollama_intern_35`, scope: "The application of citation analysis in metascience"). On citation integrity: Unethical behavior such as impact factor boosting can affect citation patterns in high-ranking medical journals (`clm_d81a8a3d6bba_ollama_intern_30`, scope: "Citation practices in top-tier medical science journals"). Citation cartels are groups of authors who disproportionately cite each other's work (`clm_d81a8a3d6bba_ollama_intern_31`, scope: "The existence and impact of citation cartels"). The overall number of papers has risen while the number of 'highly disruptive' papers has not (`clm_d81a8a3d6bba_ollama_intern_39`, scope: "The relationship between the rise in overall scientific publications and the lack of corresponding rise in highly disruptive papers"). These failure-mode claims establish the context for research-os's adversarial review and truth-chain architecture.

**Thread 3: Knowledge graphs and RDF serialization.** A knowledge graph uses a graph-structured data model to represent knowledge (`clm_676ddfa834cc_ollama_intern_1`, scope: "In knowledge representation and reasoning"). The term 'knowledge graph' was coined as early as 1972 (`clm_676ddfa834cc_ollama_intern_5`, scope: "discussion of how to build modular instructional systems for courses"). A knowledge graph is a knowledge base that uses a graph-structured data model to represent and operate on entities and their relationships (`clm_676ddfa834cc_ollama_intern_21`, scope: "Knowledge representation and reasoning, specifically in the context of knowledge graphs"). Knowledge graphs often encode the free-form semantics or relationships underlying entities (`clm_676ddfa834cc_ollama_intern_22`, scope: "The additional functionality provided by knowledge graphs beyond basic data storage"). Knowledge graphs are used to store and represent data in a graph-structured model that allows for encoding relationships between entities (`clm_676ddfa834cc_ollama_intern_23`, scope: "The general purpose and use case for knowledge graphs"). Knowledge graphs encode the underlying relationships between entities (`clm_676ddfa834cc_ollama_intern_26`, scope: "A key feature of knowledge graphs related to capturing relationships between entities").

On W3C PROV ontology: PROV consists of 12 documents including the core spec (`clm_d39cd3ba0ef2_ollama_intern_5`, scope: "Provenance Family of Documents"). PROV-O defines a light-weight OWL2 ontology for the provenance data model (`clm_d39cd3ba0ef2_ollama_intern_6`, scope: "Linked Data and Semantic Web community"). PROV-XML defines an XML schema for the provenance data model (`clm_d39cd3ba0ef2_ollama_intern_7`, scope: "Developers needing a native XML serialization").

On RDF serialization formats: Turtle is a compact, human-friendly format for serializing RDF data (`clm_155c4be7850d_ollama_intern_14`, scope: "Serialization formats for RDF data"). TriG is an extension of Turtle for serializing RDF datasets (`clm_155c4be7850d_ollama_intern_15`). N-Quads is a superset of N-Triples that can serialize multiple RDF graphs (`clm_155c4be7850d_ollama_intern_17`). JSON-LD is a JSON-based serialization format for RDF (`clm_155c4be7850d_ollama_intern_18`). LV2 uses Turtle to describe API/ABI capabilities (`clm_155c4be7850d_ollama_intern_42`, scope: "Software Plugins"). SPDX uses RDF to specify bills of material (`clm_155c4be7850d_ollama_intern_43`, scope: "Software Package Management"). RDF models are labeled, directed multi-graphs (`clm_155c4be7850d_ollama_intern_46`, scope: "Graph Theory").

On JSON-LD 1.1: JSON-LD provides mechanisms for protecting term definitions and introducing scoped and imported contexts (`clm_caedf4b2d8e0_ollama_intern_101`, scope: "Linked Data serialization"). JSON-LD 1.1 recommends avoiding terms starting with `@` followed by alpha characters (`clm_caedf4b2d8e0_ollama_intern_103`). The `@vocab` keyword sets a default vocabulary prefix (`clm_caedf4b2d8e0_ollama_intern_104`, scope: "JSON-LD 1.1 processing of documents"). The `@version` keyword determines processing mode (`clm_caedf4b2d8e0_ollama_intern_105`, scope: "JSON-LD 1.1 document processing"). Aliases and expanded term definitions are allowed with certain exceptions (`clm_caedf4b2d8e0_ollama_intern_127`). JSON-LD supports IRI and compact IRI usage in term definitions (`clm_caedf4b2d8e0_ollama_intern_128`). The `@direction` keyword can be aliased in value objects with values `'ltr'`, `'rtl'`, or null (`clm_caedf4b2d8e0_ollama_intern_374`, scope: "Web-based programming environments and JSON-based storage engines").

On arXiv as an open-science infrastructure example: arXivLabs allows collaborators to develop and share new arXiv features (`clm_a135974ea838_ollama_intern_7`, scope: "Collaborative development and hosting of features on the arXiv website"). Collaborating organizations have embraced arXiv's core values (`clm_a135974ea838_ollama_intern_8`). arXiv is committed to openness, community, excellence, and user privacy (`clm_a135974ea838_ollama_intern_9`).

**Waivers active:** None section-specific. Pack-level waiver applies.

**Source diversity:** 7 distinct sources: Wikipedia (knowledge graphs), W3C PROV-O ontology, Wikipedia (citations/bibliometrics), Wikipedia (provenance), W3C RDF serialization spec, JSON-LD 1.1 spec, arXiv institutional documentation.

---

### Section 04 — `04-gates-and-waivers`

**Purpose:** Hard gates, soft gates, waiver reasons, compensating controls, and failure states.

**Accepted claims:** 30 | **Accepted sources:** 5 | **Candidates:** 131

**Triage abundance:** 131 candidate claims were triaged from 5 sources. The review accepted 30. The active gate-level `source_floor.primary_sources_required` waiver applies to this section.

**Evidence threads:**

Section 04's accepted evidence base covers one directly relevant thread and several out-of-domain clusters.

**Thread 1: Quality control as the intellectual ancestor of gates.** Quality control is a process focused on fulfilling quality requirements (`clm_fb48d4730a5c_ollama_intern_1`, scope: "In production processes"). Inspection is a major component of quality control (`clm_fb48d4730a5c_ollama_intern_3`, scope: "Involving visual examination or analysis of end results"). Quality control originated in the manufacturing industry (`clm_fb48d4730a5c_ollama_intern_11`, scope: "The early development of quality control"). Walter Shewhart introduced the concept of statistical process control in 1924 (`clm_fb48d4730a5c_ollama_intern_12`, scope: "The development of statistical process control methods"). Joseph Juran's work in the 1950s focused on quality planning and management (`clm_fb48d4730a5c_ollama_intern_13`, scope: "The evolution of quality control principles during the mid-20th century"). Total quality control (TQC) involves all departments in quality management, popularized by Armand V. Feigenbaum in the mid-20th century (`clm_fb48d4730a5c_ollama_intern_6`). TQC originated in the United States Department of Defense (`clm_fb48d4730a5c_ollama_intern_7`, scope: "Quality management systems"). Six Sigma was first applied to business strategy by Motorola in 1986 (`clm_fb48d4730a5c_ollama_intern_8`, scope: "Business strategies and quality control"). These claims establish quality control as a multi-decade, multi-industry discipline that grounds the gate concept in established practice.

**Out-of-domain claims in this section:** The accepted set includes claims from a medical ophthalmology study (diabetic retinopathy / OCTA imaging: `clm_55f4bfa87f54_ollama_intern_12`, `clm_55f4bfa87f54_ollama_intern_22`, `clm_55f4bfa87f54_ollama_intern_29`, `clm_55f4bfa87f54_ollama_intern_31`, `clm_55f4bfa87f54_ollama_intern_32`, `clm_55f4bfa87f54_ollama_intern_40`), from a military diabetes patient-commitment study (`clm_f0fe25b20f29_ollama_intern_1`, `clm_f0fe25b20f29_ollama_intern_3`, `clm_f0fe25b20f29_ollama_intern_4`, `clm_f0fe25b20f29_ollama_intern_5`, `clm_f0fe25b20f29_ollama_intern_6`, `clm_f0fe25b20f29_ollama_intern_13`, `clm_f0fe25b20f29_ollama_intern_14`, `clm_f0fe25b20f29_ollama_intern_15`, `clm_f0fe25b20f29_ollama_intern_43`, `clm_f0fe25b20f29_ollama_intern_44`), from a smart city architecture paper (`clm_d2cd935fb884_ollama_intern_1`, `clm_d2cd935fb884_ollama_intern_2`, `clm_d2cd935fb884_ollama_intern_3`), and from a reCAPTCHA redirect page (`clm_bbd08b91cbb6_ollama_intern_1`, `clm_bbd08b91cbb6_ollama_intern_2`, `clm_bbd08b91cbb6_ollama_intern_3`). These passed the adversarial reviewer — the ophthalmology claim `clm_55f4bfa87f54_ollama_intern_40` asserts "Approximately 11% of fundus images were excluded due to quality control issues" (scope: "Fundus images"), which contains the term "quality control" but applies in the fundus-imaging domain. No honest inference connecting diabetic retinopathy or reCAPTCHA to research-os gate design is supported. All out-of-domain claims are disclosed here and are not cited as evidence for any material gate-design statement.

**Waivers active:** Gate-level `source_floor.primary_sources_required` waiver for this section.

**Source diversity:** 5 distinct sources: Wikipedia (quality control history), IEEE smart city paper, ophthalmology study, military diabetes study, PubMed/reCAPTCHA redirect.

---

### Section 05 — `05-cowork-handoff`

**Purpose:** The real cowork-master.md contract, allowed actions, forbidden drift, synthesis responsibilities, and stop conditions.

**Accepted claims:** 68 | **Accepted sources:** 8 | **Candidates:** 548

**Triage abundance:** 548 candidate claims were triaged from 8 sources. The review accepted 68. This section has the highest accepted-claim count and nearly all 68 claims are directly on-topic.

**Evidence threads:**

**Thread 1: Claude Code capabilities at the platform level.** Claude Code is available in the terminal, IDE, desktop app, and browser (`clm_9a532b2b74e5_ollama_intern_3`, scope: "Regarding accessibility across different platforms"). Claude Code can create commits and pull requests while working directly with git (`clm_9a532b2b74e5_ollama_intern_6`, scope: "When making changes, creating branches, and opening pull requests"). Claude Code can run routines on a schedule to automate repeated tasks, manageable remotely even when the local machine is off (`clm_9a532b2b74e5_ollama_intern_8`). Claude Code can route tasks from team chat to a pull request (`clm_9a532b2b74e5_ollama_intern_15`, scope: "Tasks mentioned in team chat that Claude Code is integrated with").

**Thread 2: Subagents and permission architecture.** Claude Code allows creating custom subagents for task-specific workflows (`clm_9a7d4217c64c_ollama_intern_1`, scope: "Claude Code platform"). Claude delegates tasks to subagents based on their descriptions (`clm_9a7d4217c64c_ollama_intern_3`). Project subagents are discovered by walking up from the current working directory and can be checked into version control (`clm_9a7d4217c64c_ollama_intern_14`, scope: "Claude Code platform, specifically for project-specific subagents"). Subagent definitions can be passed as JSON using the `--agents` flag (`clm_9a7d4217c64c_ollama_intern_15`, scope: "Claude Code platform, specifically for command line usage"). Managed subagents from organization administrators take precedence over project and user subagents with the same name (`clm_9a7d4217c64c_ollama_intern_16`, scope: "Claude Code platform, specifically for managed settings"). The `permissionMode` field controls how a subagent handles permission prompts (`clm_9a7d4217c64c_ollama_intern_29`, scope: "Subagents in Claude Code"). Subagents inherit the permission context from the main conversation and can override the mode (`clm_9a7d4217c64c_ollama_intern_30`). The default permission mode is Standard, which involves checking prompts (`clm_9a7d4217c64c_ollama_intern_31`, scope: "Subagents in Claude Code"). The `bypassPermissions` mode skips all permission prompts (`clm_9a7d4217c64c_ollama_intern_35`, scope: "Subagents in Claude Code"). Hook input is passed as JSON via stdin to hook commands (`clm_9a7d4217c64c_ollama_intern_40`, scope: "The validation script reads this JSON and exits with code 2 to block write operations").

**Thread 3: Hook system.** Hook events fire at specific points during a session (`clm_5be2e21d45c9_ollama_intern_1`, scope: "Hook events in Claude Code"). Common fields apply to all hook types: type, if, timeout, statusMessage, once (`clm_5be2e21d45c9_ollama_intern_23`). HTTP hooks accept 'url', 'headers', 'allowedEnvVars', and other common fields (`clm_5be2e21d45c9_ollama_intern_27`, scope: "Claude Code hook configuration"). Prompt and agent hooks accept a 'prompt' field in addition to common fields (`clm_5be2e21d45c9_ollama_intern_29`). Some hook events allow more detailed control via `hookSpecificOutput` (`clm_5be2e21d45c9_ollama_intern_56`). The `PostToolBatch` hook can inject context for Claude via `additionalContext` (`clm_5be2e21d45c9_ollama_intern_106`, scope: "Claude Code PostToolBatch hook"). `PermissionDenied` hooks receive `tool_name`, `tool_input`, `tool_use_id`, and `reason` (`clm_5be2e21d45c9_ollama_intern_109`). `TeammateIdle` hooks fire on every occurrence and do not support matchers (`clm_5be2e21d45c9_ollama_intern_125`). To override the user's response, return a JSON object with `hookSpecificOutput` (`clm_5be2e21d45c9_ollama_intern_148`, scope: "ElicitationResult hook in Claude Code"). Exit code 2 blocks the response, changing the effective action to decline (`clm_5be2e21d45c9_ollama_intern_149`, scope: "ElicitationResult hook in Claude Code").

**Thread 4: Memory and CLAUDE.md.** Claude remembers user-provided instructions via CLAUDE.md files (`clm_96b9a35307c0_ollama_intern_1`, scope: "Instructions given for a specific project or workflow"). Claude can accumulate learnings automatically with auto memory (`clm_96b9a35307c0_ollama_intern_2`, scope: "Learning from user corrections and preferences"). CLAUDE.md files provide persistent instructions (`clm_96b9a35307c0_ollama_intern_5`). Each rules file should cover one topic with a descriptive filename (`clm_96b9a35307c0_ollama_intern_18`, scope: "Organization of rules files for Claude"). The `.claude/rules/` directory supports symlinks to share rules across projects (`clm_96b9a35307c0_ollama_intern_21`). Claude stores user instructions automatically in auto memory during sessions (`clm_96b9a35307c0_ollama_intern_23`, `clm_96b9a35307c0_ollama_intern_29`). CLAUDE.md files are not guaranteed to be followed strictly for vague or conflicting instructions (`clm_96b9a35307c0_ollama_intern_32`, scope: "When Claude reads CLAUDE.md files"). Instructions must be specific to ensure Claude follows them (`clm_96b9a35307c0_ollama_intern_33`). The project-root CLAUDE.md survives compaction, but nested files do not (`clm_96b9a35307c0_ollama_intern_34`, scope: "When Claude performs a /compact command").

**Thread 5: Settings and skills.** Claude Code offers a variety of settings (`clm_c8975a95117b_ollama_intern_1`). Settings include `allowedChannelPlugins` (`clm_c8975a95117b_ollama_intern_11`), `allowedHttpHookUrls` (`clm_c8975a95117b_ollama_intern_12`), `allowedMcpServers` (`clm_c8975a95117b_ollama_intern_13`), channel enable/disable (`clm_c8975a95117b_ollama_intern_20`), MCP server listing from `.mcp.json` (`clm_c8975a95117b_ollama_intern_23`), `modelOverrides` (`clm_c8975a95117b_ollama_intern_28`), dynamic OpenTelemetry headers (`clm_c8975a95117b_ollama_intern_29`), `outputStyle` (`clm_c8975a95117b_ollama_intern_30`), and file path autocomplete configuration (`clm_c8975a95117b_ollama_intern_55`). Skills extend Claude's capabilities through SKILL.md files (`clm_486f1e6121c8_ollama_intern_1`, `clm_486f1e6121c8_ollama_intern_6`). Skills support string substitution (`clm_486f1e6121c8_ollama_intern_17`), can run in isolation via `context: fork` (`clm_486f1e6121c8_ollama_intern_33`), can be allowed or denied via permission rules (`clm_486f1e6121c8_ollama_intern_36`), and can run shell commands with `!<command>` executing before Claude sees anything (`clm_486f1e6121c8_ollama_intern_32`).

**Thread 6: Autonomy and context engineering.** Claude Code figures out how to build code based on user descriptions (`clm_9686dc1633cd_ollama_intern_2`). Performance degrades as the context window fills (`clm_9686dc1633cd_ollama_intern_3`). Giving Claude a way to verify its work is crucial (`clm_9686dc1633cd_ollama_intern_4`). Thoughtful context engineering is essential for building capable AI agents (`clm_126e07cf0d68_ollama_intern_9`, scope: "Building AI agents"). Few-shot prompting is a well-known best practice (`clm_126e07cf0d68_ollama_intern_13`). Stuffing a laundry list of edge cases into a prompt is not recommended (`clm_126e07cf0d68_ollama_intern_14`). Curating diverse, canonical examples is recommended (`clm_126e07cf0d68_ollama_intern_15`, scope: "AI agents").

**Waivers active:** None section-specific. Pack-level waiver applies.

**Source diversity:** 8 distinct sources (Claude Code platform docs, subagent docs, hook docs, memory/CLAUDE.md docs, settings docs, skills docs, general usage guide, context engineering reference).

---

### Section 06 — `06-repo-knowledge-integration`

**Purpose:** How pack artifacts become searchable facts instead of dead markdown.

**Accepted claims:** 43 | **Accepted sources:** 7 | **Candidates:** 297

**Triage abundance:** 297 candidate claims were triaged from 7 sources. The review accepted 43. Note: 22 of the 43 carry `review_method: 'operator_override_source_quality'` — the operator judged the source_quality_problem findings false positives (Elasticsearch docs, Faiss, PostgreSQL docs, arXiv embedding paper, and Wikipedia knowledge graphs are all in-domain authoritative sources).

**Evidence threads:**

**Thread 1: SQLite FTS5.** The SQLite FTS5 extension provides full-text search functionality in database applications (`clm_e15c2248a5d8_ollama_intern_10`). To use FTS5, a user creates an FTS5 virtual table with one or more columns (`clm_e15c2248a5d8_ollama_intern_3`, scope: "Using FTS5 in SQLite"). FTS5 tables using the trigram tokenizer support indexed GLOB and LIKE pattern matching, unless `remove_diacritics` is set (`clm_e15c2248a5d8_ollama_intern_37`). Contentless tables support UPDATE and DELETE but must be used with care (`clm_e15c2248a5d8_ollama_intern_52`, scope: "When performing DELETE operations on contentless tables"). All queries on contentless FTS5 tables with `columnsize=0` must be full-text queries (`clm_e15c2248a5d8_ollama_intern_55`). NEAR queries and phrase queries are not available when `detail` is set to 'column' (`clm_e15c2248a5d8_ollama_intern_58`). FTS5 uses an `fts5_tokenizer_v2` struct to describe a custom tokenizer (`clm_e15c2248a5d8_ollama_intern_103`). FTS5 allows adding multiple synonyms for a single token to the index (`clm_e15c2248a5d8_ollama_intern_113`). Phrases in FTS5 queries are numbered starting from 0 (`clm_e15c2248a5d8_ollama_intern_124`).

**Thread 2: SQLite WAL mode.** WAL is significantly faster than the rollback journal in most scenarios (`clm_05cae033cedc_ollama_intern_3`, scope: "Within SQLite's implementation"). Read performance deteriorates as the WAL file grows (`clm_05cae033cedc_ollama_intern_16`). Checkpointing requires sync operations to avoid corruption (`clm_05cae033cedc_ollama_intern_17`). Three checkpoint subtypes exist in WAL mode: PASSIVE, FULL, and RESTART (`clm_05cae033cedc_ollama_intern_23`). In SQLite before 3.22.0, reading a WAL-mode database required write access (`clm_05cae033cedc_ollama_intern_25`). As of 3.22.0, reading on read-only media requires -shm and -wal files to be present and readable (`clm_05cae033cedc_ollama_intern_27`). As of 3.11.0, WAL file size is proportional to the transaction (`clm_05cae033cedc_ollama_intern_32`). Early WAL mode implementations stored the wal-index in volatile shared-memory (`clm_05cae033cedc_ollama_intern_33`). WAL databases can be created, read, and written without shared memory if the locking mode is set to EXCLUSIVE (`clm_05cae033cedc_ollama_intern_35`). A query against a WAL-mode database can return `SQLITE_BUSY` in some obscure cases (`clm_05cae033cedc_ollama_intern_36`).

**Thread 3: Search alternatives — Elasticsearch and Faiss.** Elasticsearch provides full-text search capabilities (`clm_91705d06abdf_ollama_intern_9`). Full-text search in Elasticsearch runs efficiently on CPUs (`clm_91705d06abdf_ollama_intern_10`). Elasticsearch supports Query DSL (`clm_91705d06abdf_ollama_intern_11`) and ES|QL (`clm_91705d06abdf_ollama_intern_12`). Elasticsearch offers search relevance optimization guidance (`clm_91705d06abdf_ollama_intern_14`). Elasticsearch can monitor AWS via Data Firehose (`clm_91705d06abdf_ollama_intern_4`) and Elastic Serverless Forwarder (`clm_91705d06abdf_ollama_intern_5`), and Azure via Elastic Agent (`clm_91705d06abdf_ollama_intern_6`) and Beats (`clm_91705d06abdf_ollama_intern_7`). Faiss supports GPU implementation for faster searching (`clm_ac6052de3047_ollama_intern_3`, scope: "The library's functionality when used on a server with GPUs"). Faiss ships with precompiled Anaconda Python libraries (`clm_ac6052de3047_ollama_intern_4`). Faiss is built around an index type that stores a set of vectors (`clm_ac6052de3047_ollama_intern_5`, scope: "The library's architecture"). PostgreSQL version 18 documentation is available (`clm_f110ffbdbe7c_ollama_intern_2`); full-text search is a chapter in that documentation (`clm_f110ffbdbe7c_ollama_intern_3`).

**Thread 4: Knowledge graphs — cross-section weave with Section 03.** Neo4j is a graph database management system (`clm_676ddfa834cc_ollama_intern_26`, scope: "As stated on the Neo4j website, retrieved in November 2023"). Ontotext's GraphDB is a graph database management system (`clm_676ddfa834cc_ollama_intern_27`, scope: "According to the Ontotext website, retrieved in November 2023"). Scholia has a topic profile for knowledge graph (`clm_676ddfa834cc_ollama_intern_29`, scope: "Knowledge graph domain"). These claims share source `src_676ddfa834cc` with Section 03's knowledge-graph claims. `clm_676ddfa834cc_ollama_intern_26` appears in both sections' accepted lists, confirming the cross-section weave is grounded.

**Out-of-domain claims in Section 06:** Signal channel capacity theory (`clm_5d98fdba0757_ollama_intern_4`, `clm_5d98fdba0757_ollama_intern_5`, `clm_5d98fdba0757_ollama_intern_6`) and arXiv community values (`clm_5d98fdba0757_ollama_intern_7`, `clm_5d98fdba0757_ollama_intern_9`). Disclosed; not synthesized into material statements.

**Waivers active:** None section-specific. Pack-level waiver applies.

**Source diversity:** 7 distinct sources (SQLite FTS5 docs, SQLite WAL docs, information-theory arXiv paper, Elasticsearch docs, Wikipedia knowledge graphs, PostgreSQL docs, Faiss docs).

---

### Section 07 — `07-cli-and-runtime-flow`

**Purpose:** Commands, state transitions, status output, failure recovery, and section time budgeting.

**Accepted claims:** 29 | **Accepted sources:** 6 | **Candidates:** 175

**Triage abundance:** 175 candidate claims were triaged from 6 sources. The review accepted 29. The active gate-level `source_floor.primary_sources_required` waiver applies.

**Evidence threads:**

**Thread 1: CLI design principles.** Too much information can confuse users when commands dump pages of debugging output (`clm_458d9788c68d_ollama_intern_12`, scope: "When commands dump pages of debugging output"). Too little information can also confuse users when commands hang without output (`clm_458d9788c68d_ollama_intern_13`, scope: "When commands hang for several minutes without output"). Keeping a command-line program simple enhances robustness (`clm_458d9788c68d_ollama_intern_19`, scope: "Command-line programs"). Heroku's `apps` command lists user apps by default (`clm_458d9788c68d_ollama_intern_29`) and supports filtering with optional flags (`clm_458d9788c68d_ollama_intern_30`). `npm ls` output is human-readable by default in an interactive session (`clm_458d9788c68d_ollama_intern_32`, scope: "When run in an interactive session (TTY)") and displays output on success but keeps it brief (`clm_458d9788c68d_ollama_intern_35`). Using progress bars can make a CLI program appear faster (`clm_458d9788c68d_ollama_intern_62`, scope: "When using progress indicators in a command-line program").

**Thread 2: Configuration management.** `.env` files are not suitable substitutes for proper configuration files due to lack of history, poor organization, and security concerns (`clm_458d9788c68d_ollama_intern_75`, scope: "When considering using .env files for command configuration"). Secrets should not be stored in environment variables due to leakage risks (`clm_458d9788c68d_ollama_intern_76`). The 12-factor methodology advocates storing configuration in the environment (`clm_de50fc93ad72_ollama_intern_1`, scope: "For software-as-a-service apps"). Configuration is everything that varies between deploys (`clm_de50fc93ad72_ollama_intern_2`). App configuration includes resource handles to backing services (`clm_de50fc93ad72_ollama_intern_3`). Apps should store config in environment variables (`clm_de50fc93ad72_ollama_intern_4`).

**Thread 3: Commander.js.** The special argument `--` stops option processing entirely (`clm_0b75376a48e4_ollama_intern_16`). A variadic argument is passed to the action handler as an array (`clm_0b75376a48e4_ollama_intern_26`, scope: "commander.js library, when handling commands with variadic arguments"). Custom processing of command-arguments is supported via a specified function (`clm_0b75376a48e4_ollama_intern_27`). Callback hooks can be added to a command for life cycle events (`clm_0b75376a48e4_ollama_intern_34`). Commander.js allows pass-through options via `passThroughOptions()` (`clm_0b75376a48e4_ollama_intern_46`). The primary support channel for Commander.js is its GitHub Issues (`clm_0b75376a48e4_ollama_intern_52`). Combining multiple boolean short options is valid syntax (`clm_0b75376a48e4_ollama_intern_10`).

**Out-of-domain claims:** glibc manual format claims (`clm_27eaf34f91a3_ollama_intern_1`, `clm_27eaf34f91a3_ollama_intern_4`, `clm_27eaf34f91a3_ollama_intern_6`), a general Node.js description (`clm_96d4bf47e20b_ollama_intern_1`), and a CLI docs auto-redirect note (`clm_65308ebae4e9_ollama_intern_1`). These are disclosed but not synthesized into CLI-design statements.

**Waivers active:** Gate-level `source_floor.primary_sources_required` waiver.

**Source diversity:** 6 distinct sources (glibc manual, CLI design guidelines, 12-factor app, commander.js docs, CLI docs, Node.js description).

---

### Section 08 — `08-acceptance-suite`

**Purpose:** Tests that prove the whole workflow exists and cannot regress into a partial report generator.

**Accepted claims:** 15 | **Accepted sources:** 5 | **Candidates:** 201

**Triage abundance:** 201 candidate claims were triaged from 5 sources. The review accepted 15. An additional 10 claims carry dispositions: 6 `parked_not_for_synthesis`, 2 `preserved_for_human_note`, 2 `needs_human_review_excluded`. This is the section with the fewest accepted claims — synthesis prose is constrained accordingly.

**Evidence threads:**

**Thread 1: End-to-end testing.** End-to-end testing is usually executed after functional and system testing (`clm_53ee6a9ec24b_ollama_intern_5`, scope: "The sequence of software testing phases"). It is also called chain testing (`clm_53ee6a9ec24b_ollama_intern_6`, scope: "Alternative names for end-to-end testing"). End-to-end testing checks the complete end-to-end process flow (`clm_53ee6a9ec24b_ollama_intern_8`, scope: "The process of verifying a software system along with its subsystems"). It is executed once system testing is completed (`clm_53ee6a9ec24b_ollama_intern_10`). End-to-end testing includes tracking defects by week, severity, and priority (`clm_53ee6a9ec24b_ollama_intern_12`).

**Thread 2: BDD and acceptance testing.** BDD can reveal gaps in understanding where more information is needed (`clm_642e49ac2548_ollama_intern_7`, scope: "When used for software development"). Discovery is the starting point for new BDD practitioners (`clm_642e49ac2548_ollama_intern_9`). Automated examples in BDD act as guide-rails for development work (`clm_642e49ac2548_ollama_intern_11`, scope: "During system implementation and maintenance"). Acceptance tests describe the behavior of software products (`clm_eefec92990cb_ollama_intern_19`, scope: "Software products and their acceptance testing"). They are typically expressed as examples or usage scenarios (`clm_eefec92990cb_ollama_intern_20`). Acceptance tests are formal descriptions of software behavior (`clm_eefec92990cb_ollama_intern_24`, scope: "Software products"). ISTQB offers sample exams for CTFL certification (`clm_ae13d4956c22_ollama_intern_9`, scope: "Certified Tester Foundation Level (CTFL) v4.0"). GitHub Actions enables automatic building and testing of projects (`clm_4b7a4ad94a3b_ollama_intern_1`, scope: "Projects on GitHub").

**Out-of-domain claims:** Analytics cookies (`clm_eefec92990cb_ollama_intern_21`) and advertisement cookies (`clm_eefec92990cb_ollama_intern_22`). These passed the reviewer but are not connected to acceptance-suite design. Disclosed; not cited as evidence for any material statement.

**Waivers active:** None section-specific. Pack-level waiver applies.

**Source diversity:** 5 distinct sources (ISTQB syllabus/glossary, BDD reference, Agile Alliance acceptance testing page, GitHub Actions documentation, a source that included out-of-domain cookie claims).

---

## Cross-section weave

The only mechanically confirmed cross-section cluster is `cls_d7170c650869`, spanning Sections 03 and 06 via shared source `src_676ddfa834cc`.

**Section 03 side:** Knowledge graphs as an abstract model for entity-relationship representation (`clm_676ddfa834cc_ollama_intern_1`, `clm_676ddfa834cc_ollama_intern_21`, `clm_676ddfa834cc_ollama_intern_22`, `clm_676ddfa834cc_ollama_intern_23`, `clm_676ddfa834cc_ollama_intern_24`, `clm_676ddfa834cc_ollama_intern_26`).

**Section 06 side:** Concrete knowledge graph database implementations — Neo4j (`clm_676ddfa834cc_ollama_intern_26`), GraphDB (`clm_676ddfa834cc_ollama_intern_27`), and Scholia (`clm_676ddfa834cc_ollama_intern_29`).

**Honest weave statement:** The cross-section weave holds. Claim `clm_676ddfa834cc_ollama_intern_26` ("Knowledge graphs encode the underlying relationships between entities," scope: "A key feature of knowledge graphs related to capturing relationships between entities") appears in the accepted set for both Section 03 and Section 06. These are consistent (`clm_676ddfa834cc_ollama_intern_26`, `clm_676ddfa834cc_ollama_intern_27`, `clm_676ddfa834cc_ollama_intern_29`).

**No other cross-section weaves are supported.** The `cross-section-map.json` records 375 scope overlaps and 0 cross-section contradictions. Only 1 multi-section cluster exists. The pack's sections are evidentially self-contained.

---

*End of working synthesis.*
