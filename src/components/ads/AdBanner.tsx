"use client";

import { useEffect, useRef } from "react";
import analyticsService from "@/services/analyticsService";

interface AdBannerProps {
  className?: string;
  sizesDesktop?: string;
  sizesMobile?: string;
  scriptId: string;
  adType?:
    | "slot"
    | "fixed"
    | "notification"
    | "sticky"
    | "interstitial"
    | "parallax";
  adValue: string;
}

const AdBanner = ({
  className = "",
  sizesDesktop = "120x600,160x600,200x200,250x250,300x250,300x600,336x280",
  sizesMobile = "160x600,200x200,250x250,300x250,300x600,336x280",
  scriptId,
  adType = "slot",
  adValue,
}: AdBannerProps) => {
  const scriptLoaded = useRef(false);
  const adId = `${scriptId}-${adValue}`;
  const adPosition = useRef("");

  // Determine ad position based on its location in the viewport
  const determineAdPosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight / 3) return "top";
    if (rect.top < (windowHeight * 2) / 3) return "middle";
    return "bottom";
  };

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

          // Initialize analytics tracking for this ad
          setTimeout(() => {
            const adElement = document.querySelector(
              `.adv-${scriptId}[data-${adType}="${adValue}"]`
            );
            if (adElement) {
              const position = determineAdPosition(adElement as HTMLElement);
              adPosition.current = position;

              // Set data attributes for analytics tracking
              adElement.setAttribute("data-ad-id", adId);
              adElement.setAttribute("data-ad-type", adType);
              adElement.setAttribute("data-ad-position", position);

              // Add click tracking
              adElement.addEventListener("click", () => {
                analyticsService.trackAdClick(adId, adType, position);
              });
            }
          }, 1000);
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
  }, [scriptId, adType, adValue, adId]);

  // Determine which data attribute to use based on adType
  const getAdTypeAttribute = () => {
    switch (adType) {
      case "fixed":
        return { "data-fixed": adValue };
      case "notification":
        return { "data-notification": adValue };
      case "sticky":
        return { "data-sticky": adValue };
      case "interstitial":
        return { "data-interstitial": adValue };
      case "parallax":
        return { "data-parallax": adValue };
      case "slot":
      default:
        return { "data-slot": adValue };
    }
  };

  return (
    <div className={`ad-container ${className}`}>
      <div className="text-xs text-center text-gray-500 mb-2">
        Advertisement
      </div>
      <ins
        className={`adv-${scriptId} block mx-auto`}
        data-sizes-desktop={sizesDesktop}
        data-sizes-mobile={sizesMobile}
        {...getAdTypeAttribute()}
      ></ins>
    </div>
  );
};

export default AdBanner;
