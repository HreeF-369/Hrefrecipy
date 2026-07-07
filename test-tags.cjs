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
  console.log(id, "-> tags:", Array.isArray(r.tags) ? r.tags.map(t => typeof t) : r.tags);
  console.log(id, "-> dishTypes:", Array.isArray(r.dishTypes) ? r.dishTypes.map(t => typeof t) : r.dishTypes);
}
