import styles from './SubKategori.module.css';

import { useState, useCallback } from 'react';

export function SubKategori({ menu, index, countCheck, setCountCheck }) {
  const [checkIndex, setCheckIndex] = useState({});
  const handleCheck = useCallback(
    (event) => {
      setCheckIndex({
        ...checkIndex,
        [event.target.name]: event.target.checked,
      });
      if (checkIndex[index] === false || checkIndex[index] === undefined) {
        setCountCheck(countCheck + 1);
      } else {
        setCountCheck(countCheck - 1);
      }
    },
    [countCheck]
  );
  return (
    <li className={styles['accordion__item']}>
      <label htmlFor="category__checkbox--salad">
        <input
          type="checkbox"
          id="category__checkbox--salad"
          name={index}
          defaultChecked={checkIndex[index]}
          onChange={handleCheck}
        />
      </label>
      <div className={styles['accordion__item-text']}>
        <span className={styles['accordion__item-text--name']}>{menu}</span>
        <span className={styles['accordion__item-text--number']}>65</span>
      </div>
    </li>
  );
}
