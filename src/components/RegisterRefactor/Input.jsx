import React from 'react';
import styles from './Input.module.css';

export function Input({
  title,
  input,
  labelClassName,
  type,
  onChangeEmail,
  onChangePassword,
}) {
  return (
    <>
      <label className={styles[labelClassName]}>{title}</label>
      <input
        type={type}
        className={styles['register-input']}
        {...input}
        onChange={onChangeEmail || onChangePassword}
      />
    </>
  );
}
