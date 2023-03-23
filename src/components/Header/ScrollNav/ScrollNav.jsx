import React from 'react';
import styles from './ScrollNav.module.css';
import search from '@/assets/header/Search.png';
import location from '@/assets/header/location.png';
import heart from '@/assets/header/heart.png';
import cart from '@/assets/header/cart.png';
import { Link } from 'react-router-dom';
import { Category } from '../Category/Category';

function ScrollNav(props) {
  return (
    <nav className={styles['scroll-header-container']}>
      <div className={styles.wrapper}>
        <Category />
        <ul className={styles.navigation}>
          <li>
            <a href="#">신상품</a>
          </li>
          <li>
            <a href="#">베스트</a>
          </li>
          <li>
            <a href="#">알뜰쇼핑</a>
          </li>
          <li>
            <a href="#">특가/혜택</a>
          </li>
        </ul>

        <div>
          <h2 className={styles['a11y-hidden']}>검색</h2>
          <form className="scroll-form">
            <fieldset>
              <legend>검색 폼</legend>
              <div className={styles.form}>
                <label htmlFor="search" className={styles['a11y-hidden']}>
                  상품검색
                </label>
                <input
                  id="search"
                  type="search"
                  required
                  placeholder="검색어를 입력해주세요."
                />
                <button type="button" className={styles['search-button']}>
                  <img src={search} alt="검색 버튼" width="36" height="36" />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <ul className={styles['icon-link']}>
          <li>
            <span>
              <img src={location} alt="배송지 설정" width="36" height="36" />
            </span>
          </li>
          <li className={styles.heart}>
            <span>
              <img src={heart} alt="찜" width="36" height="36" />
            </span>
          </li>
          <li>
            <Link to="/cart">
              <img
                src={cart}
                alt="장바구니 목록 보기 "
                width="36"
                height="36"
              />
            </Link>
            {/* <span className="cart-number">1</span> */}
            {/* <div className="cart-alarm is-not-exist"></div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { ScrollNav };
