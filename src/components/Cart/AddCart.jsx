import React from 'react';
import styles from './AddCart.module.css';


export function AddCart() {
  
  const cancle = ()=> {
    console.log("오늘 하루 안보기");
     }
  
  const addCart = ()=> {
      console.log("닫기");
       }

  return (
    <div>
      <h2 className={styles['a11y-hidden']}>장바구니 담기</h2>
      <div className={styles['product-amount-container']}>
 
      <a href="/"><img className={styles['popup__img']} src={popUpImg} alt="팝업창 이미지" /></a><a/>
        <div className={styles['popup-wrapper']}>
        <button onClick={notTodayBtn} className={styles['not-today-btn']} type="button">오늘 하루 안 보기</button>
        <button onClick={closeBtn} className={styles['close-btn']} type="button">닫기</button>
        </div>
     </div>
    </div>
  );
}
