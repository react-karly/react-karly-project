import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../app';

console.log(333, firebaseApp);

export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';
