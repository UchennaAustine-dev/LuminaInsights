"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, BookOpen, Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ArticleGrid from "@/components/ArticleGrid";
import CategoriesSection from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
          hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: hasScrolled ? 1 : 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </Button>
      </motion.div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow bg-white"
      >
        <HeroSection />

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
                Fresh Content
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Latest Insights & Ideas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover bright ideas, thought-provoking analyses, and
                insightful stories from our expert contributors
              </p>
            </motion.div>

            <Tabs
              defaultValue="latest"
              className="mt-8"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center">
                <TabsList className="bg-gray-100">
                  <TabsTrigger
                    value="latest"
                    className="data-[state=active]:bg-white"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Latest
                  </TabsTrigger>
                  <TabsTrigger
                    value="trending"
                    className="data-[state=active]:bg-white"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending
                  </TabsTrigger>
                  <TabsTrigger
                    value="featured"
                    className="data-[state=active]:bg-white"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Featured
                  </TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="latest" className="mt-8">
                    <ArticleGrid />
                  </TabsContent>
                  <TabsContent value="trending" className="mt-8">
                    <ArticleGrid />
                  </TabsContent>
                  <TabsContent value="featured" className="mt-8">
                    <ArticleGrid />
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group font-medium transition-all duration-300 border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50"
            >
              Explore More Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.section>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CategoriesSection />
        </motion.div>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-xl my-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-gray-600">
                Get the latest insights, articles, and updates delivered
                directly to your inbox. We send thoughtfully curated content
                that keeps you informed and inspired.
              </p>

              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
                <Button className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    10k+
                  </div>
                  <p className="text-sm text-gray-600">Subscribers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    120+
                  </div>
                  <p className="text-sm text-gray-600">Articles</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    15+
                  </div>
                  <p className="text-sm text-gray-600">Expert Writers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    4.9★
                  </div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default HomePage;

// "use client";

// import { motion } from "framer-motion";
// import HeroSection from "@/components/HeroSection";
// import ArticleGrid from "@/components/ArticleGrid";
// import CategoriesSection from "@/components/CategoriesSection";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// const HomePage = () => {
//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex-grow bg-white"
//     >
//       <HeroSection />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
//           <p className="text-xl text-gray-600">
//             Discover bright ideas and insightful stories
//           </p>
//         </div>
//         <ArticleGrid />
//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg">
//             Explore More Insights
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//       <CategoriesSection />
//     </motion.main>
//   );
// };

// export default HomePage;
