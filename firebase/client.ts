// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABAjQLq9YQLyR6fp9m41VS5nVgmPNwUVM",
  authDomain: "prepwise-fd126.firebaseapp.com",
  projectId: "prepwise-fd126",
  storageBucket: "prepwise-fd126.firebasestorage.app",
  messagingSenderId: "19886289836",
  appId: "1:19886289836:web:7c6cc7447f0ee9762b8009",
  measurementId: "G-VKEX8KM4QG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
