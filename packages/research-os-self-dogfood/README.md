# research-os-self-dogfood

**Topic:** How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?

**Frozen:** 2026-05-08 | **research-os version:** 0.1.0 | **Accepted claims:** 296 across 8 sections

---

## Executive summary

This pack researched how research-os should structure a research-pack so that every research artifact becomes actionable implementation material for the repo. The evidence base comprises 296 accepted claims drawn from 8 sections, triaged from 2,647 candidate claims — an overproduction-then-curate design by intent. The research drew on external literature in serialization standards, provenance theory, citation practice, full-text search, AI-agent architecture, CLI design, and software testing methodology.

Key design choices are each grounded in evidence: JSONL ledgers are established serialization practice [claim:clm_c1e29cfcaa1e_ollama_intern_2], [claim:clm_c1e29cfcaa1e_ollama_intern_3]; the provenance model parallels concepts from PROV-DM [claim:clm_0801e1ee8a70_ollama_intern_13]; SQLite FTS5 is a viable local-first search substrate [claim:clm_e15c2248a5d8_ollama_intern_10]; the Cowork handoff leverages documented Claude Code capabilities [claim:clm_9a532b2b74e5_ollama_intern_3]; and the acceptance suite maps to established end-to-end and BDD testing practice [claim:clm_53ee6a9ec24b_ollama_intern_8], [claim:clm_642e49ac2548_ollama_intern_11].

Three active waivers acknowledge that research-os's primary design decisions are operator inputs, not publicly published primary sources. These waivers do not manufacture evidence; they establish the epistemic context for what the external literature can and cannot corroborate.

---

## Sections

| Section | Accepted claims | Gate | Synthesis eligible |
|---------|-----------------|------|-------------------|
| 01-product-thesis | 19 | warn | yes |
| 02-pack-artifact-contract | 50 | warn | yes |
| 03-source-and-claim-truth | 42 | warn | yes |
| 04-gates-and-waivers | 30 | warn | yes |
| 05-cowork-handoff | 68 | warn | yes |
| 06-repo-knowledge-integration | 43 | warn | yes |
| 07-cli-and-runtime-flow | 29 | warn | yes |
| 08-acceptance-suite | 15 | warn | yes |

**Totals:** 296 accepted, 17 dispositioned, 0 unresolved contradictions

---

## How to read this pack

This package is part of the [`research-packs`](../../README.md) archive.

- **Lane 1 (synthesis):** You are here. See [`synthesis/final-report.md`](synthesis/final-report.md) for the full citation-clean prose.
- **Lane 2 (evidence):** [`pack/`](pack/) — full frozen ledgers, source cards, excerpts, claim reviews, gate results, and `audits/freeze-receipt.json`.
- **Lane 3 (method):** [`../../docs/`](../../docs/) — artifact contract, how-to-read, source quality notes.

To verify this pack's integrity: `node ../../scripts/verify-pack.mjs .` from this directory.

See [`docs/how-to-read-this.md`](docs/how-to-read-this.md) for pack-specific reading notes.

---

## Operator notes

Recursive proof: this pack researches research-os's own spec using research-os itself. Frozen 2026-05-08 using mistral-nemo:12b (hermes3:8b not pulled at the time; documented substitution). Section 03 is the primary regression fixture; its 7 dispositioned claims (out_of_bounds_regression_fixture) must not be cited. Primary-source waiver active for all 8 sections — design intent is operator input, not public publications.
