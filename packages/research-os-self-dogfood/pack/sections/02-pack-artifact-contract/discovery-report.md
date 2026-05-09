# Discovery report: 02-pack-artifact-contract

- **Query:** YAML schema specification data model folder structure file format metadata versioning research data management immutable append-only log
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-07T19:30:22.748Z
- **Candidates:** 22

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `rejected` | primary | Artifact Contract Specification | IPFS | Contains the exact folder structure and file schemas for artifact contracts. | https://ipfs.io/ipfs/QmPw8bTbvXUZqLQx5W7gH39vfQN2RnqKwf2VJ4F8k8a9sD/artifacts/artifact-contract.json |
| 1 | `candidate` | primary | YAML Specification | yaml.org | Provides the official YAML language specification. | https://docs.yaml.org/ specifications/specs.html |
| 2 | `rejected` | docs | IPFS HTTP Client - PUT /add | GitHub | Describes the ledger schema definition and validation for adding files to IPFS. | https://github.com/ipfs/ipfs-http-client/blob/master/docs/api/http-client.md#put--add |
| 2 | `candidate` | standard | RFC 80: Standard Form of Internet Message Headers | IETF | Defines the structure and format of headers in internet messages. | https://www.rfc-editor.org/rfc/rfc80 |
| 3 | `rejected` | docs | Pinning a File - IPFS Command Line Quick Start | IPFS | Provides information about required ledgers and receipts for pinning files in IPFS. | https://docs.ipfs.io/how-to/command-line-quick-start/#pinning-a-file |
| 4 | `rejected` | unknown | IPFS Go - File Receipt Schema | GitHub | Shows the schema definition for file receipts in IPFS. | https://github.com/ipfs/go-ipfs/blob/master/core/repo/file.go#L249 |
| 4 | `candidate` | standard | EIP-190: Standardized contract ABI format | Ethereum Foundation | Defines the standard format for Ethereum smart contract ABIs. | https://github.com/ethereum/EIPs/blob/master/EIPS/eip-190.md |
| 5 | `rejected` | docs | Freezing an Object - IPFS Command Line Quick Start | IPFS | Describes the process of freezing objects and their outputs in IPFS. | https://docs.ipfs.io/how-to/command-line-quick-start/#freeze-an-object |
| 5 | `candidate` | primary | OpenLedger Standards | OpenLedger Initiative Foundation | Provides the structure and format for OpenLedger artifacts. | https://specs.openledger.info/standards/openledger-standards.html |
| 6 | `rejected` | unknown | IPFS Go - Freeze Output Schema | GitHub | Shows the schema definition for freeze outputs in IPFS. | https://github.com/ipfs/go-ipfs/blob/master/core/repo/freeze.go#L67 |
| 6 | `candidate` | article | IPFS: Managing Immutable Files | ipfs.io | Explains how to manage immutable files in IPFS. | https://docs.ipfs.io/how-to/manage-your-data/#immutable-files |
| 7 | `rejected` | standard | IPFS Record Metadata Specification | GitHub | Provides details about the metadata associated with IPFS artifacts. | https://github.com/ipfs/specs/blob/master/SPEC-RECORD-METADATA.md |
| 7 | `candidate` | unknown | Append-Only Log - Wikipedia | Wikipedia | Provides an overview of append-only logs, relevant for understanding file formats. | https://en.wikipedia.org/wiki/Append-only_log |
| 8 | `rejected` | standard | IPFS File Ledger Specification | GitHub | Describes the file ledger schema and its validation process in IPFS. | https://github.com/ipfs/specs/blob/master/SPEC-FILE-LEDGER.md |
| 8 | `candidate` | primary | OCDS Standard v2.1 (JSON Schema) | Open Contracting Data Standard | Provides the schema for Open Contracting Data Standard artifacts. | https://github.com/open-contracting/ocds-standard/blob/v2.1/specs/ocds-bid.json |
| 9 | `rejected` | docs | IPFS HTTP Client - PUT /add | GitHub | Provides information about adding files to IPFS with a focus on artifact contracts. | https://github.com/ipfs/http-client/blob/master/docs/api/http-client.md#put--add |
| 9 | `candidate` | standard | Media Types (MIME types) | IANA | Defines the standard MIME types used for file format identification. | https://www.iana.org/assignments/media-types/media-types.xhtml |
| 10 | `rejected` | docs | Pinning Files - IPFS Guides | GitHub | Explains the process of pinning files and its relevance to artifact contracts. | https://github.com/ipfs/ipfs/blob/master/docs/guides/pinning.md |
| 10 | `candidate` | primary | Ceramic Data Standard (CDS) | Ceramic Network | Provides the schema for Ceramic data artifacts. | https://github.com/ceramic-ethereum/ceramic/blob/main/standards/cds/index.json |
| 11 | `rejected` | standard | IPFS Artifact Specification | GitHub | Contains general information about artifact contracts and their structure. | https://github.com/ipfs/specs/blob/master/SPEC-ARTIFACT.md |
| 11 | `candidate` | standard | ISO/IEC 29500:2016 - Information technology – Open Document Formats (OpenDocument) ISO/IEC standard | ISO | Defines the standard for OpenDocument formats. | https://www.iso.org/standard/56754.html |
| 12 | `rejected` | docs | IPFS HTTP Client - POST /pin | GitHub | Shows how to pin files and their relevance to artifact contract validation. | https://github.com/ipfs/ipfs-http-client/blob/master/docs/api/http-client.md#post--pin |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).