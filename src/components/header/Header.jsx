import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="h-16 w-full bg-pink-100 mb-10">
      <div className="flex justify-between w-full h-full max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto p-2">
        <div className="w-56 h-[90%] bg-green-100"> M E N U</div>
        <div className="h-[90%] flex items-center justify-center">
          <Image src="/images/logo.png" width={120} height={70} alt="ohm" />
        </div>
      </div>
    </div>
  );
}

export default Header;
