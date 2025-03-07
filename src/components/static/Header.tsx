// "use client";

// import type React from "react";

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { ArrowLeft, ArrowRight, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//   };

//   return (
//     <header className=" text-black bg-amber-600 py-8 px-4 relative">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <Link to="/" className="text-2xl font-bold italic text-amber-950 ">
//             Traven
//           </Link>
//           <form onSubmit={handleSearch} className="flex">
//             <Input
//               type="search"
//               placeholder="Search articles..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="rounded-r-none bg-white text-black"
//             />
//             <Button type="submit" className="rounded-l-none">
//               <Search className="h-4 w-4" />
//             </Button>
//           </form>
//         </div>
//         <div className="text-center space-y-2">
//           <p className="text-sm">By Maria • 14 January 2023</p>
//           <h1 className="text-3xl md:text-4xl font-semibold">
//             Sustainable Living: Eco-Friendly Practices
//             <br />
//             for Your Daily Routine
//           </h1>
//         </div>
//       </div>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="text-black border border-black absolute left-6 top-1/2 -translate-y-1/2"
//       >
//         <ArrowLeft className="h-5 w-5" />
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="text-black absolute right-6 top-1/2 -translate-y-1/2 border-2 border-black"
//       >
//         <ArrowRight className="h-5 w-5" />
//       </Button>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import HomeNav from "@/components/nav/HomeNav";
import CategoriesNav from "@/components/nav/CategoriesNav";
import AboutNav from "@/components/nav/AboutNav";
import ContactNav from "@/components/nav/ContactNav";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.reload();
    navigate("/");
  };

  // Custom event listener for sheet close events from category links
  useEffect(() => {
    const handleSheetClose = () => {
      closeMobileMenu();
    };
    document.addEventListener("sheet-close", handleSheetClose);
    return () => document.removeEventListener("sheet-close", handleSheetClose);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background"
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-primary"
            onClick={handleLogoClick}
          >
            Lumina Insights
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <HomeNav />
            <CategoriesNav />
            <AboutNav />
            <ContactNav />
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:inline-flex"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden md:inline-flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={toggleMobileMenu}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <SheetClose asChild>
                    <HomeNav />
                  </SheetClose>
                  <CategoriesNav />
                  <SheetClose asChild>
                    <AboutNav />
                  </SheetClose>
                  <SheetClose asChild>
                    <ContactNav />
                  </SheetClose>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      closeMobileMenu();
                    }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(!isSearchOpen);
                      closeMobileMenu();
                    }}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-background p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault(); /* Handle search */
              setIsSearchOpen(false);
            }}
          >
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full"
              autoFocus
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
