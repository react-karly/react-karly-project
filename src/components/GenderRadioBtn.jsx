import React from 'react';

const GenderRadioBtn = () => {
  return (
    <div>
      <li>
        <p>성별</p>
        <div>
          <input type="radio" id="gender-male" name="gender" value="male" />
          <label for="gender-male">남자</label>
          <input type="radio" id="gender-female" name="gender" value="female" />
          <label for="gender-female">여자</label>
          <input type="radio" id="gender-none" name="gender" value="none" />
          <label for="gender-none">선택안함</label>
        </div>
      </li>
    </div>
  );
};

export default GenderRadioBtn;
