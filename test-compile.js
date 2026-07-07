import fs from 'fs';
import ts from 'typescript';

const source = fs.readFileSync('src/services/recipesData.ts', 'utf8');

// Just to evaluate it as JS
let js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
fs.writeFileSync('test-out.js', js);
