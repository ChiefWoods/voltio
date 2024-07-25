import React, { useState, useRef } from "react";
import { BackgroundImage, TopBar } from "../components";

import { useWallet } from "@solana/wallet-adapter-react";

const Faucet = () => {
	const formRef = useRef();
	const { publicKey } = useWallet();
	const [tokenAmount, setTokenAmount] = useState("");
	const [airdropResult, setAirdropResult] = useState("");

	async function airdropToRecipient(e, amount) {
		e.preventDefault();

		if (publicKey) {
			await fetch(`${import.meta.env.VITE_BACKEND_URL}/airdrop`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					recipientAddress: publicKey.toBase58(),
					amount,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					setAirdropResult(`${amount} tokens airdropped successfully.`);
					formRef.current.reset();
				})
				.catch((err) => {
					console.log(err)
					setAirdropResult(err.message);
				});
		} else {
			console.log("Wallet not connected");
		}
	}

	return (
		<BackgroundImage>
			<TopBar currentPage="Voltio Faucet" />
			{!publicKey ? (
				<h1 className="text-white">Connect to Wallet to use Faucet</h1>
			) : (
				<div className="bg-[#1e1e1e] p-10 rounded-[50px] mt-10 w-full max-w-[350px]">
					<form
						ref={formRef}
						className="flex flex-col gap-y-4"
						onSubmit={(e) => airdropToRecipient(e, tokenAmount)}
					>
						<h2 className="text-white text-2xl text-center">
							Voltio Token Faucet
						</h2>
						<div>
							<input
								type="text"
								className="w-full px-4 py-2 text-black rounded"
								placeholder="Number"
								value={tokenAmount}
								onChange={(e) => setTokenAmount(e.target.value)}
							/>
						</div>
						<div>
							<button
								type="submit"
								className="w-full px-4 py-2 text-white bg-blue-500 rounded"
							>
								Airdrop
							</button>
						</div>
						<p>{airdropResult}</p>
					</form>
				</div>
			)}
		</BackgroundImage>
	);
};

export default Faucet;
