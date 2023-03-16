import React from 'react';
import styles from './Input.module.css';

export function Input({ title, input, labelClassName }) {
  return (
    <>
      <label className={styles[labelClassName]}>{title}</label>
      <input className={styles['register-input']} {...input} />
    </>
  );
}
