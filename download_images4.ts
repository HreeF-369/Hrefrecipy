import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

async function download(url: string, dest: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buffer);
}

const images = [
  { name: 'image_matcha_strawberry.jpg', url: 'https://placehold.co/600x400/96b85d/white/png?text=Matcha+Strawberry+Latte' },
  { name: 'image_dragon_fruit_smoothie.jpg', url: 'https://placehold.co/600x400/ed3983/white/png?text=Dragon+Fruit+Smoothie' },
];

async function main() {
  for (const item of images) {
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, `src/assets/images/${item.name}`);
      await download(item.url, `public/${item.name}`);
      console.log(`Successfully downloaded ${item.name}`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err);
    }
  }
}

main();
