const fs = require('fs');

const mappings = [
  { title: "Viral Turkish Eggs (Cilbir)", url: "/images/turkish_eggs_cilbir.jpg" },
  { title: "Viral Upside-Down Apple Pastry", url: "/images/upside_down_apple_pastry.jpg" },
  { title: "Gourmet Avocado Toast", url: "/images/gourmet_avocado_toast.jpg" },
  { title: "Glow Breakfast Platter", url: "/images/glow_breakfast_platter.jpg" },
  { title: "Poached Avocado Toast", url: "/images/poached_avocado_toast.jpg" },
  { title: "Everything Bagel Sandwich", url: "/images/everything_bagel_sandwich.jpg" },
  { title: "Salmon & Avocado Toast", url: "/images/salmon_avocado_toast.jpg" },
  { title: "Classic Shakshuka", url: "/images/classic_shakshuka.jpg" },
  { title: "Breakfast Burrito", url: "/images/breakfast_burrito.jpg" } // just in case
];

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let patched = 0;
  
  for (const map of mappings) {
    const titleRegex = new RegExp('(title:\\s*"' + map.title + '"[\\s\\S]*?image:\\s*")([^"]+)(")', "g");
    const newContent = content.replace(titleRegex, (match, p1, p2, p3) => {
      patched++;
      return p1 + map.url + p3;
    });
    content = newContent;
  }
  
  fs.writeFileSync(filePath, content);
  console.log("Patched " + patched + " images in " + filePath);
}

patchFile('src/services/recipesData.ts');
patchFile('src/services/fallbackData.ts');

