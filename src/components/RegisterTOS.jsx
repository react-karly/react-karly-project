import React from 'react';
import app from '../App.module.css';

const RegisterTOS = ({ requiredOrOptional }) => {
  return (
    <li>
      <span className="a11y-hidden">
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
      <label for="terms-of-use">이용약관 동의 ({requiredOrOptional})</label>
    </li>
  );
};

export default RegisterTOS;
