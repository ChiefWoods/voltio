import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { solar_panel1 } from "../assets";

const ProjectCard = ({
  projectImage = solar_panel1,
  projectName = "Project A",
  projectLocation = "Selangor, Malaysia",
  roi = "42",
  route = "/",
}) => {

  const handleViewProject = () => {
    window.location.href = route;
  };

  return (
    <div className="max-w-[250px] rounded-[30px] overflow-hidden shadow-lg bg-[#434343] py-[24px] px-[32px]">
      <img className="w-full rounded-md" src={projectImage} alt="Project" />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2 text-white font-medium">{projectName}</div>
        <p className="text-base font-thin flex"><FaLocationDot className="mr-[10px] mt-[6px] text-[#a1e5a1]" /> {projectLocation}</p>
        <p className="text-base font-thin flex mt-[6px]"><AiFillThunderbolt className="mr-[10px] mt-[6px] text-[#a1e5a1]" /> {roi}</p>
      </div>
      <div className="px-1">
        <button
          onClick={handleViewProject}
          className="bg-[#a1e5a1] hover:bg-[#7cdb7c] hover:scale-105 text-black font-bold py-2 px-4 rounded-[20px]"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
