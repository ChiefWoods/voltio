import React, { useState, useEffect } from "react";
import { BackgroundImage, TopBar, ProjectCard } from "../components";

const AllProjects = () => {
	const [latestProjects, setLatestProjects] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/nft/collection`
				).then((res) => res.json());

				setLatestProjects(data);
			} catch (err) {
				console.log(err);
			}
		}

		fetchData();
	}, []);

	return (
		<BackgroundImage>
			<TopBar currentPage="projects" />
			<div className="max-w-[824px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] pb-8 bg-[#252525] mt-[60px] rounded-[10px] mb-[200px]">
				<h2 className="text-[30px] font-semibold mb-[34px] text-[#a1e5a1]">
					All Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
					{latestProjects.map((project) => (
						<ProjectCard
							key={project.address}
							name={project.name}
							image={project.json.image}
							location={project.json.location}
							output={project.json.output}
							route={"/allprojects"}
						/>
					))}
				</div>
			</div>
		</BackgroundImage>
	);
};

export default AllProjects;
