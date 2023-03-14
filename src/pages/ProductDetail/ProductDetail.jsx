import React from 'react';
import ProductInfo from '@/components/ProductDetail/ProductInfo';
import ProductTab from '@/components/ProductDetail/ProductTab';
import ProductDetailInfo from '@/components/ProductDetail/ProductDetailInfo';
import ProductReview from '@/components/ProductDetail/ProductReview';
import ProductQnA from '@/components/ProductDetail/ProductQnA';
import { Footer } from '@/components/Footer/Footer';

function ProductDetail () {

  return (
    <>
      <ProductInfo />
      <ProductTab />
      <ProductDetailInfo />
      <ProductReview />
      <ProductQnA/>
      <Footer />
    </>
  )
}

export default ProductDetail;