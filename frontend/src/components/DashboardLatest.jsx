import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const DashboardLatest = () => {
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
    <div className="max-w-[824px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] pb-[20px] bg-[#252525] mt-[60px] rounded-[10px] mb-[200px]">
      <h2 className="text-[30px] font-semibold mb-[34px] text-[#a1e5a1]">Invest in our latest projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
        {latestProjects.map((project) => (
          <ProjectCard
            key={project.address}
            name={project.name}
            image={project.json.image}
            location={project.json.location}
            output={project.json.output}
            route="/dashboard"
          />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <a href='/allprojects' className="hover:scale-105 hover:text-white text-white font-bold p-[10px] rounded-[20px] flex">
          View More<TbPlayerTrackNextFilled className="text-white mt-[4px] ml-[10px]" />
        </a>
      </div>
    </div>
  );
};

export default DashboardLatest;
