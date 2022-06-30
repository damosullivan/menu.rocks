import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// TODO: put json somewhere
import serviceAccount from '/Users/damosullivan/Downloads/menu-rocks-13f5758d7e51.json';

export const app = initializeApp({
	credential: cert(serviceAccount)
});
export const db = getFirestore();
