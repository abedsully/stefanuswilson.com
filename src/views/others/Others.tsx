import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import Book1 from "../../assets/book_atomic.jpg";

import { Helmet } from "react-helmet";
import OthersComponent from "../../components/others/OthersComponent";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';

const Writings = () => {
  return (
    <>
      <Helmet>
        <title>Others | Stefanus Albert Wilson</title>
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

        <OthersComponent
          name={"Atomic Habits"}
          logo={Book1}
          description="I started to read Atomic Habits by James Clear at the end of October with the purpose of slowly turning bad habits into good habits."
          date={"October 2024 - TBA"}
        />

        <div className="mt-[23rem]">
          <Footer />
        </div>


      </div>

      </motion.section>
    </>
  );
};

export default Writings;
