# Adversarial Review: 03-source-and-claim-truth

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-07T05:48:14.006Z
**Candidate claims:** 50
**Findings:** 20 (block: 4, warn: 3, info: 13)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SCOPE-REPAIR]: 1
- [NEEDS-HUMAN-REVIEW]: 10
- [ACCEPTED]: 39

## Findings

### [WARN] overgeneralized_claim (fnd_799b69e843c8)

Claim generalizes the structure of knowledge graphs beyond the source's mention of the term's origin.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_1`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Re-evaluate the source's support for the structural claim about knowledge graphs.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_676ddfa834cc_ollama_intern_1 asserts a graph-structured model for knowledge graphs, but the source only discusses the term's origin in 1972, not its structural definition.

### [WARN] claim_overproduction (fnd_73b22c8bd061)

Redundant claims from the same source describe knowledge graphs in overlapping ways, creating synthesis noise.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_1`, `clm_676ddfa834cc_ollama_intern_21`, `clm_676ddfa834cc_ollama_intern_22`, `clm_676ddfa834cc_ollama_intern_23`, `clm_676ddfa834cc_ollama_intern_24`, `clm_676ddfa834cc_ollama_intern_26`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Merge or discard redundant claims about knowledge graph structure.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Multiple claims (clm_676ddfa834cc_ollama_intern_1, 21, 22, 23, 24, 26) from src_676ddfa834cc describe knowledge graphs using similar graph-structured models without distinct synthesis value.

### [WARN] hidden_synthesis (fnd_170e402ef86b)

Claim conflates the origin of the term 'knowledge graph' with a specific project's name, not explicitly stated in the source.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_5`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Clarify that the source does not equate the term's origin with the project's name.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_676ddfa834cc_ollama_intern_5 attributes the term's origin to Schneider's 1972 discussion of instructional systems, but the source mentions a 1980s project named 'Knowledge Graphs' separately.

### [INFO] scope_widening (fnd_82dabab32e8f)

Claim about knowledge graphs' structure extends beyond the source's focus on terminology.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_1`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Limit the claim to the source's explicit mention of the term's origin.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Claim clm_676ddfa834cc_ollama_intern_1 discusses structural definitions, while the source only mentions the term's origin in 1972.

### [BLOCK] hidden_synthesis (fnd_fa6189ca004d)

Claim about provenance definition is not supported by the cited source.

- **Claim IDs:** `clm_bc94816a3373_ollama_intern_56`
- **Source IDs:** `src_bc94816a3373`
- **Required action:** Re-evaluate source credibility and ensure claims are directly supported by the cited evidence.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claim clm_bc94816a3373_ollama_intern_56 asserts a definition of provenance, but its evidence_excerpt references a piano auction article (2023) rather than a definition of the term.

### [BLOCK] hidden_synthesis (fnd_2f54a12a18d7)

Claim about JSON-LD is unsupported by the cited source.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_18`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Verify that the source explicitly supports the claim's assertion.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claim clm_155c4be7850d_ollama_intern_18 asserts JSON-LD is a JSON-based RDF format, but its evidence_excerpt references N3 (Notation3), not JSON-LD.

### [BLOCK] hidden_synthesis (fnd_d0cad0e54bef)

Claim about JSON-LD term protection is not supported by the cited source.

- **Claim IDs:** `clm_caedf4b2d8e0_ollama_intern_101`
- **Source IDs:** `src_caedf4b2d8e0`
- **Required action:** Ensure the source explicitly describes the claimed functionality.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claim clm_caedf4b2d8e0_ollama_intern_101 asserts JSON-LD protects term definitions, but its evidence_excerpt references combining contexts, not term protection mechanisms.

### [BLOCK] hidden_synthesis (fnd_c398cb991259)

Claim about spandrels in provenance is unsupported by the cited source.

- **Claim IDs:** `clm_bc94816a3373_ollama_intern_72`
- **Source IDs:** `src_bc94816a3373`
- **Required action:** Confirm the source explicitly connects the concept to provenance.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Claim clm_bc94816a3373_ollama_intern_72 links spandrels to provenance, but its evidence_excerpt references a 1979 evolutionary biology paper unrelated to provenance.

### [INFO] missing_not_constraint (fnd_5ab02ed2a61b)

Claim clm_676ddfa834cc_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_1`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: A knowledge graph uses a graph-structured data model to represent knowledge.

### [INFO] missing_not_constraint (fnd_b7317046e1a8)

Claim clm_d39cd3ba0ef2_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d39cd3ba0ef2_ollama_intern_5`
- **Source IDs:** `src_d39cd3ba0ef2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PROV consists of 12 documents including this one.

### [INFO] missing_not_constraint (fnd_b181768f72ea)

Claim clm_d39cd3ba0ef2_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d39cd3ba0ef2_ollama_intern_6`
- **Source IDs:** `src_d39cd3ba0ef2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PROV-O defines a light-weight OWL2 ontology for the provenance data model.

### [INFO] missing_not_constraint (fnd_b251eca5adac)

Claim clm_d39cd3ba0ef2_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d39cd3ba0ef2_ollama_intern_7`
- **Source IDs:** `src_d39cd3ba0ef2`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PROV-XML defines an XML schema for the provenance data model.

### [INFO] missing_not_constraint (fnd_5d9397f29016)

Claim clm_676ddfa834cc_ollama_intern_26 has no 'not' constraint recorded.

- **Claim IDs:** `clm_676ddfa834cc_ollama_intern_26`
- **Source IDs:** `src_676ddfa834cc`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Knowledge graphs encode the underlying relationships between entities.

### [INFO] missing_not_constraint (fnd_15fd06ba4298)

Claim clm_155c4be7850d_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_14`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Turtle is a compact, human-friendly format for serializing RDF data.

### [INFO] missing_not_constraint (fnd_b80fdfa52d80)

Claim clm_155c4be7850d_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_15`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: TriG is an extension of Turtle format for serializing RDF datasets.

### [INFO] missing_not_constraint (fnd_594b87ba493b)

Claim clm_155c4be7850d_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_17`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: N-Quads is a superset of N-Triples that can serialize multiple RDF graphs.

### [INFO] missing_not_constraint (fnd_f4ea5e8ef13f)

Claim clm_155c4be7850d_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_18`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: JSON-LD is a JSON-based serialization format for RDF.

### [INFO] missing_not_constraint (fnd_a6bdb01129a2)

Claim clm_155c4be7850d_ollama_intern_42 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_42`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: LV2 uses Turtle to describe API/ABI capabilities and properties.

### [INFO] missing_not_constraint (fnd_aff4661bd299)

Claim clm_155c4be7850d_ollama_intern_43 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_43`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: SPDX uses RDF to specify bills of material.

### [INFO] missing_not_constraint (fnd_a0eed2477d69)

Claim clm_155c4be7850d_ollama_intern_46 has no 'not' constraint recorded.

- **Claim IDs:** `clm_155c4be7850d_ollama_intern_46`
- **Source IDs:** `src_155c4be7850d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: RDF models are labeled, directed multi-graphs.

## Claim review decisions

### [NEEDS-SCOPE-REPAIR] `clm_676ddfa834cc_ollama_intern_1`

Findings: overgeneralized_claim (warn); claim_overproduction (warn).

Cites findings: `fnd_799b69e843c8`, `fnd_73b22c8bd061`, `fnd_82dabab32e8f`, `fnd_5ab02ed2a61b`.

### [ACCEPTED] `clm_d39cd3ba0ef2_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_b7317046e1a8`.

### [ACCEPTED] `clm_d39cd3ba0ef2_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_b181768f72ea`.

### [ACCEPTED] `clm_d39cd3ba0ef2_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_b251eca5adac`.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_1`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_2`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_3`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_5`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_30`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_31`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_32`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_35`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_39`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_d81a8a3d6bba_ollama_intern_55`

No findings recorded for this claim by the current reviewer.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_5`

Findings: hidden_synthesis (warn).

Cites findings: `fnd_170e402ef86b`.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_21`

Findings: claim_overproduction (warn).

Cites findings: `fnd_73b22c8bd061`.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_22`

Findings: claim_overproduction (warn).

Cites findings: `fnd_73b22c8bd061`.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_23`

Findings: claim_overproduction (warn).

Cites findings: `fnd_73b22c8bd061`.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_24`

Findings: claim_overproduction (warn).

Cites findings: `fnd_73b22c8bd061`.

### [NEEDS-HUMAN-REVIEW] `clm_676ddfa834cc_ollama_intern_26`

Findings: claim_overproduction (warn).

Cites findings: `fnd_73b22c8bd061`, `fnd_5d9397f29016`.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_1`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_2`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_3`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_7`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_19`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_22`

No findings recorded for this claim by the current reviewer.

### [NEEDS-HUMAN-REVIEW] `clm_bc94816a3373_ollama_intern_56`

Findings: hidden_synthesis (block).

Cites findings: `fnd_fa6189ca004d`.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_69`

No findings recorded for this claim by the current reviewer.

### [NEEDS-HUMAN-REVIEW] `clm_bc94816a3373_ollama_intern_72`

Findings: hidden_synthesis (block).

Cites findings: `fnd_c398cb991259`.

### [ACCEPTED] `clm_bc94816a3373_ollama_intern_73`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_15fd06ba4298`.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_b80fdfa52d80`.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_594b87ba493b`.

### [NEEDS-HUMAN-REVIEW] `clm_155c4be7850d_ollama_intern_18`

Findings: hidden_synthesis (block).

Cites findings: `fnd_2f54a12a18d7`, `fnd_f4ea5e8ef13f`.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_42`

Only info-level findings; accepted.

Cites findings: `fnd_a6bdb01129a2`.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_43`

Only info-level findings; accepted.

Cites findings: `fnd_aff4661bd299`.

### [ACCEPTED] `clm_155c4be7850d_ollama_intern_46`

Only info-level findings; accepted.

Cites findings: `fnd_a0eed2477d69`.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_8`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_10`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_100`

No findings recorded for this claim by the current reviewer.

### [NEEDS-HUMAN-REVIEW] `clm_caedf4b2d8e0_ollama_intern_101`

Findings: hidden_synthesis (block).

Cites findings: `fnd_d0cad0e54bef`.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_103`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_104`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_105`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_127`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_128`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_caedf4b2d8e0_ollama_intern_374`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_a135974ea838_ollama_intern_7`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_a135974ea838_ollama_intern_8`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_a135974ea838_ollama_intern_9`

No findings recorded for this claim by the current reviewer.
