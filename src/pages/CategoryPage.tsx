"use client";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const filteredArticles = articleData.filter(
      (a) => a.category.toLowerCase() === category?.toLowerCase()
    );
    setArticles(filteredArticles);
  }, [category]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {category} Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default CategoryPage;
