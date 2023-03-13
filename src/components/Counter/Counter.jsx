import React from 'react';
import plus from '@/assets/cart/plus.png';
import minus from '@/assets/cart/minus.png';
import styles from '../Counter/Counter.module.css';
import disabledPlus from '@/assets/cart/plus_disabled.png';
import disabledMinus from '@/assets/cart/minus_disabled.png';
function Counter() {
  return (
    <div className={styles['counter-container']}>
      <button type="button" className={styles.button}>
        <img src={disabledMinus} alt="수량 감소" width="30" height="30" />
      </button>
      <span>1</span>
      <button type="button" className={styles.button}>
        <img src={plus} alt="수량 증가" width="30" height="30" />
      </button>
    </div>
  );
}

export { Counter };
