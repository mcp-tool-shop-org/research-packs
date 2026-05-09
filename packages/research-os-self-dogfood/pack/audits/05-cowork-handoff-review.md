# Adversarial Review: 05-cowork-handoff

**Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-08T04:32:07.036Z
**Candidate claims:** 83
**Findings:** 89 (block: 0, warn: 15, info: 74)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 15
- [ACCEPTED]: 68

## Findings

### [INFO] missing_not_constraint (fnd_fd18861813d8)

Claim clm_2fff6e91c56c_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_2fff6e91c56c_ollama_intern_4`
- **Source IDs:** `src_2fff6e91c56c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Recovery time has significant impact on propagation of disruptions.

### [WARN] source_quality_problem (fnd_8bd58b6e6595)

Claim clm_2fff6e91c56c_ollama_intern_4 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_2fff6e91c56c_ollama_intern_4`
- **Source IDs:** `src_2fff6e91c56c`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_c9d800c84bcf)

Claim clm_59b5d7b9e7e4_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_6`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: CATS is robust to overparameterization and large batch size training.

### [WARN] source_quality_problem (fnd_16f5c7925acf)

Claim clm_59b5d7b9e7e4_ollama_intern_6 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_6`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_795755b5439c)

Claim clm_ea1a84785166_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_5`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Vicuna-7B requires around 14GB of GPU memory for inference

### [WARN] source_quality_problem (fnd_7c88e6bd82ae)

Claim clm_ea1a84785166_ollama_intern_5 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_5`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_c71739ffc08f)

Claim clm_ea1a84785166_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_6`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Vicuna-7B can run on a 32GB M1 Macbook with 1 - 2 words per second

### [WARN] source_quality_problem (fnd_db45cf79fadb)

Claim clm_ea1a84785166_ollama_intern_6 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_6`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_72b591bbd102)

Claim clm_ea1a84785166_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_7`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To enable XPU/GPU acceleration when running Vicuna-7B, use --device xpu.

### [WARN] source_quality_problem (fnd_c4a3bb0aa0a0)

Claim clm_ea1a84785166_ollama_intern_7 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_7`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_c585a9f81ca3)

Claim clm_ea1a84785166_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_8`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Vicuna-7B can run on an Intel Arc A770 16GB GPU.

### [WARN] source_quality_problem (fnd_2fc3fd1018cd)

Claim clm_ea1a84785166_ollama_intern_8 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_8`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_646382ceec1c)

Claim clm_ea1a84785166_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_10`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Vicuna-13B with 8-bit compression can run on a single GPU with 16 GB of VRAM.

### [WARN] source_quality_problem (fnd_c16397b005f1)

Claim clm_ea1a84785166_ollama_intern_10 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_10`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_fdf21750ec80)

Claim clm_ea1a84785166_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_14`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: FastChat provides OpenAI-compatible APIs for its supported models.

### [WARN] source_quality_problem (fnd_98186a9bb06c)

Claim clm_ea1a84785166_ollama_intern_14 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_14`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_629753d66c98)

Claim clm_ea1a84785166_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_15`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: MT-bench is the new recommended way to benchmark your models.

### [WARN] source_quality_problem (fnd_663328a0ee3b)

Claim clm_ea1a84785166_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_15`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_753168400c78)

Claim clm_ea1a84785166_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_17`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: You can use the following command to train Vicuna-7B with 4 x A100 (40GB).

### [WARN] source_quality_problem (fnd_3d0e5ea6c61a)

Claim clm_ea1a84785166_ollama_intern_17 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_17`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_c115138e5270)

Claim clm_ea1a84785166_ollama_intern_19 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_19`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The model used for training is Llama-2-7b-hf.

### [WARN] source_quality_problem (fnd_9f295d17f6e9)

Claim clm_ea1a84785166_ollama_intern_19 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_19`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_41d96d90e8a7)

Claim clm_ea1a84785166_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_20`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The training data path is data/dummy_conversation.json.

### [WARN] source_quality_problem (fnd_19e80bbc6bad)

Claim clm_ea1a84785166_ollama_intern_20 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_ea1a84785166_ollama_intern_20`
- **Source IDs:** `src_ea1a84785166`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_118ae9cea234)

Claim clm_59b5d7b9e7e4_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_11`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: arXiv offers a way to subscribe to their mailings.

### [WARN] source_quality_problem (fnd_d562f6641606)

Claim clm_59b5d7b9e7e4_ollama_intern_11 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_11`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_49b77d38245c)

Claim clm_9a532b2b74e5_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a532b2b74e5_ollama_intern_3`
- **Source IDs:** `src_9a532b2b74e5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code is available in the terminal, IDE, desktop app, and browser.

### [INFO] missing_not_constraint (fnd_6923a372eff0)

Claim clm_9a532b2b74e5_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a532b2b74e5_ollama_intern_6`
- **Source IDs:** `src_9a532b2b74e5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code can create commits and pull requests as it works directly with git.

### [INFO] missing_not_constraint (fnd_483ee7e7a10f)

Claim clm_9a532b2b74e5_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a532b2b74e5_ollama_intern_8`
- **Source IDs:** `src_9a532b2b74e5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code can run routines on a schedule to automate repeated tasks.

### [INFO] missing_not_constraint (fnd_9a81a3777ab0)

Claim clm_9a7d4217c64c_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a7d4217c64c_ollama_intern_1`
- **Source IDs:** `src_9a7d4217c64c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows creating custom subagents for task-specific workflows.

### [INFO] missing_not_constraint (fnd_ddd52e87f65e)

Claim clm_9a7d4217c64c_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a7d4217c64c_ollama_intern_3`
- **Source IDs:** `src_9a7d4217c64c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude delegates tasks to subagents based on their descriptions.

### [INFO] missing_not_constraint (fnd_777d93d0158d)

Claim clm_9a7d4217c64c_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a7d4217c64c_ollama_intern_29`
- **Source IDs:** `src_9a7d4217c64c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The permissionMode field controls how the subagent handles permission prompts.

### [INFO] missing_not_constraint (fnd_821273020a94)

Claim clm_9a7d4217c64c_ollama_intern_31 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a7d4217c64c_ollama_intern_31`
- **Source IDs:** `src_9a7d4217c64c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The default permission mode is Standard, which involves checking prompts.

### [INFO] missing_not_constraint (fnd_89ce83c21f06)

Claim clm_9a7d4217c64c_ollama_intern_40 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a7d4217c64c_ollama_intern_40`
- **Source IDs:** `src_9a7d4217c64c`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code passes hook input as JSON via stdin to hook commands.

### [INFO] missing_not_constraint (fnd_4a37e081fc8f)

Claim clm_5be2e21d45c9_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_1`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code hook events fire at specific points during a session.

### [INFO] missing_not_constraint (fnd_77a5ef8255ba)

Claim clm_5be2e21d45c9_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_23`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: These fields apply to all hook types: type, if, timeout, statusMessage, once.

### [INFO] missing_not_constraint (fnd_b3630cb50974)

Claim clm_5be2e21d45c9_ollama_intern_27 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_27`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: HTTP hooks accept 'url', 'headers', 'allowedEnvVars', and other common fields.

### [INFO] missing_not_constraint (fnd_6ea1f9483d7c)

Claim clm_5be2e21d45c9_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_29`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Prompt and agent hooks accept 'prompt' field in addition to common fields.

### [INFO] missing_not_constraint (fnd_454c5eaa4452)

Claim clm_5be2e21d45c9_ollama_intern_56 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_56`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Some hook events allow for more detailed control via hookSpecificOutput

### [INFO] missing_not_constraint (fnd_394c8f396a3d)

Claim clm_5be2e21d45c9_ollama_intern_106 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_106`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PostToolBatch hook can inject context for Claude with 'additionalContext' field.

### [INFO] missing_not_constraint (fnd_076fcbde98db)

Claim clm_5be2e21d45c9_ollama_intern_109 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_109`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: PermissionDenied hooks receive tool_name, tool_input, tool_use_id, and reason.

### [INFO] missing_not_constraint (fnd_84cc72ffaee3)

Claim clm_5be2e21d45c9_ollama_intern_125 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_125`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: TeammateIdle hooks fire on every occurrence and do not support matchers.

### [INFO] missing_not_constraint (fnd_5c738d663b8e)

Claim clm_5be2e21d45c9_ollama_intern_148 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_148`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: To override the user’s response, return a JSON object with hookSpecificOutput.

### [INFO] missing_not_constraint (fnd_ef813d33a359)

Claim clm_5be2e21d45c9_ollama_intern_149 has no 'not' constraint recorded.

- **Claim IDs:** `clm_5be2e21d45c9_ollama_intern_149`
- **Source IDs:** `src_5be2e21d45c9`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Exit code 2 blocks the response, changing the effective action to decline.

### [INFO] missing_not_constraint (fnd_77c616704b4b)

Claim clm_96b9a35307c0_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_1`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude remembers user-provided instructions via CLAUDE.md files.

### [INFO] missing_not_constraint (fnd_833f30ce9201)

Claim clm_96b9a35307c0_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_2`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude can accumulate learnings automatically with auto memory.

### [INFO] missing_not_constraint (fnd_dcbb2624507b)

Claim clm_96b9a35307c0_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_5`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: CLAUDE.md files are used to provide persistent instructions to Claude

### [INFO] missing_not_constraint (fnd_5dfe656bbdff)

Claim clm_96b9a35307c0_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_18`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Each markdown file should cover one topic and have a descriptive filename.

### [INFO] missing_not_constraint (fnd_c3d9ba5381be)

Claim clm_96b9a35307c0_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_21`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The .claude/rules/ directory supports symlinks to share rules across projects.

### [INFO] missing_not_constraint (fnd_7f0c98c45e8e)

Claim clm_96b9a35307c0_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_23`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude automatically accumulates learnings with auto memory.

### [INFO] missing_not_constraint (fnd_4909f06165dc)

Claim clm_96b9a35307c0_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_96b9a35307c0_ollama_intern_29`
- **Source IDs:** `src_96b9a35307c0`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude stores user instructions automatically in auto memory.

### [INFO] missing_not_constraint (fnd_149f9f18adda)

Claim clm_c8975a95117b_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_1`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code offers a variety of settings to configure its behavior.

### [INFO] missing_not_constraint (fnd_9c7bed6501b0)

Claim clm_c8975a95117b_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_11`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows specifying allowedChannelPlugins for managed settings.

### [INFO] missing_not_constraint (fnd_d8ffd6de9305)

Claim clm_c8975a95117b_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_12`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code enables allowing or denying HTTP hook URLs via allowedHttpHookUrls.

### [INFO] missing_not_constraint (fnd_585d38687f18)

Claim clm_c8975a95117b_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_13`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows configuring allowedMcpServers for managed settings.

### [INFO] missing_not_constraint (fnd_d57fc9bc003b)

Claim clm_c8975a95117b_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_23`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code can list specific MCP servers from .mcp.json files to approve.

### [INFO] missing_not_constraint (fnd_f392054c5a76)

Claim clm_c8975a95117b_ollama_intern_28 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_28`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code maps Anthropic model IDs to provider-specific IDs for API calls.

### [INFO] missing_not_constraint (fnd_9955c9437a8a)

Claim clm_c8975a95117b_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_29`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code generates dynamic OpenTelemetry headers periodically.

### [INFO] missing_not_constraint (fnd_7bce7a228ba4)

Claim clm_c8975a95117b_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_30`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows customizing the output style to adjust system prompts.

### [INFO] missing_not_constraint (fnd_5f74d11eead1)

Claim clm_c8975a95117b_ollama_intern_55 has no 'not' constraint recorded.

- **Claim IDs:** `clm_c8975a95117b_ollama_intern_55`
- **Source IDs:** `src_c8975a95117b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows configuring a custom command for file path autocomplete.

### [INFO] missing_not_constraint (fnd_d23a9f6091e4)

Claim clm_486f1e6121c8_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_1`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows users to extend Claude's capabilities through skills.

### [INFO] missing_not_constraint (fnd_4962fb4c78e2)

Claim clm_486f1e6121c8_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_6`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Every skill needs a SKILL.md file with frontmatter and markdown content.

### [INFO] missing_not_constraint (fnd_d200631c166d)

Claim clm_486f1e6121c8_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_12`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: When writing API endpoints in Claude Code, use RESTful naming conventions.

### [INFO] missing_not_constraint (fnd_273aa755d540)

Claim clm_486f1e6121c8_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_13`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: In API endpoint creation in Claude Code, return consistent error formats.

### [INFO] missing_not_constraint (fnd_71dac079f22c)

Claim clm_486f1e6121c8_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_14`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Include request validation when writing API endpoints in Claude Code.

### [INFO] missing_not_constraint (fnd_32b1d56cd11a)

Claim clm_486f1e6121c8_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_17`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Skills support string substitution for dynamic values in the skill content.

### [INFO] missing_not_constraint (fnd_2d03f036a76f)

Claim clm_486f1e6121c8_ollama_intern_29 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_29`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Skills can be created to migrate a component from one framework to another.

### [INFO] missing_not_constraint (fnd_923535662160)

Claim clm_486f1e6121c8_ollama_intern_32 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_32`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Each '!`<command>`' executes immediately before Claude sees anything.

### [INFO] missing_not_constraint (fnd_19539488fb58)

Claim clm_486f1e6121c8_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_33`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Skills can be created to run in isolation using the 'context: fork' directive.

### [INFO] missing_not_constraint (fnd_d5d84d35fd97)

Claim clm_486f1e6121c8_ollama_intern_36 has no 'not' constraint recorded.

- **Claim IDs:** `clm_486f1e6121c8_ollama_intern_36`
- **Source IDs:** `src_486f1e6121c8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Specific skills can be allowed or denied using permission rules.

### [INFO] missing_not_constraint (fnd_d88f0912c731)

Claim clm_9686dc1633cd_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_2`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code figures out how to build code based on user descriptions.

### [INFO] missing_not_constraint (fnd_56677558693d)

Claim clm_9686dc1633cd_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_3`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code's performance degrades as the context window fills up.

### [INFO] missing_not_constraint (fnd_7b3b6ac434b2)

Claim clm_9686dc1633cd_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_4`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Giving Claude a way to verify its work is crucial for better performance.

### [INFO] missing_not_constraint (fnd_9f1696b0be7d)

Claim clm_9686dc1633cd_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_16`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code allows specific tools through permission allowlists.

### [INFO] missing_not_constraint (fnd_f288d117a035)

Claim clm_9686dc1633cd_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_17`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Sandboxing restricts filesystem and network access in Claude Code.

### [INFO] missing_not_constraint (fnd_3e675e69e6f2)

Claim clm_9686dc1633cd_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_18`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code can use CLI tools like gh, aws, gcloud for external services.

### [INFO] missing_not_constraint (fnd_717ca4a01da7)

Claim clm_9686dc1633cd_ollama_intern_20 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_20`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Hooks in Claude Code run scripts automatically at specific points.

### [INFO] missing_not_constraint (fnd_ca47dac33a97)

Claim clm_9686dc1633cd_ollama_intern_21 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_21`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Skills extend Claude Code's knowledge with project-specific information.

### [INFO] missing_not_constraint (fnd_2b2ffef41c53)

Claim clm_9686dc1633cd_ollama_intern_22 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_22`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code has specialized assistants (subagents) for isolated tasks.

### [INFO] missing_not_constraint (fnd_2a2a825b846c)

Claim clm_9686dc1633cd_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9686dc1633cd_ollama_intern_30`
- **Source IDs:** `src_9686dc1633cd`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code provides instructions to customize compaction behavior in CLAUDE.md.

### [INFO] missing_not_constraint (fnd_7b5f6b4a915f)

Claim clm_126e07cf0d68_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_126e07cf0d68_ollama_intern_9`
- **Source IDs:** `src_126e07cf0d68`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Thoughtful context engineering is essential for building capable AI agents.

### [INFO] missing_not_constraint (fnd_9d0a723a54ad)

Claim clm_126e07cf0d68_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_126e07cf0d68_ollama_intern_13`
- **Source IDs:** `src_126e07cf0d68`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Few-shot prompting is a well-known best practice for LLMs.

### [INFO] missing_not_constraint (fnd_9ebc23f6bdc6)

Claim clm_126e07cf0d68_ollama_intern_14 has no 'not' constraint recorded.

- **Claim IDs:** `clm_126e07cf0d68_ollama_intern_14`
- **Source IDs:** `src_126e07cf0d68`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Stuffing a laundry list of edge cases into a prompt is not recommended.

### [INFO] missing_not_constraint (fnd_f9b6d60efba0)

Claim clm_126e07cf0d68_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_126e07cf0d68_ollama_intern_15`
- **Source IDs:** `src_126e07cf0d68`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Curating diverse, canonical examples is recommended for LLM prompting.

### [INFO] missing_not_constraint (fnd_44e83067531a)

Claim clm_59b5d7b9e7e4_ollama_intern_12 has no 'not' constraint recorded.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_12`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: arXiv provides a contact link for users to reach out.

### [WARN] source_quality_problem (fnd_72b6c3d19b06)

Claim clm_59b5d7b9e7e4_ollama_intern_12 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_12`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_ba3bc990c0e8)

Claim clm_59b5d7b9e7e4_ollama_intern_13 has no 'not' constraint recorded.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_13`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: arXiv offers a subscription link for users to join mailings.

### [WARN] source_quality_problem (fnd_7900c6176e7e)

Claim clm_59b5d7b9e7e4_ollama_intern_13 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_59b5d7b9e7e4_ollama_intern_13`
- **Source IDs:** `src_59b5d7b9e7e4`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: unknown

### [INFO] missing_not_constraint (fnd_b5fcbe5d8686)

Claim clm_9a532b2b74e5_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9a532b2b74e5_ollama_intern_15`
- **Source IDs:** `src_9a532b2b74e5`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** heuristic (multi_pass(heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Claude Code can route tasks from team chat to a pull request.

## Claim review decisions

### [NEEDS-SOURCE-REPAIR] `clm_2fff6e91c56c_ollama_intern_4`

Findings: source_quality_problem (warn).

Cites findings: `fnd_fd18861813d8`, `fnd_8bd58b6e6595`.

### [NEEDS-SOURCE-REPAIR] `clm_59b5d7b9e7e4_ollama_intern_6`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c9d800c84bcf`, `fnd_16f5c7925acf`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_5`

Findings: source_quality_problem (warn).

Cites findings: `fnd_795755b5439c`, `fnd_7c88e6bd82ae`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_6`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c71739ffc08f`, `fnd_db45cf79fadb`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_7`

Findings: source_quality_problem (warn).

Cites findings: `fnd_72b591bbd102`, `fnd_c4a3bb0aa0a0`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_8`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c585a9f81ca3`, `fnd_2fc3fd1018cd`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_10`

Findings: source_quality_problem (warn).

Cites findings: `fnd_646382ceec1c`, `fnd_c16397b005f1`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_14`

Findings: source_quality_problem (warn).

Cites findings: `fnd_fdf21750ec80`, `fnd_98186a9bb06c`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_629753d66c98`, `fnd_663328a0ee3b`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_17`

Findings: source_quality_problem (warn).

Cites findings: `fnd_753168400c78`, `fnd_3d0e5ea6c61a`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_19`

Findings: source_quality_problem (warn).

Cites findings: `fnd_c115138e5270`, `fnd_9f295d17f6e9`.

### [NEEDS-SOURCE-REPAIR] `clm_ea1a84785166_ollama_intern_20`

Findings: source_quality_problem (warn).

Cites findings: `fnd_41d96d90e8a7`, `fnd_19e80bbc6bad`.

### [NEEDS-SOURCE-REPAIR] `clm_59b5d7b9e7e4_ollama_intern_11`

Findings: source_quality_problem (warn).

Cites findings: `fnd_118ae9cea234`, `fnd_d562f6641606`.

### [ACCEPTED] `clm_9a532b2b74e5_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_49b77d38245c`.

### [ACCEPTED] `clm_9a532b2b74e5_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_6923a372eff0`.

### [ACCEPTED] `clm_9a532b2b74e5_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_483ee7e7a10f`.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_9a81a3777ab0`.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_ddd52e87f65e`.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_14`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_15`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_16`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_29`

Only info-level findings; accepted.

Cites findings: `fnd_777d93d0158d`.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_30`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_31`

Only info-level findings; accepted.

Cites findings: `fnd_821273020a94`.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_35`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_9a7d4217c64c_ollama_intern_40`

Only info-level findings; accepted.

Cites findings: `fnd_89ce83c21f06`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_4a37e081fc8f`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_77a5ef8255ba`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_27`

Only info-level findings; accepted.

Cites findings: `fnd_b3630cb50974`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_29`

Only info-level findings; accepted.

Cites findings: `fnd_6ea1f9483d7c`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_56`

Only info-level findings; accepted.

Cites findings: `fnd_454c5eaa4452`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_106`

Only info-level findings; accepted.

Cites findings: `fnd_394c8f396a3d`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_109`

Only info-level findings; accepted.

Cites findings: `fnd_076fcbde98db`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_125`

Only info-level findings; accepted.

Cites findings: `fnd_84cc72ffaee3`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_148`

Only info-level findings; accepted.

Cites findings: `fnd_5c738d663b8e`.

### [ACCEPTED] `clm_5be2e21d45c9_ollama_intern_149`

Only info-level findings; accepted.

Cites findings: `fnd_ef813d33a359`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_77c616704b4b`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_833f30ce9201`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_dcbb2624507b`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_5dfe656bbdff`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_c3d9ba5381be`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_7f0c98c45e8e`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_29`

Only info-level findings; accepted.

Cites findings: `fnd_4909f06165dc`.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_32`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_33`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_96b9a35307c0_ollama_intern_34`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_149f9f18adda`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_9c7bed6501b0`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_d8ffd6de9305`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_585d38687f18`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_20`

No findings recorded for this claim by the current reviewer.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_23`

Only info-level findings; accepted.

Cites findings: `fnd_d57fc9bc003b`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_28`

Only info-level findings; accepted.

Cites findings: `fnd_f392054c5a76`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_29`

Only info-level findings; accepted.

Cites findings: `fnd_9955c9437a8a`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_30`

Only info-level findings; accepted.

Cites findings: `fnd_7bce7a228ba4`.

### [ACCEPTED] `clm_c8975a95117b_ollama_intern_55`

Only info-level findings; accepted.

Cites findings: `fnd_5f74d11eead1`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_d23a9f6091e4`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_4962fb4c78e2`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_12`

Only info-level findings; accepted.

Cites findings: `fnd_d200631c166d`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_273aa755d540`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_71dac079f22c`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_32b1d56cd11a`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_29`

Only info-level findings; accepted.

Cites findings: `fnd_2d03f036a76f`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_32`

Only info-level findings; accepted.

Cites findings: `fnd_923535662160`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_33`

Only info-level findings; accepted.

Cites findings: `fnd_19539488fb58`.

### [ACCEPTED] `clm_486f1e6121c8_ollama_intern_36`

Only info-level findings; accepted.

Cites findings: `fnd_d5d84d35fd97`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_d88f0912c731`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_56677558693d`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_7b3b6ac434b2`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_16`

Only info-level findings; accepted.

Cites findings: `fnd_9f1696b0be7d`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_17`

Only info-level findings; accepted.

Cites findings: `fnd_f288d117a035`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_3e675e69e6f2`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_20`

Only info-level findings; accepted.

Cites findings: `fnd_717ca4a01da7`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_21`

Only info-level findings; accepted.

Cites findings: `fnd_ca47dac33a97`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_22`

Only info-level findings; accepted.

Cites findings: `fnd_2b2ffef41c53`.

### [ACCEPTED] `clm_9686dc1633cd_ollama_intern_30`

Only info-level findings; accepted.

Cites findings: `fnd_2a2a825b846c`.

### [ACCEPTED] `clm_126e07cf0d68_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_7b5f6b4a915f`.

### [ACCEPTED] `clm_126e07cf0d68_ollama_intern_13`

Only info-level findings; accepted.

Cites findings: `fnd_9d0a723a54ad`.

### [ACCEPTED] `clm_126e07cf0d68_ollama_intern_14`

Only info-level findings; accepted.

Cites findings: `fnd_9ebc23f6bdc6`.

### [ACCEPTED] `clm_126e07cf0d68_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_f9b6d60efba0`.

### [NEEDS-SOURCE-REPAIR] `clm_59b5d7b9e7e4_ollama_intern_12`

Findings: source_quality_problem (warn).

Cites findings: `fnd_44e83067531a`, `fnd_72b6c3d19b06`.

### [NEEDS-SOURCE-REPAIR] `clm_59b5d7b9e7e4_ollama_intern_13`

Findings: source_quality_problem (warn).

Cites findings: `fnd_ba3bc990c0e8`, `fnd_7900c6176e7e`.

### [ACCEPTED] `clm_9a532b2b74e5_ollama_intern_15`

Only info-level findings; accepted.

Cites findings: `fnd_b5fcbe5d8686`.
