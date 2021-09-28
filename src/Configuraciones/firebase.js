import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCU9mn8YsIgVgFxvsLLYJLRcakU1df1kdo",
    authDomain: "note-react-4f232.firebaseapp.com",
    projectId: "note-react-4f232",
    storageBucket: "note-react-4f232.appspot.com",
    messagingSenderId: "1065168515178",
    appId: "1:1065168515178:web:71510810427d98cb121a13"
  };
  
  // Initialize Firebase
  const fb = initializeApp(firebaseConfig);
  export const auth = getAuth(fb);
  export const db = getFirestore();
  export default firebaseConfig;
