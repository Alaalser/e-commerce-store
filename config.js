import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDzJUSTbxxdJr5raWe0mC6oW8h87vIUjQc",
  authDomain: "facebook-yt-67f54.firebaseapp.com",
  projectId: "facebook-yt-67f54",
  storageBucket: "facebook-yt-67f54.appspot.com",
  messagingSenderId: "118215350713",
  appId: "1:118215350713:web:8cdb8c462db3307edebe68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
