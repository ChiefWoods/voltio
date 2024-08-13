import { keypairIdentity } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { mplCore } from "@metaplex-foundation/mpl-core";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { mplToolbox } from "@metaplex-foundation/mpl-toolbox";
import { Connection } from "@solana/web3.js";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.CLUSTER === "localnet"
  ? "http://localhost:8899"
  : `https://solana-devnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

export const connection = new Connection(endpoint, "finalized");

export const umi = createUmi(connection);

const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync("../voltio-wallet.json"))));

umi.use(keypairIdentity(keypair))
  .use(irysUploader({
    address: "https://devnet.irys.xyz",
    payer: keypair,
    provider: "https://api.devnet.solana.com",
    timeout: 60000,
  }))
  .use(mplTokenMetadata())
  .use(mplCore())
  .use(mplToolbox());
