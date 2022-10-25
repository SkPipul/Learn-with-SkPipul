// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSFAgkRHRkQIaOEYW_5PRt1mayqI67ZUc",
  authDomain: "learn-with-skpipul.firebaseapp.com",
  projectId: "learn-with-skpipul",
  storageBucket: "learn-with-skpipul.appspot.com",
  messagingSenderId: "286928346309",
  appId: "1:286928346309:web:f1e350921fdbb9e047e4ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;