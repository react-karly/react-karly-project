import React from 'react';
import styles from './ProductReview.module.css';
import MoveButton from './ProductDetailItem/MoveButton';
import useMoveScroll from '../../components/ProductDetail/ProductTab/useMoveScroll';


function ProductReview({ref3}){

  return(
    <>
      <div className={styles['review-container']}>

        {/* 상품후기 제목 부분 */}
        <div className={styles['review-wrapper']} ref={ref3}>
        <div className={styles['title-box']}>
          <h2 className={styles['review-title']}>상품후기</h2>
          <span className={styles['review-event']}>
            글후기 50원 적립금 혜택이 있어요.
          </span>
          <span className={styles['review-event-content']}>
            • 퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립<br></br>
            • 후기 작성은 배송완료일로부터 30일 이내 가능합니다.<br></br>
            • 작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)
          </span>
        </div>
          <button className={styles['write-review']}>후기 작성하기</button>
        </div>

        {/* 상품후기 목록 */}
        <div className={styles['review-list-wrapper']}>
          <div className={styles['review-list-info']}>
            <span>총 2개</span>
            <div style={{display: 'flex', gap: '8px'}}>
              <span style={{fontSize: '16px', color: '#ccc'}}>추천순</span>
              <span style={{fontSize: '16px', color: '#ccc'}}>|</span>
              <span style={{fontSize: '16px', color: '#ccc'}}>최근 등록순</span>
            </div>
          </div>

          <ul className={styles['review-content-box']}>
            {/* 공지 */}
            <li>
              <span className={styles['review-sticker-notice']}>공지</span>
              <span className={styles['notice-text']}>금주의 베스트 후기 안내</span>
            </li>
            <li>
              <span className={styles['review-sticker-notice']}>공지</span>
              <span className={styles['notice-text']}>상품 후기 적립금 정책 안내</span>
            </li>
            
            {/* 베스트 리뷰 */}
            <li>
              <span className={styles['review-sticker-best']}>베스트</span>
              <span className={styles['review-sticker-purple']}>퍼플</span>
              <span style={{marginRight: '82px'}}>김*진</span>
              <div className={styles['best-review-box']}>
                <span style={{color: '#999'}}>[풀무원] 탱탱쫄면 (4개입)</span>
                <span style={{
                  display: 'inlineBlock', 
                  wordWrap: 'break-word', 
                  width: '160px',
                  lineHeight: '1.6' }}>
                  너무 맛있어요! <br></br>면이 쫄깃하고 양념도 짱맛나요!!
                </span>
                <span style={{color: '#999', fontWeight: '600'}}>2022.11.10</span>
              </div>
            </li>
            <li>
              <span className={styles['review-sticker-best']}>베스트</span>
              <span className={styles['review-sticker-purple']}>퍼플</span>
              <span style={{marginRight: '82px'}}>김*진</span>
              <div className={styles['best-review-box']}>
                <span style={{color: '#999'}}>[풀무원] 탱탱쫄면 (4개입)</span>
                <span style={{
                  display: 'inlineBlock', 
                  wordWrap: 'break-word', 
                  width: '160px',
                  lineHeight: '1.6' }}>
                  너무 맛있어요! <br></br>면이 쫄깃하고 양념도 짱맛나요!!
                </span>
                <span style={{color: '#999', fontWeight: '600'}}>2022.11.10</span>
              </div>
            </li>
            <li>
              <span className={styles['review-sticker-best']}>베스트</span>
              <span className={styles['review-sticker-purple']}>퍼플</span>
              <span style={{marginRight: '82px'}}>김*진</span>
              <div className={styles['best-review-box']}>
                <span style={{color: '#999'}}>[풀무원] 탱탱쫄면 (4개입)</span>
                <span style={{
                  display: 'inlineBlock', 
                  wordWrap: 'break-word', 
                  width: '160px',
                  lineHeight: '1.6' }}>
                  너무 맛있어요! <br></br>면이 쫄깃하고 양념도 짱맛나요!!
                </span>
                <span style={{color: '#999', fontWeight: '600'}}>2022.11.10</span>
              </div>
            </li>
          </ul>

        </div>

        <MoveButton />

      </div>
    </>
  )
}

export default ProductReview;

