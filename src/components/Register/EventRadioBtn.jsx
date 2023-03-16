import React from 'react';
import style from '../Register/EventRadioBtn.module.css';

export function EventRadioBtn() {
  return (
    <div>
      <li>
        <p className={style['register-label']}>추가입력 사항</p>
        <div className={style['event-wrapper']}>
          <input
            className={style['a11y-hidden']}
            type="radio"
            id="recommand-id"
            name="extra"
            value="recommand-id"
          />
          <label htmlFor="recommand-id">친구초대 추천인 아이디</label>
          <input
            className={style['a11y-hidden']}
            type="radio"
            id="event"
            name="extra"
            value="event"
          />
          <label htmlFor="event">참여 이벤트명</label>
        </div>
      </li>
    </div>
  );
}
