---
title: Architecture
description: The three-lane design and the research-os relationship.
sidebar:
  order: 4
---

## Three-lane architecture

Every pack in this monorepo exposes the same evidence at three depths, for three different readers:

```
packages/<pack-name>/
  README.md                         ← Lane 1: human synthesis
  synthesis/
    final-report.md                 ← Lane 1: full synthesis with claim IDs
    decision-brief.md               ← Lane 1: compact decision summary
  pack/
    sections/<id>/
      sources.jsonl                 ← Lane 2: source cards
      claims.jsonl                  ← Lane 2: accepted/rejected claims
      claim-reviews.jsonl           ← Lane 2: adversarial reviewer verdicts
    audits/
      freeze-receipt.json           ← Lane 2: sha256 fingerprints
    gates.yaml                      ← Lane 2: gate results
  pack.manifest.json                ← Lane 2 + 3: canonical metadata
```

```
catalog.json                        ← Lane 3: machine-readable pack index
docs/
  artifact-contract.md              ← Lane 3: admission contract spec
  operator-playbook.md              ← Lane 3: operating doctrine
  source-quality-notes.md           ← Lane 3: cross-pack source findings
```

The monorepo itself is the Lane 3 surface. Individual packs host Lanes 1 and 2.

## Verification model

`verify-pack.mjs` enforces integrity at rest:

```
pack.manifest.json
  └─ freeze_receipt_sha256  ──→  freeze-receipt.json
                                   └─ canonical_artifact_hashes[]  ──→  every artifact file
                                   └─ synthesis_hashes[]           ──→  synthesis files
```

Any modification to any fingerprinted artifact — claims, sources, reviews, synthesis — breaks the chain. The only soft-warn is `research.yaml` (a known freeze-implementation property: the file is written after fingerprinting, so its receipt hash reflects the pre-freeze state).

## research-os relationship

[research-os](https://github.com/mcp-tool-shop-org/research-os) is the control plane that produces every pack in this archive. The pipeline:

```
research-os
  discovery    → source cards
  extraction   → excerpt ledger
  triage       → candidate claims
  review       → accepted/rejected claims + adversarial verdicts
  gating       → gate results per section
  synthesis    → final-report.md + decision-brief.md
  freeze       → sha256 fingerprints + freeze receipt
       ↓
research-packs
  backfill     → packages/<name>/
  catalog      → catalog.json updated
  verify       → node scripts/verify-pack.mjs packages/*
```

research-packs is read-only relative to research-os. It archives frozen outputs; it does not modify them.

## Monorepo layout

```
research-packs/
  packages/                   # one directory per frozen pack
  scripts/
    verify-pack.mjs           # sha256 re-verification
    summarize-pack.mjs        # deterministic README deriver
    manifest-schema.mjs       # Zod schema for pack.manifest.json
  tests/                      # vitest suite (38 tests)
  docs/                       # Lane 3 surface
  catalog.json                # machine-readable pack index
  site/                       # this landing page + handbook
  .github/workflows/
    verify.yml                # CI: test + verify + audit
    pages.yml                 # CI: build + deploy Astro site
```

## Adding a new pack

1. Run the research-os pipeline to freeze the pack
2. Copy the frozen pack directory into `packages/<name>/`
3. Verify: `node scripts/verify-pack.mjs packages/<name>` — must PASS
4. Update `catalog.json` with the new entry
5. Write `packages/<name>/README.md` via `node scripts/summarize-pack.mjs packages/<name>`
6. Commit and push — CI verifies all packs on every push
