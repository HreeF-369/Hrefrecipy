const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');
s = s.replace(
  /alt=\{\`\$\{recipe\.title\} - recette haute protéine faible calorie - DishFit\`\}/g,
  'alt="${recipe.title} - recette haute protéine faible calorie - DishFit"'
);
fs.writeFileSync('server.ts', s, 'utf8');
