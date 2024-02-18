import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYCFgr73vvQX-OxCvLuGb65QrCxZIA3hc",
    authDomain: "react-blogs-app-52cfb.firebaseapp.com",
    projectId: "react-blogs-app-52cfb",
    storageBucket: "react-blogs-app-52cfb.appspot.com",
    messagingSenderId: "720882731685",
    appId: "1:720882731685:web:93a326fbe607b715c69b4c"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {auth, db, storage}