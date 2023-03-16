import React from 'react';
import styles from './MainPopup.module.css';
import popUpImg from '@/assets/main/POPUP/popup.png';

export function MainPopup() {
  
  const notTodayBtn = ()=> {
    console.log("오늘 하루 안보기");
     }
  
  const closeBtn = ()=> {
      console.log("닫기");
       }

  return (
    <div>
      <h2 className={styles['a11y-hidden']}>팝업창</h2>
      <div className={styles['popup-container']}>
 
      <a href="/"><img className={styles['popup__img']} src={popUpImg} alt="팝업창 이미지" /></a><a/>
        <div className={styles['popup-wrapper']}>
        <button onClick={notTodayBtn} className={styles['not-today-btn']} type="button">오늘 하루 안 보기</button>
        <button onClick={closeBtn} className={styles['close-btn']} type="button">닫기</button>
        </div>
     </div>
    </div>
  );
}
