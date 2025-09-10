// Area Import Assets
import asset1 from "../../assets/asset_foto1.png";
import asset2 from "../../assets/asset_foto2.jpeg";
import asset3 from "../../assets/asset_foto3.jpg";

// Area Import Component
import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";

const images = {
  images: [
    {
      src: asset1,
    },
    {
      src: asset3,
      alt: "Apple's Swift Student Challenge @2025",
    },
    {
      src: asset2,
      alt: "Rewards Swift Student Challenge @2024",
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
            Stefanus Albert Wilson is a software enthusiast with a strong
            interest in{" "}
            <span className="font-semibold">
              Back-End Development and iOS Engineering.
            </span>{" "}
            Renowned for his critical thinking and problem-solving skills,
            Stefanus continues to refine his expertise by building applications
            that deliver meaningful impact and reliable user experiences.
          </h1>

          <div>
            {/* Image gallery */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* First image */}
              <div className="relative group aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={images.images[0].alt}
                  src={images.images[0].src}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{images.images[0].alt}</p>
                </div>
              </div>

              {/* Second image */}
              <div className="relative group aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={images.images[1].alt}
                  src={images.images[1].src}
                  className="h-full w-full object-cover object-center scale-125"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{images.images[1].alt}</p>
                </div>
              </div>

              {/* Third image */}
              <div className="relative group aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={images.images[2].alt}
                  src={images.images[2].src}
                  className="h-full w-full object-cover object-[20%]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{images.images[2].alt}</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            In both <span className="font-semibold">2024</span> and{" "}
            <span className="font-semibold">2025</span>, Stefanus Albert was
            awarded the prestigious{" "}
            <a
              href="https://developer.apple.com/swift-student-challenge/"
              className="font-semibold underline"
            >
              Apple Swift Student Challenge
            </a>
            , marking his achievement as a{" "}
            <span className="font-semibold">two-time WWDC winner</span>. This
            recognition reflects his enduring passion for{" "}
            <span className="font-semibold">iOS engineering</span> and his
            ability to bring innovative ideas into impactful applications.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Alongside his passion for iOS, Stefanus is currently focusing on{" "}
            <span className="font-semibold">Back-End Engineering</span>, where
            he explores system design, scalability, and performance
            optimization. His work emphasizes building reliable, efficient, and
            maintainable systems that support modern applications and high-level
            infrastructure needs.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Currently, Stefanus is in his third year (sixth semester) at Binus
            University, specializing in Intelligent Systems, where he deepens
            his understanding of machine learning fundamentals, including Deep
            Learning, Computer Vision, Natural Language Processing, and Speech
            Recognition.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Alongside his studies, he works as an IT Developer at <span> </span>
            <a href="https://hibank.co.id" className="font-semibold underline">
              PT Bank Hibank Indonesia
            </a>
            . In this role, he contributes to modernizing internal systems by
            developing scalable backend services, enhancing system architecture,
            and improving application reliability to better support business
            operations.
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
