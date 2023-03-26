import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

export const errorState = atom({
  key: 'errorState',
  default: false,
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const authState = atom({
  key: 'authState',
  default: {
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
  },
});
