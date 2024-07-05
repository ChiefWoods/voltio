import { PublicKey } from "@solana/web3.js";
import metaplex from "./metaplex.js";

export async function getNftByOwner(ownerAddress) {
  const nfts = await metaplex.nfts().findAllByOwner({ owner: new PublicKey(ownerAddress) })

  return nfts.filter(nft => nft.collection?.address.toBase58() === process.env.VOLTIO_COLLECTION_SOLAR)
}
