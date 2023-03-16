import React from 'react';
import style from '../Register/RegisterTOS.module.css';

export function RegisterTOS({ requiredOrOptional, terms }) {
  return (
    <li>
      <span className={style['a11y-hidden']}>
        이용약관 동의 여부 ({requiredOrOptional} 항목)
      </span>
      <button>약관보기</button>
      <input
        className="a11y-hidden terms"
        type="checkbox"
        id="terms-of-use"
        name="terms-of-use"
        required
      />
      <label htmlFor="terms-of-use">
        {terms} ({requiredOrOptional})
      </label>
    </li>
  );
}
