import React from 'react';
import plus from '@/assets/cart/plus.png';
import minus from '@/assets/cart/minus.png';
import styles from '../Counter/Counter.module.css';
import disabledMinus from '@/assets/cart/minus_disabled.png';
function Counter({ quantity, onClickPlus, onClickMinus }) {
  return (
    <div className={styles['counter-container']}>
      <button
        type="button"
        disabled={quantity === 1 ? true : false}
        className={styles.button}
        onClick={onClickMinus}
      >
        <img
          src={quantity === 1 ? disabledMinus : minus}
          alt={quantity === 1 ? "수량 감소 비활성화" : "수량 감소"}
          width="30"
          height="30"
        />
      </button>
      <span>{quantity}</span>
      <button type="button" className={styles.button} onClick={onClickPlus}>
        <img src={plus} alt="수량 증가" width="30" height="30" />
      </button>
    </div>
  );
}

export { Counter };
