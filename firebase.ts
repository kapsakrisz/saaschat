import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyAZGocpR7uQX4VmQdjQLYOOiuM2MLYFoHI",
    authDomain: "saas-translator-4de30.firebaseapp.com",
    projectId: "saas-translator-4de30",
    storageBucket: "saas-translator-4de30.appspot.com",
    messagingSenderId: "482708389337",
    appId: "1:482708389337:web:f8d8e8f3726c518d182dc8"
  };

  const app= getApps().length ? getApp () : initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);
  const functions= getFunctions(app);

  export {db,auth,functions};