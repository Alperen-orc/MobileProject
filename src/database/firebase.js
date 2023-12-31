import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXDuZ363hAsCDN0-12hPW9N1aa93XpwyU",
    authDomain: "mobil-database.firebaseapp.com",
    projectId: "mobil-database",
    storageBucket: "mobil-database.appspot.com",
    messagingSenderId: "930210225601",
    appId: "1:930210225601:web:d58031b9654f4c585be340",
    measurementId: "G-7EPT0JVGC8"
  };



const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export {
  auth,
  db
}