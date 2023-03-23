import React from 'react';
import app from '../../App.module.css';

const RegisterTOS = ({ requiredOrOptional, terms }) => {
  return (
    <li>
      <span className={app['a11y-hidden']}>
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
};

export default RegisterTOS;
