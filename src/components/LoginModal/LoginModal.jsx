import React, { useEffect, useState } from 'react';
import styles from '@/components/LoginModal/LoginModal.module.css';

export default function LoginModal({
  errorMessage,
  errorType,
  isOpen,
  setIsOpen,
}) {
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className={`${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>
          <h2 className={styles['a11y-hidden']}>{errorType}</h2>
          <p>{errorMessage}</p>
          <div className={styles['btn-container']}>
            <button
              className={styles['modal-close-button']}
              onClick={handleCloseModal}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
