import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "massive-legacy-pgtt6",
  appId: "1:65748952058:web:c8a59d4926c1aec0a8fa43",
  apiKey: "AIzaSyC7GTm6KaXwbdzbRVE1titXPYUf7NZHW5k",
  authDomain: "massive-legacy-pgtt6.firebaseapp.com",
  storageBucket: "massive-legacy-pgtt6.firebasestorage.app",
  messagingSenderId: "65748952058"
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})
});
export const auth = getAuth(app);
