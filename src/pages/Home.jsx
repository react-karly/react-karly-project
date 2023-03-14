import React from "react";
import styles from './Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.module.css';
import { Pagination, Navigation, Autoplay } from 'swiper';
import mainBannerPrice from '../assets/main/banner05.png';
import mainBannerFruit from '../assets/main/banner01.png';
import mainBannerCard from '../assets/main/banner02.png';
import mainBannerPurple from '../assets/main/banner03.png';
import jjolmyeon from '../assets/main/product01.png';
import sunCushion from '../assets/main/product02.png';
import hyeonmi from '../assets/main/product03.png';
import frosch from '../assets/main/product04.png';

function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>헤더 영역</h1>
      </header>

      {/* 메인베너 */}
 
        <section className={styles['main-banner']}>
          <h2 className={styles['a11y-hidden']}>메인베너</h2>

            <Swiper className={styles['main-banner-swiper']}

              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}

            >
              <SwiperSlide className={styles['main-banner-item']}> <a> <img src={mainBannerPrice} alt="이 주의 특가" /> </a> </SwiperSlide>
              <SwiperSlide className={styles['main-banner-item']}> <a> <img src={mainBannerFruit} alt="컬리의 과일 가게" /> </a> </SwiperSlide>
              <SwiperSlide className={styles['main-banner-item']}> <a> <img src={mainBannerCard} alt="이달의 카드 혜택" /> </a> </SwiperSlide>
              <SwiperSlide className={styles['main-banner-item']}> <a> <img src={mainBannerPurple} alt="컬리 퍼플 위크" /> </a> </SwiperSlide>
            </Swiper>

        </section>

        {/* 이 상품 어때요? */}
        <main className={styles.main}>
            
        <section className={styles['recommend-products']}>
          <h2 className={styles['recommend-products-title']}>이 상품 어때요?</h2>
       
        <Swiper className={styles['recommend-products-swiper']} navigation={true} spaceBetween={45} slidesPerView={4} slidesPerGroup={4} pagination={{clickable: true, type: 'fraction',}} modules={[Pagination, Navigation]} >
        <SwiperSlide className={styles['recommend-products-item']}> <a href="/"> <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" /> <p>[풀무원] 탱탱쫄면 (4개입)</p> <p>4,980원</p> </a> </SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />  <p>[온더바디] 죠르디 시카 자석 선쿠션</p> <p>32,500원</p> </a></SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" /> <p>유기농 밀키퀸 현미 4kg </p> <p>25,000원</p></a></SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={frosch} alt="프로쉬 베이비 세탁세" />  <p>[프로쉬] 베이비 세탁세</p> <p> 24% </p><p>18,900원</p> <p>24,900원</p></a></SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" /> <p>[풀무원] 탱탱쫄면 (4개입)</p> <p>4,980원</p> </a> </SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />  <p>[온더바디] 죠르디 시카 자석 선쿠션</p> <p>32,500원</p> </a></SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" /> <p>유기농 밀키퀸 현미 4kg </p> <p>25,000원</p></a></SwiperSlide>
        <SwiperSlide className={styles['recommend-products-item']}> <a> <img src={frosch} alt="프로쉬 베이비 세탁세" />  <p>[프로쉬] 베이비 세탁세</p> <p> 24% </p><p>18,900원</p> <p>24,900원</p></a></SwiperSlide>
         </Swiper>


        </section>

        <section className={styles['line-banner']}>
          <h2 className={styles['a11y-hidden']}>퍼플 위크</h2>
          <a href="/">
            <img className={styles['line-banner-image']} src={mainBannerPurple}  alt="더 풍성해진 10월의 퍼플위크" />
          </a>
        </section>

        <section className={styles['sale-products']}>
          <h2 className={styles['sale-products-title']}> 놓치면 후회할 가격</h2>

           <Swiper className={styles.swiper2}  loop={true} navigation={true} spaceBetween={45} slidesPerView={4} pagination={{clickable: true, type: 'fraction',}} modules={[Pagination, Navigation]} >
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" /> <p>[풀무원] 탱탱쫄면 (4개입)</p> <p>4,980원</p> </a> </SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />  <p>[온더바디] 죠르디 시카 자석 선쿠션</p> <p>32,500원</p> </a></SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" /> <p>유기농 밀키퀸 현미 4kg </p> <p>25,000원</p></a></SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={frosch} alt="프로쉬 베이비 세탁세" />  <p>[프로쉬] 베이비 세탁세</p> <p> 24% </p><p>18,900원</p> <p>24,900원</p></a></SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={jjolmyeon} alt="풀무원 탱탱쫄면 4개입" /> <p>[풀무원] 탱탱쫄면 (4개입)</p> <p>4,980원</p> </a> </SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={sunCushion} alt="온더바디 죠르디 시카 자석 선쿠션" />  <p>[온더바디] 죠르디 시카 자석 선쿠션</p> <p>32,500원</p> </a></SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={hyeonmi} alt="유기농 밀키퀸 현미 4kg" /> <p>유기농 밀키퀸 현미 4kg </p> <p>25,000원</p></a></SwiperSlide>
        <SwiperSlide className={styles['sale-products-item']}> <a> <img src={frosch} alt="프로쉬 베이비 세탁세" />  <p>[프로쉬] 베이비 세탁세</p> <p> 24% </p><p>18,900원</p> <p>24,900원</p></a></SwiperSlide>
        </Swiper>


        </section>
      </main>

      <footer className={styles.footer}>
        푸터<h1>푸터 영역</h1>
      </footer>
    </>
  );
}

export default Home;
