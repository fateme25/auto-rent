"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function Branding() {
  const images = [
    "assets/images/brand/rover.svg",
    "assets/images/brand/jeep.svg",
    "assets/images/brand/KIA.svg",
    "assets/images/brand/Toyota.svg",
    "assets/images/brand/Nissan.svg",
    "assets/images/brand/Hyundai.svg",
    "assets/images/brand/Honda.svg",
    "assets/images/brand/Mercedes.svg",
    "assets/images/brand/lexus.svg",
    "assets/images/brand/BMW.svg",
  ];
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        className="branding-swiper"
      >
        {[...images, ...images].map((image, index) => (
          <SwiperSlide key={index} className="branding-swiper-slide">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              placeholder="blur"
              blurDataURL="data:..."
              quality={100}
              width={70}
              height={50}
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
