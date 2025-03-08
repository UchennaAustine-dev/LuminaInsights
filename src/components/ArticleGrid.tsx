import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";
import AdBanner from "@/components/ads/AdBanner";

const ArticleGrid = () => {
  const featuredArticles = articleData.slice(0, 6);
  const leftColumnArticles = articleData.slice(6, 15);
  const rightColumnArticles = articleData.slice(15, 17);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-12">
        {leftColumnArticles.map((article) => (
          <ArticleCard key={article.id} {...article} small />
        ))}
      </div>

      {/* Middle Column */}
      <div className="lg:col-span-3 space-y-8">
        {featuredArticles.map((article) => (
          <FeaturedArticle key={article.id} {...article} />
        ))}
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 space-y-12">
        {rightColumnArticles.map((article) => (
          <ArticleCard key={article.id} {...article} small />
        ))}

        {/* NetPub Ad Banner */}
        <AdBanner
          className="sticky top-20 mb-6"
          slot="5"
          scriptId="ac89736c5f18f38e6ab658042a0defa4"
        />
      </div>
    </div>
  );
};

export default ArticleGrid;

// "use client";

// import { useEffect } from "react";
// import { articleData } from "@/data/articleData";
// import ArticleCard from "@/components/ArticleCard";
// import FeaturedArticle from "@/components/FeaturedArticle";

// const ArticleGrid = () => {
//   const featuredArticles = articleData.slice(0, 6); // Reduced to 2 featured articles
//   const leftColumnArticles = articleData.slice(6, 15);
//   const rightColumnArticles = articleData.slice(15, 17);

//   // Add the Netpub Banner script dynamically
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.async = true;
//     script.src = `https://fstatic.netpub.media/static/ac89736c5f18f38e6ab658042a0defa4.min.js?${Date.now()}`;
//     document.head.appendChild(script);

//     // Cleanup function to remove the script if the component unmounts
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
//       {/* Left Column */}
//       <div className="lg:col-span-2 space-y-12">
//         {leftColumnArticles.map((article) => (
//           <ArticleCard key={article.id} {...article} small />
//         ))}
//       </div>

//       {/* Middle Column */}
//       <div className="lg:col-span-3 space-y-8">
//         {featuredArticles.map((article) => (
//           <FeaturedArticle key={article.id} {...article} />
//         ))}
//       </div>

//       {/* Right Column */}
//       <div className="lg:col-span-2 space-y-12">
//         {rightColumnArticles.map((article) => (
//           <ArticleCard key={article.id} {...article} small />
//         ))}

//         {/* Add the Netpub Banner <ins> element here */}
//         <ins
//           className="adv-ac89736c5f18f38e6ab658042a0defa4"
//           data-sizes-desktop="120x600,160x600,200x200,250x250,300x250,300x600,336x280"
//           data-sizes-mobile="160x600,200x200,250x250,300x250,300x600,336x280"
//           data-slot="5"
//         ></ins>
//       </div>
//     </div>
//   );
// };

// export default ArticleGrid;
