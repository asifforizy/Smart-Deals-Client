// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSAw9OcnXMIqUGdqW0ryVF4pk9S8zOh70",
  authDomain: "smart-deals-1d161.firebaseapp.com",
  projectId: "smart-deals-1d161",
  storageBucket: "smart-deals-1d161.firebasestorage.app",
  messagingSenderId: "1069308224111",
  appId: "1:1069308224111:web:a48c1fa211129837e2e39a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);