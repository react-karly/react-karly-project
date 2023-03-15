import React from 'react';
import {
  Input,
  Btn,
  RegisterTOS,
  BirthdayInput,
  EventRadioBtn,
  GenderRadioBtn,
  Address,
} from '../components';
import app from '../App.module.css';
import register from '../../src/pages/Register.module.css';
import input from '../../src/components/Register/Input.module.css';

const Register = () => {
  return (
    <main>
      <section className={register['register']}>
        <h1 className={register['register-title']}>회원가입</h1>
        <p className={register['register-required']} aria-hidden="true">
          필수입력사항
        </p>
        <form className={register['register-form']} method="POST">
          <ul>
            <div className={register['register-wrapper']}>
              <Input
                title="아이디"
                placeholder="아이디를 입력해주세요."
                labelClassName="register-label"
                spanClassName="register-span"
                inputClassName="register-input"
              />
              <Btn btnTitle="중복확인" buttonClassName="small-btn" />
            </div>
            <Input
              title="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              labelClassName="register-label"
              spanClassName="register-span"
              inputClassName="register-input"
            />
            <Input
              title="비밀번호 확인"
              placeholder="비밀번호를 한번 더 입력해주세요."
              labelClassName="register-label"
              spanClassName="register-span"
              inputClassName="register-input"
            />
            <Input
              title="이름"
              placeholder="이름을 입력해주세요."
              labelClassName="register-label"
              spanClassName="register-span"
              inputClassName="register-input"
            />
            <div className={register['register-wrapper']}>
              <Input
                title="이메일"
                placeholder="예) marketkarly@karly.com"
                labelClassName="register-label"
                spanClassName="register-span"
                inputClassName="register-input"
              />
              <Btn btnTitle="중복확인" buttonClassName="small-btn" />
            </div>
            <div className={register['register-wrapper']}>
              <Input
                title="휴대폰"
                placeholder="숫자만 입력해주세요."
                labelClassName="register-label"
                spanClassName="register-span"
                inputClassName="register-input"
              />
              <Btn btnTitle="인증번호 받기" buttonClassName="small-btn" />
            </div>
            <Address />
            <GenderRadioBtn />
            <BirthdayInput />
            <EventRadioBtn />
          </ul>
          <ul className="register-terms">
            <li>
              <p className={input['register-label']}>
                <span className={app['a11y-hidden']}>필수 선택사항</span>
                이용약관 동의
              </p>
            </li>
            <li>
              <ul>
                <li>
                  <span className={app['a11y-hidden']}>
                    이용약관 전체 동의 여부
                  </span>
                  <p>
                    선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
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
          <Btn btnTitle="가입하기" />
        </form>
      </section>
    </main>
  );
};

export default Register;
