
import firebase from "firebase/compat/app";
//Authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJeiozrgesik_w4R7cPzx0SUBzwQ7Jc8",
  authDomain: "clone-2025-1b997.firebaseapp.com",
  projectId: "clone-2025-1b997",
  storageBucket: "clone-2025-1b997.firebasestorage.app",
  messagingSenderId: "501260041205",
  appId: "1:501260041205:web:e0310b9b8326efe8517ebc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore(app);
