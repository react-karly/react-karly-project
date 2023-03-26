import styles from './CartModal.module.css';
import { Counter } from '../../Counter/Counter';
import { useEffect, useState } from 'react';
export function CartModal({ item, onClose }) {
  const [countNum, setCountNum] = useState(1);

  const handlePlus = () => {
    setCountNum(countNum + 1);
  };

  const handleMinus = () => {
    setCountNum(countNum - 1);
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  console.log(item);
  return (
    <div className={styles['modal']} tabIndex="-1">
      <div className={styles['modal__body']} tabIndex="0">
        <div className={styles['add-cart--info']}>
          <p className={styles['add-cart--info--name']}>{item.name}</p>
          <div className={styles['add-cart--info--price']}>
            <p>{item.price.toLocaleString(navigator.language)}원</p>
            <Counter
              quantity={countNum}
              onClickPlus={handlePlus}
              onClickMinus={handleMinus}
            />
          </div>
          <div className={styles['add-cart--info--frame']}>
            <div className={styles['add-cart--info--total']}>
              <span className={styles['add-cart--info--total--text']}>
                합계
              </span>
              <span className={styles['add-cart--info--total--price']}>
                {(item.price * countNum).toLocaleString(navigator.language)}원
              </span>
            </div>
            <div className={styles['add-cart--info--save']}>
              <span className={styles['add-cart--info--badge']}>적립</span>
              <span>구매 시 5원 적립</span>
            </div>
          </div>
        </div>
        <div className={styles['add-cart__button']}>
          <button
            className={styles['add-cart__button--cancel']}
            onClick={onClose}
          >
            취소
          </button>
          <button className={styles['add-cart__button--in']} onClick>
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}
