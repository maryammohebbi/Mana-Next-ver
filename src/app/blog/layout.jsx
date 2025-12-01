import ThemeLogo from "@/ui/ThemeLogo";
import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <div className="w-full h-20 mb-10 bg-tertiary">
        <div
          className="flex justify-between items-center w-full h-full
                      max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto p-2"
        >
          <div>
            <Link
              href={`/`}
              className="text-secondary px-3 py-1 rounded-xl font-bold transition-all duration-500 hover:bg-quaternary"
            >
              خانه
            </Link>
          </div>
          <ThemeLogo />
        </div>
      </div>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}

export default layout;
