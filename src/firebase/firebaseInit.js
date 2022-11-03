/*
in this project i'm going to user:-
**firebase Authantication with email,pass => {getAuth,createUserWithEmailAndPassword}
**firestore from firebase => {doc,getFirestore,setDoc for  custum-ID , addoc for auto-ID}


*/
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,

} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc ,updateDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDItye682KbXNQr-f9T1gTocUYHzxm8biQ",
  authDomain: "fire-blog-e8106.firebaseapp.com",
  projectId: "fire-blog-e8106",
  storageBucket: "fire-blog-e8106.appspot.com",
  messagingSenderId: "280048911285",
  appId: "1:280048911285:web:f9816763b75dc581ae8ffc",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

// const timestamp = firebase.firestore.fielValue.serverTimestamp;

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  onAuthStateChanged,
  updateDoc
};
export default firebaseApp;
