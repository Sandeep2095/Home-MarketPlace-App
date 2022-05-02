import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCchUes2blT5GYXDkQysXEN0GIDpQaDuXY',
  authDomain: 'house-market-place-aeb4b.firebaseapp.com',
  projectId: 'house-market-place-aeb4b',
  storageBucket: 'house-market-place-aeb4b.appspot.com',
  messagingSenderId: '292642957358',
  appId: '1:292642957358:web:b46f56e69fb97aa4a097bf',
  measurementId: 'G-6E6G4SBCZ1',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
