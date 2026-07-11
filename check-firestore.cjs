async function check() {
  const config = require('./firebase-applet-config.json');
  const dbId = config.firestoreDatabaseId || "(default)";
  const url = `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/${dbId}/documents/recipes`;
  console.log("Fetching", url);
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(JSON.stringify(data).substring(0, 500));
  } catch (e) {
    console.log("Error:", e);
  }
}
check();
