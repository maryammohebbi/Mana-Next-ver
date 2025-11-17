"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]); // default to first

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 150) {
        setActive(sectionIds[0]); // force first item active at top
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      observer.disconnect();
    };
  }, [sectionIds]);

  return active;
}
