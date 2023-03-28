import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import minus from '@/assets/cart/count.png';
import { Counter } from '../Counter/Counter';
import styles from './ProductInfo.module.css';
import plus from '@/assets/cart/plus.png';
import heartFill from '@/assets/ProductDetail/heart-fill.png';
import disabledMinus from '@/assets/cart/minus_disabled.png';
import counter from '@/components/Counter/Counter.module.css';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import heartNoFill from '@/assets/productDetail/Disabled=false.png';
import CartAddedModal from './ProductDetailItem/CartAddedModal/CartAddedModal';
import InfoList from './ProductDetailItem/InfoList/InfoList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { priceTemplate } from '@/utils/priceTemplate';
import {
  addExistProduct,
  cartListState,
  lastAddProductState,
} from '@/@store/cartListState';
import { isLoggedInState } from '@/@store/auth';

function ProductInfo({ product }) {
  const [productInfo, setProductInfo] = useState(product);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [like, setLike] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [lastProduct, setLastProduct] = useRecoilState(lastAddProductState);
  const addItem = useSetRecoilState(addExistProduct);

  const handleClickPlus = () => {
    setProductInfo({ ...productInfo, stock: productInfo.stock + 1 });
  };

  const handleClickMinus = () => {
    setProductInfo({ ...productInfo, stock: productInfo.stock - 1 });
  };

  const handleAddCart = () => {
    const newItem = {
      type: product.type,
      title: product.name,
      src: product.image.thumbnail,
      alt: product.image.alt,
      price: product.price,
      salePrice: product.salePrice,
      stock: productInfo.stock,
      isChecked: true,
    };

    const titleList = [];
    cartList.map((product) => {
      titleList.push(product.title);
    });
    if (titleList.includes(newItem.title)) {
      addItem([newItem.title, 1]);
    } else {
      setCartList([...cartList, { ...newItem }]);
    }
    setLastProduct(newItem);
  };

  useEffect(() => {
    setProductInfo(product);
  }, [product]);

  return (
    <>
      <div className={styles['info-container']}>
        {/* 상품 정보 */}
        <img
          width={400}
          height={514}
          src={productInfo.image?.thumbnail}
          alt={productInfo.image?.alt}
        />

        <div className={styles['info-wrapper']}>
          <h5 className={styles.satbyul}>샛별배송</h5>
          <h2 className={styles['product-title']}>{productInfo.name}</h2>
          <h4 className={styles['product-subtitle']}>
            {productInfo.description}
          </h4>
          <div className={styles['product-cost-box']}>
            <h4 className={styles['product-cost']}>
              {productInfo.price?.toLocaleString()}
            </h4>
            <h4 className={styles.won}>원</h4>
          </div>

          {!isLoggedIn && (
            <p className={styles['benefit-after-login']}>
              로그인 후, 적립 혜택이 제공됩니다.
            </p>
          )}

          <ul className={styles['text-wrapper']}>
            <InfoList
              type={'배송'}
              content={'샛별배송'}
              style={{ borderTop: '1px solid var(--gray-100)' }}
            />
            <InfoList type={'판매자'} content={'칼리'} />
            <InfoList
              type={'포장타입'}
              content={
                productInfo.type === 'normal'
                  ? '상온포장'
                  : productInfo.type === 'frozen'
                  ? '냉동포장'
                  : '냉장포장'
              }
            />
            <InfoList type={'판매단위'} content={'1봉'} />
            <InfoList type={'중량/용량'} content={'123g*4봉'} />
            <InfoList type={'원산지'} content={'상세페이지 별도표기'} />
            <InfoList
              type={'알레르기정보'}
              content={`-대두, 밀, 쇠고기 함유`}
            />
            <InfoList type={'상품선택'}>
              <div className={styles['counter-box']}>
                <span style={{ fontSize: '12px' }}>{productInfo.name}</span>
                <Counter
                  quantity={productInfo.stock}
                  onClickPlus={handleClickPlus}
                  onClickMinus={handleClickMinus}
                />
                <span className={styles['price-text']}>
                  {productInfo.price?.toLocaleString()}원
                </span>
              </div>
            </InfoList>
          </ul>

          {/* 총 상품 금액 */}
          <div className={styles['priceandpoint-box']}>
            <div className={styles['total-price-box']}>
              <span className={styles['total-price-title']}>총 상품금액:</span>
              <span className={styles['total-price']}>
                {(productInfo.stock * productInfo.price).toLocaleString()}
              </span>
              <span className={styles.wonDegree}>원</span>
            </div>

            {/* 부가 사항 */}
            <div className={styles['earn-point-box']}>
              <span className={styles['earn-point']}>적립</span>
              <span className={styles['earn-point-text']}>
                로그인 후, 적립 혜택 제공
              </span>
            </div>
          </div>

          {/* 버튼 */}
          <div className={styles['buttons-box']}>
            <img
              className={styles['btn']}
              onClick={() => {
                setLike(!like);
              }}
              src={like ? heartFill : heartNoFill}
              alt=""
            />
            <img
              className={styles['btn']}
              src="../../../src/assets/productDetail/Squrebell.png"
              alt=""
            />
            <button className={styles['pick-cart']} onClick={handleAddCart}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
