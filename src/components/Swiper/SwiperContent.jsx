import React from 'react';
import styles from './SwiperContent.module.css';
import cartIcon from '@/assets/icons/Icon/Cart.svg';
import jjolmyeon from '@/assets/main/product01.png';

export function SwiperContent({ data, isbanner }) {
  console.log(data);
  return isbanner === 'true' ? (
    <a href={data.href}>
      <img src={data.src} alt={data.title} className={styles['banner-img']} />
    </a>
  ) : (
    <a href="/">
      <img
        className={styles['recommend-products-item__image']}
        src={data.image?.thumbnail}
        alt={data.image?.alt}
      />
      <div className={styles['recommend-products-item__info']}>
        <h3 className={styles['recommend-products-item__name']}>{data.name}</h3>
        {data.saleRatio ? (
          <span className={styles['recommend-products-item__price']}>
            <span className={styles['sale-price']}>
              {data.saleRatio * 100}%
            </span>
            {data.price * (1 - data.saleRatio)} 원
            <div className={styles['origin-price']}>{data.price} 원</div>
          </span>
        ) : (
          <span className={styles['recommend-products-item__price']}>
            {data.price} 원
          </span>
        )}

        {/* {data.saleRatio ? (
          <span className={styles['recommend-products-item__price']}>
            {data.price} 원
          </span>
        ) : null} */}
      </div>
      <button
        className={styles['recommend-products-item__cartIconBtn']}
        type="button"
      >
        <img
          className={styles['recommend-products-item__cartIcon']}
          src={cartIcon}
          alt="장바구니 아이콘"
        />
      </button>
    </a>
  );
}
