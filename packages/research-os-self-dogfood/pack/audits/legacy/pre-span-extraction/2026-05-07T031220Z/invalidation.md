# Invalidation receipt: pre-span-extraction

- **Receipt ID:** `inv_1778123540977_pre-span-extraction`
- **Invalidated at:** 2026-05-07T03:12:20.977Z
- **research-os version:** 0.1.0
- **New contract:** span-first-extraction
- **Superseded contract:** authored-evidence-excerpt
- **frozen_at cleared:** no

## Reason

Span-first extraction supersedes the authored-evidence-excerpt contract: claims authored under the legacy model directly produced evidence_excerpt text, conflating interpretation with evidence and creating paraphrase-as-quote 'hallucinations'. Span-first removes that authority — the model now picks excerpt IDs from a deterministic ledger; research-os copies the literal text. New law: models may interpret source spans; they may not author evidence spans.

## Notes

Section 03's mistral-nemo run rejected 23/23 claims under the OLD text-substring grounding check; section 06 had 4 surviving claims from earlier hermes-style extraction. Both sections need re-extraction under span-first.

## Affected sections (2)

- `03-source-and-claim-truth`
- `06-repo-knowledge-integration`

## Section status changes (1)

| Section | Before | After |
|---|---|---|
| `03-source-and-claim-truth` | gated | draft |

## Archived artifacts (36)

Each row shows where the artifact was, and where it lives now.

| From | To |
|---|---|
| `sections/03-source-and-claim-truth/claims.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/03-source-and-claim-truth/claims.jsonl` |
| `sections/03-source-and-claim-truth/claim-reviews.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/03-source-and-claim-truth/claim-reviews.jsonl` |
| `sections/03-source-and-claim-truth/contradictions.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/03-source-and-claim-truth/contradictions.md` |
| `sections/06-repo-knowledge-integration/claims.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/06-repo-knowledge-integration/claims.jsonl` |
| `sections/06-repo-knowledge-integration/claim-reviews.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/06-repo-knowledge-integration/claim-reviews.jsonl` |
| `sections/06-repo-knowledge-integration/contradictions.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/sections/06-repo-knowledge-integration/contradictions.md` |
| `handoffs/cowork-handoff.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/handoffs/cowork-handoff.json` |
| `handoffs/cowork-master.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/handoffs/cowork-master.md` |
| `audits/03-source-and-claim-truth-findings.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/03-source-and-claim-truth-findings.jsonl` |
| `audits/03-source-and-claim-truth-gate.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/03-source-and-claim-truth-gate.json` |
| `audits/03-source-and-claim-truth-gate.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/03-source-and-claim-truth-gate.md` |
| `audits/03-source-and-claim-truth-review.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/03-source-and-claim-truth-review.json` |
| `audits/03-source-and-claim-truth-review.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/03-source-and-claim-truth-review.md` |
| `audits/06-repo-knowledge-integration-findings.jsonl` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/06-repo-knowledge-integration-findings.jsonl` |
| `audits/06-repo-knowledge-integration-gate.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/06-repo-knowledge-integration-gate.json` |
| `audits/06-repo-knowledge-integration-gate.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/06-repo-knowledge-integration-gate.md` |
| `audits/06-repo-knowledge-integration-review.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/06-repo-knowledge-integration-review.json` |
| `audits/06-repo-knowledge-integration-review.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/06-repo-knowledge-integration-review.md` |
| `audits/freeze-refusal.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/freeze-refusal.json` |
| `audits/freeze-refusal.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/freeze-refusal.md` |
| `audits/orphan-claims.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/orphan-claims.json` |
| `audits/orphan-claims.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/orphan-claims.md` |
| `audits/pack-audit.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/pack-audit.json` |
| `audits/pack-audit.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/pack-audit.md` |
| `audits/scope-widening-risks.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/scope-widening-risks.json` |
| `audits/scope-widening-risks.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/scope-widening-risks.md` |
| `audits/source-diversity-gaps.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/source-diversity-gaps.json` |
| `audits/source-diversity-gaps.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/source-diversity-gaps.md` |
| `audits/stale-sources.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/stale-sources.json` |
| `audits/stale-sources.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/stale-sources.md` |
| `audits/synthesis-readiness.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/synthesis-readiness.json` |
| `audits/synthesis-readiness.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/synthesis-readiness.md` |
| `audits/unresolved-contradictions.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/unresolved-contradictions.json` |
| `audits/unresolved-contradictions.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/unresolved-contradictions.md` |
| `audits/weak-sources.json` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/weak-sources.json` |
| `audits/weak-sources.md` | `audits/legacy/pre-span-extraction/2026-05-07T031220Z/audits/weak-sources.md` |
