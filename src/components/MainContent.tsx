import ArticleGrid from "@/components/ArticleGrid";
import Pagination from "@/components/Pagination";
import CategoriesSection from "@/components/CategoriesSection";
// import Navigation from "@/components/Navigation";

const MainContent = () => {
  return (
    <main className="flex-grow ">
      <div className="max-w-7xl mx-auto p-6">
        <ArticleGrid />
        <Pagination />
        <CategoriesSection />
      </div>
      {/* <Navigation /> */}
    </main>
  );
};

export default MainContent;
