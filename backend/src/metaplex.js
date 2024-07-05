import { Metaplex, keypairIdentity, irysStorage } from "@metaplex-foundation/js";
import { connection } from "./connection.js";
import wallet from "./wallet.js";

const metaplex = Metaplex
  .make(connection)
  .use(keypairIdentity(wallet))
  .use(irysStorage({
    address: "https://devnet.irys.xyz",
    providerUrl: "https://api.devnet.solana.com",
    timeout: 60000,
  }));

export default metaplex;