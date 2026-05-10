# How to read: xrpl-creator-token-durability

**Pack:** `xrpl-creator-token-durability`
**Topic:** What makes XRPL creator-token holdings durable over time — across token-standard versions, account access changes, and ledger-state evolution — and what should a creator-side control plane track to keep them runnable, transferable, and provable?
**Frozen:** 2026-05-10
**Accepted claims:** 251 accepted claims across 7 sections

---

## What this pack answers

XRPL creator-token durability is a **multi-layer state bundle**, not a single property. A token's persistence depends on seven interdependent layers, each with distinct failure modes and repair loci. The pack's structural finding: **XRPL protocol durability does not imply creator-token durability** — the on-chain record is only as durable as the metadata it points to (Layer 7), the issuer controls that govern it (Layer 4), the reserves that maintain it (Layer 3), and the amendment state that defines what is even available (Layer 6). The synthesis weaves all seven layers and tells operators what a creator-side control plane must track to keep tokens runnable, transferable, and provable.

Read [`synthesis/final-report.md`](../synthesis/final-report.md) for the full thesis. Read [`synthesis/decision-brief.md`](../synthesis/decision-brief.md) for the operator-actionable summary. Read [`synthesis/cross-section-map.md`](../synthesis/cross-section-map.md) for the seven-layer dependency map.

## How the evidence is structured

Seven sections, each investigating one layer of the bundle:

| # | Section | Layer |
|---|---------|-------|
| 01 | token-surface-and-standards | Token paradigm choice (NFTokens / MPTs / trust-line tokens / XRP) |
| 02 | account-and-key-management | Account authority, master/regular keys, signer-list multi-sign, tickets, account deletion |
| 03 | on-ledger-state-and-reserves | Ledger entries, base + owner reserve mechanics |
| 04 | issuer-controls-and-immutability | What is fixed at mint vs. mutable post-mint (freeze, Clawback, NFTokenModify) |
| 05 | transfer-and-trade-mechanics | Direct/brokered NFTokenAcceptOffer, DEX OfferCreate, Payment, Escrow |
| 06 | amendment-and-validator-landscape | Amendment voting + activation, validator software supply chain, peer-network topology |
| 07 | metadata-and-off-chain-durability | URI reachability, IPFS pinning + Filecoin storage, content-hash verification |

Sections 01–06 are canonical-protocol-shaped (XRPL Foundation is first-party authority); each carries a `min_independent_publishers` section_waiver with explicit `compensating_controls[]`. Section 07 is multi-publisher (XRPLF + IPFS Foundation + Arweave + GitHub developer-discussion surface) and cleared the global publisher-diversity floor without a waiver — the v0.3.1 discipline validation finding.

## Interpreting claim IDs

Claims are referenced as `[claim:clm_<hex>_<extractor>_<n>]` in the synthesis prose. To look up a claim:

1. Open `pack/sections/<section-id>/claims.jsonl`
2. Find the entry with matching `claim_id`
3. The `asserts` field is the claim; `evidence_excerpt` is the literal source span

Accepted vs rejected: `pack/sections/<section-id>/claim-reviews.jsonl` — **latest entry per `claim_id` wins** (closure-ledger semantics; the v0.3.2 admission contract enforces this via `getEffectiveAcceptedClaimIds`).

## Preserved contradiction records

This pack has no preserved contradiction records. The heuristic contradiction detector ran on every section and surfaced 0 lexical contradictions across 903+ pairs in Section 07. Semantic tensions (e.g., IPFS marketing-vs-technical persistence framing, Arweave economic-permanence framing) were filtered by the reviewer's source_repair routing before reaching acceptance — see Section 07's `failure-mode-notes.md` and the synthesis's "Limitations and unresolved tensions" section.

## Verifying integrity

From this directory:

```bash
node ../../scripts/verify-pack.mjs .
```

Expected output: `PASS` with `sections=7 accepted_claims=251 artifacts_verified=137` and receipt sha256 `6511a044aa15fa4de30a0dfc82b811947e1f57a1563fd1d7ba013a64725259a5`.

See [`../../docs/how-to-read-a-pack.md`](../../docs/how-to-read-a-pack.md) for the general guide.
