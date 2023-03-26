import styles from './ProductList.module.css';
import { BaseLayout, ListSideMenu, ListCards } from '@/components';
import { useLayoutEffect, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../firebase/app';
function ProductList() {
  const [productLists, setProductLists] = useState([]);

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
        <ListSideMenu props={productLists} />
        <ListCards props={productLists} />
      </div>
    </>
  );
}

export default ProductList;
