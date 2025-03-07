"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: hasScrolled ? 1 : 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
      </Button>
    </motion.div>
  );
};

export default ScrollToTopButton;
