const fs = require('fs');
let types = fs.readFileSync('src/types/index.ts', 'utf8');
types = types.replace(
  /healthScore\?: number;/g,
  "healthScore?: number;\n  rating?: number;\n  ratingCount?: number;"
);
fs.writeFileSync('src/types/index.ts', types, 'utf8');
