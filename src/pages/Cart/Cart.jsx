import React from 'react';
import styles from './Cart.module.css';
import app from '../../App.module.css';
import barImg from '@/assets/cart/cart_bar.png';
import location from '@/assets/cart/Location.png';
import { FoodType } from '@/components/FoodType/FoodType';
import unChecked from '@/assets/cart/isChecked=false.png';
import { foodType } from '@/enum/foodType';

function Cart(props) {
  //임시 데이터
  const products = [
    {
      id: 'product-1',
      title: '[풀무원] 냉장탱탱쫄면 (4개입)',
      price: '4980',
      type: 'refrigerated',
    },
    {
      id: 'product-2',
      title: '[풀무원] 냉동1탱탱쫄면 (4개입)',
      price: '4980',
      type: 'frozen',
    },
    {
      id: 'product-3',
      title: '[풀무원] 냉동2탱탱쫄면 (4개입)',
      price: '4980',
      type: 'frozen',
    },
    {
      id: 'product-4',
      title: '[풀무원] 상온탱탱쫄면 (4개입)',
      price: '4980',
      type: 'normal',
    },
  ];

  return (
    <div className={styles['cart-container']}>
      <h1 className={styles.title}>장바구니</h1>
      <article className={styles.content}>
        <section className={styles['cart-list-wrapper']}>
          <h2 className={app['a11y-hidden']}>장바구니 상품 목록</h2>
          <div className={styles['select-box']}>
            <button type="button" className={styles['select-button']}>
              <img
                // 체크 되면 체크된 아이콘으로 변경
                src={unChecked}
                alt="전체선택"
                width="24"
                height="24"
                className={styles['select-img']}
              />
              전체선택 &#40;3&#47;3&#41;
            </button>
            <img src={barImg} alt="" width="1" height="10" />
            <button type="button" className={styles['select-button']}>
              선택삭제
            </button>
          </div>
          <ul className={styles['food-type-list']}>
            <li>
              <FoodType type={foodType.refrigerated} productList={products} />
            </li>
            <li>
              <FoodType type={foodType.frozen} productList={products} />
            </li>
            <li>
              <FoodType type={foodType.normal} productList={products} />
            </li>
          </ul>
        </section>
        <section className={styles['order-info-wrapper']}>
          <h2 className={app['a11y-hidden']}>주문 정보</h2>
          {/* 배송지 정보 */}
          <div className={styles['location-info']}>
            <div className={styles['location-info-title']}>
              <img src={location} alt="" width="36" height="36" />
              배송지
            </div>
            <p className={styles['location']}>
              서울 중랑구 면목로 42길 11 &#40;행운빌딩&#41; 603호
            </p>
            <span className={styles['delivery-method']}>샛별배송</span>
            <button type="button" className={styles['edit-button']}>
              배송지 변경
            </button>
          </div>
          {/* 구매 금액 정보  */}
          <div className={styles['price-info']}>
            <div className={styles['price-detail']}>
              <div>
                <span>상품금액</span>
                <span>40,680원</span>
              </div>
              <div>
                <span>상품할인금액</span>
                <span>-4,651원</span>
              </div>
              <div>
                <span>배송비</span>
                <span>+3,000원</span>
              </div>
            </div>
            <div className={styles['price-total']}>
              <span className={styles['total-text']}>결제예정금액</span>
              <span className={styles['total-number']}>
                <strong>40,680</strong>원
              </span>
            </div>
            <div className={styles.accumulate}>
              <span className={styles['accumulate-label']}>적립</span>
              <span className={styles['accumulate-desc']}>
                최대 36원 적립 일반 0.1%
              </span>
            </div>
          </div>
          <button type="button" className={styles['order-button']}>
            주문하기
          </button>
          <div className={styles['additional-info']}>
            <p>쿠폰&#47;적립금은 주문서에서 사용 가능합니다</p>
            <p>&#91;주문완료&#93; 상태일 경우에만 주문 취소 가능합니다.</p>
            <p>
              &#91;마이컬리 &#62; 주문내역 상세페이지&#93; 에서 직접 취소하실 수
              있습니다.
            </p>
            <p>
              쿠폰&#44; 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종
              산정됩니다.
            </p>
            <p>
              상품별로 적립금 지급 기준이 다를 수 있습니다. &#40;상품 상세
              페이지에서 확인 가능합니다&#41;
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Cart;
