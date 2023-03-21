import React from 'react';
import styles from './TermList.module.css';
import { RegisterTOS } from '../Register/RegisterTOS';

export function TermList({
  onChangeTermsOfUse,
  onChangeTermsOfPersonalInfo,
  onChangeTermsOfEvent,
  onChangeTermsOfAge,
}) {
  return (
    <ul className={styles['register-terms']}>
      <li>
        <p className={styles['register-label-required']}>
          <span className={styles['a11y-hidden']}>필수 선택사항</span>
          이용약관 동의
        </p>
      </li>
      <li className={styles['term-list']}>
        <ul>
          <li className={styles['term-container']}>
            <span className={styles['a11y-hidden']}>
              이용약관 전체 동의 여부
            </span>
            <input type="checkbox" id="check-all-terms" />
            <label htmlFor="check-all-terms">전체 동의합니다.</label>
          </li>
          <p className={styles['term-notify']}>
            선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를
            이용할 수 있습니다.
          </p>
          <RegisterTOS
            terms="이용약관 동의"
            requiredOrOptional="필수"
            id="terms-of-use1"
            onChangeTermsOfUse={onChangeTermsOfUse}
          />
          <RegisterTOS
            terms="개인정보 수집 · 이용 동의"
            requiredOrOptional="필수"
            id="terms-of-use2"
            onChangeTermsOfPersonalInfo={onChangeTermsOfPersonalInfo}
          />
          <RegisterTOS
            terms="무료배송, 할인쿠폰 등 혜택/정보 수신 동의"
            requiredOrOptional="선택"
            id="terms-of-use3"
            onChangeTermsOfEvent={onChangeTermsOfEvent}
          />
          <RegisterTOS
            terms="본인은 만 14세 이상입니다."
            requiredOrOptional="필수"
            id="terms-of-use4"
            onChangeTermsOfAge={onChangeTermsOfAge}
          />
        </ul>
      </li>
    </ul>
  );
}
