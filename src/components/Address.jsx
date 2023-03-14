import React from 'react';
import app from '../App.module.css';
import Btn from './Btn';

const Address = () => {
  return (
    <li>
      <label>
        <span className={app['a11y-hidden']}>필수입력사항</span>
        주소
      </label>
      <Btn btnTitle="주소 검색" />
      <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
    </li>
  );
};

export default Address;
