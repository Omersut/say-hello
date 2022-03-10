// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJtVKipYM4nYfiuXYiaEytyQvpL9ve5f0",
  authDomain: "sayhello-d1d54.firebaseapp.com",
  projectId: "sayhello-d1d54",
  storageBucket: "sayhello-d1d54.appspot.com",
  messagingSenderId: "216612780467",
  appId: "1:216612780467:web:17c775c6934a9e238eb3c6",
  measurementId: "G-YMNHSRR63R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
