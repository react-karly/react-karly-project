import React from 'react';
import { Counter } from '../Counter/Counter';
import close from '@/assets/cart/Cancel.png';
import styles from './CartListItem.module.css';
import productImg from '@/assets/tangtang/thumbnail.jpg';
import checked from '@/assets/cart/isChecked=true.png';
import unChecked from '@/assets/cart/isChecked=false.png';
function CartListItem({
  index,
  product,
  productList,
  setProductList,
  setSelectedCount,
}) {
  const handleClickCheckButton = () => {
    if (product.isChecked) setSelectedCount((count) => count - 1);
    else setSelectedCount((count) => count + 1);
    product.isChecked = !product.isChecked;
    setProductList([...productList]);
  };

  return (
    <>
      <button
        type="button"
        className={styles['check-button']}
        onClick={handleClickCheckButton}
      >
        <img
          src={product.isChecked ? checked : unChecked}
          alt="상품선택"
          width="24"
          height="24"
        />
      </button>
      <img
        src={productImg}
        alt=""
        width="60"
        height="78"
        className={styles['product-image']}
      />
      <h4 className={styles.name}>{product.title}</h4>
      <Counter />
      <span className={styles.price}>4,980원</span>
      <button type="button" className={styles.button}>
        <img src={close} alt="닫기" width="30" height="30" />
      </button>
    </>
  );
}

export { CartListItem };
