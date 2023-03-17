import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperComponent.css';
import ArrowRight from '@/assets/main/icon/Arrow.png';
import ArrowLeft from '@/assets/main/icon/Arrow.svg';
import { SwiperContent } from './SwiperContent';

export function SwiperComponent(props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      {...props}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        // 초기 설정
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
    >
      {props.data.map((el) => (
        <SwiperSlide key={el.id}>
          <SwiperContent data={el} isbanner={props.isbanner} />
        </SwiperSlide>
      ))}
      <div ref={prevRef}>
        <img
          className={props.isbanner==="true" ? 'swiper-prev-banner' : 'swiper-prev-list'}
          src={ArrowRight}
          alt="prevButton"
        />
      </div>
      <div ref={nextRef}>
        <img
          className={props.isbanner==='true' ? 'swiper-next-banner' : 'swiper-next-list'}
          src={ArrowLeft}
          alt="nextButton"
        />
      </div>
    </Swiper>
  );
}
