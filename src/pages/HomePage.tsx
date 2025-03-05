// "use client";

// import { motion } from "framer-motion";
// import ArticleGrid from "@/components/ArticleGrid";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import CategoriesSection from "@/components/CategoriesSection";

// const HomePage = () => {
//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex-grow bg-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
//           <p className="text-xl text-gray-600">
//             Discover the most recent insights and stories
//           </p>
//         </div>
//         <ArticleGrid />
//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg">
//             Load More Articles
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//         <CategoriesSection />
//       </div>
//     </motion.main>
//   );
// };

// export default HomePage;

"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ArticleGrid from "@/components/ArticleGrid";
import CategoriesSection from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-white"
    >
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">
            Discover bright ideas and insightful stories
          </p>
        </div>
        <ArticleGrid />
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore More Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <CategoriesSection />
    </motion.main>
  );
};

export default HomePage;
