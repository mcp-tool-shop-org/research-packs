# Section 05 — Failure-Mode Notes

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 05 reached Terminal A (`synthesis_eligible: true`, 30 accepted
> claims, monopoly waiver disclosed, 15 primary sources after re-typing).

The four-question failure-mode framework, answered against Section 05's
accepted claims (XRPL transfer and trade mechanics: NFToken offers,
fungible-token DEX OfferCreate, Payment with cross-currency pathfinding,
Escrow, plus introspection JSON-RPC methods).

**Synthesis contribution thesis (locked from advisor call):**
*A creator token is not durable just because it exists on-ledger. It must
remain transferable under the token standard's offer/payment/escrow
mechanics, and those mechanics differ sharply across NFTokens, trustline
tokens, MPTs, and XRP paths.*

---

## 1. What can fail?

**No valid offer exists.**
- An NFT or fungible-token holding without any matching `NFTokenOffer` /
  `Offer` ledger-entry on the buy or sell side cannot transact. Existence
  on-ledger does not imply transferability — a held token in a market with
  no counterparty is functionally illiquid until an offer materialises.

**Offer exists but cannot be accepted under current flags / state.**
- Accepted claim: "The NFTokenCreateOffer transaction can fail due to
  insufficient XRP reserves." Reserve shortfall (Section 03 dependency)
  blocks new offer creation.
- Accepted claim: "Only the original creator of an NFTokenOffer or the
  account specified in its Destination field can cancel it." Misdirected
  cancellation attempts fail.
- Accepted claim: "An NFTokenOffer can also be cancelled by any account
  if it has an expiration time and that time has passed." Expiration
  semantics shift cancellation authority.
- Accepted claim: "The EscrowFinish transaction fails if the token is
  deep frozen or locked." Section 04 issuer-side freeze (lsfGlobalFreeze
  / Individual Freeze) blocks escrow finish on issued tokens.

**Brokered NFTokenAcceptOffer assumptions wrong.**
- Accepted claim: "The NFTokenAcceptOffer transaction has two modes:
  direct and brokered." Direct mode pairs a holder's sell offer with a
  buyer's bid; brokered mode lets a third-party "broker" account match
  separate buy + sell offers and capture spread. **Brokered mode is
  genuinely structurally different from direct** — operators conflating
  the two will mis-architect their marketplace integrations. This is
  the most-misunderstood XRPL feature per the kickoff watch case.

**Reserve / object requirements prevent offer creation or acceptance.**
- Each `NFTokenOffer` and `Offer` ledger-entry consumes owner reserve
  (Section 03 territory). An account near reserve capacity cannot
  create new offers; a counterparty buyer with insufficient reserve
  cannot accept transfer that would create new entries on their side.

**Pathfinding / liquidity absent for fungible-token cross-currency paths.**
- Accepted claim: "Cross-currency payments within the XRP Ledger are
  fully atomic." Atomicity is guaranteed if a path exists. **No path,
  no transfer.** Fungible-token paths through DEX offers can dry up;
  payments with thin liquidity fail rather than partial-execute.
- Pathfinding applies to **fungible-token / payment flows**, **NOT** to
  NFT transfer. NFT transfer is a single-step `NFTokenAcceptOffer`,
  not a multi-hop payment path.

**Escrow / payment mechanics mistaken for NFT transfer mechanics.**
- Accepted claim: "EscrowCreate transactions require the TokenEscrow
  amendment for fungible tokens." Escrow as a custody mechanism applies
  to XRP and (with the TokenEscrow amendment active) IOU/MPT fungible
  tokens. **NFT escrow is not part of the same EscrowCreate /
  EscrowFinish surface.** An operator expecting "escrow my NFT until
  condition X" using EscrowCreate will find the transaction unusable
  for NFTs.

**JSON-RPC introspection coverage gaps.**
- `account_offers` returns fungible-token DEX offers; `nft_sell_offers`
  / `nft_buy_offers` return NFT offers per `NFToken` ID. **A control
  plane querying only one surface misses the other token class's
  offer state.**
- Accepted claim: "The account_offers method returns offers ordered
  lexicographically." Operators expecting time-ordered or
  price-ordered output will mis-interpret.

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| No offer exists | **Holder / counterparty** — create the offer (NFTokenCreateOffer or OfferCreate). No protocol-level "force liquidity" path. |
| Reserve shortfall blocking offer creation | **Holder** — deposit XRP (Section 03 dependency). |
| NFTokenOffer cancellation by wrong account | **Original creator** of the offer, OR **account in Destination field**, OR **any account** after expiration time. Section 05 accepted claims cover all three. |
| EscrowFinish blocked by deep freeze / lock | **Issuer** must lift the freeze (Section 04 dependency); holder cannot self-clear. |
| Brokered NFTokenAcceptOffer mis-architected | **Operator / marketplace** — fix integration code; protocol cannot help with off-ledger architecture. |
| Pathfinding / liquidity absent | **Liquidity providers** (off-ledger market makers) — create offers in the missing path. |
| TokenEscrow amendment unavailable for fungible token escrow | **Validator network** — through amendment activation. |
| Wrong introspection RPC chosen | **Operator** — query both `account_offers` AND `nft_sell_offers` / `nft_buy_offers` per holding. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| Offer creation / cancellation | **on-ledger / holder-counterparty-controlled** |
| Reserve adequacy for new offer-objects | **on-ledger / holder-controlled** (Section 03 cross-ref) |
| Issuer-flag-driven blockage (deep freeze) | **on-ledger / issuer-controlled** (Section 04 cross-ref) |
| Brokered architecture | **off-ledger / operator-controlled** |
| Liquidity / pathfinding | **off-ledger / market-driven** (the protocol provides the pathfinding algorithm; populating the paths is market activity) |
| Amendment-gated escrow extension | **on-ledger / protocol-controlled** (validator amendment) |
| Multi-surface introspection coverage | **off-ledger / operator-controlled** (control-plane code completeness) |

The pattern: most Section 05 failures resolve at the holder /
counterparty level, with some issuer-side dependencies (Section 04) and
reserve-side dependencies (Section 03). **Section 05 is where prior
sections' state actually decides whether transactions complete.**

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- `account_nfts` per tracked holder — enumerate held NFTs (NFToken IDs).
  Per the accepted claim "The account_nfts method may return universal
  error types," wrap calls in error-handling that distinguishes
  account-not-found from network-error.
- `account_offers` per tracked holder — enumerate active fungible-token
  DEX offers. Lexicographic ordering (per accepted claim) means the
  control plane must sort by relevant key (price, expiration) on its
  own side; do not assume RPC-side ordering matches operator intent.
- `nft_sell_offers` / `nft_buy_offers` per tracked NFToken ID — enumerate
  per-NFT offer state. Required for NFT-side liquidity monitoring;
  `account_offers` doesn't return NFT offers.
- `Offer` ledger-entry inspection per `Offer` ID — for fungible-token
  DEX offers; track Flags (combined per accepted claim:
  "An Offer in the XRP Ledger can have combined flags in its Flags
  field"), price, expiration.
- `NFTokenOffer` ledger-entry inspection per `NFTokenOffer` ID — for
  NFT offers; track lsfSellNFToken flag (per accepted claim:
  "Flag lsfSellNFToken, if enabled, indicates the offer is a sell
  offer"), Amount, Destination, Expiration.
- `feature` JSON-RPC for amendment status — track NonFungibleTokensV1_1
  (NFT offers + accept), TokenEscrow (fungible-token escrow), MPTokensV1
  (MPT mechanics), and any future amendment that extends transfer/
  trade mechanics.

**Off-ledger surface:**
- Marketplace presence — does a third-party marketplace surface the
  tracked NFT for sale / track open offers? Absence in marketplace UI
  does not mean absence on-ledger; cross-check via `nft_sell_offers`.
- Market-maker liquidity for fungible-token paths — pathfinding success
  for cross-currency payments depends on on-ledger offer density along
  the path. Off-ledger signal: market-maker uptime / activity.
- Wallet support for brokered NFTokenAcceptOffer — consumer wallets may
  expose only direct-accept; operators relying on brokered mode must
  verify their wallet integration.

**Cross-cutting alerts:**
- "Reserve shortfall would block new offer creation" — forecast against
  XRP balance + owner-reserve ramp.
- "Issuer enabled freeze affecting holder's escrow" — Section 04 freeze
  transition + Section 05 EscrowFinish blockage.
- "Pathfinding liquidity gap on tracked path" — track failed payment
  attempts where path resolution failed (vs partial-execution failures).
- "Cross-mechanism conflation in operator code" — static check on
  operator integration code for misuse patterns (treating NFT offers
  as DEX offers; treating EscrowCreate as universal token custody).
  Off-ledger discipline.

---

## Cross-section dependency map

Section 05 leans heavily on prior sections' state for transferability:

- **Section 01 (token surfaces and standards):** which token paradigm
  the holding lives in — IOU/trustline, NFT, MPT, XRP — determines
  which Section 05 mechanism applies. NFT path goes through
  NFTokenCreateOffer / NFTokenAcceptOffer. Fungible/IOU goes through
  OfferCreate / Payment. MPT has its own MPTokenIssuanceSet-aware
  flow.
- **Section 02 (account and key management):** the signing authority
  for offer creation / cancellation. A holder with master-key disabled
  + no regular key + no signer quorum cannot create or cancel offers.
  Section 05 transactions inherit Section 02 signing risk.
- **Section 03 (on-ledger state and reserves):** every offer creates
  a ledger-entry that consumes reserve. Section 03's reserve-shortfall
  failure modes propagate into Section 05's offer-creation failures.
- **Section 04 (issuer controls and immutability):** issuer-side flags
  (lsfGlobalFreeze, Individual Freeze, lsfNoFreeze, Clawback) determine
  whether transferability is even possible. EscrowFinish failure on
  deep-frozen tokens (per accepted claim) is a Section 04 → Section 05
  cross-section failure mode.

This cross-section dependency is the load-bearing reason synthesis must
weave Section 05 against the prior sections, not treat it standalone.

---

## Synthesis-time disclosure (load-bearing per v0.3.1 waiver discipline)

Per the section-scoped `min_independent_publishers` waiver active on
this section, the section synthesis (`final-report.md` for the section)
must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the transfer/
trade mechanics spec across xrpl.org transaction-type references
(NFTokenCreateOffer, NFTokenAcceptOffer, NFTokenCancelOffer, OfferCreate,
OfferCancel, Payment, EscrowCreate, EscrowFinish), the cross-currency
payments concept page, the JSON-RPC method references, the Offer +
NFTokenOffer ledger-entry references, and the rippled implementation.
The single GitHub Search API issue source provides supplementary NFT
brokered-offer edge-case evidence; it is typed forum (developer
discussion), not first-party canonical.

This disclosure mirrors the discipline applied in Sections 01-04.

**Section 07 (metadata and off-chain durability) will NOT carry this
waiver pattern.** IPFS / Arweave / HTTP / marketplace-indexer publishers
contribute genuinely independent evidence for metadata-layer questions,
where the global publisher-diversity floor remains the correct guard.

---

## Notable Section 05 reviewer holds

The reviewer correctly held all six scope boundaries the kickoff flagged:

1. **NFT offer mechanics not collapsed into fungible DEX OfferCreate.**
   NFTokenCreateOffer / NFTokenAcceptOffer / NFTokenCancelOffer claims
   stay distinct from OfferCreate / OfferCancel claims. No accepted
   claim treats them as equivalent.
2. **Brokered NFTokenAcceptOffer distinct from direct.** Accepted
   claim: "The NFTokenAcceptOffer transaction has two modes: direct
   and brokered" — the two-mode framing is preserved verbatim.
3. **Cross-currency payments / pathfinding scoped to fungible/payment.**
   The cross-currency-payments accepted claim ("fully atomic") stays
   in payment-flow scope; no projection onto NFT transfer.
4. **Escrow not universal token custody.** EscrowCreate accepted claim
   explicitly scopes to "fungible tokens" with TokenEscrow amendment
   dependency. NFT escrow is not asserted as a thing.
5. **Offer existence ≠ liquidity guarantee.** Accepted claims about
   offers describe their structural lifecycle (creation, cancellation,
   expiration, flag combinations) without asserting execution
   guarantees.
6. **Transferability depends on prior-section state.** The
   "NFTokenCreateOffer can fail due to insufficient XRP reserves"
   accepted claim explicitly bridges to Section 03 reserve mechanics.
   The "EscrowFinish fails if token is deep frozen" accepted claim
   bridges to Section 04 freeze semantics.

The reviewer also caught **1 blocking finding** at per-claim level:
overgeneralized_claim on EscrowCreate "Cancel After time" requirement
that was over-projected from a specific transaction type to all
transactions. Routed to needs_scope_repair without blocking the section.

**Within-mechanism accuracy concern (worth noting for synthesis time):**
Two accepted claims from the NFTokenOffer ledger-entry source
(`src_48fddb8ee3b6`) contain extraction artifacts:
- "An NFTokenOffer is a proposal to create a new NFToken on the XRP
  Ledger." — partially garbled. NFTokenOffer is a buy/sell/transfer
  proposal for an EXISTING NFToken; NFTokenMint creates new NFTokens.
- "An NFTokenOffer has fields for the proposed name, URL, and price." —
  field names mis-stated. NFTokenOffer has Amount (price), Destination
  (target), Expiration, etc. — not "name" or "URL" as such. URI is on
  the NFToken itself (set at NFTokenMint), not on the NFTokenOffer.
Both claims are technically heuristic-grounded against an excerpt the
extractor produced, but the LLM extractor garbled some field semantics.
Operator-side concern: synthesis-time editor should cross-check these
claims against the actual NFTokenOffer ledger-entry-type spec before
including them in the section synthesis prose.

---

## Status

- Section 05 chain: gate WARN, `synthesis_eligible: true`, 30 accepted
  claims, 0 blocking reasons, 1 waiver applied (min_independent_publishers).
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state. **Five sections now gated** (01,
  02, 03, 04, 05); two remain (06, 07).
- Source-card typing: 15 primary (XRPL Foundation canonical) + 1 forum
  (api.github.com developer discussion). All re-typed in Session G via
  the F-27 mitigation pre-chain audit.
- These notes are scaffolding, not chain artifacts. Update or replace
  during synthesis-time per claim-ID grounding.
