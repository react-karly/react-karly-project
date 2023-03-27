import styles from './ListCards.module.css';

import { LIST_FILTER } from './ListFilter';
import { ListCard } from '../ListCard/ListCard';
import { ListFilter } from '../ListFilter/ListFilter';

import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredDataSelector } from '../../../@store/paginationState';
import { useLayoutEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../../firebase/app';
import { Pagination } from '../Pagination/Pagination';
import { productList } from '../../../@store';

export function ListCards() {
  const filterList = useRecoilValue(filteredDataSelector);
  const products = useRecoilValue(productList);

  return (
    <>
      <div className={styles['group']}>
        <div className={styles['menu']}>
          <span>총 {products.length}건</span>
          <ul className={styles['list']}>
            {LIST_FILTER.map((item, index) => {
              return <ListFilter list={item} index={index} key={index} />;
            })}
          </ul>
        </div>
        <div className={styles['product-list']}>
          {filterList.map((item) => {
            return <ListCard props={item} key={item.id} />;
          })}
        </div>
        <div className={styles['button--pagination']}>{Pagination()}</div>
      </div>
    </>
  );
}
