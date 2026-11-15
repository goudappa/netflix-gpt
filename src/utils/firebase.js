// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWWGxr_s3_5U6kSTXyvbfbpsDmD7nmqss",
  authDomain: "netflixgpt-50f49.firebaseapp.com",
  projectId: "netflixgpt-50f49",
  storageBucket: "netflixgpt-50f49.firebasestorage.app",
  messagingSenderId: "847147137068",
  appId: "1:847147137068:web:63413c745a202688c1b989",
  measurementId: "G-GWF3NSBCTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
