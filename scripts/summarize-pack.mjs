#!/usr/bin/env node
/**
 * summarize-pack.mjs — Derives README.md from synthesis/final-report.md + pack.manifest.json.
 *
 * Deterministic: same inputs always produce same output.
 * This is load-bearing for Experiment 2 (research-os pack publish automation).
 *
 * Usage: node scripts/summarize-pack.mjs <package-dir>
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseManifest } from './manifest-schema.mjs';

function extractSummary(markdown) {
  const lines = markdown.split('\n');
  let inSummary = false;
  const summaryLines = [];
  for (const line of lines) {
    if (/^## Summary\s*$/.test(line)) { inSummary = true; continue; }
    if (inSummary && /^## /.test(line)) break;
    if (inSummary) summaryLines.push(line);
  }
  return summaryLines.join('\n').trim();
}

function formatDate(iso) {
  return iso.slice(0, 10);
}

export function generateReadme(manifest, finalReport) {
  const parsed = parseManifest(manifest);
  if (!parsed.success) {
    throw new Error(`Invalid manifest: ${parsed.error.message}`);
  }
  const m = parsed.data;
  const frozenDate = formatDate(m.frozen_at);
  const summary = extractSummary(finalReport);

  const sectionTable = m.sections
    .map(s => `| ${s.id} | ${s.accepted_claims} | ${s.gate} | ${s.synthesis_eligible ? 'yes' : 'no'} |`)
    .join('\n');

  const operatorSection = m.operator_notes
    ? `\n---\n\n## Operator notes\n\n${m.operator_notes}\n`
    : '';

  return `# ${m.name}

**Topic:** ${m.topic}

**Frozen:** ${frozenDate} | **research-os version:** ${m.research_os_version} | **Accepted claims:** ${m.totals.accepted_claims} across ${m.totals.sections} sections

---

## Executive summary

${summary}

---

## Sections

| Section | Accepted claims | Gate | Synthesis eligible |
|---------|-----------------|------|-------------------|
${sectionTable}

**Totals:** ${m.totals.accepted_claims} accepted, ${m.totals.dispositioned} dispositioned, ${m.totals.preserved_contradiction_records != null ? `Preserved contradiction records: ${m.totals.preserved_contradiction_records}` : `${m.totals.unresolved_contradictions} unresolved contradictions`}

---

## How to read this pack

This package is part of the [\`research-packs\`](../../README.md) archive.

- **Lane 1 (synthesis):** You are here. See [\`synthesis/final-report.md\`](synthesis/final-report.md) for the full citation-clean prose.
- **Lane 2 (evidence):** [\`pack/\`](pack/) — full frozen ledgers, source cards, excerpts, claim reviews, gate results, and \`audits/freeze-receipt.json\`.
- **Lane 3 (method):** [\`../../docs/\`](../../docs/) — artifact contract, how-to-read, source quality notes.

To verify this pack's integrity: \`node ../../scripts/verify-pack.mjs .\` from this directory.

See [\`docs/how-to-read-this.md\`](docs/how-to-read-this.md) for pack-specific reading notes.
${operatorSection}`;
}

// Only execute CLI logic when run directly, not when imported as a module
const selfUrl = new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const isMain = process.argv[1] != null &&
  (process.argv[1].replace(/\\/g, '/') === selfUrl.replace(/\\/g, '/') ||
   process.argv[1].endsWith('summarize-pack.mjs'));

if (isMain) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/summarize-pack.mjs <package-dir>');
    process.exit(1);
  }

  const packageDir = resolve(args[0]);
  const manifestPath = join(packageDir, 'pack.manifest.json');
  const finalReportPath = join(packageDir, 'synthesis/final-report.md');
  const readmePath = join(packageDir, 'README.md');

  if (!existsSync(manifestPath)) {
    console.error(`ERROR: pack.manifest.json not found at ${manifestPath}`);
    process.exit(1);
  }
  if (!existsSync(finalReportPath)) {
    console.error(`ERROR: synthesis/final-report.md not found at ${finalReportPath}`);
    process.exit(1);
  }

  let manifest, finalReport;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    finalReport = readFileSync(finalReportPath, 'utf8');
  } catch (e) {
    console.error(`ERROR reading inputs: ${e.message}`);
    process.exit(1);
  }

  let readme;
  try {
    readme = generateReadme(manifest, finalReport);
  } catch (e) {
    console.error(`ERROR generating README: ${e.message}`);
    process.exit(1);
  }

  writeFileSync(readmePath, readme, 'utf8');
  console.log(`Written: ${readmePath}`);
}
