const { RECIPES_DATA } = require('./test-out.cjs');
const newIds = [
  "mediterranean-chickpea-salad-bowl", 
  "cucumber-feta-mint-salad", 
  "healthy-berry-yogurt-parfait", 
  "high-protein-chocolate-brownies", 
  "edible-glitter-pink-lemonade"
];

for (const id of newIds) {
  const r = RECIPES_DATA.find(r => r.id === id);
  console.log(id, "->", r.category, "typeof", typeof r.category);
}
