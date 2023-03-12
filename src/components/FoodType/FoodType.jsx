import React from 'react';
import foodType from './FoodType.module.css';
import frozenImg from '@/assets/cart/Type=Frozen.png';
import normalImg from '@/assets/cart/Type=Normal.png';
import directionDown from '@/assets/cart/Direction=Down.png';
import refrigeratedImg from '@/assets/cart/Type=Refrigerated.png';
import CartListItem from '../CartListItem/CartListItem';

function FoodType({ type }) {
  const typeInfo =
    type === 'refrigerated'
      ? { src: refrigeratedImg, title: '냉장 식품' }
      : type === 'frozen'
      ? { src: frozenImg, title: '냉동 식품' }
      : { src: normalImg, title: '상온 식품' };
  return (
    <div className={foodType['food-type-container']}>
      <div type="button" className={foodType.wrapper}>
        <img src={typeInfo.src} alt="" width="30" height="30" />
        <h3 className={foodType.title}>{typeInfo.title}</h3>
        <button type="button" className={foodType.button}>
          <img
            src={directionDown}
            alt="상품 리스트 열기"
            width="18"
            height="18"
          />
        </button>
      </div>
      <ul className={foodType.list}>
        <CartListItem />
        <CartListItem />
      </ul>
    </div>
  );
}

export default FoodType;
