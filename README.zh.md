<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.md">English</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Landing Page](https://img.shields.io/badge/landing-page-cyan)](https://mcp-tool-shop-org.github.io/research-packs/)

</div

**具有原始数据、可追溯的声明和审计记录的冻结研究包。**

这个单仓库中的每个包都通过 [`research-os`](https://github.com/mcp-tool-shop-org/research-os) 冻结，`research-os` 是一个控制研究的系统，它强制执行以下原则：*在获得原始数据之前，禁止进行任何合成。* 每个包都包含其完整的证据基础、对抗性审查历史、审查结果、矛盾解决方案，以及一个加密的冻结凭证，该凭证包含每个规范文件的指纹。

---

## 三个用途

这个单仓库是为三类不同的用户设计的。

### 第一类：公开合成
*适用于想要获得答案的用户。*

每个包的 `README.md` 文件是根据该包的 `final-report.md` 文件生成的、可供人类阅读的合成结果。它会引用已接受的声明，以便每个陈述都可以追溯到原始数据。如果您想了解研究结论而无需查看底层数据，请从这里开始。

→ 浏览 [`packages/`](packages/)

### 第二类：冻结证据包
*适用于想要审计声明的用户。*

每个包的 `pack/` 目录包含完整的冻结包，包括原始数据、摘录记录、`claims.jsonl`、`claim-reviews.jsonl`、矛盾解决方案、处理结果、审查结果以及 `audits/freeze-receipt.json`。冻结凭证包含每个规范文件的 sha256 指纹，可以使用 `scripts/verify-pack.mjs` 进行独立验证。

→ 查看 [`docs/artifact-contract.md`](docs/artifact-contract.md) 以获取完整的入职协议。

### 第三类：方法证明
*适用于评估 `research-os` 本身的用户。*

`docs/` 目录和 `catalog.json` 文件是用于方法评估的资源。`catalog.json` 是一个机器可读的索引，其中包含每个已接受的包的信息，包括主题、冻结日期和声明总数。`docs/source-quality-notes.md` 记录了每个阶段的发现。`docs/operator-playbook.md` 总结了通过冻结包而获得的运营规范。

→ 查看 [`docs/`](docs/) 和 [`catalog.json`](catalog.json)

---

## 目录

| 包 | 主题 | 冻结 | 已接受的声明 |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | research-os 包结构 | 2026-05-08 | 296 |

---

## 入职协议

只有在满足以下所有条件时，包才能被添加到 `packages/` 目录中：

- `pack/audits/freeze-receipt.json` — sha256 指纹，可进行外部验证
- `synthesis/final-report.md` — 清除引用，可追溯声明
- `synthesis/decision-brief.md` — 决策摘要
- `pack.manifest.json` — 每个包的规范元数据
- `README.md` — 从 `final-report` 生成的可供人类阅读的合成结果

未完全冻结的包将不会有独立的目录。

---

## 验证一个包

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` 会重新读取冻结凭证，并重新计算每个规范文件的 sha256 指纹。如果显示为 PASS，则表示该包的内容与冻结时的内容完全相同。

---

## 安全

此仓库不包含任何凭据、密钥或遥测数据。它是一个静态的存档。请参阅 [SECURITY.md](SECURITY.md) 以获取完整的威胁模型和披露流程。

---

## 相关

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os)：用于生成这些软件包的控制层。
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org)：更广泛的组织。

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
