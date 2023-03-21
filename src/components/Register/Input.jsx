import React from 'react';
import style from '../Register/Input.module.css';

export function Input({
  title,
  placeholder,
  labelClassName,
  spanClassName,
  inputClassName,
  type,
  onChange,
}) {
  return (
    <li>
      <label className={style[labelClassName]}>
        <span className={style[spanClassName]}>필수입력사항</span>
        {title}
      </label>
      <input
        className={style[inputClassName]}
        type={type}
        required
        placeholder={placeholder}
        onChange={onChange}
      />
    </li>
  );
}
