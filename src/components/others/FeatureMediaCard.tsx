interface FeaturedMediaCardProps {
  image: string;
  title: string;
  source: string;
  url: string;
}

const FeaturedMediaCard = ({
  image,
  title,
  source,
  url,
}: FeaturedMediaCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-[12rem] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 text-gray-800 font-inter">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{source}</p>
        <p className="text-blue-500 text-sm mt-2 hover:underline">
          Read more →
        </p>
      </div>
    </a>
  );
};

export default FeaturedMediaCard;
