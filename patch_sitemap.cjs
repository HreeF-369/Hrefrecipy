const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');

const escapeFn = `
function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
}
`;

if (!server.includes('escapeXml')) {
  server = server.replace(
    /app\.get\("\/sitemap\.xml", \(req, res\) => \{/,
    escapeFn + '\napp.get("/sitemap.xml", (req, res) => {'
  );
}

server = server.replace(
  /<loc>\$\{baseUrl\}\$\{route\}<\/loc>/,
  '<loc>${escapeXml(baseUrl + route)}</loc>'
);

server = server.replace(
  /<loc>\$\{baseUrl\}\/recipe\/\$\{recipe\.id\}<\/loc>/,
  '<loc>${escapeXml(baseUrl + "/recipe/" + recipe.id)}</loc>'
);

server = server.replace(
  /<image:loc>\$\{absoluteImage\}<\/image:loc>/,
  '<image:loc>${escapeXml(absoluteImage)}</image:loc>'
);

server = server.replace(
  /<image:title>\$\{recipe\.title\}<\/image:title>/,
  '<image:title>${escapeXml(recipe.title)}</image:title>'
);

fs.writeFileSync('server.ts', server, 'utf8');
