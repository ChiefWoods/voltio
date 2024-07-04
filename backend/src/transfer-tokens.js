import { getOrCreateAssociatedTokenAccount, transfer, LAMPORTS_PER_SOL } from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";
import { connection } from "./connection.js";
import { mint } from "./get-mint.js";

export async function transferTokens(sender, recipient, amount) {
  if (await connection.getBalance(recipient.publicKey) < LAMPORTS_PER_SOL) {
    const airdropSig = await connection.requestAirdrop(recipient.publicKey, LAMPORTS_PER_SOL);
    await connection.confirmTransaction(airdropSig);
  }

  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, sender, mint, sender.publicKey);
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, recipient, mint, recipient.publicKey);

  const tx = await transfer(connection, sender, fromTokenAccount.address, toTokenAccount.address, sender.publicKey, amount);

  console.log(`Tokens transferred: ${getExplorerLink("tx", tx, process.env.CLUSTER)}`);
}
