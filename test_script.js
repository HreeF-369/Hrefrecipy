const fs = require('fs');
const content = fs.readFileSync('src/services/recipesData.ts', 'utf8');
console.log("Length:", content.length);
console.log("Contains fit-meal-15?", content.includes("fit-meal-15"));
