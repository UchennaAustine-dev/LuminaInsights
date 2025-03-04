"use client";

import { motion } from "framer-motion";
import ArticleGrid from "@/components/ArticleGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CategoriesSection from "@/components/CategoriesSection";

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
          <p className="text-xl text-gray-600">
            Discover the most recent insights and stories
          </p>
        </div>
        <ArticleGrid />
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <CategoriesSection />
      </div>
    </motion.main>
  );
};

export default HomePage;

// "use client";

// import { motion } from "framer-motion";
// import { articleData } from "@/data/articleData";
// import ArticleCard from "@/components/ArticleCard";

// const HomePage = () => {
//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex-grow bg-white"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {articleData.map((article) => (
//             <ArticleCard key={article.id} {...article} />
//           ))}
//         </div>
//       </div>
//     </motion.main>
//   );
// };

// export default HomePage;
