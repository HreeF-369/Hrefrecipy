const fs = require('fs');
let data = fs.readFileSync('src/services/recipesData.ts', 'utf8');

const map = {
  'tr-premium-34': '/images/salmon_glaze_1783247795108.jpg',
  'tr-premium-35': '/images/tuscan_chicken_1783247806803.jpg',
  'tr-premium-36': '/images/creamy_gnocchi_1783247817294.jpg',
  'tr-premium-37': '/images/smash_burger_1783247829474.jpg',
  'md-premium-01': '/images/beef_ribs_1783247770012.jpg',
  'md-premium-02': '/images/duck_breast_1783247840383.jpg',
  'md-premium-03': '/images/seafood_paella_1783247850827.jpg',
  'md-premium-04': '/images/lamb_chops_1783247862216.jpg',
  'md-trend-05': '/images/shrimp_pasta_1783247873220.jpg',
  'md-trend-06': '/images/braised_lamb_1783247887065.jpg',
  'md-trend-07': '/images/hot_honey_chicken_1783247900216.jpg',
  'md-trend-08': '/images/beef_wellington_1783247911439.jpg',
  'md-trend-09': '/images/green_curry_1783247924910.jpg',
  'md-trend-10': '/images/seabass_caper_1783247938504.jpg',
  'md-trend-11': '/images/beef_brisket_1783247949111.jpg',
  'md-trend-12': '/images/chicken_risotto_1783247959731.jpg',
  'md-trend-13': '/images/ribeye_chimichurri_1783247971890.jpg',
  'md-trend-14': '/images/korean_chicken_1783247996820.jpg',
  'ds-trend-16': '/images/tiramisu_1783248007606.jpg',
  'ds-trend-02': '/images/lava_cake_1783248020115.jpg',
  'ds-trend-03': '/images/burnt_cheesecake_1783248031463.jpg',
  'ds-trend-04': '/images/strawberry_cheesecake_1783248043167.jpg',
  'ds-trend-05': '/images/kunafa_croissant_1783248054359.jpg',
  'ds-trend-06': '/images/creme_brulee_1783248064689.jpg',
  'ds-trend-07': '/images/lotus_mousse_1783248075480.jpg',
  'ds-trend-08': '/images/red_velvet_cookie_1783248095692.jpg',
  'ds-trend-09': '/images/mango_panna_cotta_1783248108702.jpg',
  'ds-trend-10': '/images/hazelnut_brownie_1783248119957.jpg',
  'ds-trend-11': '/images/matcha_fondant_1783248132947.jpg',
  'ds-trend-12': '/images/profiteroles_1783248143399.jpg',
  'ds-trend-13': '/images/berry_pavlova_1783248154077.jpg',
  'ds-trend-14': 'https://images.unsplash.com/photo-1549590143-d585514b8ba4?q=80&w=800'
};

const lines = data.split('\n');
let currentId = null;

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  if (currentId && map[currentId] && lines[i].includes('image:')) {
    lines[i] = `    image: "${map[currentId]}",`;
    currentId = null; // reset
  }
}

fs.writeFileSync('src/services/recipesData.ts', lines.join('\n'));
console.log('done');
