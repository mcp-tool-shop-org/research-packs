# Section 04 — Failure-Mode Notes

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 04 reached Terminal A (`synthesis_eligible: true`, 27 accepted
> claims, monopoly waiver disclosed, 12 primary sources after re-typing).

The four-question failure-mode framework, answered against Section 04's
accepted claims (XRPL issuer-side controls and immutability: NFTokenMint
flags, NFTokenModify, NFTokenBurn, AccountSet flags, Clawback (XLS-39),
TrustLine freeze, MPTokenIssuanceSet, transfer-fee caps).

**Synthesis contribution target (locked from advisor call):**
*Durability depends on which issuer powers are already fixed, which remain
mutable, and which require protocol/amendment support.*

---

## 1. What can fail?

**Immutable mint-time mistake.**
- NFTokenMint flags are set at mint time and **cannot be changed after
  creation** ("NFToken flags are immutable and cannot be changed after
  creation" — accepted claim from `src_d0882a19791f`). An issuer who
  selects the wrong tfTransferable / tfBurnable / tfOnlyXRP / tfTrustLine
  flag combination at mint cannot recover that decision via any
  subsequent transaction. The minted NFToken's flag set is the
  permanent contract with all future holders.
- This is the strongest immutability surface in the section. Synthesis
  emphasis: mint-time decisions on flags are protocol-level fixed; no
  "I'll fix it later" recovery vector exists.

**Issuer retains more post-mint control than holders expect.**
- Clawback (XLS-39) is enabled per-issuer via the `lsfAllowTrustLineClawback`
  AccountSet flag at account-setup time; once enabled (and an issuance
  exists), the issuer can claw back fungible-token balances from any
  trust line. **Holders may not know the issuer enabled Clawback when
  the trustline was created.** The capability is on-ledger and visible
  via account_info, but only if the holder checks.
- TrustLine freeze (issuer-side, via TrustSet) and Global Freeze (issuer
  account-wide, via AccountSet `lsfGlobalFreeze`) similarly retain
  post-issuance control over fungible-token mobility.
- NFTokenModify (post-mint metadata mutation) is gated by the DynamicNFT
  amendment ("NFTokenModify transactions require the DynamicNFT amendment
  to be loaded" — accepted claim from `src_ff9fbb4f8527`). On networks
  where DynamicNFT is enabled, an issuer who set the appropriate flag
  at mint can mutate metadata after-the-fact. Holders on networks
  expecting "NFTs are immutable" face a surprise.

**Freeze/clawback capability changes holder assumptions.**
- "XRP cannot be frozen in the XRPL" (accepted claim) — XRP itself is
  freeze-immune. **Issued tokens (IOUs / fungible non-XRP) CAN be
  frozen.** A holder treating issued tokens as "the same as XRP" is
  underestimating the issuer's reach.
- "An address cannot enable Individual Freeze if it has enabled No
  Freeze" (accepted claim) — the lsfNoFreeze flag, set by an issuer,
  permanently disables that issuer's ability to enable Individual
  Freeze on their issued tokens. Once set, it's on-ledger immutable.
  A pro-holder issuer commits to this; holders on tokens with
  `lsfNoFreeze` set have stronger guarantees than holders on tokens
  without.

**Transfer-fee or mutability settings conflict with marketplace expectations.**
- TransferFee on NFTs (set at mint via NFTokenMint) and TransferFee on
  MPTs (set at MPTokenIssuance creation, mutable via MPTokenIssuanceSet
  — "TransferFee values are between 0 and 50,000 inclusive" from
  `src_90368c8bfc17`) have different lifecycles. NFT TransferFee is
  immutable post-mint; MPT TransferFee can change via
  MPTokenIssuanceSet. Marketplaces displaying a single
  "transfer fee" UI element across token types may misrepresent
  the fee's mutability to users.
- Fungible-token issuer transfer fees (`AccountSet TransferRate`) are
  yet a third surface; settable and modifiable by the issuer via
  AccountSet. **All three transfer-fee surfaces are token-class-specific
  and have different mutability semantics.**

**Protocol amendments change available controls.**
- NFTokenMint requires `NonFungibleTokensV1_1`; NFTokenModify requires
  `DynamicNFT`; Clawback requires the `Clawback` amendment;
  MPTokenIssuance requires `MPTokensV1`. **Each control surface
  depends on its enabling amendment being supermajority-active on the
  validator network.**
- A token issued before an amendment activates exists in pre-amendment
  semantics; behavior under post-activation transactions can shift.
  Operator-side concern: an issuer planning future control use must
  track amendment-pipeline status (Section 06 territory).

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| Immutable NFTokenMint flag mistake | **No one.** Repair is "don't make the mistake." Only path: mint a new NFT with corrected flags; old NFT stays as-issued. |
| Holder-unaware Clawback enabled at issuer setup | **Holder** — check `lsfAllowTrustLineClawback` on issuer's AccountRoot before accepting trust line. **Issuer** cannot retroactively disable clawback once any issuance exists. |
| Holder-unaware lsfNoFreeze NOT set | **Issuer** — set lsfNoFreeze before issuance to commit to no-freeze permanently. **Holder** — check lsfNoFreeze state before accepting trust line; cannot force-set it. |
| Trustline freeze active on holder's trust line | **Issuer** — toggle freeze off via TrustSet. **Holder** cannot self-clear. |
| MPTokenIssuance TransferFee changed unexpectedly | **Issuer** — issuer sets fee via MPTokenIssuanceSet. Holder has no protocol-level vote on fee changes. |
| Pre-amendment token under post-amendment semantics | **Validator network** — through the amendment activation process; once activated, semantics apply to all tokens. **Issuer** has no override. |
| Reviewer-flagged scope_widening (Section 04 saw 1 blocking finding) | **Operator** — tighter claim drafting at synthesis time. Reviewer caught this at per-claim level; section-level not blocked. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| NFTokenMint flag immutability | **on-ledger / issuer-controlled-pre-mint-only** — no post-mint repair |
| Clawback enablement | **on-ledger / issuer-controlled-pre-issuance** (lsfAllowTrustLineClawback) — irreversible once issuance exists |
| Global Freeze toggle | **on-ledger / issuer-controlled** (lsfGlobalFreeze; mutable) |
| Individual Freeze toggle | **on-ledger / issuer-controlled** (per-trustline freeze; mutable unless lsfNoFreeze set) |
| lsfNoFreeze (issuer commits to no-freeze) | **on-ledger / issuer-controlled-immutable-once-set** |
| NFTokenModify post-mint metadata mutability | **on-ledger / issuer-controlled-if-amendment-active-and-mint-flag-set** |
| MPTokenIssuanceSet (post-issuance MPT controls) | **on-ledger / issuer-controlled** (mutable) |
| Fungible-token TransferRate (AccountSet) | **on-ledger / issuer-controlled** (mutable) |
| NFT TransferFee (NFTokenMint) | **on-ledger / issuer-controlled-pre-mint-only** |
| MPT TransferFee (MPTokenIssuance/Set) | **on-ledger / issuer-controlled** (mutable post-issuance) |
| Clawback amendment availability | **on-ledger / protocol-controlled** (validator amendment) |
| DynamicNFT amendment availability | **on-ledger / protocol-controlled** |
| MPTokensV1 amendment availability | **on-ledger / protocol-controlled** |
| NonFungibleTokensV1_1 amendment availability | **on-ledger / protocol-controlled** |

The synthesis-contribution-target pattern emerges from this table:

- **Already fixed (no repair):** NFTokenMint flags + NFT TransferFee
  (mint-time-only); lsfNoFreeze (irreversible once set); Clawback
  enablement (irreversible once an issuance exists).
- **Mutable (issuer can repair):** Global Freeze; per-trustline freeze
  (unless lsfNoFreeze); fungible TransferRate; MPT TransferFee +
  MPTokenIssuanceSet; NFTokenModify metadata (if DynamicNFT active +
  mint-flag set).
- **Requires protocol/amendment support:** all amendment-gated
  capabilities (Clawback, DynamicNFT, MPTokensV1,
  NonFungibleTokensV1_1, future XLS-NN).

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- `account_info` per tracked issuer account — flag-state polling for
  `lsfDefaultRipple`, `lsfRequireAuth`, `lsfDisallowXRP`,
  `lsfGlobalFreeze`, `lsfNoFreeze`, `lsfAllowTrustLineClawback`. Flag
  transitions surface every issuer-side power change.
- `account_info` per tracked HOLDER account holding issued tokens —
  same flag-state polling on the issuer side, derived from the holder's
  trust-line counterparty.
- `account_objects` per tracked holder — RippleState entries with
  `lsfLowFreeze` / `lsfHighFreeze` flag state per trust line. Holders
  can detect issuer-side freeze without polling the issuer directly.
- Per-issuance `MPTokenIssuance` ledger-entry inspection — track
  TransferFee changes and other mutable fields between snapshots.
- Per-mint NFTokenID structure inspection — the NFTokenID field
  encodes the immutable mint-time flags (`tfTransferable`,
  `tfBurnable`, etc.) and TransferFee. Holders can decode the
  NFTokenID to recover the mint-time contract without trusting wallet
  rendering.
- `feature` JSON-RPC for amendment status — track Clawback,
  DynamicNFT, MPTokensV1, NonFungibleTokensV1_1 majority and
  activation state.

**Off-ledger surface:**
- Wallet/marketplace UI fidelity — does the wallet display
  `lsfAllowTrustLineClawback` state on issuer accounts before holders
  accept trust lines? Does the marketplace display NFT TransferFee as
  "immutable" vs MPT TransferFee as "mutable"? UI gaps inherit holder
  surprise risk.
- Amendment-pipeline news — XLS standards in flight (xls.xrpl.org,
  XRPLF/XRPL-Standards GitHub) that propose new issuer controls or
  modify existing ones. A new amendment can shift the
  already-fixed/mutable boundary.
- Marketplace policy — third-party marketplace operators may layer
  their own controls on top of protocol controls (e.g., refusing to
  list NFTs from issuers with `lsfAllowTrustLineClawback` enabled).
  Track marketplace policy changes as a separate signal.

**Cross-cutting alerts:**
- "Issuer added Clawback to a non-clawback-disclosed token line" —
  watch issuer AccountRoot flag transitions; alert when
  `lsfAllowTrustLineClawback` goes 0→1 on accounts holders trust.
- "Issuer enabled Global Freeze" — flag transition surface; alerts
  every holder of issued tokens.
- "Pre-amendment token entering post-amendment-active network" —
  forecast amendment activation against the issuer's token catalog;
  flag tokens whose semantics may shift.
- "TransferFee increased on MPT" — issuer-side fee change on mutable
  MPT; surface to holders before next transfer.

---

## Synthesis-time disclosure (load-bearing per v0.3.1 waiver discipline)

Per the section-scoped `min_independent_publishers` waiver active on
this section, the section synthesis (`final-report.md` for the section)
must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the issuer-control
spec across xrpl.org transaction-type references (NFTokenMint,
NFTokenModify, NFTokenBurn, AccountSet, TrustSet, Clawback,
MPTokenIssuanceSet), the fungible-token freezes concept page, the
NFToken data-type reference, the AccountRoot + MPTokenIssuance
ledger-entry references, and the rendered XLS-0039 (Clawback) standard
on xls.xrpl.org. The single GitHub Search API issue source provides
supplementary clawback/freeze/NFT/MPT edge-case evidence; it is typed
forum (developer discussion), not first-party canonical.

This disclosure mirrors the discipline applied in Sections 01, 02, 03.

**Section 07 (metadata and off-chain durability) will NOT carry this
waiver pattern.** IPFS / Arweave / HTTP / marketplace-indexer publishers
contribute genuinely independent evidence for metadata-layer questions,
where the global publisher-diversity floor remains the correct guard.

---

## Notable section-04 reviewer holds

The reviewer correctly held all five scope boundaries the kickoff flagged:

1. **No collapsed "issuer controls" generic claims.** Every accepted
   claim references a specific mechanism (NFTokenMint, NFTokenModify,
   AccountSet, TrustSet, Clawback, MPTokenIssuance, NFToken, AccountRoot,
   fungible-token freezes) by name. No claims of the form "issuers can
   do X across all tokens" slipped through.
2. **Immutable vs mutable distinction preserved.** The accepted claim
   "NFToken flags are immutable and cannot be changed after creation"
   explicitly captures this. Mutable mechanisms (AccountSet flags,
   MPTokenIssuanceSet) are described with their amendment dependencies
   intact.
3. **Clawback semantics not projected across token types.** The two
   accepted Clawback claims stayed XLS-39-shaped: "The amount to claw
   back must not be zero" and "Clawback transactions require the
   Clawback amendment to be enabled." No claim projected Clawback
   semantics onto NFTokens or MPTs.
4. **TrustLine-freeze NOT projected onto NFTokens or MPTs.** Freeze
   claims stayed fungible-token-shaped (the source was fungible-token
   freezes concept page). No "TrustLine freeze applies to NFTokens"
   projections.
5. **Transfer-fee caps stay token-specific.** The "TransferFee values
   are between 0 and 50,000 inclusive" claim came from MPTokenIssuance
   ledger-entry; scope is MPT. No NFT/fungible/MPT TransferFee
   conflation.

The reviewer also caught **1 blocking finding** at the per-claim level
on a forum-source claim that generalized rippled's `to_string` codebase
behavior to all inputs. Category: scope_widening. The reviewer correctly
treated this as a per-claim issue (routing it to needs_scope_repair),
not a section-level block. Strong evidence that forum-typed sources
contribute supplementary signal as designed without polluting the
canonical claim set.

---

## Status

- Section 04 chain: gate WARN, `synthesis_eligible: true`, 27 accepted
  claims, 0 blocking reasons, 1 waiver applied (min_independent_publishers).
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state. **Four sections now gated** (01,
  02, 03, 04); three remain (05, 06, 07).
- Source-card typing: 12 primary (XRPL Foundation canonical, including
  the NEW xls.xrpl.org surface) + 1 forum (api.github.com developer
  discussion). All re-typed in Session F via the new global pre-chain
  audit step (F-27 mitigation). Audit also restored Session D/E
  re-typings on overlap source cards (AccountSet, MPTokenIssuance,
  AccountRoot) that Section 04's gather had reverted.
- These notes are scaffolding, not chain artifacts. Update or replace
  during synthesis-time per claim-ID grounding.
