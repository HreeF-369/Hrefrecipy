const fs = require('fs');
let content = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const replacements = [
  { id: "crispy-feta-fried-eggs", img: "https://i.pinimg.com/736x/ce/1c/86/ce1c8651ad7db69cf11eba4ced2c816a.jpg" },
  { id: "high-protein-breakfast-sandwich", img: "https://i.pinimg.com/736x/9e/87/4a/9e874adc46ddf22d844f8452152f6c88.jpg" },
  { id: "honey-mustard-chicken-prep", img: "https://i.pinimg.com/736x/79/31/df/7931df2d6259366b0767b5c99c6d36b8.jpg" },
  { id: "garlic-butter-steak-bites", img: "https://i.pinimg.com/736x/ed/23/c1/ed23c17ec1188f44003fb82eb55a28f9.jpg" },
  { id: "viral-bison-sweet-potato-bowl", img: "https://i.pinimg.com/1200x/e6/2a/93/e62a939d18b71c4b74ce98ee24d4e947.jpg" },
  { id: "green-goddess-tuna-boat", img: "https://i.pinimg.com/1200x/6f/f3/a4/6ff3a414dde11bcc9002873d058f32a0.jpg" }
];

replacements.forEach(({ id, img }) => {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*")[^"]*(")`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${img}$2`);
    console.log(`Updated ${id}`);
  } else {
    console.log(`Could not find ${id}`);
  }
});

fs.writeFileSync('src/services/recipesData.ts', content, 'utf8');
