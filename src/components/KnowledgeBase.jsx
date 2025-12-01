import Title from "@/ui/Title";
import Image from "next/image";
import React from "react";

function KnowledgeBase() {
  return (
    <div id="knowledge" className="scroll-mt-28">
      <Title title="دانش بنیان" />
      <div className="flex border border-secondary w-full h-auto lg:h-[200px] rounded-md">
        <div className="p-5 flex items-center justify-center">
          <p className="text-secondary text-justify">
            شرکت اندیشه هوشمند مانا با تکیه بر توان تخصصی، رویکرد نوآورانه و
            فعالیت‌های مبتنی بر تحقیق و توسعه، در زمره شرکت‌های دانش‌بنیان مورد
            تأیید سامانه ارزیابی صلاحیت شرکت‌های دانش‌بنیان قرار گرفته است. این
            تأیید نشان‌دهنده برخورداری شرکت از ظرفیت‌های علمی، فنی و اجرایی لازم
            برای ارائه محصولات و خدمات فناورانه است. همچنین، کسب این جایگاه
            بیانگر آن است که شرکت اندیشه هوشمند مانا توانسته معیارهای سخت‌گیرانه
            این سامانه را در حوزه نوآوری، کیفیت، دانش فنی و قابلیت تجاری‌سازی
            فناوری با موفقیت پشت سر بگذارد. به واسطه این تأییدیه، شرکت می‌تواند
            نقش مؤثرتری در توسعه فناوری، ارتقای بهره‌وری و ارائه راهکارهای
            هوشمند در سطح ملی ایفا کند.
          </p>
        </div>
        <div className="w-[700px] bg-white items-center justify-center hidden lg:flex rounded-tl-md rounded-bl-md">
          <Image
            src="/images/knowledge.png"
            width={500}
            height={500}
            className="w-24 h-24"
            alt="ohm"
          />
        </div>
      </div>
    </div>
  );
}

export default KnowledgeBase;
