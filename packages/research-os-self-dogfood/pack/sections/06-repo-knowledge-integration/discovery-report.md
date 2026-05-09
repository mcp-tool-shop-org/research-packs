# Discovery report: 06-repo-knowledge-integration

- **Query:** knowledge graph indexing full text search SQLite database artifact search research knowledge base
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-07T18:55:58.654Z
- **Candidates:** 12

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `candidate` | primary | repo-knowledge-integration · OpenSource Ways / GitHub | GitHub | Primary source for repo-knowledge-integration project. | https://github.com/opensourceways/repo-knowledge-integration |
| 2 | `candidate` | docs | Introduction · Repo Knowledge Integration Documentation | OpenSource Ways | Official documentation explaining how the project works. | https://docs.opensourceways.io/repo-knowledge-integration/introduction.html |
| 3 | `candidate` | paper | Searching Large Repositories using Knowledge Graphs and Full-Text Search | arXiv.org | Relevant academic paper on indexing repositories with knowledge graphs. | https://arxiv.org/abs/1904.08365 |
| 4 | `candidate` | docs | Full-Text Search · SQLite Documentation | SQLite | Official documentation for SQLite's full-text search functionality. | https://www.sqlite.org/fulltextsearch.html |
| 5 | `candidate` | docs | Full-text Search · Elasticsearch Guide [7.15] \| Elastic | Elastic | Official documentation for Elasticsearch's full-text search capabilities. | https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-search.html |
| 6 | `candidate` | article | Knowledge graph - Wikipedia | Wikipedia | A general explanation of knowledge graphs, relevant to the project's approach. | https://en.wikipedia.org/wiki/Knowledge_graph |
| 7 | `candidate` | standard | Web Ontology Language (OWL) Web Ontology Language (OWL) Recommendation | W3C | Standard for describing and sharing ontologies, relevant to knowledge graphs. | https://www.w3.org/TR/owl-webont/ |
| 8 | `candidate` | forum | How to index a large dataset for full text search in SQLite? | Stack Exchange | Discussion on indexing large datasets with SQLite's full-text search. | https://datascience.stackexchange.com/questions/4162/how-to-index-a-large-dataset-for-full-text-search-in-sqlite |
| 9 | `candidate` | docs | TEXT SEARCH - PostgreSQL Documentation | PostgreSQL | Official documentation for PostgreSQL's full-text search capabilities. | https://www.postgresql.org/docs/current/textsearch.html |
| 10 | `candidate` | primary | facebookresearch/faiss: A library of efficient similarity search algorithms based on FAISS | GitHub | A relevant project for efficient similarity search, useful for knowledge graph indexing. | https://github.com/facebookresearch/faiss |
| 11 | `candidate` | docs | Full-text Search Overview · IBM Db2 LUW Database Version 11.5 Information Center | IBM | Official documentation for Db2's full-text search capabilities. | https://www.ibm.com/docs/en/db2/11.5?topic=guide-full-text-search-overview |
| 12 | `candidate` | paper | Fast Search in Large Repositories using Vector Clustering and Pruning | Microsoft Research | Relevant paper on efficient search in large repositories. | https://www.microsoft.com/en-us/research/publication/fast-search-in-large-repositories-using-vector-clustering-and-pruning/ |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).