import styles from './ListSideMenu.module.css';
import Arrow from '../../../assets/cart/arrow.svg';
import Down from '../../../assets/productList/Direction=Down.png';

import { MENU_LIST } from './MenuList';
import { Kategori } from '../Kategori/Kategori';

import { useState } from 'react';
export function ListSideMenu() {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div className={styles['product']}>
      <nav className={styles['navigator']}>
        <div className={styles['accordion']}>
          <button className={styles['accordion__button']}>
            <div className={styles['accordion__button-text']}>
              <span className={styles['accordion__button-text--name']}>
                필터
              </span>
            </div>
            <span className={styles['accordion__button-text--init']}>
              초기화
            </span>
          </button>
        </div>

        {MENU_LIST.map((item, index) => {
          return (
            <Kategori
              key={index}
              title={item.title}
              index={index}
              list={item.list}
            />
          );
        })}
      </nav>
    </div>
  );
}
