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
