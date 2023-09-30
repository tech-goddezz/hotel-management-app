import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBcAjPvXdEqaSKPnexPeyN_6EFncvXigII",
  authDomain: "hotel-app-5f6d6.firebaseapp.com",
  projectId: "hotel-app-5f6d6",
  storageBucket: "hotel-app-5f6d6.appspot.com",
  messagingSenderId: "26564849755",
  appId: "1:26564849755:web:89993c0f00eccb5a1f8f7e",
  measurementId: "G-135E7VCQE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);