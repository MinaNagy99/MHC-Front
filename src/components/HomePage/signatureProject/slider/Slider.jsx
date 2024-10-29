import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default () => {
    
  return (
    <Swiper
      effect="coverflow"
      grabCursor="true"
      spaceBetween={10} // Adjust space between slides
      slidesPerView={5} // Number of slides visible at once
      loop={true} // Enable loop
      pagination={{ clickable: true }} // Enable pagination if you want
      //   navigation
      grid-rows="90"
    >
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/homePage/slider/project.jpg" alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
