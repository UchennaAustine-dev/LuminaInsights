import { Link } from "react-router-dom";

interface FeaturedArticleProps {
  id: string;
  title: string;
  excerpt: string;
  heroImage: string;
  date: string;
  author: {
    name: string;
  };
  category: string;
}

const FeaturedArticle = ({
  id,
  title,
  excerpt,
  heroImage,
  date,
  author,
  category,
}: FeaturedArticleProps) => {
  return (
    <Link to={`/article/${id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={heroImage || "/placeholder.svg"}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <span className="text-sm text-emerald-600 font-semibold">
            {category}
          </span>
          <h2 className="text-2xl font-bold mt-2 group-hover:text-emerald-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mt-4">{excerpt}</p>
          <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
