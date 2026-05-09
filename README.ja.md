<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Landing Page](https://img.shields.io/badge/landing-page-cyan)](https://mcp-tool-shop-org.github.io/research-packs/)

</div

**ソースの信頼性、主張の追跡可能性、および監査記録を備えた、固定された研究パッケージ。**

このモノレポ内のすべてのパッケージは、[`research-os`](https://github.com/mcp-tool-shop-org/research-os) を通じて固定されています。これは、ソースの信頼性が確認されるまで合成を行わないという原則を強制する、研究管理のための制御システムです。各パッケージには、完全な証拠、攻撃的なレビュー履歴、ゲートの結果、矛盾の解決策、およびすべての標準的なアーティファクトのフィンガープリントを含む暗号化された固定記録が含まれています。

---

## 3つの用途

このモノレポは、3種類のユーザーを対象としています。

### 用途1：公開合成
*答えを知りたい人向け。*

各パッケージの `README.md` は、パッケージの `final-report.md` から派生した、人間が読める合成情報です。受け入れられた主張はIDで引用されているため、すべての記述はソースにトレースバックできます。研究の結論を、レジャーに触れずに理解したい場合は、ここから始めてください。

→ [`packages/`](packages/) を参照

### 用途2：固定された証拠パッケージ
*主張を監査したい人向け。*

各パッケージの `pack/` ディレクトリには、完全な固定されたパッケージが含まれています。これには、ソースカード、抜粋の記録、`claims.jsonl`、`claim-reviews.jsonl`、矛盾の解決策、判断、ゲートの結果、および `audits/freeze-receipt.json` が含まれます。固定記録には、すべての標準的なアーティファクトのsha256フィンガープリントが含まれており、`scripts/verify-pack.mjs` を使用して独立して検証できます。

→ 完全な参加契約については、[`docs/artifact-contract.md`](docs/artifact-contract.md) を参照してください。

### 用途3：メソッドの検証
*`research-os` 自体を評価したい人向け。*

`docs/` と `catalog.json` は、メソッドの評価に使用されます。`catalog.json` は、トピック、固定日、および主張の合計を含む、すべての参加パッケージの機械可読なインデックスです。`docs/source-quality-notes.md` には、各アーキテクチャからの調査結果が蓄積されています。`docs/operator-playbook.md` には、パッケージを固定するために得られた運用に関する知識がまとめられています。

→ [`docs/`](docs/) と [`catalog.json`](catalog.json) を参照

---

## カタログ

| パッケージ | トピック | 固定 | 受け入れられた主張 |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | research-os パッケージの構成 | 2026-05-08 | 296 |

---

## 参加契約

以下のすべてを満たしていないパッケージは、`packages/` に参加できません。

- `pack/audits/freeze-receipt.json` — 外部から検証可能なsha256フィンガープリント
- `synthesis/final-report.md` — 引用が整理され、主張が追跡可能
- `synthesis/decision-brief.md` — 意思決定の概要
- `pack.manifest.json` — パッケージごとの標準メタデータ
- `README.md` — `final-report` から派生した、人間が読める合成情報

半固定のパッケージは、ディレクトリを持ちません。

---

## パッケージの検証

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` は、固定記録を再読み込みし、すべての標準的なアーティファクトのsha256フィンガープリントを再計算します。`PASS` と表示される場合、パッケージの内容が固定されたものとバイト単位で同一であることを意味します。

---

## セキュリティ

このリポジトリには、認証情報、秘密情報、およびテレメトリは含まれていません。これは静的なアーカイブです。詳細については、[SECURITY.md](SECURITY.md) を参照してください。

---

## 関連

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — これらのパッケージを生成する制御システム
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — より広範な組織

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
