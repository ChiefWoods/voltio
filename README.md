# Voltio

Now live on Devnet!

Frontend - https://voltio.vercel.app/  
Backend - https://voltio-backend.onrender.com

## Setup

### Prerequisites

Rename all `sample.env` files to `.env`.

1. Start validator with Metaplex program pre-deployed

```
solana-test-validator --bpf-program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s backend/src/mlp_token.so --reset
```

2. Create wallets

```
solana-keygen new -o voltio-wallet.json
solana airdrop 10 $(solana address -k voltio-wallet.json)
solana-keygen new -o voltio-test-1.json
solana airdrop 10 $(solana address -k voltio-test-1.json)
```

3. Add main wallet secret key to `backend/.env`

```
VOLTIO_WALLET=<SECRET_KEY_HERE>
```

4. In `backend`, create token

```
cd backend
npm run getMint
```

5. Update `backend/.env` to include token mint address, then set token metadata

```
VOLTIO_MINT=<MINT_ADDRESS_HERE>
```

```
npm run setTokenMetadata
```

5. Mint Voltio tokens to main wallet

```
npm run mintTo $(solana address) 5
```

6. Create NFT collection, then add collection address to `backend/.env`

```
npm run createCollection metadata/voltio-collection-metadata.json
```

```
VOLTIO_COLLECTION_SOLAR=<COLLECTION_ADDRESS_HERE>
```

7. Mint sample NFTs to main wallet

```
for i in {1..5}; do npm run mintNft metadata/solar-farm-$i-metadata.json; done
```

8. In `backend`, start Express server

```
npm run start
```

9. Open a new terminal in `frontend` and start development server

```
npm run dev
```

## Transferring Tokens

Make a POST HTTP request to `http://localhost:8000/transfer/tokens` with the following body:

```
{
  "senderSecretKey": <SECRET_KEY_IN_UINT8ARRAY>,
  "recipientAddress": <ADDRESS_TO_TRANSFER_TO>,
  "amount": <AMOUNT_OF_TOKENS>
}
```

## Transferring NFTs

Make a POST HTTP request to `http://localhost:8000/transfer/nft` with the following body:

```
{
  "senderSecretKey": <SECRET_KEY_IN_UINT8ARRAY>,
  "recipientAddress": <ADDRESS_TO_TRANSFER_TO>,
  "mintAddress": <MINT_ADDRESS_OF_NFT>
}
```
