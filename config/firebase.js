import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNLbpXCT7bdxBj0qQ85CRxdfNsJW_gZ5k",
    authDomain: "loginsystem-20db7.firebaseapp.com",
    projectId: "loginsystem-20db7",
    storageBucket: "loginsystem-20db7.firebasestorage.app",
    messagingSenderId: "92960063761",
    appId: "1:92960063761:web:34d3528d0a8e14fcef8cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

