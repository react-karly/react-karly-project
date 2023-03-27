import firebaseApp from '../app';
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(firebaseApp);

export * from './useReadData';
