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
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
        >
          Lumina Insights
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            to="/categories"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-md mx-4"
        >
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none flex-1"
            aria-label="Search articles"
          />
          <Button
            type="submit"
            className="rounded-l-none"
            aria-label="Submit search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation and Search Bar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-2 px-4 py-2">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                to="/categories"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="px-4 py-2">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none flex-1"
                  aria-label="Search articles"
                />
                <Button
                  type="submit"
                  className="rounded-l-none"
                  aria-label="Submit search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

// "use client"
// import NotchHeader from "./NotchHeader"

// const Header = () => {
//   return <NotchHeader />
// }

// export default Header
