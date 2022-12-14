import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";

const firebaseConfig = {
  apiKey: "AIzaSyCVVAqYii-XGMLs8UR4kEalN_JXi-3KEAU",
  authDomain: "labcode-program.firebaseapp.com",
  databaseURL: "https://react-http-6a6f2-default-rtdb.firebaseio.com",
  projectId: "labcode-program",
  storageBucket: "labcode-program.appspot.com",
  messagingSenderId: "713013090918",
  appId: "1:713013090918:web:38b4a7b28e34c017d96ba7",

  // apiKey: "AIzaSyAsUOveQGd28EztQu1TlztUWRSj0xo2-EU",
  // authDomain: "react-http-6a6f2.firebaseapp.com",
  // databaseURL: "https://react-http-6a6f2-default-rtdb.firebaseio.com",
  // projectId: "react-http-6a6f2",
  // storageBucket: "react-http-6a6f2.appspot.com",
  // messagingSenderId: "734323578315",
  // appId: "1:734323578315:web:ab784cdccf7b4cffe6924e",
};

firebase.initializeApp(firebaseConfig);

const storage = getStorage();
// console.log(storage);

export { storage, firebase as default };
