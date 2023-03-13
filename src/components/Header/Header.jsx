import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.container}>
      <div className={styles.banner}>asdasdasd</div>
      <div className={styles.wrapper}>
        <section className={styles.member}>
          <ul className={styles['member-wrapper']}>
            <li>회원가입</li>
            <li>로그인</li>
            <li>고객센터</li>
          </ul>
        </section>
        <section className={styles['header-main']}>
          <div>
            <span>로고1</span>
            <span>로고2</span>
            <span>로고3</span>
          </div>
          <div>
            <label htmlFor="검색창">
              <input placeholder="ㅁㄴㅇㅁㄴ" />
            </label>
          </div>
          <div>
            <span>배송지등록</span>
            <span>찜</span>
            <span>장바구니</span>
          </div>
        </section>
        <nav>
          <div className={styles.dropdown}>카테고리 드롭다운</div>
          <ul className={styles['menu-wrapper']}>
            <li className={styles.menu}>신상품</li>
            <li className={styles.menu}>베스트</li>
            <li className={styles.menu}>알뜰쇼핑</li>
            <li className={styles.menu}>특가혜택</li>
          </ul>
          <div className={styles.notify}>샛별 택배배송안내</div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
