import React from 'react';
import styles from './Btn.module.css';

export function Btn({ btnTitle, buttonClassName }) {
  return (
    <div className={styles['btn-container']}>
      <button type="button" className={styles[buttonClassName]}>
        {btnTitle}
      </button>
    </div>
  );
}
