"use client";

import ThemeToggle from "@/ui/ThemeToggle";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState(3);
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-24 w-full bg-tertiary mb-10 shadow-lg sticky">
      <div className="flex justify-between w-full h-full max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto p-2">
        <div className="w-96 h-[90%] bg-primary">
          <div className={``}>
            <div>
              <input
                type="radio"
                id="radio-1"
                name="tabs"
                checked={activeTab === 1}
                onChange={() => handleTabChange(1)}
              />
              <label
                className="tab"
                htmlFor="radio-1"
                onClick={() => scrollToSection("aboutUsTitle")}
              >
                درباره ما
              </label>
            </div>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabChange(2)}
            />
            <label
              className="tab"
              htmlFor="radio-2"
              onClick={() => scrollToSection("activityTitr")}
            >
              فعالیت ها
            </label>
            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 3}
              onChange={() => handleTabChange(3)}
            />
            <label
              className="tab"
              htmlFor="radio-3"
              onClick={() => scrollToSection("experienceTitle")}
            >
              سوابق ما
            </label>
            <input
              type="radio"
              id="radio-4"
              name="tabs"
              checked={activeTab === 4}
              onChange={() => handleTabChange(4)}
            />
            <label
              className="tab"
              htmlFor="radio-4"
              onClick={() => scrollToSection("experienceTitle")}
            >
              تماس با ما
            </label>
            <span className=""></span>
          </div>
        </div>
        <div className="h-[90%] flex items-center justify-center gap-x-5">
          <ThemeToggle />
          <Image
            src="/images/ohm.png"
            width={1000}
            height={1000}
            alt="ohm"
            className="w-11 h-11"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
