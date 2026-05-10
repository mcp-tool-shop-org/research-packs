# Failure-Mode Notes — Section 07: metadata-and-off-chain-durability

> Operator-authored synthesis aid. Captures Section-07-specific failure modes, repair loci, monitoring guidance, and cross-section dependencies for the freeze-time synthesis weave. This is the **structural-thesis section**: XRPL protocol durability ≠ creator-token durability. Without Section 07, the pack would conclude protocol-durability implies token-durability — a half-truth that misses where most NFT durability actually fails in practice.

## Section Outcome (operator note)

Section 07 reached **Terminal A WITHOUT a section_waiver**. This is the strongest possible outcome — the section cleared the global publisher-diversity floor on its own merits (5 independent publishers detected at gate-time vs. minimum 4 required), demonstrating that v0.3.1's section-scoped pattern is honest. The waiver was not invoked because the structural collapse case did not occur: the off-chain durability source surface (XRPL Foundation + IPFS Foundation + Arweave + GitHub) was text-stable enough at gather-time to support multi-publisher truth without operator compensation.

One contrast-finding: xrplmeta.org/docs (the third-party XRPL indexer) was dropped at URL verification because the page is a JS-shell SPA (drops `<body>` to empty in DOMContentLoaded, then mounts via `/x/app.js`). Third-party XRPL indexer documentation is therefore not text-stable for v0.1's static-fetch model. This is a real source-shape limitation — operators researching marketplace-cache behavior should anticipate that indexer/marketplace operator documentation often lives behind JS rendering.

## What can fail

The off-chain durability layer fails along several distinct mechanisms that the on-ledger sections cannot capture:

1. **URI exists on-chain, target disappears.** The NFTokenMint records a URI field on-ledger; the URI's target may be removed or change content arbitrarily after mint. The on-chain record is durable; the content it points to is not.

2. **IPFS CID is valid, content is unpinned.** Content-addressing (CID) gives identity but not persistence. CIDs remain valid forever as identifiers, but the underlying data needs at least one node to keep it pinned to remain retrievable. The accepted claims in this section explicitly capture this: "Pinning services are paid services... but the content may be lost if the sponsor stops..." (src_0b01dd18d515) and "A pinned object cannot be garbage-collected" (src_37c1413248e9).

3. **HTTP URL rots.** Domain expires, server moves, path changes — all standard web-rot mechanisms that no on-chain record can prevent. The protocol does not validate URI reachability.

4. **Arweave permanence depends on upload + retrieval correctness.** Arweave's economic-permanence model assumes correct upload (transaction confirmation + miner storage agreement) and correct retrieval (gateway reachability). Arweave permanence is NOT XRPL ledger finality — different finality models, different failure modes. (Watch case 3 — held; no accepted claim conflated the two.)

5. **Marketplace/indexer cache diverges from canonical URI.** Marketplaces and indexers cache metadata for performance. The cache becomes stale relative to the current URI target; the user sees metadata that no longer reflects the on-chain pointer's resolved content.

6. **Dynamic metadata (NFTokenModify) changes what the token represents.** Under the DynamicNFT amendment, NFTokenModify allows the issuer (if `tfMutable` was set at mint AND amendment is active) to update the URI post-mint. This breaks the assumption that on-chain identity = on-chain data; the URI is mutable per-mint-flag. (Watch case 6 — held; no accepted claim generalized NFTokenModify to all NFTokens.)

7. **Issuer domain verification (xrp-ledger.toml) lapses independently of URI.** The toml file proves issuer-account control of a domain at a point in time. The domain can lapse, the toml can be removed, and the URI in NFTokenMint records remains unchanged. (Watch case 4 — held; no accepted claim conflated domain-verification with metadata durability.)

8. **Third-party indexer documentation is not text-stable enough for static-fetch.** The xrplmeta.org/docs JS-shell discovery in this session is itself a finding — operators planning marketplace-indexer durability research must anticipate that indexer documentation often lives behind client-side rendering and may not be straightforwardly reachable by static gather.

## Who can repair

Repair locus shifts off-ledger for most of these failure modes — a sharp contrast with Sections 01-06's mostly on-ledger / issuer-controlled / protocol-controlled repair surfaces:

- **Issuer / metadata host** can re-set the URI (only via NFTokenModify, only if `tfMutable` was set at mint, only after DynamicNFT amendment activates) and re-host the off-chain content at the URI target. NFTokenModify is the only on-ledger repair path, and it is amendment-gated and per-mint-flag-enabled.
- **Pinning operator (IPFS)** can pin or repin the CID's data — but only if the data is still retrievable from somewhere in the IPFS network at the time of repin attempt. If all pinners drop the data and no copy survives, the CID becomes a permanent orphan.
- **Filecoin storage provider** (mentioned in src_0b01dd18d515 + src_0b01dd18d515 accepted claims) can extend or renew storage deals; combined IPFS+Filecoin solutions periodically bundle data and create deals with reputable Filecoin storage providers for long-term availability — but this is opt-in and economic, not protocol-guaranteed.
- **Arweave uploader / gateway operator** can verify retrieval through alternate gateways if a primary gateway becomes unreachable. The on-chain Arweave transaction is permanent, but operator-side gateway diversity governs accessibility.
- **Marketplace / indexer** can refresh their cache or surface a stale-cache warning. They cannot repair an off-chain URI that has rotted; they can only refuse to display stale cached content.
- **Holder** has zero repair capability unless they pre-emptively mirrored or pinned the content themselves at acquisition time. The protocol provides no holder-side mechanism to update a token's metadata reference.
- **XRPL protocol** generally cannot repair off-chain metadata loss. Even NFTokenModify only updates the on-chain pointer; it cannot bring back lost off-chain content.

## Repair locus distribution (Section 07 vs Sections 01-06)

| Section | Repair locus |
|---------|--------------|
| 01 — Token surfaces | Protocol (amendment-gated) + issuer (mint-time choices) |
| 02 — Account/key | Account holder + signer-list configuration + ticket pre-allocation |
| 03 — Reserves | Issuer (mint flags) + holder (reserve maintenance) |
| 04 — Issuer controls | Issuer (mint-time), amendment-gated (Clawback) |
| 05 — Transfer/trade | Issuer flags + holder offers + protocol mechanics |
| 06 — Amendment/validator | UNL operators + validator software + 80% consensus + 2-week window |
| **07 — Metadata + off-chain** | **Off-ledger (issuer / pinning / Arweave / IPFS) — protocol cannot repair** |

This is the load-bearing distinction: Section 07's repair surface is largely outside the operator's protocol-side discipline. The control plane must monitor it separately because the on-chain remediation paths (Sections 01-06) do not extend here.

## Control-plane monitoring

A creator-token control plane must add the following Section-07-specific checks on top of Sections 01-06's on-chain monitoring:

1. **URI HTTP/IPFS/Arweave reachability.** For each NFToken in the portfolio, attempt to fetch the URI's target via the appropriate transport (HTTP HEAD, IPFS gateway, Arweave gateway). Record retrievable-yes/no and content-hash. Run on a cadence that matches the host's expected stability (HTTP: hourly to daily for popular sites, less frequent for archival domains; IPFS: hours-to-days based on pin-service SLA; Arweave: weekly is typically sufficient).

2. **CID pin status.** For IPFS-stored metadata, verify that at least one pinning service (or the issuer's own node) holds the data. Pinning is the layer where off-chain durability lives or dies. Use IPFS `pin ls` to enumerate local pins; query commercial pinning services' APIs to verify their record of the CID.

3. **Metadata content-hash verification.** Capture the content-hash at mint-time (anchor as content-fingerprint) and verify on retrieval. If the content-hash diverges, either NFTokenModify has rotated the URI (Section 04 cross-reference: was this on-chain authorized?) or an off-chain host has tampered with the data without on-chain authorization.

4. **Marketplace/indexer cache coherence vs canonical URI.** Compare what the marketplace shows against what the on-chain URI resolves to. Divergence is a stale-cache or, in the worst case, a misrepresentation. The on-chain URI is authoritative; the cache is derivative.

5. **xrp-ledger.toml domain-verification status.** Verify the toml file is still served at the issuer's claimed domain and that its `[[ACCOUNTS]]` block still includes the issuer address. If the domain lapses or the toml is removed, the issuer-authentication signal degrades — but the on-chain NFTokens are unaffected; they remain valid even if the issuer's domain disappears.

6. **NFTokenModify activity tracking.** For tokens minted with `tfMutable`, monitor for NFTokenModify transactions affecting your held tokens. A modify operation changes the URI target; the holder's view of the token's "content" can shift without their consent. (Cross-reference: Section 04's NFTokenMint flag analysis — was this token minted mutable?)

## Cross-section synthesis dependencies

Section 07 weaves into and depends on prior sections at multiple points. The synthesis prose must surface these threads explicitly:

| Section 07 claim/topic | Depends on | Why |
|---|---|---|
| NFTokenModify can rotate URI | Section 04 (issuer-controls-and-immutability) | Section 04 establishes that NFTokenModify is amendment-gated AND per-mint-flag-enabled; Section 07's "URI is mutable" claim is conditional on Section 04's mint-time analysis |
| NFTokenModify amendment-state | Section 06 (amendment-and-validator-landscape) | DynamicNFT amendment activation governs whether NFTokenModify exists at all — Section 06's amendment-state framework determines whether Section 07's URI-mutability mechanism is even available |
| URI field exists on NFTokenMint | Section 04 (NFTokenMint flag analysis) | Section 04's NFTokenMint accepted claims establish what URI is on the on-chain token |
| xrp-ledger.toml as issuer authentication | Section 02 (account-and-key-management) + issuer flags | Section 02 establishes account-level identity; Section 07 establishes domain-level identity; together they are issuer authentication |
| IPFS / Arweave finality vs XRPL finality | Section 06 (consensus / amendment finality) | Section 06's 80% / 2-week consensus model is what Section 07's "off-chain permanence" must NOT be confused with |
| Marketplace cache as derivative truth | Section 05 (transfer-and-trade-mechanics) | Section 05 establishes how NFTokens transfer through marketplaces; Section 07 establishes that what the marketplace shows is cached, not canonical |
| URI persistence ≠ token existence | Sections 01–06 collectively | The pack's central thesis: a token can exist on-chain (per Sections 01-06) and have its semantic content disappear (per Section 07). Section 07 is the section that prevents the synthesis from claiming "XRPL protocol is durable, therefore creator tokens are durable." |

## Watch cases — outcomes

| # | Watch case | Outcome | Note |
|---|---|---|---|
| 1 | URI on-chain ≠ metadata durability | HELD | NFTokenMint accepted claims are neutral mechanism descriptions; payload-storage page (src_3cc91a11ac53) had 0 accepted claims — the reviewer routed all 6 candidates to needs_source_repair, correctly defending against URI/persistence conflation |
| 2 | IPFS CID ≠ automatic persistence | HELD STRONGLY | Multiple accepted claims explicitly preserve the distinction: pinning required, garbage collection acknowledged, sponsor-loss explicit |
| 3 | Arweave permanence ≠ XRPL ledger finality | HELD | Only 1 accepted Arweave claim ("HTTP API documentation lists error codes") — neutral, no permanence overreach. The Arweave permanence claims that COULD have conflated were filtered by reviewer |
| 4 | Domain verification (xrp-ledger.toml) ≠ NFT metadata URI durability | HELD | xrp-ledger-toml source had 0 accepted claims; reviewer filtered out claim candidates before they could be conflated with metadata persistence |
| 5 | Marketplace/indexer caching ≠ canonical truth | HELD vacuously | xrplmeta.org/docs was dropped at URL verification (JS-shell), so no marketplace-indexer claims entered the chain; the conflation could not happen because the publisher's own surface didn't reach extraction |
| 6 | Dynamic metadata (NFTokenModify) ≠ all NFTokens | HELD | nftokenmodify source had 0 accepted claims; reviewer correctly filtered overgeneralization candidates |

The reviewer's source_repair routing was essential — 14 claims went to needs_source_repair, 7 to needs_scope_repair, and the watch-case-risky claims were captured in those routings rather than reaching acceptance.

## Section 07 specifics worth carrying into synthesis

- **The pack's central thesis lives here.** XRPL protocol durability does not imply creator-token durability. The on-chain record is only as durable as the metadata it points to. URI on-chain + content unavailable off-chain = a token whose nominal identity persists but whose semantic content does not.

- **Repair-locus discipline is unique to this section.** The pack synthesis must explicitly tell readers that off-chain durability monitoring is a separate operator burden from on-ledger monitoring. The Sections 01-06 control-plane focus is necessary but not sufficient; without Section 07's monitoring layer, "creator token durability" is half-described.

- **Pinning + Filecoin nuance.** The accepted claims about pinning services (paid, sponsor-dependent) and Filecoin (long-term storage with deals and minimum sizes) capture an important sub-thesis: IPFS persistence is itself layered. Operators should not assume "uploaded to IPFS" means "permanent"; they should specify which pinning + Filecoin combination they rely on.

- **Mutable-NFT semantics need synthesis bridge.** Section 04's NFTokenMint mint-time `tfMutable` flag analysis + Section 06's DynamicNFT amendment-state analysis + Section 07's NFTokenModify post-mint URI rotation must thread together at synthesis. A holder of a mutable NFT minted under DynamicNFT amendment has a fundamentally different durability profile than a holder of an immutable NFT minted before DynamicNFT activation.

- **Multi-publisher discipline proved itself.** The fact that Section 07 reached Terminal A WITHOUT a section_waiver — under the same v0.3.1 chain that approved Sections 01-06 with section-scoped waivers — is structural evidence that the v0.3.1 pattern is honest, not a blanket waiver vehicle. Operators should expect future packs to invoke section-scoped waivers only where the canonical-protocol concentration is structural; sections like Section 07 with genuine multi-publisher source surfaces should not need them.
