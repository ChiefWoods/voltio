import { PublicKey } from "@solana/web3.js";
import metaplex from "./metaplex.js";

export async function getNftByOwner(ownerAddress) {
  const nfts = await metaplex.nfts().findAllByOwner({ owner: new PublicKey(ownerAddress) });

  const filtered = nfts.filter(nft => nft.collection?.address.toBase58() === process.env.VOLTIO_COLLECTION_SOLAR);

  return Promise.all(filtered.map(async (nft) => {
    return await metaplex.nfts().load({ metadata: nft })
  }));
}
