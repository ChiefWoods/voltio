import { Keypair, PublicKey } from "@solana/web3.js";
import { getExplorerLink } from "@solana-developers/helpers";
import metaplex from "./metaplex.js";
import { getNftByMint } from "./get-nft-by-mint.js";

export async function transferNft(senderSecretKey, recipientAddress, mintAddress) {
  const sender = Keypair.fromSecretKey(new Uint8Array(senderSecretKey));
  const nft = await getNftByMint(mintAddress);

  const tx = await metaplex.nfts().transfer({
    nftOrSft: nft,
    authority: sender,
    fromOwner: sender.publicKey,
    toOwner: new PublicKey(recipientAddress)
  })

  console.log(`NFT transferred: ${getExplorerLink("tx", tx.response.signature, process.env.CLUSTER)}`);
}
