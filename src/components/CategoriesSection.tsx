import CategoryCard from "@/components/CategoryCard";
import beauty from "@/assets/beau.webp";
import technology from "@/assets/entert.webp";
import lifestyle from "@/assets/life.webp";
import fashion from "@/assets/fash.webp";
const CategoriesSection = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Explore Exciting Popular
        <br />
        Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CategoryCard title="Beauty" image={beauty} />
        <CategoryCard title="Technology" image={technology} />
        <CategoryCard title="Lifestyle" image={lifestyle} />
        <CategoryCard title="Fashion" image={fashion} />
      </div>
    </div>
  );
};

export default CategoriesSection;
