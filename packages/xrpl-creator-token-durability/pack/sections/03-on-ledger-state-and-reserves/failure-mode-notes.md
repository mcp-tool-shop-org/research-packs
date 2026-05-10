# Section 03 — Failure-Mode Notes

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 03 reached Terminal A (`synthesis_eligible: true`, 42 accepted
> claims, monopoly waiver disclosed, 11 primary sources after re-typing).

The four-question failure-mode framework, answered against Section 03's
accepted claims (XRPL on-ledger state representations: NFTokenPage,
MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot, plus reserve
mechanics).

---

## 1. What can fail?

**Reserve shortfall — base + owner reserve mechanics.**
- Every ledger object an account owns adds to its owner reserve. NFTokens
  consume one NFTokenPage entry per (up-to-32) NFTs; each MPTokenIssuance
  reference adds owner reserve to the holder's account; each RippleState
  trust-line adds reserve to one or both ends depending on flag state.
- An account whose XRP balance drops below
  `base_reserve + (owner_count × owner_reserve)` cannot send transactions
  that would consume more reserve. The held tokens themselves do not
  vanish, but the account's transactability is frozen until reserve is
  restored.
- Reserve values are amendment-controlled (validator consensus); a future
  reserve increase can suddenly shortfall accounts that were previously
  comfortable. Section 06 covers the amendment surface.

**NFTokenPage deletion edge cases.**
- The XRPLF/rippled issue search (`src_006880d4c42c`,
  `src_5f4e84349ec5` — typed forum, supplementary evidence) surfaces real
  cases where minting + burning patterns left zero-NFT NFTokenPage
  entries that did not collapse correctly. The implementation has caught
  and patched several such cases; new ones can surface in future releases.
- Operator-side concern: holders running NFT-mint-heavy workflows may
  observe ledger-state representations that don't match their expected
  NFT count.

**Trust-line state divergence (RippleState).**
- RippleState entries hold the bidirectional balance between two
  accounts for an IOU. Flags on each side (frozen by issuer, no-ripple,
  default flags) interact to produce subtle behavior — a holder can
  have a non-zero balance that they cannot move because the issuer-side
  flag set blocks rippling.
- Section 04 covers issuer-side flag semantics; Section 03's lens is the
  ledger-object representation.

**Offer / NFTokenOffer ledger persistence.**
- Offer and NFTokenOffer entries persist on-ledger until cancelled or
  consumed. A holder accumulating stale offers across markets adds
  owner reserve they may not realise; a market cleanup operation
  (`OfferCancel` / `NFTokenCancelOffer`) is required to free the slot.
- DEX matching can leave dust offers that won't fill but consume
  reserve (Section 05 covers transfer-and-trade mechanics).

**AccountRoot field interpretation by clients.**
- AccountRoot holds many fields (Sequence, Domain, AccountTxnID, regular
  key, signer-list pointer, etc.). Clients reading via `account_info`
  must handle absent / zero / null fields consistently — older clients
  may misrender accounts that use newer features (e.g., signer lists).
- Off-ledger clients (wallets, exchanges) carry the interpretation
  responsibility; the ledger itself is canonical.

**JSON-RPC introspection availability.**
- `account_objects`, `ledger_entry`, `account_info` are the canonical
  read paths. A control plane that depends on these methods inherits
  the rippled node's connectivity / sync state. A node behind on
  ledger validation reports stale state; a node disconnected from the
  validator network reports last-known.

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| Reserve shortfall | **Holder** — deposit XRP. Cannot be repaired by issuer or protocol. |
| Reserve increase via amendment | **Validator network** — vote against. Holders / issuers cannot prevent at the protocol layer. |
| NFTokenPage deletion edge-case bug | **XRPLF rippled maintainers** — patch and release; validators upgrade. |
| Trust-line state ambiguity | **Issuer** — set flag state explicitly; **holder** — verify via `account_objects`. |
| Stale offer accumulation | **Holder** — issue `OfferCancel` / `NFTokenCancelOffer`. Cannot be cleaned by protocol or marketplace alone. |
| Off-ledger client field misinterpretation | **Wallet / exchange / marketplace operator** — update client. Protocol cannot enforce. |
| RPC introspection staleness | **Node operator** — verify rippled sync; **integrator** — query multiple nodes for quorum. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| Reserve shortfall | **on-ledger / holder-controlled** |
| Reserve increase | **on-ledger / protocol-controlled** (validator consensus) |
| NFTokenPage deletion bug | **off-ledger / XRPLF-maintainer-controlled** (patch) → **on-ledger / validator-controlled** (deploy) |
| Trust-line state ambiguity | **on-ledger / issuer-controlled** (flag state) + **holder-controlled** (verification) |
| Stale offer accumulation | **on-ledger / holder-controlled** |
| Client field misinterpretation | **off-ledger / not-controlled-by-XRPL-protocol** |
| RPC introspection staleness | **off-ledger / node-operator-controlled** |

The pattern: most Section-03 failures resolve at the holder or validator
layer. Issuer-controlled levers are limited (flags); protocol-controlled
levers require amendment. The control plane's job is largely to surface
state changes early enough for the holder or operator to act.

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- `account_info` — track `OwnerCount`, `Balance`, `Reserve` per tracked
  account. Forecast reserve consumption against XRP balance.
- `account_objects` — enumerate ledger objects per account; flag
  unexpected counts (NFTokenPage entries that don't collapse,
  Offer/NFTokenOffer accumulation, RippleState entries from forgotten
  trust lines).
- `ledger_entry` — direct lookup of specific ledger-entry IDs for
  deep state inspection (e.g., MPTokenIssuance metadata, NFTokenOffer
  expiration).
- `feature` (Section 06 territory) — track amendment status, especially
  reserve-related amendments that could shift the account-shortfall
  threshold.
- Validator quorum (`server_info`) — verify the queried rippled is in
  sync and on the canonical network (vs a fork or stale node).

**Off-ledger surface:**
- Wallet/exchange compatibility for new ledger-entry types
  (NFTokenPage, MPTokenIssuance) — track which clients render the
  monitored account's holdings correctly.
- rippled release-notes / issue tracker — watch for deletion-edge-case
  bug fixes affecting the operator's token-flow patterns.
- Reserve-policy change announcements (XRPLF amendment proposals) —
  forecast reserve-cost shifts before they activate.

**Cross-cutting alerts:**
- Reserve forecast: project owner-reserve growth from minting / trust-line
  acceptance trends; alert when projected reserve approaches account
  balance.
- Deletion drift: if NFTokenPage entries don't collapse as expected after
  burns, surface the discrepancy against the rippled implementation's
  expected behavior.
- Trust-line dust: flag RippleState entries with zero balance that are
  consuming reserve unnecessarily.
- Stale offer cleanup: surface Offer / NFTokenOffer entries that have
  been on-ledger longer than a threshold without filling.

---

## Synthesis-time disclosure (load-bearing per v0.3.1 waiver discipline)

Per the section-scoped `min_independent_publishers` waiver active on
this section, the section synthesis (`final-report.md` for the section)
must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the ledger-entry
schema definitions, the JSON-RPC method documentation, and the rippled
implementation. Independent third-party sources (the two GitHub Search
API issue queries, typed forum) provide supplementary evidence about
deletion-edge-case bug history but are not authoritative for the
ledger-entry schema itself.

This disclosure mirrors the discipline applied in Section 01. Each
section that invokes the section-scoped waiver carries its own
synthesis-time disclosure obligation; the disciplines do not aggregate
or short-circuit each other.

**Section 07 (metadata and off-chain durability) will NOT carry this
waiver pattern.** IPFS / Arweave / HTTP / marketplace-indexer publishers
contribute genuinely independent evidence for metadata-layer questions,
where the global publisher-diversity floor remains the correct guard.

---

## Status

- Section 03 chain: gate WARN, `synthesis_eligible: true`, 42 accepted
  claims, 0 blocking reasons, 1 waiver applied (min_independent_publishers).
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state.
- Source-card typing: 11 primary (XRPL Foundation canonical), 2 forum
  (api.github.com developer discussion). All re-typed in Session D after
  the LLM extractor's initial classifications (12 docs, 1 retry-extracted
  docs, 2 over-classified primary on the GitHub queries).
- These notes are scaffolding, not chain artifacts. Update or replace
  during synthesis-time per claim-ID grounding.
