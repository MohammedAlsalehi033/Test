import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0WZpzn1UPK0cRHSA_xBE9u7cBk9Z9NuA",
  authDomain: "linkyoutask-9b530.firebaseapp.com",
  projectId: "linkyoutask-9b530",
  storageBucket: "linkyoutask-9b530.appspot.com",
  messagingSenderId: "263472760147",
  appId: "1:263472760147:web:a82e6c6a4de31b3e18cda6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export const auth = getAuth(app);

export { db, firebaseConfig };
