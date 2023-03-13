import React from 'react';
import blog from '@/assets/footer/Blog.png';
import styles from '../Footer/Footer.module.css';
import youtube from '@/assets/footer/Youtube.png';
import naver from '@/assets/footer/NaverPost.png';
import facebook from '@/assets/footer/FaceBook.png';
import instagram from '@/assets/footer/Instagram.png';
import isms from '@/assets/footer/logo_isms.png';
import privacy from '@/assets/footer/logo_privacy.png';
import toss from '@/assets/footer/logo_tosspayments.png';
import woriBank from '@/assets/footer/Group.png';

function Footer(props) {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles.wrapper}>
        <section className={styles['karly-information']}>
          <div className={styles.inquiry}>
            <h2 className={styles.title}>고객행복센터</h2>
            <strong className={styles.number}>
              1644-1107
              <span>월~토요일 오전 7시 - 오후 6시</span>
            </strong>
            <div className={styles.kakao}>
              <button type="button">카카오톡 문의</button>
              <div>
                월~토요일 | 오전 7시 - 오후 6시
                <br />
                일/공휴일 | 오전 7시 - 오후 1시
              </div>
            </div>
            <div className={styles.personal}>
              <button type="button">1:1 문의</button>
              <div>
                <span>365일</span>
                <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
              </div>
            </div>
            <div className={styles.order}>
              <button type="button">대량주문 문의</button>
              <div>
                월~금요일 | 오전9시 - 오후 6시
                <br />
                점심시간 | 낮 12시 - 오후 1시
              </div>
            </div>
            <div className={styles['non-member']}>
              비회원 문의 :<span href="#">help@karlycorp.com</span>
            </div>
            <div className={styles['non-member-order']}>
              비회원 대량주문 문의 :<span href="#">help@karlycorp.com</span>
            </div>
          </div>
          <div className={styles.about}>
            <ul className={styles.information}>
              <li>
                <span>칼리소개</span>
              </li>
              <li>
                <span>칼리소개영상</span>
              </li>
              <li>
                <span>인재채용</span>
              </li>
              <li>
                <span>이용약관</span>
              </li>
              <li>
                <span>개인정보처리방침</span>
              </li>
              <li>
                <span>이용안내</span>
              </li>
            </ul>
            <div className={styles['additional-info']}>
              <span>법인명 (상호) : 주식회사 컬리 </span>
              <span className={styles['bar-icon']}>|</span>
              <span>사업자등록번호 : 261-81-23567</span>
              <span className={styles['bar-icon']}>|</span>
              <span className={styles['text-color']}>사업자정보 확인</span>
              <br />

              <span>통신판매업 : 제 2018-서울강남-01646 호</span>
              <span className={styles['bar-icon']}>|</span>
              <span>개인정보보호책임자 : 이원준</span>
              <br />

              <address>
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
              </address>
              <span className={styles['bar-icon']}>|</span>
              <span>대표이사 : 김승아</span>
              <br />

              <span>
                입점문의 :
                <span className={styles['text-color']}>입점문의하기</span>
              </span>
              <span className={styles['bar-icon']}>|</span>
              <span>
                제휴문의 :
                <span className={styles['text-color']}>
                  business@karlycorp.com
                </span>
              </span>
              <br />

              <span>
                채용문의 :
                <span className={styles['text-color']}>
                  recruit@karlycorp.com
                </span>
              </span>
              <br />

              <span>팩스 : 070 - 7500 - 6098 </span>
            </div>
            <ul className={styles['sns-link']}>
              <li>
                <a
                  href="https://blog.naver.com/marketkurly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={blog}
                    alt="블로그로 이동"
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Marketkurly/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebook}
                    alt="페이스북으로 이동"
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marketkurly/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instagram}
                    alt="인스타로 이동"
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://m.post.naver.com/marketkurly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={naver}
                    alt="네이버로 이동"
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtube}
                    alt="유튜브로 이동"
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles['partner-info']}>
          <ul className={styles['partner-organization']}>
            <li>
              <button type="button">
                <img src={isms} alt="isms" width="34px" height="34px" />
                [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영
                <br />
                (심사받지 않은 물리적 인프라 제외)
                <br />
                [유효기간] 2022.01.19 ~ 2025.01.18
              </button>
            </li>
            <li>
              <button type="button">
                <img src={privacy} alt="privacy" width="34px" height="34px" />
                개인정보보호 우수 웹사이트 <br />
                개인정보처리시스템 인증 (ePRIVACY PLUS)
              </button>
            </li>
            <li>
              <button type="button">
                <img src={toss} alt="tosspayment" className="toss-icon" />
                토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
              </button>
            </li>
            <li>
              <button type="button">
                <img src={woriBank} alt="woriBank" width="34px" height="34px" />
                고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증
                계약을 체결하여 안전거래를 보장하고 있습니다.
              </button>
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.bottom}>
        <section>
          <p>
            마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </p>
          <p>
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
        </section>
        <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
      </section>
    </footer>
  );
}

export default Footer;
