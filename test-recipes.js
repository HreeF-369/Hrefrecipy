import { RECIPES_DATA } from './src/services/recipesData.ts';

const newIds = [
  "mediterranean-chickpea-salad-bowl", 
  "cucumber-feta-mint-salad", 
  "healthy-berry-yogurt-parfait", 
  "high-protein-chocolate-brownies", 
  "edible-glitter-pink-lemonade"
];

for (const id of newIds) {
  const r = RECIPES_DATA.find(r => r.id === id);
  if (!r) {
    console.log("NOT FOUND:", id);
    continue;
  }
  
  // check for missing basic fields
  console.log("Checking:", r.id);
  console.log("calories:", r.calories);
  console.log("prepTime:", r.prepTime);
  console.log("readyInMinutes:", r.readyInMinutes);
  console.log("image:", r.image);
  
}
