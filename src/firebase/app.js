import { initializeApp } from 'firebase/app';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_MESSAGE_SENDER_ID,
  VITE_STORAGE_BUCKET,
  VITE_APP_ID,
} = import.meta.env;


const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_MESSAGE_SENDER_ID,
  messagingSenderId: VITE_STORAGE_BUCKET,
  appId: VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
