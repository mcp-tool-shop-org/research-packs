# Section 06 — Failure-Mode Notes (META section)

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 06 reached Terminal A (`synthesis_eligible: true`, 56 accepted
> claims — highest of any section, 92% acceptance rate).

The four-question failure-mode framework, answered against Section 06's
accepted claims (XRPL amendment system + validator landscape + UNL
configuration). **Section 06 is the META section** — every prior section's
mechanism has an implicit Section 06 dependency on amendment activation
state.

**Synthesis contribution thesis (locked from advisor call):**
*XRPL token durability is not invariant — it tracks the amendment state of
the network. An issuer or holder must understand which amendments are
currently active, which are pending vote, which are obsoleted, and which
their tracked validators support. Validator distribution and UNL
configuration determine whether amendment activation timelines are
predictable for any given operator.*

---

## 1. What can fail?

**Amendment vote stalls (insufficient validator support).**
- Accepted claim: "Amendments that are vetoed by the network cannot be
  enabled." A proposed amendment that does not reach the 80% validator
  consensus threshold remains in voting state indefinitely (or fails
  outright). Operators planning to use a feature gated by an amendment
  in voting state cannot rely on activation timing.
- Accepted claim: "Amendments gain majority support through validators'
  consensus." The activation pathway requires sustained validator
  agreement; transient majority is insufficient.

**Amendment activates and changes prior-section assumptions.**
- Accepted claim: "Amendments specify changes to validation rules and
  protocol behavior." When an amendment activates (after the 2-week
  window following 80% support), it can alter:
  - Section 01 token-paradigm semantics (XLS-0020 enabled NFTs as a
    new paradigm; XLS-0033 / MPTokens enabled MPTs as a new paradigm).
  - Section 02 account-control mechanics (DisallowIncoming added new
    AccountSet flag controls).
  - Section 03 ledger-state representations (e.g., MPTokenIssuance
    ledger-entry came from XLS-0033 / MPTokens amendment).
  - Section 04 issuer controls (Clawback / XLS-0039 amendment enabled
    issuer-side fungible-token clawback that didn't exist before).
  - Section 05 transfer/trade mechanics (TokenEscrow amendment enabled
    fungible-token escrow; XLS-0020 amendment enabled NFT offers).
  - **Tokens issued before an amendment activates exist under
    pre-amendment semantics; behavior under post-activation
    transactions can shift.** This is the load-bearing cross-section
    failure mode.

**UNL drift between operators causes amendment-state divergence.**
- The UNL (Unique Node List) is operator-configured: each rippled
  operator chooses which validators to trust. Different UNL choices
  can produce different amendment-state views — a feature that is
  "active" on one UNL may be "voting" on another.
- Accepted claim: "Having more direct peer connections allows a server
  to fetch history from multiple peers in parallel and access a wider
  range of historical data." Peer connectivity is independent of UNL
  trust; an operator can be peer-connected to validators they don't
  trust and vice-versa.
- **Amendment-state is not a stable global property — it's a function
  of the operator's UNL.**

**Obsoleted amendments leave historical artifacts on-ledger.**
- Once an amendment activates and is later superseded (or operationally
  obsoleted), historical ledger entries that depended on the original
  amendment's semantics persist. A pack issued under the v0 semantics
  of an amendment continues to exist on-ledger after the amendment is
  superseded.
- Accepted claim: "The default vote for the amendment
  fixRemoveNFTokenAutoTrustLine is 'Yes'." `fix*`-prefixed amendments
  patch behavior of prior amendments; the original amendment's
  artifacts are not retroactively re-evaluated.

**Validator concentration risk (small UNL = single point of failure).**
- The UNL is operator-configurable; a small UNL concentrates trust.
  If an operator's UNL trusts only a handful of validators and one
  becomes compromised or unresponsive, the operator's amendment-state
  perception is degraded.
- Accepted claim: "Using public hubs provides access to safe
  connections to the XRP Ledger network." Public hubs amortize
  connection cost but don't solve UNL concentration.

**Amendment-blocked server.**
- Accepted claim: "Upgrading rippled to the newest version can unblock
  amendment blocked servers." A rippled instance running a binary that
  doesn't recognise an activated amendment cannot validate new ledgers
  — operationally amendment-blocked. The fix is upgrading the binary.
- This is a **client-side failure mode** that propagates into the
  control plane: if the operator's rippled query node is amendment-blocked,
  every other section's RPC introspection (account_info, account_objects,
  feature, server_info, etc.) returns stale data.

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| Amendment vote stall | **Validators** — vote / abstain via EnableAmendment pseudo-transaction. **UNL publishers** — change validator trust list (off-ledger, operator subscription). No "force vote" path. |
| Amendment activation changing prior-section semantics | **Validator network** — through the amendment activation process. Issuers and holders cannot prevent. |
| Pre-activation tokens entering post-activation network | **Issuers** — proactively migrate (issue new under post-amendment semantics). Holders cannot self-migrate. **No retroactive re-evaluation** by protocol. |
| UNL drift across operators | **UNL publisher / each operator** — converge via UNL subscription choice. Off-ledger coordination. |
| Validator concentration | **Operator** — diversify UNL. Off-ledger configuration. |
| Amendment-blocked server | **Operator** — upgrade rippled binary. The upgrade itself is off-ledger; effect on ledger-validation is on-ledger. |
| Amendment in voting state operationally needed | **None until vote completes.** Protocol does not allow "early activation" or operator override. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| Amendment voting | **on-ledger / validator-controlled** (EnableAmendment pseudo-tx) |
| UNL configuration | **off-ledger / operator-controlled** (rippled config + UNL publisher subscription) |
| rippled binary upgrade | **off-ledger / operator-controlled** (apt/yum/manual install) |
| Issuer migration to new semantics | **on-ledger / issuer-controlled** (Section 01-04 cross-ref for new mint/issuance) |
| Pre-amendment artifact persistence | **on-ledger / no-repair** (immutable property of XRPL ledger history) |
| Amendment governance mechanism | **protocol-controlled** (amendment system itself is a meta-feature; meta-amendments are theoretical but no precedent) |

The pattern: most Section 06 failures resolve at the validator network
level (consensus-driven) or off-ledger at the operator level (UNL
choice, binary upgrade). **There is no holder-side repair path for
amendment state — holders inherit whatever the network decides.**

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- `feature` — track amendment status per feature: enabled, supported but
  not enabled (voting), unsupported (potential amendment-block risk).
  This is the canonical query for the operator's amendment-state view.
- `server_info` — track validator quorum status, build version, network
  connectivity, amendment-blocked state (if the queried rippled is
  amendment-blocked, surface immediately).
- `Amendments` ledger-entry inspection — list all amendments the network
  has activated. Cross-reference against tracked amendments
  (Clawback, TokenEscrow, DisallowIncoming, NFTokenModify, XLS-20, XLS-33,
  XLS-39, fix*).
- `FeeSettings` ledger-entry — track base reserve + owner reserve values;
  amendment-driven fee changes manifest here.
- `NegativeUNL` ledger-entry — list validators currently disabled by
  consensus; an operator's effective quorum depends on this.

**Off-ledger surface:**
- xrpl.org `/resources/known-amendments` registry — canonical list of
  amendments with IDs and human-readable names. Cross-reference any
  on-ledger Amendment ID hash against this registry to identify the
  amendment by name.
- XRPLF/rippled releases (api.github.com/repos/XRPLF/rippled/releases)
  — release notes mention which amendments are introduced or affected
  per version. **Caveat:** the release-notes endpoint surfaces ALL
  recent releases, including operational concerns (GPG key rotation,
  packaging fixes) that aren't amendment-related. Filter for
  amendment-mention substrings.
- xls.xrpl.org rendered standards — for amendments still in proposal
  state, the XLS standards site has the canonical specification.
  Cross-reference voting-state amendments against the XLS-NN spec.
- UNL publisher feed (e.g., dRTW: dunl.ripplex.io) — track the operator's
  configured UNL list for changes. UNL drift is a leading indicator of
  amendment-state divergence.

**Cross-cutting alerts:**
- "Amendment activated affecting tracked tokens" — when an amendment
  with implications for Section 01-05 tokens activates, alert the
  operator with the amendment name + affected mechanism + cross-
  section impact.
- "Operator's rippled is amendment-blocked" — high-priority alert,
  query node is operationally degraded.
- "Tracked validator joined NegativeUNL" — UNL erosion signal.
- "UNL configuration drift" — operator's UNL list changed since last
  audit; verify intent.

---

## Cross-section synthesis dependency map (load-bearing for freeze-time weaving)

Section 06 is the META section — every prior section's mechanism has an
implicit Section 06 dependency. The pack synthesis at freeze time must
weave Section 06's amendment-state framework across the prior sections:

| Section | Mechanism | Section 06 dependency |
|---------|-----------|----------------------|
| 01 | NFToken paradigm | XLS-0020 NFTs amendment activation (Section 06 accepted: "XLS-0020 introduces support for native non-fungible tokens on the XRP Ledger") |
| 01 | MPTokens paradigm | XLS-0033 / MPTokens amendment activation (Section 06 accepted: "MPTokens" amendment + MPT mechanics claims) |
| 02 | DisallowIncoming, AccountDelete | DisallowIncoming amendment + fixAccountDelete (Section 06 accepted: "The XRPL protocol amendment makes it possible to delete accounts" + 5 amendment IDs by hash) |
| 03 | MPTokenIssuance ledger-entry | XLS-0033 / MPTokens amendment (cross-ref: Section 03 "MPTokenIssuance entries require the MPTokensV1 amendment") |
| 04 | Clawback | XLS-0039 / Clawback amendment (cross-ref: Section 04 "Clawback transactions require the Clawback amendment to be enabled") — **NOT explicitly named in Section 06 accepted claims; synthesis must bridge from Section 04** |
| 04 | NFTokenModify | DynamicNFT amendment (cross-ref: Section 04 "NFTokenModify transactions require the DynamicNFT amendment to be loaded") — **NOT in Section 06 accepted claims** |
| 05 | TokenEscrow for fungible | TokenEscrow amendment (cross-ref: Section 05 "EscrowCreate transactions require the TokenEscrow amendment for fungible tokens") — **NOT in Section 06 accepted claims** |
| 05 | NFT offers | XLS-0020 NFTs amendment (cross-ref: Section 05 "The NFTokenCreateOffer transaction requires the NonFungibleTokensV1_1 amendment") |

**Cross-section dependency assessment: STRONG ENOUGH for synthesis weaving.**
Section 06's general amendment-system mechanics are well-covered. Specific
amendments are **partially explicit**: XLS-0020 (NFTs) + XLS-0033 (MPTs) are
named directly in Section 06's accepted claims. Clawback / DynamicNFT /
TokenEscrow / DisallowIncoming are **implicit through cross-section
references** — prior sections explicitly named these amendment dependencies,
and Section 06 provides the meta-framework.

The pack synthesis at freeze time must:
1. Take Section 06's amendment-system framework.
2. Surface explicit Section 06 amendments (XLS-0020, XLS-0033,
   fixRemoveNFTokenAutoTrustLine, fixAccountDelete) plus 5 hash-only
   amendment IDs cross-referenced via known-amendments registry.
3. Bridge via prior sections' accepted claims for Clawback, DynamicNFT,
   TokenEscrow, DisallowIncoming activation contexts.
4. Weave the durability thesis: every prior section's mechanism is
   amendment-state-dependent.

---

## Synthesis-time disclosure

Per the section-scoped `min_independent_publishers` waiver, the section
synthesis must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the amendment-
system spec across xrpl.org concept docs (amendments, consensus-protocol,
peer-protocol), the EnableAmendment pseudo-transaction reference, the
Amendments / FeeSettings / NegativeUNL ledger-entry references, the
JSON-RPC method references (feature, server_info), the known-amendments
registry on xrpl.org/resources/, the rendered XLS-0020 + XLS-0033
standards on xls.xrpl.org, and the rippled releases via
api.github.com/repos/XRPLF/rippled/releases (typed primary as canonical
release endpoint). The single GitHub Search API issue source provides
supplementary developer-discussion evidence; it is typed forum.

**Section 07 (metadata and off-chain durability) will NOT carry this
waiver pattern.** IPFS / Arweave / HTTP / marketplace-indexer publishers
contribute genuinely independent evidence for metadata-layer questions.

---

## Notable Section 06 reviewer holds (5 watch cases all HELD)

1. **Amendment-state ≠ feature-availability.** No accepted claim conflates
   "amendment exists" with "feature available." HELD.
2. **Validator quorum specifics.** No accepted claim says "simple majority"
   or "instant" activation. The 80% / 2-week specifics are NOT explicitly
   named in any accepted claim — this is a coverage gap (synthesis must
   supply from canonical) but NOT a watch-case violation. HELD.
3. **XRPL amendment governance unique.** No DAO / token-vote / on-chain
   governance proposal claims. Validator-driven preserved. HELD.
4. **Specific amendments distinct.** XLS-0020, XLS-0033 / MPTokens,
   fixRemoveNFTokenAutoTrustLine named distinctly. 5 amendment IDs by
   hash surface (operator must cross-reference). No lump-grouping. HELD.
5. **Validator distribution not stable globally.** No "the XRPL
   validators" as monolithic. UNL framing implicit. HELD.

The reviewer caught **1 blocking finding** at per-claim level: scope_widening
on an MPTokenIssuance removal claim with universal "all/always" quantifiers
when the source discussed a single case. Routed to needs_scope_repair;
correctly contained.

**F-28 outcome (reverses for Section 06):** BOTH xls.xrpl.org sources
contributed substantial accepted claims — XLS-0033 contributed 9, XLS-0020
contributed 9. Section 04's XLS-0039 (19KB) contributed 0; Section 06's
XLS sources are 91-114KB (5-6x larger). **F-28 is a content-size pattern,
not a domain-source pattern.**

**F-29 outcome (mild on rippled-releases):** 8 of 9 rippled-releases
accepted claims paraphrase the same GPG-key-rotation event from different
release notes. Per-claim-correct but substantively duplicative. Synthesis-
time concern: the 8 GPG-rotation claims should be condensed into 1-2
prose sentences, not 8 separate citation points.

---

## Status

- Section 06 chain: gate WARN, `synthesis_eligible: true`, 56 accepted
  claims (highest of any section), 0 blocking reasons, 1 waiver applied.
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state. **Six sections now gated** (01,
  02, 03, 04, 05, 06); one remains (07 — the multi-publisher exception).
- Source-card typing: 13 primary + 1 forum. All re-typed in Session H.
- These notes are scaffolding, not chain artifacts.
