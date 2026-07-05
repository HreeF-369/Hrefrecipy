const fs = require('fs');
let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const idMatch = 'id: "ds-trend-14"';
const index = data.indexOf(idMatch);
if (index !== -1) {
  const nextImageMatch = data.indexOf('image:', index);
  if (nextImageMatch !== -1) {
    const endOfLine = data.indexOf('\n', nextImageMatch);
    const before = data.substring(0, nextImageMatch);
    const after = data.substring(endOfLine);
    data = before + 'image: "/images/churros_ganache.jpg",' + after;
    fs.writeFileSync('src/services/recipesData.ts', data);
    console.log('done');
  }
}
