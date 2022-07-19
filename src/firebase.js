// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLNVrE7bS1ISpj5MWjAeK78jUENNoGRH8",
  authDomain: "e-commerce-c175e.firebaseapp.com",
  projectId: "e-commerce-c175e",
  storageBucket: "e-commerce-c175e.appspot.com",
  messagingSenderId: "119240274991",
  appId: "1:119240274991:web:7452b35eba983aacf982da",
  measurementId: "G-6G7QPS18L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);