import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackgroundImage, TopBar, ProjectCard } from "../components";
import {
	FaChevronCircleLeft,
	FaChevronCircleRight,
	FaBolt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Projects = () => {
	const { mintAddress } = useParams();
	const navigate = useNavigate();
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

	if (mintAddress) {
		const [isModalOpen, setIsModalOpen] = useState(false);
		const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
		const [currentProject, setCurrentProject] = useState(null);

		function handleOpenModal() {
			setIsModalOpen(true);
		};

		function handleCloseModal() {
			setIsModalOpen(false);
		};

		function showPreviousProject() {
			const newIndex =
				currentProjectIndex > 0 ? currentProjectIndex - 1 : latestProjects.length - 1;

			setCurrentProjectIndex(newIndex);

			navigate(`/projects/${latestProjects[newIndex].address}`, {
				replace: true,
			});
		}

		function showNextProject() {
			const newIndex =
				currentProjectIndex < latestProjects.length - 1 ? currentProjectIndex + 1 : 0;

			setCurrentProjectIndex(newIndex);

			navigate(`/projects/${latestProjects[newIndex].address}`, {
				replace: true,
			});
		}

		useEffect(() => {
			async function fetchData() {
				try {
					const data = await fetch(
						`${import.meta.env.VITE_BACKEND_URL}/nft/collection`
					).then((res) => res.json());

					setLatestProjects(data);
					setCurrentProject(
						data.find((project) => project.address === mintAddress)
					);
				} catch (err) {
					console.log(err);
				}
			}

			fetchData();
		}, []);

		useEffect(() => {
			setCurrentProject(latestProjects[currentProjectIndex]);
		}, [currentProjectIndex]);

		return (
			<BackgroundImage>
				<TopBar currentPage="project" />
				<div className="mt-[50px] mb-[100px]">
					{currentProject && (
						<>
							<div className="flex flex-row mb-10 items-center align-center place-content-center">
								<div className="flex items-center cursor-pointer">
									<button onClick={showPreviousProject}>
										<FaChevronCircleLeft className="text-white text-[40px]" />
									</button>
								</div>
								<img
									className="mx-6 rounded-lg w-full max-h-[400px] aspect-video"
									src={currentProject.json.image}
									alt="Project"
								/>
								<div className="flex items-center cursor-pointer">
									<button onClick={showNextProject}>
										<FaChevronCircleRight className="text-white text-[40px]" />
									</button>
								</div>
							</div>
							<div>
								<div className="flex flex-row justify-between">
									<div className="bg-dg w-[70%] p-6 rounded-2xl">
										<p className="text-[40px] font-semibold">
											{currentProject.name}
										</p>
										<div className="flex flex-row ml-2 mt-2">
											<div className="flex flex-row text-white text-[22px] items-center mr-6">
												<IoLocationSharp className="mr-[2px]" />
												<p>{currentProject.json.location}</p>
											</div>
											<div className="flex flex-row text-white text-[22px] items-center">
												<FaBolt className="mr-[2px]" />
												<p>{currentProject.json.output} MW/h</p>
											</div>
										</div>
										<p className="text-[18px] mt-4 ml-2">
											{currentProject.json.description}
										</p>
										<button
											className="bg-[#A1E5A1] px-4 py-2 rounded-3xl font-semibold text-[20px] mt-6 hover:scale-105 ml-2"
											onClick={handleOpenModal}
										>
											Buy Fraction
										</button>
									</div>

									<div className="bg-dg w-[20%] p-6 rounded-2xl">
										<div className="mb-4">
											<p className="text-[#A1E5A1] font-semibold">
												Available Fractions
											</p>
											<p className="text-3xl font-semibold ml-2">
												{Math.ceil(Math.random() * 1000)}
											</p>
										</div>
										<div className="mb-4">
											<p className="text-[#A1E5A1] font-semibold">Built In</p>
											<p className="text-3xl font-semibold ml-2">
												{currentProject.json.yearBuilt}
											</p>
										</div>
										<div className="mb-4">
											<p className="text-[#A1E5A1] font-semibold">
												Annual Project Yield
											</p>
											<p className="text-3xl font-semibold ml-2">
												{currentProject.json.annualYield} %
											</p>
										</div>
									</div>
								</div>
								<div className="bg-dg rounded-2xl p-6 mt-8 mb-8">
									<table className="w-[100%]">
										<thead>
											<tr className="border-b-2">
												<th className="text-[#A1E5A1] text-[20px]">
													Total Capacity
												</th>
												<th className="text-[#A1E5A1] text-[20px]">
													Active Capacity
												</th>
												<th className="text-[#A1E5A1] text-[20px]">
													Pipeline Capacity
												</th>
												<th className="text-[#A1E5A1] text-[20px]">
													Project Location
												</th>
												<th className="text-[#A1E5A1] text-[20px]">
													Developed By
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="text-center text-white p-4 text-[18px] font-semibold">
													{currentProject.json.output} MW/h
												</td>
												<td className="text-center text-white p-4 text-[18px] font-semibold">
													{currentProject.json.activeCapacity} MW/h
												</td>
												<td className="text-center text-white p-4 text-[18px] font-semibold">
													{currentProject.json.pipelineCapacity} MW/h
												</td>
												<td className="text-center text-white p-4 text-[18px] font-semibold">
													{currentProject.json.location}
												</td>
												<td className="text-center text-white p-4 text-[18px] font-semibold">
													{currentProject.json.developedBy}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</>
					)}
					{isModalOpen && <BuyFraction onClose={handleCloseModal} />}
				</div>
			</BackgroundImage>
		);
	} else {
		// useEffect(() => {
		// 	async function fetchData() {
		// 		try {
		// 			const data = await fetch(
		// 				`${import.meta.env.VITE_BACKEND_URL}/nft/collection`
		// 			).then((res) => res.json());

		// 			setLatestProjects(data);
		// 		} catch (err) {
		// 			console.log(err);
		// 		}
		// 	}

		// 	fetchData();
		// }, []);

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
								route={`/projects/${project.address}`}
							/>
						))}
					</div>
				</div>
			</BackgroundImage>
		);
	}
};

export default Projects;
