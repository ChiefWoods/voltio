### Prerequisites

1. Set connection to localhost

	```
	solana config set -u localhost
	```

2. Rename all `sample.env` files to `.env`.

### Setting it up locally...

1. Install all packages with `npm` in both `backend` and `frontend`

2. In root folder, start validator with Metaplex program pre-deployed

	```
	solana-test-validator --bpf-program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s backend/src/mlp_token.so --reset
	```

3. In a new terminal, create a main and test wallet

	```
	solana-keygen new -o voltio-wallet.json
	solana airdrop 10 $(solana address -k voltio-wallet.json)
	solana-keygen new -o voltio-test-1.json
	solana airdrop 10 $(solana address -k voltio-test-1.json)
	```

4. Add the secret key in `voltio-wallet.json` to `backend/.env`

	```
	VOLTIO_WALLET=<SECRET_KEY_HERE>
	```

5. In `backend/`, create token

	```
	npm run getMint
	```

6. Head to the `Solana Explorer link`, and update `backend/.env` to include token mint address, then set token metadata

	```
	VOLTIO_MINT=<MINT_ADDRESS_HERE>
	```

	```
	npm run setTokenMetadata
	```

7. Create NFT collection, then add collection address to `backend/.env` from the Solana Explorer link

	```
	npm run createCollection metadata/voltio-collection-metadata.json
	```

	```
	VOLTIO_COLLECTION_SOLAR=<COLLECTION_ADDRESS_HERE>
	```

8. Mint sample NFTs to main wallet

	```
	for i in {1..5}; do npm run mintNft metadata/solar-farm-$i-metadata.json; done
	```

9. In `backend/`, start Express server for backend

	```
	npm run start
	```

10. In new terminal, navigate to `frontend/` and start Vite for frontend

	```
	npm run dev
	```

### HTTP Routes

#### Transferring Tokens

- Make a POST HTTP request to `/transfer/tokens` with the following body:

	```
	{
	"senderSecretKey": <SECRET_KEY_IN_UINT8ARRAY>,
	"recipientAddress": <ADDRESS_TO_TRANSFER_TO>,
	"amount": <AMOUNT_OF_TOKENS>
	}
	```

#### Transferring NFTs

- Make a POST HTTP request to `/transfer/nft` with the following body:

	```
	{
	"senderSecretKey": <SECRET_KEY_IN_UINT8ARRAY>,
	"recipientAddress": <ADDRESS_TO_TRANSFER_TO>,
	"mintAddress": <MINT_ADDRESS_OF_NFT>
	}
	```

#### Airdrop Tokens

- Make a POST HTTP request to `/airdrop` with the following body:

	```
	{
	"recipientAddress": <ADDRESS_TO_AIRDROP_TO>,
	"amount": <AMOUNT_OF_TOKENS>
	}
	```
