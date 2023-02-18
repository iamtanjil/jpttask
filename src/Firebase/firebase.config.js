// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5pAjDV8MkexjBMmXLImGdTSNhqof4d5A",
  authDomain: "jpttask.firebaseapp.com",
  projectId: "jpttask",
  storageBucket: "jpttask.appspot.com",
  messagingSenderId: "364367343748",
  appId: "1:364367343748:web:e1fc62599844c3df9952d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;