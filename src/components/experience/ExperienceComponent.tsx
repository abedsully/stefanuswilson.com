import IExperience from "./IExperience";

const ExperienceComponent = ({
  logo,
  link,
  companyName,
  position,
  duration,
  responsibilities,
}: IExperience) => {
  return (
    <div className="flex text-left items-start gap-[2rem] mt-[1rem] w-full font-inter">
      <img src={logo} alt={`${companyName} logo`} className="w-28 h-28 mt-2" />

      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col">
          <a href={link}>
            <h1 className="text-xl font-bold hover:underline">{companyName}</h1>
          </a>
          <h2 className="text-gray-400 italic">{duration}</h2>
        </div>

        <hr className="border-t border-gray-200" />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{position}</h1>
          <h2 className="text-gray-400 italic">{duration}</h2>
        </div>

        <ul className="list-disc ml-8">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mt-1">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceComponent;
