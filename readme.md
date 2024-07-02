fn main() {
// Step 1: Create a fractional token
let fractional_mint = create_fractional_token();

// Step 2: Mint fractional tokens (e.g., 1000 tokens)
let token_account = mint_fractional_tokens(fractional_mint, 1000);

// Step 3: Distribute fractional tokens to multiple accounts
let to_accounts = vec![
(Pubkey::from_str("Account1PublicKey").unwrap(), 500),
(Pubkey::from_str("Account2PublicKey").unwrap(), 300),
(Pubkey::from_str("Account3PublicKey").unwrap(), 200),
];

distribute_fractional_tokens(fractional_mint, token_account, to_accounts);
}
