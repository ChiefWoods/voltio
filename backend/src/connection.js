import { Connection, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

export const connection = process.env.CLUSTER === "localnet"
  ? new Connection("http://localhost:8899", "confirmed")
  : process.env.CLUSTER === "devnet"
    ? new Connection(clusterApiUrl("devnet"), "confirmed")
    : null;
