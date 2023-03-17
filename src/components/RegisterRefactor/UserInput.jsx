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
          <div className={styles['address-wrapper']}>
            <label className={styles['register-label-required']}>주소</label>
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
          <div className={styles['register-birth-wrapper']}>
            <label htmlFor="birth-year" className={styles['a11y-hidden']}>
              연도 입력(4글자)
            </label>
            <input
              type="text"
              maxLength="4"
              minLength="4"
              id="birth-year"
              name="birth-year"
              placeholder="YYYY"
              aria-hidden="true"
            />
            <span aria-hidden="true" className={styles['birth-between']}>
              /
            </span>
            <label htmlFor="birth-month" className={styles['a11y-hidden']}>
              월 입력(2글자)
            </label>
            <input
              type="text"
              maxLength="2"
              minLength="2"
              id="birth-month"
              name="birth-month"
              placeholder="MM"
              aria-hidden="true"
            />
            <span aria-hidden="true" className={styles['birth-between']}>
              /
            </span>
            <label htmlFor="birth-day" className={styles['a11y-hidden']}>
              일 입력(2글자)
            </label>
            <input
              type="text"
              maxLength="2"
              minLength="2"
              id="birth-day"
              name="birth-day"
              placeholder="DD"
              aria-hidden="true"
            />
          </div>
        </li>
        <li>
          <label className={styles['register-label']}>추가입력 사항</label>
          <div className={styles['event-wrapper']}>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="recommand-id"
              name="extra"
              value="recommand-id"
            />
            <label htmlFor="recommand-id">친구초대 추천인 아이디</label>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="event"
              name="extra"
              value="event"
            />
            <label htmlFor="event">참여 이벤트명</label>
          </div>
        </li>
      </ul>
    </div>
  );
}
