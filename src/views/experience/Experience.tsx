// Area Import Assets
import logo_it from "../../assets/it_binus_logo.jpeg";
import logo_bncc from "../../assets/logo_bncc.jpg";
import logo_hibank from "../../assets/Hibank.svg.png";

// Area Modify Helmet Title
import { Helmet } from "react-helmet";

// Area Import Component
import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import ExperienceComponent from "../../components/experience/ExperienceComponent";
import Footer from "../../components/Footer";

import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Stefanus Albert Wilson</title>
      </Helmet>

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

        <ExperienceComponent
          logo={logo_hibank}
          link={"https://www.hibank.co.id"}
          companyName={"PT Bank Hibank Indonesia"}
          position={"IT Developer"}
          duration={"February 2025 - Present"}
          responsibilities={[
            "Increased data reconciliation efficiency by 50% by revamping the Biller Switching application using Spring Boot to support multi-file uploads eliminating manual daily file handling (reducing backlog processing from up to 40 files to a single batch).",
            "Enhanced user experience and modularity by rebuilding the frontend with React and TypeScript, resulting in faster load times, fewer UI issues, and easier component maintenance.",
            "Implemented system observability and log monitoring using the ELK (Elasticsearch, Logstash, Kibana) stack, significantly improving error visibility, accelerating issue resolution, and enabling proactive system performance monitoring.",
            "Enhanced system flexibility for product and operational teams by developing a centralized service to enable or disable all products by aggregators or categories, eliminating manual configuration for over 100+ products and significantly reducing adjustment time.",
            "Developed RESTful JSON-based services for aggregator integration in the Biller Switching application, ensuring compliance with defined business rules and API standards, and collaborating across SIT, UAT, and production stages to deliver reliable deployments.",
          ]}
        />

        <ExperienceComponent
          logo={logo_it}
          link={"http://ict.binus.edu/"}
          companyName={"Bina Nusantara IT Division"}
          position={"Associate Developer"}
          duration={"March 2024 - February 2025"}
          responsibilities={[
            "Built and maintained full-stack applications using C# (ASP.NET) for backend APIs and React with TypeScript for frontend, ensuring seamless integration, high performance, and an intuitive user experience.",
            "Collaborated actively in daily scrum meetings, effectively communicating project progress and collaborating with team members to address challenges and meet deadlines",
            "Maintained comprehensive codebase documentation, ensuring long-term maintainability and facilitating onboarding for other developers.",
          ]}
        />

        <ExperienceComponent
          logo={logo_bncc}
          link={"https://bncc.net/"}
          companyName={"Bina Nusantara Computer Club"}
          position={"Back End Instructor"}
          duration={"October 2023 - May 2024 (8 months)"}
          responsibilities={[
            "Delivered online sessions on Back End Development using the Laravel framework, guiding 15+ students in mastering MVC architecture and collaborative version control through GitHub.",
            "Designed teaching slides and interactive materials to simplify complex backend concepts, fostering a two-way learning environment where students actively engaged through questions and discussions.",
            "Assessed Mid and Final Projects for two classes, providing detailed feedback that improved students’ project architecture and code quality by emphasizing maintainability and best practices.",
          ]}
        />

        <div className="mt-[2rem]">
          <Footer />
        </div>
      </div>
      </motion.section>
    </>
  );
};

export default Experience;
