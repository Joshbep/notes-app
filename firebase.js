import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBTrGCZzHS1L-3GbkWjTPddLW1vOk3Zwkg",
  authDomain: "notes-app-70c67.firebaseapp.com",
  projectId: "notes-app-70c67",
  storageBucket: "notes-app-70c67.appspot.com",
  messagingSenderId: "923215780807",
  appId: "1:923215780807:web:0eeeb62cf37177a8a357e2",
  measurementId: "G-B8VQ8HBLGB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")