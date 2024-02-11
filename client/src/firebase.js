import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyAPrd5Zn_fvBill_iKDFVQ14XzYcGM0ZFw",
  authDomain: "med-com-8551b.firebaseapp.com",
  projectId: "med-com-8551b",
  storageBucket: "med-com-8551b.appspot.com",
  messagingSenderId: "545325670603",
  appId: "1:545325670603:web:ca658098285b828db0fb4e"

};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
