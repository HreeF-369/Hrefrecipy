const fs = require('fs');

let rm = fs.readFileSync('src/components/RecipeModal.tsx', 'utf8');
rm = rm.replace(
  /alt=\{\`High protein \$\{recipe\.title\} recipe\`\}/g,
  "alt={`\${recipe.title} - recette haute protéine faible calorie - DishFit`}"
);
rm = rm.replace(
  /<img\n\s+src=\{imgError \? FALLBACK_IMAGE/g,
  '<img\n                    width="800"\n                    height="600"\n                    src={imgError ? FALLBACK_IMAGE'
);
fs.writeFileSync('src/components/RecipeModal.tsx', rm, 'utf8');
