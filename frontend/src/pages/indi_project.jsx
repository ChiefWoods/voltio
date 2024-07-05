import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackgroundImage, TopBar, BuyFraction } from "../components";
import {
	FaChevronCircleLeft,
	FaChevronCircleRight,
	FaBolt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const indi_project = () => {
	const { mintAddress } = useParams();
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [projects, setProjects] = useState([]);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentProject, setCurrentProject] = useState(null);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	function previousProject() {
		let newIndex;

		if (currentProjectIndex > 0) {
			newIndex = currentProjectIndex - 1;
		} else {
			newIndex = projects.length - 1;
		}

		setCurrentProjectIndex(newIndex);

		navigate(`/individualproject/${projects[newIndex].address}`, {
			replace: true,
		});
	}

	function nextProject() {
		let newIndex;

		if (currentProjectIndex < projects.length - 1) {
			newIndex = currentProjectIndex + 1;
		} else {
			newIndex = 0;
		}

		setCurrentProjectIndex(newIndex);

		navigate(`/individualproject/${projects[newIndex].address}`, {
			replace: true,
		});
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/nft/collection`
				).then((res) => res.json());

				setProjects(data);
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
		setCurrentProject(projects[currentProjectIndex]);
	}, [currentProjectIndex]);

	return (
		<BackgroundImage>
			<TopBar currentPage="project" />
			<div className="mt-[50px] mb-[100px]">
				{currentProject && (
					<>
						<div className="flex flex-row mb-10 items-center align-center place-content-center">
							<div className="flex items-center cursor-pointer">
								<button onClick={previousProject}>
									<FaChevronCircleLeft className="text-white text-[40px]" />
								</button>
							</div>
							<img
								className="mx-6 rounded-lg w-full max-h-[400px] aspect-video"
								src={currentProject.json.image}
								alt="Project"
							/>
							<div className="flex items-center cursor-pointer">
								<button onClick={nextProject}>
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
				<BuyFraction isOpen={isModalOpen} onClose={handleCloseModal} />
			</div>
		</BackgroundImage>
	);
};

export default indi_project;
