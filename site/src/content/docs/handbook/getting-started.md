---
title: Getting Started
description: Clone the repo, install dependencies, and verify your first pack.
sidebar:
  order: 1
---

## Clone and install

```bash
git clone https://github.com/mcp-tool-shop-org/research-packs
cd research-packs
npm install
```

## Verify a pack

Every pack in `packages/` can be independently verified against its freeze receipt:

```bash
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

A passing run looks like:

```
PASS  research-os-self-dogfood
      sections=8 accepted_claims=296 artifacts_verified=131
      receipt_sha256=368d23613783ef48b36cccd814463b3f413d514eb7a37792653142ef1fd5d466 (53796 bytes)
```

**PASS** means every canonical artifact is byte-identical to what was frozen. If any artifact has been modified since freeze, the run fails with the path and hash mismatch.

To verify all packs at once:

```bash
npm run verify
# equivalent to: node scripts/verify-pack.mjs packages/*
```

## Run tests

```bash
npm test
```

Tests cover the pack manifest Zod schema, verify-pack failure modes, and the summarize-pack README deriver.

## Read a pack

After verifying, open the pack's `README.md` for the human-readable synthesis:

```bash
# On Windows
start packages/research-os-self-dogfood/README.md

# Or open in your editor
code packages/research-os-self-dogfood
```

The `README.md` is derived from `synthesis/final-report.md` and cites every claim by ID so every statement is traceable back to a source.

## Browse the catalog

[`catalog.json`](https://github.com/mcp-tool-shop-org/research-packs/blob/main/catalog.json) is the machine-readable index of every admitted pack with topic, freeze date, and claim totals.
