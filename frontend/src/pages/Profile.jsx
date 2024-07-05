import React, { useState, useEffect } from "react";
import { BackgroundImage, TopBar } from "../components";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { profile, solar_panel1, token_voltio_png } from "../assets";

const Profile = () => {
	const [showNftList, setShowNftList] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [nftsOwned, setNftsOwned] = useState([]);

	const walletAddress = "E7snGTGKAX5VcUhpdwDqcfBPLoLV7MAxpcpwNCaga4Vq";

	const handleToggleChange = () => {
		setAnimate(true);
		setShowNftList(!showNftList);
		setTimeout(() => setAnimate(false), 300); // match this duration with the CSS transition duration
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/nft/owner/${walletAddress}`
				).then((res) => res.json());

				setNftsOwned(data);
			} catch (err) {
				console.log(err);
			}
		}

		fetchData();
	}, []);

	return (
		<BackgroundImage>
			<TopBar currentPage="profile" />
			<div className="w-[60%] py-10">
				<div className="flex flex-row items-center">
					<img src={profile} className="w-[250px] rounded-full" />
					<div className="ml-8 text-[40px]">
						<p>23fna83nmdp</p>
						<div className="flex flex-row items-center">
							<img src={token_voltio_png} className="w-[60px]" />
							<p className="ml-2">288</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div
						className={`transition-opacity duration-300 ${
							animate ? "opacity-0" : "opacity-100"
						}`}
					>
						{showNftList ? (
							<div className="bg-dg w-[90%] mx-auto p-12 mt-10 rounded-2xl">
								<div>
									<p className="font-semibold text-[46px]">NFT(s) List</p>
									<div className="mt-8">
										<table className="w-[100%]">
											<thead>
												<tr className="border-b-2">
													<th className="text-white">Image</th>
													<th className="text-white">Project Name</th>
													<th className="text-white">Fraction Holding</th>
													<th className="text-white">Date Acquire</th>
													<th className="text-white">Sell</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="flex justify-center items-center py-4">
														<img src={solar_panel1} className="w-[250px]" />
													</td>
													<td className="text-center text-white font-semibold py-4">
														Project D
													</td>
													<td className="text-center text-white font-semibold py-4">
														982
													</td>
													<td className="text-center text-white font-semibold py-4">
														2/6/2024
													</td>
													<td className="text-center text-white font-semibold py-4">
														<button className="bg-[#AF3BE0] rounded-3xl px-4 py-2 hover:scale-110">
															Sell
														</button>
													</td>
												</tr>

												<tr>
													<td className="flex justify-center items-center py-4">
														<img src={solar_panel1} className="w-[250px]" />
													</td>
													<td className="text-center text-white font-semibold py-4">
														Project D
													</td>
													<td className="text-center text-white font-semibold py-4">
														982
													</td>
													<td className="text-center text-white font-semibold py-4">
														2/6/2024
													</td>
													<td className="text-center text-white font-semibold py-4">
														<button className="bg-[#AF3BE0] rounded-3xl px-4 py-2 hover:scale-110">
															Sell
														</button>
													</td>
												</tr>

												<tr>
													<td className="flex justify-center items-center py-4">
														<img src={solar_panel1} className="w-[250px]" />
													</td>
													<td className="text-center text-white font-semibold py-4">
														Project D
													</td>
													<td className="text-center text-white font-semibold py-4">
														982
													</td>
													<td className="text-center text-white font-semibold py-4">
														2/6/2024
													</td>
													<td className="text-center text-white font-semibold py-4">
														<button className="bg-[#AF3BE0] rounded-3xl px-4 py-2 hover:scale-110">
															Sell
														</button>
													</td>
												</tr>

												<tr>
													<td className="flex justify-center items-center py-4">
														<img src={solar_panel1} className="w-[250px]" />
													</td>
													<td className="text-center text-white font-semibold py-4">
														Project D
													</td>
													<td className="text-center text-white font-semibold py-4">
														982
													</td>
													<td className="text-center text-white font-semibold py-4">
														2/6/2024
													</td>
													<td className="text-center text-white font-semibold py-4">
														<button className="bg-[#AF3BE0] rounded-3xl px-4 py-2 hover:scale-110">
															Sell
														</button>
													</td>
												</tr>
												{/* Additional rows as needed */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						) : (
							<div className="bg-dg w-[90%] mx-auto p-12 mt-10 rounded-2xl">
								<div>
									<p className="font-semibold text-[46px]">NFT(s)</p>
									<div className="grid grid-cols-3 gap-4 mt-4">
										{nftsOwned.map((nft) => {
											return (
												<div
													key={nft.mint.address}
													className="bg-[#434343] flex flex-col px-6 py-8 rounded-3xl"
												>
													<div className="flex items-center justify-center mb-4">
														<img
															src={nft.json.image}
															className="w-[250px] h-[150px]"
														/>
													</div>
													<div>
														<p className="font-semibold text-[28px]">
															{nft.name}
														</p>
														<p>Fraction Holding:</p>
														<p>Date Acquired:</p>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="list_mode top-[10px] right-[100px] absolute">
						<input
							className="list_mode_input"
							type="checkbox"
							id="listmode-toggle"
							onChange={handleToggleChange}
						/>
						<label className="list_mode_label" htmlFor="listmode-toggle">
							<IoGrid className="text-[20px] icon" />
							<FaList className="text-[20px] icon" />
						</label>
					</div>
				</div>
			</div>
		</BackgroundImage>
	);
};

export default Profile;
