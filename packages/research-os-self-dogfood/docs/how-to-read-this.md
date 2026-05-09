# How to Read This Pack

This package is the **v0.1 self-dogfood pack** — `research-os` used on itself. It researched how `research-os` should structure a research pack, then used that research to lock its own v0.1 schemas, gates, and CLI surface.

→ For a general explanation of pack structure and claim IDs, see [`docs/how-to-read-a-pack.md`](../../../docs/how-to-read-a-pack.md).

---

## Topic and decision

**Topic:** How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?

**Decision question:** Lock the schemas, gates, prompt contracts, and CLI surface for research-os v0.1 so the remaining workflow links can be built against a real spec instead of guesses.

---

## Why this pack is recursive

The pack researches `research-os` using `research-os`. Every design claim in this pack is grounded in external literature (JSONL serialization specs, PROV-DM, SQLite FTS5, CLI design patterns, BDD testing methodology) — not in the tool's own documentation. The external literature corroborates design choices but does not prescribe them. The prescriptive decisions are operator inputs (Mike's design choices), which is why a `primary_source_waiver` is active for all 8 sections.

This recursive proof is intentional. If the tool cannot research itself to freeze, it cannot research anything else.

---

## Key reading notes

**Section 03 is the regression fixture.** 715 candidate claims were extracted; 42 accepted; 7 are deliberately dispositioned (`out_of_bounds_regression_fixture`). These 7 claims must not be cited. Any future change to `research-os`'s extraction/triage/review/gate/audit/freeze chain is verified against Section 03's measured outputs first.

**The extractor was `mistral-nemo:12b`, not `hermes3:8b`.** The canonical reviewer is `hermes-two-pass` with `hermes3:8b`, but that model was not available on the 5080 rig when the pack was run. The substitution is disclosed in `pack/research.yaml` under `review_profiles`. The proof is honest — it discloses the substitution. A hermes3-based receipt is Experiment 6 in the `research-os` roadmap.

**All 8 sections gate at `warn`, all `synthesis_eligible: true`.** Gate `warn` means no failures, only non-blocking warnings (mostly around source freshness, publisher diversity metrics, and contradict-required policies). The warnings did not block synthesis.

**30 claims were operator-overridden** (flagged as false positives by the adversarial reviewer for IANA registry, OpenID Foundation, and JSON standards). These overrides are documented in `pack/sections/*/claim-reviews.jsonl` with explicit reasons.

---

## Freeze integrity

This pack was frozen with `research-os freeze` on 2026-05-08. The freeze receipt at `pack/audits/freeze-receipt.json` fingerprints 131 canonical artifacts (130 match exactly; 1 soft-warn on `research.yaml` due to a known freeze-implementation behavior: `research-os freeze` writes `frozen_at` and section statuses to `research.yaml` AFTER computing fingerprints, so the receipt hash reflects the pre-freeze state by design).

To verify: `node ../../../scripts/verify-pack.mjs .` from this directory.
