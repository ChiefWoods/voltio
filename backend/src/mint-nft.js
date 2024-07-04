import { PublicKey } from "@solana/web3.js";
import { getExplorerLink } from "@solana-developers/helpers";
import fs from "fs";
import metaplex from "./metaplex.js"

export async function mintNft(metadata) {
  const { name, image, location, output } = JSON.parse(fs.readFileSync(metadata, "utf8"));

  const { uri } = await metaplex.nfts().uploadMetadata({
    name,
    image,
    location,
    output
  })

  console.log(`Metadata uploaded: ${uri}`);

  const { nft } = await metaplex.nfts().create(
    {
      uri,
      name,
      symbol: "VLT",
      sellerFeeBasisPoints: 0,
      collection: new PublicKey(process.env.VOLTIO_COLLECTION_SOLAR),
    },
    { commitment: "finalized" }
  );
  
  console.log(`NFT created: ${getExplorerLink("address", nft.address.toBase58(), process.env.CLUSTER)}`);  
}

// Pass NFT metadata JSON file as argument
await mintNft(process.argv[2]);