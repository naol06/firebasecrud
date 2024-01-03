import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {

    apiKey: "AIzaSyDJDipRTjqsnFHlHg1dHB4jZzLanEBPXFk",
  
    authDomain: "fir-crud-37863.firebaseapp.com",
  
    projectId: "fir-crud-37863",
  
    storageBucket: "fir-crud-37863.appspot.com",
  
    messagingSenderId: "759565266283",
  
    appId: "1:759565266283:web:0ab1cf696f51a227e6f02e",
  
    measurementId: "G-15HPPE1CND"
  
  };
  
  const App =initializeApp(firebaseConfig);
  export const db=getFirestore(App)
  export const storage=getStorage(App)