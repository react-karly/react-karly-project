import firebaseApp from './app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  browserSessionPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';

const firebaseAuth = getAuth(firebaseApp);

export async function signUp(email, password) {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export async function signIn(email, password) {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
}

export async function onAuthChange(callback) {
  return await onAuthStateChanged(firebaseAuth, callback);
}

export async function signOut() {
  return await firebaseSignOut(firebaseAuth);
}

export async function setAuthPersistence(mode = 'session') {
  let persistenceMode = null;

  if (mode.includes('session')) {
    persistenceMode = browserSessionPersistence;
  } else if (mode.includes('local')) {
    persistenceMode = browserLocalPersistence;
  } else {
    persistenceMode = inMemoryPersistence;
  }

  return await setPersistence(firebaseAuth, persistenceMode);
}

firebaseAuth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export async function signInWithGooglePopup() {
  return await signInWithPopup(firebaseAuth, googleProvider);
}

export async function signInWithGoogleRedirect() {
  return await signInWithRedirect(firebaseAuth, googleProvider);
}

export default firebaseAuth;
