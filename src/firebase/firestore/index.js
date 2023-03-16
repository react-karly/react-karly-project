import firebaseApp from '../app';
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(firebaseApp);

export * from './useCreateAuthUser';
export * from './useWriteBatchData';

export * from './useCreateData';
export * from './useReadData';
export * from './useUpdateData';
export * from './useDeleteData';
