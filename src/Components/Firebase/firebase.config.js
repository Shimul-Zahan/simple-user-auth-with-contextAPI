// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdALk00hEJ_iv5HhdV2_2fetdRS2ifUkk",
    authDomain: "user-auth-with-context-api.firebaseapp.com",
    projectId: "user-auth-with-context-api",
    storageBucket: "user-auth-with-context-api.appspot.com",
    messagingSenderId: "997410971789",
    appId: "1:997410971789:web:4a249bbb57862e04dd42c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;