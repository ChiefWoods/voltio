import React, { useState, useEffect } from "react";
import { voltio_logo_white_png, token_voltio_png } from "../assets";
import { SideNav } from ".";
import { MdTableRows } from "react-icons/md";
import {
	WalletMultiButton,
	WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const TopBar = ({ currentPage = "CURRENT PAGE" }) => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [tokenAmount, setTokenAmount] = useState(0);
	const { publicKey } = useWallet();

	const toggleSideNav = () => {
		setIsSideNavOpen(!isSideNavOpen);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/tokens/${publicKey.toBase58()}`
				)
					.then((res) => res.json())
					.then((data) => setTokenAmount(data.amount));
			} catch (err) {
				console.log(err);
			}
		}

		if (publicKey) {
			fetchData();
		} else {
			setTokenAmount(0);
		}
	}, [publicKey]);

	return (
		<WalletModalProvider>
			<div className="w-full text-white flex justify-between items-center bg-transparent px-[60px] pt-[70px] pb-[10px]">
				<div className="flex items-center">
					<a href="/dashboard">
						<img
							src={voltio_logo_white_png}
							alt="Voltio Logo"
							className="h-[60px] mr-4"
						/>
					</a>
					<span className="text-xl font-light ml-[30px] text-transform: uppercase">
						{currentPage}
					</span>
				</div>
				<div className="flex items-center gap-x-5">
					<WalletMultiButton className="custom-wallet-button" />
					<span className="mr-[60px] flex items-center">
						<img
							src={token_voltio_png}
							className="w-[28px] mt-[2px] mr-[10px]"
						/>
						{tokenAmount}
					</span>
					<button className="text-[40px]" onClick={toggleSideNav}>
						<MdTableRows />
					</button>
				</div>
			</div>
			{isSideNavOpen && <SideNav onClose={toggleSideNav} />}
		</WalletModalProvider>
	);
};

export default TopBar;
