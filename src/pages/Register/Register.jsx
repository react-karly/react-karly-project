import React, { useEffect, useState } from 'react';
import styles from '@/pages/Register/Register.module.css';
import { UserInput } from '@/components/Register/UserInput';
import { TermList } from '@/components/Register/TermList';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '@/config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { authState, messageState } from '@/atoms/auth';
import { useRecoilState } from 'recoil';

function RegisterRefactor() {
  const navigate = useNavigate();
  const [authObj, setAuthObj] = useRecoilState(authState);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);
  const [message, setMessage] = useRecoilState(messageState);

  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log({ filteredData });
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  }, []);

  const auth = getAuth();

  const validatePassword = (password) => {
    // 비밀번호가 최소 10자 이상의 영문, 숫자, 특수문자 중 2가지 이상을 포함하는지 검사
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  };

  const signUp = async () => {
    console.log('authObj', authObj);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        authObj.email,
        authObj.password
      );
      console.log('result', result);
      const data = await addDoc(usersCollectionRef, {
        email: authObj.email,
        password: authObj.password,
        passwordConfirm: authObj.passwordConfirm,
        name: authObj.name,
        phoneNumber: parseInt(authObj.phoneNumber),
        address: authObj.address,
        gender: authObj.gender,
        birthYear: parseInt(authObj.birthYear),
        birthMonth: parseInt(authObj.birthMonth),
        birthDay: parseInt(authObj.birthDay),
        termsOfUse: Boolean(authObj.termsOfUse),
        termsOfPersonalInfo: Boolean(authObj.termsOfPersonalInfo),
        termsOfEvent: Boolean(authObj.termsOfEvent),
        termsOfAge: Boolean(authObj.termsOfAge),
      });
      console.log('data', data);
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main>
      <section className={styles['register-container']}>
        <h2 className={styles['register-title']}>회원가입</h2>
        <p className={styles['register-required']} aria-hidden="true">
          필수입력사항
        </p>
        <form className={styles['register-form']} action="">
          <UserInput
            onChangeEmail={(e) => {
              setAuthObj({ ...authObj, email: e.target.value });
              setEmailValid(validateEmail(e.target.value));
              if (
                !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  e.target.value
                )
              ) {
                setMessage({
                  ...setMessage,
                  emailError: '이메일 형식으로 입력해 주세요.',
                });
              } else {
                setMessage('');
              }
            }}
            onChangePassword={(e) => {
              setAuthObj({ ...authObj, password: e.target.value });
              setPasswordValid(validatePassword(e.target.value));
              if (e.target.value.length < 10) {
                setMessage({
                  ...setMessage,
                  passwordError: '비밀번호는 최소 10자 이상',
                });
              } else if (
                !/[a-zA-Z]/.test(e.target.value) ||
                !/\d/.test(e.target.value) ||
                !/[!@#$%^&*()_+]/.test(e.target.value)
              ) {
                setMessage({
                  ...setMessage,
                  passwordError:
                    '영문/숫자/특수문자(공백제외) 중 2가지 이상을 포함',
                });
              } else {
                setMessage('');
              }
            }}
            onChangePasswordConfirm={(e) => {
              setAuthObj({ ...authObj, passwordConfirm: e.target.value });
              setConfirmValid(authObj.password === e.target.value);
              if (authObj.password === e.target.value) {
                setMessage('');
              } else if (!e.target.value) {
                setMessage({
                  ...setMessage,
                  passwordConfirmError: '비밀번호를 한번 더 입력해주세요.',
                });
              } else if (authObj.password !== e.target.value) {
                setMessage({
                  ...setMessage,
                  passwordConfirmError: '동일한 비밀번호를 입력해주세요.',
                });
              }
            }}
            onChangeName={(e) =>
              setAuthObj({ ...authObj, name: e.target.value })
            }
            onChangePhoneNumber={(e) =>
              setAuthObj({ ...authObj, phoneNumber: e.target.value })
            }
            onChangeAddress={(e) =>
              setAuthObj({ ...authObj, address: e.target.value })
            }
            onChangeGender={(e) =>
              setAuthObj({ ...authObj, [e.target.name]: e.target.value })
            }
            onChangeBirthYear={(e) =>
              setAuthObj({ ...authObj, birthYear: e.target.value })
            }
            onChangeBirthMonth={(e) =>
              setAuthObj({ ...authObj, birthMonth: e.target.value })
            }
            onChangeBirthDay={(e) =>
              setAuthObj({ ...authObj, birthDay: e.target.value })
            }
            message={message}
          />

          <TermList
            onChangeTermsOfUse={(e) =>
              setAuthObj({ ...authObj, termsOfUse: e })
            }
            onChangeTermsOfPersonalInfo={(e) =>
              setAuthObj({ ...authObj, termsOfPersonalInfo: e })
            }
            onChangeTermsOfEvent={(e) =>
              setAuthObj({ ...authObj, termsOfEvent: e })
            }
            onChangeTermsOfAge={(e) =>
              setAuthObj({ ...authObj, termsOfAge: e })
            }
          />

          <div className={styles.enroll}>
            <button type="button" onClick={signUp}>
              가입하기
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default RegisterRefactor;
