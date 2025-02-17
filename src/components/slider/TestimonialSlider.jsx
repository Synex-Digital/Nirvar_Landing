import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper styles
import TestimonialCard from "../home/testimonial-card";
import { Pagination } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Selina Gomez",
    role: "User",
    image:
      "https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.286398526.1730285537&semt=ais_siglip",
    testimonial:
      "Since I started using Nirvar, my healthcare experience has been transformed. Gone are the days of struggling to schedule doctor appointments and forgetting important medical details.",
  },
  {
    id: 2,
    name: "Alex Turner",
    role: "Client",
    image:
      "https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.286398526.1730285537&semt=ais_siglip",
    testimonial:
      "Nirvar has been a lifesaver! The convenience and ease of use have made managing my appointments a breeze.",
  },
  {
    id: 3,
    name: "Selina Gomez",
    role: "User",
    image:
      "https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.286398526.1730285537&semt=ais_siglip",
    testimonial:
      "Since I started using Nirvar, my healthcare experience has been transformed. Gone are the days of struggling to schedule doctor appointments and forgetting important medical details.",
  },
  {
    id: 4,
    name: "Alex Turner",
    role: "Client",
    image:
      "https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.286398526.1730285537&semt=ais_siglip",
    testimonial:
      "Nirvar has been a lifesaver! The convenience and ease of use have made managing my appointments a breeze.",
  },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={20}
      loop
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {testimonialData.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
