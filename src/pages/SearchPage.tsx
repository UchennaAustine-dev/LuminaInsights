"use client";

import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const searchResults = articleData.filter(
      (a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setResults(searchResults);
  }, [query]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Search Results for "{query}"
        </h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-600">
            No results found for your search.
          </p>
        )}
      </div>
    </motion.main>
  );
};

export default SearchPage;
