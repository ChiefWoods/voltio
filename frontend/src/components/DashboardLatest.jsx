import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import {
  solar_panel1,
  project_c,
  project_d,
} from "../assets";

const DashboardLatest = () => {
  const projects = [
    {
      projectName: "Project A",
      projectLocation: "Pahang, Malaysia",
      roi: "30",
      projectImage: solar_panel1,
      route: "/individualproject"
    },
    {
      projectName: "Project B",
      projectLocation: "Kedah, Malaysia",
      roi: "25",
      projectImage: project_c,
      route: "/dashboard"
    },
    {
      projectName: "Project C",
      projectLocation: "Johor, Malaysia",
      roi: "35",
      projectImage: project_d,
      route: "/dashboard"
    },
  ];

  return (
    <div className="max-w-[824px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] pb-[20px] bg-[#252525] mt-[60px] rounded-[10px] mb-[200px]">
      <h2 className="text-[30px] font-semibold mb-[34px] text-[#a1e5a1]">Invest in our latest project</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectLocation={project.projectLocation}
            roi={project.roi}
            projectImage={project.projectImage}
            route={project.route}
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
