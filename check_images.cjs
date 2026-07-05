const fs = require('fs');
const data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const regex = /image:\s*"([^"]+)"/g;
let match;
const missing = [];
while ((match = regex.exec(data)) !== null) {
  const imgPath = match[1];
  if (imgPath.startsWith('/images/')) {
    const localPath = 'public' + imgPath;
    if (!fs.existsSync(localPath)) {
      missing.push(imgPath);
    }
  }
}
console.log("Missing local images:", missing);
