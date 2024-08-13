import { generateSigner, createGenericFile, createGenericFileFromBrowserFile, createSignerFromKeypair } from "@metaplex-foundation/umi";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { create, createCollection, fetchAsset, fetchAssetsByCollection, fetchAssetsByOwner, fetchCollection, transferV1 } from "@metaplex-foundation/mpl-core";
import { getExplorerLink } from "@solana-developers/helpers";
import { umi } from "./umi.js";
import { uploadMetadata } from "./util.js";

let collection;

if (process.env.VOLTIO_COLLECTION_SOLAR) {
  collection = await fetchCollection(umi, process.env.VOLTIO_COLLECTION_SOLAR);
} else {
  // Creates collection using Metaplex Core
  const collectionSigner = generateSigner(umi);
  const genericFile = createGenericFile(fs.readFileSync("assets/solar_farm_1.jpg"), "voltio_collection_solar.jpg", { contentType: "image/jpg" });
  const uri = await uploadMetadata(genericFile, JSON.parse(fs.readFileSync("metadata/voltio-collection.json")));

  const { signature } = await createCollection(umi, {
    collection: collectionSigner,
    name: "Voltio Solar",
    uri,
  }).sendAndConfirm(umi);

  console.log(`Created collection: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);

  collection = await fetchCollection(umi, collectionSigner.publicKey);
}

console.log(`Collection: ${getExplorerLink("address", collection.publicKey, umi.rpc.getCluster())}`);

export async function createNft(name, image, metadata) {
  const asset = generateSigner(umi);
  const genericFile = createGenericFileFromBrowserFile(image);
  const uri = await uploadMetadata(genericFile, metadata);

  const { signature } = await create(umi, {
    asset,
    collection,
    name,
    uri,
  }).sendAndConfirm(umi);

  console.log(`Created NFT: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);
}

export async function getAllNfts() {
  return await fetchAssetsByCollection(umi, collection.publicKey);
}

export async function getNftByAddress(address) {
  return await fetchAsset(umi, address);
}

export async function getNftByOwner(owner) {
  return await fetchAssetsByOwner(umi, owner);
}

export async function transferNft(senderSecretKey, newOwner, asset) {
  const senderKeypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(JSON.parse(senderSecretKey)));

  const { signature } = await transferV1(umi, {
    asset,
    newOwner,
    collection,
    payer: createSignerFromKeypair(senderKeypair),
  }).sendAndConfirm(umi);

  console.log(`Transferred NFT: ${getExplorerLink("tx", base58.deserialize(signature)[0], umi.rpc.getCluster())}`);
}
