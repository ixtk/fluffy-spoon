// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { setPersistence, getAuth, browserLocalPersistence } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV0QiZ_P7oNiVkZptgsaBdKcjSS2qyCbs",
  authDomain: "something-cool-a11a7.firebaseapp.com",
  projectId: "something-cool-a11a7",
  storageBucket: "something-cool-a11a7.firebasestorage.app",
  messagingSenderId: "752341394369",
  appId: "1:752341394369:web:d6b4f81c63d70fc4f18540"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider()

await setPersistence(auth, browserLocalPersistence)
