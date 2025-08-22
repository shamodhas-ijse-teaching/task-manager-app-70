import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeiZ-838gDATVqV5ykyCpevaWXkBMJqaM",
  authDomain: "task-manager-ead57.firebaseapp.com",
  projectId: "task-manager-ead57",
  storageBucket: "task-manager-ead57.firebasestorage.app",
  messagingSenderId: "544806961634",
  appId: "1:544806961634:web:a8ec18ef16a718c84579bb"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)