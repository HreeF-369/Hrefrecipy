const fs = require('fs');
const path = require('path');

const srcDir = 'src/assets/images';
const destDir = 'public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Find files matching our generated names
const files = fs.readdirSync(srcDir);
const mappings = {
  'turkish_eggs_cilbir': 'turkish_eggs_cilbir.jpg',
  'upside_down_apple_pastry': 'upside_down_apple_pastry.jpg',
  'gourmet_avocado_toast': 'gourmet_avocado_toast.jpg',
  'glow_breakfast_platter': 'glow_breakfast_platter.jpg',
  'poached_avocado_toast': 'poached_avocado_toast.jpg',
  'everything_bagel_sandwich': 'everything_bagel_sandwich.jpg',
  'salmon_avocado_toast': 'salmon_avocado_toast.jpg',
  'classic_shakshuka': 'classic_shakshuka.jpg',
  'breakfast_burrito': 'breakfast_burrito.jpg'
};

for (const f of files) {
  for (const [prefix, destName] of Object.entries(mappings)) {
    if (f.startsWith(prefix + '_17') && f.endsWith('.jpg')) {
       const srcPath = path.join(srcDir, f);
       const destPath = path.join(destDir, destName);
       fs.copyFileSync(srcPath, destPath);
       console.log("Copied " + f + " to " + destName);
    }
  }
}
