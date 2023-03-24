import React from 'react';
import ProductInfo from '@/components/ProductDetail/ProductInfo';
import ProductTab from '@/components/ProductDetail/ProductTab';
import ProductDetailInfo from '@/components/ProductDetail/ProductDetailInfo';
import ProductReview from '@/components/ProductDetail/ProductReview';
import ProductQnA from '@/components/ProductDetail/ProductQnA';
import { Footer } from '@/components/Footer/Footer';
import { useRef } from 'react';

function ProductDetail () {

    const img1 = useRef();
    const img2 = useRef();
    const review = useRef();
    const qna = useRef();
    const element = [img1,img2,review, qna];

  return (
    <>
      <ProductInfo />
      <ProductTab element={element} />
      <ProductDetailInfo ref1={img1} ref2={img2} />
      <ProductReview ref3={review} />
      <ProductQnA ref4={qna} />
      <Footer />
    </>
  )
}

export default ProductDetail;