import React from "react";
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper styles
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    id: 1,
    image:
      "https://www.wellcare.com/-/media/logos-and-icons/wellcare-logos/wellcarelogo180.ashx",
  },
  {
    id: 2,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
  {
    id: 3,
    image:
      "https://www.deasnet.it/wp-content/themes/abc-wpml-grid/i/deas-logo.svg",
  },
  {
    id: 4,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
  {
    id: 5,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="relative">
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex justify-center items-center mb-16">
              <img
                className="w-72 h-16 bg-cover"
                src={testimonial.image}
                alt=""
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
