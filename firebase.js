import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbWDoQrQjkZUiN5rLnj06vA5lqbASKD_o",
  authDomain: "instagram2-27047.firebaseapp.com",
  projectId: "instagram2-27047",
  storageBucket: "instagram2-27047.appspot.com",
  messagingSenderId: "559919973315",
  appId: "1:559919973315:web:04c669e28fbbf75d5c3376"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };