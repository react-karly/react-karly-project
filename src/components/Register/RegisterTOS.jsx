import React from 'react';
import styles from '../Register/RegisterTOS.module.css';

export function RegisterTOS({ requiredOrOptional, terms, id }) {
  return (
    <li className={styles['term-container']}>
      <span className={styles['a11y-hidden']}>
        이용약관 동의 여부 ({requiredOrOptional} 항목)
      </span>
      <input type="checkbox" id={id} name={id} required />
      <label htmlFor={id}>
        {terms} ({requiredOrOptional})
      </label>
      <button className={styles['show-term']}>약관보기 &gt;</button>
    </li>
  );
}
