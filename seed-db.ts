import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDocs, collection } from "firebase/firestore";
import { RECIPES_DATA } from "./src/services/recipesData.ts";
import firebaseConfig from "./firebase-applet-config.json";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function seed() {
  console.log("Seeding recipes to", firebaseConfig.firestoreDatabaseId);
  try {
    for (const recipe of RECIPES_DATA) {
        await setDoc(doc(db, "recipes", String(recipe.id)), recipe);
        console.log("Seeded", recipe.id);
        break; // just seed one
    }
    const snap = await getDocs(collection(db, "recipes"));
    console.log("Size:", snap.size);
  } catch(e) {
      console.error("Error during seed:", e);
  }
}
seed();
