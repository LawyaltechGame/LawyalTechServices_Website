import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
// Replace these values with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAM60mQNa728brwsalUmSf0k9VBSyIHi_0",
  authDomain: "lawyaltechservices.firebaseapp.com",
  projectId: "lawyaltechservices",
  storageBucket: "lawyaltechservices.firebasestorage.app",
  messagingSenderId: "140469862604",
  appId: "1:140469862604:web:594555578413f087b08269",
  measurementId: "G-RDWXCGRM4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
