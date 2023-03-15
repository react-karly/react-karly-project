import React from 'react';
import input from '../Register/Input.module.css';
import gender from '../Register/GenderRadioBtn.module.css';
import app from '../../App.module.css';

const GenderRadioBtn = () => {
  return (
    <li>
      <p className={input['register-label']}>성별</p>
      <div className={gender['gender-wrapper']}>
        <input
          className={app['a11y-hidden']}
          type="radio"
          id="gender-male"
          name="gender"
          value="male"
        />
        <label htmlFor="gender-male">남자</label>
        <input
          className={app['a11y-hidden']}
          type="radio"
          id="gender-female"
          name="gender"
          value="female"
        />
        <label htmlFor="gender-female">여자</label>
        <input
          className={app['a11y-hidden']}
          type="radio"
          id="gender-none"
          name="gender"
          value="none"
        />
        <label htmlFor="gender-none">선택안함</label>
      </div>
    </li>
  );
};

export default GenderRadioBtn;
