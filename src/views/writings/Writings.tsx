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

      </div>
    </>
  );
};

export default Writings;
