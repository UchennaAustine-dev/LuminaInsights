"use client";

import { useEffect } from "react";

interface ScriptLoaderProps {
  src: string;
  defer?: boolean;
  async?: boolean;
  id?: string;
}

const ScriptLoader = ({
  src,
  defer = false,
  async = false,
  id,
}: ScriptLoaderProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = defer;
    script.async = async;
    if (id) script.id = id;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [src, defer, async, id]);

  return null;
};

export default ScriptLoader;
