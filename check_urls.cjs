const fs = require('fs');
const https = require('https');
const http = require('http');

const data = fs.readFileSync('src/services/recipesData.ts', 'utf8');
const regex = /image:\s*"([^"]+)"/g;
let match;
const urls = [];

while ((match = regex.exec(data)) !== null) {
  if (match[1].startsWith('http')) {
    urls.push(match[1]);
  }
}

console.log("Checking " + urls.length + " URLs...");

async function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: e.message });
    });
    // Timeout
    req.setTimeout(3000, () => {
      req.abort();
      resolve({ url, status: 'timeout' });
    });
    req.end();
  });
}

async function run() {
  const batchSize = 10;
  const broken = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(url => checkUrl(url)));
    for (const res of results) {
      if (res.status !== 200 && res.status !== 301 && res.status !== 302 && res.status !== 307 && res.status !== 308) {
        // Some services don't like HEAD, fallback to GET
        const resGet = await new Promise((resolve) => {
          const client = res.url.startsWith('https') ? https : http;
          const req = client.get(res.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
            r.destroy();
            resolve({ url: res.url, status: r.statusCode });
          }).on('error', (e) => {
            resolve({ url: res.url, status: e.message });
          });
          req.setTimeout(3000, () => {
            req.abort();
            resolve({ url: res.url, status: 'timeout' });
          });
        });
        if (resGet.status !== 200 && resGet.status !== 301 && resGet.status !== 302 && resGet.status !== 307 && resGet.status !== 308) {
          broken.push(resGet);
        }
      }
    }
  }
  console.log("Broken URLs:", broken);
}

run();
