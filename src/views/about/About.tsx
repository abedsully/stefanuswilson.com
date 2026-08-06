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
        <div className="flex flex-col xl:px-[16rem] gap-[2rem] text-gray-700 font-inter">
          <Navbar />

          <div className="flex justify-center">
            <Signature />
          </div>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Stefanus Albert Wilson is a software engineer working across
            back-end and front-end development, with a long-running passion
            for{" "}
            <span className="font-semibold">iOS engineering</span>. Known for
            his critical thinking and problem-solving, he builds systems that
            are reliable, maintainable, and genuinely useful to the people who
            depend on them day to day.
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
            <span className="font-semibold">2025</span>, Stefanus was awarded
            the{" "}
            <a
              href="https://developer.apple.com/swift-student-challenge/"
              className="font-semibold underline"
            >
              Apple Swift Student Challenge
            </a>
            , making him a{" "}
            <span className="font-semibold">two-time winner</span>. His 2025
            entry, <span className="font-semibold">GuardUp</span>, is a
            SwiftUI application built to support people facing harassment and
            cyberbullying, recognized by Apple for its innovation and social
            impact. Both projects reflect what he enjoys most about iOS work:
            shipping something complete, considered, and human on a hard
            deadline.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            <span className="font-semibold">Back-end.</span> Stefanus works
            primarily in back-end engineering, where his interests are system
            design, scalability, and performance. He builds service-oriented
            and microservice architectures using{" "}
            <span className="font-semibold">Spring Boot</span> and{" "}
            <span className="font-semibold">Go</span>, with experience in
            event-driven communication through{" "}
            <span className="font-semibold">Kafka</span>, containerized
            deployment with <span className="font-semibold">Docker</span>, and
            system observability using the{" "}
            <span className="font-semibold">ELK stack</span>. His emphasis is
            on services that stay maintainable long after the first release.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            <span className="font-semibold">Front-end.</span> He builds
            interfaces with <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">TypeScript</span>, most often the
            kind that sit on top of dense operational data — dashboards and
            internal tools where clarity matters more than decoration, and
            where a confusing screen becomes a correctness problem rather than
            a cosmetic one.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            <span className="font-semibold">iOS.</span> Alongside his
            professional work, he continues to build with{" "}
            <span className="font-semibold">Swift</span> and{" "}
            <span className="font-semibold">SwiftUI</span>, applying MVVM
            architecture and reactive state management to create applications
            that feel considered end to end.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            At{" "}
            <a href="https://hibank.co.id" className="font-semibold underline">
              PT Bank Hibank Indonesia
            </a>
            , Stefanus worked as an IT Developer on the Biller Switching
            platform. He revamped the application using Spring Boot to support
            multi-file uploads, improving data reconciliation efficiency by{" "}
            <span className="font-semibold">50%</span> and collapsing a
            backlog of up to 40 daily files into a single batch. He rebuilt
            the frontend in React and TypeScript for faster load times and
            more maintainable components, developed RESTful services for
            aggregator integration across SIT, UAT, and production, and built
            a centralized service allowing operational teams to enable or
            disable 100+ products by aggregator or category without manual
            configuration. He also implemented log monitoring and
            observability with the ELK stack, improving error visibility and
            speeding up issue resolution.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Previously, he built and maintained full-stack applications at the
            Bina Nusantara IT Division using C# (ASP.NET) and React with
            TypeScript, and taught back-end development with Laravel to 15+
            students as an instructor at the Bina Nusantara Computer Club.
          </h1>

          <h1 className="font-inter w-full text-start space-y-4 leading-7">
            Stefanus graduated from{" "}
            <span className="font-semibold">Bina Nusantara University</span>{" "}
            with a Bachelor of Computer Science in{" "}
            <span className="font-semibold">March 2026</span>.
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
