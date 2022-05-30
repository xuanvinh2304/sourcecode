// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // queuing-system
  apiKey: "AIzaSyBNGtipW7CyVkAUDdwkBXFDYTpxJ7jNJkA",
  authDomain: "queuing-system-79786.firebaseapp.com",
  projectId: "queuing-system-79786",
  storageBucket: "queuing-system-79786.appspot.com",
  messagingSenderId: "228595935575",
  appId: "1:228595935575:web:0aa494423a6b6f011e7612",
  measurementId: "G-VG90EESSLE"
};

// // init services
// const db = firebase.firestore();
// // const colRef = db.collection("")

// export {db};
// export default firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {db,auth};