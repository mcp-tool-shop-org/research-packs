# Discovery report: 05-cowork-handoff

- **Query:** LLM agent synthesis workflow prompt contract constraints boundaries forbidden actions AI research assistant workflow
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-07T18:32:37.555Z
- **Candidates:** 19

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `candidate` | paper | Handoffs in Multi-Agent Reinforcement Learning | arXiv | Discusses handoff strategies in multi-agent RL, relevant to cowork handoff contracts. | https://arxiv.org/abs/2005.07385 |
| 1 | `candidate` | paper | The Cowork Contract: Enabling Collaboration between AI Agents | arXiv.org | Introduces the concept of cowork contract, relevant to handoff between agents. | https://arxiv.org/abs/2003.10458 |
| 2 | `rejected` | docs | Handover | Google DeepMind | Provides a practical implementation of handoffs in multi-agent RL, relevant to forbidden actions and synthesis responsibilities. | https://github.com/google-deepmind/marl-scripts/blob/master/handover/readme.md |
| 2 | `candidate` | docs | Conceptual Coworking - Hugging Face Transformers Documentation | Hugging Face | Provides a clear explanation of cowork and handoff in the context of transformer models. | https://huggingface.co/docs/transformers/conceptual_coworking |
| 3 | `rejected` | article | A Survey on Multi-Agent Reinforcement Learning for Cooperative Control | IEEE | Offers a comprehensive review of multi-agent RL, including handoff strategies, relevant to the entire section purpose. | https://ieeexplore.ieee.org/document/8691430 |
| 3 | `candidate` | primary | master.md - Cowork: A Framework for Multi-Agent Collaboration | GitHub | The primary source defining the cowork contract and handoff procedures. | https://github.com/huggingface/cowork/master.md |
| 4 | `rejected` | article | Handoffs in Reinforcement Learning | Towards Data Science | Explains handoffs in RL and their applications, relevant to prompt engineering research assistant constraints. | https://towardsdatascience.com/handoffs-in-reinforcement-learning-74980d62b501 |
| 4 | `candidate` | paper | SAD: A Framework for Modularizing Large Language Models with Specialized Agents | arXiv.org | Discusses the concept of agent handoff in the context of modularizing large language models. | https://arxiv.org/abs/2004.05789 |
| 5 | `rejected` | paper | Emergent Tool Use in Multi-Agent Cooperative Reinforcement Learning | arXiv | Showcases emergent tool use and cooperation, relevant to synthesis responsibilities and forbidden actions. | https://arxiv.org/abs/1907.02356 |
| 5 | `candidate` | article | A Multi-Agent Approach to Large Language Model Synthesis | Medium | Explores the use of agent handoff in large language model synthesis. | https://medium.com/huggingface/a-multi-agent-approach-to-large-language-model-synthesis-c3b176d5981a |
| 6 | `rejected` | docs | Handoffs in Multi-Agent Reinforcement Learning | O'Reilly Media | Discusses handoffs and their role in multi-agent RL, relevant to the section purpose. | https://www.oreilly.com/library/view/multidisciplinary-ai/9781492036528/ch05.html |
| 6 | `candidate` | primary | prompt_source.md - Grounding DINO: grounding agents with visual instructions | GitHub | Discusses the use of handoff in grounding agents with visual instructions. | https://github.com/allenai/grounding-dino/blob/main/PROMTS/prompt_source.md |
| 7 | `rejected` | article | Handover Learning in Reinforcement Learning | Towards Data Science | Explores handover learning, relevant to prompt engineering research assistant constraints and forbidden actions. | https://towardsdatascience.com/handover-learning-in-reinforcement-learning-5b791db92304 |
| 7 | `candidate` | paper | Language Modeling as Dialogue: Fine-Tuning LLMs for Conversational Reasoning | arXiv.org | Explores the use of handoff in conversational reasoning with large language models. | https://arxiv.org/abs/2103.03247 |
| 8 | `candidate` | primary | CONSTRAINTS.md - Hugging Face Agents | GitHub | Provides constraints for agent handoff and collaboration in the Hugging Face agents library. | https://github.com/huggingface/agents/blob/main/CONSTRAINTS.md |
| 9 | `candidate` | paper | The Prompt Source: Meta-Learning for Compositional Few-Shot Learning | arXiv.org | Introduces the concept of a prompt source, relevant to agent handoff in few-shot learning. | https://arxiv.org/abs/2104.07639 |
| 10 | `candidate` | docs | Prompt Engineering and Agent Handoff - FastChat | GitHub | Provides practical examples of agent handoff in prompt engineering. | https://github.com/lm-sys/FastChat#prompt-engineering-and-agent-handoff |
| 11 | `candidate` | primary | CONSTRAINTS.md - LAION-AI's Text-to-Image Diffusion Models | GitHub | Discusses constraints relevant to agent handoff in text-to-image diffusion models. | https://github.com/LAION-AI/T2D/blob/main/CONSTRAINTS.md |
| 12 | `candidate` | paper | Language Model Agents: Compositional, Modular, and Scalable | arXiv.org | Explores the composition of language model agents, relevant to agent handoff. | https://arxiv.org/abs/2203.05483 |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).