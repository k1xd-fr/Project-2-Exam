import styles from "./Slider.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Image from "next/image";

const Slider = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <Swiper>
          {!!items.length && items.map(( item, index ) => (
            
            <SwiperSlide key={index}>
              {/* <Image src={item.image} alt={item.title} width={1100} height={409} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
