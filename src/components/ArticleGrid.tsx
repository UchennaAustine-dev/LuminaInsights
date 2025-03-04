// import ArticleCard from "@/components/ArticleCard";
// import FeaturedArticle from "./FeaturedArticle";

// const ArticleGrid = () => {
//   // Data for ArticleCards
//   const leftColumnArticles = [
//     { title: "Memoirs of a Wanderer: Navigating Life's Pathways" },
//     { title: "A Look at the Most Iconic Scenes in Television History" },
//     {
//       title:
//         "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
//     },
//     { title: "Work-Life Balance: Tips for Managing Your Time and Energy" },
//     { title: "Travel on a Budget: Affordable Destinations and Tips" },
//     { title: "Friends of Mental: Effective Workouts Without a Gym" },
//     { title: "The Art of Self-Care: Prioritizing Your Well-Being" },
//   ];

//   const rightColumnArticles = [
//     { title: "The Art of Plating: Making Meals Look as Good as They Taste" },
//     { title: "Iconic Celebrity Collaborations in Music and Film" },
//     { title: "Cooking at Home: Delicious and Nutritious Recipes" },
//     { title: "Digital Detox: Reclaiming Your Time from Technology" },
//     { title: "Fashion Essentials: Building a Timeless Wardrobe" },
//     { title: "Productivity Hacks: Boost Your Efficiency and Achieve More" },
//     { title: "Vintage Vibes: Bringing Retro Fashion into Modern Times" },
//   ];

//   // Data for FeaturedArticles
//   const featuredArticles = [
//     {
//       title:
//         "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 December 2023",
//     },
//     {
//       title: "The Evolution of Cinema: From Silent Films to Streaming Giants",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//     {
//       title: "Exploring New Hobbies: Finding Passion and Creativity",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//     {
//       title: "Productivity Hacks: Boost Your Efficiency and Achieve More",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 w-full px-4 sm:px-6 lg:px-8">
//       {/* Left Column */}
//       <div className="space-y-4">
//         {leftColumnArticles.map((article, index) => (
//           <ArticleCard
//             key={index}
//             image="/placeholder.svg?height=200&width=300"
//             title={article.title}
//             small
//           />
//         ))}
//       </div>

//       {/* Middle Column */}
//       <div className="md:col-span-2 space-y-6">
//         {featuredArticles.map((article, index) => (
//           <FeaturedArticle
//             key={index}
//             image="/placeholder.svg?height=400&width=600"
//             title={article.title}
//             description={article.description}
//             author={article.author}
//             date={article.date}
//           />
//         ))}
//       </div>

//       {/* Right Column */}
//       <div className="space-y-4 bg-amber-700 p-4 rounded-lg">
//         {rightColumnArticles.map((article, index) => (
//           <ArticleCard
//             key={index}
//             image="/placeholder.svg?height=200&width=300"
//             title={article.title}
//             small
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleGrid;
// import ArticleCard from "@/components/ArticleCard";
// import FeaturedArticle from "./FeaturedArticle";

// const ArticleGrid = () => {
//   // Data for ArticleCards
//   const leftColumnArticles = [
//     {
//       image: "https://picsum.photos/300/200?random=1",
//       title: "Memoirs of a Wanderer: Navigating Life's Pathways",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=2",
//       title: "A Look at the Most Iconic Scenes in Television History",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=3",
//       title:
//         "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=4",
//       title: "Work-Life Balance: Tips for Managing Your Time and Energy",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=5",
//       title: "Travel on a Budget: Affordable Destinations and Tips",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=6",
//       title: "Friends of Mental: Effective Workouts Without a Gym",
//     },
//     {
//       image: "https://picsum.photos/300/200?random=7",
//       title: "The Art of Self-Care: Prioritizing Your Well-Being",
//     },
//   ];

//   const rightColumnArticles = [
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=1",
//       title: "The Art of Plating: Making Meals Look as Good as They Taste",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=2",
//       title: "Iconic Celebrity Collaborations in Music and Film",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=3",
//       title: "Cooking at Home: Delicious and Nutritious Recipes",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=4",
//       title: "Digital Detox: Reclaiming Your Time from Technology",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=5",
//       title: "Fashion Essentials: Building a Timeless Wardrobe",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=6",
//       title: "Productivity Hacks: Boost Your Efficiency and Achieve More",
//     },
//     {
//       image: "https://source.unsplash.com/random/300x200?sig=7",
//       title: "Vintage Vibes: Bringing Retro Fashion into Modern Times",
//     },
//   ];

//   // Data for FeaturedArticles
//   const featuredArticles = [
//     {
//       image: "https://via.placeholder.com/600x400.png?text=Sustainable+Living",
//       title:
//         "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 December 2023",
//     },
//     {
//       image: "https://via.placeholder.com/600x400.png?text=Cinema+Evolution",
//       title: "The Evolution of Cinema: From Silent Films to Streaming Giants",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//     {
//       image: "https://via.placeholder.com/600x400.png?text=New+Hobbies",
//       title: "Exploring New Hobbies: Finding Passion and Creativity",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//     {
//       image: "https://via.placeholder.com/600x400.png?text=Productivity+Hacks",
//       title: "Productivity Hacks: Boost Your Efficiency and Achieve More",
//       description:
//         "At the heart of every great fashion collection is a touch of creativity. This chapter focuses on the inspiration and creative stages of fashion design.",
//       author: "Maria",
//       date: "14 January 2024",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 w-full px-4 sm:px-6 lg:px-8">
//       {/* Left Column */}
//       <div className="space-y-4">
//         {leftColumnArticles.map((article, index) => (
//           <ArticleCard
//             key={index}
//             // image={article.image}
//             title={article.title}
//             // small
//           />
//         ))}
//       </div>

//       {/* Middle Column */}
//       <div className="md:col-span-2 space-y-6">
//         {featuredArticles.map((article, index) => (
//           <FeaturedArticle
//             key={index}
//             image={article.image}
//             title={article.title}
//             description={article.description}
//             author={article.author}
//             date={article.date}
//           />
//         ))}
//       </div>

//       {/* Right Column */}
//       <div className="space-y-4 bg-amber-700 p-4 rounded-lg">
//         {rightColumnArticles.map((article, index) => (
//           <ArticleCard
//             key={index}
//             // image={article.image}
//             title={article.title}
//             // small
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleGrid;
import { articleData } from "@/data/articleData";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";

const ArticleGrid = () => {
  const featuredArticles = articleData.slice(0, 4); // Reduced to 2 featured articles
  const leftColumnArticles = articleData.slice(4, 10);
  const rightColumnArticles = articleData.slice(10, 17);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
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
      <div className="lg:col-span-2 space-y-6">
        {rightColumnArticles.map((article) => (
          <ArticleCard key={article.id} {...article} small />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
