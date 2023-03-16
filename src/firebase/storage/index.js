import { firebaseApp } from '../app';
import { getStorage } from 'firebase/storage';

export const storage = getStorage(firebaseApp);

export * from './useUploadFile';
export * from './useDownloadURL';
