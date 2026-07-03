import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../../firebase-applet-config.json";

const app = initializeApp(firebaseConfig);

// Use the specific user-provided Firestore database instance explicitly
const FIRESTORE_DB_ID = "ai-studio-globalgastronomy-10fd9fda-6f00-4ebe-b45f-2d16e20f342f";
export const db = getFirestore(app, FIRESTORE_DB_ID);

export const auth = getAuth(app);

