"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articleData } from "@/data/articleData";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const featuredArticles = articleData.slice(0, 3); // Use the first 3 articles as featured

  // Handle slide navigation
  const goToSlide = useCallback((index: any) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
    );
  }, [featuredArticles.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1
    );
  }, [featuredArticles.length]);

  // Handle autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") setIsPaused((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Format category as a badge
  const currentArticle = featuredArticles[currentIndex];

  return (
    <div
      className="relative h-[60vh] md:h-[80vh] overflow-hidden rounded-lg shadow-md"
      aria-roledescription="carousel"
      aria-label="Featured articles"
    >
      {/* Slide Content */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentIndex + 1} of ${
            featuredArticles.length
          }: ${currentArticle.title}`}
        >
          <div className="relative h-full">
            <img
              src={currentArticle.heroImage || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6 py-8">
                {currentArticle.category && (
                  <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">
                    {currentArticle.category}
                  </Badge>
                )}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  {currentArticle.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                  {currentArticle.excerpt}
                </p>
                <Link to={`/article/${currentArticle.id}`}>
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-gray-900 font-medium px-8 py-6 text-lg rounded-md transition-transform hover:scale-105"
                  >
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/20 text-white rounded-full hover:bg-black/40"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-900" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/20 text-white rounded-full hover:bg-black/40"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-900" />
      </Button>

      {/* Play/Pause Control */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border-white/20 text-white rounded-full hover:bg-black/40"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
          <Play className="h-4 w-4" />
        ) : (
          <Pause className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default HeroSection;
