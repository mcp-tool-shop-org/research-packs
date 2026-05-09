# Cowork Handoff: How should research-os structure a research-pack so every research artifact becomes actionable implementation material for the repo?

**Pack ID:** `5dca72a4300c`
**Mode:** [REPAIR REQUIRED] repair_required
**Synthesis allowed:** no
**Generated:** 2026-05-07T01:12:19.248Z
**Index:** present

> Pack mode=repair_required; 8 section(s) total, 0 synthesis-eligible, 8 blocked or unrun. 0 accepted claim(s); 4 need repair; 0 rejected; 0 unresolved contradiction(s); 0 waiver(s).

## Operating mode

The pack is not ready for synthesis. At least one section is blocked, has unrun gates/review, or has claims that need repair. Your job is to gather more sources, repair scope/source issues, re-run gates and review, and document open questions. **You may not write final synthesis prose in this mode.**

## What you may do

- Run `research-os gather <section> --url ...` to add sources where the source-floor gate is failing.
- Run `research-os claim extract <section>` after adding sources.
- Run `research-os contradict map <section>` and `research-os review <section>` to refresh tension and review state.
- Re-run `research-os gate <section>` to determine if synthesis-eligibility has been earned.
- Re-run `research-os index build --all` and `research-os cowork handoff` to refresh the runtime contract.
- Write working notes to `handoffs/cowork-notes.md` and per-section `open_questions.md`.

## What you may not do (always — these are pack invariants)

- Mutate sections/<id>/claims.jsonl directly — it is extraction truth (append-only via research-os tools)
- Mutate evidence/source-cards/*.json or evidence/fetch-log.jsonl — these are fetched-truth artifacts
- Mutate audits/*-gate.json or audits/*-review.json — these are immutable audit snapshots
- Cite a source_id that is not present in evidence/source-cards/
- Cite a claim_id that is not present in sections/<id>/claims.jsonl
- Treat a claim with scope=null as broadly applicable — null-scope means scope-undetermined, not scope-universal
- Widen the scope of a claim beyond what the source explicitly supports
- Flatten an unresolved contradiction; preserve it deliberately or route it through claim-reviews
- Write final synthesis prose unless mode == synthesis_ready
- Reconcile contradictions silently — use research-os contradict map / research-os review with explicit decisions

## Pack state

| Section | Status | Gate verdict | Synthesis-eligible | Candidate claims | Accepted | Need repair | Rejected | Unresolved contradictions |
|---|---|---|---|---|---|---|---|---|
| `01-product-thesis` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `02-pack-artifact-contract` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `03-source-and-claim-truth` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `04-gates-and-waivers` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `05-cowork-handoff` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `06-repo-knowledge-integration` | draft | blocked | no | 4 | 0 | 4 | 0 | 0 |
| `07-cli-and-runtime-flow` | draft | — | no | 0 | 0 | 0 | 0 | 0 |
| `08-acceptance-suite` | draft | — | no | 0 | 0 | 0 | 0 | 0 |

### Accepted claims (synthesis-ready)

_No claims have been accepted for synthesis. Synthesis is not allowed in this handoff._

### Claims needing repair

- `clm_e15c2248a5d8_ollama_intern_1`
- `clm_05cae033cedc_ollama_intern_1`
- `clm_05cae033cedc_ollama_intern_2`
- `clm_05cae033cedc_ollama_intern_3`

### Rejected claims

_None._

### Unresolved contradictions

_None._

### Active waivers

_None._

## Recommended next actions

1. Run `research-os gate 01-product-thesis` (no gate result on file yet).
2. Run `research-os gate 02-pack-artifact-contract` (no gate result on file yet).
3. Run `research-os gate 03-source-and-claim-truth` (no gate result on file yet).
4. Run `research-os gate 04-gates-and-waivers` (no gate result on file yet).
5. Run `research-os gate 05-cowork-handoff` (no gate result on file yet).
6. [06-repo-knowledge-integration] address blocking gate failure: source_floor.min_sources: Found 2 source card(s); minimum 8 required.
7. [06-repo-knowledge-integration] address blocking gate failure: source_floor.min_independent_publishers: Found 1 independent publisher(s); minimum 4 required.
8. [06-repo-knowledge-integration] address blocking gate failure: source_floor.primary_sources_required: Found 0 primary source(s); minimum 2 required. Pre-waiver.
9. [06-repo-knowledge-integration] 4 claim(s) need repair per latest review — re-run gather/extract for affected sources, then re-run review.
10. Run `research-os gate 07-cli-and-runtime-flow` (no gate result on file yet).
11. Run `research-os gate 08-acceptance-suite` (no gate result on file yet).

## Allowed write paths

- `handoffs/cowork-options.md`
- `handoffs/cowork-notes.md`
- `sections/<id>/open_questions.md`
- `sections/<id>/brief.md (working notes only — final brief lands at synthesis time)`
- `audits/<id>-cowork-repair-notes.md`

## Useful index queries

- `research-os query "source_floor"` — surface gate failures grounded in audit JSON.
- `research-os query "source_cluster_monopoly"` — find publisher-monopoly findings and the claims they touch.
- `research-os query "candidate" --type claim` — list candidate claims that haven't been accepted yet.
- `research-os query "blocked" --type gate_result` — every gate that blocks synthesis.
- `research-os query "<term>"` — full-text search; every hit points to a canonical artifact path.

## Stop conditions

- All blocked sections become synthesis-eligible OR mode flips to `human_review_required`.
- Repair budget for the pack is exhausted (re-run handoff to confirm).
- Pack-level `max_runtime_minutes` (in `research.yaml`) is exhausted — surface partial state honestly.

## Final instruction

Do not introduce unsupported claims. Preserve unresolved contradictions. Do not widen scope beyond the source-tagged scope. Cite only `claim_id` and `source_id` values that already exist in this pack. The pack is the source of authority — this handoff is a layout step, not new truth.
