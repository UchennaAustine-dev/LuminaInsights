import type React from "react";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<any[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredArticles = articleData.filter(
      (a) => a.category.toLowerCase() === category?.toLowerCase()
    );
    setArticles(filteredArticles);
    setFilteredArticles(filteredArticles);
  }, [category]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 md:py-16"
    >
      <SEO
        title={`${categoryTitle} Articles`}
        description={`Explore our collection of insightful articles about ${categoryTitle.toLowerCase()}. Find the latest trends, tips, and in-depth analysis.`}
        keywords={`${category}, articles, blog, insights, ${category} tips, ${category} trends`}
        url={`/category/${category}`}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-8 capitalize">
        {category} Articles
      </h1>
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          type="search"
          placeholder={`Search ${category} articles...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No articles found in this category.
        </p>
      )}
    </motion.main>
  );
};

export default CategoryPage;
