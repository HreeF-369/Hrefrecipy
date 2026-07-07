const { RECIPES_DATA } = require('./test-out.cjs');
const ids = RECIPES_DATA.map(r => r.id);
const uniqueIds = new Set(ids);
console.log("Total:", ids.length, "Unique:", uniqueIds.size);
const seen = new Set();
for (let id of ids) {
  if (seen.has(id)) console.log("Duplicate ID:", id);
  seen.add(id);
}
