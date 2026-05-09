<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![Licenza MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Pagina di presentazione](https://img.shields.io/badge/landing-page-cyan)](https://mcp-tool-shop-org.github.io/research-packs/)

</div

**Pacchetti di ricerca "congelati" con dati di origine verificabili, tracciabilità delle affermazioni e ricevute di audit.**

Ogni pacchetto in questo monorepo è stato "congelato" tramite [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — un sistema di controllo della ricerca che impone una regola: *nessuna sintesi prima della verifica dei dati di origine*. Ogni pacchetto contiene la sua documentazione completa, la cronologia delle revisioni, i risultati delle verifiche, le risoluzioni delle contraddizioni e una ricevuta crittografica di "congelamento" che identifica in modo univoco ogni elemento.

---

## Tre sezioni

Questo monorepo è progettato per tre tipi di utenti.

### Sezione 1 — Sintesi pubblica
*Per chi cerca una risposta chiara.*

Il file `README.md` di ogni pacchetto è una sintesi leggibile, derivata dal file `final-report.md` del pacchetto. Cita le affermazioni accettate tramite ID, in modo che ogni dichiarazione sia tracciabile fino alla sua fonte. Se si desidera comprendere le conclusioni della ricerca senza esaminare i dati grezzi, si può iniziare da qui.

→ Esplora la cartella [`packages/`](packages/)

### Sezione 2 — Pacchetto di dati "congelati"
*Per chi desidera verificare le affermazioni.*

La cartella `pack/` di ogni pacchetto contiene il pacchetto "congelato" completo: file di origine, registri di estrazione, `claims.jsonl`, `claim-reviews.jsonl`, risoluzioni delle contraddizioni, disposizioni, risultati delle verifiche e `audits/freeze-receipt.json`. La ricevuta di "congelamento" contiene le impronte digitali SHA256 di ogni elemento, verificabili in modo indipendente con `scripts/verify-pack.mjs`.

→ Consulta [`docs/artifact-contract.md`](docs/artifact-contract.md) per il contratto completo.

### Sezione 3 — Verifica del metodo
*Per chi valuta `research-os` stesso.*

Le cartelle `docs/` e il file `catalog.json` sono la base per la valutazione del metodo. `catalog.json` è un indice leggibile dalle macchine di tutti i pacchetti ammessi, con informazioni su argomento, data di "congelamento" e numero di affermazioni. `docs/source-quality-notes.md` raccoglie i risultati di ogni analisi. `docs/operator-playbook.md` riassume le procedure operative apprese eseguendo i pacchetti per il "congelamento".

→ Consulta le cartelle [`docs/`](docs/) e il file [`catalog.json`](catalog.json)

---

## Catalogo

| Pacchetto | Argomento | "Congelato" | Affermazioni accettate |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | Struttura del pacchetto research-os | 2026-05-08 | 296 |

---

## Contratto di ammissione

Nessun pacchetto viene ammesso nella cartella `packages/` senza tutti i seguenti elementi:

- `pack/audits/freeze-receipt.json` — impronte digitali SHA256, verificabili esternamente
- `synthesis/final-report.md` — citazioni accurate, tracciabilità delle affermazioni
- `synthesis/decision-brief.md` — riepilogo delle decisioni
- `pack.manifest.json` — metadati specifici per ogni pacchetto
- `README.md` — sintesi leggibile derivata dal file `final-report`

I pacchetti "parzialmente congelati" non hanno una cartella dedicata.

---

## Verifica di un pacchetto

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` rilegge la ricevuta di "congelamento" e ricalcola le impronte digitali SHA256 di ogni elemento. Un risultato "PASS" indica che il contenuto del pacchetto è identico byte per byte a quello "congelato".

---

## Sicurezza

Questo repository non contiene credenziali, segreti o dati di telemetria. È un archivio statico. Consulta [SECURITY.md](SECURITY.md) per il modello di minaccia completo e la procedura di segnalazione.

---

## Correlati

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — il sistema di controllo che genera questi pacchetti
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — l'organizzazione più ampia

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
