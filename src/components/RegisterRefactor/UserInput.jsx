import React from 'react';
import { Btn } from './Btn';
import { Input } from './Input';
import styles from './UserInput.module.css';

export function UserInput() {
  return (
    <div>
      <ul>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{
              placeholder: '아이디를 입력해주세요.',
            }}
            title="아이디"
          />
          <Btn btnTitle="중복확인" buttonClassName="small-btn" />
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '비밀번호를 입력해주세요.' }}
            title="비밀번호"
          />
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '비밀번호를 한번 더 입력해주세요.' }}
            title="비밀번호 확인"
          />
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '이름을 입력해주세요.' }}
            title="이름"
          />
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '예) marketkarly@karly.com' }}
            title="이메일"
          />
          <Btn btnTitle="중복확인" buttonClassName="small-btn" />
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '숫자만 입력해주세요.' }}
            title="휴대폰"
          />
          <Btn btnTitle="인증번호 받기" buttonClassName="small-btn" />
        </li>
        <li>
          <label className={styles['register-label-required']}>주소</label>
          <div>
            <Btn btnTitle="주소 검색" buttonClassName="big-btn" />
            <p className={styles['address-desc']}>
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
        </li>
        <li>
          <label className={styles['register-label']}>성별</label>
          <div className={styles['gender-wrapper']}>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
            />
            <label htmlFor="gender-male">남자</label>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
            />
            <label htmlFor="gender-female">여자</label>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="gender-none"
              name="gender"
              value="none"
            />
            <label htmlFor="gender-none">선택안함</label>
          </div>
        </li>
        <li>
          <label className={styles['register-label']}>생년월일</label>
        </li>
        <li>
          <label className={styles['register-label']}>추가입력 사항</label>
        </li>
      </ul>
    </div>
  );
}
