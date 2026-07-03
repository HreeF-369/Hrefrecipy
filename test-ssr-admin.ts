import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp({
  projectId: "massive-legacy-pgtt6",
});

const db = getFirestore(app);

async function check() {
  try {
    const list = await db.listCollections();
    console.log("Collections:", list.map(c => c.id));
  } catch(e) {
    console.error("Collections Error:", e.message);
  }
}
check();
