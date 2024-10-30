// Area Import Tech/Programming Language Icon
import swift from "../../assets/techstacks/swift.png";
import typescript from "../../assets/techstacks/typescript.png";
import go from "../../assets/techstacks/Go-Logo_Blue.svg"
import firebase from "../../assets/techstacks/firebase.png";
import coreml from "../../assets/techstacks/coreml.png";
import php from "../../assets/techstacks/php.png"
import laravel from "../../assets/techstacks/laravel.png"
import react from "../../assets/techstacks/react.png"

// Area Import App Logo
import ishowshop_logo from "../../assets/app_logo/ishowshop_logo.png";
import intellectia_logo from "../../assets/app_logo/intellectia_logo.png";
import bincang_bareng_logo from "../../assets/app_logo/logo_bincang_bareng.png";
import moviehub_logo from "../../assets/app_logo/moviehub_logo.png"
import gabungaja_logo from "../../assets/app_logo/gabungaja_logo.png"
import storeegg_logo from "../../assets/app_logo/storeegg_logo.png"

// Area Modify Helmet Title
import { Helmet } from "react-helmet";

// Area Import Component
import ProjectComponent from "../../components/project/ProjectComponent";
import Signature from "../../components/Signature";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { motion } from 'framer-motion';

const projects = {
  projects: [
    {
      projectName: "MovieHub",
      projectLogo: moviehub_logo,
      projectDescription:
        "is a platform for movie enthusiasts to explore trending movies, series, and actors. It offers a seamless experience for discovering and discussing content.",
      projectRole: "Full Stack Developer",
      projectDate: "October 2024",
      projectTech: [
        { icon: typescript, tech: "Typescript" },  
        { icon: go, tech: "Go" }
      ],
      projectType: "Website",
      projectLink: "https://github.com/abedsully/MovieHub-Go-React",
    },
    {
      projectName: "IShowShop",
      projectLogo: ishowshop_logo,
      projectDescription:
        "a shopping app with features of Speech Recognition (SR-Based) searching functionality, Wallet TopUp, Favorite Products, and Discount Voucher.",
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
      projectName: "GabungAja",
      projectLogo: gabungaja_logo,
      projectDescription:
        "your one-stop destination to discover communities, make new friends, and embark on exciting gaming adventures together.",
      projectRole: "Full Stack Developer",
      projectDate: "April 2024",
      projectTech: [
        { icon: laravel, tech: "Laravel" },
        { icon: php, tech: "PHP" },
      ],
      projectType: "Website",
      projectLink: "https://github.com/abedsully/GabungAja",
    },

    {
      projectName: "Intellectia",
      projectLogo: intellectia_logo,
      projectDescription:
        "my winning submission for the Swift Student Challenge 2024. It introduces the concept of AI in Computer Vision and Natural Language Processing.",
      projectRole: "iOS Developer",
      projectDate: "March 2024",
      projectTech: [
        { icon: swift, tech: "Swift" },
        { icon: coreml, tech: "CoreML" },
      ],
      projectType: "Mobile",
      projectLink:
        "https://www.wwdcscholars.com/s/733897F2-0FE6-4E59-A716-88E5D3DFF5EC/2024",
    },
    {
      projectName: "Storeegg",
      projectLogo: storeegg_logo,
      projectDescription:
        "my take-home project for qualifying to Bina Nusantara IT Division, functioning as an E-commerce app to show, purchase, and sell products.",
      projectRole: "Mobile Developer",
      projectDate: "November 2023",
      projectTech: [
        { icon: typescript, tech: "Typescript" },
        { icon: react, tech: "React Native" }
      ],
      projectType: "Mobile",
      projectLink: "https://github.com/abedsully/Storegg",
    },
    {
      projectName: "Bincang Bareng",
      projectLogo: bincang_bareng_logo,
      projectDescription:
        "meaningful conversation app with your loved one. It utilizes Swift with framework of UIKit and Realm Swift to persist data",
      projectRole: "iOS Developer",
      projectDate: "October 2023",
      projectTech: [{ icon: swift, tech: "Swift" }],
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

      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

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

        <div className="mt-[8rem]">
          <Footer />
        </div>
      </div>

      </motion.section>
    </>
  );
};

export default Project;
