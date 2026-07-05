const fs = require('fs');
let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const brokenUrls = [
  'https://images.unsplash.com/photo-1495195134817-a165b4c10745?q=80&w=150',
  'https://images.unsplash.com/photo-1495195134817-a165b4c10745?q=80&w=600',
  'https://img.icons8.com/fluency/96/paprika.png',
  'https://img.icons8.com/fluency/96/steak.png',
  'https://img.icons8.com/fluency/96/fish-food.png'
];

for (const url of brokenUrls) {
  if (url.includes('150')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150');
  } else if (url.includes('600')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600');
  } else {
    // for icons
    data = data.split('https://img.icons8.com/fluency/96/paprika.png').join('https://img.icons8.com/fluency/96/salt-shaker.png');
    data = data.split('https://img.icons8.com/fluency/96/steak.png').join('https://img.icons8.com/fluency/96/meat.png'); // wait steak was 404? 
  }
}

fs.writeFileSync('src/services/recipesData.ts', data);
console.log("Done fixing 404s again");
