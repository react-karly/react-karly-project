import styles from './ListCard.module.css';

import { AddCart } from '@/components/AddCart/AddCart';
import { priceTemplate } from '@/utils/index';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ListCard({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const salePrice = priceTemplate(props.price - props.price * props.saleRatio);
  const originPrice = priceTemplate(props.price);

  return (
    <div className={styles['product-each']}>
      <Link to={`/product-detail/${props.id}`}>
        <img
          className={styles['card-image']}
          src={props.image.thumbnail}
          alt={props.image.alt}
        />
        <div className={styles['product-info']}>
          <span className={styles['product-info__delivery']}>샛별배송</span>
          <span className={styles['product-info__name']}>{props.name}</span>
          {props.saleRatio !== 0 ? (
            <>
              <div className={styles['price']}>
                <span className={styles['product-info__sale-ratio']}>
                  {props.saleRatio * 100}%
                </span>
                <span className={styles['product-info__price']}>
                  {salePrice}원
                </span>
              </div>
              <span className={styles['product-info__origin-price']}>
                {originPrice}원
              </span>
            </>
          ) : (
            <span className={styles['product-info__price']}>{salePrice}원</span>
          )}
          <span className={styles['product-info__description']}>
            {props.description}
          </span>
          <div className={styles['product-info__badge']}>
            {props.badge.karly === 'hidden' ? undefined : (
              <span className={styles['badge-karly']}>Karly Only</span>
            )}
            {props.badge.limit === 'hidden' ? undefined : (
              <span className={styles['badge-limit']}>한정수량</span>
            )}
          </div>
        </div>
      </Link>
      <button
        type="button"
        aria-label="cart-icon"
        className={styles['cart-icon']}
        onClick={openModal}
      ></button>
      {isModalOpen && <AddCart onClose={closeModal} data={props} />}
    </div>
  );
}
