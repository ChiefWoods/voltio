import { PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";
import { connection } from "./connection.js";
import wallet from "./wallet.js";
import { ATOMIC_UNITS_PER_TOKEN, mint } from "./get-mint.js";

export async function mintTokens(recipientAddress, amount) {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, wallet, mint, new PublicKey(recipientAddress));

  const txSig = await mintTo(connection, wallet, mint, tokenAccount.address, wallet, amount * ATOMIC_UNITS_PER_TOKEN);
  console.log(`Tokens minted: ${getExplorerLink("tx", txSig, process.env.CLUSTER)}`);
}
