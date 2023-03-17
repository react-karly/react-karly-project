import React from 'react';
import styles from './TermList.module.css';
import { RegisterTOS } from './../Register/RegisterTOS';

export function TermList() {
  return (
    <ul className={styles['register-terms']}>
      <li>
        <p className={styles['register-label-required']}>
          <span className={styles['a11y-hidden']}>필수 선택사항</span>
          이용약관 동의
        </p>
      </li>
      <li>
        <ul>
          <li>
            <span className={styles['a11y-hidden']}>
              이용약관 전체 동의 여부
            </span>
            <p>
              선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를
              이용할 수 있습니다.
            </p>
            <input type="checkbox" id="check-all-terms" />
            <label htmlFor="check-all-terms">전체 동의합니다.</label>
          </li>
          <RegisterTOS terms="이용약관 동의" requiredOrOptional="필수" />
          <RegisterTOS
            terms="개인정보 수집 · 이용 동의"
            requiredOrOptional="필수"
          />
          <RegisterTOS
            terms="무료배송, 할인쿠폰 등 혜택/정보 수신 동의"
            requiredOrOptional="선택"
          />
          <RegisterTOS
            terms="본인은 만 14세 이상입니다."
            requiredOrOptional="필수"
          />
        </ul>
      </li>
    </ul>
  );
}
