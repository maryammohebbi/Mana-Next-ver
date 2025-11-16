import ThemeToggle from "@/ui/ThemeToggle";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="h-24 w-full bg-tertiary mb-10 shadow-lg">
      <div className="flex justify-between w-full h-full max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto p-2">
        <div className="w-64 h-[90%] bg-primary"> M E N U</div>
        <ThemeToggle />
        <div className="h-[90%] flex items-center justify-center">
          <Image
            src="/images/logo.png"
            width={1000}
            height={1000}
            alt="ohm"
            className="w-32 h-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
