const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

// Update sitemap.xml to include images
content = content.replace(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n\';',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\\n\';'
);

content = content.replace(
  /RECIPES_DATA\.forEach\(recipe => \{\s*xml \+= '  <url>\\n';\s*xml \+= \`    <loc>\$\{baseUrl\}\/recipe\/\$\{recipe\.id\}<\/loc>\\n\`;\s*xml \+= '    <changefreq>monthly<\/changefreq>\\n';\s*xml \+= '    <priority>0\.6<\/priority>\\n';\s*xml \+= '  <\/url>\\n';\s*\}\);/g,
  `RECIPES_DATA.forEach(recipe => {
    xml += '  <url>\\n';
    xml += \`    <loc>\${baseUrl}/recipe/\${recipe.id}</loc>\\n\`;
    
    // Add image sitemap tag
    if (recipe.image) {
      let absoluteImage = recipe.image.startsWith("/") ? \`\${baseUrl}\${recipe.image}\` : recipe.image;
      xml += \`    <image:image>\\n\`;
      xml += \`      <image:loc>\${absoluteImage}</image:loc>\\n\`;
      xml += \`      <image:title>\${recipe.title}</image:title>\\n\`;
      xml += \`    </image:image>\\n\`;
    }

    xml += '    <changefreq>monthly</changefreq>\\n';
    xml += '    <priority>0.6</priority>\\n';
    xml += '  </url>\\n';
  });`
);

// Add aggregateRating to schema
content = content.replace(
  /"nutrition": \{/g,
  `"aggregateRating": recipe.rating ? {
            "@type": "AggregateRating",
            "ratingValue": recipe.rating,
            "ratingCount": recipe.ratingCount || 10
          } : undefined,
          "nutrition": {`
);

fs.writeFileSync('server.ts', content, 'utf8');
