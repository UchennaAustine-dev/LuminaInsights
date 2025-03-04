// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Instagram, Twitter, MessageSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { motion, AnimatePresence } from "framer-motion";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubscribed(true);
//       setEmail("");
//       setError("");
//     }, 1000);
//   };

//   return (
//     <footer className="bg-black text-white py-16">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-semibold mb-2">
//             Unlock Exclusive Content,
//             <br />
//             Subscribe to Stay Connected!
//           </h2>
//           <AnimatePresence>
//             {!isSubscribed ? (
//               <motion.form
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="flex max-w-md mx-auto mt-6"
//                 onSubmit={handleSubmit}
//               >
//                 <Input
//                   type="email"
//                   placeholder="Enter email address..."
//                   className="rounded-r-none bg-transparent border-white"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Button
//                   type="submit"
//                   className="rounded-l-none bg-emerald-500 hover:bg-emerald-600"
//                 >
//                   Send Now
//                 </Button>
//               </motion.form>
//             ) : (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-emerald-400 mt-4"
//               >
//                 Thank you for subscribing!
//               </motion.p>
//             )}
//           </AnimatePresence>
//           {error && <p className="text-red-500 mt-2">{error}</p>}
//         </div>

//         <div className="flex justify-between items-center border-t border-gray-800 pt-6">
//           <div className="flex gap-4">
//             <a href="#" className="text-sm">
//               HOME
//             </a>
//             <a href="#" className="text-sm">
//               ABOUT
//             </a>
//             <a href="#" className="text-sm">
//               BLOGS
//             </a>
//             <a href="#" className="text-sm">
//               CONTACT
//             </a>
//           </div>
//           <div className="flex gap-4">
//             <Button variant="ghost" size="icon" className="text-white">
//               <Instagram className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="text-white">
//               <Twitter className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="text-white">
//               <MessageSquare className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="text-xs text-gray-500 mt-8">
//           <p>All Rights Reserved Copyright © 2023 - Traven</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lumina Insights</h3>
            <p className="text-gray-400 mb-4">
              Illuminating minds with bright ideas and insightful perspectives.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5 text-gray-900" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 text-gray-900" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5 text-gray-900" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-400 hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest insights
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-gray-800 border-gray-700 text-white"
              />
              <Button className="rounded-l-none bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Lumina Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
