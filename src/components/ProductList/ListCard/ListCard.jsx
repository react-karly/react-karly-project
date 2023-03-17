import Notice from '../../../assets/productList/Notice.png';
import TangTang from '../../../assets/tangtang/thumbnail.jpg';
import GangNam from '../../../assets/kangnam/thumbnail.jpg';
import Bacon from '../../../assets/bacon/thumbnail.jpg';
import styles from './ListCard.module.css';

export function ListCard() {
  return (
    <>
      <div className={styles['group']}>
        <div className={styles['menu']}>
          <span>총 277건</span>
          <ul className={styles['list']}>
            <li>
              <div className={styles['recommend']}>
                <button
                  type="button"
                  className={styles['divider']}
                  aria-hidden="true"
                >
                  추천순
                </button>
                <img
                  className={styles['notice']}
                  src={Notice}
                  alt="추천순 도움 말"
                />
              </div>
            </li>
            <li>
              <button
                type="button"
                className={styles['divider']}
                aria-hidden="true"
              >
                신상품순
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles['divider']}
                aria-hidden="true"
              >
                판매량순
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles['divider']}
                aria-hidden="true"
              >
                혜택순
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles['divider']}
                aria-hidden="true"
              >
                낮은 가격순
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles['divider']}
                aria-hidden="true"
              >
                높은 가격순
              </button>
            </li>
          </ul>
        </div>

        <div className={styles['product-list']}>
          <a href="#" className={styles['product-each']}>
            <img src={TangTang} alt="풀무원 탱탱쫄면" />
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
            <img src={GangNam} alt="강남면옥 소갈비찜" />
            <button
              type="button"
              className={styles['cart-icon']}
              aria-label="cart-icon"
            ></button>
            <div className={styles['product-info']}>
              <span className={styles['product-info__delivery']}>샛별배송</span>
              <span className={styles['product-info__name']}>
                [강남면옥] 소갈비찜
              </span>
              <div className={styles['price']}>
                <span className={styles['product-info__price']}>29,800원</span>
              </div>
              <span className={styles['product-info__description']}>
                보는 맛과 먹는 맛 모두 푸짐
              </span>
            </div>
          </a>
          <a href="#" className={styles['product-each']}>
            <img src={Bacon} alt="칼리 한돈 삼겹 베이컨" />
            <button
              type="button"
              className={styles['cart-icon']}
              aria-label="cart-icon"
            ></button>
            <div className={styles['product-info']}>
              <span className={styles['product-info__delivery']}>샛별배송</span>
              <span className={styles['product-info__name']}>
                [Kalry's] 한돈 삼겹 베이컨
              </span>
              <div className={styles['price']}>
                <span className={styles['product-info__sale-ratio']}>25%</span>
                <span className={styles['product-info__price']}>3,375원</span>
              </div>
              <span className={styles['product-info__origin-price']}>
                4,500원
              </span>
              <span className={styles['product-info__description']}>
                무항생제 한돈 삼겹살의 고소한 풍미 그대로
              </span>
              <div className={styles['product-info__badge']}>
                <span className={styles['badge-karly']}>Karly Only</span>
                <span className={styles['badge-limit']}>한정수량</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
