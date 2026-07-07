import fs from 'fs';

// Try to read and parse the TS file using regex or a dirty eval
const content = fs.readFileSync('src/services/recipesData.ts', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id: "mediterranean-chickpea-salad-bowl"')) {
    console.log("Found chickpea salad at line", i);
  }
}
