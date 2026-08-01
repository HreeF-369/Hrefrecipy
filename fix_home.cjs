const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove the useEffect that sets document.title
const useEffectToRemove = `  useEffect(() => {
    document.title = "DishFit - Premium World-Class Recipes";
  }, []);`;
content = content.replace(useEffectToRemove, '');

// 2. Update the meta description
const metaTarget = `<meta name="description" content="Discover healthy meals under 30 minutes, weekly meal plans for weight loss, and easy meal prep recipes for beginners. Professional recipes for fitness goals." />`;
const newMeta = `<meta name="description" content="DishFit is the home for healthy, high-protein, low-calorie recipes under 500 kcal. Browse hundreds of clean-eating meals, build weekly meal plans, and generate grocery lists — all in one place." />`;

// Just in case the user meant exactly the text they said to replace:
const fallbackMetaTarget = `<meta name="description" content="Discover DishFit's delicious high-protein, low-calorie recipes. Master your health with personalized portion-controlled meals and weekly meal planning." />`;

if (content.includes(metaTarget)) {
  content = content.replace(metaTarget, newMeta);
} else if (content.includes(fallbackMetaTarget)) {
  content = content.replace(fallbackMetaTarget, newMeta);
} else {
  // Try regex replace for meta description
  content = content.replace(/<meta name="description" content="[^"]+" \/>/, newMeta);
}

fs.writeFileSync('src/pages/Home.tsx', content);
console.log("Patched Home.tsx successfully.");
