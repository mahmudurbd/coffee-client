// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "coffee-store-41c31.firebaseapp.com",
  projectId: "coffee-store-41c31",
  storageBucket: "coffee-store-41c31.appspot.com",
  messagingSenderId: "1051063670699",
  appId: "1:1051063670699:web:d64d68baa918132340a4ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
