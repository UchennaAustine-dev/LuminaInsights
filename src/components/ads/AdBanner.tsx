"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  className?: string;
  slot: string;
  sizesDesktop?: string;
  sizesMobile?: string;
  scriptId: string;
}

const AdBanner = ({
  className = "",
  slot,
  sizesDesktop = "120x600,160x600,200x200,250x250,300x250,300x600,336x280",
  sizesMobile = "160x600,200x200,250x250,300x250,300x600,336x280",
  scriptId,
}: AdBannerProps) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    try {
      const existingScript = document.getElementById(
        `netpub-script-${scriptId}`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = `netpub-script-${scriptId}`;
        script.type = "text/javascript";
        script.async = true;
        script.src = `https://fstatic.netpub.media/static/${scriptId}.min.js?${Date.now()}`;

        script.onload = () => {
          console.log(`NetPub ad script ${scriptId} loaded successfully`);
          scriptLoaded.current = true;
        };

        script.onerror = (error) => {
          console.error(`Error loading NetPub ad script ${scriptId}:`, error);
        };

        document.head.appendChild(script);
      } else {
        scriptLoaded.current = true;
      }
    } catch (error) {
      console.error(`Error setting up NetPub ad script ${scriptId}:`, error);
    }

    return () => {
      // We don't remove the script on unmount as other components might be using it
      scriptLoaded.current = false;
    };
  }, [scriptId]);

  return (
    <div className={`ad-container ${className}`}>
      <div className="text-xs text-center text-gray-500 mb-2">
        Advertisement
      </div>
      <ins
        className={`adv-${scriptId} block mx-auto`}
        data-sizes-desktop={sizesDesktop}
        data-sizes-mobile={sizesMobile}
        data-slot={slot}
      ></ins>
    </div>
  );
};

export default AdBanner;
