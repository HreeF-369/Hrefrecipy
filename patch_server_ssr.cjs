const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');
s = s.replace(
  /alt="High protein low calorie \$\{recipe\.title\} recipe"/g,
  'alt={`${recipe.title} - recette haute protéine faible calorie - DishFit`} width="1200" height="900"'
);
fs.writeFileSync('server.ts', s, 'utf8');
