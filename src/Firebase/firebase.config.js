// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-9ERGBLklUQPuwNV9tZFHHx3geTb8JSs",
  authDomain: "ema-john-ecommerce-f3d34.firebaseapp.com",
  projectId: "ema-john-ecommerce-f3d34",
  storageBucket: "ema-john-ecommerce-f3d34.appspot.com",
  messagingSenderId: "652283360702",
  appId: "1:652283360702:web:7145947b660cfcfc29f5ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app