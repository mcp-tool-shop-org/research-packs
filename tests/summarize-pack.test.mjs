import { describe, it, expect } from 'vitest';
import { generateReadme } from '../scripts/summarize-pack.mjs';

const VALID_MANIFEST = {
  name: 'test-pack',
  topic: 'How should we structure a research pack?',
  frozen_at: '2026-05-08T07:41:33.924Z',
  research_os_version: '0.1.0',
  sections: [
    { id: '01-intro', accepted_claims: 19, gate: 'warn', synthesis_eligible: true },
    { id: '02-methods', accepted_claims: 42, gate: 'warn', synthesis_eligible: true },
  ],
  totals: { sections: 2, accepted_claims: 61, dispositioned: 3, unresolved_contradictions: 0 },
  freeze_receipt_sha256: 'a'.repeat(64),
  operator_notes: '',
};

const FINAL_REPORT = `# Final Report

**Pack:** How should we structure a research pack?

## Summary

This pack researched how to structure a research pack. The evidence base comprises 61 accepted claims. Key findings are grounded in established serialization standards.

## Body

### Introduction (Section 01)

Details here [claim:clm_mock_001].

### Methods (Section 02)

More details [claim:clm_mock_002].
`;

describe('generateReadme', () => {
  it('produces a non-empty string', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(typeof readme).toBe('string');
    expect(readme.length).toBeGreaterThan(100);
  });

  it('includes the pack name as heading', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('# test-pack');
  });

  it('includes the topic', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('How should we structure a research pack?');
  });

  it('includes the frozen date (YYYY-MM-DD format)', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('2026-05-08');
  });

  it('includes accepted_claims total', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('61');
  });

  it('includes the executive summary text', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('61 accepted claims');
  });

  it('includes a section table with both sections', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('01-intro');
    expect(readme).toContain('02-methods');
    expect(readme).toContain('19');
    expect(readme).toContain('42');
  });

  it('is deterministic — same input always produces same output', () => {
    const readme1 = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    const readme2 = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme1).toBe(readme2);
  });

  it('does NOT include operator_notes section when operator_notes is empty', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).not.toContain('## Operator notes');
  });

  it('includes operator_notes section when present', () => {
    const manifest = { ...VALID_MANIFEST, operator_notes: 'Special handling required.' };
    const readme = generateReadme(manifest, FINAL_REPORT);
    expect(readme).toContain('## Operator notes');
    expect(readme).toContain('Special handling required.');
  });

  it('includes Lane 1/2/3 navigation', () => {
    const readme = generateReadme(VALID_MANIFEST, FINAL_REPORT);
    expect(readme).toContain('Lane 1');
    expect(readme).toContain('Lane 2');
    expect(readme).toContain('Lane 3');
  });

  it('throws on invalid manifest', () => {
    expect(() => generateReadme({ name: 'x' }, FINAL_REPORT)).toThrow();
  });

  it('handles missing Summary heading gracefully (returns empty summary block)', () => {
    const reportWithoutSummary = '# Final Report\n\n## Body\n\nJust body.\n';
    const readme = generateReadme(VALID_MANIFEST, reportWithoutSummary);
    expect(readme).toContain('# test-pack');
    // summary section should be present but empty
    expect(readme).toContain('## Executive summary');
  });
});
