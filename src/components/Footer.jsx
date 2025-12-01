import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div
      id="contactus"
      className="w-full bg-tertiary shadow-lg bottom-0 left-0 right-0 p-5 space-y-8"
    >
      <Image
        src="/images/logo.png"
        width={500}
        height={500}
        alt="ohm"
        className="w-40 h-20 mx-auto"
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h3 className="text-secondary font-bold text-xl">اطلاعات تماس</h3>
        <div className="flex gap-x-2">
          <span className="text-secondary font-bold">آدرس:</span>
          <p className="text-secondary">
            تهران - اتوبان رسالت - مجیدیه شمالی – خیابان شهید منصوری - کوچه حسن
            روحانی – پلاک 2 – واحد 2
          </p>
        </div>
        <div className="flex gap-x-2">
          <span className="text-secondary font-bold">کدپستی:</span>
          <p className="text-secondary">1671678963</p>
        </div>
        <div className="flex gap-x-2">
          <span className="text-secondary font-bold">شماره تماس ثابت:</span>
          <p className="text-secondary">22332179 - 021-22525050 </p>
        </div>
        <div className="flex gap-x-2">
          <span className="text-secondary font-bold">فکس:</span>
          <p className="text-secondary">41425900</p>
        </div>
        <div className="flex gap-x-2">
          <span className="text-secondary font-bold">شماره تماس مدیرعامل:</span>
          <p className="text-secondary">09127601294</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
