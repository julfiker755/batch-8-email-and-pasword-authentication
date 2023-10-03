// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaLBGhOSOxoGUFie53ANVnSot3d4fThr0",
  authDomain: "batch7-1df91.firebaseapp.com",
  projectId: "batch7-1df91",
  storageBucket: "batch7-1df91.appspot.com",
  messagingSenderId: "44821895671",
  appId: "1:44821895671:web:25ccf7e299ece95f1b76f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;