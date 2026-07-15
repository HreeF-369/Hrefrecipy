const fs = require('fs');

let content = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');

// Use a variable for absolute image URL
content = content.replace(
  /<Helmet>\s+<title>/g,
  `{(() => {
        let absImg = getSafeImageUrl(recipe.image);
        if (absImg && absImg.startsWith('/')) {
            absImg = 'https://dishfit.net' + absImg;
        }
        const prepMinutes = recipe.prepTime ? parseInt(String(recipe.prepTime)) || 15 : 15;
        const totalMinutes = recipe.readyInMinutes ? parseInt(String(recipe.readyInMinutes)) || prepMinutes : prepMinutes;
        const cookMinutes = Math.max(totalMinutes - prepMinutes, 5);

        return (
          <Helmet>
        <title>`
);

content = content.replace(
  /<\/Helmet>/g,
  `</Helmet>\n        );\n      })()}`
);

// Replace recipe.image with absImg in Helmet
content = content.replace(
  /<meta property="og:image" content=\{recipe\.image\} \/>/g,
  '<meta property="og:image" content={absImg} />'
);

content = content.replace(
  /<meta name="twitter:image" content=\{recipe\.image\} \/>/g,
  '<meta name="twitter:image" content={absImg} />'
);

// Replace in schema
content = content.replace(
  /"image": \[recipe\.image\]/g,
  '"image": [absImg]'
);

content = content.replace(
  /"prepTime": recipe\.prepTime \? \`PT\$\{parseInt\(recipe\.prepTime\)\}M\` : "PT15M",/g,
  `"prepTime": \`PT\${prepMinutes}M\`,
            "cookTime": \`PT\${cookMinutes}M\`,
            "totalTime": \`PT\${totalMinutes}M\`,`
);

content = content.replace(
  /"nutrition": \{/g,
  `"aggregateRating": recipe.rating ? {
              "@type": "AggregateRating",
              "ratingValue": recipe.rating,
              "ratingCount": recipe.ratingCount || 10
            } : undefined,
            "nutrition": {`
);

fs.writeFileSync('src/pages/RecipeDetail.tsx', content, 'utf8');
