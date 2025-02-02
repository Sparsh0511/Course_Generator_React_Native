// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  initializeAuth, getReactNativePersistence  } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPxjD2_rKuTNcgOUKF9FYWgZ3ruEhW4oo",
  authDomain: "react-native-project-a7f93.firebaseapp.com",
  projectId: "react-native-project-a7f93",
  storageBucket: "react-native-project-a7f93.firebasestorage.app",
  messagingSenderId: "283476446319",
  appId: "1:283476446319:web:5b1e662f573d0609bcd19a",
  measurementId: "G-4C38MMHG60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db = getFirestore(app)
const analytics = getAnalytics(app);