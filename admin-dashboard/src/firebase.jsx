import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBLsU9hyvkgz4HvM8s5LvaIMf3cwxIAjVc",
    authDomain: "admin-dashboard-bc884.firebaseapp.com",
    projectId: "admin-dashboard-bc884",
    storageBucket: "admin-dashboard-bc884.appspot.com",
    messagingSenderId: "187863036172",
    appId: "1:187863036172:web:a7bf6385c9f5816cf41929",
    measurementId: "G-GWWKQHCRX5"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };