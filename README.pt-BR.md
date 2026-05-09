<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.it.md">Italiano</a> | <a href="README.md">English</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Landing Page](https://img.shields.io/badge/landing-page-cyan)](https://mcp-tool-shop-org.github.io/research-packs/)

</div

**Pacotes de pesquisa congelados com informações de origem verificáveis, rastreabilidade de alegações e recibos de auditoria.**

Cada pacote neste repositório foi "congelado" através do [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — um sistema de controle de pesquisa que impõe a seguinte regra: *nenhuma síntese sem a fonte original verificável*. Cada pacote contém toda a sua base de evidências, histórico de revisões críticas, resultados de validação, resoluções de contradições e um recibo criptográfico de "congelamento" que identifica cada artefato.

---

## Três categorias

Este repositório foi criado para atender a três tipos diferentes de usuários.

### Categoria 1 — Síntese pública
*Para pessoas que querem a resposta.*

O arquivo `README.md` de cada pacote é uma síntese legível por humanos, derivada do arquivo `final-report.md` do pacote. Ele cita as alegações aceitas por ID, para que cada afirmação possa ser rastreada até a fonte original. Se você deseja entender as conclusões da pesquisa sem analisar os dados brutos, comece aqui.

→ Navegue em [`packages/`](packages/)

### Categoria 2 — Pacote de evidências congelado
*Para pessoas que querem auditar as alegações.*

O diretório `pack/` de cada pacote contém o pacote congelado completo: arquivos de origem, registros de extrações, `claims.jsonl`, `claim-reviews.jsonl`, resoluções de contradições, relatórios de avaliação e `audits/freeze-receipt.json`. O recibo de "congelamento" contém as assinaturas SHA256 de cada artefato, que podem ser verificadas independentemente usando o script `scripts/verify-pack.mjs`.

→ Consulte [`docs/artifact-contract.md`](docs/artifact-contract.md) para ver o contrato completo de admissão.

### Categoria 3 — Validação do método
*Para pessoas que estão avaliando o próprio `research-os`.*

Os diretórios `docs/` e `catalog.json` são a interface para a avaliação do método. `catalog.json` é um índice legível por máquina de todos os pacotes aceitos, com informações sobre o tópico, a data de "congelamento" e o número de alegações. `docs/source-quality-notes.md` reúne as descobertas de cada projeto. `docs/operator-playbook.md` resume as práticas operacionais aprendidas ao "congelar" os pacotes.

→ Consulte [`docs/`](docs/) e [`catalog.json`](catalog.json)

---

## Catálogo

| Pacote | Tópico | Congelado | Alegações aceitas |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | Estrutura do pacote research-os | 2026-05-08 | 296 |

---

## Contrato de admissão

Nenhum pacote é aceito no diretório `packages/` sem todos os seguintes itens:

- `pack/audits/freeze-receipt.json` — assinaturas SHA256, verificáveis externamente
- `synthesis/final-report.md` — citações verificadas, alegações rastreáveis
- `synthesis/decision-brief.md` — resumo da decisão de "congelamento"
- `pack.manifest.json` — metadados canônicos de cada pacote
- `README.md` — síntese legível por humanos, derivada do relatório final

Pacotes parcialmente "congelados" não recebem um diretório.

---

## Verificar um pacote

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

O script `verify-pack.mjs` lê novamente o recibo de "congelamento" e recalcula as assinaturas SHA256 para cada artefato. Um resultado "PASS" indica que o conteúdo do pacote é idêntico ao que foi "congelado".

---

## Segurança

Este repositório não contém credenciais, segredos ou dados de telemetria. É um arquivo estático. Consulte [SECURITY.md](SECURITY.md) para obter o modelo de ameaças completo e o processo de divulgação.

---

## Relacionado

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — o componente central que gera esses pacotes.
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — a organização abrangente.

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
