import React from 'react';
import DaumPost from './DaumPost';
import styles from './ShippingModal.module.css';
import close from '@/assets/header/Close.png';
function ShippingModal({ setIsShowShipping }) {
  const handleCloseModal = () => {
    setIsShowShipping(false);
  };
  return (
    <div className={styles['post-container']}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>주소 설정</h2>
        <button
          type="button"
          onClick={handleCloseModal}
          className={styles.button}
        >
          <img src={close} alt="배송지 설정 닫기" width="40" height="40" />
        </button>
      </div>
      <DaumPost setIsShowShipping={setIsShowShipping} />
    </div>
  );
}

export default ShippingModal;
