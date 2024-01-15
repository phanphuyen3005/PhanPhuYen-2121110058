// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALrCiXx8xNDkyDn3jfL6FXE9OSOMapYdU",
  authDomain: "android-bb5d8.firebaseapp.com",
  projectId: "android-bb5d8",
  storageBucket: "android-bb5d8.appspot.com",
  messagingSenderId: "989671335150",
  appId: "1:989671335150:web:757194c748dbacac7c7fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };