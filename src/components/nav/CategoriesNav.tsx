"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const categories = [
  { name: "Technology", slug: "technology" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Health", slug: "health" },
  { name: "Travel", slug: "travel" },
];

const CategoriesNav = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".categories-nav-container") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleCategoryClick = () => {
    setIsOpen(false);
    // Dispatch custom event to close the sheet in mobile view
    document.dispatchEvent(new Event("sheet-close"));
  };

  return (
    <div className={`categories-nav-container ${className || ""}`}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="group relative"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between gap-2 data-[state=open]:bg-accent"
          >
            <span>Categories</span>
            {isOpen ? (
              <ChevronUp className="h-4 w-4 transition-transform" />
            ) : (
              <ChevronDown className="h-4 w-4 transition-transform" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down md:absolute md:bg-background md:min-w-32 md:shadow-md md:rounded-md md:p-2 md:border">
          <div className="flex flex-col gap-2 pl-4 mt-2 md:pl-2 md:mt-0">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="text-sm hover:text-primary transition-colors py-1"
                onClick={handleCategoryClick}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CategoriesNav;
