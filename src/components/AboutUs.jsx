import Title from "@/ui/Title";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div>
      <Title title="درباره ما" />
      <div className="flex border border-secondary w-full h-auto lg:h-[200px]">
        <div className="w-[700px] bg-white items-center justify-center hidden lg:flex">
          <Image
            src="/images/logo.png"
            width={500}
            height={500}
            className="w-52 h-24"
          />
        </div>
        <div className="p-5 flex items-center justify-center">
          <p className="text-secondary text-center">
            شرکت اندیشه هوشمند مانا، یکی از شرکت‌های دانش‌بنیان معتبر و مورد
            تایید سامانه ارزیابی صلاحیت شرکت‌های دانش‌بنیان است. این شرکت در
            کارگروه اطلاعات مکانی وزارت نیرو عضو بوده و همچنین در سندیکای
            شرکت‌های شناسایی و مکانیابی رادیویی کشور عضویت دارد. اندیشه هوشمند
            مانا با مشارکت در پروژه‌های مختلف، به ارائه خدمات نوین در حوزه
            فناوری اطلاعات و ارتباطات پرداخته و در تولید نرم‌افزار، خدمات
            مشاوره‌ای و پیمانکاری فعالیت می‌کند. هدف این شرکت ارتقای سطح فناوری
            و ارائه راهکارهای کارآمد به سازمان‌ها و صنایع مختلف است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
