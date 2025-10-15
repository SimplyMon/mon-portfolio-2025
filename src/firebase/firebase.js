import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5QYguH5FPknvG_ykqsq08xbFJvNHRJbk",
  authDomain: "portfolio-7327f.firebaseapp.com",
  databaseURL:
    "https://portfolio-7327f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-7327f",
  storageBucket: "portfolio-7327f.firebasestorage.app",
  messagingSenderId: "378536740924",
  appId: "1:378536740924:web:dc3c2259ea48e9209e1b39",
  measurementId: "G-TX2372RPFL",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
