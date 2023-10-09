import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZQDeCfyXGfMP49AlmSNLTGp434T0z6nc",
  authDomain: "chat-app-1176b.firebaseapp.com",
  projectId: "chat-app-1176b",
  storageBucket: "chat-app-1176b.appspot.com",
  messagingSenderId: "510947560067",
  appId: "1:510947560067:web:ed81f6a8bd0484b7f6e9b6",
  measurementId: "G-J1LQF8LNFP",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
