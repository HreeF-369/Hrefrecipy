import fs from 'fs';
const text = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const m = text.match(/category:\s*(["'][^"']+["'])/g);
if (m) {
  console.log("Categories found:", m.length);
} else {
  console.log("No categories found");
}

const recipesMatch = text.match(/id:\s*(["'][^"']+["'])/g);
console.log("Recipes found:", recipesMatch ? recipesMatch.length : 0);

