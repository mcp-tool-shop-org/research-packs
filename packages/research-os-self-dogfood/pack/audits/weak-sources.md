# Weak sources

> Pack audit aggregates existing research truth. It does not create new truth, resolve failures, or hide section-level evidence. The canonical artifacts (claims, source-cards, fetch-log, gate/review JSON) are the source of authority — these rollups are pointers.

### `02-pack-artifact-contract`: missing_primary_source

- **Details:** 0 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** _(none)_
- **Artifact:** `sections/02-pack-artifact-contract/sources.jsonl`

### `02-pack-artifact-contract`: excessive_type_imbalance

- **Details:** 8/9 (89%) of sources are type=secondary.
- **Evidence IDs:** `src_0801e1ee8a70`, `src_2cc80fcf07ba`, `src_62d58636ae35`, `src_712838e1db63`, `src_876b66b88858`, `src_b1ed6cf92876`, `src_bf5d0eef78f0`, `src_c1e29cfcaa1e`
- **Artifact:** `sections/02-pack-artifact-contract/sources.jsonl`

### `03-source-and-claim-truth`: missing_primary_source

- **Details:** 1 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** `src_a135974ea838`
- **Artifact:** `sections/03-source-and-claim-truth/sources.jsonl`

### `04-gates-and-waivers`: missing_primary_source

- **Details:** 0 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** _(none)_
- **Artifact:** `sections/04-gates-and-waivers/sources.jsonl`

### `04-gates-and-waivers`: excessive_type_imbalance

- **Details:** 6/6 (100%) of sources are type=secondary.
- **Evidence IDs:** `src_09a48e752e9b`, `src_55f4bfa87f54`, `src_bbd08b91cbb6`, `src_d2cd935fb884`, `src_f0fe25b20f29`, `src_fb48d4730a5c`
- **Artifact:** `sections/04-gates-and-waivers/sources.jsonl`

### `04-gates-and-waivers`: failed_fetches_reducing_floor

- **Details:** 13 failed fetch(es) recorded; section currently has 6 source(s) vs minimum 8.
- **Evidence IDs:** `rcpt_7a0ea17e7193_1778178263733`, `rcpt_7627b6820446_1778178264142`, `rcpt_7cb6161ae41e_1778178269944`, `rcpt_9c4530deb195_1778178271616`, `rcpt_fa20c328c33e_1778178271737`, `rcpt_1dccee53fdab_1778178271941`, `rcpt_095c92a022fe_1778186831559`, `rcpt_7a0ea17e7193_1778186832679`, `rcpt_7627b6820446_1778186833413`, `rcpt_7cb6161ae41e_1778186833934`, `rcpt_9c4530deb195_1778186834752`, `rcpt_fa20c328c33e_1778186835173`, `rcpt_1dccee53fdab_1778186835511`
- **Artifact:** `evidence/fetch-log.jsonl`

### `05-cowork-handoff`: low_independent_publishers

- **Details:** 2 independent publisher(s) — pack policy requires at least 4.
- **Evidence IDs:** `www.anthropic.com`, `code.claude.com`
- **Artifact:** `sections/05-cowork-handoff/sources.jsonl`

### `06-repo-knowledge-integration`: source_cluster_monopoly

- **Details:** Every source in this section traces to a single publisher (sqlite.org).
- **Evidence IDs:** `src_05cae033cedc`, `src_5d98fdba0757`, `src_676ddfa834cc`, `src_91705d06abdf`, `src_ac6052de3047`, `src_e15c2248a5d8`, `src_f110ffbdbe7c`
- **Artifact:** `sections/06-repo-knowledge-integration/sources.jsonl`

### `06-repo-knowledge-integration`: low_independent_publishers

- **Details:** 1 independent publisher(s) — pack policy requires at least 4.
- **Evidence IDs:** `sqlite.org`
- **Artifact:** `sections/06-repo-knowledge-integration/sources.jsonl`

### `06-repo-knowledge-integration`: missing_primary_source

- **Details:** 0 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** _(none)_
- **Artifact:** `sections/06-repo-knowledge-integration/sources.jsonl`

### `06-repo-knowledge-integration`: failed_fetches_reducing_floor

- **Details:** 4 failed fetch(es) recorded; section currently has 7 source(s) vs minimum 8.
- **Evidence IDs:** `rcpt_b510b4cb632a_1778106807420`, `rcpt_8578018a9c78_1778180217901`, `rcpt_c3381ae4ec64_1778180240625`, `rcpt_29032ee7250f_1778180240835`
- **Artifact:** `evidence/fetch-log.jsonl`

### `07-cli-and-runtime-flow`: missing_primary_source

- **Details:** 0 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** _(none)_
- **Artifact:** `sections/07-cli-and-runtime-flow/sources.jsonl`

### `07-cli-and-runtime-flow`: excessive_type_imbalance

- **Details:** 6/7 (86%) of sources are type=secondary.
- **Evidence IDs:** `src_0b75376a48e4`, `src_27eaf34f91a3`, `src_458d9788c68d`, `src_6ab0d27881d8`, `src_96d4bf47e20b`, `src_de50fc93ad72`
- **Artifact:** `sections/07-cli-and-runtime-flow/sources.jsonl`

### `07-cli-and-runtime-flow`: failed_fetches_reducing_floor

- **Details:** 12 failed fetch(es) recorded; section currently has 7 source(s) vs minimum 8.
- **Evidence IDs:** `rcpt_818491796448_1778179399129`, `rcpt_0f33ae68b0f3_1778179399299`, `rcpt_a2bb0e76f80b_1778179399528`, `rcpt_71978ccdf41c_1778179400065`, `rcpt_5edb7f47b377_1778179400384`, `rcpt_86f357936a81_1778179415529`, `rcpt_818491796448_1778185667513`, `rcpt_0f33ae68b0f3_1778185667722`, `rcpt_a2bb0e76f80b_1778185668008`, `rcpt_71978ccdf41c_1778185668566`, `rcpt_5edb7f47b377_1778185668982`, `rcpt_86f357936a81_1778185669734`
- **Artifact:** `evidence/fetch-log.jsonl`

### `08-acceptance-suite`: missing_primary_source

- **Details:** 0 primary source(s) — pack policy requires at least 2.
- **Evidence IDs:** _(none)_
- **Artifact:** `sections/08-acceptance-suite/sources.jsonl`

### `08-acceptance-suite`: excessive_type_imbalance

- **Details:** 7/8 (88%) of sources are type=secondary.
- **Evidence IDs:** `src_099defe2e6d6`, `src_2ed88e8cb886`, `src_53ee6a9ec24b`, `src_642e49ac2548`, `src_8cffc8f807a2`, `src_ae13d4956c22`, `src_eefec92990cb`
- **Artifact:** `sections/08-acceptance-suite/sources.jsonl`
