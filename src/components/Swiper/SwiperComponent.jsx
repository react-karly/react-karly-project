import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './SwiperComponent.module.css';
import ArrowRight from '@/assets/main/icon/Arrow.png';
import ArrowLeft from '@/assets/main/icon/Arrow.svg';
import { SwiperContent } from './SwiperContent';

export function SwiperComponent(props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      spaceBetween={props.spaceBetween}
      centeredSlides={props.centeredSlides}
      autoplay={props.autoplay}
      pagination={props.pagination}
      slidesPerGroup={props.slidesPerGroup}
      slidesPerView={props.slidesPerView}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      modules={props.module}
    >
      {props.data.map((el) => (
        <SwiperSlide key={el.id}>
          <SwiperContent data={el} isbanner={props.isbanner} />
        </SwiperSlide>
      ))}
      <div ref={prevRef}>
        <img
          className={styles['swiper-prev']}
          src={ArrowRight}
          alt="prevButton"
        />
      </div>
      <div ref={nextRef}>
        <img
          className={styles['swiper-next']}
          src={ArrowLeft}
          alt="nextButton"
        />
      </div>
    </Swiper>
  );
}
