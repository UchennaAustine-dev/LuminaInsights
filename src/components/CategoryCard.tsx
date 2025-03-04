"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-lg overflow-hidden group"
    >
      <Link to={`/category/${title.toLowerCase()}`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
