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
  { id: 1, src: "/images/m1.png", alt: "GIS Counselor" },
  { id: 2, src: "/images/m2.png", alt: "TAVANIR Counselor" },
  { id: 3, src: "/images/m3.png", alt: "Tavanir Counselors" },
  { id: 4, src: "/images/m4.png", alt: "Geo Portal Administrator" },
  { id: 5, src: "/images/m5.png", alt: "Knowledge based company" },
  { id: 6, src: "/images/m6.png", alt: "Geospatial working group" },
  { id: 7, src: "/images/m7.png", alt: "Counselor" },
  { id: 8, src: "/images/m8.png", alt: "Software Administrator" },
  {
    id: 9,
    src: "/images/m9.png",
    alt: "Tehran, Esfahan, Mazandaran,...",
  },
  { id: 10, src: "/images/m10.png", alt: "Special systems" },
  { id: 11, src: "/images/m11.png", alt: "Software systems" },
  { id: 12, src: "/images/m12.png", alt: "Informative projects" },
  { id: 13, src: "/images/m13.png", alt: "3D GIS" },
];

function Slider() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slideList.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative">
              <Image src={s.src} width={450} height={250} alt={s.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
