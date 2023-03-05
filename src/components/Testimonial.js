import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Slider from "./testimonial/Slider";

function Testimonial() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="testimonials"
      >
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
