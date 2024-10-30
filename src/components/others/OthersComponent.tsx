import IOthersComponent from "./IOthersComponent";

const OthersComponent = ({
  name,
  logo,
  description,
  date,
}: IOthersComponent) => {
  return (
    <div className="relative w-full h-full flex items-center gap-[2rem]">
      <div className="w-full h-full relative object-contain overflow-hidden group cursor-pointer">
        <img
          src={logo}
          className="w-[26rem] h-[20rem] flex justify-center object-fit transition-opacity duration-300 rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg" />
      </div>

      <h2 className="text-start text-sm">
        <div className="flex gap-2">
          <p className="text-lg font-semibold">{name}: </p>
          <p className="text-black opacity-50 text-lg">{date}</p>
        </div>
        <p className="mt-2">{description}</p>
      </h2>
    </div>
  );
};

export default OthersComponent;
