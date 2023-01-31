import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcWsz0Lnsg6IS-uFHB_M4c4xKhtJBPWYY",
  authDomain: "chat-app-813dc.firebaseapp.com",
  projectId: "chat-app-813dc",
  storageBucket: "chat-app-813dc.appspot.com",
  messagingSenderId: "653032736909",
  appId: "1:653032736909:web:b10b768ab0f95160d07ac4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
