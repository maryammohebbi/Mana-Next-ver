import Title from "@/ui/Title";
import Image from "next/image";
import React from "react";

function Diagram() {
  return (
    <div>
      <Title title="روند نمای تعداد دفاتر شرکت های کارفرمایی دستگاه های دولتی همکار با شرکت اندیشه هوشمند مانا" />
      <div className="flex items-center justify-center p-2">
        <Image
          src="/images/chart.png"
          width={1000}
          height={1000}
          className="w-[500px] h-[400px]"
        />
      </div>
    </div>
  );
}

export default Diagram;
