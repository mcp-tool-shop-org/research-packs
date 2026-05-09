#!/usr/bin/env node
/**
 * verify-pack.mjs — Re-verifies a frozen research pack against its freeze receipt.
 *
 * Usage: node scripts/verify-pack.mjs <package-dir> [<package-dir> ...]
 *
 * Steps:
 *   1. Refuse if any of the 5 admission-contract files are missing.
 *   2. Parse pack.manifest.json via the Zod schema (refuse on schema violation).
 *   3. Compute sha256 of pack/audits/freeze-receipt.json and compare to manifest's freeze_receipt_sha256.
 *   4. Parse the freeze receipt and re-compute sha256 of every fingerprinted artifact.
 *   5. Print PASS with summary or FAIL with the offending file.
 */

import { createHash } from 'node:crypto';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseManifest } from './manifest-schema.mjs';

const REQUIRED_FILES = [
  'pack/audits/freeze-receipt.json',
  'synthesis/final-report.md',
  'synthesis/decision-brief.md',
  'pack.manifest.json',
  'README.md',
];

function sha256File(filePath) {
  const content = readFileSync(filePath);
  return { hash: createHash('sha256').update(content).digest('hex'), bytes: content.length };
}

function verifyPack(packageDir) {
  const dir = resolve(packageDir);
  const dirLabel = packageDir;

  // Step 1: Check admission contract files
  for (const rel of REQUIRED_FILES) {
    const full = join(dir, rel);
    if (!existsSync(full)) {
      return { pass: false, reason: `MISSING required file: ${rel}`, name: dirLabel };
    }
  }

  // Step 2: Parse and validate pack.manifest.json
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(join(dir, 'pack.manifest.json'), 'utf8'));
  } catch (e) {
    return { pass: false, reason: `pack.manifest.json parse error: ${e.message}`, name: dirLabel };
  }
  const parsed = parseManifest(manifest);
  if (!parsed.success) {
    const issues = parsed.error.issues.map(i => `  ${i.path.join('.')}: ${i.message}`).join('\n');
    return { pass: false, reason: `pack.manifest.json schema violation:\n${issues}`, name: dirLabel };
  }

  const packName = parsed.data.name;

  // Step 3: Verify freeze_receipt_sha256 matches actual file
  const receiptPath = join(dir, 'pack/audits/freeze-receipt.json');
  const { hash: actualReceiptHash, bytes: receiptBytes } = sha256File(receiptPath);
  if (actualReceiptHash !== parsed.data.freeze_receipt_sha256) {
    return {
      pass: false,
      reason: `freeze-receipt.json hash mismatch.\n  manifest: ${parsed.data.freeze_receipt_sha256}\n  actual:   ${actualReceiptHash}`,
      name: packName,
    };
  }

  // Step 4: Parse freeze receipt and re-verify all fingerprinted artifacts
  let receipt;
  try {
    receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
  } catch (e) {
    return { pass: false, reason: `freeze-receipt.json parse error: ${e.message}`, name: packName };
  }

  const allFingerprints = [
    ...(receipt.canonical_artifact_hashes || []),
    ...(receipt.synthesis_hashes || []),
  ];

  let verified = 0;
  for (const entry of allFingerprints) {
    const artifactPath = join(dir, 'pack', entry.path);
    if (!existsSync(artifactPath)) {
      return { pass: false, reason: `Fingerprinted artifact missing: pack/${entry.path}`, name: packName };
    }
    const { hash: actualHash } = sha256File(artifactPath);
    if (actualHash !== entry.sha256) {
      return {
        pass: false,
        reason: `Hash mismatch for pack/${entry.path}.\n  receipt: ${entry.sha256}\n  actual:  ${actualHash}`,
        name: packName,
      };
    }
    verified++;
  }

  return {
    pass: true,
    name: packName,
    summary: {
      sections: parsed.data.totals.sections,
      accepted_claims: parsed.data.totals.accepted_claims,
      artifacts_verified: verified,
      receipt_sha256: actualReceiptHash,
      receipt_bytes: receiptBytes,
    },
  };
}

// CLI entrypoint
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/verify-pack.mjs <package-dir> [...]');
  process.exit(1);
}

// Expand glob-like "packages/*" if shell doesn't expand it (Windows)
const packageDirs = [];
for (const arg of args) {
  if (arg.includes('*')) {
    const base = arg.replace(/\*.*$/, '').replace(/[/\\]$/, '');
    try {
      const entries = readdirSync(base, { withFileTypes: true });
      for (const e of entries) {
        if (e.isDirectory()) packageDirs.push(join(base, e.name));
      }
    } catch {
      packageDirs.push(arg);
    }
  } else {
    packageDirs.push(arg);
  }
}

let allPassed = true;
for (const dir of packageDirs) {
  const result = verifyPack(dir);
  if (result.pass) {
    const s = result.summary;
    console.log(`PASS  ${result.name}`);
    console.log(`      sections=${s.sections} accepted_claims=${s.accepted_claims} artifacts_verified=${s.artifacts_verified}`);
    console.log(`      receipt_sha256=${s.receipt_sha256} (${s.receipt_bytes} bytes)`);
  } else {
    console.error(`FAIL  ${result.name}`);
    console.error(`      ${result.reason}`);
    allPassed = false;
  }
}

process.exit(allPassed ? 0 : 1);
