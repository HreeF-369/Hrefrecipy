const fs = require('fs');
const content = fs.readFileSync('src/services/recipesData.ts', 'utf8');

// VERY crude regex to find title given category
const matches = content.match(/title:\s*"([^"]+)"[\s\S]*?category:\s*"BREAKFAST"/g);
if (matches) {
  matches.forEach(m => {
    const title = m.match(/title:\s*"([^"]+)"/)[1];
    console.log(title);
  });
}
