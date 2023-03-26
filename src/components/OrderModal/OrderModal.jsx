import React from 'react';
import styles from './OrderModal.module.css';
import { useNavigate } from 'react-router';

function OrderModal({ setIsShowOrder }) {
  const navigate = useNavigate();

  const handleCloseOrderModal = () => {
    setIsShowOrder(false);
    navigate('/');
  };
  return (
    <div className={styles['order-container']}>
      <div className={styles.wrapper}>
        <p className={styles.content}>상품 주문 완료</p>
        <button
          type="button"
          className={styles.button}
          onClick={handleCloseOrderModal}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
