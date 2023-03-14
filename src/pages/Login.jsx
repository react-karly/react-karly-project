import React from 'react';
import { Btn, Input } from '../components';

const Login = () => {
  return (
    <main>
      <div>
        <section>
          <h2>로그인</h2>
          <form method="GET" action="#">
            <fieldset>
              <legend>로그인 폼</legend>
              <Input title="아이디" placeholder="아이디를 입력해주세요." />
              <Input title="비밀번호" placeholder="비밀번호를 입력해주세요." />
            </fieldset>
            <ul>
              <li>
                <a href="#">아이디 찾기</a>
              </li>
              <li>
                <a href="#">비밀번호 찾기</a>
              </li>
            </ul>
            <Btn btnTitle="로그인" />
            <Btn btnTitle="회원가입" />
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
