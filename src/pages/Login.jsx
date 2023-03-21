import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from '../components/Register/Btn';
import { Input } from '../components/Register/Input';
import login from '../pages/Login.module.css';
import { auth, googleProvider } from '../config/firebase';
import {
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
    return unsubscribe;
  }, []);

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

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
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                title="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                inputClassName="login-input"
                labelClassName="a11y-hidden"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {isLogin ? '로그인 됨' : '로그인 안됨'}
              {error && <span>아이디, 비밀번호를 확인해주세요!</span>}
              <ul>
                <li>
                  <a href="#">아이디 찾기</a>
                </li>
                <li>
                  <a href="#">비밀번호 찾기</a>
                </li>
              </ul>
              <Btn
                btnTitle="로그인"
                buttonClassName="login-btn"
                onClick={signIn}
              />
              <Link to="/signup1">
                <Btn btnTitle="회원가입" buttonClassName="register-btn" />
              </Link>
              <Btn
                btnTitle="구글로 로그인"
                buttonClassName="register-btn"
                onClick={signInWithGoogle}
              />
              <Btn
                btnTitle="로그아웃"
                buttonClassName="login-btn"
                onClick={logout}
              />
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
