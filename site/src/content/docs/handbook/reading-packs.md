---
title: Reading Packs
description: How to navigate the three lanes of a frozen research pack.
sidebar:
  order: 2
---

Each pack is built for three different readers. The same evidence is accessible at different depths depending on what you need.

## Lane 1 — Public synthesis

*For humans who want the answer.*

Start here:

```
packages/<pack-name>/README.md
packages/<pack-name>/synthesis/final-report.md
packages/<pack-name>/synthesis/decision-brief.md
```

`README.md` is a human-readable synthesis derived from `final-report.md`. It cites accepted claims by ID (e.g. `[clm_3a7f…_001]`) so every statement is traceable. If you only want the conclusions without touching the evidence, read Lane 1.

`decision-brief.md` is the handoff-mode summary — a compact document for decision-makers that states the question, the decision, and the key supporting claims.

## Lane 2 — Frozen evidence pack

*For people who want to audit the claims.*

The full evidence is in `pack/`:

```
pack/
  sections/
    <section-id>/
      sources.jsonl       # source cards with URL, publisher, date
      excerpts.jsonl      # raw excerpts extracted from sources
      claims.jsonl        # accepted/rejected claims with IDs
      claim-reviews.jsonl # adversarial reviewer verdicts, reasons, overrides
  audits/
    contradiction-resolutions.jsonl  # how contradictions were resolved
    freeze-receipt.json              # sha256 fingerprints of all artifacts
  gates.yaml              # gate results for each section
  research.yaml           # full pack metadata and run configuration
  synthesis/
    final-report.md       # citation-clean synthesis (same as Lane 1)
    decision-brief.md     # decision summary
    cross-section-map.json
    working-report.md
```

### Claim IDs

Every accepted claim has an ID in the format `clm_<source_id_hex>_<extractor>_NNN`. The `source_id_hex` links the claim back to a specific source card in `sources.jsonl`. The `NNN` is a zero-padded counter per source.

To trace a claim cited in `final-report.md`:
1. Note the claim ID (e.g. `clm_3a7f2b_nemo_001`)
2. Search `claims.jsonl` for that ID to see the full claim text and verdict
3. Check `claim-reviews.jsonl` for the adversarial reviewer's verdict and reason
4. Find the `source_id` in `sources.jsonl` to reach the original source

### Dispositioned claims

Some claims are dispositioned rather than accepted or rejected — for example, `out_of_bounds_regression_fixture` marks claims that are intentionally excluded from synthesis but preserved as regression fixtures. These must not be cited. The disposition type and reason are in `claims.jsonl`.

## Lane 3 — Method proof

*For people evaluating research-os itself.*

The top-level `docs/` and `catalog.json` are the method-evaluation surface:

```
catalog.json                    # machine-readable pack index
docs/
  how-to-read-a-pack.md         # this pack's structure explained
  artifact-contract.md          # admission contract and manifest schema
  source-quality-notes.md       # findings on source quality across arcs
  operator-playbook.md          # operating doctrine from running packs to freeze
```

`source-quality-notes.md` accumulates findings from each research arc — patterns in source quality, discovery fallbacks, contradiction rates. `operator-playbook.md` distills the operating decisions that aren't obvious from the spec.

## Verifying integrity

Before trusting any claim, verify the pack:

```bash
node scripts/verify-pack.mjs packages/<pack-name>
```

A PASS means the pack's contents are byte-identical to what was frozen. A FAIL means an artifact was modified after freeze — treat the pack as untrusted.
