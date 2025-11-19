import Title from "@/ui/Title";
import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiSpeakAiLine } from "react-icons/ri";
import { RiContractLine } from "react-icons/ri";

const servicesList = [
  {
    id: 1,
    title: "تولید نرم افزار",
    icon: <LiaLaptopCodeSolid className="w-16 h-16 text-secondary" />,
  },
  {
    id: 2,
    title: "خدمات مشاور",
    icon: <RiSpeakAiLine className="w-16 h-16 text-secondary" />,
  },
  {
    id: 3,
    title: "خدمات پیمانکاری",
    icon: <RiContractLine className="w-16 h-16 text-secondary" />,
  },
];

function Services() {
  return (
    <div className="p-5 scroll-mt-28" id="service">
      <Title title="فعالیت های شرکت اندیشه هوشمند مانا" />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-tertiary w-full lg:w-[30%] h-40 rounded-2xl flex items-center justify-around p-4
                       hover:scale-105 transition-all duration-500 shadow-lg"
          >
            <div className="border border-secondary rounded-3xl p-2">
              {service.icon}
            </div>
            <span className="text-secondary text-xl">{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
