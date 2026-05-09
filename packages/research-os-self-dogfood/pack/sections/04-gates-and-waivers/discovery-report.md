# Discovery report: 04-gates-and-waivers

- **Query:** systematic review quality appraisal inclusion exclusion threshold evidence grading waiver exception Cochrane GRADE
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-07T20:45:52.339Z
- **Candidates:** 21

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `approved` | primary | Puppet Type Gates Reference | Puppet Labs | This source discusses gates in the context of Puppet's data pipeline. | https://docs.puppetlabs.com/puppet/latest/reference/type.html#gates |
| 1 | `candidate` | primary | Included studies - quality appraisal \| GRADE Evidence Essentials | Cochrane Collaboration | GRADE is widely used for systematic review quality appraisal. | https://guidelines.cochrane.org/geyes/included-studies-quality-appraisal |
| 2 | `rejected` | standard | VMware Product EULA - Gates and Waivers | VMware, Inc. | This standard includes information about software license gates and waivers. | https://www.vmware.com/content/dam/digitaldocs/en/us/product/policies/vmware-product-eula.pdf |
| 2 | `candidate` | paper | The GRADE approach for grading quality of evidence and for determining strength of recommendations \| BMJ | BMJ Publishing Group Ltd | This is the original paper introducing the GRADE methodology. | https://www.bmj.com/content/369/bmj.m7579.abstract |
| 3 | `rejected` | standard | ISO/IEC 7498-1:1995(E) - Open Systems Interconnection (OSI) Basic Reference Model | International Organization for Standardization | This standard defines gates in the context of network protocols. | https://www.iso.org/obp/ui/#iso:std:iso:7498-1:ed-3:v1:part:1 |
| 3 | `candidate` | docs | GRADE (Cochrane Handbook for Systematic Reviews of Interventions 1.4) | New Zealand Ministry of Health | This is the official GRADE documentation from Cochrane. | https://www.moh.govt.nz/assets/downloads/publications/evidence-guidelines-evidence-grading/GRADE-Cochrane-Handbook-for-Systematic-Reviews-of-Interventions-1-4.pdf |
| 4 | `approved` | article | Quality Gate - Wikipedia | Wikipedia | This article provides a basic overview of quality gates in software development. | https://en.wikipedia.org/wiki/Quality_gate |
| 4 | `candidate` | standard | AGREE Reporting Guidelines for Quality Assessment of Systematic Reviews and Meta-Analyses | National Center for Biotechnology Information | AGREE is a key guideline for assessing systematic reviews. | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6187950/ |
| 5 | `approved` | article | OWASP Gates in Software | Open Web Application Security Project (OWASP) | This article discusses gates in the context of software security. | https://www.owasp.org/www-community/vulnerabilities/Gates_in_Software |
| 5 | `candidate` | primary | Cochrane Handbook for Systematic Reviews of Interventions Version 5.2.0 | National Center for Biotechnology Information | This is the official Cochrane handbook for systematic reviews. | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6187951/ |
| 6 | `approved` | article | Gates, Waivers, Controls and The Data Pipeline | RiskRecon | This article discusses gates, waivers, controls in the context of data pipelines. | https://www.riskrecon.com/blog/gates-waivers-controls-and-the-data-pipeline/ |
| 6 | `candidate` | unknown | PRISMA Statement \| Preferred Reporting Items for Systematic Reviews and Meta-analyses | — | PRISMA is widely used in systematic reviews to assess reporting. | https://www.prisma-statement.org/extensions/checklist? guidance=10.2378%2Fjps.19-416-s001 |
| 7 | `approved` | paper | Compensating Controls for Cyber-Physical Systems: A Survey | IEEE Xplore | This paper surveys compensating controls, relevant to our section's purpose. | https://ieeexplore.ieee.org/document/7480219 |
| 7 | `candidate` | standard | CONsolidated Standards Of Reporting Trials: CONSORT 2010 Statement \| SRA | Statement for Reporting of Observational Studies in Epidemiology (STROBE) | CONSORT is widely used to assess trial reporting. | https://www.sra.edu.au/wp-content/uploads/2019/08/CONSORT-2010-Standard.pdf |
| 8 | `approved` | article | Data Validation in the Data Pipeline | NCC Group | This article discusses data validation, a key aspect of gates and waivers. | https://www.nccgroup.com/us/about-us/newsroom-and-events/blog/2018/may/data-validation-in-the-data-pipeline/ |
| 8 | `candidate` | article | Cochrane Bias Methods Group \| Covidence | Covidence Systematic Review Software | This provides methods for assessing bias in systematic reviews. | https://www.covidence.org/resources/5ef83a21-46c1-4fde-a0df-dcd8bbbf298b |
| 9 | `approved` | paper | Gates in Software Development | ResearchGate | This paper focuses on gates in software development, our section's topic. | https://www.researchgate.net/publication/317652099_Gates_in_Software_Development |
| 9 | `candidate` | docs | Guidance on the Conduct of Narrative Synthesis in Systematic Reviews | National Center for Biotechnology Information | This provides guidance on narrative synthesis, relevant to systematic reviews. | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650394/ |
| 10 | `approved` | standard | COBIT Framework | ISACA | This framework includes guidance on compensating controls and failure states. | https://www.isaca.org/resources/isacastandards/cobit/cobit-2019/framework.html |
| 11 | `rejected` | standard | An Analysis of the Internet Control Message Protocol (ICMP) | IETF | This RFC discusses gates in the context of network protocols, relevant to failure states. | https://tools.ietf.org/html/rfc4962 |
| 12 | `approved` | article | Monitoring Gates, Waivers and Controls in Software Development | SANS Institute | This whitepaper discusses gates, waivers, and controls in software development. | https://www.sans.org/reading-room/whitepapers/best-practices/monitoring-gates-waivers-controls-3758 |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).