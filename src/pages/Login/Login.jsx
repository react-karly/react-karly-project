import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Btn } from '@/components/Register/Btn';
import styles from '@/pages/Login/Login.module.css';
import { auth, googleProvider } from '@/config/firebase';
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
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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
    if (!email || !password) {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
      setError(true);
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      setError(false);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
      setError(true);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setError(false);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (err) {
      console.error(err);
      //setError(true);
    }
  };

  return (
    <main>
      <div className={styles['login-container']}>
        <section className={styles['login-wrapper']}>
          <h2 className={styles['login-title']}>로그인</h2>
          <form className={styles['login-form']} method="POST">
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
              {useRecoilValue(errorState) && (
                <LoginModal errorMessage={errorMessage} />
              )}
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
              <Btn
                btnTitle="구글로 로그인"
                buttonClassName="register-btn"
                onClick={signInWithGoogle}
              />
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
