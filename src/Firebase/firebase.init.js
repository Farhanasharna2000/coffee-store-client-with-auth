// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNamuJtUDclwZhDEp7kwXB9r3Z4EFZzDc",
  authDomain: "coffee-store-ca52f.firebaseapp.com",
  projectId: "coffee-store-ca52f",
  storageBucket: "coffee-store-ca52f.firebasestorage.app",
  messagingSenderId: "750082968854",
  appId: "1:750082968854:web:c1576002e192b675e95437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);