import React from 'react';
import styles from './AddCart.module.css';
import { useState } from 'react';
import { Counter } from '../Counter/Counter';

export function AddCart(props) {
  // console.log(666666, props)
  const { data } = props;

  // console.log(data);

  const [modal, setModal] = React.useState(true); // "닫기" 상태 관리
  const [countNum, setCountNum] = useState(1); // "카운터" 상태 관리

  const handleMinus = () => {
    setCountNum(countNum - 1);
    console.log('-');
  };

  const handlePlus = () => {
    setCountNum(countNum + 1);
  };

  const cancle = () => {
    setModal(false);
  };

  const addCart = () => {
    console.log('장바구니 담기');
  };

  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1);
  //   };
  // }, []);

  return (
    <div className={styles['modal-background']}>
      {modal ? (
        <div>
          <h2 className={styles['a11y-hidden']}>장바구니 담기</h2>
          <div className={styles['add-cart-container']}>
            <div className={styles['product-amount-wrapper']}>
              <span className={styles['product-name']}>{data.name}</span>
              <div className={styles['price-counter-wrapper']}>
                {data.saleRatio ? (
                  <div>
                  <span className={styles['product-price']}>
                    {(data.price * (1 - data.saleRatio)).toLocaleString(
                      navigator.language
                    )}
                    원
                    </span>
                    <span className={styles['original-price']}>
                    {data.price.toLocaleString(
                      navigator.language
                    )}원
                  </span>
                  </div>
                ) : (
                  <span className={styles['product-price']}>
                    {data.price.toLocaleString(navigator.language)}원
                  </span>
                )}

                <div className={styles['counter-box']}>
                  <Counter
                    quantity={countNum}
                    onClickPlus={handlePlus}
                    onClickMinus={handleMinus}
                  />
                </div>
              </div>
            </div>

            <div className={styles['total-price-wrapper']}>
              <span className={styles['total-price']}>합계</span>
              {data.saleRatio ? (
                <span className={styles['total-price-number']}>
                  {(data.price * (1 - data.saleRatio)* countNum).toLocaleString(
                    navigator.language
                  )}
                  원
                </span>
              ) : (
                <span className={styles['total-price-number']}>
                  {(data.price * countNum).toLocaleString(navigator.language)}원
                </span>
              )}
              <div className={styles['saving-wrapper']}>
              <span className={styles['saving']}>적립</span>
              {data.saleRatio ? (
                 <span className={styles['saving-price']}> 구매 시 {" "}
                 {Math.floor((data.price * (1 - data.saleRatio)* countNum * 0.01).toLocaleString(
                  navigator.language
                ))}
                 원 적립</span>
              ):(
                <span className={styles['saving-price']}>구매 시 {" "}
                {Math.floor((data.price * countNum * 0.001).toLocaleString(
                 navigator.language
               ))}
               원 적립</span>
              )}
              </div>
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