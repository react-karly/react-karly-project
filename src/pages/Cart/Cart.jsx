import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import barImg from '@/assets/cart/cart_bar.png';
import location from '@/assets/cart/Location.png';
import checked from '@/assets/cart/isChecked=true.png';
import unChecked from '@/assets/cart/isChecked=false.png';
import { FoodType } from '@/components/FoodType/FoodType';
import { foodType } from '@/enum/foodType';
import { priceTemplate } from '@/utils/priceTemplate';
import { filterSelectedProducts } from '@/utils/filterSelectedProducts';
import {
  cartListState,
  shippingState,
  checkAllCheck,
  checkAllUnCheck,
  filterType,
} from '../../@store/cartListState';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ShippingModalWrapper from '@/components/ShippingModalWrapper/ShippingModalWrapper';
import ShippingModal from '@/components/ShippingModalWrapper/ShippingModal/ShippingModal';

function Cart(props) {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [shipping, setShipping] = useRecoilState(shippingState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  const [isShowShipping, setIsShowShipping] = useState(false);

  const typeArray = useRecoilValue(filterType);

  const isAllCheck = useRecoilValue(checkAllCheck);
  const isAllUnCheck = useRecoilValue(checkAllUnCheck);

  const checkIsAllChecked = useSetRecoilState(checkAllCheck);
  const checkIsAllUnChecked = useSetRecoilState(checkAllUnCheck);

  const handleAllCheck = () => {
    isAllCheck ? checkIsAllUnChecked() : checkIsAllChecked();
  };

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const handleDeleteSelectedItems = () => {
    const selectedIndex = [];
    cartList.map((product, index) => {
      if (product.isChecked) selectedIndex.push(index);
    });
    const newList = cartList.map((product, index) => {
      if (selectedIndex.includes(index))
        return replaceItemAtIndex(cartList, index, 0)[index];
      else return product;
    });
    const filterList = newList.filter((item) => item !== 0);
    setCartList(filterList);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    const selectedProductList = filterSelectedProducts(cartList);
    selectedProductList.map(
      ({ stock, price }) => (total += stock * parseInt(price))
    );
    setTotalPrice(total);
  };

  const calculateSalePrice = () => {
    let saleTotal = 0;
    const selectedProductList = filterSelectedProducts(cartList);
    selectedProductList.map(({ stock, price, salePrice }) => {
      if (salePrice) saleTotal += stock * parseInt(price - salePrice);
    });
    setSalePrice(saleTotal);
  };

  const countSelectedProduct = () => {
    let selectedCount = 0;
    cartList.map((item) => {
      if (item.isChecked) selectedCount++;
    });
    setSelectedCount(selectedCount);
  };

  useEffect(() => {
    if (isAllCheck) {
      checkIsAllChecked();
    }
    if (isAllUnCheck) {
      checkIsAllUnChecked();
    }
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    calculateSalePrice();
    countSelectedProduct();
  }, [cartList]);

  if (cartList.length === 0)
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
          <h2 className={styles['a11y-hidden']}>장바구니 상품 목록</h2>
          <div className={styles['select-box']}>
            <button
              type="button"
              className={styles['select-button']}
              onClick={handleAllCheck}
            >
              <img
                src={
                  selectedCount === cartList.length && isAllCheck
                    ? checked
                    : unChecked
                }
                alt="선택"
                width="24"
                height="24"
                className={styles['select-img']}
              />
              {`전체선택 (${selectedCount}/${cartList.length})`}
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
                <FoodType type={foodType.refrigerated} />
              </li>
            )}
            {typeArray.includes('frozen') && (
              <li>
                <FoodType type={foodType.frozen} />
              </li>
            )}
            {typeArray.includes('normal') && (
              <li>
                <FoodType type={foodType.normal} />
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
                src={selectedCount === cartList.length ? checked : unChecked}
                alt="선택"
                width="24"
                height="24"
                className={styles['select-img']}
              />
              {`전체선택 (${selectedCount}/${cartList.length})`}
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
        </section>
        <section className={styles['order-info-wrapper']}>
          <h2 className={styles['a11y-hidden']}>주문 정보</h2>
          {/* 배송지 정보 */}
          <div className={styles['location-info']}>
            {shipping && (
              <>
                <div className={styles['location-info-title']}>
                  <img src={location} alt="" width="36" height="36" />
                  배송지
                </div>
                <p className={styles['location']}>{shipping}</p>
                <span className={styles['delivery-method']}>샛별배송</span>
              </>
            )}
            <button
              type="button"
              className={styles['edit-button']}
              onClick={() => {
                setIsShowShipping(true);
              }}
            >
              {shipping ? '배송지 변경' : '배송지 설정'}
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
                <span>{`-${priceTemplate(salePrice)}원`}</span>
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
                  {selectedCount === 0
                    ? '0'
                    : priceTemplate(totalPrice - salePrice + 3000)}
                </strong>
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
      {isShowShipping && (
        <ShippingModalWrapper>
          <ShippingModal setIsShowShipping={setIsShowShipping} />
        </ShippingModalWrapper>
      )}
    </div>
  );
}

export default Cart;
