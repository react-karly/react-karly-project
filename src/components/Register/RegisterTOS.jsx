import React from 'react';
import styles from '../Register/RegisterTOS.module.css';

export function RegisterTOS({
  requiredOrOptional,
  terms,
  id,
  onChangeTermsOfUse,
  onChangeTermsOfPersonalInfo,
  onChangeTermsOfEvent,
  onChangeTermsOfAge,
}) {
  const handleChange = (e) => {
    console.log(e); // 이벤트 객체가 제대로 전달되었는지 확인
    if (onChangeTermsOfUse && id === 'terms-of-use') {
      onChangeTermsOfUse(e.target.checked);
    } else if (onChangeTermsOfPersonalInfo && id === 'terms-of-personal') {
      onChangeTermsOfPersonalInfo(e.target.checked);
    } else if (onChangeTermsOfEvent && id === 'terms-of-event') {
      onChangeTermsOfEvent(e.target.checked);
    } else if (onChangeTermsOfAge && id === 'terms-of-age') {
      onChangeTermsOfAge(e.target.checked);
    }
    console.log(e.target.checked);
  };

  return (
    <li className={styles['term-container']}>
      <span className={styles['a11y-hidden']}>
        이용약관 동의 여부 ({requiredOrOptional} 항목)
      </span>
      <input
        type="checkbox"
        id={id}
        name={id}
        required
        onChange={handleChange}
      />
      <label htmlFor={id}>
        {terms} ({requiredOrOptional})
      </label>
      <button className={styles['show-term']}>약관보기 &gt;</button>
    </li>
  );
}
