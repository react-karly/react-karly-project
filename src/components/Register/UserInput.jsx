import React, { useState } from 'react';
import { Btn } from '@/components/Register/Btn';
import { Input } from '@/components/Register/Input';
import styles from '@/components/Register/UserInput.module.css';
import {
  authState,
  errorMessageState,
  errorTypeState,
  errorState,
  messageState,
  isOpenState,
} from '@/@store';
import { useRecoilState } from 'recoil';
import { db } from '@/config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import LoginModal from '../LoginModal/LoginModal';
import Portal from '../Portal/Portal';
import ShippingModal from '../ShippingModal/ShippingModal';
import { shippingState } from '../../@store/cartListState';

export function UserInput({
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirm,
  onChangeName,
  onChangePhoneNumber,
  onChangeGender,
  onChangeBirthYear,
  onChangeBirthMonth,
  onChangeBirthDay,
}) {
  const [authObj, setAuthObj] = useRecoilState(authState);
  const usersCollectionRef = collection(db, 'users');
  const [error, setError] = useRecoilState(errorState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);
  const [message, setMessage] = useRecoilState(messageState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [isShowShipping, setIsShowShipping] = useState(false);
  const [location, setLocation] = useRecoilState(shippingState);

  const handleShowAddressModal = () => {
    setIsShowShipping(true);
  };

  const checkEmail = async (e) => {
    const q = query(usersCollectionRef, where('email', '==', authObj.email));
    const snapshot = await getDocs(q);
    const regExp =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!regExp.test(authObj.email)) {
      setError('이메일 에러');
      setMessage({
        ...setMessage,
        emailError: '이메일 형식으로 입력해 주세요.',
      });
      setIsOpen(true);
    } else if (snapshot.empty) {
      if (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(authObj.email)
      ) {
        setMessage({
          ...setMessage,
          emailError: '사용 가능한 이메일입니다.',
        });
        setIsOpen(true);
      }
    } else {
      setMessage({
        ...setMessage,
        emailError: '이미 사용중인 이메일입니다.',
      });
      setIsOpen(true);
    }
  };

  return (
    <div className={styles['user-input-container']}>
      <ul>
        <li>
          <Input
            labelClassName="register-label-required"
            inputClassName="register-input"
            input={{
              placeholder: 'marketkarly@karly.com',
            }}
            title="아이디(이메일)"
            type="email"
            onChange={onChangeEmail}
          />
          <Btn
            btnTitle="중복확인"
            buttonClassName="small-btn"
            onClick={checkEmail}
          />
          {error && (
            <span className={styles['error']}>{message.emailError}</span>
          )}
          {error && (
            <LoginModal
              errorType={error}
              errorMessage={message.emailError}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            inputClassName="register-input"
            input={{ placeholder: '비밀번호를 입력해주세요.' }}
            title="비밀번호"
            type="password"
            onChange={onChangePassword}
          />
          {error && (
            <span className={styles['error']}>{message.passwordError}</span>
          )}
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            inputClassName="register-input"
            input={{ placeholder: '비밀번호를 한번 더 입력해주세요.' }}
            title="비밀번호 확인"
            type="password"
            onChange={onChangePasswordConfirm}
          />
          {error && (
            <span className={styles['error']}>
              {message.passwordConfirmError}
            </span>
          )}
        </li>
        <li>
          <Input
            labelClassName="register-label-required"
            inputClassName="register-input"
            input={{ placeholder: '이름을 입력해주세요.' }}
            title="이름"
            onChange={onChangeName}
          />
        </li>
        {/* <li>
          <Input
            labelClassName="register-label-required"
            input={{ placeholder: '예) marketkarly@karly.com' }}
            title="이메일"
            type="email"
          />
          <Btn btnTitle="중복확인" buttonClassName="small-btn" />
        </li> */}
        <li>
          <Input
            labelClassName="register-label-required"
            inputClassName="register-input"
            input={{ placeholder: '숫자만 입력해주세요.' }}
            title="휴대폰"
            onChange={onChangePhoneNumber}
          />
          <Btn btnTitle="인증번호 받기" buttonClassName="small-btn" />
        </li>
        <li>
          <div className={styles['address-wrapper']}>
            <label className={styles['register-label-required']}>주소</label>
            {location ? (
              <Btn btnTitle={location} onClick={handleShowAddressModal} />
            ) : (
              <Btn
                btnTitle="주소 검색"
                buttonClassName="big-btn"
                onClick={handleShowAddressModal}
              />
            )}
            <p className={styles['address-desc']}>
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
        </li>
        {isShowShipping && (
          <Portal elementId="modal__root">
            <ShippingModal setIsShowShipping={setIsShowShipping} />
          </Portal>
        )}
        <li>
          <label className={styles['register-label']}>성별</label>
          <div className={styles['gender-wrapper']}>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={onChangeGender}
            />
            <label htmlFor="male">남자</label>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={onChangeGender}
            />
            <label htmlFor="female">여자</label>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="none"
              name="gender"
              value="none"
              onChange={onChangeGender}
            />
            <label htmlFor="none">선택안함</label>
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
              onChange={onChangeBirthYear}
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
              onChange={onChangeBirthMonth}
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
              onChange={onChangeBirthDay}
            />
          </div>
        </li>
        <li>
          <label className={styles['register-label']}>추가입력 사항</label>
          <div className={styles['event-wrapper']}>
            <input
              className={styles['a11y-hidden']}
              type="radio"
              id="recommend-id"
              name="extra"
              value="recommend-id"
            />
            <label htmlFor="recommend-id">친구초대 추천인 아이디</label>
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
