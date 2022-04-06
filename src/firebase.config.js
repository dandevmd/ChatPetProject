// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBC302Ommh-vKtGojtZG_IXSZdPEzuCeL4",
    authDomain: "chat-app-27647.firebaseapp.com",
    projectId: "chat-app-27647",
    storageBucket: "chat-app-27647.appspot.com",
    messagingSenderId: "108890699707",
    appId: "1:108890699707:web:9feecca369544474c4369e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);