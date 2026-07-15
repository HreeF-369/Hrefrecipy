const fs = require('fs');

let rd = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');
rd = rd.replace(
  /"image": \[recipe\.image\]/g,
  '"image": [absImg]'
);
fs.writeFileSync('src/pages/RecipeDetail.tsx', rd, 'utf8');
