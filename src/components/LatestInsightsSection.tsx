import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, TrendingUp, Star } from "lucide-react";
import ArticleGrid from "@/components/ArticleGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LatestInsightsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
          Fresh Content
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Latest Insights & Ideas
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover bright ideas, thought-provoking analyses, and insightful
          stories from our expert contributors
        </p>
      </div>

      <Tabs defaultValue="latest" className="mt-8">
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

        <TabsContent value="latest" className="mt-8">
          <ArticleGrid />
        </TabsContent>
        <TabsContent value="trending" className="mt-8">
          <ArticleGrid />
        </TabsContent>
        <TabsContent value="featured" className="mt-8">
          <ArticleGrid />
        </TabsContent>
      </Tabs>

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
    </section>
  );
};

export default LatestInsightsSection;
