import fs from 'fs';
import https from 'https';
import path from 'path';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
};

const main = async () => {
  const images = [
    { name: 'image_matcha_strawberry.jpg', url: 'https://images.unsplash.com/photo-1536281140500-b38cb7ec31f1?q=80&w=600' },
    { name: 'image_spanish_latte.jpg', url: 'https://images.unsplash.com/photo-1461023058943-07cb12c36ca2?q=80&w=600' },
    { name: 'image_dragon_fruit_smoothie.jpg', url: 'https://images.unsplash.com/photo-1553530666-ba11a90a20e1?q=80&w=600' },
    { name: 'image_pomegranate_rose.jpg', url: 'https://images.unsplash.com/photo-1536935338788-84659b0251dd?q=80&w=600' },
    { name: 'image_ginger_lemonade.jpg', url: 'https://images.unsplash.com/photo-1523371684773-efff18da8d8c?q=80&w=600' },
    { name: 'image_taro_boba.jpg', url: 'https://images.unsplash.com/photo-1558857563-b37103ab4f26?q=80&w=600' }
  ];

  for (const item of images) {
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, `src/assets/images/${item.name}`);
      // Also copy to public directory for immediate access since Vite servers from public
      await download(item.url, `public/${item.name}`);
      console.log(`Successfully downloaded ${item.name}`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err);
    }
  }
};

main();
