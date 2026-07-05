const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchFiles(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('recipes') || content.includes('collection(db')) {
        console.log(`Match in ${fullPath}`);
        // Let's print lines matching "recipes" or "db" or "firebase"
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes('collection(') || line.includes('getDocs(') || line.includes('firebase')) {
            console.log(`  Line ${index + 1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

searchFiles('src');
