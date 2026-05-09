# Weak sources

> Pack audit aggregates existing research truth. It does not create new truth, resolve failures, or hide section-level evidence. The canonical artifacts (claims, source-cards, fetch-log, gate/review JSON) are the source of authority — these rollups are pointers.

### `06-repo-knowledge-integration`: source_cluster_monopoly

- **Details:** Every source in this section traces to a single publisher (sqlite.org).
- **Evidence IDs:** `src_05cae033cedc`, `src_e15c2248a5d8`
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

- **Details:** 1 failed fetch(es) recorded; section currently has 2 source(s) vs minimum 8.
- **Evidence IDs:** `rcpt_b510b4cb632a_1778106807420`
- **Artifact:** `evidence/fetch-log.jsonl`
