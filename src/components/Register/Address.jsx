import React from 'react';
import { Btn } from './Btn';
import style from '../Register/Address.module.css';

export function Address() {
  return (
    <li>
      <label className={style['register-label-required']}>
        <span className={style['a11y-hidden']}>필수입력사항</span>
        주소
      </label>
      <div className={style['address-wrapper']}>
        <Btn btnTitle="주소 검색" buttonClassName="big-btn" />
        <p className={style['address-desc']}>
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
      </div>
    </li>
  );
}
