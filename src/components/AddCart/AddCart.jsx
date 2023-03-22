import React from 'react';
import styles from './AddCart.module.css';

export function AddCart(props) {
  // console.log(666666, props)
  const { data } = props;

  console.log(data);

  const [modal, setModal] = React.useState(true);

  const minus = () => {
    console.log('감소');
  };

  const plus = () => {
    console.log('증가');
  };

  const cancle = () => {
    setModal(false);
  };

  const addCart = () => {
    console.log('장바구니 담기');
  };

  return (
    <div>
      {modal ? (
        <div>
          <h2 className={styles['a11y-hidden']}>장바구니 담기</h2>
          <div className={styles['add-cart-container']}>
            <div className={styles['product-amount-wrapper']}>
              <span className={styles['product-name']}>{data.name}</span>
              <div className={styles['price-counter-wrapper']}>
                <span className={styles['product-price']}>{data.price}</span>
                <div className={styles['counter-box']}>
                  <button
                    onClick={minus}
                    className={styles['minus-btn']}
                    type="button"
                  >
                    −
                  </button>
                  <span className={styles['counter-value']}>0</span>
                  <button
                    onClick={plus}
                    className={styles['plus-btn']}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={styles['total-price-wrapper']}>
              <span className={styles['total-price']}>합계</span>
              <span className={styles['total-price-number']}>4,980원</span>
              <span className={styles['saving']}>적립</span>
              {/* <span className={styles['saving-price']}>구매 시 {props.saving}원 적립</span> */}
              <span className={styles['saving-price']}>구매 시 0원 적립</span>
            </div>

            <button
              onClick={cancle}
              className={styles['cancle-btn']}
              type="button"
            >
              취소
            </button>
            <button
              onClick={addCart}
              className={styles['add-cart-btn']}
              type="button"
            >
              장바구니 담기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
