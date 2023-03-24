import React from 'react';
import styles from '@/components/Register/Btn.module.css';

export function Btn({ btnTitle, buttonClassName, onClick }) {
  return (
    <div className={styles['btn-container']}>
      <button
        type="button"
        className={styles[buttonClassName]}
        onClick={onClick}
      >
        {btnTitle}
      </button>
    </div>
  );
}
