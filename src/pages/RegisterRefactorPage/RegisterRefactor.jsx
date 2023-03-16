import React from 'react';
import styles from './RegisterRefactor.module.css';
import { UserInput } from './../../components/RegisterRefactor/UserInput';
import { TermList } from './../../components/RegisterRefactor/TermList';

function RegisterRefactor() {
  return (
    <main>
      <section className={styles['register-container']}>
        <h2 className={styles['register-title']}>회원가입</h2>
        <p className={styles['register-required']} aria-hidden="true">
          필수입력사항
        </p>
        <form className={styles['register-form']} action="">
          <UserInput />

          <TermList />

          <div>
            <button className={styles.enroll}>Enroll Button</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default RegisterRefactor;
