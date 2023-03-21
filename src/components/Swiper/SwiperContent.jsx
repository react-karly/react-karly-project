import React from 'react';
import styles from './SwiperContent.module.css';
import cartIcon from '@/assets/icons/Icon/Cart.svg';
// import jjolmyeon from '@/assets/main/product01.png';

export function SwiperContent({ data, isbanner }) {
  console.log(data);
  return isbanner === 'true' ? (
    <a href={data.href}>
      <img src={data.src} alt={data.title} className={styles['banner-img']} />
    </a>
  ) : (
    <a href="/">
      <img
        className={styles['products-item__image']}
        src={data.image?.thumbnail}
        alt={data.image?.alt}
      />
      <button
        className={styles['products-item__cartIconBtn']}
        type="button"
      >
        <img
          className={styles['products-item__cartIcon']}
          src={cartIcon}
          alt="장바구니 아이콘"
        />
      </button>
      <div className={styles['products-item-list']}>
        <h3 className={styles['products-item__name']}>{data.name}</h3>
        {data.saleRatio ? (
          <span className={styles['products-item__price']}>
            <span className={styles['products-item__sale-price']}>
              {data.saleRatio * 100}%
            </span>
            {data.price * (1 - data.saleRatio)}원
            <div className={styles['products-item__origin-price']}>{data.price}원</div>
          </span>
        ) : (
          <span className={styles['products-item__price']}>
            {data.price}원 
          </span>
        )}
       <span className={styles['products-item__review']}>
        💬 후기{data.review} 
      </span>

      </div>
      
    </a>
  );
}
