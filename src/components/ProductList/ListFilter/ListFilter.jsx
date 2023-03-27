import styles from './ListFilter.module.css';
import Notice from '../../../assets/productList/Notice.png';
export function ListFilter({ list, index }) {
  return (
    <li>
      <div className={styles['recommend']}>
        <button type="button" className={styles['divider']} aria-hidden="true">
          {list}
        </button>
        {index === 0 ? (
          <img className={styles['notice']} src={Notice} alt="추천순 도움 말" />
        ) : undefined}
      </div>
    </li>
  );
}
