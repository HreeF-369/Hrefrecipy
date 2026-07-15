const fs = require('fs');

// Patch RecipeCard.tsx
let rc = fs.readFileSync('src/components/RecipeCard.tsx', 'utf8');
rc = rc.replace(
  /alt=\{\`Healthy \$\{recipe\.title\} recipe meal prep\`\}/g,
  "alt={`\${recipe.title} - recette haute protéine faible calorie - DishFit`}"
);
rc = rc.replace(
  /<img\s+src=\{imgError \? FALLBACK_IMAGE/g,
  '<img\n            width="800"\n            height="600"\n            src={imgError ? FALLBACK_IMAGE'
);
fs.writeFileSync('src/components/RecipeCard.tsx', rc, 'utf8');

// Patch RecipeDetail.tsx
let rd = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');
rd = rd.replace(
  /alt=\{\`High protein low calorie \$\{recipe\.title\} recipe for healthy meal planning\`\}/g,
  "alt={`\${recipe.title} - recette haute protéine faible calorie - DishFit`}"
);
rd = rd.replace(
  /<img\s+src=\{imgError \? FALLBACK_IMAGE/g,
  '<img\n              width="1200"\n              height="900"\n              src={imgError ? FALLBACK_IMAGE'
);
fs.writeFileSync('src/pages/RecipeDetail.tsx', rd, 'utf8');
