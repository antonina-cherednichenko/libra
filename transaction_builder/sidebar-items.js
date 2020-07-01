initSidebarItems({"fn":[["encode_add_currency_to_account_script","Add the currency identified by the type `currency` to the sending accounts. Aborts if the account already holds a balance fo `currency` type."],["encode_add_recovery_rotation_capability_script","Add the `KeyRotationCapability` for `to_recover_account` to the `RecoveryAddress` resource under `recovery_address`. Aborts if `to_recovery_account` and `to_recovery_address belong to different VASPs, if `recovery_address`does not have a`RecoveryAddress`resource, or if`to_recover_account`has already extracted its`KeyRotationCapability`."],["encode_add_validator_script","Add `new_validator` to the pending validator set. Fails if the `new_validator` address is already in the validator set or does not have a `ValidatorConfig` resource stored at the address."],["encode_block_prologue_script",""],["encode_burn_script","Permanently destroy the `Token`s stored in the oldest burn request under the `Preburn` resource. This will only succeed if `account` has a `MintCapability<Token>`, a `Preburn<Token>` resource exists under `preburn_address`, and there is a pending burn request. sliding_nonce is a unique nonce for operation, see sliding_nonce.move for details"],["encode_burn_txn_fees_script","Burn transaction fees that have been collected in the given `currency` and relinquish to the association. The currency must be non-synthetic."],["encode_cancel_burn_script","Cancel the oldest burn request from `preburn_address` and return the funds. Fails if the sender does not have a published `BurnCapability<Token>`."],["encode_create_child_vasp_account_script","Create a `ChildVASP` account for sender `parent_vasp` at `child_address` with a balance of `child_initial_balance` in `CoinType` and an initial authentication_key `auth_key_prefix | child_address`. If `add_all_currencies` is true, the child address will have a zero balance in all available currencies in the system. This account will a child of the transaction sender, which must be a ParentVASP."],["encode_create_designated_dealer_script","Create designated dealer account at 'new_account_address' and 'auth_key_prefix' for nonsynthetic CoinType. Create dealer and preburn resource."],["encode_create_parent_vasp_account_script","Create an account with the ParentVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an Association account."],["encode_create_recovery_address_script","Extract the `KeyRotationCapability` for `recovery_account` and publish it in a `RecoveryAddress` resource under `recovery_account`. Aborts if `recovery_account` has delegated its `KeyRotationCapability`, already has a `RecoveryAddress` resource, or is not a VASP."],["encode_create_testing_account_script","Create an account with the ParentVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an Association account. The `human_name`, `base_url`, and compliance_public_key` fields of the ParentVASP are filled in with dummy information."],["encode_create_validator_account_script","Create a validator account at `new_validator_address` with `auth_key_prefix`."],["encode_create_validator_operator_account_script","Create a validator operator account at `new_validator_address` with `auth_key_prefix`."],["encode_freeze_account_script","Freeze account `address`. Initiator must be authorized. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_mint_lbr_script","Mint `amount_lbr` LBR from the sending account's constituent coins and deposits the resulting LBR into the sending account."],["encode_modify_publishing_option_script",""],["encode_peer_to_peer_with_metadata_script","Transfer `amount` coins to `recipient_address` with (optional) associated metadata `metadata` and (optional) `signature` on the metadata, amount, and sender address. The `metadata` and `signature` parameters are only required if `amount` >= 1_000_000 micro LBR and the sender and recipient of the funds are two distinct VASPs. Fails if there is no account at the recipient address or if the sender's balance is lower than `amount`."],["encode_preburn_script","Preburn `amount` `Token`s from `account`. This will only succeed if `account` already has a published `Preburn<Token>` resource."],["encode_publish_shared_ed25519_public_key_script","(1) Rotate the authentication key of the sender to `public_key` (2) Publish a resource containing a 32-byte ed25519 public key and the rotation capability of the sender under the sender's address. Aborts if the sender already has a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_reconfigure_script","Update configs of all the validators and emit reconfiguration event."],["encode_remove_validator_script","Adding `to_remove` to the set of pending validator removals. Fails if the `to_remove` address is already in the validator set or already in the pending removals. Callable by Validator's operator."],["encode_rotate_authentication_key_script","Rotate the sender's authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key."],["encode_rotate_authentication_key_with_nonce_script","Rotate the sender's authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key. This script also takes `sliding_nonce`, as a unique nonce for this operation. See sliding_nonce.move for details."],["encode_rotate_authentication_key_with_recovery_address_script","Rotate the authentication key of `to_recover` to `new_key`. Can be invoked by either `recovery_address` or `to_recover`. Aborts if `recovery_address` does not have the `KeyRotationCapability` for `to_recover`."],["encode_rotate_base_url_script","Rotate `vasp_root_addr`'s base URL to `new_url`."],["encode_rotate_compliance_public_key_script","Encode a program that rotates `vasp_root_addr`'s compliance public key to `new_key`."],["encode_rotate_shared_ed25519_public_key_script","(1) Rotate the public key stored in `account`'s `SharedEd25519PublicKey` resource to `new_public_key` (2) Rotate the authentication key using the capability stored in `account`'s `SharedEd25519PublicKey` to a new value derived from `new_public_key` Aborts if `account` does not have a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_set_validator_config_script","Set validator's config."],["encode_set_validator_operator_script","Set validator's operator"],["encode_stdlib_script","Encode `stdlib_script` with arguments `args`. Note: this is not type-safe; the individual type-safe wrappers below should be used when possible."],["encode_stdlib_upgrade_transaction","Update WriteSet"],["encode_testnet_mint_script","Send `amount` coins of type `Token` to `payee`."],["encode_tiered_mint_script","Mint 'mint_amount' to 'designated_dealer_address' for 'tier_index' tier. Max valid tier index is 3 since there are max 4 tiers per DD. Sender should be treasury compliance account and receiver authorized DD. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_transfer_with_metadata_script","Transfer `amount` coins to `recipient_address` with (optional) associated metadata `metadata` and (optional) `signature` on the metadata, amount, and sender address. The `metadata` and `signature` parameters are only required if `amount` >= 1_000_000 micro LBR and the sender and recipient of the funds are two distinct VASPs. Fails if there is no account at the recipient address or if the sender's balance is lower than `amount`."],["encode_unfreeze_account_script","Unfreeze account `address`. Initiator must be authorized. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["encode_unmint_lbr_script","Unmints `amount_lbr` LBR from the sending account into the constituent coins and deposits the resulting coins into the sending account.\""],["encode_update_exchange_rate_script","Update the on-chain exchange rate to LBR for the given `currency` to be given by `new_exchange_rate_denominator/new_exchange_rate_numerator`."],["encode_update_libra_version_script",""],["encode_update_minting_ability_script","Allows--true--or disallows--false--minting of `currency` based upon `allow_minting`."],["encode_update_travel_rule_limit_script","Update the travel rule limit to `new_micro_lbr_limit`."],["encode_update_unhosted_wallet_limits_script","Optionally update global thresholds of max balance, total flow (inflow + outflow) (microLBR) for `LimitsDefinition` bound accounts. If a new threshold is 0, that particular config does not get updated. `sliding_nonce` is a unique nonce for operation, see sliding_nonce.move for details."],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."]]});