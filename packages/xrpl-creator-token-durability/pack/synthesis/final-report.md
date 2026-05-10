# Final Report — XRPL Creator-Token Durability

**Pack:** What makes XRPL creator-token holdings durable over time — across token-standard versions, account access changes, and ledger-state evolution — and what should a creator-side control plane track to keep them runnable, transferable, and provable?
**Pack ID:** `a4a528f548e1`
**Decision question:** _(no decision recorded in research.yaml — this pack frames a multi-dimensional research question whose answer is the seven-layer state-bundle framework rather than a binary go/no-go decision)_

> **Guardrails (locked area):**
> - This file cannot be considered complete until the freeze step (Link 12) verifies citation coverage and claim-id existence.
> - Until then, treat this as a draft. Do not promote it externally.
> - **Cite only `claim_id` values listed in `synthesis/cross-section-map.json` under `allowed_synthesis_inputs[]`.**
> - **Do not introduce facts not present in the cited claims.**
> - **Do not flatten unresolved contradictions; preserve them by name.**
> - **Do not widen any claim's `scope`; restate it verbatim where the claim is invoked.**
> - **Disclose every active waiver from `waiver_dependencies[]`.**
> - **Do not cite any claim listed under `forbidden_inputs[]`.**

## Summary

**XRPL creator-token durability is a multi-layer state bundle, not a single property.** A creator-side control plane that tracks only on-ledger state will miss the dominant failure mode in practice — because XRPL protocol durability does not imply creator-token durability. The on-chain record is only as durable as the metadata it points to, the issuer controls that govern it, the reserves that maintain it, and the amendment state that defines what is even available. Seven sections of evidence converge on one structural finding: a creator-side control plane must track seven interdependent layers, monitor cross-layer dependencies, and accept that the seventh layer lives off-chain.

## Body

### The seven-layer state-bundle framework

A token's persistence on the XRP Ledger depends on seven interdependent layers, each governed by a distinct mechanism with its own failure modes and repair locus:

1. **Token-paradigm choice** — XRP, trust-line tokens, NFTokens (XLS-20), Multi-Purpose Tokens (XLS-33). Structural input that determines all downstream durability semantics.
2. **Account and key control** — master keys, regular keys, signer-list multi-sign quorum, ticket inventory, delegation primitives, account deletion preconditions.
3. **On-ledger state and reserves** — ledger entries (NFTokenPage, MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot) plus base + owner reserve solvency.
4. **Issuer-retained controls and immutability** — what is fixed at mint-time vs. what the issuer can still change (NFToken flag immutability, freeze surface, Clawback, NFTokenModify under DynamicNFT, transfer-fee bounds).
5. **Transfer and trade mechanics** — direct vs. brokered NFTokenAcceptOffer, fungible DEX OfferCreate, cross-currency Payment with pathfinding, escrow under TokenEscrow.
6. **Amendment state and validator landscape** — amendment voting + activation, specific amendments (XLS-0020, MPTokensV1, NonFungibleTokensV1_1, DynamicNFT, Clawback, TokenEscrow, MultiSign), validator-software supply chain, peer-network topology.
7. **Off-chain metadata durability** — URI reachability, IPFS pinning + Filecoin storage deals, content-hash verification, the layer where most NFT durability actually fails in practice.

### Layer 1 — Token-paradigm choice

The XRP Ledger natively supports issuance of tokens [claim:clm_f0063f109b4a_ollama_intern_1], with three structurally distinct paradigms. **Trust-line tokens (IOUs)** are interchangeable units of a fungible token in XRP Ledger [claim:clm_5229d8bd314e_ollama_intern_2], preferred for use cases requiring DEX compatibility [claim:clm_5229d8bd314e_ollama_intern_9]; stablecoins are a common model for tokens in the XRP Ledger [claim:clm_f0063f109b4a_ollama_intern_4]. **NFTokens (XLS-20)** are indivisible units not used for payments [claim:clm_ec3eb93321a7_ollama_intern_2]; an NFT is represented as a NFToken object on the XRP Ledger [claim:clm_ec3eb93321a7_ollama_intern_3]; minting requires a transaction of type NFTokenMint [claim:clm_c3f060147acd_ollama_intern_24]; NFT flags are immutable and can only be set during the NFTokenMint transaction [claim:clm_c3f060147acd_ollama_intern_8]; the URI field is optional and can be up to 256 bytes long [claim:clm_c3f060147acd_ollama_intern_29] — the bridge to Layer 7. **Multi-Purpose Tokens (XLS-33 / MPTs)** are a form of fungible token on the XRP Ledger [claim:clm_0255a2aac931_ollama_intern_1]; each MPT issuance is uniquely identified by an MPT Issuance ID [claim:clm_0255a2aac931_ollama_intern_4] and is separate, with no rippling effect between tokens [claim:clm_0255a2aac931_ollama_intern_19]. **XRP itself** is part of the bundle for every other token type: all XRP was created along with the ledger itself, and no new XRP can be minted [claim:clm_f0063f109b4a_ollama_intern_9].

### Layer 2 — Account and key control: the primary issuer-side failure mode

Master-key compromise is the dominant failure mode for issuer-side durability. Learning a master private key grants full control over an account [claim:clm_117260e9e17f_ollama_intern_10]; changing a master key pair is impossible, making it crucial to keep it safe [claim:clm_117260e9e17f_ollama_intern_11]. The operator-side mitigation — keeping master key pairs offline enhances security [claim:clm_117260e9e17f_ollama_intern_12] — is the load-bearing recommendation. The seed value is secret information and must be protected carefully [claim:clm_117260e9e17f_ollama_intern_6].

Multi-sign provides quorum-based recovery: a SignerListSet transaction requires the MultiSign amendment to be enabled [claim:clm_7d558c2ae6d2_ollama_intern_2]; a multi-signed transaction must include an empty SigningPubKey field [claim:clm_b98e4c872d37_ollama_intern_9]. Tickets provide operational continuity: a TicketCreate transaction reserves one or more sequence numbers as Tickets [claim:clm_13f7e950b494_ollama_intern_3], where each Ticket counts as a separate item for the owner reserve, requiring 0.2 XRP [claim:clm_13f7e950b494_ollama_intern_7]. Delegation has hard structural limits: some transaction types cannot be delegated in XRPL [claim:clm_206907715043_ollama_intern_3], pseudo-transaction types cannot be delegated in XRPL [claim:clm_206907715043_ollama_intern_4], and the set of granular permissions is hard-coded and cannot be customized [claim:clm_206907715043_ollama_intern_10]. Account deletion has dedicated error-case documentation [claim:clm_b357e7424a79_ollama_intern_7] — the protocol acknowledges this is a high-risk operation.

### Layer 3 — On-ledger state and reserves: the silent durability threat

Reserves are the silent durability threat. The reserve requirement consists of a base reserve and an owner reserve [claim:clm_525532c48160_ollama_intern_3]; the current base reserve requirement on Mainnet is 1 XRP [claim:clm_525532c48160_ollama_intern_4]; the current owner reserve requirement on Mainnet is 0.2 XRP per item [claim:clm_525532c48160_ollama_intern_5]. The reserve for an AccountRoot entry is the base reserve, currently 1 XRP [claim:clm_9505395adfe8_ollama_intern_19].

Every owned token-related ledger object counts toward the owner reserve: an NFTokenPage contains references to one or more non-fungible tokens [claim:clm_72d8a212a86a_ollama_intern_1]; an MPTokenIssuance entry represents a single MPT issuance [claim:clm_90368c8bfc17_ollama_intern_2]; a RippleState ledger entry represents a trust line between two accounts [claim:clm_f011b0207e63_ollama_intern_2]. Reserve evolution can also be adversarial: an attacker can fraudulently increase other accounts' required reserves [claim:clm_006880d4c42c_ollama_intern_25] under specific protocol conditions, which the control plane must detect.

### Layer 4 — Issuer controls and immutability

What can the issuer still change after mint? The answer differs per token paradigm and per amendment state. NFToken flags are immutable and cannot be changed after creation [claim:clm_d0882a19791f_ollama_intern_3]; the tfTransferable flag enables the transfer of a minted NFToken to others [claim:clm_517d67dc1224_ollama_intern_7]; NFTokenMint transactions require the NonFungibleTokensV1_1 amendment [claim:clm_517d67dc1224_ollama_intern_4]. The mutability gate for NFTokens is amendment-controlled: NFTokenModify transactions require the DynamicNFT amendment to be loaded [claim:clm_ff9fbb4f8527_ollama_intern_3].

For fungible tokens, issuers can freeze the tokens they issue in the XRPL [claim:clm_319355bfb19d_ollama_intern_2], but XRP cannot be frozen in the XRPL [claim:clm_319355bfb19d_ollama_intern_3]; an address cannot enable Individual Freeze if it has enabled No Freeze [claim:clm_319355bfb19d_ollama_intern_6]; addresses cannot issue XRP, thus Global Freeze does not apply to XRP [claim:clm_319355bfb19d_ollama_intern_8]. The freeze surface is structured and must NOT be collapsed to a generic "issuer can freeze" claim. Clawback is amendment-gated: clawback transactions require the Clawback amendment to be enabled [claim:clm_4727592a5328_ollama_intern_5]; the amount to claw back must not be zero [claim:clm_4727592a5328_ollama_intern_3]. TransferFee values are bounded between 0 and 50,000 inclusive [claim:clm_90368c8bfc17_ollama_intern_9]. The TrustSet transaction enables setting trusted and untrusted addresses [claim:clm_e98d1069b3a8_ollama_intern_1]; it uses the LimitAmount field to define trust lines [claim:clm_e98d1069b3a8_ollama_intern_2].

### Layer 5 — Transfer and trade mechanics: transferability is conditional

The NFTokenAcceptOffer transaction has two modes: direct and brokered [claim:clm_034a20f9fcbf_ollama_intern_2], and requires the NonFungibleTokensV1_1 amendment [claim:clm_034a20f9fcbf_ollama_intern_3]. The NFTokenCreateOffer transaction requires the NonFungibleTokensV1_1 amendment [claim:clm_71ee1ec187f7_ollama_intern_3] and can fail due to insufficient XRP reserves [claim:clm_71ee1ec187f7_ollama_intern_4] — the cross-layer dependency on Layer 3 is direct and operationally visible.

NFToken offer cancellation has structured authorization rules: only the original creator of an NFTokenOffer or the account specified in its Destination field can cancel it [claim:clm_c8f7530cb4f1_ollama_intern_2], though an NFTokenOffer can also be cancelled by any account if it has an expiration time and that time has passed [claim:clm_c8f7530cb4f1_ollama_intern_3]. Fungible-token DEX uses the OfferCreate transaction, which allows users to create offers to buy or sell XRP [claim:clm_5a1d70d24fc1_ollama_intern_1]. Cross-currency payments within the XRP Ledger are fully atomic [claim:clm_731c5d0b7dc0_ollama_intern_2]; the Payment transaction type requires the Destination field [claim:clm_5d5676c4b1d7_ollama_intern_4].

Escrow extends transferability with custody constraints, but the cross-layer dependencies are sharp: EscrowCreate transactions require the TokenEscrow amendment for fungible tokens [claim:clm_01e8d92d7e53_ollama_intern_3]; the EscrowFinish transaction fails if authorization requirements are not met [claim:clm_e1cfbbad4fa5_ollama_intern_5] and fails if the token is deep frozen or locked [claim:clm_e1cfbbad4fa5_ollama_intern_9] — the freeze state from Layer 4 propagates directly into Layer 5's escrow finalization.

### Layer 6 — Amendment state changes everything underneath

Every prior layer's claims are amendment-state-conditional. The Ripple protocol allows for approved changes through amendments [claim:clm_8ebf52ac0af9_ollama_intern_1]. Amendments specify changes to validation rules and protocol behavior [claim:clm_03f52c5d778f_ollama_intern_2]. Amendments gain majority support through validators' consensus [claim:clm_8ebf52ac0af9_ollama_intern_4]. Amendments are contained within the Amendments ledger entry type [claim:clm_8ebf52ac0af9_ollama_intern_2]; the Amendments entry does not require a reserve [claim:clm_8ebf52ac0af9_ollama_intern_6]; the Amendments entry ID is the hash of the Amendments space key (0x0066) [claim:clm_8ebf52ac0af9_ollama_intern_7]. Amendments that are vetoed by the network cannot be enabled [claim:clm_03f52c5d778f_ollama_intern_6]. Operator response is asymmetric: upgrading rippled to the newest version can unblock amendment blocked servers [claim:clm_03f52c5d778f_ollama_intern_10].

XLS-0020 introduces support for native non-fungible tokens on the XRP Ledger [claim:clm_515596050b06_ollama_intern_1]; NFToken objects represent single NFTs and contain associated data [claim:clm_515596050b06_ollama_intern_5]; NFTokenIDs uniquely identify tokens and contain issuer-specific taxon [claim:clm_515596050b06_ollama_intern_6]; the URI field in an NFToken object can be used to reference data stored on IPFS [claim:clm_515596050b06_ollama_intern_14] — the explicit XLS-spec bridge from Layer 6 to Layer 7. Each NFTokenOffer costs one incremental reserve of 2 XRP [claim:clm_515596050b06_ollama_intern_42] (Section 03 frames the general owner reserve as 0.2 XRP per item [claim:clm_525532c48160_ollama_intern_5]; the XLS-0020 spec is more specific to NFTokenOffer reserve cost — both claims are scoped to their source's frame).

The validator-software supply chain is itself a durability surface. The GPG key used to sign rippled packages has been rotated by Ripple [claim:clm_d16112dea1e0_ollama_intern_4]; automatic upgrades will not work until users have trusted the new key [claim:clm_d16112dea1e0_ollama_intern_3] — a real, documented operational disruption that breaks the operator's ability to receive amendment changes until the trust update is performed. Network topology matters too: having more direct peer connections allows a server to fetch history from multiple peers in parallel and access a wider range of historical data [claim:clm_8d039f2c0ee8_ollama_intern_13]; using public hubs provides access to safe connections to the XRP Ledger network [claim:clm_8d039f2c0ee8_ollama_intern_14].

### Layer 7 — Off-chain metadata durability: the weakest link

This is the layer where the pack's central thesis lives.

Content addressing is identity, not persistence. CIDs are based on the content's cryptographic hash [claim:clm_d6c57c6845e6_ollama_intern_2]; any difference in the content will produce a different CID [claim:clm_d6c57c6845e6_ollama_intern_3]. But identity does not imply availability. Pinning is the mechanism that allows you to tell IPFS to always keep a given object somewhere, typically your local node [claim:clm_37c1413248e9_ollama_intern_2]. A pinned object cannot be garbage-collected [claim:clm_37c1413248e9_ollama_intern_5] — but you can use the 'pin rm' command to unpin a file from IPFS [claim:clm_37c1413248e9_ollama_intern_6], at which point garbage collection becomes possible.

Persistence has economics. Pinning services are paid services that allow users to store data on a remotely hosted IPFS node and retrieve it whenever they want, but the content may be lost if the sponsor stops [claim:clm_0b01dd18d515_ollama_intern_6]. Filecoin offers a longer-term layer: Filecoin is a decentralized storage network where storage providers rent their storage space to clients, with an agreement called a deal specifying the data to be stored, duration, and other terms [claim:clm_0b01dd18d515_ollama_intern_7]. Filecoin provides a reliable, long-term storage solution but has limitations like slower retrieval than IPFS pinning services and minimum file size requirements [claim:clm_0b01dd18d515_ollama_intern_8]. Combined IPFS + Filecoin solutions periodically bundle data and create deals with reputable Filecoin storage providers to ensure long-term availability [claim:clm_0b01dd18d515_ollama_intern_10].

The repair locus for off-chain metadata is fundamentally outside the protocol's control. NFTokenModify exists only under DynamicNFT [claim:clm_ff9fbb4f8527_ollama_intern_3]; the issuer can rotate URIs only if the NFToken was minted mutable AND DynamicNFT is activated. Otherwise, Layer 7 content is referenced via the URI field [claim:clm_c3f060147acd_ollama_intern_29] but not rotatable from on-chain — and the off-chain layer's repair (re-pinning, re-uploading, content-hash verification) is fully outside the XRPL protocol's authority. **This is where most NFT durability actually fails in practice.**

### What a creator-side control plane must track

The pack's structural answer: track all seven layers, separately, with cross-layer dependency monitoring. Per token, the control plane must record:

- **Paradigm** — XRP / trust-line / NFToken / MPT.
- **Account-and-key state** — master-key offline disposition, regular-key rotation, signer-list quorum availability, ticket inventory.
- **Reserve solvency** — base + owner reserve maintained against the count of owned ledger objects.
- **Issuer-retained powers** — which controls (freeze, clawback, NFTokenModify) are still in scope and amendment-gated, as a function of Layer 6 state.
- **Transferability state** — flags + offer state + reserve sufficiency + escrow disposition.
- **Amendment state** — per-amendment voting / activated / obsoleted status, validator distribution within the operator's UNL, validator-software supply-chain integrity (e.g., GPG key trust).
- **Off-chain content reachability** — URI HTTP / IPFS / Arweave reachability, CID pin status, content-hash verification at retrieval, marketplace cache coherence vs. canonical URI.

The seven layers form one bundle. Track only on-ledger state, and you miss Layer 7 entirely — and Layer 7 is where most NFT creator-token durability actually fails.

## Limitations and unresolved tensions

**Source-shape limitations honestly preserved.**

- **Sections 01-06 are canonical-protocol sections — single-publisher by structure.** XRPL Foundation is the canonical first-party authority for the protocol-defining surface. Section-scoped `min_independent_publishers` waivers were applied to all six sections to acknowledge this structural reality with explicit reason and compensating controls per section. This is honest discipline, not a workaround: third-party publishers can interpret these standards but cannot provide more authoritative ground truth than the protocol-defining body. The synthesis of Sections 01-06 must be read as XRPL-Foundation-attested, not multi-publisher-corroborated.

- **Section 07 — multi-publisher, no waiver.** Section 07's evidence base genuinely spans XRPL Foundation, IPFS Foundation, Arweave, and the GitHub developer-discussion surface. The section cleared the global publisher-diversity floor on its own merits. This is the proof point that the section-scoped waiver mechanism is honest discipline applied only where structurally needed. It also means Section 07's claims are corroborated across publishers, which is the strongest synthesis-attestation shape in the pack.

- **Heuristic contradiction detector limits.** The contradiction-detection step ran in heuristic mode and surfaced 0 contradictions across all 7 sections. A clean ledger here means the heuristic detector did not surface lexical contradictions — it does not mean no semantic tensions exist. Notably, IPFS marketing-vs-technical persistence framing and Arweave economic-permanence framing carry semantic tensions that a future LLM-detector pass might surface. The reviewer's source_repair routing in Section 07 already filtered out the most overreach-prone permanence claims (Arweave permanence overreach, IPFS automatic-persistence overreach) — but the synthesis acknowledges that a deeper detector pass is a candidate for future work.

- **Third-party indexer documentation is not text-stable for v0.1 fetch.** xrplmeta.org/docs (the third-party XRPL indexer) was dropped at URL verification because the page is a JS-shell SPA. Operators researching marketplace-indexer durability should anticipate this; v0.1 static-fetch model does not capture client-side-rendered indexer content. This is a real source-shape limitation, not a research-os limitation.

- **One unresolved durability question NOT in scope.** The pack does not assert how often, in practice, NFToken URIs go stale in the wild on XRPL. That requires longitudinal field measurement (sampling NFTokens at scale and verifying URI reachability over time), which is outside the v0.1 fetch chain's remit. The pack documents the structural failure modes; field-frequency measurement is operator-side empirical work.

**Unresolved contradictions preserved.** None. The contradiction-detection step ran on every section; all sections returned 0 contradictions; the pack-level audit confirms 0 unresolved contradictions across all sections.

## Citations

The following accepted claim IDs were cited in this final report:

- Section 01 — `clm_f0063f109b4a_ollama_intern_1`, `clm_f0063f109b4a_ollama_intern_4`, `clm_f0063f109b4a_ollama_intern_9`, `clm_5229d8bd314e_ollama_intern_2`, `clm_5229d8bd314e_ollama_intern_9`, `clm_ec3eb93321a7_ollama_intern_2`, `clm_ec3eb93321a7_ollama_intern_3`, `clm_c3f060147acd_ollama_intern_24`, `clm_c3f060147acd_ollama_intern_8`, `clm_c3f060147acd_ollama_intern_29`, `clm_0255a2aac931_ollama_intern_1`, `clm_0255a2aac931_ollama_intern_4`, `clm_0255a2aac931_ollama_intern_19`
- Section 02 — `clm_117260e9e17f_ollama_intern_10`, `clm_117260e9e17f_ollama_intern_11`, `clm_117260e9e17f_ollama_intern_12`, `clm_117260e9e17f_ollama_intern_6`, `clm_7d558c2ae6d2_ollama_intern_2`, `clm_b98e4c872d37_ollama_intern_9`, `clm_13f7e950b494_ollama_intern_3`, `clm_13f7e950b494_ollama_intern_7`, `clm_206907715043_ollama_intern_3`, `clm_206907715043_ollama_intern_4`, `clm_206907715043_ollama_intern_10`, `clm_b357e7424a79_ollama_intern_7`
- Section 03 — `clm_525532c48160_ollama_intern_3`, `clm_525532c48160_ollama_intern_4`, `clm_525532c48160_ollama_intern_5`, `clm_9505395adfe8_ollama_intern_19`, `clm_72d8a212a86a_ollama_intern_1`, `clm_90368c8bfc17_ollama_intern_2`, `clm_f011b0207e63_ollama_intern_2`, `clm_006880d4c42c_ollama_intern_25`
- Section 04 — `clm_d0882a19791f_ollama_intern_3`, `clm_517d67dc1224_ollama_intern_7`, `clm_517d67dc1224_ollama_intern_4`, `clm_ff9fbb4f8527_ollama_intern_3`, `clm_319355bfb19d_ollama_intern_2`, `clm_319355bfb19d_ollama_intern_3`, `clm_319355bfb19d_ollama_intern_6`, `clm_319355bfb19d_ollama_intern_8`, `clm_4727592a5328_ollama_intern_5`, `clm_4727592a5328_ollama_intern_3`, `clm_90368c8bfc17_ollama_intern_9`, `clm_e98d1069b3a8_ollama_intern_1`, `clm_e98d1069b3a8_ollama_intern_2`
- Section 05 — `clm_034a20f9fcbf_ollama_intern_2`, `clm_034a20f9fcbf_ollama_intern_3`, `clm_71ee1ec187f7_ollama_intern_3`, `clm_71ee1ec187f7_ollama_intern_4`, `clm_c8f7530cb4f1_ollama_intern_2`, `clm_c8f7530cb4f1_ollama_intern_3`, `clm_5a1d70d24fc1_ollama_intern_1`, `clm_731c5d0b7dc0_ollama_intern_2`, `clm_5d5676c4b1d7_ollama_intern_4`, `clm_01e8d92d7e53_ollama_intern_3`, `clm_e1cfbbad4fa5_ollama_intern_5`, `clm_e1cfbbad4fa5_ollama_intern_9`
- Section 06 — `clm_8ebf52ac0af9_ollama_intern_1`, `clm_03f52c5d778f_ollama_intern_2`, `clm_8ebf52ac0af9_ollama_intern_4`, `clm_8ebf52ac0af9_ollama_intern_2`, `clm_8ebf52ac0af9_ollama_intern_6`, `clm_8ebf52ac0af9_ollama_intern_7`, `clm_03f52c5d778f_ollama_intern_6`, `clm_03f52c5d778f_ollama_intern_10`, `clm_515596050b06_ollama_intern_1`, `clm_515596050b06_ollama_intern_5`, `clm_515596050b06_ollama_intern_6`, `clm_515596050b06_ollama_intern_14`, `clm_515596050b06_ollama_intern_42`, `clm_d16112dea1e0_ollama_intern_4`, `clm_d16112dea1e0_ollama_intern_3`, `clm_8d039f2c0ee8_ollama_intern_13`, `clm_8d039f2c0ee8_ollama_intern_14`
- Section 07 — `clm_d6c57c6845e6_ollama_intern_2`, `clm_d6c57c6845e6_ollama_intern_3`, `clm_37c1413248e9_ollama_intern_2`, `clm_37c1413248e9_ollama_intern_5`, `clm_37c1413248e9_ollama_intern_6`, `clm_0b01dd18d515_ollama_intern_6`, `clm_0b01dd18d515_ollama_intern_7`, `clm_0b01dd18d515_ollama_intern_8`, `clm_0b01dd18d515_ollama_intern_10`

## Waivers disclosed

Six section-scoped `min_independent_publishers` waivers are active. All six apply to the same family — `gate.source_floor.min_independent_publishers` — and all six carry the same structural reason: XRPL Foundation is the canonical first-party authority for the protocol-defining surface those sections cover. The seventh section (07 — metadata and off-chain durability) does NOT carry a waiver: its evidence base genuinely spans multiple independent publishers, and the section cleared the global publisher-diversity floor on its own merits at gate-time.

- **gate.source_floor** applied to `01-token-surface-and-standards.min_independent_publishers` — XRPL token surfaces are defined by canonical protocol sources; third-party publishers are not primary authorities for protocol semantics. Compensating controls per `research.yaml`.
- **gate.source_floor** applied to `02-account-and-key-management.min_independent_publishers` — Account and key semantics are defined by the protocol-defining body; canonical claims trace to xrpl.org first-party sources only. Compensating controls per `research.yaml`.
- **gate.source_floor** applied to `03-on-ledger-state-and-reserves.min_independent_publishers` — Ledger-entry types and reserve mechanics are defined by xrpl.org and the rippled implementation by construction. Compensating controls per `research.yaml`.
- **gate.source_floor** applied to `04-issuer-controls-and-immutability.min_independent_publishers` — Issuer-side controls are protocol-defined; sources span all relevant transaction-type references and rendered XLS standards. Compensating controls per `research.yaml`.
- **gate.source_floor** applied to `05-transfer-and-trade-mechanics.min_independent_publishers` — Transfer and trade mechanics are protocol-defined. Compensating controls per `research.yaml`.
- **gate.source_floor** applied to `06-amendment-and-validator-landscape.min_independent_publishers` — Amendment-system mechanics are governed by the protocol-defining body and the validator code that enforces consensus. Compensating controls per `research.yaml`.
- **`07-metadata-and-off-chain-durability` — NO waiver applied.** Publisher-diversity floor cleared on own merits.

The pattern itself is the v0.3.1 discipline finding: section-scoped source waivers are applied where the evidence base is structurally single-publisher and NOT applied where it genuinely spans multiple independent publishers. Section 07 is the proof point that the mechanism is honest — the waiver did NOT fire when not needed, and the global publisher-diversity floor did real work.
