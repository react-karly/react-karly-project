import React from 'react';
import styles from './MainPopup.module.css';
import popUpImg from '@/assets/main/POPUP/popup.png';
// import { useCookies } from 'react-cookie'; 	// 리액트 쿠-키 임포트 해오고
// import moment from 'moment';			// moment 라이브러리 임포트 해오고

export function MainPopup() {
  const [modal, setModal] = React.useState(true);

  const closeBtn = () => {
    setModal(false);
  };

  const notTodayBtn = () => {
    // const decade = moment(); // 일단 moment 로 시간변수를 만들어주고
    // decade.add(3650, 'd'); // 10년뒤로 값을 add 해준다.
    // setCookie(COOKIE_KEY, 'true', {
    //   // 쿠키를 셋해준다.
    //   path: '/', // path를 지정해주고
    //   expires: decade.toDate(), // 여기서 날짜를 지정해준다
    // });
  };

  return (
    <div>
      {modal ? (
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
