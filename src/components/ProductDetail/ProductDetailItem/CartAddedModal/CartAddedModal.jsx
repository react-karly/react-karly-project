import React from 'react';
import styles from './CartAddedModal.module.css';

function CartAddedModal(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="" alt="" width="46" height="60" className={styles.image} />
          <div className={styles['text-wrapper']}>
            <span className={styles.title}>상품이름</span>
            <span className={styles.content}>
              장바구니에 상품을 담았습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartAddedModal;
