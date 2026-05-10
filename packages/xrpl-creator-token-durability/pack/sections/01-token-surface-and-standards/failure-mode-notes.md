# Section 01 — Failure-Mode Notes

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 01 reached Terminal A (`synthesis_eligible: true`, 45 accepted
> claims, monopoly waiver disclosed).

The four-question failure-mode framework, answered against Section 01's
accepted claims (XRPL's three creator-token paradigms — IOUs/trust-lines,
NFTokens via XLS-20, MPTs via XLS-46).

---

## 1. What can fail?

**Token-paradigm misuse / migration trap.**
- An issuer who chose IOUs/trust-lines because XLS-20 (NFTs) didn't exist
  yet cannot migrate existing holdings to a new paradigm without each
  holder co-signing a redemption + re-mint cycle — the paradigms are
  account-keyed and on-ledger artifact types are not interchangeable.
- An issuer choosing MPTs gets the simpler unidirectional issuance model
  but loses the trust-line bidirectional + DEX-native compatibility that
  IOUs have. Decision is paradigm-locked at issuance time.

**Reserve-shortfall consequences for token holders.**
- Each NFTokenPage on a holder's account adds owner reserve. Holders with
  thin XRP balances can hit reserve shortfalls when accumulating NFTs;
  the NFTs do not disappear but the account's transactability is
  constrained until the reserve is restored.
- The same model applies to MPT holdings (each MPTokenIssuance reference)
  and to RippleState entries (trust lines).

**Amendment-state divergence.**
- XLS-20 (NFTs) and XLS-46 (MPTs) are amendments — a validator running a
  rippled binary that hasn't enabled them rejects the corresponding
  transactions. An issuer using a paradigm whose amendment is not yet
  network-supermajority-enabled cannot transact reliably.
- Inverse: clients (wallets, marketplaces, indexers) that don't recognise
  a token paradigm display the holdings as opaque or omit them entirely.

**Off-ledger durability of metadata.**
- NFToken metadata URIs (XLS-24) point off-ledger (IPFS, Arweave, HTTP).
  Origin URI failure is a separate failure surface from on-ledger state.
  Section 07 covers this; flag here so Section 01 readers know the
  metadata layer is its own concern.

**Issuer-control mismatch with holder expectations.**
- Issuer-set flags (freeze, clawback, transfer-fee caps) are immutable
  post-mint or live-toggleable depending on flag class; holders may
  expect immutability that isn't actually enforced. Section 04 covers
  this; flag here because Section 01 readers selecting a paradigm need
  to know the issuer-control surface differs across paradigms.

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| Reserve shortfall | **Holder** — deposit XRP to restore reserve. Cannot be repaired by issuer or protocol. |
| Wrong paradigm chosen at issuance | **Issuer** — mint a new issuance under the chosen paradigm; offer holders a redemption-and-re-mint path. Holders must opt in. |
| Amendment not yet supermajority-enabled | **Validator network** — validators vote in the amendment over the 2-week activation window (Section 06). Issuers and holders cannot accelerate. |
| Client/wallet doesn't recognise paradigm | **Off-ledger wallet/exchange/marketplace operator** — update client to parse new ledger-object types. Protocol cannot enforce. |
| Metadata URI 404 (off-ledger) | **Issuer or marketplace** — re-pin to IPFS, mirror to a durable host. Section 07. |
| Issuer revokes via clawback / freeze | **Issuer** — only. Protocol allows the operation; holder cannot prevent at the protocol layer. |
| rippled implementation bug affecting a paradigm | **XRPLF rippled maintainers** — patch and release; validators upgrade. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| Reserve shortfall | **on-ledger / holder-controlled** |
| Token-paradigm migration trap | **on-ledger / issuer-controlled** (with holder opt-in) |
| Amendment-state divergence | **on-ledger / protocol-controlled** (validator consensus) |
| Client recognition gap | **off-ledger / not-controlled-by-XRPL-protocol** |
| Off-ledger metadata loss | **off-ledger / issuer-controlled or marketplace-controlled** |
| Issuer revocation (clawback / freeze) | **on-ledger / issuer-controlled** |
| rippled implementation bug | **off-ledger / XRPLF-maintainer-controlled** (patch) → **on-ledger / validator-controlled** (upgrade) |

The control plane operates across both planes:
- On-ledger artifacts are introspectable via `account_objects`, `ledger_entry`, and
  amendment introspection RPCs.
- Off-ledger health (client support, metadata URI resolution, marketplace
  indexer caches) is monitorable only via off-ledger probes against each
  third-party operator.

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- Per-issuance object count (`MPTokenIssuance`, `NFTokenPage` totals,
  `RippleState` references) — drift indicates holder accumulation patterns.
- Per-account owner reserve usage — flag accounts approaching the
  reserve floor (drain risk → token-access lockout).
- Amendment status (`feature` RPC) — track which amendments the
  monitored validator set has enabled. Flag minority states for
  paradigms the issuer relies on.
- Issuer flag state (`AccountSet` flags) — flag transitions on
  `lsfGlobalFreeze`, `lsfNoFreeze`, transfer-fee changes. Section 04
  covers the flag surface in detail.
- Clawback events (XLS-39) — emit alerts on every clawback transaction
  affecting tracked holdings.

**Off-ledger surface:**
- Client/wallet support matrix — track whether major XRPL wallets
  (Xumm/XAMAN, Crossmark, Ledger app, etc.) recognise each paradigm
  the issuer uses. Adoption-shape matters for migration timing.
- Marketplace indexer freshness — track how long indexers (Bithomp,
  XRPSCAN, third-party NFT marketplaces) lag behind the ledger; stale
  indexers misrepresent holdings to end users.
- Metadata URI resolvability — periodic GET against every NFToken's
  `URI` field (Section 07 work).
- Amendment-pipeline news — pre-supermajority XLS standards in flight
  (xrpl.org standards governance pages, XRPL Standards GitHub repo).

**Cross-cutting alerts:**
- Paradigm-mix imbalance — if an issuer's holdings are concentrated in a
  paradigm whose amendment is at risk of reversal, surface the exposure.
- Reserve-shortfall lookahead — for accounts hosting many NFTokens,
  forecast reserve consumption against XRP balance.
- Implementation-version skew — if rippled releases since last issuance
  changed paradigm semantics (rare but possible per release notes),
  flag for issuer review.

---

## Synthesis-time disclosure (load-bearing per v0.3.1 waiver discipline)

Per the section-scoped `min_independent_publishers` waiver active on
this section, the section synthesis (`final-report.md` for the section)
must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the
specification (XLS standards), the implementation (rippled), and the
documentation (xrpl.org). Independent third-party sources contribute
adoption / market / interpretive context in later sections, but are not
authoritative for protocol semantics.

This disclosure is the third operator discipline that the v0.3.1 waiver
mechanism documents but does NOT enforce by code. The schema captures
the waiver in `research.yaml`; the freeze receipt fingerprints
`research.yaml`; the synthesis prose carries the disclosure into the
human-readable output.

---

## Status

- Section 01 chain: gate WARN, `synthesis_eligible: true`, 45 accepted
  claims, 0 blocking reasons, 1 waiver applied.
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state.
- These notes are scaffolding, not chain artifacts. Update or replace
  during synthesis-time per claim-ID grounding.
