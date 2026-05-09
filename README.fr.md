<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.md">English</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div

**Des ensembles de données figés avec la vérité de la source, la traçabilité des affirmations et les reçus d'audit.**

Chaque ensemble de données de ce dépôt unique a été figé grâce à [`research-os`](https://github.com/mcp-tool-shop-org/research-os), un système de contrôle de la recherche qui impose une règle : *aucune synthèse sans la vérité de la source*. Chaque ensemble de données contient toutes ses preuves, l'historique des examens contradictoires, les résultats des vérifications, les résolutions des contradictions et un reçu cryptographique de figement qui identifie chaque artefact canonique.

---

## Trois voies d'accès

Ce dépôt unique est conçu pour trois types de lecteurs différents.

### Voie 1 — Synthèse publique
*Pour les personnes qui veulent la réponse.*

Le fichier `README.md` de chaque ensemble de données est une synthèse lisible par un humain, dérivée du fichier `final-report.md` de l'ensemble de données. Il cite les affirmations acceptées par identifiant, de sorte que chaque déclaration peut être retracée à sa source. Si vous souhaitez comprendre les conclusions de la recherche sans consulter les données brutes, commencez ici.

→ Consultez [`packages/`](packages/)

### Voie 2 — Ensemble de données figé
*Pour les personnes qui veulent vérifier les affirmations.*

Le répertoire `pack/` de chaque ensemble de données contient l'ensemble de données figé complet : les fiches de données, les journaux d'extraits, `claims.jsonl`, `claim-reviews.jsonl`, les résolutions des contradictions, les dispositions, les résultats des vérifications et `audits/freeze-receipt.json`. Le reçu de figement contient les empreintes sha256 de chaque artefact canonique, qui peuvent être vérifiées indépendamment à l'aide de `scripts/verify-pack.mjs`.

→ Consultez [`docs/artifact-contract.md`](docs/artifact-contract.md) pour le contrat d'admission complet.

### Voie 3 — Preuve de méthode
*Pour les personnes qui évaluent `research-os` lui-même.*

Les répertoires `docs/` et `catalog.json` constituent la surface d'évaluation de la méthode. `catalog.json` est un index lisible par machine de chaque ensemble de données admis, avec le sujet, la date de figement et le nombre d'affirmations. `docs/source-quality-notes.md` compile les résultats de chaque cycle. `docs/operator-playbook.md` résume les principes de fonctionnement acquis lors de la figement des ensembles de données.

→ Consultez [`docs/`](docs/) et [`catalog.json`](catalog.json)

---

## Catalogue

| Ensemble de données | Sujet | Figé | Affirmations acceptées |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | Structure de l'ensemble de données `research-os` | 2026-05-08 | 296 |

---

## Contrat d'admission

Aucun ensemble de données n'est admis dans le répertoire `packages/` sans que les éléments suivants soient présents :

- `pack/audits/freeze-receipt.json` — empreintes sha256, vérifiables par voie externe
- `synthesis/final-report.md` — citations claires, traçabilité des affirmations
- `synthesis/decision-brief.md` — résumé de la décision de figement
- `pack.manifest.json` — métadonnées canoniques propres à chaque ensemble de données
- `README.md` — synthèse lisible par un humain, dérivée du rapport final

Les ensembles de données partiellement figés n'ont pas de répertoire.

---

## Vérifier un ensemble de données

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` relit le reçu de figement et recalcule les empreintes sha256 de chaque artefact canonique. Un résultat "PASS" indique que le contenu de l'ensemble de données est identique, octet par octet, à ce qui a été figé.

---

## Sécurité

Ce dépôt ne contient aucun identifiant, aucun secret et aucune télémétrie. Il s'agit d'une archive statique. Consultez [SECURITY.md](SECURITY.md) pour connaître le modèle de menace complet et le processus de divulgation.

---

## Liés

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — le système de contrôle qui génère ces ensembles de données
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — l'organisation plus large

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
