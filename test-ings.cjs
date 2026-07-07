const { RECIPES_DATA } = require('./test-out.cjs');
RECIPES_DATA.forEach(r => {
  if (r.ingredients) {
    r.ingredients.forEach((ing, j) => {
      if (!ing.name) console.log("Missing ing name in recipe", r.id, "at index", j);
    });
  }
});
console.log("Done checking ingredients");
