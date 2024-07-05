import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { solar_panel1 } from "../assets";

const ProjectCard = ({
	name,
	image = solar_panel1,
	location = "",
	output = "",
	route = "/",
}) => {
	const handleViewProject = () => {
		window.location.href = route;
	};

	return (
		<div className="max-w-[250px] rounded-[24px] overflow-hidden shadow-lg bg-[#434343] py-[20px] px-[28px]">
			<img
				className="w-[210px] h-[100px] object-cover rounded-lg"
				src={image}
				alt="Project"
			/>
			<div className="px-1 py-4">
				<div className="text-xl mb-2 text-white font-medium">{name}</div>
				<p className="ml-[4px] text-base font-thin flex text-[14px]">
					<FaLocationDot className="mr-[10px] mt-[6px] text-[#a1e5a1]" />{" "}
					{location}
				</p>
				<p className="ml-[4px] text-base font-thin flex text-[14px] mt-[2px]">
					<AiFillThunderbolt className="mr-[10px] mt-[6px] text-[#a1e5a1]" />
					{output}
				</p>
			</div>
			<div className="px-1">
				<button
					onClick={handleViewProject}
					className="bg-[#a1e5a1] hover:bg-[#7cdb7c] hover:scale-105 text-black font-bold py-2 px-4 rounded-[18px] text-[14px]"
				>
					View Project
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
