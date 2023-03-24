import React, { useEffect, useState } from 'react';
import styles from '@/components/LoginModal/LoginModal.module.css';

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(true);

  function handleCloseModal() {
    setIsOpen(false);
    location.reload();
  }

  return (
    <div className={`${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>
          <h2 className={styles['a11y-hidden']}>로그인 오류</h2>
          <p>아이디, 비밀번호를 확인해주세요.</p>
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
