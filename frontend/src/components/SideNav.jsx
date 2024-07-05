import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const SideNav = ({ onClose }) => {
	const links = [
		{
			name: "Profile",
			href: "/profile",
		},
		{
			name: "Dashboard",
			href: "/dashboard",
		},
		{
			name: "Projects",
			href: "/projects",
		},
		{
			name: "Marketplace",
			href: "/marketplace",
		},
		{
			name: "Sell Your Energy",
			href: "/energy",
		},
		{
			name: "Faucet",
			href: "/faucet",
		}
	];

	return (
		<div className="fixed top-0 right-0 h-full w-[300px] bg-[#252525] text-white shadow-lg z-50">
			<div className="mt-[80px] pl-[200px]">
				<button className="text-[40px]" onClick={onClose}>
					<IoCloseOutline />
				</button>
			</div>
			<nav className="flex flex-col space-y-[22px] text-[18px] pl-[50px] mt-[40px] text-transform: uppercase">
				{links.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="text-white font-thin hover:scale-105 hover:text-white"
					>
						{item.name}
					</a>
				))}
			</nav>
		</div>
	);
};

export default SideNav;
