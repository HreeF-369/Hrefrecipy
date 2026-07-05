const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');
const serverSplit = server.split('if (recipe) return recipe;');
if (serverSplit.length > 1) {
  // Find the end of the function: it ends with `  return null;\n}`
  const functionEndIndex = serverSplit[1].indexOf('  return null;\n}');
  if (functionEndIndex !== -1) {
    serverSplit[1] = '\n  return null;\n}' + serverSplit[1].substring(functionEndIndex + 16);
    server = serverSplit.join('if (recipe) return recipe;');
    fs.writeFileSync('server.ts', server);
    console.log('Fixed server.ts');
  } else {
    console.log('Function end not found in server.ts');
  }
}

let api = fs.readFileSync('src/services/api.ts', 'utf8');
const apiSplit = api.split('if (recipe) {\n    return enrichRecipe(recipe);\n  }');
if (apiSplit.length > 1) {
  const functionEndIndex = apiSplit[1].indexOf('  return null;\n}');
  if (functionEndIndex !== -1) {
    apiSplit[1] = '\n  return null;\n}' + apiSplit[1].substring(functionEndIndex + 16);
    api = apiSplit.join('if (recipe) {\n    return enrichRecipe(recipe);\n  }');
    fs.writeFileSync('src/services/api.ts', api);
    console.log('Fixed api.ts');
  } else {
    console.log('Function end not found in api.ts');
  }
}
