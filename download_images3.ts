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
  { name: 'image_matcha_strawberry.jpg', url: 'https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=600' },
  { name: 'image_spanish_latte.jpg', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600' },
  { name: 'image_dragon_fruit_smoothie.jpg', url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=600' },
  { name: 'image_pomegranate_rose.jpg', url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600' },
  { name: 'image_ginger_lemonade.jpg', url: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=600' },
  { name: 'image_taro_boba.jpg', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600' }
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
