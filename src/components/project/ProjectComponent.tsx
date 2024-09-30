import IProjectComponent from "./IProjectComponent";

const ProjectComponent = ({
  projectName,
  projectLogo,
  projectDescription,
  projectRole,
  projectDate,
  projectTech,
  projectLink,
}: IProjectComponent) => {
  return (
    <div className="relative w-full h-full flex flex-col items-start gap-[.5rem]">
      <div className="relative w-full h-[300px] overflow-hidden group cursor-pointer">
        <img
          src={projectLogo}
          className="w-full h-full flex justify-center object-cover transition-opacity duration-300 rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-xl font-medium italic bg-white py-1.5 px-2 rounded-sm transition-transform duration-300 transform group-hover:scale-110">
            {projectName}
          </h2>
        </div>
      </div>

      <h2 className="text-start text-sm mt-2">
        <span className="w-[315px] font-semibold">{projectName}</span> is{" "}
        {projectDescription}
        <p className="hidden">{}</p>
      </h2>
      <ul className="list-disc w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-1">
            {projectTech.map((tech, index) => (
              <li key={index} className="flex mt-1">
                <img
                  src={tech.icon}
                  alt={`${tech.tech} icon`}
                  className="w-6 h-6 cursor-pointer"
                />
              </li>
            ))}
          </div>

          <h4 className="text-sm mt-2 ml-2">
            {projectRole} | {projectDate}
          </h4>
        </div>

        <a className="flex items-center mt-6 justify-end text-gray-400" href={projectLink}>
          {/* Horizontal Line with a Fixed Width */}
          <div className="w-16 border-t border-gray-400 mr-2"></div> {/* Adjust the width as needed */}
          {/* View Details Text */}
          <p className="text-sm">View Details</p>
        </a>
      </ul>
    </div>
  );
};

export default ProjectComponent;
