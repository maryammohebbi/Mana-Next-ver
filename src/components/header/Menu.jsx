"use client";
import { useState } from "react";
import useActiveSection from "@/hooks/useActiveSection";

function Menu({ mobile = false, onClose }) {
  const sectionIds = [
    "experience",
    "whyus",
    "service",
    "aboutus",
    "knowledge",
    "honors",
    // "contactus",
  ];

  const active = useActiveSection(sectionIds);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (mobile && onClose) onClose(); // close after click
  };

  return (
    <div
      className={`
        flex items-center 
        ${mobile ? "flex-col gap-3" : "gap-4"}
      `}
    >
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`px-3 py-1 rounded-md transition cursor-pointer
            ${
              active === id
                ? "bg-quaternary text-secondary border rounded-2xl"
                : "text-secondary"
            }`}
        >
          {id === "experience" && "سوابق ما"}
          {id === "whyus" && "چرا ما؟"}
          {id === "service" && "فعالیت ها"}
          {id === "aboutus" && "درباره ما"}
          {id === "knowledge" && "دانش بنیان"}
          {id === "honors" && "افتخارات"}
          {/* {id === "contactus" && "تماس با ما"} */}
        </button>
      ))}
    </div>
  );
}

export default Menu;
