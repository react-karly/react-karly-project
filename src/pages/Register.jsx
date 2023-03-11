import React from 'react';

const Register = () => {
  return (
    <main>
      <section className="register">
        <h1>회원가입</h1>
        <p aria-hidden="true">필수입력사항</p>
        <form method="POST">
          <ul>
            <li>
              <label>
                <span className="a11y-hidden">필수입력사항</span>아이디
              </label>
              <input
                type="text"
                required
                placeholder="아이디를 입력해주세요."
              />
              <button type="button">중복확인</button>
            </li>
            <li>
              <label for="password">
                <span className="a11y-hidden">필수입력사항</span>비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                minlength="8"
                required
                placeholder="비밀번호를 입력해주세요."
              />
              <p>비밀번호는 8자리 이상이어야 합니다.</p>
            </li>
            <li>
              <label for="password-confirm">
                <span className="a11y-hidden">필수입력사항</span>비밀번호 확인
              </label>
              <input
                type="password"
                required
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
              <p>비밀번호를 먼저 입력해주세요.</p>
              <p>비밀번호가 일치하지 않습니다.</p>
              <p>비밀번호가 일치합니다.</p>
            </li>
            <li>
              <label for="name">
                <span className="a11y-hidden">필수입력사항</span>이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="이름을 한번 더 입력해주세요."
              />
            </li>
            <li>
              <label for="email">
                <span className="a11y-hidden">필수입력사항</span>이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="예) marketkarly@karly.com"
              />
              <button type="button">중복확인</button>
              <p>유효하지 않은 이메일 형식입니다.</p>
              <p>유효한 이메일 형식입니다.</p>
            </li>
            <li>
              <label for="phone">
                <span className="a11y-hidden">필수입력사항</span>휴대폰
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxlength="11"
                required
                placeholder="숫자만 입력해주세요."
              />
              <button type="button">인증번호 받기</button>
              <p>숫자만 입력해주세요.</p>
            </li>
            <li>
              <label for="address">
                <span className="a11y-hidden">필수입력사항</span>주소
              </label>
              <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
              <button type="button" id="address">
                주소검색
              </button>
            </li>
            <li>
              <p>성별</p>
              <div>
                <input
                  className="a11y-hidden"
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                />
                <label for="gender-male">남자</label>
                <input
                  className="a11y-hidden"
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                />
                <label for="gender-female">여자</label>
                <input
                  className="a11y-hidden"
                  type="radio"
                  id="gender-none"
                  name="gender"
                  value="none"
                />
                <label for="gender-none">선택안함</label>
              </div>
            </li>
            <li>
              <p>생년월일</p>
              <div>
                <label for="birth-year" className="a11y-hidden">
                  연도 입력(4글자)
                </label>
                <input
                  type="text"
                  maxlength="4"
                  minlength="4"
                  id="birth-year"
                  name="birth-year"
                  placeholder="YYYY"
                  aria-hidden="true"
                />
                <span aria-hidden="true">/</span>
                <label for="birth-month" className="a11y-hidden">
                  월 입력(2글자)
                </label>
                <input
                  type="text"
                  maxlength="2"
                  minlength="2"
                  id="birth-month"
                  name="birth-month"
                  placeholder="MM"
                  aria-hidden="true"
                />
                <span aria-hidden="true">/</span>
                <label for="birth-day" className="a11y-hidden">
                  일 입력(2글자)
                </label>
                <input
                  type="text"
                  maxlength="2"
                  minlength="2"
                  id="birth-day"
                  name="birth-day"
                  placeholder="DD"
                  aria-hidden="true"
                />
              </div>
              <p>숫자만 입력해주세요.</p>
            </li>
            <li>
              <p>추가입력 사항</p>
              <div>
                <input
                  className="a11y-hidden"
                  type="radio"
                  id="recommand-id"
                  name="recommand-id"
                />
                <label for="recommand-id">친구초대 추천인 아이디</label>
                <input
                  className="a11y-hidden"
                  type="radio"
                  id="event"
                  name="event"
                />
                <label for="event">참여 이벤트명</label>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <p>이용약관 동의</p>
            </li>
            <li>
              <ul>
                <li>
                  <span className="a11y-hidden">이용약관 전체 동의 여부</span>
                  <p>
                    선택 항목에 동의하지 않는 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </p>
                  <input
                    className="a11y-hidden"
                    type="checkbox"
                    id="check-all-terms"
                  />
                  <label for="check-all-terms">전체 동의합니다.</label>
                </li>
                <li>
                  <span className="a11y-hidden">
                    이용약관 동의 여부 (필수 항목)
                  </span>
                  <button>약관보기</button>
                  <input
                    className="a11y-hidden terms"
                    type="checkbox"
                    id="terms-of-use"
                    name="terms-of-use"
                    required
                  />
                  <label for="terms-of-use">이용약관 동의 (필수)</label>
                </li>
                <li>
                  <span className="a11y-hidden">
                    개인정보 수집 이용 여부 (필수 항목)
                  </span>
                  <button>약관보기</button>
                  <input
                    classNameName="a11y-hidden terms"
                    type="checkbox"
                    id="terms-of-personal-info"
                    name="terms-of-personal-info"
                    required
                  />
                  <label for="terms-of-personal-info">
                    개인정보 수집 이용 동의 (필수)
                  </label>
                </li>
                <li>
                  <span classNameName="a11y-hidden">
                    무료배송, 할인쿠폰등 혜택, 정보 수신 동의 여부 (선택 항목)
                  </span>
                  <button>약관보기</button>
                  <input
                    classNameName="a11y-hidden terms"
                    type="checkbox"
                    id="term-of-ads"
                    name="term-of-ads"
                  />
                  <label for="term-of-ads">
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)
                  </label>
                </li>
                <li>
                  <span classNameName="a11y-hidden">
                    14세 이상 확인 (필수 항목)
                  </span>
                  <button>약관보기</button>
                  <input
                    classNameName="a11y-hidden terms"
                    type="checkbox"
                    id="terms-of-age"
                    name="terms-of-age"
                    required
                  />
                  <label for="terms-of-age">
                    본인은 만 14세 이상입니다. (필수)
                  </label>
                </li>
              </ul>
            </li>
          </ul>
          <button type="button">가입하기</button>
        </form>
      </section>
    </main>
  );
};

export default Register;
