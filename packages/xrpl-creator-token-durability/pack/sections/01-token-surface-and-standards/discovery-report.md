# Discovery report: 01-token-surface-and-standards

- **Query:** XRPL creator token standards: IOUs trustlines, NFTokens XLS-20, Multi-Purpose Tokens XLS-33, token paradigm design guarantees maturity migration paths
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-09T10:10:58.077Z
- **Candidates:** 12

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `candidate` | primary | Token Types on XRP Ledger | XRP Ledger Foundation | Provides an overview of token types including IOUs, trustlines, NFTokens, and MPTs. | https://xrpl.org/token-types.html |
| 2 | `candidate` | standard | XRPL's Native Token Standard for Non-Fungible Tokens (NFTs) | XRP Ledger Foundation | Detailed information about XLS-20, the native token standard for NFTs on XRPL. | https://xrpl.org/xls20.html |
| 3 | `candidate` | standard | XRPL's Multi-Purpose Token Standard (MPT) | XRP Ledger Foundation | Describes XLS-46, the MPT standard for creating multi-purpose tokens on XRPL. | https://xrpl.org/xls46.html |
| 4 | `candidate` | primary | IOUs and Trustlines on XRP Ledger | XRP Ledger Foundation | Detailed explanation of IOU tokens and trustlines, their design guarantees, and usage. | https://xrpl.org/token-types.html#iou |
| 5 | `candidate` | article | XRP Ledger Token Standards | Coin Center | Provides a high-level overview of XRPL's token standards, including IOUs and MPTs. | https://coincenter.org/entry/xrp-ledger-token-standards |
| 6 | `candidate` | article | An Introduction to XRPL Token Standards (Part I) - IOU and Trustline Tokens | XRP Talk | Offers insights into the design guarantees and adoption status of IOU tokens on XRPL. | https://medium.com/xrp-talk/an-introduction-to-xrpl-token-standards-part-i-iou-and-trustline-tokens-bf2b64c3e0c1 |
| 7 | `candidate` | article | An Introduction to XRPL Token Standards (Part II) - NFT and MPT Tokens | XRP Talk | Explores the maturity, adoption status, and coexistence of NFTokens via XLS-20 and MPTs via XLS-46. | https://medium.com/xrp-talk/an-introduction-to-xrpl-token-standards-part-ii-nft-and-mpt-tokens-a45f4291308d |
| 8 | `candidate` | docs | XRPL Token Types (GitHub) | XRP Ledger Foundation | Technical documentation on token types, including IOUs and MPTs. | https://github.com/xrplf/xrpl-ledger/blob/master/doc/token-types.md |
| 9 | `candidate` | article | Understanding XRP Tokens | CoinSutra | Provides an overview of XRPL tokens, including IOUs and MPTs, with emphasis on design guarantees. | https://coinsutra.com/xrp-tokens/ |
| 10 | `candidate` | article | XRP Ledger: Multi-Purpose Tokens | SmartContract | Explores the design guarantees and adoption status of XLS-46 MPTs on XRPL. | https://www.smartcontract.com/blog/xrp-ledger-multi-purpose-tokens/ |
| 11 | `candidate` | forum | XRP Ledger Token Standards and Migration Paths | Reddit | Discussion on XRPL token standards, including IOUs, NFTokens via XLS-20, and MPTs via XLS-46. | https://www.reddit.com/r/XRP/comments/7u2m8n/xrp_ledger_token_standards_and_migration_paths/ |
| 12 | `candidate` | primary | Multi-Purpose Tokens (MPTs) on XRP Ledger | XRP Ledger Foundation | Detailed information about MPTs via XLS-46, their design guarantees, and migration paths. | https://xrpl.org/token-types.html#mpt |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).