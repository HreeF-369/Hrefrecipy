const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');

// Replace the Firestore fallback in server.ts
server = server.replace(/\/\/ 2\. Query Firestore[\s\S]*?if \(result\) return result;\n  \} catch \(error\) \{\n    console\.error\("Error fetching recipe from Firestore:", error\);\n  \}/, `// 2. Removed Firestore fallback as all global recipes are local.
  // This prevents 500 errors on Vercel caused by Node.js Firebase SDK trying to connect to (default)`);

fs.writeFileSync('server.ts', server);

let api = fs.readFileSync('src/services/api.ts', 'utf8');
api = api.replace(/\/\/ 5\. Fallback to Firestore[\s\S]*?if \(result\) return result;\n  \} catch \(error\) \{\n    console\.error\("Error fetching recipe from Firestore:", error\);\n  \}/, `// 5. Removed Firestore fallback to prevent Vercel 500 crashes
  // All recipes should be in RECIPES_DATA.`);
  
fs.writeFileSync('src/services/api.ts', api);
console.log("Fixed fallbacks");
