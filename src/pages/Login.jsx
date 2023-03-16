import React from 'react';
import { Btn, Input } from '../components';
import login from '../pages/Login.module.css';

function Login() {
  return (
    <main>
      <div className={login['login-container']}>
        <section className={login['login-wrapper']}>
          <h2 className={login['login-title']}>로그인</h2>
          <form className={login['login-form']} method="GET" action="#">
            <fieldset>
              <legend>로그인 폼</legend>
              <Input
                title="아이디"
                placeholder="아이디를 입력해주세요."
                inputClassName="login-input"
                labelClassName="a11y-hidden"
              />
              <Input
                title="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                inputClassName="login-input"
                labelClassName="a11y-hidden"
              />
              <ul>
                <li>
                  <a href="#">아이디 찾기</a>
                </li>
                <li>
                  <a href="#">비밀번호 찾기</a>
                </li>
              </ul>
              <Btn btnTitle="로그인" buttonClassName="login-btn" />
              <Btn btnTitle="회원가입" buttonClassName="register-btn" />
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
