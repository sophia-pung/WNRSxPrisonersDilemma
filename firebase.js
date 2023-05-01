// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeHcp8TPe-CvTkC_WVs-YaPrwhjSzz-Wo",
  authDomain: "marbles-8b816.firebaseapp.com",
  projectId: "marbles-8b816",
  storageBucket: "marbles-8b816.appspot.com",
  messagingSenderId: "340560550764",
  appId: "1:340560550764:web:b0a937e561c56b65163149",
  measurementId: "G-NGD77FLPVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);