import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import { PublicKey, Keypair } from "@solana/web3.js";
import { getExplorerLink } from "@solana-developers/helpers";
import { connection } from "./connection.js";
import { mint } from "./get-mint.js";

export async function transferTokens(senderSecretKey, recipientAddress, amount) {
  const sender = Keypair.fromSecretKey(new Uint8Array(senderSecretKey));

  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, sender, mint, sender.publicKey);
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, sender, mint, new PublicKey(recipientAddress));

  const tx = await transfer(connection, sender, fromTokenAccount.address, toTokenAccount.address, sender.publicKey, amount);

  console.log(`Tokens transferred: ${getExplorerLink("tx", tx, process.env.CLUSTER)}`);
}
