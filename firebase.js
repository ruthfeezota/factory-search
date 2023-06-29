// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7cA9sjA0zhF-8tlRO1twzvtlVJgu5AFw",
  authDomain: "factory-search.firebaseapp.com",
  projectId: "factory-search",
  storageBucket: "factory-search.appspot.com",
  messagingSenderId: "1056171216440",
  appId: "1:1056171216440:web:5c8cdc0a341a5e63f6a0cd",
  measurementId: "G-WL90HWHL96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);