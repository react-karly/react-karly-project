import React from 'react';
import styles from './Input.module.css';

export function Input({ title, input, labelClassName, type, onChange }) {
  return (
    <>
      <label className={styles[labelClassName]}>{title}</label>
      <input
        type={type}
        className={styles['register-input']}
        {...input}
        onChange={onChange}
      />
    </>
  );
}
