// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvz3Wm9KGnNwmo3DIefPfKHXBN6zzYfQM",
  authDomain: "socialapp-76a96.firebaseapp.com",
  projectId: "socialapp-76a96",
  storageBucket: "socialapp-76a96.appspot.com",
  messagingSenderId: "893924338547",
  appId: "1:893924338547:web:6468e65a72a4d908b63306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
