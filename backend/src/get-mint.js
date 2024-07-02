import { PublicKey } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import { getExplorerLink } from "@solana-developers/helpers";
import { connection } from "./connection.js";
import wallet from "./wallet.js";

export const ATOMIC_UNITS_PER_TOKEN = Math.pow(10, 2);

export let mint;

try {
  mint = new PublicKey(process.env.VOLTIO_MINT)
} catch {
  mint = await createMint(connection, wallet, wallet.publicKey, null, 2);
}

console.log(`Mint: ${getExplorerLink("address", mint.toBase58(), process.env.CLUSTER)}`);