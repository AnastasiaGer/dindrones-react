import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAmhFnkqER-Z48owS5hnRnx9PxlP3QBjY",
  authDomain: "dindrones-9fe4f.firebaseapp.com",
  databaseURL: "https://dindrones-9fe4f-default-rtdb.firebaseio.com",
  projectId: "dindrones-9fe4f",
  storageBucket: "dindrones-9fe4f.appspot.com",
  messagingSenderId: "53521737333",
  appId: "1:53521737333:web:be85b05028db5494e9fa3c",
  measurementId: "G-9QHQBZV2BN"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



//init firebase

firebase.initializeApp(firebaseConfig)

//init servises

const projectFirestore = firebase.firestore()

export {projectFirestore}