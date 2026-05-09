---
title: Reference
description: Pack manifest schema, admission contract, and verify-pack command reference.
sidebar:
  order: 3
---

## Admission contract

No pack is admitted to `packages/` without all five of the following files:

| File | Purpose |
|------|---------|
| `pack/audits/freeze-receipt.json` | sha256 fingerprints, externally verifiable |
| `synthesis/final-report.md` | Citation-clean, claim-traceable synthesis |
| `synthesis/decision-brief.md` | Handoff-mode decision summary |
| `pack.manifest.json` | Canonical per-package metadata |
| `README.md` | Human-readable synthesis derived from final-report |

Half-frozen packs do not get a directory.

## pack.manifest.json schema

```json
{
  "name": "string",
  "topic": "string",
  "frozen_at": "ISO 8601 datetime",
  "research_os_version": "string",
  "sections": [
    {
      "id": "string",
      "accepted_claims": "integer ≥ 0",
      "gate": "pass | warn | fail | blocked | pass_with_waiver",
      "synthesis_eligible": "boolean"
    }
  ],
  "totals": {
    "sections": "integer ≥ 1",
    "accepted_claims": "integer ≥ 0",
    "dispositioned": "integer ≥ 0",
    "unresolved_contradictions": "integer ≥ 0"
  },
  "freeze_receipt_sha256": "64-char hex",
  "operator_notes": "string"
}
```

The schema is enforced at verify time via Zod in `scripts/manifest-schema.mjs`. A manifest that fails schema validation causes verify-pack to FAIL before any fingerprint checks run.

### Gate values

| Value | Meaning |
|-------|---------|
| `pass` | All gate checks passed |
| `warn` | Gate passed with non-blocking warnings (e.g. source freshness, publisher diversity) |
| `fail` | Gate failed — section should not be cited |
| `blocked` | Section could not be gated (upstream dependency missing) |
| `pass_with_waiver` | Gate passed with an explicit operator waiver on record |

All 8 sections of the v0.1 self-dogfood pack gate at `warn`.

## verify-pack command

```bash
node scripts/verify-pack.mjs <package-dir> [<package-dir> ...]
```

### Steps

1. **Admission contract check** — refuses if any of the 5 required files are missing
2. **Schema validation** — parses `pack.manifest.json` via Zod; refuses on violation
3. **Receipt hash check** — computes sha256 of `freeze-receipt.json`, compares to `manifest.freeze_receipt_sha256`
4. **Artifact re-verification** — parses the freeze receipt and recomputes sha256 of every fingerprinted artifact

### Output

```
PASS  <pack-name>
      sections=N accepted_claims=N artifacts_verified=N
      receipt_sha256=<64-char hex> (<bytes> bytes)
      WARN  <any soft warnings>
```

Or on failure:

```
FAIL  <pack-name>
      <reason>
```

Exit code 0 = all packs PASS. Exit code 1 = any FAIL.

### Soft warnings

`pack/research.yaml` always emits a soft warning. `research-os freeze` fingerprints `research.yaml` before writing `frozen_at` and bumping section statuses — so the receipt hash reflects the pre-freeze state by design. This is expected behavior.

## summarize-pack command

```bash
node scripts/summarize-pack.mjs <package-dir>
```

Derives a deterministic README from `synthesis/final-report.md` + `pack.manifest.json`. Same inputs always produce the same output — load-bearing for `research-os pack publish` automation (Experiment 2).

## catalog.json

Machine-readable index of every admitted pack:

```json
{
  "packs": [
    {
      "name": "string",
      "topic": "string",
      "frozen_at": "ISO 8601 datetime",
      "totals": { "sections": N, "accepted_claims": N, "dispositioned": N, "unresolved_contradictions": N },
      "link": "packages/<name>/"
    }
  ]
}
```
