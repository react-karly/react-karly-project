import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import app from '../../App.module.css';
import barImg from '@/assets/cart/cart_bar.png';
import location from '@/assets/cart/Location.png';
import { FoodType } from '@/components/FoodType/FoodType';
import checked from '@/assets/cart/isChecked=true.png';
import unChecked from '@/assets/cart/isChecked=false.png';
import { foodType } from '@/enum/foodType';
import { priceTemplate } from '../../utils/priceTemplate';
import { filterSelectedProducts } from '../../utils/filterSelectedProducts';

function Cart(props) {
  const storageData = JSON.parse(localStorage.getItem('cartItem'));

  const checkAllChecked = (checkArray) => {
    return checkArray?.every((product) => product.isChecked);
  };
  const checkAllUnChecked = (checkArray) => {
    return checkArray?.every((product) => !product.isChecked);
  };
  const initialSelectedCount = (checkArray) => {
    let count = 0;
    checkArray?.map((item) => {
      if (item.isChecked) count++;
    });
    return count;
  };

  const filterType = () => {
    const typeSet = new Set();
    productList.map((item) => typeSet.add(item.type));
    return Array.from(typeSet);
  };

  const [productList, setProductList] = useState(storageData || []);
  const [isAllCheck, setIsAllCheck] = useState(checkAllChecked(storageData));
  const [isAllUnCheck, setIsAllUnCheck] = useState(
    checkAllUnChecked(storageData)
  );
  const [selectedCount, setSelectedCount] = useState(
    initialSelectedCount(storageData)
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const [typeArray, setTypeArray] = useState(filterType(productList));

  const calculateTotalPrice = () => {
    let total = 0;
    const selectedProductList = filterSelectedProducts(productList);
    selectedProductList.map(
      ({ stock, price }) => (total += stock * parseInt(price))
    );
    setTotalPrice(total);
  };

  const handleAllCheck = () => {
    setIsAllCheck((isAllCheck) => !isAllCheck);
    setIsAllUnCheck((isAllUnCheck) => !isAllUnCheck);
  };

  const toggleAllCheck = () => {
    return productList.map((product) => {
      product.isChecked = true;
      setProductList([...productList]);
    });
  };

  const toggleAllUnCheck = () => {
    return productList.map((product) => {
      product.isChecked = false;
      setProductList([...productList]);
    });
  };

  const handleDeleteSelectedItems = () => {
    const selectedProductList = filterSelectedProducts(productList);
    const filteredList = productList.filter(
      (item, index) => !selectedProductList.includes(item)
    );
    setProductList([...filteredList]);
  };

  useEffect(() => {
    if (isAllCheck) toggleAllCheck();
    if (isAllUnCheck) toggleAllUnCheck();
  }, [isAllCheck, isAllUnCheck]);

  useEffect(() => {
    if (checkAllChecked(productList)) {
      setIsAllCheck(true);
      setSelectedCount(productList.length);
    }
    if (checkAllUnChecked(productList)) {
      setIsAllUnCheck(false);
      setSelectedCount(0);
    }
    if (selectedCount === productList.length) {
      setIsAllCheck(false);
    }

    calculateTotalPrice();
    localStorage.setItem('cartItem', JSON.stringify([...productList]));
  }, [productList, selectedCount, totalPrice]);

  if (productList.length === 0)
    return (
      <div className={styles['cart-container']}>
        <h1 className={styles.title}>장바구니</h1>
        <p>장바구니에 담긴 상품이 없습니다.</p>
      </div>
    );
  return (
    <div className={styles['cart-container']}>
      <h1 className={styles.title}>장바구니</h1>
      <article className={styles.content}>
        <section className={styles['cart-list-wrapper']}>
          <h2 className={app['a11y-hidden']}>장바구니 상품 목록</h2>
          <div className={styles['select-box']}>
            <button
              type="button"
              className={styles['select-button']}
              onClick={handleAllCheck}
            >
              <img
                src={selectedCount === productList.length ? checked : unChecked}
                alt={
                  selectedCount === productList.length
                    ? '전체 선택 해제하기'
                    : '전체 선택하기'
                }
                width="24"
                height="24"
                className={styles['select-img']}
              />
              {`전체선택 (${selectedCount}/${productList.length})`}
            </button>
            <img src={barImg} alt="" width="1" height="10" />
            <button
              type="button"
              className={styles['select-button']}
              onClick={handleDeleteSelectedItems}
            >
              선택삭제
            </button>
          </div>
          <ul className={styles['food-type-list']}>
            {typeArray.includes('refrigerated') && (
              <li>
                <FoodType
                  type={foodType.refrigerated}
                  productList={productList}
                  setProductList={setProductList}
                  setSelectedCount={setSelectedCount}
                />
              </li>
            )}
            {typeArray.includes('frozen') && (
              <li>
                <FoodType
                  type={foodType.frozen}
                  productList={productList}
                  setProductList={setProductList}
                  setSelectedCount={setSelectedCount}
                />
              </li>
            )}
            {typeArray.includes('normal') && (
              <li>
                <FoodType
                  type={foodType.normal}
                  productList={productList}
                  setProductList={setProductList}
                  setSelectedCount={setSelectedCount}
                />
              </li>
            )}
          </ul>
          <div className={styles['select-box']}>
            <button
              type="button"
              className={styles['select-button']}
              onClick={handleAllCheck}
            >
              <img
                src={selectedCount === productList.length ? checked : unChecked}
                alt={
                  selectedCount === productList.length
                    ? '전체 선택 해제하기'
                    : '전체 선택하기'
                }
                width="24"
                height="24"
                className={styles['select-img']}
              />
              {`전체선택 (${selectedCount}/${productList.length})`}
            </button>
            <img src={barImg} alt="" width="1" height="10" />
            <button type="button" className={styles['select-button']}>
              선택삭제
            </button>
          </div>
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
                <span>{`${priceTemplate(totalPrice)}원`}</span>
              </div>
              <div>
                <span>상품할인금액</span>
                <span>0원</span>
              </div>
              <div>
                <span>배송비</span>
                <span>{selectedCount === 0 ? '0원' : '+3,000원'}</span>
              </div>
            </div>
            <div className={styles['price-total']}>
              <span className={styles['total-text']}>결제예정금액</span>
              <span className={styles['total-number']}>
                <strong>
                  {selectedCount === 0 ? '0' : priceTemplate(totalPrice + 3000)}
                </strong>
                원
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
