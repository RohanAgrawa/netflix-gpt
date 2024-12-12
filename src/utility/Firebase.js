// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD67l38iLEFsagF6UuYXbRWoSHtH7gdy7A",
  authDomain: "netflix-gpt-cc8e0.firebaseapp.com",
  projectId: "netflix-gpt-cc8e0",
  storageBucket: "netflix-gpt-cc8e0.firebasestorage.app",
  messagingSenderId: "84683213356",
  appId: "1:84683213356:web:a6320f3b88eac2312edf89",
  measurementId: "G-L9FNVR4DH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
