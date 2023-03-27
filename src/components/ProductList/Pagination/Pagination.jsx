import styles from './Pagination.module.css';

import first from '../../../assets/productList/pagination_firstbutton.png';
import prev from '../../../assets/productList/pagination_prevButton.png';
import next from '../../../assets/productList/pagination_nextButton.png';
import last from '../../../assets/productList/pagination_lastButton.png';

import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPage, itemsPerPage, productList } from '../../../@store';

export function Pagination() {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentPage);
  const totalPage = useRecoilValue(productList).length;
  const itemsPerIndex = useRecoilValue(itemsPerPage);

  const pageCount = Math.ceil(totalPage / itemsPerIndex);

  const handleClickPage = useCallback(
    (page) => {
      setCurrentIndex(page);
      window.scrollTo(0, 0);
    },
    [currentIndex]
  );

  const handleClickFirst = useCallback(() => {
    setCurrentIndex(1);
    window.scrollTo(0, 0);
  }, [currentIndex]);
  const handleClickPrev = useCallback(() => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      window.scrollTo(0, 0);
    }
  }, [currentIndex]);
  const handleClickNext = useCallback(() => {
    if (currentIndex < pageCount) {
      setCurrentIndex(currentIndex + 1);
      window.scrollTo(0, 0);
    }
  }, [currentIndex]);
  const handleClickLast = useCallback(() => {
    setCurrentIndex(pageCount - 1);
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <button
        className={styles['button__number']}
        type="button"
        key={i}
        onClick={() => handleClickPage(i)}
        disabled={currentIndex === i}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        className={styles['arrow_button']}
        onClick={handleClickFirst}
      >
        <img src={first} alt="첫 페이지로 이동" />
      </button>
      <button
        type="button"
        className={styles['arrow_button']}
        onClick={handleClickPrev}
        disabled={currentIndex === 1}
      >
        <img src={prev} alt="이전 페이지로 이동" />
      </button>
      {pages}
      <button
        type="button"
        className={styles['arrow_button']}
        onClick={handleClickNext}
        disabled={currentIndex === pageCount}
      >
        <img src={next} alt="다음 페이지로 이동" />
      </button>
      <button
        type="button"
        className={styles['arrow_button']}
        onClick={handleClickLast}
      >
        <img src={last} alt="마지막 페이지로 이동" />
      </button>
    </>
  );
}
