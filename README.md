<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Landing Page](https://img.shields.io/badge/landing-page-cyan)](https://mcp-tool-shop-org.github.io/research-packs/)

</div>

**Frozen research packs with source truth, claim traceability, and audit receipts.**

Every pack in this monorepo reached freeze through [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — a gated research control plane that enforces the law: *no synthesis before source truth.* Each pack carries its full evidence base, adversarial review history, gate results, contradiction resolutions, and a cryptographic freeze receipt that fingerprints every canonical artifact.

---

## Three lanes

This monorepo is built for three different readers.

### Lane 1 — Public synthesis
*For humans who want the answer.*

Each package's `README.md` is a human-readable synthesis derived from the pack's `final-report.md`. It cites accepted claims by ID so every statement is traceable back to a source. If you want to understand the research conclusions without touching a ledger, start here.

→ Browse [`packages/`](packages/)

### Lane 2 — Frozen evidence pack
*For people who want to audit the claims.*

Each package's `pack/` directory contains the full frozen pack: source cards, excerpt ledgers, `claims.jsonl`, `claim-reviews.jsonl`, contradiction resolutions, dispositions, gate results, and `audits/freeze-receipt.json`. The freeze receipt carries sha256 fingerprints of every canonical artifact — independently verifiable with `scripts/verify-pack.mjs`.

→ See [`docs/artifact-contract.md`](docs/artifact-contract.md) for the full admission contract.

### Lane 3 — Method proof
*For people evaluating `research-os` itself.*

`docs/` and `catalog.json` are the method-evaluation surface. `catalog.json` is a machine-readable index of every admitted pack with topic, freeze date, and claim totals. `docs/source-quality-notes.md` accumulates findings from each arc. `docs/operator-playbook.md` distills operating doctrine earned by running packs to freeze.

→ See [`docs/`](docs/) and [`catalog.json`](catalog.json)

---

## Catalog

| Package | Topic | Frozen | Accepted claims |
|---------|-------|--------|-----------------|
| [comfyui-workflow-durability](packages/comfyui-workflow-durability/) | ComfyUI workflow durability (Experiment 1) | 2026-05-09 | 302 |
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | research-os pack structure | 2026-05-08 | 296 |

---

## Admission contract

No pack is admitted to `packages/` without all of the following:

- `pack/audits/freeze-receipt.json` — sha256 fingerprints, externally verifiable
- `synthesis/final-report.md` — citation-clean, claim-traceable
- `synthesis/decision-brief.md` — handoff-mode decision summary
- `pack.manifest.json` — canonical per-package metadata
- `README.md` — human-readable synthesis derived from final-report

Half-frozen packs do not get a directory.

---

## Verify a pack

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` re-reads the freeze receipt and recomputes sha256 fingerprints for every canonical artifact. A PASS means the pack's contents are byte-identical to what was frozen.

---

## Security

This repository contains no credentials, no secrets, and no telemetry. It is a static archive. See [SECURITY.md](SECURITY.md) for the full threat model and disclosure process.

---

## Related

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — the control plane that produces these packs
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — the broader org

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
