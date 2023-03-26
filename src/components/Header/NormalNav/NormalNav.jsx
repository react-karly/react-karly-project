import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NormalNav.module.css';
import { Category } from '../Category/Category';
const NormalNav = (props) => {
  return (
    <nav className={styles.nav}>
      <Category />
      <ul className={styles['menu-wrapper']}>
        <li className={styles.menu}>
          <Link to="/product-list">
            <span>신상품</span>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link to="/product-list">
            <span>베스트</span>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link to="/product-list">
            <span>알뜰쇼핑</span>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link to="/product-list">
            <span>특가혜택</span>
          </Link>
        </li>
      </ul>
      <div className={styles.notify}>
        <span>샛별 · 낮</span> 배송안내
      </div>
    </nav>
  );
};
export { NormalNav };
