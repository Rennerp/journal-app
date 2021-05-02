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

const firebaseConfigTest = {
  apiKey: "AIzaSyBWY01e1W4_K6xP8DskkmQKrmBmXPOBF9k",
  authDomain: "testing-db-c12bc.firebaseapp.com",
  projectId: "testing-db-c12bc",
  storageBucket: "testing-db-c12bc.appspot.com",
  messagingSenderId: "536751384067",
  appId: "1:536751384067:web:f9445b1705b044dea75036",
  measurementId: "G-13ST3ELW13",
};

if (process.env.NODE_ENV === "test") {
  firebase.initializeApp(firebaseConfigTest);
} else {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
