import { describe, it, expect, beforeEach } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { buildMockPack } from './helpers/setup-mock-pack.mjs';

const VERIFY_SCRIPT = fileURLToPath(new URL('../scripts/verify-pack.mjs', import.meta.url));

function runVerify(dir) {
  try {
    const out = execFileSync(process.execPath, [VERIFY_SCRIPT, dir], { encoding: 'utf8' });
    return { code: 0, stdout: out, stderr: '' };
  } catch (e) {
    return { code: e.status ?? 1, stdout: e.stdout ?? '', stderr: e.stderr ?? '' };
  }
}

describe('verify-pack.mjs', () => {
  let tmpDir;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'research-packs-test-'));
    buildMockPack(tmpDir);
  });

  it('PASSes on a valid mock pack', () => {
    const result = runVerify(tmpDir);
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('PASS');
    expect(result.stdout).toContain('mock-pack');
    expect(result.stdout).toContain('sections=2');
    expect(result.stdout).toContain('accepted_claims=8');
  });

  it('reports receipt_sha256 in PASS output', () => {
    // The pack was already built by beforeEach; just verify the hash appears
    const result = runVerify(tmpDir);
    // Should contain a 64-char hex receipt hash somewhere in the output
    expect(result.stdout).toMatch(/receipt_sha256=[a-f0-9]{64}/);
  });

  it('FAILs when README.md is missing', () => {
    rmSync(join(tmpDir, 'README.md'));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
    expect(result.stdout + result.stderr).toContain('README.md');
  });

  it('FAILs when pack.manifest.json is missing', () => {
    rmSync(join(tmpDir, 'pack.manifest.json'));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
  });

  it('FAILs when synthesis/final-report.md is missing', () => {
    rmSync(join(tmpDir, 'synthesis/final-report.md'));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
  });

  it('FAILs when synthesis/decision-brief.md is missing', () => {
    rmSync(join(tmpDir, 'synthesis/decision-brief.md'));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
  });

  it('FAILs when freeze-receipt.json is missing', () => {
    rmSync(join(tmpDir, 'pack/audits/freeze-receipt.json'));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
  });

  it('FAILs on schema violation in pack.manifest.json', () => {
    const bad = { name: 'x', topic: 'y' }; // missing required fields
    writeFileSync(join(tmpDir, 'pack.manifest.json'), JSON.stringify(bad));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
    expect(result.stdout + result.stderr).toContain('schema violation');
  });

  it('FAILs when freeze_receipt_sha256 in manifest does not match actual file', () => {
    const manifestPath = join(tmpDir, 'pack.manifest.json');
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest.freeze_receipt_sha256 = 'b'.repeat(64);
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
    expect(result.stdout + result.stderr).toContain('hash mismatch');
  });

  it('FAILs when a fingerprinted artifact has been modified', () => {
    // Mutate a canonical artifact after building the pack
    const claimsPath = join(tmpDir, 'pack/sections/01-intro/claims.jsonl');
    writeFileSync(claimsPath, '{"claim_id":"clm_tampered","text":"tampered"}\n');
    // The manifest still has the old receipt hash (unmodified), so the receipt
    // hash check passes, but the artifact hash check fails
    const result = runVerify(tmpDir);
    expect(result.code).toBe(1);
    expect(result.stdout + result.stderr).toContain('FAIL');
  });
});
