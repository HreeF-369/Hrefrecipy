const fs = require('fs');

let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

data = data.replace(/"\/images\/[^"]+"/g, '"https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600"');

fs.writeFileSync('src/services/recipesData.ts', data);
console.log("Fixed local images");
