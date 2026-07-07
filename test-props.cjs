const { RECIPES_DATA } = require('./test-out.cjs');
RECIPES_DATA.forEach((r, i) => {
  if (!r.title) console.log("No title", r.id);
  if (!r.image) console.log("No image", r.id);
  if (!r.category) console.log("No category", r.id);
  if (r.servings === undefined) console.log("No servings", r.id);
  if (r.calories === undefined) console.log("No calories", r.id);
  if (r.readyInMinutes === undefined && !r.prepTime) console.log("No time", r.id);
});
console.log("Done checking props");
