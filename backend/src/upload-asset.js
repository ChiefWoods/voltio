import { getIrys } from "./get-irys.js";
import fs from "fs";

export async function uploadAsset(filepath) {
  const irys = getIrys();

  const { size } = await fs.promises.stat(filepath);

  const price = await irys.getPrice(size);
  await irys.fund(price);

  const { id } = filepath.endsWith(".json")
    ? await irys.uploadFile(filepath, {
      tags: [{
        name: "Content-Type",
        value: "application/json",
      }]
    })
    : await irys.uploadFile(filepath);

  console.log(`File size: ${size} bytes`);
  console.log(`Upload cost: ${irys.utils.fromAtomic(price)} SOL`);
  console.log(`File uploaded to https://gateway.irys.xyz/${id}`);
}

// Pass filepath as argument
await uploadAsset(process.argv[2]);