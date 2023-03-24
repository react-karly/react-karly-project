import React, { useEffect, useState } from 'react';
import styles from './CartAddedModal.module.css';
import { useRecoilState } from 'recoil';
import {
  cartListState,
  lastAddProductState,
} from '../../../../@store/cartListState';

function CartAddedModal(props) {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [lastProduct, setLastProduct] = useRecoilState(lastAddProductState);

  return (
    <>
      <div className={styles.container}>
        <img
          src={lastProduct.src}
          alt={lastProduct.alt}
          width="46"
          height="60"
          className={styles.image}
        />
        <div className={styles['text-wrapper']}>
          <h2 className={styles.title}>{lastProduct.title}</h2>
          <p className={styles.content}>장바구니에 상품을 담았습니다.</p>
        </div>
      </div>
    </>
  );
}

export default CartAddedModal;
