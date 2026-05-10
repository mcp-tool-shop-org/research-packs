# Cowork Handoff: What makes XRPL creator-token holdings durable over time — across token-standard versions, account access changes, and ledger-state evolution — and what should a creator-side control plane track to keep them runnable, transferable, and provable?

**Pack ID:** `a4a528f548e1`
**Mode:** [SYNTHESIS READY] synthesis_ready
**Synthesis allowed:** yes
**Generated:** 2026-05-10T00:05:08.984Z
**Index:** present

> Pack mode=synthesis_ready; 7 section(s) total, 7 synthesis-eligible, 0 blocked or unrun. 256 accepted claim(s); 96 need repair; 0 dispositioned; 1 rejected; 0 unresolved contradiction(s); 5 waiver(s).

## Operating mode

Required sections are synthesis-eligible, accepted claims exist, no unwaived blocking contradictions remain. You may perform cross-section synthesis using accepted claim_ids only. You may not introduce new facts or cite outside the source ledger.

## What you may do

- Reason across sections to draft `synthesis/cross-section-map.md`.
- Produce `synthesis/decision-brief.md` answering the pack's `decision` field, citing only accepted_claim_ids.
- Draft `synthesis/final-report.md` if (and only if) the decision brief is honest about unresolved tensions.
- Use `research-os query "<term>"` to retrieve grounded artifacts; never paraphrase past the indexed evidence.

## What you may not do (always — these are pack invariants)

- Mutate sections/<id>/claims.jsonl directly — it is extraction truth (append-only via research-os tools)
- Mutate evidence/source-cards/*.json or evidence/fetch-log.jsonl — these are fetched-truth artifacts
- Mutate audits/*-gate.json or audits/*-review.json — these are immutable audit snapshots
- Cite a source_id that is not present in evidence/source-cards/
- Cite a claim_id that is not present in sections/<id>/claims.jsonl
- Treat a claim with scope=null as broadly applicable — null-scope means scope-undetermined, not scope-universal
- Widen the scope of a claim beyond what the source explicitly supports
- Flatten an unresolved contradiction; preserve it deliberately or route it through claim-reviews
- Write final synthesis prose unless mode == synthesis_ready
- Reconcile contradictions silently — use research-os contradict map / research-os review with explicit decisions

## Pack state

| Section | Status | Gate verdict | Synthesis-eligible | Candidate claims | Accepted | Need repair | Rejected | Unresolved contradictions |
|---|---|---|---|---|---|---|---|---|
| `01-token-surface-and-standards` | gated | warn | yes | 272 | 45 | 18 | 1 | 0 |
| `02-account-and-key-management` | gated | warn | yes | 173 | 32 | 7 | 0 | 0 |
| `03-on-ledger-state-and-reserves` | gated | warn | yes | 197 | 42 | 13 | 0 | 0 |
| `04-issuer-controls-and-immutability` | gated | warn | yes | 170 | 27 | 15 | 0 | 0 |
| `05-transfer-and-trade-mechanics` | gated | warn | yes | 156 | 30 | 17 | 0 | 0 |
| `06-amendment-and-validator-landscape` | gated | warn | yes | 358 | 56 | 5 | 0 | 0 |
| `07-metadata-and-off-chain-durability` | gated | warn | yes | 300 | 24 | 21 | 0 | 0 |

### Accepted claims (synthesis-ready)

- `clm_f0063f109b4a_ollama_intern_1`
- `clm_f0063f109b4a_ollama_intern_2`
- `clm_f0063f109b4a_ollama_intern_4`
- `clm_f0063f109b4a_ollama_intern_5`
- `clm_f0063f109b4a_ollama_intern_6`
- `clm_f0063f109b4a_ollama_intern_7`
- `clm_f0063f109b4a_ollama_intern_8`
- `clm_f0063f109b4a_ollama_intern_9`
- `clm_5229d8bd314e_ollama_intern_2`
- `clm_5229d8bd314e_ollama_intern_9`
- `clm_ec3eb93321a7_ollama_intern_2`
- `clm_ec3eb93321a7_ollama_intern_3`
- `clm_0255a2aac931_ollama_intern_1`
- `clm_0255a2aac931_ollama_intern_4`
- `clm_0255a2aac931_ollama_intern_18`
- `clm_0255a2aac931_ollama_intern_19`
- `clm_0255a2aac931_ollama_intern_20`
- `clm_c3f060147acd_ollama_intern_1`
- `clm_c3f060147acd_ollama_intern_4`
- `clm_c3f060147acd_ollama_intern_8`
- `clm_c3f060147acd_ollama_intern_14`
- `clm_c3f060147acd_ollama_intern_19`
- `clm_c3f060147acd_ollama_intern_24`
- `clm_c3f060147acd_ollama_intern_26`
- `clm_c3f060147acd_ollama_intern_29`
- `clm_c3f060147acd_ollama_intern_30`
- `clm_89d29fa8978f_ollama_intern_7`
- `clm_89d29fa8978f_ollama_intern_10`
- `clm_89d29fa8978f_ollama_intern_11`
- `clm_89d29fa8978f_ollama_intern_16`
- `clm_89d29fa8978f_ollama_intern_19`
- `clm_89d29fa8978f_ollama_intern_20`
- `clm_89d29fa8978f_ollama_intern_21`
- `clm_89d29fa8978f_ollama_intern_25`
- `clm_89d29fa8978f_ollama_intern_31`
- `clm_89d29fa8978f_ollama_intern_83`
- `clm_d16112dea1e0_ollama_intern_4`
- `clm_d16112dea1e0_ollama_intern_5`
- `clm_d16112dea1e0_ollama_intern_7`
- `clm_d16112dea1e0_ollama_intern_12`
- `clm_d16112dea1e0_ollama_intern_14`
- `clm_d16112dea1e0_ollama_intern_15`
- `clm_d16112dea1e0_ollama_intern_16`
- `clm_d16112dea1e0_ollama_intern_17`
- `clm_d16112dea1e0_ollama_intern_18`
- `clm_cef2c31af42d_ollama_intern_8`
- `clm_cef2c31af42d_ollama_intern_9`
- `clm_117260e9e17f_ollama_intern_6`
- `clm_117260e9e17f_ollama_intern_9`
- `clm_117260e9e17f_ollama_intern_10`
- `clm_117260e9e17f_ollama_intern_11`
- `clm_117260e9e17f_ollama_intern_12`
- `clm_117260e9e17f_ollama_intern_20`
- `clm_b98e4c872d37_ollama_intern_9`
- `clm_13f7e950b494_ollama_intern_3`
- `clm_13f7e950b494_ollama_intern_7`
- `clm_13f7e950b494_ollama_intern_9`
- `clm_097142ab08d3_ollama_intern_1`
- `clm_097142ab08d3_ollama_intern_9`
- `clm_097142ab08d3_ollama_intern_10`
- `clm_097142ab08d3_ollama_intern_11`
- `clm_7d558c2ae6d2_ollama_intern_2`
- `clm_b357e7424a79_ollama_intern_7`
- `clm_5b84f976c797_ollama_intern_1`
- `clm_9505395adfe8_ollama_intern_1`
- `clm_9505395adfe8_ollama_intern_2`
- `clm_9505395adfe8_ollama_intern_4`
- `clm_9505395adfe8_ollama_intern_19`
- `clm_68a1f3f26f9b_ollama_intern_5`
- `clm_206907715043_ollama_intern_3`
- `clm_206907715043_ollama_intern_4`
- `clm_206907715043_ollama_intern_7`
- `clm_206907715043_ollama_intern_8`
- `clm_206907715043_ollama_intern_9`
- `clm_206907715043_ollama_intern_10`
- `clm_ec68826269c9_ollama_intern_3`
- `clm_ec68826269c9_ollama_intern_9`
- `clm_525532c48160_ollama_intern_3`
- `clm_525532c48160_ollama_intern_4`
- `clm_525532c48160_ollama_intern_5`
- `clm_006880d4c42c_ollama_intern_14`
- `clm_006880d4c42c_ollama_intern_25`
- `clm_5f4e84349ec5_ollama_intern_3`
- `clm_5f4e84349ec5_ollama_intern_12`
- `clm_90368c8bfc17_ollama_intern_1`
- `clm_90368c8bfc17_ollama_intern_2`
- `clm_f011b0207e63_ollama_intern_2`
- `clm_f011b0207e63_ollama_intern_5`
- `clm_f011b0207e63_ollama_intern_13`
- `clm_f011b0207e63_ollama_intern_14`
- `clm_051630391070_ollama_intern_3`
- `clm_051630391070_ollama_intern_4`
- `clm_051630391070_ollama_intern_5`
- `clm_051630391070_ollama_intern_6`
- `clm_48fddb8ee3b6_ollama_intern_4`
- `clm_48fddb8ee3b6_ollama_intern_6`
- `clm_9505395adfe8_ollama_intern_14`
- `clm_9505395adfe8_ollama_intern_15`
- `clm_9505395adfe8_ollama_intern_16`
- `clm_bc7eaa08f673_ollama_intern_4`
- `clm_bc7eaa08f673_ollama_intern_5`
- `clm_bc7eaa08f673_ollama_intern_6`
- `clm_bc7eaa08f673_ollama_intern_7`
- `clm_a101a2ec3e2c_ollama_intern_1`
- `clm_9c84764fa541_ollama_intern_5`
- `clm_9c84764fa541_ollama_intern_7`
- `clm_9c84764fa541_ollama_intern_20`
- `clm_9c84764fa541_ollama_intern_22`
- `clm_9c84764fa541_ollama_intern_23`
- `clm_9c84764fa541_ollama_intern_25`
- `clm_9c84764fa541_ollama_intern_26`
- `clm_9c84764fa541_ollama_intern_32`
- `clm_9c84764fa541_ollama_intern_37`
- `clm_ec68826269c9_ollama_intern_2`
- `clm_ec68826269c9_ollama_intern_9`
- `clm_ec68826269c9_ollama_intern_10`
- `clm_ec68826269c9_ollama_intern_11`
- `clm_ec68826269c9_ollama_intern_12`
- `clm_72d8a212a86a_ollama_intern_1`
- `clm_517d67dc1224_ollama_intern_4`
- `clm_517d67dc1224_ollama_intern_7`
- `clm_517d67dc1224_ollama_intern_10`
- `clm_517d67dc1224_ollama_intern_11`
- `clm_ff9fbb4f8527_ollama_intern_3`
- `clm_097142ab08d3_ollama_intern_5`
- `clm_097142ab08d3_ollama_intern_20`
- `clm_319355bfb19d_ollama_intern_2`
- `clm_319355bfb19d_ollama_intern_3`
- `clm_319355bfb19d_ollama_intern_6`
- `clm_319355bfb19d_ollama_intern_8`
- `clm_e98d1069b3a8_ollama_intern_1`
- `clm_e98d1069b3a8_ollama_intern_2`
- `clm_e98d1069b3a8_ollama_intern_5`
- `clm_4727592a5328_ollama_intern_3`
- `clm_4727592a5328_ollama_intern_5`
- `clm_90368c8bfc17_ollama_intern_2`
- `clm_90368c8bfc17_ollama_intern_9`
- `clm_d0882a19791f_ollama_intern_1`
- `clm_d0882a19791f_ollama_intern_2`
- `clm_d0882a19791f_ollama_intern_3`
- `clm_9505395adfe8_ollama_intern_1`
- `clm_9505395adfe8_ollama_intern_6`
- `clm_9505395adfe8_ollama_intern_7`
- `clm_9505395adfe8_ollama_intern_8`
- `clm_9505395adfe8_ollama_intern_9`
- `clm_9505395adfe8_ollama_intern_18`
- `clm_71ee1ec187f7_ollama_intern_2`
- `clm_71ee1ec187f7_ollama_intern_3`
- `clm_71ee1ec187f7_ollama_intern_4`
- `clm_034a20f9fcbf_ollama_intern_2`
- `clm_034a20f9fcbf_ollama_intern_3`
- `clm_c8f7530cb4f1_ollama_intern_2`
- `clm_c8f7530cb4f1_ollama_intern_3`
- `clm_5a1d70d24fc1_ollama_intern_1`
- `clm_5d5676c4b1d7_ollama_intern_4`
- `clm_731c5d0b7dc0_ollama_intern_2`
- `clm_01e8d92d7e53_ollama_intern_3`
- `clm_01e8d92d7e53_ollama_intern_10`
- `clm_01e8d92d7e53_ollama_intern_11`
- `clm_01e8d92d7e53_ollama_intern_12`
- `clm_e1cfbbad4fa5_ollama_intern_5`
- `clm_e1cfbbad4fa5_ollama_intern_9`
- `clm_bb6e135772ef_ollama_intern_9`
- `clm_f103bcae0753_ollama_intern_1`
- `clm_f103bcae0753_ollama_intern_2`
- `clm_f103bcae0753_ollama_intern_3`
- `clm_f103bcae0753_ollama_intern_6`
- `clm_736c7f9cccff_ollama_intern_7`
- `clm_51d3108c7446_ollama_intern_7`
- `clm_051630391070_ollama_intern_5`
- `clm_48fddb8ee3b6_ollama_intern_1`
- `clm_48fddb8ee3b6_ollama_intern_2`
- `clm_48fddb8ee3b6_ollama_intern_3`
- `clm_48fddb8ee3b6_ollama_intern_4`
- `clm_48fddb8ee3b6_ollama_intern_5`
- `clm_a37ff8072a91_ollama_intern_9`
- `clm_03f52c5d778f_ollama_intern_2`
- `clm_03f52c5d778f_ollama_intern_3`
- `clm_03f52c5d778f_ollama_intern_6`
- `clm_03f52c5d778f_ollama_intern_7`
- `clm_03f52c5d778f_ollama_intern_8`
- `clm_03f52c5d778f_ollama_intern_10`
- `clm_8d039f2c0ee8_ollama_intern_13`
- `clm_8d039f2c0ee8_ollama_intern_14`
- `clm_8d039f2c0ee8_ollama_intern_16`
- `clm_8d039f2c0ee8_ollama_intern_17`
- `clm_8d039f2c0ee8_ollama_intern_18`
- `clm_8ebf52ac0af9_ollama_intern_1`
- `clm_8ebf52ac0af9_ollama_intern_2`
- `clm_8ebf52ac0af9_ollama_intern_4`
- `clm_8ebf52ac0af9_ollama_intern_6`
- `clm_8ebf52ac0af9_ollama_intern_7`
- `clm_8ebf52ac0af9_ollama_intern_8`
- `clm_25ac15171ff0_ollama_intern_2`
- `clm_25ac15171ff0_ollama_intern_11`
- `clm_5412494af521_ollama_intern_14`
- `clm_5412494af521_ollama_intern_17`
- `clm_5412494af521_ollama_intern_40`
- `clm_5412494af521_ollama_intern_63`
- `clm_5412494af521_ollama_intern_67`
- `clm_5412494af521_ollama_intern_101`
- `clm_5412494af521_ollama_intern_103`
- `clm_5412494af521_ollama_intern_105`
- `clm_5412494af521_ollama_intern_106`
- `clm_5412494af521_ollama_intern_115`
- `clm_512ff500b432_ollama_intern_12`
- `clm_512ff500b432_ollama_intern_25`
- `clm_512ff500b432_ollama_intern_30`
- `clm_512ff500b432_ollama_intern_34`
- `clm_512ff500b432_ollama_intern_35`
- `clm_512ff500b432_ollama_intern_45`
- `clm_512ff500b432_ollama_intern_70`
- `clm_512ff500b432_ollama_intern_71`
- `clm_512ff500b432_ollama_intern_72`
- `clm_515596050b06_ollama_intern_1`
- `clm_515596050b06_ollama_intern_5`
- `clm_515596050b06_ollama_intern_6`
- `clm_515596050b06_ollama_intern_14`
- `clm_515596050b06_ollama_intern_36`
- `clm_515596050b06_ollama_intern_42`
- `clm_515596050b06_ollama_intern_43`
- `clm_515596050b06_ollama_intern_44`
- `clm_515596050b06_ollama_intern_46`
- `clm_d16112dea1e0_ollama_intern_1`
- `clm_d16112dea1e0_ollama_intern_3`
- `clm_d16112dea1e0_ollama_intern_4`
- `clm_d16112dea1e0_ollama_intern_6`
- `clm_d16112dea1e0_ollama_intern_7`
- `clm_d16112dea1e0_ollama_intern_8`
- `clm_d16112dea1e0_ollama_intern_9`
- `clm_d16112dea1e0_ollama_intern_10`
- `clm_d16112dea1e0_ollama_intern_13`
- `clm_517d67dc1224_ollama_intern_7`
- `clm_517d67dc1224_ollama_intern_8`
- `clm_0b01dd18d515_ollama_intern_6`
- `clm_0b01dd18d515_ollama_intern_7`
- `clm_0b01dd18d515_ollama_intern_8`
- `clm_0b01dd18d515_ollama_intern_9`
- `clm_0b01dd18d515_ollama_intern_10`
- `clm_0b01dd18d515_ollama_intern_11`
- `clm_37c1413248e9_ollama_intern_2`
- `clm_37c1413248e9_ollama_intern_3`
- `clm_37c1413248e9_ollama_intern_4`
- `clm_37c1413248e9_ollama_intern_5`
- `clm_37c1413248e9_ollama_intern_6`
- `clm_d6c57c6845e6_ollama_intern_2`
- `clm_d6c57c6845e6_ollama_intern_3`
- `clm_d6c57c6845e6_ollama_intern_5`
- `clm_d6c57c6845e6_ollama_intern_6`
- `clm_517d67dc1224_ollama_intern_13`
- `clm_2185c0910a10_ollama_intern_33`
- `clm_d6c57c6845e6_ollama_intern_2`
- `clm_d6c57c6845e6_ollama_intern_3`
- `clm_d6c57c6845e6_ollama_intern_5`
- `clm_d6c57c6845e6_ollama_intern_6`
- `clm_2185c0910a10_ollama_intern_33`

### Claims needing repair

- `clm_f0063f109b4a_ollama_intern_3`
- `clm_5229d8bd314e_ollama_intern_8`
- `clm_ec3eb93321a7_ollama_intern_4`
- `clm_ec3eb93321a7_ollama_intern_5`
- `clm_ec3eb93321a7_ollama_intern_6`
- `clm_c3f060147acd_ollama_intern_23`
- `clm_d16112dea1e0_ollama_intern_33`
- `clm_d2fef4cddfd7_ollama_intern_4`
- `clm_62cf595f3835_ollama_intern_3`
- `clm_62cf595f3835_ollama_intern_13`
- `clm_62cf595f3835_ollama_intern_18`
- `clm_62cf595f3835_ollama_intern_23`
- `clm_62cf595f3835_ollama_intern_27`
- `clm_62cf595f3835_ollama_intern_28`
- `clm_62cf595f3835_ollama_intern_29`
- `clm_62cf595f3835_ollama_intern_31`
- `clm_62cf595f3835_ollama_intern_32`
- `clm_62cf595f3835_ollama_intern_35`
- `clm_117260e9e17f_ollama_intern_13`
- `clm_13f7e950b494_ollama_intern_1`
- `clm_b357e7424a79_ollama_intern_8`
- `clm_9505395adfe8_ollama_intern_18`
- `clm_68a1f3f26f9b_ollama_intern_3`
- `clm_68a1f3f26f9b_ollama_intern_9`
- `clm_31ded2938c1f_ollama_intern_10`
- `clm_006880d4c42c_ollama_intern_3`
- `clm_006880d4c42c_ollama_intern_6`
- `clm_006880d4c42c_ollama_intern_12`
- `clm_006880d4c42c_ollama_intern_21`
- `clm_006880d4c42c_ollama_intern_24`
- `clm_006880d4c42c_ollama_intern_26`
- `clm_006880d4c42c_ollama_intern_31`
- `clm_5f4e84349ec5_ollama_intern_15`
- `clm_5f4e84349ec5_ollama_intern_18`
- `clm_48fddb8ee3b6_ollama_intern_2`
- `clm_ec68826269c9_ollama_intern_1`
- `clm_ec68826269c9_ollama_intern_8`
- `clm_72d8a212a86a_ollama_intern_8`
- `clm_319355bfb19d_ollama_intern_1`
- `clm_92f5c74d9bda_ollama_intern_6`
- `clm_92f5c74d9bda_ollama_intern_7`
- `clm_92f5c74d9bda_ollama_intern_8`
- `clm_9505395adfe8_ollama_intern_17`
- `clm_12ac7f4c315b_ollama_intern_3`
- `clm_12ac7f4c315b_ollama_intern_15`
- `clm_12ac7f4c315b_ollama_intern_16`
- `clm_12ac7f4c315b_ollama_intern_18`
- `clm_12ac7f4c315b_ollama_intern_23`
- `clm_12ac7f4c315b_ollama_intern_27`
- `clm_12ac7f4c315b_ollama_intern_30`
- `clm_12ac7f4c315b_ollama_intern_31`
- `clm_12ac7f4c315b_ollama_intern_32`
- `clm_12ac7f4c315b_ollama_intern_33`
- `clm_5d5676c4b1d7_ollama_intern_2`
- `clm_5d5676c4b1d7_ollama_intern_3`
- `clm_5d5676c4b1d7_ollama_intern_9`
- `clm_01e8d92d7e53_ollama_intern_5`
- `clm_bb6e135772ef_ollama_intern_2`
- `clm_736c7f9cccff_ollama_intern_2`
- `clm_51d3108c7446_ollama_intern_6`
- `clm_51d3108c7446_ollama_intern_10`
- `clm_a37ff8072a91_ollama_intern_1`
- `clm_a37ff8072a91_ollama_intern_6`
- `clm_a37ff8072a91_ollama_intern_7`
- `clm_a37ff8072a91_ollama_intern_8`
- `clm_a37ff8072a91_ollama_intern_17`
- `clm_a37ff8072a91_ollama_intern_18`
- `clm_a37ff8072a91_ollama_intern_20`
- `clm_a37ff8072a91_ollama_intern_22`
- `clm_a37ff8072a91_ollama_intern_29`
- `clm_03f52c5d778f_ollama_intern_1`
- `clm_512ff500b432_ollama_intern_21`
- `clm_515596050b06_ollama_intern_41`
- `clm_e25c1c4ecccf_ollama_intern_2`
- `clm_e25c1c4ecccf_ollama_intern_15`
- `clm_313e0214db27_ollama_intern_2`
- `clm_313e0214db27_ollama_intern_3`
- `clm_313e0214db27_ollama_intern_4`
- `clm_313e0214db27_ollama_intern_23`
- `clm_313e0214db27_ollama_intern_24`
- `clm_313e0214db27_ollama_intern_25`
- `clm_313e0214db27_ollama_intern_26`
- `clm_313e0214db27_ollama_intern_27`
- `clm_313e0214db27_ollama_intern_56`
- `clm_313e0214db27_ollama_intern_67`
- `clm_d6c57c6845e6_ollama_intern_13`
- `clm_accb45067034_ollama_intern_4`
- `clm_2185c0910a10_ollama_intern_2`
- `clm_2185c0910a10_ollama_intern_35`
- `clm_48463ecf8302_ollama_intern_1`
- `clm_48463ecf8302_ollama_intern_2`
- `clm_d6c57c6845e6_ollama_intern_13`
- `clm_accb45067034_ollama_intern_4`
- `clm_2185c0910a10_ollama_intern_2`
- `clm_48463ecf8302_ollama_intern_1`
- `clm_48463ecf8302_ollama_intern_2`

### Rejected claims

- `clm_0255a2aac931_ollama_intern_3`

### Unresolved contradictions

_None._

### Active waivers

- **gate.source_floor** applied to `01-token-surface-and-standards.min_independent_publishers`
  - Reason: Section 01 defines XRPL token surfaces from canonical protocol sources.
The authoritative source of truth is intentionally concentrated in XRPL
Foundation documentation, XLS standards, and rippled implementation/release
records. Third-party publishers can explain or interpret these standards,
but they are not primary authorities for protocol semantics.

  - Compensating: Sources span multiple canonical artifact types: xrpl.org docs, rendered XLS standards, raw standards markdown, rippled release data, and GitHub implementation discussions.
  - Compensating: Claims remain span-grounded and reviewed individually.
  - Compensating: Section synthesis must disclose the single-foundation source concentration.
  - Compensating: Third-party sources may be added in later sections for adoption, marketplace, metadata, or operational interpretation, but are not required for protocol-definition truth.
- **gate.source_floor** applied to `02-account-and-key-management.min_independent_publishers`
  - Reason: Section 02 documents XRPL account and key management semantics —
AccountRoot fields, master key disablement (lsfDisableMaster),
regular key (SetRegularKey), signer-list-based multi-signing
(SignerListSet), ticket-based authorization (TicketCreate), account
deletion (AccountDelete), and permission/delegation values. The
authoritative source of truth for these mechanics is intentionally
concentrated in XRPL Foundation documentation at xrpl.org and the
rippled implementation. Whether SetRegularKey, SignerListSet,
AccountDelete, or AccountSet behave a particular way is defined
by the protocol-defining body; third-party explainers describe how
operators consume these mechanics but cannot provide more
authoritative ground truth than xrpl.org's transaction-type and
ledger-entry-type references.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org account concept docs (Accounts overview, cryptographic-keys, multi-signing, tickets), xrpl.org transaction-type references (AccountSet, SetRegularKey, SignerListSet, AccountDelete, TicketCreate), xrpl.org ledger-entry-type references (AccountRoot, SignerList), permission-values data-type reference, and account_info JSON-RPC method documentation.
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled AccountDelete + NFT edge cases) are typed as forum (developer-discussion supplementary) and provide deletion-precondition edge-case evidence beyond what canonical docs surface; canonical claims still trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver. Wallet-UX claims (e.g., 'wallet provides signer UI') and ticket-as-key-recovery conflations are wallet-feature or category errors, not protocol claims, and per-claim findings should route them to scope_repair or rejection without the waiver covering for the mismatch.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01 and Section 03 discipline. Account and key semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **gate.source_floor** applied to `03-on-ledger-state-and-reserves.min_independent_publishers`
  - Reason: Section 03 documents XRPL on-ledger state representations (NFTokenPage,
MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot) and the
reserve mechanics (base + owner reserve) that govern account-level
token storage. The authoritative source of truth for these ledger-entry
types and the JSON-RPC methods that read them (account_objects,
ledger_entry, account_info) is intentionally concentrated in XRPL
Foundation documentation at xrpl.org and the rippled implementation.
These artifacts define the on-ledger schema by construction; third-party
publishers describe how operators consume them, but cannot provide
authoritative ground truth for the schema itself.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org ledger-entry-type reference pages (NFTokenPage, MPTokenIssuance, RippleState, Offer, NFTokenOffer, AccountRoot), xrpl.org reserve-concept documentation, xrpl.org JSON-RPC method documentation (account_objects, ledger_entry, account_info), and the ledger-entry-types index page.
  - Compensating: Supplementary GitHub Search API issues from XRPLF/rippled are typed as forum (developer-discussion, not first-party canonical) and provide deletion-edge-case evidence; canonical claims trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim source-quality findings continue to apply normally regardless of waiver.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Section 01's discipline. Each ledger-entry-type claim's authoritative basis is the protocol foundation's own definition; this is a structural property of XRPL's governance, not a source-curation gap.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **gate.source_floor** applied to `05-transfer-and-trade-mechanics.min_independent_publishers`
  - Reason: Section 05 documents XRPL transfer and trade mechanics — direct
NFToken offers (NFTokenCreateOffer / NFTokenAcceptOffer /
NFTokenCancelOffer including brokered mode), fungible-token DEX
mechanics (OfferCreate / OfferCancel), Payment (XRP and cross-
currency with pathfinding), Escrow (EscrowCreate / EscrowFinish),
and JSON-RPC introspection methods (nft_sell_offers, nft_buy_offers,
account_nfts, account_offers) plus the Offer and NFTokenOffer
ledger-entry types. The authoritative source of truth for how these
transactions and ledger objects behave — including the brokered
NFTokenAcceptOffer pattern, cross-currency payment pathfinding, and
escrow execution semantics — is intentionally concentrated in XRPL
Foundation documentation at xrpl.org and the rippled implementation.
Third-party explainers describe how operators consume these
mechanisms but cannot provide more authoritative ground truth than
the protocol-defining body.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org transaction-type references (NFTokenCreateOffer, NFTokenAcceptOffer, NFTokenCancelOffer, OfferCreate, OfferCancel, Payment, EscrowCreate, EscrowFinish), xrpl.org concept docs (cross-currency-payments), xrpl.org JSON-RPC method references (nft_sell_offers, nft_buy_offers, account_nfts, account_offers), and xrpl.org ledger-entry-type references (Offer, NFTokenOffer).
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled NFT offer brokered edge cases) are typed as forum (developer-discussion supplementary); canonical claims still trace to xrpl.org first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim findings continue to apply normally regardless of waiver. Specific scope discipline for this section: do NOT collapse NFT offer mechanics into fungible DEX OfferCreate (different transactions, different ledger-entry types, different state-machines); brokered NFTokenAcceptOffer must stay distinct from direct accept (most-misunderstood XRPL feature); cross-currency payments / pathfinding apply to fungible/payment flows NOT NFT transfer; escrow mechanics are NOT universal token custody (XRP + amendment-gated IOU/MPT, NFT escrow may be separate or absent); offer existence is NOT liquidity guarantee; transferability depends on flags + issuer controls + reserve/offer state from prior sections.
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Sections 01-04 discipline. Transfer and trade mechanics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap. The synthesis contribution thesis for this section: a creator token is not durable just because it exists on-ledger — it must remain transferable under the token standard's offer/payment/escrow mechanics, and those mechanics differ sharply across NFTokens, trustline tokens, MPTs, and XRP paths.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.
- **gate.source_floor** applied to `06-amendment-and-validator-landscape.min_independent_publishers`
  - Reason: Section 06 documents XRPL's amendment system and validator landscape
— the meta-layer mechanism by which every other section's protocol
behavior can change. Topics include the 80% validator consensus
threshold, 2-week activation window, EnableAmendment pseudo-
transaction, specific amendments (XLS-20 non-fungible tokens,
XLS-33 multi-purpose tokens, XLS-39 Clawback, DisallowIncoming,
TokenEscrow, NFTokenModify), amendment deprecation paths, the
Amendments ledger-entry, the FeeSettings ledger-entry, the
NegativeUNL ledger-entry, validator distribution, and UNL
(Unique Node List) operator configuration. The authoritative
source of truth for amendment-system mechanics, voting thresholds,
and activation timelines is intentionally concentrated in XRPL
Foundation documentation (xrpl.org concepts and references;
xls.xrpl.org rendered standards) and the rippled implementation
(release notes via api.github.com/repos/XRPLF/rippled/releases as
canonical release endpoint, Feature.cpp). Third-party explainers
describe how operators consume these mechanisms but cannot provide
more authoritative ground truth than the protocol-defining body
and the validator code that enforces consensus.

  - Compensating: Sources span multiple canonical artifact types within the XRPL Foundation surface: xrpl.org concept docs (amendments, consensus-protocol, peer-protocol, /resources/known-amendments registry), xrpl.org pseudo-transaction-type reference (EnableAmendment), xrpl.org ledger-entry-type references (Amendments, FeeSettings, NegativeUNL), xrpl.org JSON-RPC method references (feature, server_info), xls.xrpl.org rendered XLS-0020 (NFTs) + XLS-0033 (MPTs) standards, and api.github.com/repos/XRPLF/rippled/releases as canonical release endpoint (typed primary, not forum).
  - Compensating: Supplementary GitHub Search API issues (XRPLF/rippled amendment + majority + activation discussions) are typed as forum (developer-discussion supplementary); canonical claims still trace to xrpl.org / xls.xrpl.org / rippled-releases first-party sources only.
  - Compensating: Claims remain span-grounded and reviewed individually; per-claim findings continue to apply normally regardless of waiver. Specific scope discipline for this section: amendment-state ≠ feature-availability (an amendment can be voting / majority-not-yet-activated / activated / obsoleted — distinct states); validator quorum is 80% (NOT simple majority) and 2-week window (NOT instant); per-amendment voting (NOT pack voting); XRPL amendment governance is unique (NO token-vote, NO on-chain governance proposals, NO DAO mechanisms — validator-driven via UNL); specific amendments have distinct identities (XLS-20 ≠ XLS-33 ≠ XLS-39, do NOT lump as 'NFT amendments' or 'token amendments'); validator distribution is NOT a stable global property (UNL is operator-configured).
  - Compensating: Section synthesis must disclose the single-foundation source concentration explicitly, mirroring Sections 01-05 discipline. Amendment-system semantics are protocol-level by definition; this is a structural property of XRPL's governance, not a source-curation gap. The synthesis contribution thesis: XRPL token durability is amendment-state-dependent — the control plane must track amendment state per protocol concern (NFTs, MPTs, Clawback, TokenEscrow, DisallowIncoming) and per UNL configuration. Section 06's accepted claims will surface implicit dependencies in Sections 01-05's accepted claims (e.g., 'XLS-20 enabled NFTokens' cross-references Section 01's NFToken paradigm). The pack synthesis at freeze time must weave Section 06's amendment-state framework across all prior sections' mechanism claims.
  - Compensating: Section 07 (metadata and off-chain durability) will NOT inherit this waiver: IPFS / Arweave / HTTP / marketplace-indexer publishers contribute genuinely independent evidence for metadata-layer questions, where the global publisher-diversity floor remains the correct guard.

## Recommended next actions

1. Run `research-os query "<term>"` to navigate the indexed evidence base before drafting synthesis.
2. Draft `synthesis/cross-section-map.md` listing how accepted claims relate across sections (no new facts).
3. Draft `synthesis/decision-brief.md` for the pack's `decision` field, citing only accepted_claim_ids.
4. When done, suggest the user run `research-os index build --all` and `research-os cowork handoff` to refresh the runtime contract.

## Allowed write paths

- `handoffs/cowork-options.md`
- `handoffs/cowork-notes.md`
- `synthesis/cross-section-map.md`
- `synthesis/decision-brief.md`
- `synthesis/final-report.md`
- `synthesis/working-report.md`
- `sections/<id>/brief.md (final form, drawing from accepted claims only)`

## Useful index queries

- `research-os query "source_floor"` — surface gate failures grounded in audit JSON.
- `research-os query "source_cluster_monopoly"` — find publisher-monopoly findings and the claims they touch.
- `research-os query "candidate" --type claim` — list candidate claims that haven't been accepted yet.
- `research-os query "blocked" --type gate_result` — every gate that blocks synthesis.
- `research-os query "<term>"` — full-text search; every hit points to a canonical artifact path.

## Stop conditions

- Final synthesis artifacts written to `synthesis/`.
- Pack-level `max_runtime_minutes` (in `research.yaml`) is exhausted — surface partial state honestly.

## Final instruction

Do not introduce unsupported claims. Preserve unresolved contradictions. Do not widen scope beyond the source-tagged scope. Cite only `claim_id` and `source_id` values that already exist in this pack. The pack is the source of authority — this handoff is a layout step, not new truth.
