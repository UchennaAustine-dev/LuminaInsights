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

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  heroImage: string;
  date: string;
  author: {
    name: string;
  };
  category: string;
  small?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  heroImage,
  date,
  author,
  category,
  small = false,
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block group cursor-pointer">
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-md ${
          small ? "" : "hover:shadow-xl transition-shadow duration-300"
        }`}
      >
        <img
          src={heroImage || "/placeholder.svg"}
          alt={title}
          className={`w-full object-cover ${small ? "h-32" : "h-48"}`}
        />
        <div className="p-4">
          <span className="text-xs text-emerald-600 font-semibold">
            {category}
          </span>
          <h3
            className={`font-semibold group-hover:text-emerald-600 transition-colors duration-300 ${
              small ? "text-sm mt-1" : "text-xl mt-2"
            }`}
          >
            {title}
          </h3>
          {!small && <p className="text-gray-600 text-sm mt-2">{excerpt}</p>}
          <div
            className={`flex justify-between items-center text-gray-500 ${
              small ? "text-xs mt-1" : "text-sm mt-4"
            }`}
          >
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
