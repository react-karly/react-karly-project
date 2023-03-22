import React from 'react';
import styles from './MainPopup.module.css';
import popUpImg from '@/assets/main/POPUP/popup.png';
import { useState, useEffect } from "react";

export function MainPopup() {
  const [popup, setPopup] = React.useState(true);
  const [showPopup, setShowPopup] = React.useState(true);

  const closeBtn = () => {
    setPopup(false);
  };

 
    useEffect(() => {
      const lastPopupViewed = localStorage.getItem('lastPopupViewed');
      if (lastPopupViewed && Date.now() - lastPopupViewed < 86400000) {
        setShowPopup(false);
      }
    }, []);
  
    const notTodayBtn = () => {
      localStorage.setItem('lastPopupViewed', Date.now());
      setShowPopup(false);
    };



  return (
    <div>
      {popup && showPopup ? (
        <div>
          <h2 className={styles['a11y-hidden']}>팝업창</h2>
          <div className={styles['popup-container']}>
            <a href="/">
              <img
                className={styles['popup__img']}
                src={popUpImg}
                alt="팝업창 이미지"
              />
            </a>

            <div className={styles['popup-wrapper']}>
              <button
                onClick={notTodayBtn}
                className={styles['not-today-btn']}
                type="button"
              >
                오늘 하루 안 보기
              </button>
              <button
                onClick={closeBtn}
                className={styles['close-btn']}
                type="button"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
