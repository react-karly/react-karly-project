import React from 'react';
import Image2 from '@/assets/productDetail/goods_point.png';
import styles from './ProductDetailInfo.module.css';

function ProductDetailInfo({ product }) {
  return (
    <>
      <div className={styles.container}>
        <img src={product.image?.banner} alt={product.image?.alt} />
        <img src={Image2} alt="" />
        <img src={product.image?.info} alt="" />
      </div>
    </>
  );
}

export default ProductDetailInfo;
