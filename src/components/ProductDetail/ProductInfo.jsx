import React from 'react';
import styles from './ProductInfo.module.css';
import plus from '../../assets/cart/plus.png';
import minus from '@/assets/cart/count.png';
import counter from '../../components/Counter/Counter.module.css';
import disabledMinus from '../../assets/cart/minus_disabled.png';

function ProductInfo(){

  return (
    <>
      <div className={styles['info-container']}>
        <img width={400} height={514} src='../../../src/assets/tangtang/thumbnail.jpg' alt="" />
        <div className={styles['info-wrapper']}>
          <h5 className={styles.satbyul}>샛별배송</h5>
          <h2 className={styles['product-title']}>[풀무원] 탱탱쫄면 (4개입)</h2>
          <h4 className={styles['product-subtitle']}>튀기지 않아 부담 없는 매콤함</h4>
          <div className={styles['product-cost-box']}>
            <h4 className={styles['product-cost']}>4,980</h4>
            <h4 className={styles.won}>원</h4>
          </div>
          <p className={styles['benefit-after-login']}>로그인 후, 적립 혜택이 제공됩니다.</p>
          <ul className={styles['text-wrapper']}>
            <li className={[styles['info-list'], styles['info-list-border']].join(' ')}>
              <p className={styles['info-list-title']}>배송</p>
              <div className={styles['content-text-box']}>
              <p className={styles['info-list-contents']} style={{fontWeight: '500'}}>샛별배송</p>
              <p className={[styles['info-list-contents'], styles['info-list-contents1']].join(' ')}>23시 전 주문 시 내일 아침 7시 전 도착 <br></br>
(대구 부산 울산 샛별배송 운영시간 별도 확인)</p>
              </div>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>판매자</p>
              <p className={styles['info-list-contents']}>칼리</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>포장타입</p>
              <p className={styles['info-list-contents']}>상온 (종이포장)</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>판매단위</p>
              <p className={styles['info-list-contents']}>1봉</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>중량/용량</p>
              <p className={styles['info-list-contents']}>123g*4봉</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>원산지</p>
              <p className={styles['info-list-contents']} style={{fontWeight:'600'}}>상세페이지 별도표기</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>알레르기정보</p>
              <p className={styles['content-text-box']}>-대두, 밀, 쇠고기 함유
              -계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고
                기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조</p>
            </li>
            <li className={styles['info-list']}>
              <p className={styles['info-list-title']}>상품선택</p>
              <div className={styles['counter-container']}>
              <p className={styles['choice-title']}>[풀무원]탱탱쫄면(4개입)</p>
              <div className={styles['counter-price-wrapper']}>
              <div className={styles['button-box']}>
              <button type="button" className={styles.button}>
                <img src={disabledMinus} alt="수량 감소" width="30" height="30" />
              </button>
              <span className={styles.number}>1</span>
              <button type="button" className={styles.button}>
                <img src={plus} alt="수량 증가" width="30" height="30" />
              </button>
              </div>
              <span className={styles['price-text']}>4,980원</span>
              </div>
            </div>
          </li>
          </ul>
          <div className={styles['priceandpoint-box']}>
            <div className={styles['total-price-box']}>
              <span className={styles['total-price-title']}>총 상품금액:</span>
              <span className={styles['total-price']}>4,980</span><span className={styles.wonDegree}>원</span>
            </div>
            <div className={styles['earn-point-box']}>
              <span className={styles['earn-point']}>적립</span>
              <span className={styles['earn-point-text']}>로그인 후, 적립 혜택 제공</span>
            </div>
          </div>
          <div className={styles['buttons-box']}>
            <img className={styles['btn']} src="../../../src/assets/productDetail/Disabled=false.png" alt="" />
            <img className={styles['btn']} src="../../../src/assets/productDetail/Squrebell.png" alt="" />
            <button className={styles['pick-cart']}>장바구니 담기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo;