import express, { Router } from "express";
import { getNftByMint } from "./get-nft-by-mint.js";
import { getNftByOwner } from "./get-nft-by-owner.js";
import { getNftCollection } from "./get-nft-collection.js";
import { transferTokens } from "./transfer-tokens.js";
import { transferNft } from "./transfer-nft.js";
import { ATOMIC_UNITS_PER_TOKEN } from "./get-mint.js";

const app = express();
app.use(express.json());

const nftRouter = Router();
const transferRouter = Router();

const port = process.env.PORT || 8000;

nftRouter
  // Get NFT by mint address
  .get("/mint/:mintAddress", async (req, res) => {
    try {
      const { mintAddress } = req.params;

      const nfts = await getNftByMint(mintAddress);

      res.status(200).json(nfts);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve NFTs." });
    }
  })
  // Get NFT by owner address
  .get("/owner/:ownerAddress", async (req, res) => {
    try {
      const { ownerAddress } = req.params;

      const nfts = await getNftByOwner(ownerAddress);

      res.status(200).json(nfts);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve NFTs." });
    }
  })
  // Get NFT collection
  .get("/collection", async (req, res) => {
    try {
      const nfts = await getNftCollection();

      res.status(200).json(nfts);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve NFTs." });
    }
  });

transferRouter
  // Transfer tokens
  .post("/tokens", async (req, res) => {
    try {
      const { senderSecretKey, recipientAddress, amount } = req.body;

      await transferTokens(senderSecretKey, recipientAddress, amount);

      res.status(200).json({ message: `${amount / ATOMIC_UNITS_PER_TOKEN} tokens transferred to ${recipientAddress} successfully.` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to transfer tokens." });
    }
  })
  // Transfer NFT
  .post("/nft", async (req, res) => {
    try {
      const { senderSecretKey, recipientAddress, mintAddress } = req.body;

      await transferNft(senderSecretKey, recipientAddress, mintAddress);

      res.status(200).json({ message: `NFT of mint ${mintAddress} transferred to ${recipientAddress} successfully.` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to transfer NFT." });
    }
  });

app.use("/nft", nftRouter);
app.use("/transfer", transferRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
