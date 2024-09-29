import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";



import { Helmet } from "react-helmet";

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
