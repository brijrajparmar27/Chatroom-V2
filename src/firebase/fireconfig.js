import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfuPeIRwCvq-iVUgWuhHRO8mi5NVs8S4Y",
  authDomain: "chatroom-eae5d.firebaseapp.com",
  projectId: "chatroom-eae5d",
  storageBucket: "chatroom-eae5d.appspot.com",
  messagingSenderId: "575898421562",
  appId: "1:575898421562:web:f40c848d8673ca3ff6a803",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider()
const fireauth = firebase.auth();

export { firestore, fireauth, googleProvider };
