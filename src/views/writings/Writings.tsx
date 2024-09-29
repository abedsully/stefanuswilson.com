import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";

import asset1 from "../../assets/asset_foto1.jpeg";
import asset2 from "../../assets/asset_foto2.jpeg";
import asset3 from "../../assets/asset_foto3.jpeg";
import asset4 from "../../assets/asset_foto4.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

import { Helmet } from "react-helmet";

const product = {
  images: [
    {
      src: asset1,
      alt: "English Speech Competition @2019",
    },
    {
      src: asset2,
      alt: "Rewards Swift Student Challenge @2024",
    },
    {
      src: asset3,
      alt: "Dinner with Binus IT Division @2024",
    },
    {
      src: asset4,
      alt: "Prom Speech @2022",
    },
  ],
};

const Writings = () => {
  return (
    <>
      <Helmet>
        <title>Writings | Stefanus Albert Wilson</title>
      </Helmet>
      <div className="flex flex-col xl:px-[18rem] gap-[2rem] text-gray-700 font-inter">
        <Navbar />

        <div className="flex justify-center">
          <Signature />
        </div>

        <h1 className="w-full mt-[15rem] text-lg">This page is still in development, Stay Tune 😀😀</h1>

        {/* <h2 className="flex flex-col gap-[2rem] mt-[2rem]">
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
        </h2> */}
      </div>
    </>
  );
};

export default Writings;
