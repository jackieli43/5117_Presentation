// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDooncfhMs3AiPw3yGkEdB2_3Cut2wLflU",
  authDomain: "ongoing-session-example.firebaseapp.com",
  projectId: "ongoing-session-example",
  storageBucket: "ongoing-session-example.appspot.com",
  messagingSenderId: "410416559561",
  appId: "1:410416559561:web:662af9b992c11ddec1a418"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initalize components
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
