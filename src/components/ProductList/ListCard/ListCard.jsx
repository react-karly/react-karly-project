import TangTang from '../../../assets/tangtang/thumbnail.jpg';
import GangNam from '../../../assets/kangnam/thumbnail.jpg';
import Bacon from '../../../assets/bacon/thumbnail.jpg';

import styles from './ListCard.module.css';

export function ListCard() {
  return (
    <>
      <a href="#" className={styles['product-each']}>
        <img
          className={styles['card-image']}
          src={TangTang}
          alt="풀무원 탱탱쫄면"
        />
        <button
          type="button"
          className={styles['cart-icon']}
          aria-label="cart-icon"
        ></button>
        <div className={styles['product-info']}>
          <span className={styles['product-info__delivery']}>샛별배송</span>
          <span className={styles['product-info__name']}>
            [풀무원] 탱탱쫄면 (4개입)
          </span>
          <div className={styles['price']}>
            <span className={styles['product-info__price']}>4,980원</span>
          </div>
          <span className={styles['product-info__description']}>
            튀기지 않아 부드럽고 매콤한
          </span>
          <div className={styles['product-info__badge']}>
            <span className={styles['badge-karly']}>Karly Only</span>
            <span className={styles['badge-limit']}>한정수량</span>
          </div>
        </div>
      </a>
      <a href="#" className={styles['product-each']}>
        <img
          className={styles['card-image']}
          src={TangTang}
          alt="풀무원 탱탱쫄면"
        />
        <button
          type="button"
          className={styles['cart-icon']}
          aria-label="cart-icon"
        ></button>
        <div className={styles['product-info']}>
          <span className={styles['product-info__delivery']}>샛별배송</span>
          <span className={styles['product-info__name']}>
            [풀무원] 탱탱쫄면 (4개입)
          </span>
          <div className={styles['price']}>
            <span className={styles['product-info__price']}>4,980원</span>
          </div>
          <span className={styles['product-info__description']}>
            튀기지 않아 부드럽고 매콤한
          </span>
          <div className={styles['product-info__badge']}>
            <span className={styles['badge-karly']}>Karly Only</span>
            <span className={styles['badge-limit']}>한정수량</span>
          </div>
        </div>
      </a>
      <a href="#" className={styles['product-each']}>
        <img
          className={styles['card-image']}
          src={TangTang}
          alt="풀무원 탱탱쫄면"
        />
        <button
          type="button"
          className={styles['cart-icon']}
          aria-label="cart-icon"
        ></button>
        <div className={styles['product-info']}>
          <span className={styles['product-info__delivery']}>샛별배송</span>
          <span className={styles['product-info__name']}>
            [풀무원] 탱탱쫄면 (4개입)
          </span>
          <div className={styles['price']}>
            <span className={styles['product-info__price']}>4,980원</span>
          </div>
          <span className={styles['product-info__description']}>
            튀기지 않아 부드럽고 매콤한
          </span>
          <div className={styles['product-info__badge']}>
            <span className={styles['badge-karly']}>Karly Only</span>
            <span className={styles['badge-limit']}>한정수량</span>
          </div>
        </div>
      </a>
      <a href="#" className={styles['product-each']}>
        <img
          className={styles['card-image']}
          src={TangTang}
          alt="풀무원 탱탱쫄면"
        />
        <button
          type="button"
          className={styles['cart-icon']}
          aria-label="cart-icon"
        ></button>
        <div className={styles['product-info']}>
          <span className={styles['product-info__delivery']}>샛별배송</span>
          <span className={styles['product-info__name']}>
            [풀무원] 탱탱쫄면 (4개입)
          </span>
          <div className={styles['price']}>
            <span className={styles['product-info__price']}>4,980원</span>
          </div>
          <span className={styles['product-info__description']}>
            튀기지 않아 부드럽고 매콤한
          </span>
          <div className={styles['product-info__badge']}>
            <span className={styles['badge-karly']}>Karly Only</span>
            <span className={styles['badge-limit']}>한정수량</span>
          </div>
        </div>
      </a>
    </>
  );
}
