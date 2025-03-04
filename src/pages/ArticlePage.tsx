// "use client";

// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { articleData } from "@/data/articleData";

// const ArticlePage = () => {
//   const { id } = useParams<{ id: string }>();
//   const [article, setArticle] = useState<any>(null);

//   useEffect(() => {
//     // Simulate API call
//     const fetchedArticle = articleData.find((a) => a.id === id);
//     setArticle(fetchedArticle);
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex-grow bg-white"
//     >
//       <div className="max-w-3xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
//         <img
//           src={article.image || "/placeholder.svg"}
//           alt={article.title}
//           className="w-full h-64 object-cover mb-4"
//         />
//         <p className="text-gray-600 mb-8">{article.content}</p>
//       </div>
//     </motion.main>
//   );
// };

// export default ArticlePage;
"use client";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { articleData, popularPosts, categories } from "@/data/articleData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TableOfContents from "@/components/TableOfContents";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchedArticle = articleData.find((a) => a.id === id);
    setArticle(fetchedArticle);
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <div className="relative min-h-[40vh] md:h-[60vh] w-full">
        <img
          src={article.heroImage || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <p className="text-xs sm:text-sm mb-2 md:mb-4">
              By {article.author.name} • {article.date}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <TableOfContents chapters={article.chapters} />

            {/* Author Card */}
            <div className="bg-muted p-4 md:p-6 rounded-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={article.author.avatar || "/avatar.svg"}
                  alt={article.author.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                />
                <div>
                  <h3 className="text-sm md:text-base font-semibold">
                    {article.author.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                {article.author.bio}
              </p>
            </div>

            {/* Popular Posts */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-semibold text-lg md:text-xl">
                Popular Posts
              </h3>
              {popularPosts.map((post) => (
                <div key={post.id} className="flex gap-3 md:gap-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <span className="text-xs text-emerald-600">
                      {post.category}
                    </span>
                    <h4 className="text-sm md:text-base font-medium">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-semibold text-lg md:text-xl">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex justify-between items-center text-sm md:text-base"
                  >
                    <span>{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-muted p-4 md:p-6 rounded-lg">
              <h3 className="font-semibold text-lg md:text-xl mb-2">
                Subscribe
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Sign up to our newsletter to receive our latest news and
                updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Email address..."
                  className="flex-1 text-sm md:text-base"
                />
                <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600">
                  Send
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-2">
            {article.chapters.map((chapter: any, index: number) => (
              <div
                key={index}
                id={`chapter-${index + 1}`}
                className="mb-8 md:mb-12"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  Chapter {index + 1}: {chapter.title}
                </h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {chapter.content}
                </p>
                {chapter.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {chapter.images.map((image: string, imgIndex: number) => (
                      <img
                        key={imgIndex}
                        src={image || "/placeholder.svg"}
                        alt={`${chapter.title} illustration ${imgIndex + 1}`}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Comments Section */}
            <div className="mt-8 md:mt-12 border-t pt-6 md:pt-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {article.comments.length} Comment
              </h3>
              {article.comments.map((comment: any) => (
                <div
                  key={comment.id}
                  className="flex gap-3 md:gap-4 mb-4 md:mb-6"
                >
                  <img
                    src={comment.user.avatar || "/avatar.svg"}
                    alt={comment.user.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm md:text-base font-semibold">
                        {comment.user.name}
                      </h4>
                      <span className="text-xs md:text-sm text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Comment Form */}
              <div className="mt-6 md:mt-8">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  Leave A Comment
                </h3>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="mb-3 md:mb-4 text-sm md:text-base"
                  rows={4}
                />
                <Button className="w-full md:w-auto">Post Comment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlePage;
