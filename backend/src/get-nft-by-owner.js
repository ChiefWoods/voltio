import metaplex from "./metaplex.js";

export async function getNftByOwner(publicKey) {
  const nfts = await metaplex.nfts().findAllByOwner({ owner: publicKey })

  return nfts.filter(nft => nft.collection?.address.toBase58() === process.env.VOLTIO_COLLECTION_SOLAR)
}
