import React from 'react';
import { Counter } from '../Counter/Counter';
import close from '@/assets/cart/Cancel.png';
import styles from './CartListItem.module.css';
import checked from '@/assets/cart/isChecked=true.png';
import unChecked from '@/assets/cart/isChecked=false.png';
import { priceTemplate } from '../../utils/priceTemplate';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  clickCheckButton,
  minusStock,
  plusStock,
  cartListState,
} from '../../@store/cartListState';
function CartListItem({ index, product }) {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const clickCheck = useSetRecoilState(clickCheckButton);
  const calculateMinus = useSetRecoilState(minusStock);
  const calculatePlus = useSetRecoilState(plusStock);

  const handleClickPlus = () => {
    calculatePlus(index);
  };

  const handleClickMinus = () => {
    calculateMinus(index);
  };
  const handleClickCheckButton = () => {
    clickCheck(index);
  };

  const removeItemAtIndex = (list, index) => {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  };
  const handleDelete = () => {
    const newList = removeItemAtIndex(cartList, index);
    setCartList(newList);
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
