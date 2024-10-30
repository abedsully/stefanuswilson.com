import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <h2 className="flex flex-col gap-[2rem]">
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
        <a
          href="https://drive.google.com/file/d/1qFipk-GcKYf98PsI72bjx5-NsJedBbc1/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm hover:underline cursor-pointer"
        >
          <DocumentTextIcon className="w-4 h-4"/> CV
        </a>
      </div>
      Copyright © {new Date().getFullYear()} - Stefanus Albert Wilson
    </h2>
  );
};

export default Footer;