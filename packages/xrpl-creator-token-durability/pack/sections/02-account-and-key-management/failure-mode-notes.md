# Section 02 — Failure-Mode Notes

> Operator-authored, not chain-managed, not gate-relevant. Synthesis-time
> scaffolding for the eventual freeze. Written 2026-05-09 immediately after
> Section 02 reached Terminal A (`synthesis_eligible: true`, 32 accepted
> claims, monopoly waiver disclosed, 13 primary sources after re-typing).

The four-question failure-mode framework, answered against Section 02's
accepted claims (XRPL account + key management: AccountRoot fields, master
key disablement, regular key, signer-list multi-signing, tickets, account
deletion, permission/delegation values).

---

## 1. What can fail?

**Master key access lost or compromised.**
- The master key is derived from the account's seed; losing the seed
  loses the master key permanently. Rotating to a regular key
  (SetRegularKey) and disabling the master (AccountSet flag
  `lsfDisableMaster`) is the protocol-level mitigation, but only works
  if the operator did so before losing the seed.
- A compromised master key on an account that has not disabled it can
  drain the account in a single transaction; the master key always has
  full authority unless explicitly disabled.

**Regular key unset or compromised.**
- An account whose master key is disabled and whose regular key is
  unset has no signing authority — transactions cannot be authorized at
  all. The account is read-only on-ledger, with assets stranded until
  multi-signing is configured (if at all).
- A regular key compromise is recoverable: the master key (if not
  disabled) or a signer quorum (if configured) can rotate the regular
  key via SetRegularKey. Without either, recovery requires off-protocol
  recovery of the master seed.

**Signer quorum unavailable.**
- A SignerList configured with N-of-M signers becomes unusable if fewer
  than N signers are reachable / cooperating. Token issuance, key
  rotation, and reserve management on the issuer account all stall.
- SignerListSet is the only on-ledger mechanism to add/remove signers;
  if the existing signer set cannot meet quorum, the master key (if
  enabled) is the only recovery vector.

**AccountDelete preconditions unmet.**
- AccountDelete requires (a) the account be inactive for ~256 ledgers,
  (b) the account hold a sufficient XRP balance to pay the fee plus
  leave the destination account at-or-above its reserve, and (c) the
  account have no owned objects beyond a small allowed set. NFTokenPage
  presence + non-zero RippleState entries + active offers all block
  deletion.
- Operator-side concern: an issuer or holder expecting to "close out"
  an account may discover that residual ledger objects (often invisible
  in wallet UIs) prevent deletion, leaving the account permanently
  alive on-ledger with its reserves consumed.

**Ticket-pool depletion.**
- TicketCreate reserves transaction-sequence slots ahead of time so a
  signer quorum can authorize transactions out-of-order. A signer set
  that exhausts available tickets cannot authorize new transactions
  until either tickets are consumed by ledger inclusion or new tickets
  are created (which itself consumes sequence space).
- **NOT a key-recovery mechanism.** Tickets are transaction-ordering
  / transaction-reservation; they do not provide an alternate signing
  authority. Any claim or operator playbook that frames tickets as
  "key recovery" is a category error. (Reviewer correctly held this
  line during this section's review pass.)

**Permission/delegation misconfiguration.**
- Permission values define which transaction types a granted permission
  can authorize. A delegation that grants more permissions than the
  delegating account intended can let a third party authorize
  destructive operations (AccountSet flag changes, AccountDelete on
  issuer accounts the delegator controls).
- The mitigation is operator-side: review every PermissionSet
  transaction's permission_value list against the delegator's intent
  before signing.

**Wallet-UX misalignment with protocol semantics.**
- Wallet UIs may surface signer-list controls or master-key-disable
  toggles, but the protocol semantics live on-ledger. A wallet that
  reorders signer-list signers, omits SignerWeights, or fails to
  display lsfDisableMaster state can give the operator a false sense of
  account state. (This is wallet-feature territory, NOT a protocol
  failure — but holders depending on wallet UIs inherit the wallet's
  fidelity.)

---

## 2. Who can repair it?

| Failure surface | Repair role |
|-----------------|-------------|
| Master key lost / seed lost | **Holder** — only via off-protocol seed recovery. Protocol cannot recover. |
| Master key compromised, not disabled | **Holder** — disable via AccountSet `lsfDisableMaster` BEFORE the attacker drains. Race condition. |
| Regular key compromised | **Holder** (master key) or **signer quorum** — rotate via SetRegularKey. Both vectors require pre-configuration. |
| Regular key unset on master-disabled account | **Holder** — only via signer quorum (if configured) or the master seed (if recoverable). Otherwise stranded. |
| Signer quorum unavailable | **Holder** (master key, if enabled) — reset SignerList via SignerListSet. Otherwise no on-ledger recovery. |
| AccountDelete preconditions unmet | **Holder** — clear residual objects (offers, trust lines, NFT holdings) first. Issuer cannot help directly. |
| Ticket pool depletion | **Holder / signer quorum** — wait for ticket consumption or create new tickets. |
| Permission misconfiguration | **Delegator** — re-issue PermissionSet with corrected permission_value list. **Delegate** cannot self-correct. |
| Wallet UX gap | **Off-ledger wallet operator** — update client. Protocol cannot enforce. |

---

## 3. Repair locus

| Failure surface | Locus |
|-----------------|-------|
| Master key compromise | **on-ledger / holder-controlled** (disable + rotate before drain) |
| Seed loss | **off-ledger / holder-controlled** (seed-custody hygiene) |
| Regular key rotation | **on-ledger / holder-controlled** |
| Signer quorum reset | **on-ledger / holder-controlled** (master key required if quorum unavailable) |
| AccountDelete cleanup | **on-ledger / holder-controlled** (residual object removal) |
| Ticket pool | **on-ledger / holder-controlled** |
| Permission scope | **on-ledger / delegator-controlled** |
| Wallet UI fidelity | **off-ledger / not-controlled-by-XRPL-protocol** |
| Protocol-level semantic change (e.g., new AccountDelete preconditions) | **on-ledger / protocol-controlled** (validator amendment) |

The pattern: most account/key failures resolve at the holder layer if
multi-signing was configured before failure and the master key was either
preserved (off-protocol recovery vector) or cleanly disabled (no
single-key drain risk). Issuer-controlled levers exist only for the
issuer's own account; they don't help end-holders. Protocol-controlled
amendments shift semantics for the whole network — operationally rare.

---

## 4. What should a creator-side control plane monitor?

**On-ledger surface (rippled JSON-RPC):**
- `account_info` per tracked account — track AccountRoot flags
  (`lsfDisableMaster`, `lsfDefaultRipple`, `lsfRequireDestTag`, etc.),
  the `RegularKey` field (set / unset), `MessageKey` if used,
  `Sequence`, `Domain`. Flag transitions on flag fields surface
  master-disable / freeze / clawback-permission state changes.
- `account_objects` per tracked account — enumerate SignerList entries
  (signer count, weights, quorum); enumerate Ticket entries (pool
  depth); enumerate residual ledger objects that would block
  AccountDelete (offers, RippleState non-zero balances, NFTokenPage
  entries).
- Signer-quorum availability — for accounts with a SignerList, monitor
  reachability of each signer's signing key. A quorum that drops
  below N is operationally stranded even if the SignerList is intact.
- Ticket-pool depth forecast — track ticket consumption rate vs.
  creation rate; alert when projected pool depletion is imminent.
- AccountDelete-precondition watch — periodically compute "would
  AccountDelete succeed right now?" for accounts the operator plans
  to retire; surface blockers (offers, NFTokens, trust-lines) early.

**Off-ledger surface:**
- Master-seed custody hygiene — verify recovery paths for tracked
  accounts (multi-sig signers contactable, hardware-wallet seeds
  backed up, etc.). Off-protocol; the control plane can only surface
  "you need to verify this," not verify it directly.
- Wallet/client compatibility — track whether tracked accounts'
  wallet vendors correctly render the AccountRoot flag state and
  signer-list configuration. An operator using a wallet that hides
  `lsfDisableMaster` may make decisions based on stale UI.
- Amendment-pipeline news — watch for amendments affecting
  AccountSet flags, signer-list semantics, or AccountDelete
  preconditions; forecast operator-action items before activation.

**Cross-cutting alerts:**
- "Single-key drain risk" — any tracked account with a non-disabled
  master key + meaningful XRP / token balance + no multi-sig fallback
  is at single-key drain risk. Surface at high priority.
- "Stranded read-only" — any tracked account with master disabled +
  no regular key + no SignerList + no quorum-reachable signers is
  stranded. Surface at critical priority.
- "AccountDelete blocker drift" — for accounts intended for retirement,
  surface new ledger objects that block deletion as they accumulate
  (e.g., a new NFTokenPage entry from an unexpected mint).
- "Ticket exhaustion forecast" — projected ticket-pool depletion
  against expected transaction throughput.

---

## Synthesis-time disclosure (load-bearing per v0.3.1 waiver discipline)

Per the section-scoped `min_independent_publishers` waiver active on
this section, the section synthesis (`final-report.md` for the section)
must explicitly surface that the canonical sources are
publisher-concentrated by design — XRPL Foundation owns the
account-management spec (xrpl.org concept docs), the transaction-type
references (AccountSet / SetRegularKey / SignerListSet / AccountDelete /
TicketCreate), the ledger-entry-type references (AccountRoot,
SignerList), the permission-values data-type reference, and the
account_info JSON-RPC method documentation. The single GitHub Search
API issue source provides supplementary AccountDelete-edge-case
evidence; it is typed forum (developer discussion), not first-party
canonical.

This disclosure mirrors the discipline applied in Sections 01 and 03.
Each section that invokes the section-scoped waiver carries its own
synthesis-time disclosure obligation; the disciplines do not aggregate
or short-circuit each other.

**Section 07 (metadata and off-chain durability) will NOT carry this
waiver pattern.** IPFS / Arweave / HTTP / marketplace-indexer publishers
contribute genuinely independent evidence for metadata-layer questions,
where the global publisher-diversity floor remains the correct guard.

---

## Notable section-02 reviewer holds

The reviewer correctly held two scope boundaries during this section's
review pass:

- **Wallet-UX claims did not slip through as protocol claims.** The
  one accepted claim mentioning "wallet" was specifically about
  `wallet_propose` (a JSON-RPC method on rippled, protocol-level), not
  about a wallet UI feature. No "wallet provides signer UI" or
  "wallet exposes flag toggle" claims surfaced as accepted.
- **Ticket semantics stayed protocol-correct.** Tickets were treated as
  transaction-ordering / transaction-reservation, not as a
  key-recovery mechanism. No claims conflated TicketCreate with
  account-recovery semantics.

These are the two specific watch-cases the Session E kickoff flagged.
Both held cleanly without operator intervention beyond the standard
review pass. Strengthens the case that the calibrated reviewer is
appropriately scope-strict on canonical-protocol material.

---

## Status

- Section 02 chain: gate WARN, `synthesis_eligible: true`, 32 accepted
  claims, 0 blocking reasons, 1 waiver applied (min_independent_publishers).
- Status: `gated`. Eligible for cross-section synthesis once all 7
  sections reach a comparable state. Three sections now gated (01, 02,
  03); four remain (04, 05, 06, 07).
- Source-card typing: 13 primary (XRPL Foundation canonical), 1 forum
  (api.github.com developer discussion). All re-typed in Session E
  after the LLM extractor's initial classifications (13 docs, 1 unknown).
- Notable Session E finding (F-27): the cross-section gather of
  AccountRoot + account_info URLs reverted Session D's primary-typing
  for those source cards back to docs. Session E re-applied the typing
  to bring Section 03's gate verdict back to its post-Session-D state.
- These notes are scaffolding, not chain artifacts. Update or replace
  during synthesis-time per claim-ID grounding.
