import React from 'react';
import icon from '@/assets/header/menuIcon/Icon-00.png';
import styles from './CategoryItem.module.css';
function CategoryItem({ src, categoryName }) {
  return (
    <span className={styles.name}>
      <img src={src} alt="" width="24" height="24" className={styles.image} />
      {categoryName}
    </span>
  );
}

export { CategoryItem };
