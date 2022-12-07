import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4H03N102PKG9-V-0DxbOUrHewtTPW4C0",
  authDomain: "funghi-fight.firebaseapp.com",
  projectId: "funghi-fight",
  storageBucket: "funghi-fight.appspot.com",
  messagingSenderId: "643997906934",
  appId: "1:643997906934:web:006796b910cc7d6fbeb9d7",
  measurementId: "G-6XQ1SN8DFR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// connectFirestoreEmulator(db, "localhost", 8080);
