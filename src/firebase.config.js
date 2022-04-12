import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-I8vbT0T1hX41Jr9GmTLNFZYynGWpiJ8',
  authDomain: 'home-marketplace-app.firebaseapp.com',
  projectId: 'home-marketplace-app',
  storageBucket: 'home-marketplace-app.appspot.com',
  messagingSenderId: '766373396236',
  appId: '1:766373396236:web:d2bd2d3603788a48821329',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
