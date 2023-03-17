import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import minus from '@/assets/cart/count.png';
import { Counter } from '../Counter/Counter';
import styles from './ProductInfo.module.css';
import plus from '../../assets/cart/plus.png';
import heartFill from '@/assets/ProductDetail/heart-fill.png';
import disabledMinus from '../../assets/cart/minus_disabled.png';
import counter from '../../components/Counter/Counter.module.css';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import heartNoFill from '@/assets/productDetail/Disabled=false.png';
import CartAddedModal from './ProductDetailItem/CartAddedModal/CartAddedModal';
import { products } from '../../../data';
import InfoList from './ProductDetailItem/InfoList/InfoList';


function ProductInfo(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productList, setProductList] = useState(products);
  const [like, setLike] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  
  const handleClickPlus = () => {
    productList[0].quantity += 1;
    setProductList([...productList]);
  };

  const handleClickMinus = () => {
    products[0].quantity -= 1;
    setProductList([...productList]);
  };
  
  const handleAddCart = () => {
    setAddToCart(true)
  }
  
  
  return (
    <>

      
      <div className={styles['info-container']}>

        {/* 상품 정보 */}
        <img width={400} height={514} src='../../../src/assets/tangtang/thumbnail.jpg' alt="" />

        <div className={styles['info-wrapper']}>
          <h5 className={styles.satbyul}>샛별배송</h5>
          <h2 className={styles['product-title']}>{products[0].name}</h2>
          <h4 className={styles['product-subtitle']}>{products[0].description}</h4>
          <div className={styles['product-cost-box']}>
            <h4 className={styles['product-cost']}>{products[0].price.toLocaleString()}</h4>
            <h4 className={styles.won}>원</h4>
          </div>

          {
            isLoggedIn === true ? null : <p className={styles['benefit-after-login']} onChange={()=>{setIsLoggedIn(true)}}>로그인 후, 적립 혜택이 제공됩니다.</p>
          }

          <ul className={styles['text-wrapper']}>

            <InfoList type={'배송'} content={products[0].hasDelivery.type} style={{ borderTop: '1px solid var(--gray-100)' }}/>
            <InfoList type={'판매자'} content={products[0].seller} />
            <InfoList type={'포장타입'} content={products[0].pakageType.temperature} />
            <InfoList type={'판매단위'} content={products[0].unit} />
            <InfoList type={'중량/용량'} content={products[0].weight} />
            <InfoList type={'원산지'} content={products[0].originPlace} />
            <InfoList type={'알레르기정보'} content={products[0].allergicInfo} />
            <InfoList type={'상품선택'}>
              <div className={styles['counter-box']}>
                <span style={{fontSize: '12px'}}>{products[0].name}</span>
                <Counter 
                  quantity={products[0].quantity}
                  onClickPlus={handleClickPlus}
                  onClickMinus={handleClickMinus}
                />
                <span className={styles['price-text']}>4,980원</span>
              </div>
            </InfoList>  

          </ul>

          {/* 총 상품 금액 */}
          <div className={styles['priceandpoint-box']}>
            <div className={styles['total-price-box']}>
              <span className={styles['total-price-title']}>총 상품금액:</span>
              <span className={styles['total-price']}>
                {(products[0].quantity * products[0].price).toLocaleString()}
                </span>
              <span className={styles.wonDegree}>원</span>
            </div>

            {/* 부가 사항 */}
            <div className={styles['earn-point-box']}>
              <span className={styles['earn-point']}>적립</span>
              <span className={styles['earn-point-text']}>로그인 후, 적립 혜택 제공</span>
            </div>
          </div>

          {/* 버튼 */}
          <div className={styles['buttons-box']}>
            <img className={styles['btn']} onClick={()=>{setLike(!like)}} src={like?heartFill:heartNoFill} alt="" />
            <img className={styles['btn']} src="../../../src/assets/productDetail/Squrebell.png" alt="" />
            <button className={styles['pick-cart']} onClick={handleAddCart}>장바구니 담기</button>
          </div>

        </div>

      </div>
      
    </>
  )
}

export default ProductInfo;