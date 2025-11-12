"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const slideList = [
  {
    id: 1,
    src: "/images/m1.png",
    title: "مشاور عالی GIS وزارت نیرو",
    alt: "GIS Counselor",
  },
  {
    id: 2,
    src: "/images/m2.png",
    title: "مشاور توانیر و مجری ژئوپورتال صنعت آب و برق کشور",
    alt: "TAVANIR Counselor",
  },
  {
    id: 3,
    src: "/images/m3.png",
    title: "مجری ژئوپورتال صنعت توزیع، انتقال و فوق توزیع برق و مشاور توانیر",
    alt: "Tavanir Counselors",
  },
  {
    id: 4,
    src: "/images/m4.png",
    title: "مجری ژئوپورتال صنعت توزیع برق",
    alt: "Geo Portal Administrator",
  },
  {
    id: 5,
    src: "/images/m5.png",
    title: "شرکت دانش بنیان",
    alt: "Knowledge based company",
  },
  {
    id: 6,
    src: "/images/m6.png",
    title: "عضو کارگروه تخصصی اطلاعات مکانی",
    alt: "Geospatial working group",
  },
  { id: 7, src: "/images/m7.png", title: "مشاور", alt: "Counselor" },
  {
    id: 8,
    src: "/images/m8.png",
    title: "مجری نرم افزار",
    alt: "Software Administrator",
  },
  {
    id: 9,
    src: "/images/m9.png",
    title:
      "تهران بزرگ- استان اصفهان- استان مازندران- غرب مازندران در 33 شرکت توزیع برق Load management",
    alt: "Tehran, Esfahan, Mazandaran,...",
  },
  {
    id: 10,
    src: "/images/m10.png",
    title: "رتبه 4 سیستم های ویژه",
    alt: "Special systems",
  },
  {
    id: 11,
    src: "/images/m11.png",
    title: "رتبه 4 سیستم های نرم افزاری سفارش مشتری",
    alt: "Software systems",
  },
  {
    id: 12,
    src: "/images/m12.png",
    title: "رتبه 6 (مشاوره و نظارت بر پروژه های انفورماتیک)",
    alt: "Informative projects",
  },
  {
    id: 13,
    src: "/images/m13.png",
    title: "راه اندازی اولین نمونه 3D GIS دینامیک در سطح برقهای منطقه ای",
    alt: "3D GIS",
  },
];

function Slider() {
  return (
    <div className="mb-8">
      <h3 className="text-center">چکیده سوابق شرکت اندیشه هوشمند مانا</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
              <div className="w-full h-full bg-black/30 absolute left-0 top-0 flex items-center justify-center">
                <div className="w-[60%] h-[60%] flex items-center justify-center p-6">
                  <p className="font-bold text-center text-white">{s.title}</p>
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
