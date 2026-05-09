# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] — 2026-05-09

### Added
- Initial monorepo scaffold with three-lane README, LICENSE, SECURITY.md
- `catalog.json` — machine-readable index of admitted packs
- `docs/` — how-to-read-a-pack, artifact-contract, source-quality-notes (stub), operator-playbook (stub)
- `scripts/manifest-schema.mjs` — Zod schema for `pack.manifest.json`
- `scripts/verify-pack.mjs` — re-verifies freeze receipt fingerprints against pack contents
- `scripts/summarize-pack.mjs` — derives `README.md` from `synthesis/final-report.md` + `pack.manifest.json`
- `tests/` — Vitest suite covering manifest schema, verify-pack, summarize-pack
- `packages/research-os-self-dogfood/` — backfill of the v0.1 self-dogfood pack (296 accepted claims, 8 sections, frozen 2026-05-08)
- CI workflow — verifies all packages on PR and push to main
