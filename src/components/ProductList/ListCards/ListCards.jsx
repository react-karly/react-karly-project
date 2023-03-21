import TangTang from '../../../assets/tangtang/thumbnail.jpg';
import GangNam from '../../../assets/kangnam/thumbnail.jpg';
import Bacon from '../../../assets/bacon/thumbnail.jpg';

import styles from './ListCards.module.css';

import { LIST_FILTER } from './ListFilter';
import { ListCard } from '../ListCard/ListCard';
import { ListFilter } from '../ListFilter/ListFilter';

export function ListCards({ props }) {
  return (
    <>
      <div className={styles['group']}>
        <div className={styles['menu']}>
          <span>총 277건</span>
          <ul className={styles['list']}>
            {LIST_FILTER.map((item, index) => {
              return <ListFilter list={item} index={index} key={index} />;
            })}
          </ul>
        </div>
        <div className={styles['product-list']}>
          {props.map((item, index) => {
            return <ListCard props={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
