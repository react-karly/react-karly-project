import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper';
import mainBannerPrice from '@/assets/main/banner05.png';
import mainBannerFruit from '@/assets/main/banner01.png';
import mainBannerCard from '@/assets/main/banner02.png';
import mainBannerPurple from '@/assets/main/banner03.png';
import { SwiperComponent } from '../components/Swiper/SwiperComponent';
import { MainPopup } from '../components/Popup/MainPopup';
import {AddCart} from '../components/AddCart/AddCart';
import { useReadData } from '../firebase/firestore/useReadData';

function Home() {
  // firebase에서 데이터를 받아오는 방법
  const { readData, data, isLoading, error } = useReadData('products');

  async function handleReadData() {
    // 모든 데이터를 가져옵니다.
    readData();

    // 특정 도큐멘트 데이터만 가져옵니다.
    // await readData('demo');
  }
  useEffect(() => {
    handleReadData();
  }, []);

  const bannerMockData = [
    {
      id: 1,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerPrice,
      href: '/',
    },
    {
      id: 2,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerFruit,
      href: '/',
    },
    {
      id: 3,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerPurple,
      href: '/',
    },
    {
      id: 4,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerCard,
      href: '/',
    },
  ];

  return (
    <div>
      <MainPopup />
      <AddCart />

      {/* 메인베너 */}
      <section className={styles['main-banner']}>
        <h2 className={styles['a11y-hidden']}>메인베너</h2>
        <SwiperComponent
          isbanner="true"
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
          modules={[Pagination, Navigation, Autoplay]}
          data={bannerMockData}
        />
      </section>

      <main className={styles.main}>
        {/* 이 상품 어때요 */}
        <section className={styles['recommend-products']}>
          <h2 className={styles['recommend-products-title']}>
            이 상품 어때요?
          </h2>
          <div className={styles['ssss']}>
          <SwiperComponent
            isbanner="false"
            spaceBetween={19}
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{ clickable: true, type: 'false' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            data={data ? data : []}
          />
          </div>
        </section>

        {/* 퍼플 위크 */}
        <section className={styles['line-banner']}>
          <h2 className={styles['a11y-hidden']}>퍼플 위크</h2>
          <a href="/">
            <img
              className={styles['line-banner-image']}
              src={mainBannerPurple}
              alt="더 풍성해진 10월의 퍼플위크"
            />
          </a>
        </section>

        {/* 놓치면 후회할 가격 */}
        <section className={styles['sale-products']}>
          <h2 className={styles['sale-products-title']}> 놓치면 후회할 가격</h2>

          <SwiperComponent
            isbanner="false"
            spaceBetween={19}
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{ clickable: true, type: 'false' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            data={data ? data : []}
          />
        </section>
      </main>

      <footer className={styles.footer}>
        <h1>푸터 영역</h1>
      </footer>
    </div>
  );
}

export default Home;
