import React from 'react';
import styles from './SwiperContent.module.css';
import cartIcon from '@/assets/icons/Icon/Cart.svg';
import jjolmyeon from '@/assets/main/product01.png';

export function SwiperContent({ data, isbanner }) {
  return isbanner === 'true' ? (
    <a href={data.href}>
      <img src={data.src} alt={data.title} />
    </a>
  ) : (
    <a href="/">
      <img
        className={styles['recommend-products-item__image']}
        src={jjolmyeon}
        alt="풀무원 탱탱쫄면 4개입"
      />
      <div className={styles['recommend-products-item__info']}>
        <h3 className={styles['recommend-products-item__name']}>
          {data.title}
        </h3>
        <span className={styles['recommend-products-item__price']}>
          {data.price}
        </span>
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
