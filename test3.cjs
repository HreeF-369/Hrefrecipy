const { RECIPES_DATA } = require('./test-out.cjs');
let hasError = false;
RECIPES_DATA.forEach((x, i) => {
  try {
    x.category.toUpperCase();
  } catch (e) {
    console.log("Error at index", i, x.title);
    hasError = true;
  }
});
if (!hasError) console.log("All categories fine");
