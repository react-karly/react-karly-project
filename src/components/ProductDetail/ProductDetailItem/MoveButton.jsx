import React from 'react';
import styles from './MoveButton.module.css';

function MoveButton () {
    
    return (
      <div className={styles['review-move-box']}>
        <span className={styles['review-prev-btn']}></span>
        <span className={styles['review-next-btn']}></span>
      </div>
    )
}

export default MoveButton;
