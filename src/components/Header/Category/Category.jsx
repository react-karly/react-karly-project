import React, { useState, useCallback } from 'react';
import styles from './Category.module.css';
import dropdown from '@/assets/header/hamburger.png';
import dropdown_active from '@/assets/header/hamburger_active.png';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { categoryName } from '../../../enum/categoryName';
import { categoryImage } from '../../../enum/categoryName';
function Category(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);
  return (
    <div
      className={styles.category}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      tabIndex="0"
    >
      <div className={styles.box}>
        <img
          src={isHover ? dropdown_active : dropdown}
          alt=""
          width="16"
          height="14"
        />
        <span className={isHover ? styles['hover-category'] : styles.text}>
          카테고리
        </span>
      </div>
      {isHover && (
        <ul className={styles['category-list']}>
          {categoryName.map((name, index) => (
            <li key={index}>
              <CategoryItem
                categoryName={name}
                imageSrc={categoryImage[index]}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Category };
