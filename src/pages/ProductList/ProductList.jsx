import styles from './ProductList.module.css';
import { BaseLayout, ListSideMenu, ListCards } from '@/components';
import { Suspense, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { productList } from '../../@store';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../firebase/app';

function ProductList() {
  const [, setProductLists] = useRecoilState(productList);

  useLayoutEffect(() => {
    const db = getFirestore(firebaseApp);
    const productsRef = collection(db, 'products');

    getDocs(productsRef).then((res) => {
      const productList = [];
      res.forEach(async (data) => {
        productList.push(data.data());
      });
      setProductLists(productList);
    });
  }, []);

  return (
    <>
      <h3>베스트</h3>
      <div className={styles['wrapper']}>
        <ListSideMenu />
        <Suspense fallback={<div>Loading...</div>}>
          <ListCards />
        </Suspense>
      </div>
    </>
  );
}

export default ProductList;
