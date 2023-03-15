import React from 'react';
import app from '../../App.module.css';
import login from '../../pages/Login.module.css';
import input from '../Register/Input.module.css';

const Input = ({ title, placeholder, inputClassName }) => {
  return (
    <li>
      <label className={login['input-label']}>
        <span className={app['a11y-hidden']}>필수입력사항</span>
        {title}
      </label>
      <input
        className={input[inputClassName]}
        type="text"
        required
        placeholder={placeholder}
      />
    </li>
  );
};

export default Input;
