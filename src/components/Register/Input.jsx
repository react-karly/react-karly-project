import React from 'react';
import app from '../../App.module.css';
import login from '../../pages/Login.module.css';
import input from '../Register/Input.module.css';

const Input = ({
  title,
  placeholder,
  labelClassName,
  spanClassName,
  inputClassName,
}) => {
  return (
    <li>
      <label className={input[labelClassName]}>
        <span className={input[spanClassName]}>필수입력사항</span>
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
