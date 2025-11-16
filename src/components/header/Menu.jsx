import React, { useState } from "react";

function Menu() {
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
    <div className="flex">
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

      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <span className=""></span>
    </div>
  );
}

export default Menu;
