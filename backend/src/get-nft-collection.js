import metaplex from "./metaplex.js";

export async function getNftCollection() {
  const nfts = await metaplex.nfts().findAllByCreator({ creator: metaplex.identity().publicKey })

  const filtered = nfts.filter(nft => nft.collection?.address.toBase58() === process.env.VOLTIO_COLLECTION_SOLAR);

  return Promise.all(filtered.map(async (nft) => {
    return await metaplex.nfts().load({ metadata: nft })
  }));
}
