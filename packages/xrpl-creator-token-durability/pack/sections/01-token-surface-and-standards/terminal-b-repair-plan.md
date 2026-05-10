# Section 01 — Terminal B Repair Plan

**Status at end of XRPL Pack Session 2 (2026-05-09):** Gate verdict BLOCKED.
`synthesis_eligible: false`. No claims accepted. Operator-authored, not
chain-managed, not gate-relevant.

## Gate verdict

```
gate verdict: BLOCKED
  failures:            3
  warnings:            5
  blocking reasons:    3
```

Three blocking reasons:

1. `source_floor.min_independent_publishers`: found 1 publisher; minimum 4
   required.
2. `source_floor.primary_sources_required`: found 1 primary source; minimum 2
   required (pre-waiver).
3. `accepted_claim_floor.min_accepted_claims_and_sources`: 0 accepted claims
   from 0 sources (minimum 3 from 2). Waivers cannot bypass evidence existence.

## Why all 64 reviewed claims got `needs_source_repair`

Of the 64 selected_for_review claims, **every one** was routed to
`needs_source_repair` by the reviewer. The driver: a single warn-severity
finding (`source_cluster_monopoly`) tagged to all 64 claim_ids:

> "Every source for this section traces to a single publisher (XRP Ledger
> Foundation). Claims drawn from this section inherit a publisher-monopoly
> limitation."

All 9 Section 01 sources are XRPLF: xrpl.org docs (publisher-attributed),
XRPLF/XRPL-Standards raw markdown (XLS-0020, XLS-0033), XRPLF/rippled GitHub
issues, XRPLF/rippled releases. Structurally single-publisher because XRPL is
maintained by one foundation.

The reviewer's claim-shape findings (63 `missing_not_constraint` info-severity
findings, 13 `valid_but_low_value`, 11 `source_quality_problem`, 2 `block`-
severity `scope_widening`) are secondary noise. The single
`source_cluster_monopoly` warning is what drove every decision.

## Repair options for the next session

### Option A — Source-pool augmentation (preferred)

Stage independent-publisher sources covering XRPL token paradigms, then
re-run `gather → claim extract → claim audit-density → claim triage → review →
review-promote → gate` for Section 01. Candidate publisher classes (operator-
verify text-content per operator-playbook before staging):

- **Academic / research papers** — arXiv, IACR, ACM/IEEE on XRPL consensus or
  token mechanics (RippleNet papers, federated consensus analysis).
- **Independent block explorers** — Bithomp (`bithomp.com/explorer`), XRPSCAN
  (`xrpscan.com`) reference docs on token types they index.
- **Exchange/custodian token-integration docs** — Coinbase, Kraken, Bitstamp
  on how they handle XRPL tokens (IOUs vs MPTs vs NFTs).
- **Cryptocurrency journalism with sourced reporting** — CoinDesk, Decrypt,
  The Block coverage of XLS-46 / MPT activation timeline and adoption.

Target: 3+ distinct publishers beyond XRPLF to clear the `min_independent_publishers: 4`
floor with margin. Avoid Reddit / Discord / community-gallery URLs (per pack
operator-playbook on JS-rendered / payment-walled sources).

### Option B — `primary_source_waiver` with compensating controls

If the operator decides protocol-spec single-publisher is structurally
inevitable for this topic, set `primary_source_waiver` in `research.yaml`
(see pack `CLAUDE.md` — first-class field, not a workaround). Compensating
controls draft:

> All canonical XRPL specifications are published by the XRP Ledger
> Foundation by structural necessity (XLS standards process, rippled
> implementation, xrpl.org docs all under one foundation). Independence
> is provided at the contributor level — XRPLF/XRPL-Standards and
> XRPLF/rippled have multiple authors and reviewers across the standards
> and implementation lanes. No third-party publisher exists at the
> protocol-canonical layer.

Note: the waiver is allowed (`primary_source_waiver_allowed: true`) but only
clears the primary-source floor. The publisher-monopoly gate (`claim_integrity.no_source_cluster_monopoly: true`) and `min_independent_publishers: 4` floor are
separate. Option A is more likely to produce a clean acceptance.

### Option C — Per-section gate override

Not currently supported in `gates.yaml` (section-level config takes
`min_sources`, `primary_sources_required`, `contradictions_required` only).
Pack-wide `gates.source_floor.min_independent_publishers: 4` is the canonical
floor. If per-section overrides are needed for protocol-spec topics, that's a
v0.x research-os roadmap candidate, not a Section 01 repair option.

## What the repair session does NOT need to do

- The `--detector heuristic` flag worked correctly. `contradict map` produced
  a valid `contradictions.md` (clean section, 0 contradictions across 2016
  pairs). F-09 closure is real.
- Triage's per-source cap balanced selected_for_review at 10 each for the
  top 4 sources. That's healthy.
- The chain itself didn't fail. The evidence base is structurally
  single-publisher and the gate caught it. Working as designed.
