// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS4W3gG5OpeJegvbHCqsfd7cwtNyM0PMI",
  authDomain: "bmi-calculator-7ebb1.firebaseapp.com",
  projectId: "bmi-calculator-7ebb1",
  storageBucket: "bmi-calculator-7ebb1.appspot.com",
  messagingSenderId: "510898741001",
  appId: "1:510898741001:web:1598f065e4f3c0cef17dd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
