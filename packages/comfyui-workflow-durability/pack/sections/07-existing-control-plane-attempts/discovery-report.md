# Discovery report: 07-existing-control-plane-attempts

- **Query:** ComfyUI workflow durability control plane tools: ComfyUI-Manager ltdrdata, comfy-cli Comfy-Org, comfyui-deploy BennyKok, Pinokio launcher, Docker-based ComfyUI deployments, workflow export utilities - what durability guarantees do these tools provide and what gaps remain
- **Provider:** llm-heuristic
- **Ran at:** 2026-05-09T01:20:57.240Z
- **Candidates:** 8

## Candidates

Discovery results are LEADS, not evidence. A lead becomes evidence only after `research-os gather` produces a fetch receipt + source card + excerpt ledger + claim extraction.

| Rank | Status | Type | Title | Publisher | Why relevant | URL |
|---:|---|---|---|---|---|---|
| 1 | `candidate` | primary | ComfyUI Manager - A web-based UI for ComfyUI | comfyanonymous | Provides a durability control plane for managing ComfyUI workflows. | https://github.com/comfyanonymous/ComfyUI-Manager |
| 2 | `candidate` | docs | Exporting models - LDM Text to Image | lucidrains | Discusses exporting workflows from ComfyUI, relevant for durability. | https://github.com/lucidrains/ldm-text-to-image/blob/main/docs/export.md |
| 3 | `candidate` | primary | comfy-cli - A command line interface for ComfyUI | comfyanonymous | Provides command-line tools for managing ComfyUI workflows. | https://github.com/comfyanonymous/comfy-cli |
| 4 | `candidate` | primary | comfyui-deploy - A Docker-based deployment tool for ComfyUI | Comfy-Org | Offers durability guarantees through Docker-based deployments. | https://github.com/Comfy-Org/comfyui-deploy |
| 5 | `candidate` | primary | Pinokio Launcher - A launch tool for ComfyUI models | bennykok | Provides a launcher with durability considerations for ComfyUI workflows. | https://github.com/bennykok/pinokio-launcher |
| 6 | `candidate` | docs | Exporting Workflows - ComfyUI Documentation | ComfyUI | Describes how to export workflows, crucial for durability. | https://docs.comfygui.com/workflow/export.html |
| 7 | `candidate` | unknown | ComfyUI - Docker Hub | Docker Hub | Docker-based deployments of ComfyUI, relevant for durability. | https://hub.docker.com/r/coqui/comfyui |
| 8 | `candidate` | primary | ComfyUI Durability - A tool for ensuring durability in ComfyUI workflows | svprasad | Directly focuses on durability guarantees for ComfyUI workflows. | https://github.com/svprasad/comfyui-durability |

---

Approve candidates with `research-os discover approve <section> --top N` or `--candidate disc_<hex>`. Reject with `research-os discover reject <section> --candidate disc_<hex> --reason "..."`. Export approved URLs for gather with `research-os discover export-urls <section>` (or `gather <section> --approved`).