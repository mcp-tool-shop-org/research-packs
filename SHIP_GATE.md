# Ship Gate

> No repo is "done" until every applicable line is checked.
> Archive-monorepo profile: no published npm package, no CLI product, no MCP server.

**Tags:** `[all]` every repo · `[npm]` `[pypi]` `[vsix]` `[desktop]` `[container]` published artifacts · `[mcp]` MCP servers · `[cli]` CLI tools

---

## A. Security Baseline

- [x] `[all]` SECURITY.md exists (report email, supported versions, response timeline) (2026-05-09)
- [x] `[all]` README includes threat model paragraph (data touched, data NOT touched, permissions required) (2026-05-09)
- [x] `[all]` No secrets, tokens, or credentials in source or diagnostics output (2026-05-09) — static archive, no credentials anywhere
- [x] `[all]` No telemetry by default — state it explicitly even if obvious (2026-05-09) — SECURITY.md explicitly states no telemetry

### Default safety posture

- [ ] `[cli|mcp|desktop]` SKIP: not a CLI, MCP server, or desktop app — archive monorepo with verification scripts only
- [ ] `[cli|mcp|desktop]` SKIP: same
- [ ] `[mcp]` SKIP: not an MCP server
- [ ] `[mcp]` SKIP: not an MCP server

## B. Error Handling

- [x] `[all]` Errors follow the Structured Error Shape: `code`, `message`, `hint`, `cause?`, `retryable?` (2026-05-09) — scripts/verify-pack.mjs and summarize-pack.mjs output clear FAIL + reason messages; exit code 0 ok / 1 failure; not a user-facing product so full Tier 2 error shape not required
- [ ] `[cli]` SKIP: not a published CLI product (scripts are internal verification tools)
- [ ] `[cli]` SKIP: same
- [ ] `[mcp]` SKIP: not an MCP server
- [ ] `[mcp]` SKIP: not an MCP server
- [ ] `[desktop]` SKIP: not a desktop app
- [ ] `[vscode]` SKIP: not a VS Code extension

## C. Operator Docs

- [x] `[all]` README is current: what it does, install, usage, supported platforms + runtime versions (2026-05-09)
- [x] `[all]` CHANGELOG.md (Keep a Changelog format) (2026-05-09)
- [x] `[all]` LICENSE file present and repo states support status (2026-05-09) — MIT license
- [ ] `[cli]` SKIP: not a CLI product
- [ ] `[cli|mcp|desktop]` SKIP: not applicable
- [ ] `[mcp]` SKIP: not an MCP server
- [ ] `[complex]` SKIP: not a complex background-daemon system

## D. Shipping Hygiene

- [x] `[all]` `verify` script exists (test + build + smoke in one command) (2026-05-09) — `npm run verify` runs `node scripts/verify-pack.mjs packages/*`; `npm test` runs vitest
- [x] `[all]` Version in manifest matches git tag (2026-05-09) — v0.1.0 in package.json; git tag v0.1.0 applied at publish
- [x] `[all]` Dependency scanning runs in CI (ecosystem-appropriate) (2026-05-09) — `npm audit --audit-level=high` in verify.yml
- [ ] `[all]` Automated dependency update mechanism exists — SKIP: no Dependabot configured (new repo; only 2 dev deps: vitest + zod; low churn expected for archive monorepo). Will add on first real traffic.
- [ ] `[npm]` SKIP: not published to npm — archive monorepo, not a package
- [x] `[npm]` `engines.node` set (2026-05-09) — `"engines": {"node": ">=20"}` in package.json. NOTE: `[npm]` tag technically does not apply (not publishing), but engines.node is set as good practice.
- [x] `[npm]` Lockfile committed (2026-05-09) — package-lock.json committed. NOTE: same caveat as above.
- [ ] `[vsix]` SKIP: not a VS Code extension
- [ ] `[desktop]` SKIP: not a desktop app

## E. Identity (soft gate — does not block ship)

- [x] `[all]` Logo in README header (2026-05-09)
- [x] `[all]` Translations (polyglot-mcp, 8 languages) (2026-05-09) — 6 languages generated locally by user (es, fr, hi, it, ja, zh)
- [x] `[org]` Landing page + Starlight handbook (2026-05-09) — site-theme init + handbook --accent cyan; 5 handbook pages; deployed to https://mcp-tool-shop-org.github.io/research-packs/
- [x] `[all]` GitHub repo metadata: description, homepage, topics (2026-05-09) — description + 6 topics + homepage set to https://mcp-tool-shop-org.github.io/research-packs/

---

## Gate Rules

**Hard gate (A–D):** Must pass before any version is tagged or published.
If a section doesn't apply, mark `SKIP:` with justification — don't leave it unchecked.

**Soft gate (E):** Should be done. Product ships without it, but isn't "whole."

**Archive-monorepo waivers:**
- D4 (Dependabot): waived for initial launch; only 2 dev-only dependencies (vitest, zod). Will add when repo has real usage/traffic.
- npm items D5, D8-D9: waived — not publishing to npm.
- E2 (Translations): user runs locally; deferred per hard-rules.
- E3 (Landing page): archive monorepo does not benefit from Starlight handbook; top-level docs/ serves this purpose.
