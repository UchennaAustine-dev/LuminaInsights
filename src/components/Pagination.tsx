import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 my-8">
      <span className="text-xl font-semibold">01</span>
      <span className="text-xl">|</span>
      <span className="text-xl font-semibold">02</span>
      <Button variant="ghost" size="icon">
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Pagination;
