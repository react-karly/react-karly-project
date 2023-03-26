import React from 'react';
import styles from '@/components/Register/Input.module.css';

export function Input({
  title,
  placeholder,
  labelClassName,
  inputClassName,
  type,
  onChange,
  value,
  input,
}) {
  return (
    <>
      <label className={styles[labelClassName]}>{title}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        onChange={onChange}
        className={styles[inputClassName]}
        value={value}
        {...input}
      />
    </>
  );
}
