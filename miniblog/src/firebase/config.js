// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeyhJMmNqtqYU8Od6hiuvl5MVq9EJkmcI",
  authDomain: "miniblog-sk-carol.firebaseapp.com",
  projectId: "miniblog-sk-carol",
  storageBucket: "miniblog-sk-carol.appspot.com",
  messagingSenderId: "32529334008",
  appId: "1:32529334008:web:f3a7d5c231d2e96d9fc50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};
