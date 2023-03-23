import React from 'react';
import { Counter } from '../Counter/Counter';
import close from '@/assets/cart/Cancel.png';
import styles from './CartListItem.module.css';
import productImg from '@/assets/tangtang/thumbnail.jpg';
import checked from '@/assets/cart/isChecked=true.png';
import unChecked from '@/assets/cart/isChecked=false.png';
import { priceTemplate } from '../../utils/priceTemplate';
function CartListItem({
  index,
  product,
  productList,
  setProductList,
  setSelectedCount,
}) {
  const handleClickPlus = () => {
    product.stock += 1;
    setProductList([...productList]);
  };

  const handleClickMinus = () => {
    product.stock -= 1;
    setProductList([...productList]);
  };
  const handleClickCheckButton = () => {
    if (product.isChecked) setSelectedCount((count) => count - 1);
    else setSelectedCount((count) => count + 1);
    product.isChecked = !product.isChecked;
    setProductList([...productList]);
  };

  const handleDelete = () => {
    productList.splice(index, 1);
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
          alt={product.isChecked ? '상품 선택 해제하기' : '상품 선택하기'}
          width="24"
          height="24"
        />
      </button>
      <img
        src={product.src}
        alt={product.alt}
        width="60"
        height="78"
        className={styles['product-image']}
      />
      <h4 className={styles.name}>{product.title}</h4>
      <Counter
        quantity={product.stock}
        onClickPlus={handleClickPlus}
        onClickMinus={handleClickMinus}
      />
      <span className={styles.price}>
        {product.salePrice
          ? priceTemplate(product.salePrice * product.stock)
          : priceTemplate(product.price * product.stock)}
        원
      </span>
      <button type="button" className={styles.button} onClick={handleDelete}>
        <img
          src={close}
          alt={`${product.title} 삭제하기`}
          width="30"
          height="30"
        />
      </button>
    </>
  );
}

export { CartListItem };
