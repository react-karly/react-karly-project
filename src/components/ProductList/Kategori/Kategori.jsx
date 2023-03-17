import styles from './Kategori.module.css';
import Down from '../../../assets/cart/Direction=Down.png';

import { SubKategori } from '../SubKategori/SubKategori';

import { useCallback, useState } from 'react';

export function Kategori({ title, list, index }) {
  const [clickedIndex, setClickedIndex] = useState(false);
  const [countCheck, setCountCheck] = useState(0);

  const alt = `${title} 펼쳐보기`.trim();

  const handleClick = useCallback(() => {
    setClickedIndex(!clickedIndex);
  }, [clickedIndex]);

  return (
    <div className={styles['accordion']}>
      <button
        type="button"
        className={styles['accordion__button']}
        onClick={handleClick}
      >
        <div className={styles['accordion__button-text']}>
          <span className={styles['accordion__button-text--name']}>
            {title}
          </span>
          <span className={styles['accordion__button-text--number']}>
            {countCheck}
          </span>
        </div>
        <span className={styles['arrow-icon']}>
          <img src={Down} alt={alt} />
        </span>
      </button>
      <ul
        className={!clickedIndex ? styles['active'] : styles['accordion__body']}
      >
        {list.map((menu, index) => (
          <SubKategori
            menu={menu}
            index={index}
            key={index}
            countCheck={countCheck}
            setCountCheck={setCountCheck}
          />
        ))}
      </ul>
    </div>
  );
}
