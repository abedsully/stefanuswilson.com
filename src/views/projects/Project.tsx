import swift from "../../assets/swift.png";
import firebase from "../../assets/firebase.png";
import coreml from "../../assets/coreml.png";
import ishowshop_logo from "../../assets/ishowshop_logo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

import { Helmet } from "react-helmet";
import ProjectComponent from "../../components/project/ProjectComponent";
import Signature from "../../components/Signature";
import Navbar from "../../components/Navbar";

const projects = {
  projects: [
    {
      projectName: "IShowShop",
      projectLogo: ishowshop_logo,
      projectDescription:
        "a shopping app with features of Speech Recognition (SR-Based) searching functionality, Wallet TopUp, Favorite Products, and Discount Voucher",
      projectRole: "iOS Developer",
      projectDate: "June 2024",
      projectTech: [
        { icon: swift, tech: "Swift" },
        { icon: firebase, tech: "Firebase" },
        { icon: coreml, tech: "CoreML" },
      ],
      projectType: "Mobile",
      projectLink: "https://github.com/abedsully/IShowShop",
    },
  ],
};

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Stefanus Albert Wilson</title>
      </Helmet>

      <div className="flex flex-col xl:px-[18rem] gap-[2rem] text-gray-700 font-inter">
        <Navbar />

        <div className="flex justify-center">
          <Signature />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {projects.projects.map((project, index) => (
            <ProjectComponent
              key={index}
              projectName={project.projectName}
              projectLogo={project.projectLogo}
              projectDescription={project.projectDescription}
              projectRole={project.projectRole}
              projectDate={project.projectDate}
              projectTech={project.projectTech}
              projectType={project.projectType}
              projectLink={project.projectLink}
            />
          ))}
        </div>

        <h2 className="flex flex-col gap-[2rem] mt-[8rem]">
          <div className="flex gap-[2rem] justify-center">
            <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
              <FaLinkedin /> LinkedIn
            </div>
            <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
              <FaGithub /> Github
            </div>
            <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
              <GrMail /> Mail
            </div>
          </div>
          Copyright © {new Date().getFullYear()} - Stefanus Albert Wilson
        </h2>
      </div>
    </>
  );
};

export default Project;
