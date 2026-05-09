---
title: research-packs Handbook
description: How to read, verify, and work with frozen research packs.
sidebar:
  order: 0
---

**research-packs** is a public archive monorepo where every frozen [`research-os`](https://github.com/mcp-tool-shop-org/research-os) pack lives as a versioned package. Every pack carries its full evidence base — source cards, claim ledgers, adversarial review history, contradiction resolutions, gate results, and a sha256 freeze receipt that fingerprints every canonical artifact.

This handbook covers three things:

1. **[Getting Started](./getting-started/)** — clone, install, verify your first pack
2. **[Reading Packs](./reading-packs/)** — how to navigate the three lanes of a pack
3. **[Reference](./reference/)** — pack manifest schema, admission contract, verify-pack usage
4. **[Architecture](./architecture/)** — three-lane design and the research-os relationship

## What is a frozen pack?

A frozen pack is a research artifact that has passed all gates and received a cryptographic freeze receipt. The receipt contains sha256 fingerprints of every canonical artifact — source cards, claim ledgers, review records, gate outputs, and synthesis files. Running `verify-pack.mjs` recomputes every fingerprint and confirms byte-for-byte integrity.

Frozen means the evidence base cannot change. If a claim is wrong, the pack must be superseded by a new pack, not silently amended.

## What is research-os?

[research-os](https://github.com/mcp-tool-shop-org/research-os) is a gated research control plane that enforces: *no synthesis before source truth.* It manages the full pipeline — source discovery, excerpt extraction, claim triage, adversarial review, contradiction detection, gate evaluation, and freeze. Every pack in this archive was produced by research-os.
