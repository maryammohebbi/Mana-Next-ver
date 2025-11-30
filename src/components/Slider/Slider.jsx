"use client";

import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Title from "@/ui/Title";

const slideList = [
  {
    id: 1,
    src: "/images/m1.png",
    title: "مشاور عالی GIS وزارت نیرو",
    subTitle: "وزارت نیرو",
    alt: "GIS Counselor",
  },
  {
    id: 2,
    src: "/images/m2.png",
    title: "مشاور توانیر و مجری ژئوپورتال صنعت آب و برق کشور",
    subTitle: "وزارت نیرو",
    alt: "TAVANIR Counselor",
  },
  {
    id: 3,
    src: "/images/m3.png",
    title: "مجری ژئوپورتال صنعت توزیع، انتقال و فوق توزیع برق و مشاور توانیر",
    subTitle: "شرکت توانیر",
    alt: "Tavanir Counselors",
  },
  {
    id: 4,
    src: "/images/m4.png",
    title: "مجری ژئوپورتال صنعت توزیع برق",
    subTitle: "شرکت توانیر",
    alt: "Geo Portal Administrator",
  },
  {
    id: 5,
    src: "/images/m5.png",
    title: "شرکت دانش بنیان",
    subTitle: "معاونت علمی ریاست جمهوری",
    alt: "Knowledge based company",
  },

  {
    id: 6,
    src: "/images/m7.png",
    title: "مشاور",
    subTitle: "برق منطقه ای تهران ",
    subTitle2: "در بیش از 8 شرکت توزیع برق کشور",
    alt: "Counselor",
  },
  {
    id: 7,
    src: "/images/m6.png",
    title: "عضو کارگروه تخصصی اطلاعات مکانی",
    subTitle: "وزارت نیرو",
    alt: "Geospatial working group",
  },
  // {
  //   id: 8,
  //   src: "/images/m9.png",
  //   title: "سرویس Load Management",
  //   subTitle:
  //     "تهران بزرگ- استان اصفهان- استان مازندران- غرب مازندران در 33 شرکت توزیع برق ",
  //   alt: "Tehran, Esfahan, Mazandaran,...",
  // },
  {
    id: 8,
    src: "/images/m8.png",
    title: "مجری نرم افزار",
    subTitle: "برق منطقه ای تهران",
    subTitle2: "سامانه Web GIS در 4 شرکت توزیع برق",
    subTitle3: "سامانه مدیریت اضطراری بار در 33 شرکت توزیع برق",
    alt: "Software Administrator",
  },

  {
    id: 9,
    src: "/images/m10.png",
    title: "رتبه 4 سیستم های ویژه",
    subTitle: "سازمان برنامه و بودجه کشور",
    alt: "Special systems",
  },
  {
    id: 10,
    src: "/images/m11.png",
    title: "رتبه 4 سیستم های نرم افزاری سفارش مشتری",
    subTitle: "سازمان برنامه و بودجه کشور",
    alt: "Software systems",
  },
  {
    id: 11,
    src: "/images/m12.png",
    title: "رتبه 6 مشاوره و نظارت بر پروژه های انفورماتیک",
    subTitle: "سازمان برنامه و بودجه کشور",
    alt: "Informative projects",
  },
  {
    id: 12,
    src: "/images/m13.png",
    title: "راه اندازی اولین نمونه 3D GIS دینامیک در سطح برقهای منطقه ای",
    subTitle: "برق منطقه ای تهران",
    alt: "3D GIS",
  },
];

function Slider() {
  return (
    <div className="mb-8" id="experience">
      <Title title="چکیده سوابق شرکت اندیشه هوشمند مانا" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: "auto" },
        }}
        className="mySwiper"
      >
        {slideList.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative">
              <div className="w-full h-full bg-black/60 absolute left-0 top-0 flex items-center justify-center">
                <div className="w-[75%] h-[60%] flex flex-col items-start justify-center space-y-4 p-6">
                  <p className="font-bold w-full text-center text-white">
                    {s.title}
                  </p>
                  {[s.subTitle, s.subTitle2, s.subTitle3]
                    .filter(Boolean)
                    .map((subtitle, index) => (
                      <div
                        key={index}
                        className="flex gap-x-2 text-xs items-center"
                      >
                        <div className="icon-box">
                          <FmdGoodIcon className="w-3 h-3 text-white z-10" />
                        </div>
                        <span className="text-white">{subtitle}</span>
                      </div>
                    ))}
                  {s.subTitle3 && (
                    <span className="text-white text-xs mt-1 mr-6 opacity-80">
                      (تهران بزرگ - استان اصفهان - استان مازندران - غرب مازندران
                      و ...)
                    </span>
                  )}
                </div>
              </div>
              <Image src={s.src} width={450} height={250} alt={s.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
