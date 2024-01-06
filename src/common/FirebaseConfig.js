import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDqpHiXBqCsylDePMG2FCrK3FeUIjbTk",
  authDomain: "emailpasswordlogin-84167.firebaseapp.com",
  projectId: "emailpasswordlogin-84167",
  storageBucket: "emailpasswordlogin-84167.appspot.com",
  messagingSenderId: "210300538061",
  appId: "1:210300538061:web:cdc9679df22adf1da8ed84",
  measurementId: "G-9GTRBB49JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);