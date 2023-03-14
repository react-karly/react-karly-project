import React from 'react';
import app from '../App.module.css';

const EventRadioBtn = () => {
  return (
    <div>
      <li>
        <p>추가입력 사항</p>
        <div>
          <input
            type="radio"
            id="recommand-id"
            name="extra"
            value="recommand-id"
          />
          <label htmlFor="recommand-id">친구초대 추천인 아이디</label>
          <input type="radio" id="event" name="extra" value="event" />
          <label htmlFor="event">참여 이벤트명</label>
        </div>
      </li>
    </div>
  );
};

export default EventRadioBtn;
