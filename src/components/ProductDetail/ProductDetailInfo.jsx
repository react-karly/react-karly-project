import React from 'react';
import Image1 from '@/assets/productDetail/goods_intro.png';
import Image2 from '@/assets/productDetail/goods_point.png';
import Image3 from '@/assets/productDetail/_Detail.png';
import styles from './ProductDetailInfo.module.css';

function ProductDetailInfo(){

  return(
    <>
      <div className={styles.container}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
    </>
  )
}

export default ProductDetailInfo;
