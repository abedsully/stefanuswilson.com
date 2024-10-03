import Navbar from "../../components/Navbar";
import Signature from "../../components/Signature";
import logo_it from "../../assets/it_binus_logo.jpeg";
import logo_bncc from "../../assets/logo_bncc.jpg";
import logo_ssc from "../../assets/logo_ssc.png";
import logo_binus from "../../assets/logo_binus.jpg";

import { Helmet } from "react-helmet";
import ExperienceComponent from "../../components/experience/ExperienceComponent";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Stefanus Albert Wilson</title>
      </Helmet>

      <div className="flex flex-col xl:px-[18rem] gap-[2rem] text-gray-700 font-inter">
        <Navbar />

        <div className="flex justify-center">
          <Signature />
        </div>

        <ExperienceComponent
          logo={logo_it}
          link={"http://ict.binus.edu/"}
          companyName={"Bina Nusantara IT Division"}
          position={"Associate Developer"}
          duration={"March 2024 - February 2025"}
          responsibilities={[
            "Develops and implements robust features using C# (ASP.NET) for backend APIs and both TypeScript and JavaScript (React) for frontend applications, enhancing system functionality and user experience.",
            "Participates actively in daily scrum meetings, effectively communicating project progress and collaborating with team members to address challenges and meet deadlines.",
            "Assures comprehensive documentation for codebases, ensuring maintainability and facilitating easier understanding for other developers.",
          ]}
        />

        <ExperienceComponent
          logo={logo_ssc}
          link={
            "https://www.wwdcscholars.com/s/733897F2-0FE6-4E59-A716-88E5D3DFF5EC/2024"
          }
          companyName={"Swift Student Challenge Winner"}
          position={"iOS Developer"}
          duration={"November 2023 - March 2024 (5 months)"}
          responsibilities={[
            "Developed an Artificial Intelligence-based iOS application to recognize human’s emotion, perform sentiment analysis, and predict most dominant languages.",
            "Utilized CreateML to train the Emotion Classifier Model using the FER-2013 dataset with seven emotion types",
            "Adopted the MVC architecture pattern and code refactoring technique to ensure code modularity and reusability.",
          ]}
        />

        <ExperienceComponent
          logo={logo_bncc}
          link={"https://bncc.net/"}
          companyName={"Bina Nusantara Computer Club"}
          position={"Back End Instructor"}
          duration={"October 2023 - May 2024 (8 months)"}
          responsibilities={[
            "Instructed Back End Development using PHP Framework (Laravel).",
            "Facilitated sessions on using GitHub as a source control platform.",
            "Assessed both Mid and Final Projects as well as giving suggestions for potential improvements",
          ]}
        />

        <ExperienceComponent
          logo={logo_binus}
          link={"https://socs.binus.ac.id/"}
          companyName={"Bina Nusantara University"}
          position={"Undergraduate Computer Science Student"}
          duration={"September 2022 - TBA"}
          responsibilities={[
            "Specializing in Intelligent Systems with AI-Related Courses: Deep Learning, Computer Vision, and Natural Language Processing",
            "Collaborated with other peers to compete in Software Development and Business Case Competition (Gemastik).",
            "Appointed as Bee Tutor Plus (Innovative programing aiming to improve student s English proficiency through individualized one-on-one instruction)",
          ]}
        />

        <h2 className="flex flex-col gap-[2rem] mt-[2rem]">
          <div className="flex gap-[2rem] justify-center">
            <a
              href="https://www.linkedin.com/in/stefanuswilson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline cursor-pointer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.github.com/abedsully"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline cursor-pointer"
            >
              <FaGithub /> Github
            </a>
            <a
              href="mailto:stefanus.wilsonn@gmail.com"
              className="flex items-center gap-1 text-sm hover:underline cursor-pointer"
            >
              <GrMail /> Mail
            </a>
          </div>
          Copyright © {new Date().getFullYear()} - Stefanus Albert Wilson
        </h2>
      </div>
    </>
  );
};

export default Experience;
