# How to Read a Pack

A research pack produced by [`research-os`](https://github.com/mcp-tool-shop-org/research-os) is not a blog post or a white paper. It is a gated evidence base. This document explains what you are looking at.

---

## The law: no synthesis before source truth

Every statement in a pack's synthesis is traceable to a claim, and every claim is traceable to a source excerpt. The control plane enforces this structurally — synthesis cannot be written until sources are fetched, claims are extracted, reviewed, gated, and the pack passes audit. The freeze receipt cryptographically locks the state at the moment of freeze.

---

## Pack directory layout

```
packages/<name>/
  README.md                 ← Lane 1: human-readable synthesis (this is the entry point)
  synthesis/
    final-report.md         ← Full synthesis prose, citation-clean
    decision-brief.md       ← Decision summary and waiver disclosures
    working-report.md       ← Draft workspace used during synthesis
    cross-section-map.json  ← Machine-readable map of accepted claims
    cross-section-map.md    ← Human-readable version of the map
  pack/                     ← Lane 2: full frozen evidence base
    research.yaml           ← Pack config: topic, decision, gates, waivers, sections
    sections/
      <section-id>/
        claims.jsonl        ← Every extracted claim (candidate + accepted + rejected)
        claim-reviews.jsonl ← Adversarial review decisions, append-only
        claim-triage.jsonl  ← Triage dispositions, append-only
        sources.jsonl       ← Source URLs for this section
        gates.yaml          ← Section-level gate overrides
    evidence/
      source-cards/         ← One JSON per source: metadata, key_points, publisher
      excerpts/             ← Deterministic excerpt ledgers (ex_<hash>_NNN)
      fetch-log.jsonl       ← Every fetch attempt with HTTP status
    audits/
      freeze-receipt.json   ← THE FREEZE RECEIPT (sha256 fingerprints of everything)
      pack-audit.json       ← Pack-level readiness rollup
      <section-id>-gate.json  ← Per-section gate result
      <section-id>-review.json ← Per-section review summary
    handoffs/
      cowork-handoff.json   ← Cowork mode decision + forbidden actions
      cowork-master.md      ← Operational instructions rendered from research truth
    synthesis/              ← Same files as package-root synthesis/ (canonical location)
  docs/
    how-to-read-this.md     ← Pack-specific reading notes
  pack.manifest.json        ← Canonical per-package metadata (topic, totals, receipt hash)
```

---

## Claim IDs

Claims are identified by stable IDs in the format:

```
clm_<source_id_hex>_<extractor>_<NNN>
```

For example: `clm_c1e29cfcaa1e_ollama_intern_2`

- `c1e29cfcaa1e` — first 12 hex chars of the sha256 of the source URL
- `ollama_intern` — the extractor that produced the claim
- `2` — sequence number within the section

When you see `[claim:clm_...]` in `final-report.md`, that is a verifiable citation. You can look up the claim in the section's `claims.jsonl` and trace it back to the source excerpt.

---

## Accepted vs. rejected

Not all extracted claims make it to synthesis. The control plane runs multiple filtering stages:

| State | Meaning |
|-------|---------|
| `candidate` | Extracted, awaiting review |
| `accepted_for_synthesis` | Accepted by adversarial reviewer, eligible for synthesis |
| `rejected` | Rejected by reviewer (unsupported, scope-widening, etc.) |
| `needs_scope_repair` | Repairable, but repair is pending |
| `dispositioned` | Excluded via `claim-synthesis-dispositions.jsonl` |

Only `accepted_for_synthesis` claims appear in `final-report.md` citations. The rejected and dispositioned claims remain in `claims.jsonl` as permanent research truth — they are not deleted.

---

## Dispositions

A disposition is an operator decision to exclude a specific claim from the synthesis surface without rejecting it outright. Dispositions are recorded in `sections/<id>/claim-synthesis-dispositions.jsonl` with a `reason` field. Common reasons:

- `out_of_bounds_regression_fixture` — claim is a regression anchor, intentionally excluded from synthesis
- `low_synthesis_value` — claim is factually correct but adds no signal beyond accepted peers

---

## Waivers

A waiver relaxes a gate constraint with documented justification. Waivers are recorded in `research.yaml` under `primary_source_waiver`. When a waiver is active:

- The gate result records it (`pass_with_waiver`)
- The synthesis `decision-brief.md` discloses every active waiver explicitly
- The `final-report.md` also discloses them

Waivers do not manufacture evidence. They establish the epistemic context — what the external literature can and cannot corroborate for a given topic.

---

## The freeze receipt

`pack/audits/freeze-receipt.json` is the authoritative artifact. It contains:

- `frozen_at` — the ISO-8601 timestamp of freeze
- `verdict: "frozen"` — confirming freeze passed
- `canonical_artifact_hashes` — sha256 + byte count for every claims.jsonl, sources.jsonl, claim-reviews.jsonl, gates.yaml, and audit file
- `synthesis_hashes` — sha256 + byte count for every synthesis file

To verify independently:

```bash
node scripts/verify-pack.mjs packages/<name>
```

This script re-computes sha256 for every fingerprinted artifact and compares against the receipt. A PASS means the pack is byte-identical to its frozen state.

---

## What "frozen" means

A frozen pack:

- Has a `freeze-receipt.json` (presence = frozen)
- Does NOT have a `freeze-refusal.json` (absence = no failed freeze attempt)
- Has `research.yaml.frozen_at` set
- Has all sections at `frozen` status in `research.yaml`

A pack that failed to freeze has a `freeze-refusal.json` with concrete next_actions. Half-frozen packs are never admitted to `packages/` in this monorepo.

---

## Further reading

- [`docs/artifact-contract.md`](artifact-contract.md) — full admission contract and `pack.manifest.json` schema
- [`docs/operator-playbook.md`](operator-playbook.md) — operating doctrine for running packs
- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — the control plane
