import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import beauty from "@/assets/beau.webp";
import technology from "@/assets/entert.webp";
import lifestyle from "@/assets/life.webp";
import fashion from "@/assets/fash.webp";

const categories = [
  {
    id: "beauty",
    title: "Beauty",
    image: beauty,
    count: 24,
    description: "Makeup tips, skincare routines, and beauty product reviews",
  },
  {
    id: "technology",
    title: "Technology",
    image: technology,
    count: 42,
    description: "Latest gadgets, digital trends, and tech innovations",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    image: lifestyle,
    count: 38,
    description: "Wellness advice, home decor, and everyday living tips",
  },
  {
    id: "fashion",
    title: "Fashion",
    image: fashion,
    count: 31,
    description: "Style guides, fashion trends, and outfit inspiration",
  },
];

const CategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="my-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
            Discover Content
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Explore Exciting Popular Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our carefully curated collection of topics, each offering
            fresh perspectives and valuable insights.
          </p>
        </motion.div>

        {isSmallScreen ? (
          <div className="relative">
            <div className="overflow-x-auto pb-6 -mx-4 px-4 flex space-x-4 scrollbar-hide">
              {categories.map((category) => (
                <div key={category.id} className="w-4/5 flex-shrink-0">
                  <CategoryCard title={category.title} image={category.image} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="flex space-x-1">
                {categories.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? "bg-emerald-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="relative"
              >
                <CategoryCard title={category.title} image={category.image} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="/categories"
            className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors group"
          >
            View all categories
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
