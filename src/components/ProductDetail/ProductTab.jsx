import React from 'react';
import styles from './ProductTab.module.css';

export default function ProductTab(){


  return (
    <>
      <div className={styles['button-container']}>
          <button className={styles['btn-style']}>상품설명</button>
          <button className={styles['btn-style']}>상세정보</button>
          <button className={styles['btn-style']}>후기(1,000)</button>
          <button className={[styles['btn-style'], styles['btn-style-border']].join(' ')}>문의</button>
        </div>
    </>
  )
}
