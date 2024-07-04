import React from "react";
import {
  BackgroundImage,
  TopBar,
  ProjectCard,
} from "../components";
import {
  solar_panel1,
  project_c,
  project_d,
  project_e,
} from "../assets";

const AllProjects = () => {
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
      route: "/allprojects"
    },
    {
      projectName: "Project C",
      projectLocation: "Johor, Malaysia",
      roi: "35",
      projectImage: project_d,
      route: "/allprojects"
    },
    {
      projectName: "Project D",
      projectLocation: "Selangor, Malaysia",
      roi: "40",
      projectImage: project_c,
      route: "/allprojects"
    },
    {
      projectName: "Project E",
      projectLocation: "Selangor, Malaysia",
      roi: "28",
      projectImage: project_d,
      route: "/allprojects"
    },
    {
      projectName: "Project F",
      projectLocation: "Selangor, Malaysia",
      roi: "32",
      projectImage: project_e,
      route: "/allprojects"
    },
  ];

  return (
    <BackgroundImage>
      <TopBar currentPage="projects" />
      <div className="max-w-[824px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] pb-8 bg-[#252525] mt-[60px] rounded-[10px] mb-[200px]">
        <h2 className="text-[30px] font-semibold mb-[34px] text-[#a1e5a1]">
          All Projects
        </h2>
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
      </div>
    </BackgroundImage>
  );
};

export default AllProjects;
