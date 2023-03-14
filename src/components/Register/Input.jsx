import React from 'react';
import app from '../../App.module.css';
import style from '../../pages/Login.module.css';

const Input = ({ title, placeholder }) => {
  return (
    <li>
      <label className={app['input-label']}>
        <span className={app['a11y-hidden']}>필수입력사항</span>
        {title}
      </label>
      <input
        className={style['input']}
        type="text"
        required
        placeholder={placeholder}
      />
    </li>
  );
};

export default Input;
