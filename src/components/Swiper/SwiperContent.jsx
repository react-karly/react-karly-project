import React, { useState } from 'react';
import styles from './SwiperContent.module.css';
import cartIcon from '@/assets/icons/Icon/Cart.svg';
import { AddCart } from '../AddCart/AddCart';

export function SwiperContent({ data, isbanner }) {
  const [isClick, setIsClick] = useState(false);

  return isbanner === 'true' ? (
    <a href={data.href}>
      <img src={data.src} alt={data.title} className={styles['banner-img']} />
    </a>
  ) : (
    <div href="/">
        {isClick ? <AddCart 혜인이보여주기용={'나는 배고파요'} data={ data} /> : null}
      <img
        className={styles['products-item__image']}
        src={data.image?.thumbnail}
        alt={data.image?.alt}
      />
      <button
        className={styles['products-item__cartIconBtn']}
        type="button"
        onClick={() => {
          setIsClick((state) => !state);
          console.log(isClick);
        }}
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
            {(data.price * (1 - data.saleRatio))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
            <div className={styles['products-item__origin-price']}>
              {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </div>
          </span>
        ) : (
          <span className={styles['products-item__price']}>
            {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </span>
        )}
        <span className={styles['products-item__review']}>
          💬 후기{data.review}
        </span>
      </div>
    </div>
  );
}
