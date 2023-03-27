import React from 'react';
import Image2 from '@/assets/productDetail/goods_point.png';
import styles from './ProductDetailInfo.module.css';
import { useEffect } from 'react';

function ProductDetailInfo({ ref1, ref2, product }) {
  return (
    <>
      <div className={styles.container}>
        <img ref={ref1} src={product.image?.banner} alt={product.image?.alt} />
        <img src={Image2} alt="" />
        <img ref={ref2} src={product.image?.info} alt="" />
      </div>
    </>
  );
}

export default ProductDetailInfo;
