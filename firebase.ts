// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwKl24mdwzErQJSNLxOXMon_gPZ5yAyc",
  authDomain: "mirago-61212.firebaseapp.com",
  projectId: "mirago-61212",
  storageBucket: "mirago-61212.firebasestorage.app",
  messagingSenderId: "509449370967",
  appId: "1:509449370967:web:1fb23071ea986eb6fc5212",
  measurementId: "G-NK3GE4BJEF"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };