import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperComponent.css';
import BlackArrowPrev from '@/assets/main/icon/BlackArrow-prev.png';
import BlackArrowNext from '@/assets/main/icon/BlackArrow-next.png';
import WhiteArrowPrev from '@/assets/main/icon/WhiteArrow-prev.png';
import WhiteArrowNext from '@/assets/main/icon/WhiteArrow-next.png';


import { SwiperContent } from './SwiperContent';

export function SwiperComponent(props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='wrapper'>
    <Swiper
      {...props}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
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

    </Swiper>
          <div ref={prevRef}>
          <img
            className={props.isbanner==="true" ? 'swiper-prev-banner' : 'swiper-prev-list'}
            src={props.isbanner==='true' ? BlackArrowPrev : WhiteArrowPrev}
            alt="이전 버튼"
          />
        </div>
        <div ref={nextRef}>
          <img
            className={props.isbanner==='true' ? 'swiper-next-banner' : 'swiper-next-list'}
            src={props.isbanner==='true' ? BlackArrowNext : WhiteArrowNext}
            alt="다음 버튼"
          />
        </div>
        </div>
  );
}
