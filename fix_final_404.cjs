const fs = require('fs');
let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const brokenUrls = [
  'https://images.unsplash.com/photo-1506368249639-73a05d6f6429?q=80&w=200',
  'https://images.unsplash.com/photo-1606851094055-351830514a40?q=80&w=200',
  'https://images.unsplash.com/photo-1589135235552-878f7ef08866?q=80&w=150',
  'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=150',
  'https://images.unsplash.com/photo-1563565375-f3fdfdbedd83?q=80&w=150'
];

for (const url of brokenUrls) {
  if (url.includes('150')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150');
  } else if (url.includes('200')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200');
  }
}

data = data.split('https://img.icons8.com/fluency/96/flour.png').join('https://img.icons8.com/fluency/96/wheat.png');
data = data.split('https://img.icons8.com/fluency/96/black-pepper.png').join('https://img.icons8.com/fluency/96/salt-shaker.png');
data = data.split('https://img.icons8.com/fluency/96/dill.png').join('https://img.icons8.com/fluency/96/herb.png');
data = data.split('https://img.icons8.com/fluency/96/lemon.png').join('https://img.icons8.com/fluency/96/citrus.png');

fs.writeFileSync('src/services/recipesData.ts', data);
console.log("Fixed final URLs");
