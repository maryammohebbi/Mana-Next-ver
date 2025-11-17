import Image from "next/image";
import React from "react";

function Divider() {
  return (
    <div className="flex items-center justify-center h-4 w-[200px] sm:w-[300px] lg:w-[500px] relative mx-auto my-20">
      <Image
        src="/images/divider1.png"
        fill
        alt="divider"
        className="object-cover"
      />
    </div>
  );
}

export default Divider;
