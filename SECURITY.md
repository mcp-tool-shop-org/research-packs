# Security Policy

## Threat model

**research-packs is a static archive.** It contains no executable server code, no user authentication, no network services, and no telemetry.

**Data touched:** Frozen research artifacts — JSONL ledgers, Markdown documents, YAML configs, and JSON metadata. All content is read-only after freeze.

**Data NOT touched:** No credentials, no tokens, no user data, no external API keys. The `scripts/` directory contains Node.js scripts that read local files and compute sha256 hashes — they perform no network requests.

**Permissions required:** Read access to `packages/` subdirectories. No elevated privileges, no file writes outside the repo, no external network calls.

**Attack surface:** Essentially zero for end users who read the published archive. The primary risk surface is supply-chain: a compromised `vitest` or `zod` dev dependency could affect local development. Use `npm audit` to track.

## Supported versions

This is an archive monorepo, not a versioned software product. All content in `packages/` is frozen and does not receive security updates. If a frozen pack contains claims that are later found to be factually wrong, that is a research-quality finding, not a security vulnerability.

## Reporting a vulnerability

If you discover a genuine security issue in the scripts or CI pipeline (e.g., a path traversal in `verify-pack.mjs`, a dependency with a known CVE), please report it to:

**Email:** 64996768+mcp-tool-shop@users.noreply.github.com

**Response timeline:** We aim to acknowledge within 7 days and resolve within 30 days for confirmed vulnerabilities.

Please do not open public GitHub issues for security vulnerabilities until they are patched.
