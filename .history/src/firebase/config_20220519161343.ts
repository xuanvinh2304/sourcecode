// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyDQxWzZcvNAMn63FGFA9Lr2KmBQoxvm7Ns",
  authDomain: "dashboard-502b6.firebaseapp.com",
  projectId: "dashboard-502b6",
  storageBucket: "dashboard-502b6.appspot.com",
  messagingSenderId: "911567301625",
  appId: "1:911567301625:web:1123878e967d0f73ba6b28"
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