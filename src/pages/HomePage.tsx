"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import NewsletterSection from "@/components/NewsletterSection";

const HomePage = () => {
  // Add the first Netpub Banner script dynamically
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.async = true;
    script1.src = `https://fstatic.netpub.media/static/ac89736c5f18f38e6ab658042a0defa4.min.js?${Date.now()}`;
    document.head.appendChild(script1);

    // Add the second Netpub Banner script dynamically
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.async = true;
    script2.src = `https://fstatic.netpub.media/static/ac89736c5f18f38e6ab658042a0defa4.min.js?${Date.now()}`;
    document.head.appendChild(script2);

    // Add the fourth Netpub Banner script dynamically
    const script4 = document.createElement("script");
    script4.type = "text/javascript";
    script4.async = true;
    script4.src = `https://fstatic.netpub.media/static/ac89736c5f18f38e6ab658042a0defa4.min.js?${Date.now()}`;
    document.head.appendChild(script4);

    // Add the GDPR script dynamically
    const gdprScript = document.createElement("script");
    gdprScript.type = "text/javascript";
    gdprScript.src = "https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js";
    gdprScript.defer = true;
    document.head.appendChild(gdprScript);

    // Cleanup function to remove the scripts if the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script4);
      document.head.removeChild(gdprScript);
    };
  }, []);

  return (
    <>
      <ScrollToTopButton />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow bg-white"
      >
        <HeroSection />

        {/* Add the first Netpub Banner <ins> element */}
        <ins
          className="adv-ac89736c5f18f38e6ab658042a0defa4"
          data-sizes-desktop="120x600"
          data-sizes-mobile="120x600"
          data-slot="1"
        ></ins>

        {/* Add the second Netpub Banner <ins> element */}
        <ins
          className="adv-ac89736c5f18f38e6ab658042a0defa4"
          data-sizes-desktop="120x600,160x600"
          data-sizes-mobile="120x600,160x600"
          data-slot="2"
        ></ins>

        <LatestInsightsSection />
        <CategoriesSection />

        {/* Add the fourth Netpub Banner <ins> element here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ins
            className="adv-ac89736c5f18f38e6ab658042a0defa4"
            data-sizes-desktop="200x200,250x250,300x250,336x280,400x350,468x60,640x480,700x300,728x500,728x90,970x90"
            data-sizes-mobile="200x200,250x250,300x250,300x50,320x100,320x50,336x280,360x100,360x50"
            data-slot="9"
          ></ins>
        </div>

        <NewsletterSection />
      </motion.main>
    </>
  );
};

export default HomePage;
