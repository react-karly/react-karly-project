import React from 'react';
import style from '../Register/Btn.module.css';

export function Btn({ btnTitle, buttonClassName, onClick }) {
  return (
    <div>
      <button
        type="button"
        className={style[buttonClassName]}
        onClick={onClick}
      >
        {btnTitle}
      </button>
    </div>
  );
}
