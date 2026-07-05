const fs = require('fs');
let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const brokenUrls = [
  'https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150',
  'https://images.unsplash.com/photo-1607301406219-fc3a44f7f93e?q=80&w=150',
  'https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150',
  'https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?q=80&w=150',
  'https://images.unsplash.com/photo-1551248429-4043bcaad3be?q=80&w=150',
  'https://images.unsplash.com/photo-1574914629385-a1c2e39a5996?q=80&w=150',
  'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150',
  'https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150',
  'https://images.unsplash.com/photo-1628198646949-fae26c6d3ab9?q=80&w=600',
  'https://images.unsplash.com/photo-1549590143-d585514b8ba4?q=80&w=600',
  'https://images.unsplash.com/photo-1598514981165-f99a5e4d2bfb?q=80&w=600',
  'https://images.unsplash.com/photo-1544025162-8111f42299d6?q=80&w=600',
  'https://images.unsplash.com/photo-1517881917430-e70dfb3610aa?q=80&w=150',
  'https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150',
  'https://images.unsplash.com/photo-1508747703725-719ae2c73ee1?q=80&w=150',
  'https://images.unsplash.com/photo-1551731409-430360700021?q=80&w=150',
  'https://images.unsplash.com/photo-1622484211148-71749c44b140?q=80&w=150',
  'https://images.unsplash.com/photo-1585325701165-351af916e5ec?q=80&w=150',
  'https://img.icons8.com/fluency/96/spices.png',
  'https://img.icons8.com/fluency/96/meat.png',
  'https://img.icons8.com/fluency/96/tuna.png'
];

for (const url of brokenUrls) {
  if (url.includes('150')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150');
  } else if (url.includes('600')) {
    data = data.split(url).join('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600');
  } else {
    data = data.split('https://img.icons8.com/fluency/96/spices.png').join('https://img.icons8.com/fluency/96/salt-shaker.png');
    data = data.split('https://img.icons8.com/fluency/96/meat.png').join('https://img.icons8.com/fluency/96/steak.png');
    data = data.split('https://img.icons8.com/fluency/96/tuna.png').join('https://img.icons8.com/fluency/96/fish.png');
  }
}

fs.writeFileSync('src/services/recipesData.ts', data);
console.log("Done fixing ALL broken URLs");
