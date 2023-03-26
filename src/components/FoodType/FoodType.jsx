import React, { useState } from 'react';
import styles from './FoodType.module.css';
import frozenImg from '@/assets/cart/Type=Frozen.png';
import normalImg from '@/assets/cart/Type=Normal.png';
import directionUp from '@/assets/cart/Direction=Up.png';
import directionDown from '@/assets/cart/Direction=Down.png';
import refrigeratedImg from '@/assets/cart/Type=Refrigerated.png';
import { CartListItem } from '../CartListItem/CartListItem';
import { useRecoilState } from 'recoil';
import { cartListState } from '../../@store/cartListState';

function FoodType({ type }) {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [isShowList, setIsShowList] = useState(true);
  const handleShowList = () => {
    setIsShowList((isShowList) => !isShowList);
  };

  return (
    <div className={styles['food-type-container']}>
      <div type="button" className={styles.wrapper}>
        <img src={type.src} alt="" width="30" height="30" />
        <h3 className={styles.title}>{type.title}</h3>
        <button type="button" className={styles.button}>
          <img
            src={isShowList ? directionUp : directionDown}
            alt={
              isShowList
                ? `${type.title} 리스트 닫기`
                : `${type.title} 리스트 열기`
            }
            width="18"
            height="18"
            onClick={handleShowList}
          />
        </button>
      </div>
      <ul className={styles.list}>
        {isShowList &&
          cartList.map((product, index) => {
            if (type.id === product.type) {
              return (
                <li
                  key={`product-${index}`}
                  className={styles['cart-item-container']}
                >
                  <CartListItem index={index} product={product} />
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export { FoodType };
