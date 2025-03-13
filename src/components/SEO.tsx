import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  articleTags?: string[];
}

const SEO = ({
  title,
  description,
  keywords,
  author = "Lumina Insights",
  image = "/og-image.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  articleTags,
}: SEOProps) => {
  const siteUrl = "https://www.luminaexplore.site"; // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = `${title} | Lumina Insights`;

    // Function to create or update a meta tag
    const setMetaTag = (name: string, content: string, property?: string) => {
      // First, try to find an existing tag
      let meta = property
        ? document.querySelector(`meta[property="${property}"]`)
        : document.querySelector(`meta[name="${name}"]`);

      // If the tag doesn't exist, create it
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", property);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      // Set the content
      meta.setAttribute("content", content);
    };

    // Function to create or update a link tag
    const setLinkTag = (rel: string, href: string) => {
      // First, try to find an existing tag
      let link = document.querySelector(`link[rel="${rel}"]`);

      // If the tag doesn't exist, create it
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }

      // Set the href
      link.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);
    setMetaTag("author", author);

    // Canonical URL
    setLinkTag("canonical", fullUrl);

    // Open Graph / Facebook
    setMetaTag("og:type", type, "og:type");
    setMetaTag("og:url", fullUrl, "og:url");
    setMetaTag("og:title", title, "og:title");
    setMetaTag("og:description", description, "og:description");
    setMetaTag("og:image", fullImage, "og:image");
    setMetaTag("og:site_name", "Lumina Insights", "og:site_name");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", "twitter:card");
    setMetaTag("twitter:url", fullUrl, "twitter:url");
    setMetaTag("twitter:title", title, "twitter:title");
    setMetaTag("twitter:description", description, "twitter:description");
    setMetaTag("twitter:image", fullImage, "twitter:image");

    // Article Specific Meta Tags
    if (type === "article" && publishedTime) {
      setMetaTag(
        "article:published_time",
        publishedTime,
        "article:published_time"
      );
    }
    if (type === "article" && modifiedTime) {
      setMetaTag(
        "article:modified_time",
        modifiedTime,
        "article:modified_time"
      );
    }
    if (type === "article" && articleTags) {
      // Remove any existing article tags
      document
        .querySelectorAll('meta[property="article:tag"]')
        .forEach((tag) => {
          document.head.removeChild(tag);
        });

      // Add new article tags
      articleTags.forEach((tag) => {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("property", "article:tag");
        metaTag.setAttribute("content", tag);
        document.head.appendChild(metaTag);
      });
    }

    // JSON-LD Structured Data
    const structuredData =
      type === "article"
        ? {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: fullImage,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: "Lumina Insights",
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/logo.png`,
              },
            },
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": fullUrl,
            },
          }
        : {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Lumina Insights",
            url: siteUrl,
            description: description,
          };

    // Remove any existing JSON-LD script
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    // Add new JSON-LD script
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove article tags and JSON-LD when component unmounts
    return () => {
      if (type === "article" && articleTags) {
        document
          .querySelectorAll('meta[property="article:tag"]')
          .forEach((tag) => {
            document.head.removeChild(tag);
          });
      }

      const scriptToRemove = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [
    title,
    description,
    keywords,
    author,
    image,
    url,
    type,
    publishedTime,
    modifiedTime,
    articleTags,
    fullUrl,
    fullImage,
  ]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
