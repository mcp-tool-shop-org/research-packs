/**
 * setup-mock-pack.mjs — Creates a valid mock pack with correct sha256 fingerprints.
 *
 * Call buildMockPack(tmpDir) to create a complete, verify-pass-ready pack
 * in a given directory. Returns the freeze_receipt_sha256 for assertions.
 */

import { createHash } from 'node:crypto';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function sha256(content) {
  const buf = typeof content === 'string' ? Buffer.from(content, 'utf8') : content;
  return { hash: createHash('sha256').update(buf).digest('hex'), bytes: buf.length };
}

function write(filePath, content) {
  mkdirSync(filePath.replace(/[/\\][^/\\]+$/, ''), { recursive: true });
  const buf = typeof content === 'string' ? Buffer.from(content, 'utf8') : content;
  writeFileSync(filePath, buf);
  return sha256(buf);
}

export function buildMockPack(dir) {
  const canonicalFiles = {};

  // Canonical artifacts (live inside pack/)
  const researchYaml = 'research_os_version: 0.1.0\ntopic: mock\nfrozen_at: 2026-01-01T00:00:00.000Z\nsections:\n  - id: 01-intro\n    status: frozen\n';
  canonicalFiles['research.yaml'] = write(join(dir, 'pack/research.yaml'), researchYaml);

  const claimsContent = '{"claim_id":"clm_mock_001","text":"mock claim"}\n';
  canonicalFiles['sections/01-intro/claims.jsonl'] = write(join(dir, 'pack/sections/01-intro/claims.jsonl'), claimsContent);

  const sourcesContent = '{"source_id":"src_mock_001","url":"https://example.com"}\n';
  canonicalFiles['sections/01-intro/sources.jsonl'] = write(join(dir, 'pack/sections/01-intro/sources.jsonl'), sourcesContent);

  const reviewsContent = '{"claim_id":"clm_mock_001","decision":"accepted_for_synthesis"}\n';
  canonicalFiles['sections/01-intro/claim-reviews.jsonl'] = write(join(dir, 'pack/sections/01-intro/claim-reviews.jsonl'), reviewsContent);

  const gatesYaml = 'min_sources: 4\n';
  canonicalFiles['sections/01-intro/gates.yaml'] = write(join(dir, 'pack/sections/01-intro/gates.yaml'), gatesYaml);

  // Synthesis files (fingerprinted in synthesis_hashes, live inside pack/synthesis/)
  const finalReport = '# Final Report\n\n## Summary\n\nThis is a mock final report for testing.\n\nKey finding: everything works.\n\n## Body\n\nMock body.\n';
  const decisionBrief = '# Decision Brief\n\nNo waivers active.\n';
  const crossSectionMap = '{"sections":[]}\n';
  const crossSectionMapMd = '# Cross-Section Map\n\nMock.\n';
  const workingReport = '# Working Report\n\nMock.\n';

  canonicalFiles['synthesis/final-report.md'] = write(join(dir, 'pack/synthesis/final-report.md'), finalReport);
  canonicalFiles['synthesis/decision-brief.md'] = write(join(dir, 'pack/synthesis/decision-brief.md'), decisionBrief);
  canonicalFiles['synthesis/cross-section-map.json'] = write(join(dir, 'pack/synthesis/cross-section-map.json'), crossSectionMap);
  canonicalFiles['synthesis/cross-section-map.md'] = write(join(dir, 'pack/synthesis/cross-section-map.md'), crossSectionMapMd);
  canonicalFiles['synthesis/working-report.md'] = write(join(dir, 'pack/synthesis/working-report.md'), workingReport);

  // Build the freeze receipt
  const receipt = {
    pack_id: 'mock0001',
    pack_topic: 'mock',
    frozen_at: '2026-01-01T00:00:00.000Z',
    verdict: 'frozen',
    canonical_artifact_hashes: [
      { path: 'research.yaml', sha256: canonicalFiles['research.yaml'].hash, bytes: canonicalFiles['research.yaml'].bytes },
      { path: 'sections/01-intro/claims.jsonl', sha256: canonicalFiles['sections/01-intro/claims.jsonl'].hash, bytes: canonicalFiles['sections/01-intro/claims.jsonl'].bytes },
      { path: 'sections/01-intro/sources.jsonl', sha256: canonicalFiles['sections/01-intro/sources.jsonl'].hash, bytes: canonicalFiles['sections/01-intro/sources.jsonl'].bytes },
      { path: 'sections/01-intro/claim-reviews.jsonl', sha256: canonicalFiles['sections/01-intro/claim-reviews.jsonl'].hash, bytes: canonicalFiles['sections/01-intro/claim-reviews.jsonl'].bytes },
      { path: 'sections/01-intro/gates.yaml', sha256: canonicalFiles['sections/01-intro/gates.yaml'].hash, bytes: canonicalFiles['sections/01-intro/gates.yaml'].bytes },
    ],
    synthesis_hashes: [
      { path: 'synthesis/final-report.md', sha256: canonicalFiles['synthesis/final-report.md'].hash, bytes: canonicalFiles['synthesis/final-report.md'].bytes },
      { path: 'synthesis/decision-brief.md', sha256: canonicalFiles['synthesis/decision-brief.md'].hash, bytes: canonicalFiles['synthesis/decision-brief.md'].bytes },
      { path: 'synthesis/cross-section-map.json', sha256: canonicalFiles['synthesis/cross-section-map.json'].hash, bytes: canonicalFiles['synthesis/cross-section-map.json'].bytes },
      { path: 'synthesis/cross-section-map.md', sha256: canonicalFiles['synthesis/cross-section-map.md'].hash, bytes: canonicalFiles['synthesis/cross-section-map.md'].bytes },
      { path: 'synthesis/working-report.md', sha256: canonicalFiles['synthesis/working-report.md'].hash, bytes: canonicalFiles['synthesis/working-report.md'].bytes },
    ],
  };

  const receiptContent = JSON.stringify(receipt, null, 2) + '\n';
  const { hash: receiptHash, bytes: receiptBytes } = write(join(dir, 'pack/audits/freeze-receipt.json'), receiptContent);

  // Write synthesis files at package root (Lane 1 = same as pack/synthesis/)
  write(join(dir, 'synthesis/final-report.md'), finalReport);
  write(join(dir, 'synthesis/decision-brief.md'), decisionBrief);
  write(join(dir, 'synthesis/cross-section-map.json'), crossSectionMap);
  write(join(dir, 'synthesis/cross-section-map.md'), crossSectionMapMd);
  write(join(dir, 'synthesis/working-report.md'), workingReport);

  // Write README.md (Lane 1)
  write(join(dir, 'README.md'), '# mock-pack\n\nMock pack for testing.\n');

  // Write pack.manifest.json with correct freeze_receipt_sha256
  const manifest = {
    name: 'mock-pack',
    topic: 'A mock research topic for testing purposes',
    frozen_at: '2026-01-01T00:00:00.000Z',
    research_os_version: '0.1.0',
    sections: [
      { id: '01-intro', accepted_claims: 5, gate: 'pass', synthesis_eligible: true },
      { id: '02-methods', accepted_claims: 3, gate: 'warn', synthesis_eligible: true },
    ],
    totals: { sections: 2, accepted_claims: 8, dispositioned: 1, unresolved_contradictions: 0 },
    freeze_receipt_sha256: receiptHash,
    operator_notes: 'This is a test fixture.',
  };
  write(join(dir, 'pack.manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  return { receiptHash, receiptBytes };
}
