
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9qB_9yrItUyhsys9OQvMDSd1Qs4lSz5o",
  authDomain: "restaurant-4cd19.firebaseapp.com",
  projectId: "restaurant-4cd19",
  storageBucket: "restaurant-4cd19.firebasestorage.app",
  messagingSenderId: "220644670334",
  appId: "1:220644670334:web:051adef2ff9d394f8d912f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };