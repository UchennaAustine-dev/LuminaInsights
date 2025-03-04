"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface TableOfContentsProps {
  chapters: { title: string }[];
}

const TableOfContents = ({ chapters }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    chapters.forEach((_, index) => {
      // Remove 'chapter' and use '_' as a placeholder
      const element = document.getElementById(`chapter-${index + 1}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav className="sticky top-4">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {chapters.map((chapter, index) => (
          <li key={index}>
            <Link
              to={`chapter-${index + 1}`}
              smooth={true}
              duration={500}
              offset={-100}
              className={`cursor-pointer text-sm ${
                activeSection === `chapter-${index + 1}`
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
