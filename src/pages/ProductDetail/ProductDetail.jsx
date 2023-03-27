import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import ProductInfo from '@/components/ProductDetail/ProductInfo';
import ProductTab from '@/components/ProductDetail/ProductTab';
import ProductDetailInfo from '@/components/ProductDetail/ProductDetailInfo';
import ProductReview from '@/components/ProductDetail/ProductReview';
import ProductQnA from '@/components/ProductDetail/ProductQnA';
import { Footer } from '@/components/Footer/Footer';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../firebase/app';

function ProductDetail() {
  const img1 = useRef();
  const img2 = useRef();
  const review = useRef();
  const qna = useRef();
  const element = [img1, img2, review, qna];

  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useLayoutEffect(() => {
    const db = getFirestore(firebaseApp);
    const productsRef = collection(db, 'products');

    getDocs(productsRef).then((res) => {
      res.forEach(async (data) => {
        if (data.data().id === productId) {
          setProduct(data.data());
        }
      });
    });
  }, []);

  return (
    <>
      <ProductInfo product={product} />
      <ProductTab element={element} />
      <ProductDetailInfo ref1={img1} ref2={img2} product={product} />
      <ProductReview ref3={review} />
      <ProductQnA ref4={qna} />
    </>
  );
}

export default ProductDetail;
