import { getExplorerLink } from "@solana-developers/helpers";
import fs from "fs";
import metaplex from "./metaplex.js"

export async function createCollection(metadata) {
  const file = JSON.parse(fs.readFileSync(metadata, "utf8"));

  const { uri } = await metaplex.nfts().uploadMetadata(file)

  console.log(`Metadata uploaded: ${uri}`);

  const { nft } = await metaplex.nfts().create(
    {
      uri,
      name: "Voltio Solar Collection",
      symbol: "VLT",
      sellerFeeBasisPoints: 0,
      isCollection: true,
    },
    { commitment: "finalized" }
  );
  
  console.log(`Collection created: ${getExplorerLink("address", nft.address.toBase58(), process.env.CLUSTER)}`);  
}

// Pass collection metadata JSON file as argument
await createCollection(process.argv[2]);