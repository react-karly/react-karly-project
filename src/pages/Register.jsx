import React from 'react';
import {
  Input,
  Btn,
  RegisterTOS,
  BirthdayInput,
  EventRadioBtn,
  GenderRadioBtn,
} from '../components';
import app from '../App.module.css';

const Register = () => {
  return (
    <main>
      <section className="register">
        <h1>회원가입</h1>
        <p aria-hidden="true">필수입력사항</p>
        <form method="POST">
          <ul>
            <Input title="아이디" placeholder="아이디를 입력해주세요." />
            <Btn btnTitle="중복확인" />
            <Input title="비밀번호" placeholder="비밀번호를 입력해주세요." />
            <Input
              title="비밀번호 확인"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
            <Input title="이름" placeholder="이름을 입력해주세요." />
            <Input title="이메일" placeholder="예) marketkarly@karly.com" />
            <Btn btnTitle="중복확인" />
            <Input title="휴대폰" placeholder="숫자만 입력해주세요." />
            <Btn btnTitle="인증번호 받기" />
            <li>
              <label>
                <span className={app['a11y-hidden']}>필수입력사항</span>
                주소
              </label>
              <Btn btnTitle="주소 검색" />
              <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
            </li>
            <GenderRadioBtn />
            <BirthdayInput />
            <EventRadioBtn />
          </ul>
        </form>
        <ul>
          <li>
            <label>
              <span className={app['a11y-hidden']}>필수입력사항</span>
              이용약관 동의
            </label>
          </li>
          <span className={app['a11y-hidden']}>이용약관 전체 동의 선택</span>
          <input type="checkbox" id="check-all-terms" />
          <label for="check-all-terms">전체 동의합니다.</label>
          <p>
            선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인 서비스를
            이용할 수 있습니다.
          </p>
          <RegisterTOS requiredOrOptional="필수" />
          <RegisterTOS requiredOrOptional="필수" />
          <RegisterTOS requiredOrOptional="선택" />
          <RegisterTOS requiredOrOptional="필수" />
        </ul>
      </section>
    </main>
  );
};

export default Register;
