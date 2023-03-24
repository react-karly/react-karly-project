import React from 'react';
import styles from './ScrollNav.module.css';
import search from '@/assets/header/Search.png';
import location from '@/assets/header/location.png';
import heart from '@/assets/header/heart.png';
import cart from '@/assets/header/cart.png';
import { Link } from 'react-router-dom';
import { Category } from '../Category/Category';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartListState } from '../../../@store/cartListState';

function ScrollNav(props) {
  const [cartList, setCartList] = useRecoilState(cartListState);
  return (
    <nav className={styles['scroll-header-container']}>
      <div className={styles.wrapper}>
        <Category />
        <ul className={styles.navigation}>
          <li>
            <Link to="product-list">신상품</Link>
          </li>
          <li>
            <Link to="/product-list">베스트</Link>
          </li>
          <li>
            <Link to="/product-list">알뜰쇼핑</Link>
          </li>
          <li>
            <Link to="/product-list">특가/혜택</Link>
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
          <li className={styles.cart}>
            <Link to="/cart">
              <img
                src={cart}
                alt="장바구니 목록 보기 "
                width="36"
                height="36"
              />
            </Link>
            {cartList.length !== 0 && (
              <span className={styles['cart-number']}>{cartList.length}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { ScrollNav };
