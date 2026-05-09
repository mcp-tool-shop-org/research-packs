import { describe, it, expect } from 'vitest';
import { parseManifest, PackManifestSchema } from '../scripts/manifest-schema.mjs';

const VALID_MANIFEST = {
  name: 'test-pack',
  topic: 'A test topic',
  frozen_at: '2026-01-01T00:00:00.000Z',
  research_os_version: '0.1.0',
  sections: [
    { id: '01-intro', accepted_claims: 5, gate: 'pass', synthesis_eligible: true },
  ],
  totals: { sections: 1, accepted_claims: 5, dispositioned: 0, unresolved_contradictions: 0 },
  freeze_receipt_sha256: 'a'.repeat(64),
  operator_notes: '',
};

describe('PackManifestSchema', () => {
  it('accepts a valid manifest', () => {
    const result = parseManifest(VALID_MANIFEST);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('test-pack');
      expect(result.data.totals.accepted_claims).toBe(5);
    }
  });

  it('accepts warn gate verdict', () => {
    const m = { ...VALID_MANIFEST, sections: [{ id: '01', accepted_claims: 3, gate: 'warn', synthesis_eligible: true }] };
    expect(parseManifest(m).success).toBe(true);
  });

  it('accepts pass_with_waiver gate verdict', () => {
    const m = { ...VALID_MANIFEST, sections: [{ id: '01', accepted_claims: 3, gate: 'pass_with_waiver', synthesis_eligible: true }] };
    expect(parseManifest(m).success).toBe(true);
  });

  it('rejects missing name', () => {
    const { name: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects missing topic', () => {
    const { topic: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects missing frozen_at', () => {
    const { frozen_at: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects invalid frozen_at (not ISO datetime)', () => {
    const m = { ...VALID_MANIFEST, frozen_at: '2026-01-01' };
    expect(parseManifest(m).success).toBe(false);
  });

  it('rejects missing research_os_version', () => {
    const { research_os_version: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects missing sections', () => {
    const { sections: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects empty sections array', () => {
    const m = { ...VALID_MANIFEST, sections: [] };
    expect(parseManifest(m).success).toBe(false);
  });

  it('rejects missing totals', () => {
    const { totals: _, ...rest } = VALID_MANIFEST;
    expect(parseManifest(rest).success).toBe(false);
  });

  it('rejects invalid freeze_receipt_sha256 (not 64 hex chars)', () => {
    const m = { ...VALID_MANIFEST, freeze_receipt_sha256: 'abc123' };
    expect(parseManifest(m).success).toBe(false);
  });

  it('rejects freeze_receipt_sha256 with non-hex chars', () => {
    const m = { ...VALID_MANIFEST, freeze_receipt_sha256: 'z'.repeat(64) };
    expect(parseManifest(m).success).toBe(false);
  });

  it('defaults operator_notes to empty string when omitted', () => {
    const { operator_notes: _, ...rest } = VALID_MANIFEST;
    const result = parseManifest(rest);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.operator_notes).toBe('');
  });

  it('rejects unknown gate verdict', () => {
    const m = { ...VALID_MANIFEST, sections: [{ id: '01', accepted_claims: 3, gate: 'unknown', synthesis_eligible: true }] };
    expect(parseManifest(m).success).toBe(false);
  });

  it('accepts preserved_contradiction_records as an optional totals field', () => {
    const m = { ...VALID_MANIFEST, totals: { ...VALID_MANIFEST.totals, preserved_contradiction_records: 171 } };
    const result = parseManifest(m);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.totals.preserved_contradiction_records).toBe(171);
  });

  it('accepts manifest without preserved_contradiction_records (field is optional)', () => {
    expect(parseManifest(VALID_MANIFEST).success).toBe(true);
  });
});
