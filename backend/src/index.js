import express, { Router } from "express";
import cors from "cors";
import { mint, mintToken, fetchTokens, transferTokens } from "./mint.js";
import { getAllNfts, getNftByAddress, getNftByOwner, transferNft } from "./nft.js";

const app = express();
app.use(express.json());
app.use(cors());

const mintRouter = Router();
const nftRouter = Router();

const port = process.env.PORT || 8000;

app
  // Token faucet
  .get("/api/faucet", async (req, res) => {
    try {
      const { address, amount } = req.params;

      await mintToken(address, amount);

      res.status(200).json({ message: `${amount} tokens airdropped to ${address} successfully.` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to airdrop tokens." });
    }
  });

mintRouter
  // Fetch tokens
  .get("/tokens", async (req, res) => {
    try {
      const { address } = req.params;

      const amount = await fetchTokens(address);

      res.status(200).json({
        message: `Tokens from ${address} fetched successfully.`,
        amount,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch owner tokens." });
    }
  })
  // Fetch mint
  .get("", async (req, res) => {
    try {
      res.status(200).json({
        message: "Mint fetched successfully.",
        mint
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch Voltio mint." });
    }
  })
  // Transfer tokens
  .post("/transfer", async (req, res) => {
    try {
      const { senderSecretKey, recipientAddress, amount } = req.body;

      await transferTokens(senderSecretKey, recipientAddress, amount);

      res.status(200).json({ message: `${amount} tokens transferred to ${recipientAddress} successfully.` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to transfer tokens." });
    }
  });

nftRouter
  // Get all NFTs
  .get("/collection", async (req, res) => {
    try {
      const nfts = await getAllNfts();

      res.status(200).json({
        message: "NFTs fetched successfully.",
        nfts
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch NFTs." });
    }
  })
  .get("", async (req, res) => {
    try {
      const { mintAddress, ownerAddress } = req.query;

      if (mintAddress && !ownerAddress) {
        // Get NFT by mint address
        const nft = await getNftByAddress(mintAddress);

        res.status(200).json({
          message: "NFT fetched successfully.",
          nft
        });  
      } else if (ownerAddress && !mintAddress) {
        // Get NFTs by owner address
        const nfts = await getNftByOwner(ownerAddress);

        res.status(200).json({
          message: "NFTs fetched successfully.",
          nfts
        });  
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch NFT." });
    }
  })
  // Transfer NFT
  .post("/transfer", async (req, res) => {
    try {
      const { senderSecretKey, recipientAddress, mintAddress } = req.body;

      await transferNft(senderSecretKey, recipientAddress, mintAddress);

      res.status(200).json({ message: `NFT transferred to ${recipientAddress} successfully.` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to transfer NFT." });
    }
  })

app.use("/api/mint", mintRouter);
app.use("/api/nft", nftRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
