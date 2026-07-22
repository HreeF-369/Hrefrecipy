const fs = require('fs');

function fixSchema(file) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove aggregateRating
  content = content.replace(/"aggregateRating":[\s\S]*?\?[\s\S]*?\{[\s\S]*?"@type": "AggregateRating",[\s\S]*?"ratingValue":[^,]*,[\s\S]*?"ratingCount":[^}]*\} : undefined,/g, '');

  return content;
}

const serverCode = fixSchema('server.ts');
fs.writeFileSync('server.ts', serverCode);

const clientCode = fixSchema('src/pages/RecipeDetail.tsx');
fs.writeFileSync('src/pages/RecipeDetail.tsx', clientCode);
