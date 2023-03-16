import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import styles from './Header.module.css';
import logo from '@/assets/header/logo.svg';
import location from '@/assets/header/location.png';
import heart from '@/assets/header/heart.png';
import cart from '@/assets/header/cart.png';
import dropdown from '@/assets/header/hamburger.png';
import dropdown_active from '@/assets/header/hamburger_active.png';
import newIcon from '@/assets/header/Vector.png';
import search from '@/assets/header/Search.png';

function Header(props) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.banner}>
        단 7일, 지금 가입하고 <span>1만원 할인</span> 쿠폰 받아가세요!
      </div>
      <div className={styles.wrapper}>
        <section className={styles.member}>
          <ul className={styles['member-wrapper']}>
            <li className={!isLogin ? styles.signup : ''}>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>고객센터</li>
          </ul>
        </section>
        <section className={styles['header-main']}>
          <div>
            <img src={logo} alt="칼리 로고" />
            <button
              className={styles['karly-link-btn']}
              //   onClick={() => {
              //     isChecked(false);
              //   }}
            >
              마켓컬리
            </button>
            <button className={styles['karly-link-btn']}>
              뷰티컬리
              <img src={newIcon} />
            </button>
          </div>
          <div className={styles['search-box']}>
            <label htmlFor="검색창" className={styles['a11y-hidden']}>
              검색창
            </label>
            <input
              className={styles['search-input']}
              placeholder="검색어를 입력해주세요"
            />
            <img className={styles['search-icon']} src={search} />
          </div>
          <div className={styles['quick-menu']}>
            <span>
              <img src={location} alt="배송지 등록" />
            </span>
            <span>
              <img src={heart} alt="찜하기" />
            </span>
            <span>
              <img src={cart} alt="장바구니" />
            </span>
          </div>
        </section>
        <nav>
          <div
            className={styles.dropdown}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            {isHover ? <img src={dropdown_active} /> : <img src={dropdown} />}
            <div>카테고리</div>
          </div>
          <ul className={styles['menu-wrapper']}>
            <li className={styles.menu}>
              <Link to="/footer">
                <span>신상품</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/footer">
                <span>베스트</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/footer">
                <span>알뜰쇼핑</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/footer">
                <span>특가혜택</span>
              </Link>
            </li>
          </ul>
          <div className={styles.notify}>
            <span>샛별 · 낮</span> 배송안내
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
