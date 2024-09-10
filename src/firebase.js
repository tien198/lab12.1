// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDczDBI1CkQi_aCQQAWnx51oSLWCgumKDM",
    authDomain: "httprequestproj.firebaseapp.com",
    projectId: "httprequestproj",
    storageBucket: "httprequestproj.appspot.com",
    messagingSenderId: "817077328917",
    appId: "1:817077328917:web:a7def1023fad1b34cf821c",
    measurementId: "G-W42DQTDSV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireStore = getFirestore(app)