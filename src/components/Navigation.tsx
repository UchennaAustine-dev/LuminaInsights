import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="border-t border-gray-200 py-4">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Traven</h3>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm">
            HOME
          </a>
          <a href="#" className="text-sm">
            ABOUT
          </a>
          <a href="#" className="text-sm">
            PAGES
          </a>
          <a href="#" className="text-sm">
            BLOG
          </a>
          <a href="#" className="text-sm">
            CONTACT
          </a>
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
