const fs = require('fs');
let content = fs.readFileSync('src/services/recipesData.ts', 'utf8');

content = content.replace(
  'image: "https://www.delscookingtwist.com/wp-content/uploads/2022/03/Scrambled-Egg-Croissant-Breakfast-Sandwich_2.jpg"',
  'image: "/images/croissant_breakfast_sandwich.jpg"'
);

content = content.replace(
  'image: "https://www.cookingwithmanuela.com/wp-content/uploads/2023/09/viral-feta-fried-egg-tortilla-recipe-scaled.jpg"',
  'image: "/images/feta_fried_eggs.jpg"'
);

content = content.replace(
  'image: "https://i.pinimg.com/736x/ad/a2/98/ada29843fef79a231214d969035486f2.jpg"',
  'image: "/images/shaved_fruit_yogurt.jpg"'
);

fs.writeFileSync('src/services/recipesData.ts', content);
console.log("Images patched in recipesData.ts");
