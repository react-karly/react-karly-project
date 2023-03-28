import React from 'react';
import icon from '@/assets/header/menuIcon/Icon-00.png';
import styles from './CategoryItem.module.css';
function CategoryItem({ categoryName, imageSrc }) {
  return (
    <span className={styles.name}>
      <img
        src={imageSrc}
        alt=""
        width="24"
        height="24"
        className={styles.image}
      />
      {categoryName}
    </span>
  );
}

export { CategoryItem };
