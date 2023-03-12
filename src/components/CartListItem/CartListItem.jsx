import React from 'react';
import Counter from '../Counter/Counter';
import close from '@/assets/cart/Cancel.png';
import cartItem from './CartListItem.module.css';
import productImg from '@/assets/tangtang/thumbnail.jpg';
import unChecked from '@/assets/cart/isChecked=false.png';
function CartListItem() {
  return (
    <li className={cartItem['cart-item-container']}>
      <button type="button" className={cartItem['check-button']}>
        <img src={unChecked} alt="상품선택" width="24" height="24" />
      </button>
      <img
        src={productImg}
        alt=""
        width="60"
        height="78"
        className={cartItem['product-image']}
      />
      <h4 className={cartItem.name}>
        &#91;풀무원&#93; 탱탱쫄면 &#40;4개입&#41;
      </h4>
      <Counter />
      <span className={cartItem.price}>4,980원</span>
      <button type="button" className={cartItem.button}>
        <img src={close} alt="닫기" width="30" height="30" />
      </button>
    </li>
  );
}

export default CartListItem;
