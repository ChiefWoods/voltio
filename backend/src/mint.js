import { generateSigner, some, publicKey, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { createV1, fetchDigitalAsset, TokenStandard, mintV1, transferV1 } from "@metaplex-foundation/mpl-token-metadata";
import { fetchToken, findAssociatedTokenPda } from "@metaplex-foundation/mpl-toolbox";
import { getExplorerLink } from "@solana-developers/helpers";
import { umi } from "./umi.js";
import { uploadMetadata } from "./util.js";

const ATOMIC_UNITS_PER_TOKEN = Math.pow(10, 2);
const SPL_TOKEN_2022_PROGRAM_ID = publicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');

export let mint;

if (process.env.VOLTIO_MINT) {
  mint = await fetchDigitalAsset(umi, process.env.VOLTIO_MINT);
} else {
  // Creates mint using Metaplex Token Metadata
  const assetSigner = generateSigner(umi);

  const { signature } = await createV1(umi, {
    mint: assetSigner,
    name: "Voltio",
    uri: await uploadMetadata("assets/token_voltio.png", "token_voltio.png", "metadata/voltio-token.json", "image/png"),
    sellerFeeBasisPoints: 0,
    decimals: some(2),
    tokenStandard: TokenStandard.Fungible,
    splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
  }).sendAndConfirm(umi);

  console.log(`Created mint: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);

  mint = await fetchDigitalAsset(umi, assetSigner.publicKey);
}

console.log(`Mint: ${getExplorerLink("address", mint.publicKey, umi.rpc.getCluster())}`);

export async function mintToken(tokenOwner, amount) {
  const token = findAssociatedTokenPda(umi, {
    mint,
    owner: umi.identity.publicKey,
    tokenProgramId: SPL_TOKEN_2022_PROGRAM_ID,
  });

  const { signature } = await mintV1(umi, {
    mint,
    token,
    tokenOwner,
    tokenStandard: TokenStandard.Fungible,
    splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
    amount: amount * ATOMIC_UNITS_PER_TOKEN,
    payer: umi.payer,
  }).sendAndConfirm(umi);

  console.log(`Minted tokens: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);
}

export async function fetchTokens(owner) {
  const token = findAssociatedTokenPda(umi, {
    mint,
    owner,
    tokenProgramId: SPL_TOKEN_2022_PROGRAM_ID,
  });

  const tokenAccount = await fetchToken(umi, token);

  return Number(tokenAccount.amount) / ATOMIC_UNITS_PER_TOKEN;
}

export async function transferTokens(tokenOwnerSecretKey, destinationOwner, amount) {
  const tokenOwnerKeypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(JSON.parse(tokenOwnerSecretKey)));
  const tokenOwner = tokenOwnerKeypair.publicKey;

  const token = findAssociatedTokenPda(umi, {
    mint,
    owner: tokenOwner,
    tokenProgramId: SPL_TOKEN_2022_PROGRAM_ID,
  });

  const destinationToken = findAssociatedTokenPda(umi, {
    mint,
    owner: destinationOwner,
    tokenProgramId: SPL_TOKEN_2022_PROGRAM_ID,
  });

  const { signature } = await transferV1(umi, {
    mint,
    authority: umi.payer,
    token,
    destinationToken,
    tokenOwner,
    destinationOwner,
    tokenStandard: TokenStandard.Fungible,
    splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
    amount: Math.floor(amount * ATOMIC_UNITS_PER_TOKEN),
    payer: createSignerFromKeypair(tokenOwnerKeypair),
  }).sendAndConfirm(umi);

  console.log(`Transferred tokens: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);
}
