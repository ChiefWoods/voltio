import { PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { getExplorerLink } from "@solana-developers/helpers";
import { createCreateMetadataAccountV3Instruction } from "@metaplex-foundation/mpl-token-metadata";
import { mint } from "./get-mint.js";
import { connection } from "./connection.js";
import wallet from "./wallet.js";

const METAPLEX_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

const tokenMetadata = {
  name: "Voltio",
  symbol: "VLT",
  uri: "https://devnet.irys.xyz/cEYIi74VQQhqKLgNAV6r-PiyRo8sLfX1RiiQ_5kNMNg", // token icon png
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};

const metadataPDAAndBump = PublicKey.findProgramAddressSync(
  [
    Buffer.from("metadata"),
    METAPLEX_PROGRAM_ID.toBuffer(),
    mint.toBuffer(),
  ],
  METAPLEX_PROGRAM_ID
);

const metadataPDA = metadataPDAAndBump[0];

const createMetadataAccountInstruction =
  createCreateMetadataAccountV3Instruction(
    {
      metadata: metadataPDA,
      mint,
      mintAuthority: wallet.publicKey,
      payer: wallet.publicKey,
      updateAuthority: wallet.publicKey,
    },
    {
      createMetadataAccountArgsV3: {
        collectionDetails: null,
        data: tokenMetadata,
        isMutable: true,
      },
    }
  );

const tx = new Transaction().add(createMetadataAccountInstruction);

const txSig = await sendAndConfirmTransaction(
  connection,
  tx,
  [wallet]
);

console.log(`Token metadata updated: ${getExplorerLink("tx", txSig, process.env.CLUSTER)}`);
