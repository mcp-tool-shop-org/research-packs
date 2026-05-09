import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'research-packs',
  description: 'Frozen research packs with source truth, claim traceability, and audit receipts.',
  logoBadge: 'RP',
  brandName: 'research-packs',
  repoUrl: 'https://github.com/mcp-tool-shop-org/research-packs',
  footerText: 'MIT Licensed — built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Open Archive',
    headline: 'Research packs,',
    headlineAccent: 'frozen and verifiable.',
    description: 'Every pack carries its full evidence base — source cards, claim ledgers, adversarial review history, and a sha256 freeze receipt that fingerprints every canonical artifact.',
    primaryCta: { href: '#lanes', label: 'Explore the archive' },
    secondaryCta: { href: 'handbook/', label: 'Read the Handbook' },
    previews: [
      { label: 'Clone', code: 'git clone https://github.com/mcp-tool-shop-org/research-packs' },
      { label: 'Install', code: 'npm install' },
      { label: 'Verify', code: 'node scripts/verify-pack.mjs packages/research-os-self-dogfood' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'lanes',
      title: 'Three lanes, one archive',
      subtitle: 'The same evidence at three depths — for three different readers.',
      features: [
        {
          title: 'Lane 1 — Public synthesis',
          desc: 'Human-readable conclusions with claim IDs. Every statement is traceable back to a source. Start here if you want the answer.',
        },
        {
          title: 'Lane 2 — Frozen evidence',
          desc: 'Full audit trail: source cards, excerpt ledgers, adversarial review records, contradiction resolutions, and a sha256 freeze receipt. Independently verifiable.',
        },
        {
          title: 'Lane 3 — Method proof',
          desc: 'catalog.json, docs/, and operator notes for evaluating research-os itself. Machine-readable pack index with topic, freeze date, and claim totals.',
        },
      ],
    },
    {
      kind: 'code-cards',
      id: 'usage',
      title: 'Verify a pack',
      cards: [
        {
          title: 'Verify all packs',
          code: 'npm run verify\n# PASS  research-os-self-dogfood\n#       sections=8 accepted_claims=296 artifacts_verified=131',
        },
        {
          title: 'Verify one pack',
          code: 'node scripts/verify-pack.mjs packages/research-os-self-dogfood\n# PASS  research-os-self-dogfood\n#       receipt_sha256=368d23...d466 (53796 bytes)',
        },
      ],
    },
  ],
};
