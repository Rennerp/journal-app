import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPaU1PkdJc129g2KeOwxiQrqFrw5Z6rJQ",
  authDomain: "journal-app-d028f.firebaseapp.com",
  databaseURL: "https://journal-app-d028f.firebaseio.com",
  projectId: "journal-app-d028f",
  storageBucket: "journal-app-d028f.appspot.com",
  messagingSenderId: "699331529257",
  appId: "1:699331529257:web:8e1aa3a35fb8bf17bfea38",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
