const fs = require('fs');

let planner = fs.readFileSync('src/pages/Planner.tsx', 'utf8');

planner = planner.replace(
  /alt=\{recipe\.title\}/g,
  "alt={`\${recipe.title} - recette haute protéine faible calorie - DishFit`} width=\"100\" height=\"100\" loading=\"lazy\""
);

fs.writeFileSync('src/pages/Planner.tsx', planner, 'utf8');
