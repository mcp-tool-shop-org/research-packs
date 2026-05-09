# Discovery report: 07-cli-and-runtime-flow

- **Query:** CLI design command line interface state machine runtime error handling tool output standards
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-07T18:42:17.592Z
- **Candidates:** 12

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `candidate` | article | CLI Design: Guidelines and Best Practices | CLIGang | Provides comprehensive guidelines for designing command line interfaces. | https://cligang.github.io/2018/03/07/cli-design.html |
| 2 | `candidate` | docs | CLI Design Guidelines \| CLIk | CLIk | Offers practical advice on designing command line interfaces with a focus on usability. | https://clik.io/docs/design.html |
| 3 | `candidate` | standard | Linux man-pages: Command Line Interface Design | Linux Man Pages Project | Presents guidelines on designing CLI based on the Linux man pages' design principles. | https://man7.org/tlpi/volume_1/chapter06.html |
| 4 | `candidate` | docs | Cmdlet Design Guidelines \| POSH Hash | POSH Hash | Offers design principles for creating PowerShell cmdlets, applicable to CLI design in general. | https://github.com/posh-hash/cmdlet-design-guidelines/blob/master/docs/design.md |
| 5 | `candidate` | article | CLI Application Structure | Nico Jan Nieveen | Discusses best practices for structuring command line applications. | https://nvie.com/posts/cli-application-structure/ |
| 6 | `candidate` | standard | Command Line \| GNU Libc Manual | GNU Project | Provides guidelines for command line interface design based on GNU libc's principles. | https://www.gnu.org/software/libc/manual/html_node/Command-Line.html |
| 7 | `candidate` | docs | Standalone CLI - A simple library to create standalone console applications in C++ | GitHub | Offers a practical example of how to design and implement a command line interface in C++. | https://github.com/redguardtoo/standalone-cli |
| 8 | `candidate` | docs | Standalone CLI Tutorial \| clibs.org | clibs.org | Provides a tutorial on creating command line interfaces using the Standalone CLI library. | https://clibs.org/standalone-cli/latest/tutorial/ |
| 9 | `candidate` | standard | Command Injection Prevention Cheat Sheet \| OWASP | OWASP | Offers guidelines on preventing command injection vulnerabilities in CLI, crucial for error handling. | https://cheat-sheet-series.owasp.org/owasp-io/cheat-sheets-command-injection-prevention.html |
| 10 | `candidate` | article | The Command Line Interface – The Clear Way \| Microsoft Blogs | Microsoft | Discusses the importance of clear and intuitive CLI design for usability and error recovery. | https://blogs.msdn.microsoft.com/twinsui/2013/04/15/the-command-line-interface-the-clearway/ |
| 11 | `candidate` | docs | Go Design: Command Line Flag Parsing and Usage \| golang/go Design | GitHub | Provides insights into Go's approach to command line flag parsing, relevant for CLI design. | https://github.com/golang/design/blob/master/go1.5.md#command-line-flag-parsing-and-usage |
| 12 | `candidate` | paper | SICFit: A Toolkit for Automatic Generation of Interactive Command Line Interfaces \| Carnegie Mellon University | CMU | Presents a toolkit for generating interactive CLI, relevant for understanding CLI design principles. | https://www.cs.cmu.edu/~dst/Class/15763-F08/Papers/2007-SICFIT-Black.pdf |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).