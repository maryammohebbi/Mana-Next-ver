import Title from "@/ui/Title";
import Image from "next/image";
import React from "react";

function Honors() {
  return (
    <div id="honors">
      <Title title="افتخارات" />
      <div className="flex flex-1 w-full justify-center flex-wrap gap-8 mx-auto p-2 text-secondary">
        <div className="w-[500px] flex flex-col items-center justify-center gap-y-5 bg-tertiary p-5 rounded-2xl">
          <Image
            src="/images/sandiky.png"
            width={400}
            height={100}
            alt="سندیکای"
            className="w-[450px] h-[200px] object-contain"
          />
          <p className="text-xs lg:text-sm text-center">
            عضو سندیکای شرکت‌های شناسایی و مکانیابی رادیویی کشور شرکت ما عضو
            سندیکای شرکت‌های شناسایی و مکانیابی رادیویی کشور است که ...
          </p>
        </div>
        <div className="w-[500px] flex flex-col items-center justify-center gap-y-5 bg-tertiary p-5 rounded-2xl">
          <Image
            src="/images/kargozarVezaratNiro.jpg"
            width={400}
            height={100}
            alt="کارگزار وزارت نیرو"
            className="w-[450px] h-[200px] object-contain"
          />
          <p className="text-xs lg:text-sm text-center">
            عضو کارگروه اطلاعات مکانی وزارت نیرو شرکت ما جز عضو کار گروه اطلاعات
            مکانی وزارت نیرو است. این همکاری برای ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Honors;
