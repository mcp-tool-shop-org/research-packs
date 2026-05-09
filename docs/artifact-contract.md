# Artifact Contract

This document defines:

1. The **per-package admission contract** — what every package in `packages/` MUST carry
2. The **`pack.manifest.json` schema** — canonical per-package metadata
3. The **three-lane structure** — how the monorepo serves different readers
4. The **monorepo philosophy** — why this shape, and what it prevents

---

## Per-package admission contract

No pack is admitted to `packages/` without all five of the following artifacts. **No frozen receipt = no package.** Half-frozen packs do not get a directory.

### Required artifacts

| Artifact | Path | Purpose |
|----------|------|---------|
| Freeze receipt | `pack/audits/freeze-receipt.json` | sha256 fingerprints of every canonical artifact, written by `research-os freeze` on pass |
| Final report | `synthesis/final-report.md` | Citation-clean synthesis prose. Every factual claim cites a `[claim:clm_...]` ID traceable to an accepted claim in `claims.jsonl` |
| Decision brief | `synthesis/decision-brief.md` | Decision summary including all active waivers and any unresolved cross-section contradictions disclosed by claim ID |
| Package manifest | `pack.manifest.json` | Canonical per-package metadata (see schema below) |
| README | `README.md` | Human-readable synthesis derived from `final-report.md` via `scripts/summarize-pack.mjs`. Must be deterministically regenerable — same inputs always produce the same output |

### Admission checklist

Before adding a package directory:

- [ ] `research-os freeze` succeeded (receipt present, refusal absent)
- [ ] `synthesis/final-report.md` exists and citation audit passed
- [ ] `synthesis/decision-brief.md` exists and discloses all waivers
- [ ] `pack.manifest.json` generated and schema-valid
- [ ] `README.md` derived via `summarize-pack.mjs`
- [ ] `node scripts/verify-pack.mjs packages/<name>` passes with receipt sha256 reproduction

---

## `pack.manifest.json` schema

```json
{
  "name": "research-os-self-dogfood",
  "topic": "How should research-os structure a research-pack...",
  "frozen_at": "2026-05-08T07:41:33.924Z",
  "research_os_version": "0.1.0",
  "sections": [
    {
      "id": "01-product-thesis",
      "accepted_claims": 19,
      "gate": "warn",
      "synthesis_eligible": true
    }
  ],
  "totals": {
    "sections": 8,
    "accepted_claims": 296,
    "dispositioned": 17,
    "unresolved_contradictions": 0
  },
  "freeze_receipt_sha256": "<sha256 of pack/audits/freeze-receipt.json>",
  "operator_notes": ""
}
```

### Field definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Package directory name (slug) |
| `topic` | string | yes | The research question — copied verbatim from `research.yaml` |
| `frozen_at` | ISO-8601 string | yes | Freeze timestamp from `research.yaml` |
| `research_os_version` | string | yes | Version of research-os used to produce the pack |
| `sections` | array | yes | Per-section summary (see below) |
| `totals.sections` | number | yes | Total section count |
| `totals.accepted_claims` | number | yes | Total accepted claims across all sections |
| `totals.dispositioned` | number | yes | Total dispositioned (excluded but not rejected) claims |
| `totals.unresolved_contradictions` | number | yes | Unresolved cross-section contradictions at freeze |
| `freeze_receipt_sha256` | string | yes | sha256 of `pack/audits/freeze-receipt.json`. `verify-pack.mjs` checks this matches actual file |
| `operator_notes` | string | no | Free-text notes from the pack operator |

### `sections[]` fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Section ID matching `research.yaml` |
| `accepted_claims` | number | yes | Accepted claims in this section |
| `gate` | string | yes | Gate verdict: `pass`, `warn`, `fail`, `blocked`, or `pass_with_waiver` |
| `synthesis_eligible` | boolean | yes | Whether the section is eligible for synthesis |

---

## Three-lane structure

The monorepo serves three distinct audiences simultaneously. Every package directory is structured to serve all three.

### Lane 1 — Public synthesis

**Who:** Domain practitioners, researchers, readers who want conclusions.

**Entry point:** `packages/<name>/README.md` and `packages/<name>/synthesis/final-report.md`

**Guarantee:** Every factual statement cites a claim ID. Every claim ID traces to a source excerpt. The path from conclusion to evidence is unbroken.

### Lane 2 — Frozen evidence pack

**Who:** Auditors, fact-checkers, people who want to verify the claims directly.

**Entry point:** `packages/<name>/pack/`

**Guarantee:** The freeze receipt fingerprints every canonical artifact. `verify-pack.mjs` reproduces every sha256 from the live files. A PASS means the pack has not drifted since freeze.

### Lane 3 — Method proof

**Who:** Operators evaluating `research-os`, researchers comparing methodologies.

**Entry point:** Top-level `docs/`, `catalog.json`, `scripts/`

**Guarantee:** `catalog.json` is a machine-readable index of every admitted pack. `docs/source-quality-notes.md` accumulates per-arc findings. `docs/operator-playbook.md` is living doctrine. Every pack that passes admission has been verified by `verify-pack.mjs`.

---

## Monorepo philosophy

**Why a monorepo, not separate repos?**

A standalone per-topic repo under-scales. The archive is a research library, not a product. The monorepo:

- Gives every pack the same admission bar, enforced by the same scripts
- Lets `catalog.json` be a single authoritative index
- Makes `verify-pack.mjs` run against all packs in one CI step
- Avoids the proliferation of per-topic repos with no consistent structure

**Why synthesis at the package root AND inside `pack/synthesis/`?**

The `pack/` directory is Lane 2 — a complete, self-contained frozen pack as `research-os` produces it. It includes its own `synthesis/` directory because that is part of the canonical pack layout. The package-root `synthesis/` is Lane 1 — the same files promoted out of `pack/` for easy navigation. They are identical (copy, not symlink). This duplication is intentional per the spec.

**Why `README.md` must be derived, not hand-authored?**

The README must be deterministically regenerable from `synthesis/final-report.md` + `pack.manifest.json`. This is a design-for-Experiment-2 requirement: `research-os pack publish` (the planned automation of this manual process) needs a deriver it can trust. If the README can be hand-authored, the deriver cannot be tested. If the deriver can be tested, `pack publish` can be automated.
