import React from 'react';

const GenderRadioBtn = () => {
  return (
    <li>
      <p>성별</p>
      <div>
        <input type="radio" id="gender-male" name="gender" value="male" />
        <label htmlFor="gender-male">남자</label>
        <input type="radio" id="gender-female" name="gender" value="female" />
        <label htmlFor="gender-female">여자</label>
        <input type="radio" id="gender-none" name="gender" value="none" />
        <label htmlFor="gender-none">선택안함</label>
      </div>
    </li>
  );
};

export default GenderRadioBtn;
