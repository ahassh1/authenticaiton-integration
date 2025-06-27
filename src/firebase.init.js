// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//DANGER TO USE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIBoDJECwIitLSHLrPGkl6w4QRX7yV0jI",
  authDomain: "authentication-integrati-7160e.firebaseapp.com",
  projectId: "authentication-integrati-7160e",
  storageBucket: "authentication-integrati-7160e.firebasestorage.app",
  messagingSenderId: "133365901131",
  appId: "1:133365901131:web:5cb9f6b847999a4d5b6ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);