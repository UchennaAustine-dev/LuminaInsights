"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import NewsletterSection from "@/components/NewsletterSection";

const HomePage = () => {
  // Add the Netpub Banner script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://fstatic.netpub.media/static/ac89736c5f18f38e6ab658042a0defa4.min.js?${Date.now()}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <ScrollToTopButton />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow bg-white"
      >
        <HeroSection />

        {/* Add the Netpub Banner <ins> element here */}
        <ins
          className="adv-ac89736c5f18f38e6ab658042a0defa4"
          data-sizes-desktop="120x600"
          data-sizes-mobile="120x600"
          data-slot="1"
        ></ins>

        <LatestInsightsSection />
        <CategoriesSection />
        <NewsletterSection />
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
