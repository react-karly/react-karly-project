import React from 'react';
import app from '../../App.module.css';
import Btn from './Btn';
import input from '../Register/Input.module.css';
import address from '../Register/Address.module.css';

const Address = () => {
  return (
    <li>
      <label className={input['register-label']}>
        <span className={app['a11y-hidden']}>필수입력사항</span>
        주소
      </label>
      <div className={address['address-wrapper']}>
        <Btn btnTitle="주소 검색" buttonClassName="big-btn" />
        <p className={address['address-desc']}>
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
      </div>
    </li>
  );
};

export default Address;
