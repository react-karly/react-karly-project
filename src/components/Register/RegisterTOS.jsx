import React from 'react';
import styles from '../Register/RegisterTOS.module.css';

export function RegisterTOS({ requiredOrOptional, terms }) {
  return (
    <li>
      <span className={styles['a11y-hidden']}>
        이용약관 동의 여부 ({requiredOrOptional} 항목)
      </span>
      <button className={styles['open-terms']}>약관보기</button>
      <input type="checkbox" id="terms-of-use" name="terms-of-use" required />
      <label htmlFor="terms-of-use">
        {terms} ({requiredOrOptional})
      </label>
    </li>
  );
}
