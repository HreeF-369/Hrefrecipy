
const CATEGORY_IMAGES: Record<string, string[]> = {
  pasta: ['1473093226724-4f52176bb246', '1563379091339-0fcb1758838b', '1551183053-bf91a1d81141', '1556761223-4c40324ad35b'],
  pizza: ['1513104890138-7c749659a591', '1593560708920-61dd98c46a4e', '1604382354936-07c5d9983bd3', '1571407970349-bc81e7e96d47'],
  salad: ['1512621776951-a57141f2eefd', '1540189549336-e6e99c3679fe', '1546069901-ba9599a7e63c', '1512621776951-a57141f2eefd'],
  burger: ['1568901346375-23c9450c58cd', '1571091723284-18569fe2a3a0', '1586190848861-992d96cc3723', '1550547660-d9450f859349'],
  steak: ['1600891964092-4316c2850324', '1546241072-48060ad1332c', '1558030006-450675393462', '1606416132922-c2ab245f385d'],
  breakfast: ['1525351484163-7529414344d8', '1484723091739-30a097e8f929', '1493770348161-369560ae357d', '1504754524776-8f4f37790ca0'],
  dessert: ['1514056052883-d017fddd1427', '1565958011-5524247056fc', '1567620905732-2d1ec7bb7445', '1488477181946-6428a0291777'],
  cocktail: ['1514362545857-3bc16c4c7d1b', '1536935338218-841272c2d439', '1513573822181-005b8f8367c0', '1551024709-8f23befc6f87'],
  soup: ['1547592115-330920fca56a', '1548943487-39eef0c9bd7a', '1511974035430-5de47d3b95da', '1534939561122-059960ee1437'],
  chicken: ['1604908176997-125f25cc6f3d', '1598515214211-89d3c73ae83b', '1594221708779-948211443a0a', '1604908176997-125f25cc6f3d'],
  fish: ['1467003909585-2f8a72700288', '1519708227418-c8fd9a32b7a2', '1559742811-822873691df8', '1532336414038-cf1ad0502f9e'],
  bread: ['1509440159596-0249088772ff', '1549931319-a5d13ea95146', '1585478259706-96429d89753c', '1598373182133-52452f769265'],
  curry: ['1585937421612-70a0e2d6c5b7', '1455619452474-d2ba29663bc1', '1631515243349-46282b83b259', '1565557623262-b51c2513a641'],
  coffee: ['1509042239860-f550ce710b93', '1511920170033-f8396924c34b', '1495474472287-4d71bcdd2085', '1497933325122-fbb41f71983a'],
  sushi: ['1553621042-f6e147245754', '1579871494447-9811cf80d66c', '1559158017-51df16750312', '1583623025817-d35a392f07ec'],
  vegan: ['1512621776951-a57141f2eefd', '1546069901-ba9599a7e63c', '1511690656793-c95b8cb04321', '1623428187969-e85df6495546'],
  seafood: ['1532336414038-cf1ad0502f9e', '1519708227418-c8fd9a32b7a2', '1559742811-822873691df8', '1611175694228-3165b4c47863'],
  pork: ['1602477914751-04214797455b', '1544022618-bc131f175224', '1480922839415-0559d8ae0d4b'],
  beef: ['1600891964092-4316c2850324', '1546069901-ba9599a7e63c', '1558030006-450675393462'],
  lamb: ['1603048588665-794ccfaf9708', '1514516345917-55bc51590678', '1544023274291-dcb74ca4453b'],
};

/**
 * Generates a high-quality Unsplash image URL based on the recipe title or category.
 */
export function getRecipeImage(title: string, category?: string): string {
  const normalizedTitle = title.toLowerCase();
  const normalizedCategory = category?.toLowerCase() || '';

  // 1. Check for specific matches in categories
  const allKeywords = [...Object.keys(CATEGORY_IMAGES)];
  for (const keyword of allKeywords) {
    if (normalizedTitle.includes(keyword) || normalizedCategory.includes(keyword)) {
      const ids = CATEGORY_IMAGES[keyword];
      const id = ids[Math.floor(Math.random() * ids.length)];
      return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
    }
  }

  // 2. Fallback to title-based search query if no keyword matches
  // We prioritize high-quality food photography keywords
  const searchQuery = encodeURIComponent(`${title},food,recipe,aesthetic`);
  // Using a stable placeholder that often serves Unsplash content
  return `https://source.unsplash.com/featured/800x600/?${searchQuery}`;
}
