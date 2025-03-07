// "use client";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// interface ArticleCardProps {
//   id?: string;
//   image?: string;
//   title: string;
//   small?: boolean;
// }

// const ArticleCard = ({ id, image, title, small = false }: ArticleCardProps) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.2 }}
//       className="group"
//     >
//       <Link to={`/article/${id}`}>
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           className={`w-full ${small ? "h-24" : "h-48"} object-cover`}
//         />
//         <h3
//           className={`mt-1 ${
//             small ? "text-sm" : "text-lg"
//           } font-medium group-hover:text-emerald-600 transition-colors`}
//         >
//           {title}
//         </h3>
//       </Link>
//     </motion.div>
//   );
// };

// export default ArticleCard;
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  heroImage: string;
  date: string;
  readTime?: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags?: string[];
  small?: boolean;
  featured?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  heroImage,
  date,
  readTime = "5 min read",
  author,
  category,
  tags = [],
  small = false,
  featured = false,
}: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Format date for better readability
    try {
      const dateObj = new Date(date);
      setFormattedDate(
        dateObj.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    } catch (e) {
      setFormattedDate(date);
    }
  }, [date]);

  return (
    <Link
      to={`/article/${id}`}
      className={`block group relative ${small ? "" : "h-full"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full bg-white rounded-lg overflow-hidden transition-all duration-300 ${
          featured ? "border-2 border-emerald-500" : "border border-gray-200"
        } ${isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md"}`}
      >
        <div className="relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              isHovered ? "to-emerald-900/20" : "to-gray-900/10"
            } transition-all duration-300 z-10`}
          />

          <img
            src={heroImage || "/placeholder.svg"}
            alt={title}
            className={`w-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            } ${small ? "h-40" : "h-52 md:h-56"}`}
          />

          {featured && (
            <div className="absolute top-3 left-3 z-20 bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded-full">
              Featured
            </div>
          )}

          <div className="absolute top-3 right-3 z-20">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <div className="space-y-3">
            <h3
              className={`font-bold line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 ${
                small ? "text-base" : "text-xl"
              }`}
            >
              {title}
            </h3>

            {!small && (
              <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {author.avatar ? (
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <User className="w-5 h-5 text-gray-400" />
                )}
                <span className="text-xs text-gray-700 font-medium truncate max-w-[100px]">
                  {author.name}
                </span>
              </div>

              <div className="flex items-center text-xs text-gray-500">
                <div className="flex items-center mr-3" title="Published date">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{formattedDate}</span>
                </div>

                {!small && (
                  <div className="flex items-center" title="Reading time">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{readTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {!small && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          <div
            className={`mt-3 text-emerald-600 text-xs font-medium flex items-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Read article
            <ArrowRight className="ml-1 w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
