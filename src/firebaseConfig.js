// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeNsDlQ60HNrIrKX_ie-x4x-ZzYFstONM",
  authDomain: "faculty-availability-sys-888c8.firebaseapp.com",
  projectId: "faculty-availability-sys-888c8",
  storageBucket: "faculty-availability-sys-888c8.appspot.com",
  messagingSenderId: "296394895036",
  appId: "1:296394895036:web:e16ec0ea037ab96705eab9",
  measurementId: "G-DDTFSZSKVN",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);