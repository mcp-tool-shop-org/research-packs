# Source Quality Notes

This document accumulates per-arc findings about source quality, source-type compatibility, and evidence gaps discovered while running packs to freeze. It is a living record — each new pack arc contributes findings.

<!-- Filled at v1 Experiment 1 closeout — see research-os/docs/experiment-1-proof.md when published. -->

---

## v0.1 Self-dogfood arc (research-os-self-dogfood)

*Pack frozen 2026-05-08. See `packages/research-os-self-dogfood/` for the full evidence base.*

The v0.1 self-dogfood pack researched `research-os`'s own spec — a deliberately self-referential topic. Source quality findings from this arc are limited to structural observations (JSONL as a format, SQLite FTS5 as a substrate, CLI design patterns) because the pack's primary sources are operator inputs (the design decisions themselves), not publications. A `primary_source_waiver` is active for all 8 sections.

**Key structural finding:** The overproduction-then-curate architecture (2,647 candidate claims → 296 accepted) performed as designed. The triage layer's `parked_overdense_source` cap prevented any single source from dominating synthesis. The adversarial reviewer's `valid_but_low_value` category correctly filtered low-signal claims that passed the source-truth bar but added no synthesis value.

**Note on section 03 (source-and-claim-truth):** This section is the primary regression fixture for `research-os` itself. 715 candidates were extracted; 42 were accepted. The high candidate count reflects the density of citation-practice and provenance literature. The 7 dispositioned claims (`out_of_bounds_regression_fixture`) are intentionally excluded from synthesis and must not be cited in future work.

---

## Placeholder — future arcs

<!-- Each new arc appended here at closeout. Format:

## <arc-name> arc (<package-name>)

*Pack frozen <date>. See `packages/<name>/` for the full evidence base.*

<findings about source-type compatibility, discovery gaps, quality signals>

-->
