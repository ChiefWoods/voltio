import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import dotenv from "dotenv";

dotenv.config();

const wallet = await getKeypairFromEnvironment("VOLTIO_WALLET");

export default wallet;