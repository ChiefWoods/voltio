import { umi } from "./umi.js";

export async function uploadMetadata(genericFile, metadata) {
  const [image] = await umi.uploader.upload([genericFile]);

  return await umi.uploader.uploadJson({
    ...metadata,
    image,
  });
}