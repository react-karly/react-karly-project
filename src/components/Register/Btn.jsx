import React from 'react';
import style from '../Register/Btn.module.css';

const Btn = ({ btnTitle, buttonClassName }) => {
  return (
    <div>
      <button type="button" className={style[buttonClassName]}>
        {btnTitle}
      </button>
    </div>
  );
};

export default Btn;
