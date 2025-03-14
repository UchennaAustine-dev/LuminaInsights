// import { useEffect } from "react";
// import { articleData } from "@/data/articleData";
// import ArticleCard from "@/components/ArticleCard";
// import FeaturedArticle from "@/components/FeaturedArticle";
// import AdBanner from "@/components/ads/AdBanner";

// const ArticleGrid = () => {
//   const featuredArticles = articleData.slice(0, 7);
//   const leftColumnArticles = articleData.slice(7, 17);
//   // const rightColumnArticles = articleData.slice(15, 17);
//   const scriptId = "ac89736c5f18f38e6ab658042a0defa4"

//   // Add the GDPR script dynamically
//   useEffect(() => {
//     const gdprScript = document.createElement("script");
//     gdprScript.type = "text/javascript";
//     gdprScript.src = "https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js";
//     gdprScript.defer = true;
//     document.head.appendChild(gdprScript);

//     // Cleanup function to remove the script if the component unmounts
//     return () => {
//       document.head.removeChild(gdprScript);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Notification Ad - Positioned at the bottom of the viewport */}
//       <div className="fixed bottom-0 left-0 right-0 z-40">
//         <AdBanner
//           className="mx-auto"
//           adType="notification"
//           adValue="5"
//           scriptId="ac89736c5f18f38e6ab658042a0defa4"
//           sizesDesktop="120x600,160x600,300x600,336x280"
//           sizesMobile="120x600,160x600,300x600,336x280"
//         />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-12">
//           {leftColumnArticles.map((article) => (
//             <ArticleCard key={article.id} {...article} small />
//           ))}
//         </div>

//         {/* Middle Column */}
//         <div className="lg:col-span-3 space-y-8">
//           {/* Fixed 300x250 Ad at the top of the middle column */}
//           <AdBanner
//             className="mb-8"
//             adType="fixed"
//             adValue="6"
//             scriptId="ac89736c5f18f38e6ab658042a0defa4"
//             sizesDesktop="200x200,250x250,300x250,336x280"
//             sizesMobile="200x200,250x250,300x250,336x280"
//           />
//           {featuredArticles.map((article) => (
//             <FeaturedArticle key={article.id} {...article} />
//           ))}
//         </div>

//         {/* Right Column */}
//         <div className="lg:col-span-2 space-y-12">
//           {/* {rightColumnArticles.map((article) => (
//             <ArticleCard key={article.id} {...article} small />
//           ))} */}

//           {/* NetPub Ad Banner */}
//           <AdBanner
//             className="sticky top-20 mb-6"
//             adType="fixed"
//             adValue="5"
//             scriptId="ac89736c5f18f38e6ab658042a0defa4"
//             sizesDesktop="120x600"
//             sizesMobile="120x600"
//           />
//           {/* NetPub Ad Banner */}
//           <AdBanner
//             className="sticky top-20 mb-6"
//             adType="fixed"
//             adValue="5"
//             scriptId="ac89736c5f18f38e6ab658042a0defa4"
//             sizesDesktop="120x600"
//             sizesMobile="120x600"
//           />
//           {/* NetPub Ad Banner */}
//           <AdBanner
//             className="sticky top-20 mb-6"
//             adType="fixed"
//             adValue="5"
//             scriptId="ac89736c5f18f38e6ab658042a0defa4"
//             sizesDesktop="120x600"
//             sizesMobile="120x600"
//           />
//           {/* NetPub Ad Banner */}
//           <AdBanner
//             className="sticky top-20 mb-6"
//             adType="fixed"
//             adValue="5"
//             scriptId="ac89736c5f18f38e6ab658042a0defa4"
//             sizesDesktop="120x600"
//             sizesMobile="120x600"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleGrid;

import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";
import AdBanner from "@/components/ads/AdBanner";

const ArticleGrid = () => {
  const featuredArticles = articleData.slice(0, 6);
  const leftColumnArticles = articleData.slice(6, 15);
  const rightColumnArticles = articleData.slice(15, 17);
  const scriptId = "ac89736c5f18f38e6ab658042a0defa4";

  return (
    <div className="relative">
      {/* Notification Ad - Positioned at the bottom of the viewport */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <AdBanner
          className="mx-auto"
          adType="notification"
          adValue="5"
          scriptId={scriptId}
          sizesDesktop="120x600,160x600,300x600,336x280"
          sizesMobile="120x600,160x600,300x600,336x280"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12">
          {leftColumnArticles.map((article) => (
            <ArticleCard key={article.id} {...article} small />
          ))}
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Fixed 300x250 Ad at the top of the middle column */}
          <AdBanner
            className="mb-8"
            adType="fixed"
            adValue="6"
            scriptId={scriptId}
            sizesDesktop="200x200,250x250,300x250,336x280"
            sizesMobile="200x200,250x250,300x250,336x280"
          />

          {featuredArticles.map((article) => (
            <FeaturedArticle key={article.id} {...article} />
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-12">
          {rightColumnArticles.map((article) => (
            <ArticleCard key={article.id} {...article} small />
          ))}

          {/* Fixed 120x600 Ad in the right column */}
          <AdBanner
            className="sticky top-20 mb-6"
            adType="fixed"
            adValue="5"
            scriptId={scriptId}
            sizesDesktop="120x600"
            sizesMobile="120x600"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleGrid;
