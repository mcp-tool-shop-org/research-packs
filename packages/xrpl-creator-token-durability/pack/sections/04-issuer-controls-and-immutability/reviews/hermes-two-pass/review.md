# Adversarial Review: 04-issuer-controls-and-immutability

**Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
**Reviewed at:** 2026-05-09T19:45:45.608Z
**Candidate claims:** 42
**Findings:** 60 (block: 1, warn: 14, info: 45)
**LLM findings rejected (ungrounded):** 0

> Adversarial review judges research integrity. It does not synthesize, rewrite source truth, or erase extraction history. Decisions below are review truth — claims.jsonl is unchanged.

## Effective decisions

- [NEEDS-SOURCE-REPAIR]: 10
- [NEEDS-SCOPE-REPAIR]: 5
- [ACCEPTED]: 27

## Findings

### [WARN] overgeneralized_claim (fnd_9252c68db89b)

The claim 'Any account can freeze tokens in the XRPL' overgeneralizes by implying all accounts have this ability, when it is limited to issuers of issued tokens.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_1`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Clarify that only issuers of non-XRP tokens can freeze them, not all XRPL accounts.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** Issuers can freeze the tokens they issue in the XRP Ledger. This does not apply to XRP, which is the native asset of the XRP Ledger, not an issued token.

### [WARN] overgeneralized_claim (fnd_bfe431145b92)

The claim that the MPTokenIssuanceSet transaction can set, check, and reset MP token values is overgeneralized based on the evidence excerpt.

- **Claim IDs:** `clm_92f5c74d9bda_ollama_intern_6`, `clm_92f5c74d9bda_ollama_intern_7`, `clm_92f5c74d9bda_ollama_intern_8`
- **Source IDs:** `src_92f5c74d9bda`
- **Required action:** Clarify which specific actions (set, check, reset) the MPTokenIssuanceSet transaction supports based on the provided evidence.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Example MPTokenIssuanceSet JSON MPTokenIssuanceSet Fields MPTokenIssuanceSet Flags Error Cases See Also

### [INFO] valid_but_low_value (fnd_8a8c5a81de97)

Claim clm_d0882a19791f_ollama_intern_1 restates the basic definition of NFToken but does not add significant synthesis value.

- **Claim IDs:** `clm_d0882a19791f_ollama_intern_1`
- **Source IDs:** `src_d0882a19791f`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high

### [WARN] overgeneralized_claim (fnd_138408fee968)

The claim overgeneralizes the scope of the AccountRoot account type to include all its features and controls, beyond what the evidence excerpt specifically addresses.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_17`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Clarify that the claim only applies to the specific feature of individual approval for token holding, not all AccountRoot features and controls.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** evidence_excerpt: lsfRequireAuth 0x00040000 262144 asfRequireAuth This account must individually approve other users for those users to hold this account's tokens.

### [INFO] definition_drift (fnd_4e064328d29e)

The term 'Clawback' is used differently across the two claims, with clm_12ac7f4c315b_ollama_intern_30 implying it relates to AMM changes while clm_12ac7f4c315b_ollama_intern_31 specifically mentions adding an AMMClawback transaction.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_30`, `clm_12ac7f4c315b_ollama_intern_31`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Clarify that 'Clawback' refers to the addition of specific AMMClawback functionality across related transactions and tests.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** claim clm_12ac7f4c315b_ollama_intern_30 implies Clawback is a feature added to AMMCreate, while claim clm_12ac7f4c315b_ollama_intern_31 mentions adding an AMMClawback transaction.

### [INFO] valid_but_low_value (fnd_bc6169a55caa)

The claim clm_12ac7f4c315b_ollama_intern_15 is grounded but restates contextual trivia that does not contribute to synthesis.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_15`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** claim asserts pull request renaming closes PR based on GitHub docs

### [INFO] valid_but_low_value (fnd_1c5b6e81a567)

The claim clm_12ac7f4c315b_ollama_intern_16 restates that the pull request is for XLS-65 implementation without synthesis.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_16`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** claim cites PR and linked discussion as evidence

### [INFO] valid_but_low_value (fnd_87e01bc782dd)

The claim clm_12ac7f4c315b_ollama_intern_18 restates the type of change introduced without synthesis.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_18`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** (unspecified)
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** claim cites tests category from PR description as evidence

### [WARN] overgeneralized_claim (fnd_22bff6c27b36)

The claims generalize Ripple Ledger changes, but the evidence excerpts focus on specific refactoring of functions for AMMClawback.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_32`, `clm_12ac7f4c315b_ollama_intern_33`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Clarify that these changes are specific to the implementation of AMMClawback and may not represent broader Ripple Ledger changes.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** asserts: The function `withdraw` is refactored to work for AMMClawback. asserts: The function `equalWithdrawTokens` is made public to be called in AMMClawback.

### [BLOCK] scope_widening (fnd_029527b67a0d)

The claim generalizes the behavior of `to_string` to all inputs when it only applies to a specific context in the XRPL codebase.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_23`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Please provide evidence that this behavior is consistent across all contexts where `to_string` is used, or limit the claim to apply only to the specific context mentioned in the scope.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** high
- **Evidence:** The function `to_string`, but only returns the first 8 characters.

### [INFO] missing_not_constraint (fnd_908378d08307)

Claim clm_517d67dc1224_ollama_intern_4 has no 'not' constraint recorded.

- **Claim IDs:** `clm_517d67dc1224_ollama_intern_4`
- **Source IDs:** `src_517d67dc1224`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFTokenMint transactions require the NonFungibleTokensV1_1 amendment.

### [INFO] missing_not_constraint (fnd_281d207d5e5e)

Claim clm_517d67dc1224_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_517d67dc1224_ollama_intern_7`
- **Source IDs:** `src_517d67dc1224`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The tfTransferable flag enables the transfer of a minted NFToken to others.

### [INFO] missing_not_constraint (fnd_bff89107a6c0)

Claim clm_517d67dc1224_ollama_intern_10 has no 'not' constraint recorded.

- **Claim IDs:** `clm_517d67dc1224_ollama_intern_10`
- **Source IDs:** `src_517d67dc1224`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFTokenMint transactions can embed additional information.

### [INFO] missing_not_constraint (fnd_064b8fa2cfdb)

Claim clm_517d67dc1224_ollama_intern_11 has no 'not' constraint recorded.

- **Claim IDs:** `clm_517d67dc1224_ollama_intern_11`
- **Source IDs:** `src_517d67dc1224`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFTokenMint transactions can be issued on behalf of another account.

### [INFO] missing_not_constraint (fnd_2df64f6ff007)

Claim clm_ff9fbb4f8527_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_ff9fbb4f8527_ollama_intern_3`
- **Source IDs:** `src_ff9fbb4f8527`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFTokenModify transactions require the DynamicNFT amendment to be loaded.

### [INFO] missing_not_constraint (fnd_37b86d7100f6)

Claim clm_097142ab08d3_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_097142ab08d3_ollama_intern_5`
- **Source IDs:** `src_097142ab08d3`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Accounts you own should have a domain you own in the Domain field.

### [INFO] missing_not_constraint (fnd_fde35a5ad2e4)

Claim clm_319355bfb19d_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_1`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Any account can freeze tokens in the XRPL.

### [INFO] missing_not_constraint (fnd_32876a61591f)

Claim clm_319355bfb19d_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_2`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Issuers can freeze the tokens they issue in the XRPL.

### [INFO] missing_not_constraint (fnd_4e96ebf55602)

Claim clm_319355bfb19d_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_3`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: XRP cannot be frozen in the XRPL.

### [INFO] missing_not_constraint (fnd_4e6a6a5904cb)

Claim clm_319355bfb19d_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_6`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An address cannot enable Individual Freeze if it has enabled No Freeze.

### [INFO] missing_not_constraint (fnd_d3387a08ba77)

Claim clm_319355bfb19d_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_319355bfb19d_ollama_intern_8`
- **Source IDs:** `src_319355bfb19d`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Addresses cannot issue XRP, thus Global Freeze does not apply to XRP.

### [INFO] missing_not_constraint (fnd_de5a3edc8383)

Claim clm_e98d1069b3a8_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e98d1069b3a8_ollama_intern_1`
- **Source IDs:** `src_e98d1069b3a8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The TrustSet transaction enables setting trusted and untrusted addresses.

### [INFO] missing_not_constraint (fnd_b2300eb91983)

Claim clm_e98d1069b3a8_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e98d1069b3a8_ollama_intern_2`
- **Source IDs:** `src_e98d1069b3a8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The TrustSet transaction uses the LimitAmount field to define trust lines.

### [INFO] missing_not_constraint (fnd_13992826a643)

Claim clm_e98d1069b3a8_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_e98d1069b3a8_ollama_intern_5`
- **Source IDs:** `src_e98d1069b3a8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Transactions of the TrustSet type support additional values in the Flags field.

### [INFO] missing_not_constraint (fnd_89bf777c2d79)

Claim clm_4727592a5328_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4727592a5328_ollama_intern_3`
- **Source IDs:** `src_4727592a5328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The amount to claw back must not be zero.

### [INFO] missing_not_constraint (fnd_42e3978245f5)

Claim clm_4727592a5328_ollama_intern_5 has no 'not' constraint recorded.

- **Claim IDs:** `clm_4727592a5328_ollama_intern_5`
- **Source IDs:** `src_4727592a5328`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Clawback transactions require the Clawback amendment to be enabled.

### [INFO] missing_not_constraint (fnd_adf60eb6d3e0)

Claim clm_92f5c74d9bda_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_92f5c74d9bda_ollama_intern_6`
- **Source IDs:** `src_92f5c74d9bda`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The MPTokenIssuanceSet transaction can set MP token values.

### [INFO] missing_not_constraint (fnd_2304223e8384)

Claim clm_92f5c74d9bda_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_92f5c74d9bda_ollama_intern_7`
- **Source IDs:** `src_92f5c74d9bda`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The MPTokenIssuanceSet transaction can check MP token values.

### [INFO] missing_not_constraint (fnd_69916498cb69)

Claim clm_92f5c74d9bda_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_92f5c74d9bda_ollama_intern_8`
- **Source IDs:** `src_92f5c74d9bda`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The MPTokenIssuanceSet transaction can reset MP token values.

### [INFO] missing_not_constraint (fnd_8e0a8d3ab792)

Claim clm_90368c8bfc17_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_90368c8bfc17_ollama_intern_2`
- **Source IDs:** `src_90368c8bfc17`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: MPTokenIssuance entries require the MPTokensV1 amendment.

### [INFO] missing_not_constraint (fnd_00bfcc995d5e)

Claim clm_90368c8bfc17_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_90368c8bfc17_ollama_intern_9`
- **Source IDs:** `src_90368c8bfc17`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: TransferFee values are between 0 and 50,000 inclusive.

### [INFO] missing_not_constraint (fnd_2db3cb9209b8)

Claim clm_d0882a19791f_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d0882a19791f_ollama_intern_1`
- **Source IDs:** `src_d0882a19791f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFToken represents non-fungible tokens within XRP Ledger.

### [INFO] missing_not_constraint (fnd_dfa96cde07db)

Claim clm_d0882a19791f_ollama_intern_2 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d0882a19791f_ollama_intern_2`
- **Source IDs:** `src_d0882a19791f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFTokenID uniquely identifies an NFToken with specific sections.

### [INFO] missing_not_constraint (fnd_26202f50e45f)

Claim clm_d0882a19791f_ollama_intern_3 has no 'not' constraint recorded.

- **Claim IDs:** `clm_d0882a19791f_ollama_intern_3`
- **Source IDs:** `src_d0882a19791f`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: NFToken flags are immutable and cannot be changed after creation.

### [INFO] missing_not_constraint (fnd_592a3e7710e3)

Claim clm_9505395adfe8_ollama_intern_1 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_1`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot is a special type of account used in AddressBook accounts.

### [INFO] missing_not_constraint (fnd_125471cc52cd)

Claim clm_9505395adfe8_ollama_intern_6 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_6`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot contains metadata like version and sequence ID.

### [INFO] missing_not_constraint (fnd_3c3f6dcd93ff)

Claim clm_9505395adfe8_ollama_intern_7 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_7`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot can have a RegularKey for signing transactions.

### [INFO] missing_not_constraint (fnd_ac676eacf6d0)

Claim clm_9505395adfe8_ollama_intern_8 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_8`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot has a Sequence number for tracking transaction order.

### [INFO] missing_not_constraint (fnd_5851deae7f79)

Claim clm_9505395adfe8_ollama_intern_9 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_9`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot can have a WalletLocator as an arbitrary 256-bit value.

### [INFO] missing_not_constraint (fnd_a8d6d521f476)

Claim clm_9505395adfe8_ollama_intern_17 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_17`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: An AccountRoot requires individual approval for other users to hold its tokens.

### [INFO] missing_not_constraint (fnd_44de89736267)

Claim clm_9505395adfe8_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_9505395adfe8_ollama_intern_18`
- **Source IDs:** `src_9505395adfe8`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Incoming payments to an AccountRoot require a Destination Tag.

### [WARN] source_quality_problem (fnd_b560ca82455c)

Claim clm_12ac7f4c315b_ollama_intern_3 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_3`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_28c90615bc2d)

Claim clm_12ac7f4c315b_ollama_intern_15 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_15`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: Renaming the branch after opening a pull request closes the pull request.

### [WARN] source_quality_problem (fnd_5c95352c3dc5)

Claim clm_12ac7f4c315b_ollama_intern_15 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_15`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_925bd05a5558)

Claim clm_12ac7f4c315b_ollama_intern_16 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_16`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The pull request is for the implementation of XLS-65 Single Asset Vault.

### [WARN] source_quality_problem (fnd_701b95ba0817)

Claim clm_12ac7f4c315b_ollama_intern_16 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_16`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_f1049ed9c3f9)

Claim clm_12ac7f4c315b_ollama_intern_18 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_18`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The pull request introduces a new feature, specifically tests.

### [WARN] source_quality_problem (fnd_730fea883995)

Claim clm_12ac7f4c315b_ollama_intern_18 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_18`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_9fb39966a3df)

Claim clm_12ac7f4c315b_ollama_intern_23 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_23`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The function `to_string` returns only the first 8 characters of its input.

### [WARN] source_quality_problem (fnd_4a9485510279)

Claim clm_12ac7f4c315b_ollama_intern_23 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_23`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_7d6d4fd63ff1)

Claim clm_12ac7f4c315b_ollama_intern_27 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_27`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: `SField` definitions now detect both code and name collisions using asserts.

### [WARN] source_quality_problem (fnd_26ca15361372)

Claim clm_12ac7f4c315b_ollama_intern_27 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_27`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_12ed34f83070)

Claim clm_12ac7f4c315b_ollama_intern_30 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_30`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: This PR includes changes to AMMCreate allowing clawback-enabled tokens.

### [WARN] source_quality_problem (fnd_1a65a126a804)

Claim clm_12ac7f4c315b_ollama_intern_30 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_30`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_dcfe7ab83527)

Claim clm_12ac7f4c315b_ollama_intern_31 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_31`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: AMMClawback transaction is added mainly to AMMClawback and AMMClawback_test.

### [WARN] source_quality_problem (fnd_7030b5eb3d8a)

Claim clm_12ac7f4c315b_ollama_intern_31 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_31`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_ca5f83ebe4ad)

Claim clm_12ac7f4c315b_ollama_intern_32 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_32`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The function `withdraw` is refactored to work for AMMClawback.

### [WARN] source_quality_problem (fnd_bcc9f837eddf)

Claim clm_12ac7f4c315b_ollama_intern_32 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_32`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

### [INFO] missing_not_constraint (fnd_de9be13f5f3c)

Claim clm_12ac7f4c315b_ollama_intern_33 has no 'not' constraint recorded.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_33`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Consider adding a not-constraint to defend against overgeneralization downstream.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** low
- **Evidence:** Asserts: The function `equalWithdrawTokens` is made public to be called in AMMClawback.

### [WARN] source_quality_problem (fnd_2261a7a3579b)

Claim clm_12ac7f4c315b_ollama_intern_33 carries confidence=high but every cited source is forum/unknown quality.

- **Claim IDs:** `clm_12ac7f4c315b_ollama_intern_33`
- **Source IDs:** `src_12ac7f4c315b`
- **Required action:** Lower confidence or add a higher-quality corroborating source.
- **Reviewer:** ollama-intern (multi_pass(ollama_intern_adversarial_review_paged + ollama_intern_adversarial_review_paged_narrow_critic + heuristic_field_and_grounding_checks))
- **Confidence:** medium
- **Evidence:** Source types: forum

## Claim review decisions

### [ACCEPTED] `clm_517d67dc1224_ollama_intern_4`

Only info-level findings; accepted.

Cites findings: `fnd_908378d08307`.

### [ACCEPTED] `clm_517d67dc1224_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_281d207d5e5e`.

### [ACCEPTED] `clm_517d67dc1224_ollama_intern_10`

Only info-level findings; accepted.

Cites findings: `fnd_bff89107a6c0`.

### [ACCEPTED] `clm_517d67dc1224_ollama_intern_11`

Only info-level findings; accepted.

Cites findings: `fnd_064b8fa2cfdb`.

### [ACCEPTED] `clm_ff9fbb4f8527_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_2df64f6ff007`.

### [ACCEPTED] `clm_097142ab08d3_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_37b86d7100f6`.

### [ACCEPTED] `clm_097142ab08d3_ollama_intern_20`

No findings recorded for this claim by the current reviewer.

### [NEEDS-SCOPE-REPAIR] `clm_319355bfb19d_ollama_intern_1`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_9252c68db89b`, `fnd_fde35a5ad2e4`.

### [ACCEPTED] `clm_319355bfb19d_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_32876a61591f`.

### [ACCEPTED] `clm_319355bfb19d_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_4e96ebf55602`.

### [ACCEPTED] `clm_319355bfb19d_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_4e6a6a5904cb`.

### [ACCEPTED] `clm_319355bfb19d_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_d3387a08ba77`.

### [ACCEPTED] `clm_e98d1069b3a8_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_de5a3edc8383`.

### [ACCEPTED] `clm_e98d1069b3a8_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_b2300eb91983`.

### [ACCEPTED] `clm_e98d1069b3a8_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_13992826a643`.

### [ACCEPTED] `clm_4727592a5328_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_89bf777c2d79`.

### [ACCEPTED] `clm_4727592a5328_ollama_intern_5`

Only info-level findings; accepted.

Cites findings: `fnd_42e3978245f5`.

### [NEEDS-SCOPE-REPAIR] `clm_92f5c74d9bda_ollama_intern_6`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_bfe431145b92`, `fnd_adf60eb6d3e0`.

### [NEEDS-SCOPE-REPAIR] `clm_92f5c74d9bda_ollama_intern_7`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_bfe431145b92`, `fnd_2304223e8384`.

### [NEEDS-SCOPE-REPAIR] `clm_92f5c74d9bda_ollama_intern_8`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_bfe431145b92`, `fnd_69916498cb69`.

### [ACCEPTED] `clm_90368c8bfc17_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_8e0a8d3ab792`.

### [ACCEPTED] `clm_90368c8bfc17_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_00bfcc995d5e`.

### [ACCEPTED] `clm_d0882a19791f_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_8a8c5a81de97`, `fnd_2db3cb9209b8`.

### [ACCEPTED] `clm_d0882a19791f_ollama_intern_2`

Only info-level findings; accepted.

Cites findings: `fnd_dfa96cde07db`.

### [ACCEPTED] `clm_d0882a19791f_ollama_intern_3`

Only info-level findings; accepted.

Cites findings: `fnd_26202f50e45f`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_1`

Only info-level findings; accepted.

Cites findings: `fnd_592a3e7710e3`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_6`

Only info-level findings; accepted.

Cites findings: `fnd_125471cc52cd`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_7`

Only info-level findings; accepted.

Cites findings: `fnd_3c3f6dcd93ff`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_8`

Only info-level findings; accepted.

Cites findings: `fnd_ac676eacf6d0`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_9`

Only info-level findings; accepted.

Cites findings: `fnd_5851deae7f79`.

### [NEEDS-SCOPE-REPAIR] `clm_9505395adfe8_ollama_intern_17`

Findings: overgeneralized_claim (warn).

Cites findings: `fnd_138408fee968`, `fnd_a8d6d521f476`.

### [ACCEPTED] `clm_9505395adfe8_ollama_intern_18`

Only info-level findings; accepted.

Cites findings: `fnd_44de89736267`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_3`

Findings: source_quality_problem (warn).

Cites findings: `fnd_b560ca82455c`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_15`

Findings: source_quality_problem (warn).

Cites findings: `fnd_bc6169a55caa`, `fnd_28c90615bc2d`, `fnd_5c95352c3dc5`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_16`

Findings: source_quality_problem (warn).

Cites findings: `fnd_1c5b6e81a567`, `fnd_925bd05a5558`, `fnd_701b95ba0817`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_18`

Findings: source_quality_problem (warn).

Cites findings: `fnd_87e01bc782dd`, `fnd_f1049ed9c3f9`, `fnd_730fea883995`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_23`

Findings: scope_widening (block); source_quality_problem (warn).

Cites findings: `fnd_029527b67a0d`, `fnd_9fb39966a3df`, `fnd_4a9485510279`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_27`

Findings: source_quality_problem (warn).

Cites findings: `fnd_7d6d4fd63ff1`, `fnd_26ca15361372`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_30`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4e064328d29e`, `fnd_12ed34f83070`, `fnd_1a65a126a804`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_31`

Findings: source_quality_problem (warn).

Cites findings: `fnd_4e064328d29e`, `fnd_dcfe7ab83527`, `fnd_7030b5eb3d8a`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_32`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_22bff6c27b36`, `fnd_ca5f83ebe4ad`, `fnd_bcc9f837eddf`.

### [NEEDS-SOURCE-REPAIR] `clm_12ac7f4c315b_ollama_intern_33`

Findings: overgeneralized_claim (warn); source_quality_problem (warn).

Cites findings: `fnd_22bff6c27b36`, `fnd_de9be13f5f3c`, `fnd_2261a7a3579b`.
