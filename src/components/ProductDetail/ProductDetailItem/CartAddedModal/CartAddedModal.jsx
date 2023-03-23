import React from 'react';
import styles from './CartAddedModal.module.css';

function CartAddedModal({products, title}) {

  console.log(products);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <img src={products.image.thumbnail} className={styles.image} alt="" />
      <div className={styles['text-wrapper']}>
      <span style={{fontSize:'12px', color: '#999', fontWeight: 'bold'}}>{products.name}</span>
      <span style={{fontSize:'12px'}}>장바구니에 상품을 담았습니다.</span>
      </div>
      </div>
    </div>
    </>
  );
}

export default CartAddedModal;