import { getKeypairFromFile } from "@solana-developers/helpers";
import dotenv from "dotenv";

dotenv.config();

const wallet = await getKeypairFromFile("../voltio-wallet.json");

export default wallet;