import { getExplorerLink } from "@solana-developers/helpers";
import metaplex from "./metaplex.js";
import { getNft } from "./get-nft.js";

export async function transferNft(sender, recipient, mintAddress) {
  const nft = await getNft(mintAddress);

  const tx = await metaplex.nfts().transfer({
    nftOrSft: nft,
    authority: sender,
    fromOwner: sender.publicKey,
    toOwner: recipient.publicKey,
  })

  console.log(`NFT transferred: ${getExplorerLink("tx", tx.response.signature, process.env.CLUSTER)}`);
}
