"use client";
import { useState } from "react";
import useActiveSection from "@/hooks/useActiveSection";

function Menu() {
  const sectionIds = [
    "experience",
    "certificate",
    "service",
    "aboutus",
    "whyus",
    "contactus",
  ];

  const active = useActiveSection(sectionIds);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-4 items-center ">
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`px-3 py-1 rounded-md transition cursor-pointer
            ${
              active === id
                ? "bg-tertiary text-secondary border rounded-2xl"
                : "text-secondary"
            }`}
        >
          {id === "experience" && "سوابق ما"}
          {id === "certificate" && "گواهینامه ها"}
          {id === "service" && "فعالیت ها"}
          {id === "aboutus" && "درباره ما"}
          {id === "whyus" && "چرا ما؟"}
          {id === "contactus" && "تماس با ما"}
        </button>
      ))}
    </div>
  );
}

export default Menu;
