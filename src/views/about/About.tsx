// Area Import Assets
import asset1 from "../../assets/asset_foto1.jpeg";
import asset2 from "../../assets/asset_foto2.jpeg";
import asset3 from "../../assets/asset_foto3.jpg";
import asset4 from "../../assets/asset_foto4.png";

// Area Import Component
import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";

const images = {
  images: [
    {
      src: asset1,
      alt: "Apple's Swift Student Challenge @2025",
    },
    {
      src: asset2,
      alt: "Rewards Swift Student Challenge @2024",
    },
    {
      src: asset3,
      alt: "English Speech Competition @2019",
    },
    {
      src: asset4,
      alt: "Prom Speech @2022",
    },
  ],
};

const About = () => {
  return (
    <>
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

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Stefanus Albert Wilson is a software enthusiast, with a strong
            interest in{" "}
            <span className="font-semibold">
              Back-End Development and iOS Engineering.
            </span>{" "}
            Renowned for his critical thinking and problem solving skills,
            Stefanus is continually honing his skills by working on
            high-performance applications that contribute to seamless user
            experiences. He embraces new challenges as opportunities to further
            develop his skills and deepen his expertise in software engineering.
          </h1>

          <div>
            {/* Image gallery */}
            <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl sm:grid-cols-3 lg:gap-x-4">
              <div className="relative group aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  alt={images.images[2].alt}
                  src={images.images[2].src}
                  className="h-full w-full object-cover object-center hover:cursor-wait"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{images.images[0].alt}</p>
                </div>
              </div>

              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
                <div className="relative group aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    alt={images.images[1].alt}
                    src={images.images[1].src}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg">{images.images[1].alt}</p>
                  </div>
                </div>

                <div className="relative group aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    alt={images.images[0].alt}
                    src={images.images[0].src}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg">{images.images[2].alt}</p>
                  </div>
                </div>
              </div>
              <div className="relative group aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  alt={images.images[3].alt}
                  src={images.images[3].src}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{images.images[3].alt}</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            In 2024, Stefanus Albert was awarded a WWDC scholarship for his
            exceptional submission to the{" "}
            <a
              href="https://developer.apple.com/swift-student-challenge/"
              className="font-semibold underline"
            >
              Swift Student Challenge
            </a>
            . The challenge tasked applicants with creating an interactive app
            playground on a topic of their choice to demonstrate their coding
            passion.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Stefanus's winning project, Intellectia, is a home for exploring
            Artificial Intelligence, introducing the key concepts in{" "}
            <span className="font-semibold">Computer Vision</span> and{" "}
            <span className="font-semibold">Natural Language Processing.</span>{" "}
            With interactive features like Emotion Classification, Language
            Detection, and Sentiment Analysis, and built using frameworks such
            as <span className="font-semibold">SwiftUI</span> and{" "}
            <span className="font-semibold">CoreML.</span> Intellectia showcases
            his technical skills while highlighting the potential of AI.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Currently, Stefanus is a sophomore at Binus University specializing
            in Intelligent Systems, focusing on the fundamentals of machine
            learning, including Deep Learning, Computer Vision, Natural Language
            Processing, and Speech Recognition.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            In addition, he works as an associate developer at{" "}
            <a href="http://ict.binus.edu/" className="font-semibold underline">
              Binus IT Division
            </a>
            , where he builds internal applications for the rector. Between 2023
            and 2024, he also taught Back-End Development in the{" "}
            <a href="https://www.bncc.net" className="font-semibold underline">
              BNCC (Bina Nusantara Computer Club)
            </a>
            , conducting weekly sessions for 13 weeks.
          </h1>

          <div className="mt-[2rem]">
            <Footer />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
