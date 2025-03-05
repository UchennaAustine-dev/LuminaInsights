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

import type React from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Lumina Insights
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/categories" className="text-gray-600 hover:text-gray-900">
            Categories
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <form onSubmit={handleSearch} className="flex">
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
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
