// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDxj0lrFfzDMD9nWJ_Gt5VuhunD4wxw5Tw",
  authDomain: "aivee-mini-app.firebaseapp.com",
  projectId: "aivee-mini-app",
  storageBucket: "aivee-mini-app.firebasestorage.app",
  messagingSenderId: "537534955197",
  appId: "1:537534955197:web:e3cb60e691c5b7246601d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
