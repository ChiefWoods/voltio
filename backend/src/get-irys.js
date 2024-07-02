import Irys from "@irys/sdk";
import wallet from "./wallet.js";

export function getIrys() {
  const irys = new Irys({
    network: "devnet",
    token: "solana",
    key: wallet.secretKey,
    config: { 
      providerUrl: "https://api.devnet.solana.com"
    }
  });
  
  return irys;
}
