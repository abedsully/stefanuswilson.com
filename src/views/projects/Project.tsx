import swift from "../../assets/swift.png";
import firebase from "../../assets/firebase.png";
import coreml from "../../assets/coreml.png";
import ishowshop_logo from "../../assets/ishowshop_logo.png";
import intellectia_logo from "../../assets/intellectia_logo.png";
import bincang_bareng_logo from "../../assets/logo_bincang_bareng.png";

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
      projectName: "Intellectia",
      projectLogo: intellectia_logo,
      projectDescription:
        "my winning submission for the Swift Student Challenge 2024. It introduces the concept of AI in Computer Vision and Natural Language Processing.",
      projectRole: "iOS Developer",
      projectDate: "June 2024",
      projectTech: [
        { icon: swift, tech: "Swift" },
        { icon: coreml, tech: "CoreML" },
      ],
      projectType: "Mobile",
      projectLink: "https://github.com/abedsully/Intellectia",
    },
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
    {
      projectName: "Bincang Bareng",
      projectLogo: bincang_bareng_logo,
      projectDescription:
        "meaningful conversation app with your loved one. It utilizes Swift with framework of UIKit and Realm Swift to persist data",
      projectRole: "iOS Developer",
      projectDate: "October 2023",
      projectTech: [
        { icon: swift, tech: "Swift" },
      ],
      projectType: "Mobile",
      projectLink: "https://github.com/abedsully/BincangBareng",
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
