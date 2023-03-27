import React from 'react';
import styles from './ProductQnA.module.css'
import Question from "@/assets/productDetail/Question.png";
import Answer from "@/assets/productDetail/Answer.png";
import Lock from "@/assets/productDetail/Lock.png";
import MoveButton from '@/components/ProductDetail/ProductDetailItem/MoveButton';
import useMoveScroll from './ProductTab/useMoveScroll';

function ProductQnA({ref4}){

  return(
    <>
    <div className={styles['review-container']} >

      {/* 상품문의 제목 부분 */}
      <div className={styles['review-wrapper']} ref={ref4}>
      <div className={styles['title-box']}>
        <h2 className={styles['review-title']}>상품문의</h2>
        <span className={styles['review-event-content']}>
          • 상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.<br></br>
          • 배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.
        </span>
      </div>
        <button className={styles['write-review']}>문의하기</button>
      </div>

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
            
            <li className={styles.listBorder}>
              <div className={styles['best-review-box']}>
                <span style={{color: '#333', fontWeight: '700', fontSize: '16px', marginLeft: '360px'}}>
                  제목
                </span>
                <div className={styles['qna-list-title']}>
                  <span>작성자</span>
                  <span>작성일</span>
                  <span>답변상태</span>
                </div>
              </div>
            </li>

            {/* 공지 */}
            <li>
              <span className={styles['review-sticker-notice']}>공지</span>
              <span className={styles['notice-text']}>판매(일시)중단 제품 안내 (22.11.10 업데이트)</span>
            </li>
            
            {/* 베스트 리뷰 */}
            <li>
              <div className={styles['best-review-box']}>
                <span style={{color: '#333', fontWeight: '600', fontSize: '16px'}}>
                  팩이 터져서 왔어요
                </span>
                <div className={styles['qna-content-box']}>
                  <span>김*진</span>
                  <span>2022.11.10</span>
                  <span>답변완료</span>
                </div>
              </div>
            </li>

            {/* 리뷰 펼치기 */}
            <div className={styles['question-detail-wrapper']}>
              <div className={styles['review-detail-box']}>
                <div className={styles['question-detail-box']}>
                  <img src={Question} alt="Question" />
                  <span style={{ marginLeft: '12px',color: '#333', fontWeight: '700', fontSize: '12px'}}>
                    스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요<br></br> 환불 요청합니다.                
                  </span>
                </div>
                <div className={styles['answer-detail-box']}>
                  <img src={Answer} alt="Answer" />
                  <span style={{ marginLeft: '12px',color: '#333', fontWeight: '700', fontSize: '12px'}}>
                  안녕하세요. 칼리입니다.
                  믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.<br></br>
                  <br></br>
                  더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.<br></br>
                  <br></br>
                  다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다.<br></br>
                  <br></br>
                  불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.
                  <br></br>
                  <br></br>
                  칼리 드림.               
                  </span>
                </div>
                <span className={styles['answer-detail-date']}>2022.11.10</span>
              </div>
            </div>

            <li>
              <div className={styles['best-review-box']}>
                <div>
                  <span style={{color: '#898989', fontWeight: '400', fontSize: '16px', marginRight: '24px'}}>
                    비밀글입니다.
                  </span>
                  <img src={Lock} alt="" />
                </div>
                <div className={styles['qna-content-box']}>
                  <span>김*진</span>
                  <span>2022.11.10</span>
                  <span>답변완료</span>
                </div>
              </div>
            </li>            
            <li>
              <div className={styles['best-review-box']}>
                <div>
                  <span style={{color: '#898989', fontWeight: '400', fontSize: '16px', marginRight: '24px'}}>
                    비밀글입니다.
                  </span>
                  <img src={Lock} alt="" />
                </div>
                <div className={styles['qna-content-box']}>
                  <span>김*진</span>
                  <span>2022.11.10</span>
                  <span>답변완료</span>
                </div>
              </div>
            </li>
          </ul>

          <MoveButton/>

        </div>
    </div>
    </>
  )
}

export default ProductQnA;