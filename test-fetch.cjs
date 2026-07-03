const fetch = require('node-fetch');

async function testFetch() {
    const firestoreUrl = 'https://firestore.googleapis.com/v1/projects/massive-legacy-pgtt6/databases/ai-studio-globalgastronomy-10fd9fda-6f00-4ebe-b45f-2d16e20f342f/documents/recipes';
    try {
        const response = await fetch(firestoreUrl);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}
testFetch();
