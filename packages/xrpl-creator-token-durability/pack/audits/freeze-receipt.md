# Freeze Receipt: What makes XRPL creator-token holdings durable over time — across token-standard versions, account access changes, and ledger-state evolution — and what should a creator-side control plane track to keep them runnable, transferable, and provable?

**Verdict:** [FROZEN]
**Pack ID:** `000017a92c74`
**Frozen at:** 2026-05-10T00:25:19.025Z

> Freeze locks completed research truth. Every artifact below carries a sha256 fingerprint. The pack is now immutable evidence; any further mutation invalidates the receipt.

## Counts

- **Sources:** 80
- **Claims:** 243
- **Contradictions:** 0
- **Review findings:** 0
- **Gate results:** 7

## Sections

| Section | Status | Accepted claims | Sources | Contradictions |
|---|---|---|---|---|
| `01-token-surface-and-standards` | frozen | 45 | 0 | 0 |
| `02-account-and-key-management` | frozen | 32 | 0 | 0 |
| `03-on-ledger-state-and-reserves` | frozen | 42 | 0 | 0 |
| `04-issuer-controls-and-immutability` | frozen | 27 | 0 | 0 |
| `05-transfer-and-trade-mechanics` | frozen | 30 | 0 | 0 |
| `06-amendment-and-validator-landscape` | frozen | 56 | 0 | 0 |
| `07-metadata-and-off-chain-durability` | frozen | 24 | 0 | 0 |

## Citation coverage

- **Accepted claims:** 243
- **Cited in synthesis:** 243
- **Uncited accepted (informational):** 0

## Unresolved contradictions disclosed

_None._

## Waivers disclosed

- **source_floor.01-token-surface-and-standards.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 01 defines XRPL token surfaces from canonical protocol sources.
The authoritative source of truth is intentionally concentrated in XRPL
Foundation documentation, XLS standards, and rippled implementation/release
records. Third-party publishers can explain or interpret these standards,
but they are not primary authorities for protocol semantics.

  - Compensating: Sources span multiple canonical artifact types: xrpl.org docs, rendered XLS standards, raw standards markdown, rippled release data, and GitHub implementation discussions.
  - Compensating: Claims remain span-grounded and reviewed individually.
  - Compensating: Section synthesis must disclose the single-foundation source concentration.
  - Compensating: Third-party sources may be added in later sections for adoption, marketplace, metadata, or operational interpretation, but are not required for protocol-definition truth.
- **source_floor.02-account-and-key-management.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 02 documents XRPL account and key management semantics —
AccountRoot fields, master key disablement (lsfDisableMaster),
regular key (SetRegularKey), signer-list-based multi-signing
(SignerListSet), ticket-based authorization (TicketCreate), account
deletion (AccountDelete), and permission/delegation values. The
authoritative source of truth for these mechanics is intentionally
concentrated in XRPL Foundation documentation at xrpl.org and the
rippled implementation. Whether SetRegularKey, SignerListSet,
AccountDelete, or AccountSet behave a particular way is defined
by the protocol-defining body; third-party explainers describe how
operators consume these mechanics but cannot provide more
authoritative ground truth than xrpl.org's transaction-type and
ledger-entry-type references.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org account concept docs (Accounts overview, cryptographic-keys, multi-signing, tickets), xrpl.org transaction-type references (AccountSet, SetRegularKey, SignerListSet, AccountDelete, TicketCreate), xrpl.org ledger-entry-type references (AccountRoot, SignerList), permission-values data-type reference, and account_info JSON-RPC method documentation.
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled AccountDelete + NFT edge cases) are typed as forum (developer-discussion supplementary) and provide deletion-precondition edge-case evidence beyond what canonical docs surface; canonical claims still trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver. Wallet-UX claims (e.g., 'wallet provides signer UI') and ticket-as-key-recovery conflations are wallet-feature or category errors, not protocol claims, and per-claim findings should route them to scope_repair or rejection without the waiver covering for the mismatch.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01 and Section 03 discipline. Account and key semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **source_floor.03-on-ledger-state-and-reserves.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 03 documents XRPL on-ledger state representations (NFTokenPage,
MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot) and the
reserve mechanics (base + owner reserve) that govern account-level
token storage. The authoritative source of truth for these ledger-entry
types and the JSON-RPC methods that read them (account_objects,
ledger_entry, account_info) is intentionally concentrated in XRPL
Foundation documentation at xrpl.org and the rippled implementation.
These artifacts define the on-ledger schema by construction; third-party
publishers describe how operators consume them, but cannot provide
authoritative ground truth for the schema itself.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org ledger-entry-type reference pages (NFTokenPage, MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot), xrpl.org reserve-concept documentation, xrpl.org JSON-RPC method documentation (account_objects, ledger_entry, account_info), and the ledger-entry-types index page.
  - Compensating: Supplementary GitHub Search API issues from XRPLF/rippled are typed as forum (developer-discussion, not first-party canonical) and provide deletion-edge-case evidence; canonical claims trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01's discipline. Each ledger-entry-type claim's authoritative basis is the protocol foundation's own definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **source_floor.05-transfer-and-trade-mechanics.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 05 documents XRPL transfer and trade mechanics — direct
NFToken offers (NFTokenCreateOffer / NFTokenAcceptOffer /
NFTokenCancelOffer including brokered mode), fungible-token DEX
mechanics (OfferCreate / OfferCancel), Payment (XRP and cross-
currency with pathfinding), Escrow (EscrowCreate / EscrowFinish),
and JSON-RPC introspection methods (nft_sell_offers, nft_buy_offers,
account_nfts, account_offers) plus the Offer and NFTokenOffer
ledger-entry types. The authoritative source of truth for how these
transactions and ledger objects behave — including the brokered
NFTokenAcceptOffer pattern, cross-currency payment pathfinding, and
escrow execution semantics — is intentionally concentrated in XRPL
Foundation documentation at xrpl.org and the rippled implementation.
Third-party explainers describe how operators consume these
mechanisms but cannot provide more authoritative ground truth than
the protocol-defining body.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org transaction-type references (NFTokenCreateOffer, NFTokenAcceptOffer, NFTokenCancelOffer, OfferCreate, OfferCancel, Payment, EscrowCreate, EscrowFinish), xrpl.org concept docs (cross-currency-payments), xrpl.org JSON-RPC method references (nft_sell_offers, nft_buy_offers, account_nfts, account_offers), and xrpl.org ledger-entry-type references (Offer, NFTokenOffer).
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled NFT offer brokered edge cases) are typed as forum (developer-discussion supplementary); canonical claims still trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim findings continue to apply normally regardless of waiver. Specific scope discipline for this section: do NOT collapse NFT offer mechanics into fungible DEX OfferCreate (different transactions, different ledger-entry types, different state-machines); brokered NFTokenAcceptOffer must stay distinct from direct accept (most-misunderstood XRPL feature); cross-currency payments / pathfinding apply to fungible/payment flows NOT NFT transfer; escrow mechanics are NOT universal token custody (XRP + amendment-gated IOU/MPT, NFT escrow may be separate or absent); offer existence is NOT liquidity guarantee; transferability depends on flags + issuer controls + reserve/offer state from prior sections.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Sections 01-04 discipline. Transfer and trade mechanics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap. The synthesis contribution thesis for this section: a creator token is not durable just because it exists on-ledger — it must remain transferable under the token standard's offer/payment/escrow mechanics, and those mechanics differ sharply across NFTokens, trustline tokens, MPTs, and XRP paths.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **source_floor.06-amendment-and-validator-landscape.min_independent_publishers** — disclosed in `synthesis/decision-brief.md`, `synthesis/final-report.md`
  - Reason: Section 06 documents XRPL's amendment system and validator landscape
— the meta-layer mechanism by which every other section's protocol
behavior can change. Topics include the 80% validator consensus
threshold, 2-week activation window, EnableAmendment pseudo-
transaction, specific amendments (XLS-20 non-fungible tokens,
XLS-33 multi-purpose tokens, XLS-39 Clawback, DisallowIncoming,
TokenEscrow, NFTokenModify), amendment deprecation paths, the
Amendments ledger-entry, the FeeSettings ledger-entry, the
NegativeUNL ledger-entry, validator distribution, and UNL
(Unique Node List) operator configuration. The authoritative
source of truth for amendment-system mechanics, voting thresholds,
and activation timelines is intentionally concentrated in XRPL
Foundation documentation (xrpl.org concepts and references;
xls.xrpl.org rendered standards) and the rippled implementation
(release notes via api.github.com/repos/XRPLF/rippled/releases as
canonical release endpoint, Feature.cpp). Third-party explainers
describe how operators consume these mechanisms but cannot provide
more authoritative ground truth than the protocol-defining body
and the validator code that enforces consensus.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org concept docs (amendments, consensus-protocol, peer-protocol, /resources/known-amendments registry), xrpl.org pseudo-transaction-type reference (EnableAmendment), xrpl.org ledger-entry-type references (Amendments, FeeSettings, NegativeUNL), xrpl.org JSON-RPC method references (feature, server_info), xls.xrpl.org rendered XLS-0020 (NFTs) + XLS-0033 (MPTs) standards, and api.github.com/repos/XRPLF/rippled/releases as canonical release endpoint (typed primary, not forum).
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled amendment + majority + activation discussions) are typed as forum (developer-discussion supplementary); canonical claims still trace to xrpl.org / xls.xrpl.org / rippled-releases first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim findings continue to apply normally regardless of waiver. Specific scope discipline for this section: amendment-state ≠ feature-availability (an amendment can be voting / majority-not-yet-activated / activated / obsoleted — distinct states); validator quorum is 80% (NOT simple majority) and 2-week window (NOT instant); per-amendment voting (NOT pack voting); XRPL amendment governance is unique (NO token-vote, NO on-chain governance proposals, NO DAO mechanisms — validator-driven via UNL); specific amendments have distinct identities (XLS-20 ≠ XLS-33 ≠ XLS-39, do NOT lump as 'NFT amendments' or 'token amendments'); validator distribution is NOT a stable global property (UNL is operator-configured).
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Sections 01-05 discipline. Amendment-system semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap. The synthesis contribution thesis: XRPL token durability is amendment-state-dependent — the control plane must track amendment state per protocol concern (NFTs, MPTs, Clawback, TokenEscrow, DisallowIncoming) and per UNL configuration. Section 06's accepted claims will surface implicit dependencies in Sections 01-05's accepted claims (e.g., 'XLS-20 enabled NFTokens' cross-references Section 01's NFToken paradigm). The pack synthesis at freeze time must weave Section 06's amendment-state framework across all prior sections' mechanism claims.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.

## Integrity checks

- [PASS] **pack_audit_ready** — pack-audit verdict=ready_for_synthesis
- [PASS] **handoff_synthesis_ready** — cowork-handoff mode=synthesis_ready
- [PASS] **synthesis_workspace_present** — 5/5 synthesis files hashed
- [PASS] **final_report_cites_accepted_claims_only** — 84 citation(s); 0 unknown, 0 repair/rejected
- [PASS] **unresolved_contradictions_disclosed** — 0 contradiction(s) checked
- [PASS] **waivers_disclosed** — 5 waiver(s) checked
- [PASS] **canonical_artifacts_fingerprinted** — 132 artifact(s) hashed

## Synthesis fingerprints

| Path | Bytes | sha256 |
|---|---|---|
| `synthesis/cross-section-map.json` | 2541890 | `28f3fd5960c0e9f0…` |
| `synthesis/cross-section-map.md` | 1862614 | `f365031e99ddbba9…` |
| `synthesis/decision-brief.md` | 32513 | `616c01c7db7e6916…` |
| `synthesis/working-report.md` | 46926 | `1b5934c1ca6f55e1…` |
| `synthesis/final-report.md` | 26763 | `8a8b779962438db4…` |

## Canonical artifact fingerprints

Total: 132 files

| Path | Bytes | sha256 |
|---|---|---|
| `research.yaml` | 21086 | `80a10a2ebd88917d…` |
| `sections/01-token-surface-and-standards/claims.jsonl` | 289976 | `8dc7fd4b571c01f6…` |
| `sections/01-token-surface-and-standards/sources.jsonl` | 639 | `f93862f69ae0f50c…` |
| `sections/01-token-surface-and-standards/claim-reviews.jsonl` | 226056 | `b3081199d55167fa…` |
| `sections/01-token-surface-and-standards/gates.yaml` | 375 | `4e72e808d6148a1a…` |
| `audits/01-token-surface-and-standards-gate.json` | 62931 | `49587033759721a0…` |
| `audits/01-token-surface-and-standards-review.json` | 124204 | `a7455bc16b42be1a…` |
| `audits/01-token-surface-and-standards-findings.jsonl` | 567682 | `3ae7ad0b4169bdb9…` |
| `sections/02-account-and-key-management/claims.jsonl` | 164932 | `18d170d6524e5d9a…` |
| `sections/02-account-and-key-management/sources.jsonl` | 994 | `02404dd0d33837fd…` |
| `sections/02-account-and-key-management/claim-reviews.jsonl` | 15685 | `663a46c234fed032…` |
| `sections/02-account-and-key-management/gates.yaml` | 373 | `382ef18f867eb093…` |
| `audits/02-account-and-key-management-gate.json` | 47513 | `4259046e951101cc…` |
| `audits/02-account-and-key-management-review.json` | 65631 | `3faa7b842762383f…` |
| `audits/02-account-and-key-management-findings.jsonl` | 38475 | `bd9c1a791c0a98eb…` |
| `sections/03-on-ledger-state-and-reserves/claims.jsonl` | 187690 | `7d2a05d01a82b8c1…` |
| `sections/03-on-ledger-state-and-reserves/sources.jsonl` | 923 | `9a016e794d97b364…` |
| `sections/03-on-ledger-state-and-reserves/claim-reviews.jsonl` | 24454 | `cabd8bf6100505ba…` |
| `sections/03-on-ledger-state-and-reserves/gates.yaml` | 363 | `40d983754c1c0097…` |
| `audits/03-on-ledger-state-and-reserves-gate.json` | 52120 | `9096af915056fbeb…` |
| `audits/03-on-ledger-state-and-reserves-review.json` | 100695 | `15e830652c9504d2…` |
| `audits/03-on-ledger-state-and-reserves-findings.jsonl` | 58965 | `383d4ca44d8e76ec…` |
| `sections/04-issuer-controls-and-immutability/claims.jsonl` | 163353 | `52d39e5d94e9aa2b…` |
| `sections/04-issuer-controls-and-immutability/sources.jsonl` | 923 | `aa63b2821da7309f…` |
| `sections/04-issuer-controls-and-immutability/claim-reviews.jsonl` | 17194 | `50a43d441f33660e…` |
| `sections/04-issuer-controls-and-immutability/gates.yaml` | 403 | `28aa164f4a8501f2…` |
| `audits/04-issuer-controls-and-immutability-gate.json` | 45194 | `ca55a8f017b46d9c…` |
| `audits/04-issuer-controls-and-immutability-review.json` | 75923 | `b13e4d37aaaf3bf3…` |
| `audits/04-issuer-controls-and-immutability-findings.jsonl` | 45571 | `68839f8d5ab013a2…` |
| `sections/05-transfer-and-trade-mechanics/claims.jsonl` | 144911 | `8a5f42fbc4b150fe…` |
| `sections/05-transfer-and-trade-mechanics/sources.jsonl` | 1136 | `a6f621988068d32a…` |
| `sections/05-transfer-and-trade-mechanics/claim-reviews.jsonl` | 19235 | `05012c78e554bb76…` |
| `sections/05-transfer-and-trade-mechanics/gates.yaml` | 401 | `926eaf69f9ea1d45…` |
| `audits/05-transfer-and-trade-mechanics-gate.json` | 45062 | `617be9e089e35a1f…` |
| `audits/05-transfer-and-trade-mechanics-review.json` | 88839 | `9aa23fceea11fec3…` |
| `audits/05-transfer-and-trade-mechanics-findings.jsonl` | 54287 | `674ae00ef07a031f…` |
| `sections/06-amendment-and-validator-landscape/claims.jsonl` | 351194 | `d4610152c9dacc0c…` |
| `sections/06-amendment-and-validator-landscape/sources.jsonl` | 994 | `7c239ef38ad60a63…` |
| `sections/06-amendment-and-validator-landscape/claim-reviews.jsonl` | 24714 | `c43afa1a2c2302a9…` |
| `sections/06-amendment-and-validator-landscape/gates.yaml` | 461 | `c7cc65ceb738ca3c…` |
| `audits/06-amendment-and-validator-landscape-gate.json` | 82030 | `00ffbd42b2f7e23b…` |
| `audits/06-amendment-and-validator-landscape-review.json` | 104799 | `244781bee75b1b0e…` |
| `audits/06-amendment-and-validator-landscape-findings.jsonl` | 62534 | `850bedf6980cdfc1…` |
| `sections/07-metadata-and-off-chain-durability/claims.jsonl` | 308479 | `e68678a7ebadd1e7…` |
| `sections/07-metadata-and-off-chain-durability/sources.jsonl` | 781 | `88ddd7db4c294ac0…` |
| `sections/07-metadata-and-off-chain-durability/claim-reviews.jsonl` | 18826 | `bd251c30264759a7…` |
| `sections/07-metadata-and-off-chain-durability/gates.yaml` | 354 | `5784fbaf04bf28ca…` |
| `audits/07-metadata-and-off-chain-durability-gate.json` | 71816 | `879196a01a26bd0f…` |
| `audits/07-metadata-and-off-chain-durability-review.json` | 69652 | `4accf4c72d1892d5…` |
| `audits/07-metadata-and-off-chain-durability-findings.jsonl` | 38894 | `ad5a40f3579ac374…` |
| `evidence/fetch-log.jsonl` | 71818 | `df47f9503cc1b954…` |
| `evidence/citation-ledger.jsonl` | 0 | `e3b0c44298fc1c14…` |
| `evidence/source-cards/src_006880d4c42c.json` | 1923 | `f7e072803047b24e…` |
| `evidence/source-cards/src_01e8d92d7e53.json` | 1520 | `c68b971eeb8a4ae5…` |
| `evidence/source-cards/src_0255a2aac931.json` | 1109 | `dd639c05043bdcc1…` |
| `evidence/source-cards/src_034a20f9fcbf.json` | 1419 | `9fb768723e93ea80…` |
| `evidence/source-cards/src_03f52c5d778f.json` | 1485 | `e6a914572d764ae1…` |
| `evidence/source-cards/src_051630391070.json` | 1671 | `eaa4a35dcd0936a0…` |
| `evidence/source-cards/src_0654c94c7a98.json` | 1290 | `8446edf44bca2483…` |
| `evidence/source-cards/src_097142ab08d3.json` | 1150 | `57bcb17756fd7b4d…` |
| `evidence/source-cards/src_0b01dd18d515.json` | 1453 | `3ee07ab82523c054…` |
| `evidence/source-cards/src_0fad2055eaed.json` | 1943 | `54834ce6d83f68d8…` |
| `evidence/source-cards/src_117260e9e17f.json` | 1561 | `4419d342a0509526…` |
| `evidence/source-cards/src_12ac7f4c315b.json` | 1187 | `5d61824f0b0f35ee…` |
| `evidence/source-cards/src_13f7e950b494.json` | 1509 | `6a81ce0ebb0f168a…` |
| `evidence/source-cards/src_206907715043.json` | 1360 | `2fc9c10b08d96d5d…` |
| `evidence/source-cards/src_2185c0910a10.json` | 1469 | `1dc22e3d18073b1d…` |
| `evidence/source-cards/src_24fc488e7bd9.json` | 1216 | `1805c5d4513875ad…` |
| `evidence/source-cards/src_25ac15171ff0.json` | 1288 | `e1f14ea8823f29c8…` |
| `evidence/source-cards/src_313e0214db27.json` | 1127 | `30ff08ce297b97e7…` |
| `evidence/source-cards/src_319355bfb19d.json` | 1130 | `5e413db4ac8990c5…` |
| `evidence/source-cards/src_31ded2938c1f.json` | 1607 | `9f1f720270efb8d4…` |
| `evidence/source-cards/src_33402410a906.json` | 1449 | `a5c65acdaf5beb54…` |
| `evidence/source-cards/src_37c1413248e9.json` | 1044 | `fabe0f4b753036ab…` |
| `evidence/source-cards/src_3cc91a11ac53.json` | 1364 | `104d2bf291e85775…` |
| `evidence/source-cards/src_4727592a5328.json` | 1337 | `1c36445b08d0a9b6…` |
| `evidence/source-cards/src_48463ecf8302.json` | 745 | `d28a915ba41b6aeb…` |
| `evidence/source-cards/src_48fddb8ee3b6.json` | 1245 | `bc6a71d434297c9e…` |
| `evidence/source-cards/src_512ff500b432.json` | 1915 | `5cf1ea7cde205edd…` |
| `evidence/source-cards/src_515596050b06.json` | 1875 | `6e20c0a5072d8c15…` |
| `evidence/source-cards/src_517d67dc1224.json` | 1384 | `27c77fa404f6294c…` |
| `evidence/source-cards/src_51d3108c7446.json` | 1334 | `968519b8b71243fd…` |
| `evidence/source-cards/src_5229d8bd314e.json` | 1025 | `c70231bd9ed7ba86…` |
| `evidence/source-cards/src_525532c48160.json` | 1538 | `414b4c3340b27878…` |
| `evidence/source-cards/src_5412494af521.json` | 1151 | `65691d5667e05631…` |
| `evidence/source-cards/src_5a1d70d24fc1.json` | 1508 | `49ae0b6183f68c42…` |
| `evidence/source-cards/src_5b84f976c797.json` | 1382 | `4ec4f83b1a184ca1…` |
| `evidence/source-cards/src_5d5676c4b1d7.json` | 1338 | `ad039253d7f48ecb…` |
| `evidence/source-cards/src_5f4e84349ec5.json` | 1482 | `7e5c3d0c5a69d3cb…` |
| `evidence/source-cards/src_62cf595f3835.json` | 1249 | `88d8ff7205b8245d…` |
| `evidence/source-cards/src_68a1f3f26f9b.json` | 1970 | `bab71368846ffbd0…` |
| `evidence/source-cards/src_71ee1ec187f7.json` | 1362 | `63d7924cafdf45d0…` |
| `evidence/source-cards/src_72d8a212a86a.json` | 1160 | `e181fb8101d02973…` |
| `evidence/source-cards/src_731c5d0b7dc0.json` | 1745 | `553ca7b32c247a61…` |
| `evidence/source-cards/src_736c7f9cccff.json` | 1383 | `f711e5ec6c58cec1…` |
| `evidence/source-cards/src_7d558c2ae6d2.json` | 1318 | `7bc5a27ed4dc9c5e…` |
| `evidence/source-cards/src_7f175852cb10.json` | 1699 | `18220bdec51c882f…` |
| `evidence/source-cards/src_89d29fa8978f.json` | 1565 | `12f5142f70c92183…` |
| `evidence/source-cards/src_8d039f2c0ee8.json` | 1433 | `77346039b6f044b4…` |
| `evidence/source-cards/src_8ebf52ac0af9.json` | 1719 | `97dc7256f5ef3613…` |
| `evidence/source-cards/src_90368c8bfc17.json` | 1289 | `9fa453f730687625…` |
| `evidence/source-cards/src_914d01359b57.json` | 1520 | `d93d25749fb21ecf…` |
| `evidence/source-cards/src_92f5c74d9bda.json` | 1268 | `1568298365c2b774…` |
| `evidence/source-cards/src_9505395adfe8.json` | 1554 | `c5816c353a7d9a0b…` |
| `evidence/source-cards/src_9c84764fa541.json` | 1296 | `e9e5d3499134a20b…` |
| `evidence/source-cards/src_a101a2ec3e2c.json` | 1785 | `f1484ee19a48b66c…` |
| `evidence/source-cards/src_a37ff8072a91.json` | 1219 | `7b224a035ad3d0d4…` |
| `evidence/source-cards/src_accb45067034.json` | 1562 | `5c725931150de55e…` |
| `evidence/source-cards/src_b357e7424a79.json` | 1048 | `35b46ecfb3f08646…` |
| `evidence/source-cards/src_b98e4c872d37.json` | 1382 | `6844eb6bcad8a183…` |
| `evidence/source-cards/src_bb6e135772ef.json` | 1398 | `a59f1b7da2c174ce…` |
| `evidence/source-cards/src_bc7eaa08f673.json` | 1228 | `33f3d606949931eb…` |
| `evidence/source-cards/src_c24e3cf6d930.json` | 1536 | `6660a62e3aa72e6f…` |
| `evidence/source-cards/src_c3f060147acd.json` | 1263 | `a1eeac382243c1bc…` |
| `evidence/source-cards/src_c8f7530cb4f1.json` | 1416 | `0de503730daf7b48…` |
| `evidence/source-cards/src_cef2c31af42d.json` | 1539 | `fcf8e35bbaaf143c…` |
| `evidence/source-cards/src_d0882a19791f.json` | 1555 | `50233c58063d64f6…` |
| `evidence/source-cards/src_d16112dea1e0.json` | 1269 | `88734267c0102669…` |
| `evidence/source-cards/src_d2fef4cddfd7.json` | 917 | `75bbc6043408732c…` |
| `evidence/source-cards/src_d6c57c6845e6.json` | 1215 | `611922bcfabd23e0…` |
| `evidence/source-cards/src_e1cfbbad4fa5.json` | 1496 | `9cc77b49c3bf10d0…` |
| `evidence/source-cards/src_e25c1c4ecccf.json` | 1795 | `145298b320894f6a…` |
| `evidence/source-cards/src_e6b777fcef0d.json` | 1513 | `fea8bf24f762624a…` |
| `evidence/source-cards/src_e6df442e1e22.json` | 1763 | `8e5388ef81977c9f…` |
| `evidence/source-cards/src_e98d1069b3a8.json` | 1289 | `baa399f2a2552073…` |
| `evidence/source-cards/src_eae6b2d1d42d.json` | 1448 | `56cd127e20244cd1…` |
| `evidence/source-cards/src_ec3eb93321a7.json` | 1226 | `5c56159a6bc41f52…` |
| `evidence/source-cards/src_ec68826269c9.json` | 1340 | `e4c312287458b0ec…` |
| `evidence/source-cards/src_f0063f109b4a.json` | 798 | `69161196d19bb047…` |
| `evidence/source-cards/src_f011b0207e63.json` | 1674 | `52ff3e7e6bd5d061…` |
| `evidence/source-cards/src_f103bcae0753.json` | 1285 | `5f1fa642419e6c66…` |
| `evidence/source-cards/src_ff9fbb4f8527.json` | 1316 | `e1cfecedec21e319…` |
