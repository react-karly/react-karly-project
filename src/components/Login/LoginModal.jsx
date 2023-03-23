import React from 'react';
import styles from '../Login/LoginModal.module.css';

export default function LoginModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>
          <h2 className={styles['a11y-hidden']}>로그인 오류</h2>
          <p>아이디, 비밀번호를 확인해주세요.</p>
          <div className={styles['btn-container']}>
            <button className={styles['modal-close-button']}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
