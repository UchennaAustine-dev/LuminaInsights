"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articleData } from "@/data/articleData";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredArticles = articleData.slice(0, 3); // Use the first 3 articles as featured

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={featuredArticles[currentIndex].heroImage || "/placeholder.svg"}
            alt={featuredArticles[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {featuredArticles[currentIndex].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                {featuredArticles[currentIndex].excerpt}
              </p>
              <Link to={`/article/${featuredArticles[currentIndex].id}`}>
                <Button
                  size="lg"
                  className="text-gray-900 hover:text-emerald-700 cursor-pointer"
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-gray-900" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-gray-900" />
      </Button>
    </div>
  );
};

export default HeroSection;
