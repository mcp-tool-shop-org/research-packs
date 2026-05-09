<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div

**Paquetes de investigación congelados con información de origen verificable, trazabilidad de las afirmaciones y recibos de auditoría.**

Cada paquete en este monorepositorio ha sido "congelado" a través de [`research-os`](https://github.com/mcp-tool-shop-org/research-os), un sistema de control de investigación que impone la regla: *no hay síntesis sin información de origen verificable*. Cada paquete contiene toda su evidencia, el historial de revisiones, los resultados de las verificaciones, las resoluciones de contradicciones y un recibo criptográfico de "congelación" que identifica de forma única cada elemento.

---

## Tres áreas de interés

Este monorepositorio está diseñado para tres tipos de usuarios.

### Área 1: Síntesis pública
*Para aquellos que buscan la respuesta.*

El archivo `README.md` de cada paquete es una síntesis legible por humanos, derivada del archivo `final-report.md` del paquete. Cita las afirmaciones aceptadas por su ID, lo que permite rastrear cada declaración hasta su fuente. Si desea comprender las conclusiones de la investigación sin consultar los datos brutos, comience aquí.

→ Explore [`packages/`](packages/)

### Área 2: Paquete de evidencia congelado
*Para aquellos que desean auditar las afirmaciones.*

El directorio `pack/` de cada paquete contiene el paquete "congelado" completo: tarjetas de origen, registros de extractos, `claims.jsonl`, `claim-reviews.jsonl`, resoluciones de contradicciones, decisiones y `audits/freeze-receipt.json`. El recibo de "congelación" contiene las huellas digitales SHA256 de cada elemento, que se pueden verificar de forma independiente con `scripts/verify-pack.mjs`.

→ Consulte [`docs/artifact-contract.md`](docs/artifact-contract.md) para ver el contrato de admisión completo.

### Área 3: Prueba de método
*Para aquellos que evalúan `research-os` en sí mismo.*

Los directorios `docs/` y `catalog.json` son la superficie para la evaluación del método. `catalog.json` es un índice legible por máquina de cada paquete admitido, con información sobre el tema, la fecha de "congelación" y el número de afirmaciones. `docs/source-quality-notes.md` recopila los hallazgos de cada ciclo. `docs/operator-playbook.md` resume las directrices de operación obtenidas al "congelar" los paquetes.

→ Consulte [`docs/`](docs/) y [`catalog.json`](catalog.json)

---

## Catálogo

| Paquete | Tema | Congelado | Afirmaciones aceptadas |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | Estructura del paquete de `research-os` | 2026-05-08 | 296 |

---

## Contrato de admisión

Ningún paquete se admite en `packages/` sin todos los siguientes elementos:

- `pack/audits/freeze-receipt.json` — huellas digitales SHA256, verificables externamente
- `synthesis/final-report.md` — con citas claras y trazabilidad de las afirmaciones
- `synthesis/decision-brief.md` — resumen de la decisión tomada
- `pack.manifest.json` — metadatos canónicos de cada paquete
- `README.md` — síntesis legible por humanos, derivada del `final-report`

Los paquetes "a medio congelar" no tienen un directorio.

---

## Verificar un paquete

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` vuelve a leer el recibo de "congelación" y vuelve a calcular las huellas digitales SHA256 de cada elemento. Un resultado "PASS" indica que el contenido del paquete es idéntico en bytes a lo que se "congeló".

---

## Seguridad

Este repositorio no contiene credenciales, secretos ni telemetría. Es un archivo estático. Consulte [SECURITY.md](SECURITY.md) para obtener información completa sobre el modelo de amenazas y el proceso de divulgación.

---

## Relacionado

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — el sistema de control que genera estos paquetes
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — la organización más amplia

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
