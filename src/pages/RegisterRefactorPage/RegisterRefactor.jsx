import React, { useEffect, useState } from 'react';
import styles from './RegisterRefactor.module.css';
import { UserInput } from './../../components/RegisterRefactor/UserInput';
import { TermList } from './../../components/RegisterRefactor/TermList';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function RegisterRefactor() {
  const [authObj, setAuthObj] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
    address: '',
    gender: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    termsOfUse: false,
    termsOfPersonalInfo: false,
    termsOfEvent: false,
    termsOfAge: false,
  });

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

  const signUp = async () => {
    if (authObj.password !== authObj.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log(5959, authObj);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        authObj.email,
        authObj.password
      );
      console.log(6666, result);
      const data = await addDoc(usersCollectionRef, {
        email: authObj.email,
        password: authObj.password,
        passwordConfirm: authObj.passwordConfirm,
        name: authObj.name,
        phoneNumber: authObj.phoneNumber,
        address: authObj.address,
        gender: authObj.gender,
        birthYear: authObj.birthYear,
        birthMonth: authObj.birthMonth,
        birthDay: authObj.birthDay,
        termsOfUse: Boolean(authObj.termsOfUse),
        termsOfPersonalInfo: Boolean(authObj.termsOfPersonalInfo),
        termsOfEvent: Boolean(authObj.termsOfEvent),
        termsOfAge: Boolean(authObj.termsOfAge),
      });
      console.log(7676, data);
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
            onChangeEmail={(e) =>
              setAuthObj({ ...authObj, email: e.target.value })
            }
            onChangePassword={(e) =>
              setAuthObj({ ...authObj, password: e.target.value })
            }
            onChangePasswordConfirm={(e) =>
              setAuthObj({ ...authObj, passwordConfirm: e.target.value })
            }
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
            <button type="submit" onClick={signUp}>
              가입하기
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default RegisterRefactor;
