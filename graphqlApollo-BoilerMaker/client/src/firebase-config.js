// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9QysqvIVyjzXHoidfj-b-wslA4BrT29M',
  authDomain: 'blogproject-b6ce5.firebaseapp.com',
  projectId: 'blogproject-b6ce5',
  storageBucket: 'blogproject-b6ce5.appspot.com',
  messagingSenderId: '299616524134',
  appId: '1:299616524134:web:f61dc0f7e108d8734b1aa7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// after importing these two functions from above you create variables for them
// this is primarily around authentication

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
