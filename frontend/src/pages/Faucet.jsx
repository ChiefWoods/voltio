import React from 'react';
import {
  BackgroundImage,
  TopBar,
} from '../components';

import { useWallet } from '@solana/wallet-adapter-react';


const Faucet = () => {
	const { publicKey } = useWallet();
	const [amount, setAmount] = useState('');

	const requestAirdrop = async () => {
		try {
			const response = await fetch('YOUR_API_ENDPOINT', {
				method: 'POST',
				headers: {
			  		'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					recipientAddress: publicKey,
					amount: Number(amount),
				}),
			});
	
			const data = await response.json();
			console.log('Request successful:', data);
		} catch (error) {
		  	console.error('Error requesting airdrop:', error);
		}
	};

	const handleChange = (e) => {
		setAmount(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		requestAirdrop();
	}

	return (
	<BackgroundImage>
		<TopBar currentPage='Voltio Faucet'/>
		{
			!publicKey
				?
					<h1>Connect to a wallet pls :&#40;</h1>
				:
					<form onSubmit={handleSubmit}>
						<div className="bg-[#1e1e1e] p-10 rounded-[50px] mt-10">
							<form>
								<div className="mb-4">
									<input
									type="text"
									className="w-full px-4 py-2 text-black rounded"
									placeholder="Number"
									onChange={handleChange}
									/>
								</div>
								<div>
									<button
										type="submit"
										className="w-full px-4 py-2 text-white bg-blue-500 rounded"
										>
										Request
									</button>
								</div>
							</form>
						</div>
					</form>
		}
		
	  </BackgroundImage>

	);
  }


export default Faucet;