import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

function ThemeLogo() {
  return (
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
  );
}

export default ThemeLogo;
