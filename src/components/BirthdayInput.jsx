import React from 'react';
import app from '../App.module.css';

const BirthdayInput = () => {
  return (
    <div>
      <li>
        <p>생년월일</p>
        <div>
          <label for="birth-year" className={app['a11y-hidden']}>
            연도 입력(4글자)
          </label>
          <input
            type="text"
            maxlength="4"
            minlength="4"
            id="birth-year"
            name="birth-year"
            placeholder="YYYY"
            aria-hidden="true"
          />
          <span aria-hidden="true">/</span>
          <label for="birth-month" className={app['a11y-hidden']}>
            월 입력(2글자)
          </label>
          <input
            type="text"
            maxlength="2"
            minlength="2"
            id="birth-month"
            name="birth-month"
            placeholder="MM"
            aria-hidden="true"
          />
          <span aria-hidden="true">/</span>
          <label for="birth-day" className={app['a11y-hidden']}>
            일 입력(2글자)
          </label>
          <input
            type="text"
            maxlength="2"
            minlength="2"
            id="birth-day"
            name="birth-day"
            placeholder="DD"
            aria-hidden="true"
          />
        </div>
      </li>
    </div>
  );
};

export default BirthdayInput;
