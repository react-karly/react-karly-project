import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Btn } from '@/components/Register/Btn';
import styles from '@/pages/Login/Login.module.css';
import { auth } from '@/config/firebase';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  isLoggedInState,
  errorState,
  emailState,
  passwordState,
} from '@/atoms/auth';
import {
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import LoginModal from '@/components/LoginModal/LoginModal';
import { Input } from '@/components/Register/Input';

function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [error, setError] = useRecoilState(errorState);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      setError(false);
      setIsLoggedIn(true); // 로그인이 성공했을 때만 isLogin 값을 true로 업데이트
      navigate('/'); // 로그인 성공 시 메인으로 리다이렉트
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //     setError(false);
  //   } catch (err) {
  //     console.error(err);
  //     setError(true);
  //   }
  // };

  const logout = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className={styles['login-container']}>
        <section className={styles['login-wrapper']}>
          <h2 className={styles['login-title']}>로그인</h2>
          <form
            className={styles['login-form']}
            onKeyDown={signIn}
            method="POST"
          >
            <fieldset>
              <legend>로그인 폼</legend>
              <Input
                title="아이디"
                placeholder="아이디를 입력해주세요."
                inputClassName="login-input"
                labelClassName="a11y-hidden"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                title="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                inputClassName="login-input"
                labelClassName="a11y-hidden"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {useRecoilValue(errorState) && <LoginModal />}
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
              <Link to="/signup">
                <Btn btnTitle="회원가입" buttonClassName="register-btn" />
              </Link>
              {/* <Btn
                btnTitle="구글로 로그인"
                buttonClassName="register-btn"
                onClick={signInWithGoogle}
              /> */}
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
