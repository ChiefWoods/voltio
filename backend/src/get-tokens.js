import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { connection } from "./connection.js";
import wallet from "./wallet.js";
import { mint, ATOMIC_UNITS_PER_TOKEN } from "./get-mint.js";

export async function getTokens(ownerAddress) {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, wallet, mint, new PublicKey(ownerAddress));

  return Number(tokenAccount.amount) / ATOMIC_UNITS_PER_TOKEN;
}