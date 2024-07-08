// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-afa88.firebaseapp.com",
  projectId: "mern-estate-afa88",
  storageBucket: "mern-estate-afa88.appspot.com",
  messagingSenderId: "641804734717",
  appId: "1:641804734717:web:62b6180060d8467fcf2e94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

