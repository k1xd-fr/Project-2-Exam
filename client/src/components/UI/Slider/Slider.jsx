import styles from "./Slider.module.sass";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import images from "./index";

import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper";

const Slider = ({ items }) => {
  const [images, setImages] = useState([
    {
      href: "/img/slider-img1.png",
    },
    {
      href: "/img/slider-img1.png",
    },
    {
      href: "/img/slider-img1.png",
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Swiper
          effect={"coverflow"}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            scale: 0.9,
            depth: 20,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {images.map((item) => {
            return (
              <SwiperSlide>
                <Image src={item.href} width={1110} height={410} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
