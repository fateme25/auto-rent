"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Container, Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

import "swiper/css";
import "swiper/css/thumbs";

import "../_style/testimonial.css";
import { convertToPersianDate } from "../_utils/helper";

const customersReview = [
  {
    id: 1,
    name: "سارا احمدی",
    rating: 4,
    date: "2/10/2023",
    image: "assets/images/woman1.svg",
  },
  {
    id: 2,
    name: "محمد جواد امینی",
    rating: 3.5,
    date: "5/20/2021",
    image: "assets/images/man1.svg",
  },
  {
    id: 3,
    name: "فرزانه حیدری",
    rating: 5,
    date: "2/19/2025",
    image: "assets/images/woman2.svg",
  },
  {
    id: 4,
    name: "فاطمه ابراهیمی فر",
    rating: 4.5,
    date: "8/2/2024",
    image: "assets/images/woman3.svg",
  },
  {
    id: 5,
    name: "آرمین رحمتی",
    rating: 4.5,
    date: "8/6/2024",
    image: "assets/images/man-2.jpg",
  },
];

function Testimonial() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [value, setValue] = useState(2);

  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" color="#5E5E5E">
            آنچه مشتریان ما درموردمان گفته‌اند.
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            نظرات <span style={{ color: "#FDB713" }}>مشتریان</span>
          </Typography>
        </Box>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="testimonial-swiper"
        >
          {customersReview.map((review, index) => (
            <SwiperSlide key={index} className="testimonial-swiper-slide">
              <img src={review.image} />
              <Typography>{review.name}</Typography>
              <Rating
                name="read-only"
                value={review.rating}
                readOnly
                dir="ltr"
              />
              <Typography
                variant="body2"
                sx={{ maxWidth: "60%" }}
                color="#727272"
                paddingTop="2rem"
              >
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک
                شرکت با سابقه و مطمئن می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار
                خودش بهترینه!پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند
                اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          className="testimonial-swiper2"
          loop={true}
          spaceBetween={20}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              // spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {customersReview.map((review) => (
            <SwiperSlide key={review.id} className="testimonial-swiper-slide2">
              <img src={review.image} />
              <Box sx={{ padding: "8px" }}>
                <Typography variant="body1" fontWeight="700">
                  {review.name}
                </Typography>
                <Typography variant="caption" paddingTop="10px">
                  {convertToPersianDate(review.date)}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}

export default Testimonial;
