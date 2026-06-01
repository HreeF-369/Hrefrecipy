import { Recipe } from "../types";

export const RECIPES_DATA: Recipe[] = [
  {
    id: "br-euro-01",
    title: "Croissant Breakfast Sandwich",
    description: "The ultimate European café breakfast. Flaky, buttery croissant filled with soft scrambled eggs, melted cheese, and bacon.",
    summary: "The ultimate European café breakfast. Flaky, buttery croissant filled with soft scrambled eggs, melted cheese, and bacon.",
    image: "https://www.delscookingtwist.com/wp-content/uploads/2022/03/Scrambled-Egg-Croissant-Breakfast-Sandwich_2.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "BREAKFAST",
    calories: "520kcal",
    protein: "24g",
    tags: ["#1 Europe Trend", "CaféVibes", "Aesthetic"],
    dishTypes: ["Breakfast", "Gourmet", "Sandwich"],
    ingredients: [
      { name: "2 large croissants", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=200" }, 
      { name: "4 large eggs", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=200" },
      { name: "2 slices of cheddar cheese", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?q=80&w=200" },
      { name: "2 tablespoons of butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=200" },
      { name: "Salt to taste", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?q=80&w=200" },
      { name: "Pepper to taste", image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6429?q=80&w=200" },
      { name: "2 slices of cooked bacon or ham (optional)", image: "https://images.unsplash.com/photo-1606851094055-351830514a40?q=80&w=200" },
      { name: "Fresh spinach leaves (optional)", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=200" }
    ],
    instructions: [
      "Preheat a non-stick skillet over medium heat and melt the butter.",
      "Crack the eggs into a bowl, whisk them with salt and pepper, and pour into the skillet; cook, stirring gently, until soft scrambled.",
      "Slice the croissants in half and toast them lightly in a toaster or on a skillet until golden.",
      "Layer the scrambled eggs, bacon, and cheese on the bottom half of each croissant.",
      "If using, add fresh herbs and avocado slices on top, then close with the other half of the croissant.",
      "Serve immediately while the cheese is melty and the croissants are warm."
    ]
  },
  {
    id: "br-trend-02",
    title: "Crispy Feta Fried Eggs",
    description: "The elevated 2026 Pinterest trend. Seasoned, flour-dredged feta cheese fried to golden perfection, served alongside perfectly cooked fried eggs and fresh herbs.",
    summary: "The elevated 2026 Pinterest trend. Seasoned, flour-dredged feta cheese fried to golden perfection, served alongside perfectly cooked fried eggs and fresh herbs.",
    image: "https://www.cookingwithmanuela.com/wp-content/uploads/2023/09/viral-feta-fried-egg-tortilla-recipe-scaled.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "BREAKFAST",
    calories: "450kcal",
    protein: "22g",
    tags: ["#1 Pinterest 2026", "Viral", "Crispy & Savory"],
    dishTypes: ["Breakfast", "Trending", "Savory"],
    ingredients: [
      { name: "4 large eggs", image: "https://img.icons8.com/fluency/96/eggs.png" },
      { name: "6 oz block feta cheese", image: "https://img.icons8.com/fluency/96/cheese.png" },
      { name: "1/2 cup all-purpose flour", image: "https://img.icons8.com/fluency/96/flour.png" },
      { name: "1/2 teaspoon smoked paprika", image: "https://img.icons8.com/fluency/96/spices.png" },
      { name: "1 teaspoon garlic powder", image: "https://img.icons8.com/fluency/96/garlic.png" },
      { name: "1/4 teaspoon black pepper", image: "https://img.icons8.com/fluency/96/black-pepper.png" },
      { name: "1/2 teaspoon salt", image: "https://img.icons8.com/fluency/96/salt-shaker.png" },
      { name: "1/4 cup olive oil", image: "https://img.icons8.com/fluency/96/olive-oil.png" },
      { name: "2 tablespoons chopped fresh parsley", image: "https://img.icons8.com/fluency/96/parsley.png" },
      { name: "1 tablespoon chopped fresh dill", image: "https://img.icons8.com/fluency/96/dill.png" },
      { name: "Lemon wedges for serving", image: "https://img.icons8.com/fluency/96/lemon.png" }
    ],
    instructions: [
      "Cut feta into 1/2-inch thick slices.",
      "In a shallow bowl, combine flour, smoked paprika, garlic powder, salt, and pepper.",
      "Dredge feta slices in the flour mixture, coating evenly.",
      "Heat olive oil in a non-stick skillet over medium heat.",
      "Fry the coated feta slices 2-3 minutes per side until golden and crispy. Remove and set aside.",
      "In the same skillet, crack the eggs and fry to desired doneness, seasoning lightly with salt and pepper.",
      "Arrange eggs on plates and top each with crispy feta slices.",
      "Sprinkle chopped parsley and dill over the top.",
      "Serve immediately with lemon wedges for a fresh squeeze."
    ]
  },
  {
    id: "br-trend-03",
    title: "Viral Shaved Fruit Yogurt Bowl",
    description: "The ultimate refreshing 2026 Pinterest trend. Creamy Greek yogurt flavored with vanilla and lemon, topped with snow-like shaved frozen berries, crunchy granola, and fresh mint.",
    summary: "The ultimate refreshing 2026 Pinterest trend. Creamy Greek yogurt flavored with vanilla and lemon, topped with snow-like shaved frozen berries, crunchy granola, and fresh mint.",
    image: "https://i.pinimg.com/736x/ad/a2/98/ada29843fef79a231214d969035486f2.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "BREAKFAST",
    calories: "310kcal",
    protein: "16g",
    tags: ["#1 Pinterest 2026", "Aesthetic Bowl", "Healthy & Quick"],
    dishTypes: ["Breakfast", "Trending", "Bowl"],
    ingredients: [
      { name: "1 cup strawberries, hulled", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=150" },
      { name: "1 cup blueberries", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=150" },
      { name: "1 cup raspberries", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" },
      { name: "1 cup plain Greek yogurt", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "2 tablespoons honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1 teaspoon lemon juice", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=150" },
      { name: "1/2 teaspoon vanilla extract", image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=150" },
      { name: "1/4 cup granola", image: "https://images.unsplash.com/photo-1517881917430-e70dfb3610aa?q=80&w=150" },
      { name: "Fresh mint leaves for garnish", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=150" }
    ],
    instructions: [
      "Freeze strawberries, blueberries, and raspberries for at least 1 hour until firm.",
      "Using a vegetable peeler or sharp knife, carefully shave thin slices from frozen berries into a bowl.",
      "In a separate bowl, mix Greek yogurt with honey, lemon juice, and vanilla extract until smooth.",
      "Spoon the flavored yogurt over the shaved berries.",
      "Sprinkle granola on top for crunch.",
      "Garnish with fresh mint leaves and serve immediately."
    ]
  },
  {
    id: "br-trend-04",
    title: "Viral Turkish Eggs (Cilbir)",
    description: "The ultimate savory Mediterranean breakfast trend. Perfectly poached eggs served over a smooth bed of garlic-infused Greek yogurt, drizzled with warm, fragrant smoked paprika and chili butter.",
    summary: "The ultimate savory Mediterranean breakfast trend. Perfectly poached eggs served over a smooth bed of garlic-infused Greek yogurt, drizzled with warm, fragrant smoked paprika and chili butter.",
    image: "https://i.pinimg.com/736x/15/b2/02/15b202ea2c30b0e6c1b317d3cc3a4743.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "BREAKFAST",
    calories: "360kcal",
    protein: "18g",
    tags: ["#1 Pinterest 2026", "MediterraneanVibes", "SavoryBrunch"],
    dishTypes: ["Breakfast", "Trending", "Savory"],
    ingredients: [
      { name: "4 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1 cup plain Greek yogurt", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "1 clove garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "2 tablespoons unsalted butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "1 teaspoon smoked paprika", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1/2 teaspoon ground chili flakes", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1 tablespoon white vinegar", image: "https://images.unsplash.com/photo-1589135235552-878f7ef08866?q=80&w=150" },
      { name: "Salt to taste", image: "https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150" },
      { name: "Fresh dill or parsley for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" },
      { name: "Crusty bread for serving", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Bring a medium pot of water to a simmer and add vinegar.",
      "Gently poach the eggs by cracking them into the water and cooking for 3-4 minutes until whites are set.",
      "While eggs cook, combine yogurt and minced garlic in a bowl; season with salt and mix well.",
      "In a small pan, melt butter over medium heat, then stir in paprika and chili flakes until fragrant; remove from heat.",
      "Drain poached eggs and set aside.",
      "Spread the garlic yogurt evenly on serving plates.",
      "Place poached eggs on top of the yogurt layer.",
      "Drizzle the spiced melted butter generously over the eggs and yogurt.",
      "Garnish with fresh dill or parsley and serve with crusty bread."
    ]
  },
  {
    id: "br-trend-06",
    title: "Viral Upside-Down Apple Pastry",
    description: "The viral 2026 Pinterest pastry trend. Flaky puff pastry baked upside-down over a rich caramelized bed of sliced apples, brown sugar, honey, and warm spices.",
    summary: "The viral 2026 Pinterest pastry trend. Flaky puff pastry baked upside-down over a rich caramelized bed of sliced apples, brown sugar, honey, and warm spices.",
    image: "https://www.cookinginmygenes.com/wp-content/uploads/2023/06/viral-upside-down-puff-pastry-dessert-tarts-9584.jpg",
    prepTime: "35m",
    readyInMinutes: 35,
    servings: 6,
    category: "BREAKFAST",
    calories: "340kcal",
    protein: "4g",
    tags: ["#1 Pinterest 2026", "BakingTrend", "SweetBreakfast"],
    dishTypes: ["Breakfast", "Pastry", "Sweet"],
    ingredients: [
      { name: "1 sheet frozen puff pastry, thawed", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3 medium apples, peeled, cored, and sliced", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=150" },
      { name: "1/4 cup unsalted butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "1/3 cup brown sugar", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=150" },
      { name: "2 tablespoons honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1 teaspoon ground cinnamon", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1/4 teaspoon ground nutmeg", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=150" },
      { name: "1 teaspoon lemon juice", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=150" },
      { name: "1 tablespoon cornstarch", image: "https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?q=80&w=150" },
      { name: "1 egg, beaten (for egg wash)", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "In a 9-inch ovenproof skillet, melt butter over medium heat.",
      "Add brown sugar, honey, cinnamon, nutmeg, and lemon juice; stir until sugar dissolves and mixture is syrupy.",
      "Toss apple slices with cornstarch then arrange them evenly in the skillet on top of the caramel mixture.",
      "Cook apples gently for 5 minutes to soften and caramelize slightly.",
      "Remove skillet from heat. Lay puff pastry sheet over apples, tucking edges inside the skillet.",
      "Brush pastry with beaten egg for golden finish.",
      "Bake for 25-30 minutes or until puff pastry is golden and crisp.",
      "Let cool 5 minutes; carefully invert onto a serving plate so apples are on top.",
      "Serve warm, optionally with whipped cream or vanilla ice cream."
    ]
  },
  {
    id: "br-trend-10",
    title: "Gourmet Avocado Toast",
    description: "The ultimate 2026 Pinterest breakfast icon. Crispy toasted sourdough layered with fresh, citrusy mashed avocado, topped with crispy fried eggs, everything bagel seasoning, and red pepper flakes.",
    summary: "The ultimate 2026 Pinterest breakfast icon. Crispy toasted sourdough layered with fresh, citrusy mashed avocado, topped with crispy fried eggs, everything bagel seasoning, and red pepper flakes.",
    image: "https://i.pinimg.com/736x/93/fd/65/93fd65ef591821dc6dd6beba48a0a155.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "BREAKFAST",
    calories: "390kcal",
    protein: "15g",
    tags: ["#1 Pinterest 2026", "AvocadoLovers", "AestheticBrunch"],
    dishTypes: ["Breakfast", "Aesthetic", "Toast"],
    ingredients: [
      { name: "2 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1 ripe avocado", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "2 slices of sourdough bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tablespoon olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1 teaspoon lemon juice", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=150" },
      { name: "Salt to taste", image: "https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150" },
      { name: "Freshly ground black pepper to taste", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=150" },
      { name: "1/4 teaspoon red pepper flakes", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1 tablespoon chopped fresh cilantro", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" },
      { name: "1 teaspoon everything bagel seasoning", image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=150" },
      { name: "1/2 teaspoon butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" }
    ],
    instructions: [
      "Toast the sourdough bread slices until golden and crisp.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
      "Add lemon juice, salt, and pepper to the avocado, then mash gently until slightly chunky.",
      "Spread the mashed avocado evenly over the toasted bread slices.",
      "Heat olive oil and butter in a non-stick skillet over medium heat.",
      "Crack eggs into the skillet and fry until the whites are set and edges are crispy, about 3-4 minutes.",
      "Season eggs with a pinch of salt and pepper.",
      "Place fried eggs on top of the avocado-covered toast.",
      "Sprinkle red pepper flakes, everything bagel seasoning, and chopped cilantro on top.",
      "Serve immediately and enjoy your vibrant, nutritious toast."
    ]
  },
  {
    id: "br-trend-11",
    title: "Glow Breakfast Platter",
    description: "The ultimate 2026 Pinterest breakfast icon. A vibrant, high-protein platter featuring creamy scrambled eggs, fresh strawberries, blueberries, sliced kiwi, avocado, and a crisp kale salad with cherry tomatoes.",
    summary: "The ultimate 2026 Pinterest breakfast icon. A vibrant, high-protein platter featuring creamy scrambled eggs, fresh strawberries, blueberries, sliced kiwi, avocado, and a crisp kale salad with cherry tomatoes.",
    image: "https://i.pinimg.com/736x/39/0d/37/390d37924abd0c5fadc43a6f4db42c24.jpg",
    prepTime: "12m",
    readyInMinutes: 12,
    servings: 1,
    category: "BREAKFAST",
    calories: "420kcal",
    protein: "19g",
    tags: ["#1 Pinterest 2026", "GlowPlatter", "HighProtein"],
    dishTypes: ["Breakfast", "Platter", "Healthy"],
    ingredients: [
      { name: "3 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1/2 cup fresh blueberries", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=150" },
      { name: "1/2 ripe avocado, sliced", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "1 fresh kiwi, sliced", image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=150" },
      { name: "4 fresh strawberries", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=150" },
      { name: "1 cup fresh kale or salad greens", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=150" },
      { name: "3 cherry tomatoes, halved", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "1 teaspoon butter (for cooking)", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "Chili flakes and black pepper for seasoning", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" }
    ],
    instructions: [
      "Whisk the eggs in a small bowl with a pinch of salt.",
      "Melt butter in a non-stick skillet over medium-low heat. Pour in the eggs and stir gently until soft, fluffy, and scrambled, then remove from heat immediately.",
      "Wash and prep all the fresh fruits and vegetables: slice the avocado and kiwi, and halve the cherry tomatoes.",
      "In a small corner of the plate, place the fresh kale and top it with the halved cherry tomatoes.",
      "Arrange the scrambled eggs next to the salad, then neatly fill the rest of the plate with sections of blueberries, avocado slices, kiwi slices, and whole fresh strawberries.",
      "Garnish the scrambled eggs with chili flakes, a pinch of black pepper, and fresh chopped herbs if desired.",
      "Serve immediately while the eggs are warm and the fruits are perfectly chilled."
    ]
  },
  {
    id: "br-trend-12",
    title: "Poached Avocado Toast",
    description: "The quintessential 2026 Pinterest breakfast icon. Crispy toasted artisan bread topped with neatly shingled avocado slices, a perfectly soft poached egg with a runny yolk, and a sprinkle of chili flakes.",
    summary: "The quintessential 2026 Pinterest breakfast icon. Crispy toasted artisan bread topped with neatly shingled avocado slices, a perfectly soft poached egg with a runny yolk, and a sprinkle of chili flakes.",
    image: "https://i.pinimg.com/736x/8d/41/88/8d4188906f1551166d566b73debe7f1e.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "BREAKFAST",
    calories: "320kcal",
    protein: "12g",
    tags: ["#1 Pinterest 2026", "AvocadoToast", "RunnyYolk"],
    dishTypes: ["Breakfast", "Aesthetic", "Toast"],
    ingredients: [
      { name: "1 large egg", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1/2 ripe avocado, thinly sliced", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "1 thick slice of sourdough bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tablespoon white vinegar (for poaching)", image: "https://images.unsplash.com/photo-1589135235552-878f7ef08866?q=80&w=150" },
      { name: "1/4 teaspoon red pepper flakes", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "Salt and freshly ground black pepper", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=150" },
      { name: "Fresh microgreens or herbs for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "Toast the sourdough bread slice until it is extra crispy and sturdy.",
      "Cut the avocado in half, remove the pit, and carefully slice it into thin, even strips using a sharp knife.",
      "Fan out the avocado slices and place them neatly across the toasted bread.",
      "Bring a small pot of water to a gentle simmer and add a tablespoon of white vinegar.",
      "Crack the egg into a small ramekin. Whirl the simmering water to create a vortex, then gently slide the egg into the center.",
      "Poach the egg for exactly 3 minutes until the whites are fully opaque but the yolk remains soft and runny.",
      "Carefully remove the poached egg with a slotted spoon, drain any excess water, and place it gently on top of the avocado bed.",
      "Season with salt, freshly ground black pepper, red pepper flakes, and garnish with fresh microgreens. Serve immediately."
    ]
  },
  {
    id: "br-trend-13",
    title: "Everything Bagel Sandwich",
    description: "The ultimate loaded 2026 Pinterest breakfast sandwich. A toasted everything bagel packed with a runny fried egg, creamy avocado, crispy bacon, fresh tomato, spinach, and melted cheddar cheese.",
    summary: "The ultimate loaded 2026 Pinterest breakfast sandwich. A toasted everything bagel packed with a runny fried egg, creamy avocado, crispy bacon, fresh tomato, spinach, and melted cheddar cheese.",
    image: "https://i.pinimg.com/736x/75/8c/b4/758cb475f2369cfb25ab6cd95dcf4ea3.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "BREAKFAST",
    calories: "460kcal",
    protein: "22g",
    tags: ["#1 Pinterest 2026", "BagelLover", "LoadedBreakfast"],
    dishTypes: ["Breakfast", "Sandwich", "Bagel"],
    ingredients: [
      { name: "1 everything bagel", image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=150" },
      { name: "1 large egg", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "2 strips of bacon", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=150" },
      { name: "1/4 ripe avocado, sliced", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "1 thick slice of tomato", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "Handful of fresh baby spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=150" },
      { name: "1 slice of cheddar cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1/2 teaspoon butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" }
    ],
    instructions: [
      "Slice the everything bagel in half and toast until golden and warm.",
      "In a skillet, cook the bacon strips over medium heat until extra crispy, then set aside on a paper towel.",
      "In the same skillet, melt a bit of butter and fry the egg sunny-side up for about 3 minutes, keeping the yolk beautifully runny.",
      "Place the cheddar cheese slice on the bottom half of the warm toasted bagel so it starts to melt.",
      "Layer the fresh baby spinach, thick tomato slice, crispy bacon, and avocado slices on top of the cheese.",
      "Carefully slide the runny fried egg on top of the avocado layer, and season with a pinch of black pepper.",
      "Close the sandwich with the top half of the bagel and serve immediately while warm."
    ]
  },
  {
    id: "br-trend-14",
    title: "Salmon & Avocado Toast",
    description: "The quintessence of an aesthetic and healthy 2026 breakfast. Toasted artisan sourdough topped with creamy mashed avocado, delicate smoked salmon, a perfectly soft poached egg with a runny yolk, and fresh greens.",
    summary: "The quintessence of an aesthetic and healthy 2026 breakfast. Toasted artisan sourdough topped with creamy mashed avocado, delicate smoked salmon, a perfectly soft poached egg with a runny yolk, and fresh greens.",
    image: "https://i.pinimg.com/736x/c4/81/fe/c481fe86d6f4431068d7faa10f651ca2.jpg",
    prepTime: "12m",
    readyInMinutes: 12,
    servings: 1,
    category: "BREAKFAST",
    calories: "390kcal",
    protein: "21g",
    tags: ["#1 Pinterest 2026", "SalmonLovers", "HighProtein"],
    dishTypes: ["Breakfast", "Gourmet", "Toast"],
    ingredients: [
      { name: "1 large egg", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1/2 ripe avocado", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "3 strips smoked salmon", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "1 thick slice artisan sourdough bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tablespoon white vinegar (for poaching)", image: "https://images.unsplash.com/photo-1589135235552-878f7ef08866?q=80&w=150" },
      { name: "Fresh herbs (dill/chives) for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" },
      { name: "Salt and freshly ground black pepper", image: "https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150" }
    ],
    instructions: [
      "Toast the artisan sourdough bread slice until deeply golden and crispy.",
      "Cut the avocado in half, remove the pit, and carefully slice it into thin, even strips using a sharp knife.",
      "Fan out the avocado slices and place them neatly across the toasted bread, then season with a pinch of salt and pepper.",
      "Bring a small pot of water to a gentle simmer and add a tablespoon of white vinegar.",
      "Crack the egg into a small ramekin. Whirl the simmering water to create a vortex, then gently slide the egg into the center. Poach for exactly 3 minutes.",
      "Layer the delicate smoked salmon strips generously on top of the avocado bed.",
      "Carefully remove the poached egg with a slotted spoon, drain any excess water, and place it gently on top of the salmon.",
      "Season with salt, freshly ground black pepper, and garnish with fresh microgreens or chopped fresh herbs. Serve immediately."
    ]
  },
  {
    id: "br-trend-15",
    title: "Classic Shakshuka",
    description: "The ultimate 2026 Pinterest savory brunch trend. Perfectly poached eggs nestled in a rich, deeply spiced tomato and bell pepper sauce, topped with crumbled feta and fresh parsley.",
    summary: "The ultimate 2026 Pinterest savory brunch trend. Perfectly poached eggs nestled in a rich, deeply spiced tomato and bell pepper sauce, topped with crumbled feta and fresh parsley.",
    image: "https://i.pinimg.com/1200x/5e/ec/94/5eec94376caa726f17f0ddc73e010ebb.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "BREAKFAST",
    calories: "290kcal",
    protein: "16g",
    tags: ["#1 Pinterest 2026", "SavoryBrunch", "MediterraneanVibes"],
    dishTypes: ["Breakfast", "Savory", "Mediterranean"],
    ingredients: [
      { name: "5-6 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1 can crushed tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "1 medium red bell pepper, diced", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbedd83?q=80&w=150" },
      { name: "1 small onion, finely chopped", image: "https://images.unsplash.com/photo-1508747703725-719ae2c73ee1?q=80&w=150" },
      { name: "2 cloves garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "2 tablespoons olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1 teaspoon ground cumin & smoked paprika", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1/4 cup crumbled feta cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "Fresh parsley for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium heat. Add the chopped onion and red bell pepper, cooking until soft (about 5 minutes).",
      "Stir in the minced garlic, cumin, smoked paprika, and a pinch of salt and pepper. Cook for another minute until fragrant.",
      "Pour in the crushed tomatoes and stir well. Simmer the sauce for 10 minutes until it thickens slightly.",
      "Use a spoon to make 5 or 6 small wells in the tomato sauce.",
      "Crack an egg gently into each well.",
      "Cover the skillet with a lid and cook on medium-low heat for 5-8 minutes, until the egg whites are fully set but the yolks remain soft.",
      "Remove from heat. Top with crumbled feta cheese, fresh parsley, and a sprinkle of black pepper. Serve warm with crusty bread."
    ]
  },
  {
    id: "ln-trend-01",
    title: "Garlic Egg Pasta",
    description: "The ultimate quick 2026 Pinterest comfort lunch. Al dente spaghetti tossed in a rich garlic butter sauce, topped with crispy fried eggs, grated parmesan, and fresh rosemary.",
    summary: "The ultimate quick 2026 Pinterest comfort lunch. Al dente spaghetti tossed in a rich garlic butter sauce, topped with crispy fried eggs, grated parmesan, and fresh rosemary.",
    image: "https://i.pinimg.com/1200x/ff/29/03/ff2903113f754f4e0ef3fcec802c6c85.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "LUNCH",
    calories: "480kcal",
    protein: "18g",
    tags: ["#1 Pinterest 2026", "QuickLunch", "PastaLovers"],
    dishTypes: ["Lunch", "Pasta", "Comfort Food"],
    ingredients: [
      { name: "200g spaghetti", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "2 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "2 tablespoons unsalted butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "3 cloves garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "2 tablespoons grated parmesan cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1 sprig fresh rosemary or parsley", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" },
      { name: "Salt, black pepper, and chili flakes", image: "https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150" }
    ],
    instructions: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente, according to package instructions. Drain and reserve 1/4 cup of pasta water.",
      "In a large skillet, melt one tablespoon of butter over medium heat. Add the minced garlic and a pinch of chili flakes, cooking for 1-2 minutes until soft and highly fragrant without browning.",
      "Add the drained spaghetti to the skillet along with the remaining butter and a splash of the reserved pasta water. Toss rapidly over low heat until the pasta is beautifully glossy and coated.",
      "In a separate non-stick pan, fry the eggs sunny-side up until the whites are set but the yolks are perfectly runny.",
      "Transfer the garlicky pasta into a serving bowl. Neatly place the fried eggs right on top.",
      "Garnish generously with grated parmesan cheese, freshly ground black pepper, and a fresh sprig of rosemary. Serve immediately while hot."
    ]
  },
  {
    id: "ln-trend-02",
    title: "Spanish Tortilla",
    description: "A thick, traditional 2026 Pinterest lunch favorite. Layers of tender sliced potatoes and caramelized onions bound together in a fluffy, golden egg omelet.",
    summary: "A thick, traditional 2026 Pinterest lunch favorite. Layers of tender sliced potatoes and caramelized onions bound together in a fluffy, golden egg omelet.",
    image: "https://i.pinimg.com/736x/04/0e/5a/040e5a7ceb31d74a6b4ddfa509717b88.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 4,
    category: "LUNCH",
    calories: "380kcal",
    protein: "16g",
    tags: ["#1 Pinterest 2026", "ClassicLunch", "EggLovers"],
    dishTypes: ["Lunch", "Main Course", "Spanish"],
    ingredients: [
      { name: "5 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "3 medium potatoes, thinly sliced", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "1 large onion, thinly sliced", image: "https://images.unsplash.com/photo-1508747703725-719ae2c73ee1?q=80&w=150" },
      { name: "1/2 cup olive oil (for frying)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Salt and freshly ground black pepper", image: "https://images.unsplash.com/photo-1613143584824-34079ca9171a?q=80&w=150" },
      { name: "Fresh parsley for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "Heat olive oil in a non-stick skillet over medium heat. Add the sliced potatoes and onions, ensuring they are fully submerged. Cook gently until tender but not browned (about 15 minutes).",
      "Drain the potatoes and onions through a colander, reserving a tablespoon of the olive oil.",
      "In a large bowl, whisk the eggs generously with a good pinch of salt and black pepper.",
      "Gently fold the warm drained potatoes and onions into the whisked eggs. Let the mixture sit for 5 minutes to absorb.",
      "Heat the reserved tablespoon of olive oil in the skillet over medium-high heat. Pour in the egg and potato mixture, smoothing the top.",
      "Cook for 5 minutes until the bottom is golden. Place a flat plate over the skillet, carefully flip the tortilla onto the plate, and slide it back into the pan to cook the other side for 3-4 minutes.",
      "Transfer to a plate, slice into wedges, garnish with fresh parsley and sea salt, and serve warm or at room temperature."
    ]
  },
  {
    id: "br-trend-17",
    title: "Breakfast Burrito",
    description: "A loaded, comforting 2026 Pinterest breakfast staple. A warm flour tortilla packed with creamy scrambled eggs, diced avocado, fresh tomatoes, and melted cheese, toasted to perfection.",
    summary: "A loaded, comforting 2026 Pinterest breakfast staple. A warm flour tortilla packed with creamy scrambled eggs, diced avocado, fresh tomatoes, and melted cheese, toasted to perfection.",
    image: "https://i.pinimg.com/1200x/47/d8/d6/47d8d68397116df608df4f0602a2cb5c.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "BREAKFAST",
    calories: "430kcal",
    protein: "18g",
    tags: ["#1 Pinterest 2026", "LoadedBurrito", "GrabAndGo"],
    dishTypes: ["Breakfast", "Burrito", "Loaded"],
    ingredients: [
      { name: "2 large eggs", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1 large flour tortilla", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150" },
      { name: "1/4 ripe avocado, diced", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "1/4 cup diced tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "1/4 cup shredded cheddar cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1 teaspoon butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "Fresh microgreens for garnish", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "Whisk the eggs with a pinch of salt and scramble them softly in a skillet with butter until creamy.",
      "Warm the flour tortilla in a pan for 30 seconds on each side so it becomes pliable.",
      "Place the shredded cheddar cheese in the center of the tortilla, followed by the warm scrambled eggs, diced tomatoes, and avocado.",
      "Fold in the sides of the tortilla and roll it up tightly into a burrito shape.",
      "Place the rolled burrito back onto the hot skillet (seam-side down) and toast for 1-2 minutes until golden and crispy, then flip to toast the other side.",
      "Slice the burrito diagonally in half, garnish with fresh microgreens, and serve warm."
    ]
  },
  {
    id: "ds-trend-01",
    title: "Pistachio Baklava",
    description: "The ultimate sweet indulgence. Layers of crisp, golden phyllo pastry packed with finely crushed pistachios and walnuts, deeply drenched in a fragrant honey syrup.",
    summary: "The ultimate sweet indulgence. Layers of crisp, golden phyllo pastry packed with finely crushed pistachios and walnuts, deeply drenched in a fragrant honey syrup.",
    image: "https://i.pinimg.com/736x/62/4f/bb/624fbb4dc47ab008aa3f7d0342c9da28.jpg",
    prepTime: "45m",
    readyInMinutes: 45,
    servings: 12,
    category: "DESSERTS",
    calories: "340kcal",
    protein: "5g",
    tags: ["#1 Pinterest 2026", "SweetTreats", "BaklavaLove"],
    dishTypes: ["Dessert", "Sweet", "Pastry"],
    ingredients: [
      { name: "1 package phyllo dough, thawed", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "2 cups finely crushed pistachios", image: "https://images.unsplash.com/photo-1551731409-430360700021?q=80&w=150" },
      { name: "1 cup crushed walnuts", image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=150" },
      { name: "1 cup unsalted butter, melted", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "1 cup honey or simple syrup", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1 teaspoon ground cinnamon", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "1 tablespoon rose water (optional)", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to 175°C (350°F) and generously butter the bottom and sides of a baking dish.",
      "In a medium bowl, mix the crushed pistachios, crushed walnuts, and ground cinnamon together.",
      "Unroll the phyllo dough. Place two sheets into the baking dish and brush the top generously with melted butter. Repeat until you have layered about 8-10 sheets.",
      "Sprinkle a thick, even layer of the nut mixture over the buttered phyllo sheets.",
      "Top with two more sheets of phyllo, brush with butter, and repeat with another layer of nuts. Finish with a final top layer of 8-10 buttered sheets.",
      "Using a sharp knife, carefully cut the baklava into diamonds or squares all the way to the bottom. Bake for 40-45 minutes until golden and crisp.",
      "While the baklava is hot out of the oven, immediately pour the cold honey or simple syrup (mixed with rose water) evenly over the top. Let it cool completely for 4 hours to absorb before serving."
    ]
  },
  {
    id: "ln-trend-04",
    title: "Beef Quesadilla",
    description: "The ultimate cheesy 2026 Pinterest lunch. Crispy, golden-brown tortillas packed with deeply seasoned minced beef and a mountain of melted cheddar, served with fresh pico de gallo and sour cream.",
    summary: "The ultimate cheesy 2026 Pinterest lunch. Crispy, golden-brown tortillas packed with deeply seasoned minced beef and a mountain of melted cheddar, served with fresh pico de gallo and sour cream.",
    image: "https://i.pinimg.com/1200x/d5/d3/d9/d5d3d97331e6d831bc59bc3d45c55f8d.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "LUNCH",
    calories: "540kcal",
    protein: "28g",
    tags: ["#1 Pinterest 2026", "CheesyLunch", "MexicanVibes"],
    dishTypes: ["Lunch", "Quesadilla", "Cheesy"],
    ingredients: [
      { name: "200g minced beef", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "2 large flour tortillas", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150" },
      { name: "1 cup shredded cheddar or monterey jack cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1/2 small onion & 1 tomato (for Pico de Gallo)", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "2 tablespoons sour cream or Greek yogurt", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "1 teaspoon taco seasoning (cumin, paprika, garlic powder)", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=150" },
      { name: "Fresh cilantro and lime juice", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "In a skillet over medium heat, brown the minced beef with the taco seasoning and a pinch of salt until fully cooked. Drain excess fat and set aside.",
      "Finely dice the tomato, onion, and fresh cilantro. Mix them in a small bowl with a squeeze of lime juice and a pinch of salt to make the fresh Pico de Gallo.",
      "Wipe the skillet clean and place one tortilla inside over medium heat. Sprinkle half of the shredded cheese evenly across the tortilla.",
      "Spread the seasoned minced beef over the cheese layer, then top it with the remaining cheese to help bind the quesadilla.",
      "Place the second tortilla on top. Press down gently and cook for 3-4 minutes until the bottom tortilla is golden and crispy, then carefully flip to crisp the other side and melt the cheese completely.",
      "Slide the quesadilla onto a cutting board, slice into wedges, and serve hot with the fresh Pico de Gallo and a scoop of sour cream on the side."
    ]
  },
  {
    id: "ln-trend-06",
    title: "Double Cheeseburger",
    description: "The ultimate comfort lunch. Two juicy, flame-grilled beef patties layered with melted cheddar cheese, fresh tomatoes, crisp lettuce, and signature burger sauce inside a toasted sesame brioche bun.",
    summary: "The ultimate comfort lunch. Two juicy, flame-grilled beef patties layered with melted cheddar cheese, fresh tomatoes, crisp lettuce, and signature burger sauce inside a toasted sesame brioche bun.",
    image: "https://i.pinimg.com/736x/c5/6e/cb/c56ecba09df22d525589f1947d790e0b.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "LUNCH",
    calories: "680kcal",
    protein: "42g",
    tags: ["#1 Pinterest 2026", "CheatMeal", "BurgerHeaven"],
    dishTypes: ["Lunch", "Burger", "Comfort"],
    ingredients: [
      { name: "2 premium beef patties (150g each)", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "2 slices of sharp cheddar cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1 brioche sesame bun", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tomato, sliced", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=150" },
      { name: "A few crisp green lettuce leaves", image: "https://images.unsplash.com/photo-1622484211148-71749c44b140?q=80&w=150" },
      { name: "2 tablespoons house burger sauce", image: "https://images.unsplash.com/photo-1585325701165-351af916e5ec?q=80&w=150" }
    ],
    instructions: [
      "Preheat your grill or cast-iron skillet over high heat. Season the beef patties generously with salt, pepper, and garlic powder.",
      "Sear the patties for 3 minutes on the first side to get a deep, flavorful crust. Flip them over.",
      "Immediately place a slice of cheddar cheese on each patty right after flipping. Cover the skillet for 1-2 minutes to let the cheese melt completely while the burger finishes cooking.",
      "Lightly butter the cut sides of the brioche bun and toast them on the skillet until golden brown and warm.",
      "Assemble the burger: Spread the house burger sauce on the bottom bun, layer the crisp lettuce and tomato slices, then stack the two cheesy beef patties on top.",
      "Spread a bit more sauce on the top bun, close the burger, press down gently, and serve hot immediately."
    ]
  },
  {
    id: "ln-trend-07",
    title: "Salmon Grilled Cheese",
    description: "A luxurious, comforting 2026 Pinterest lunch. Crispy, butter-toasted seeded sourdough packed with layers of premium smoked salmon, melted gooey cheese, and fresh dill.",
    summary: "A luxurious, comforting 2026 Pinterest lunch. Crispy, butter-toasted seeded sourdough packed with layers of premium smoked salmon, melted gooey cheese, and fresh dill.",
    image: "https://i.pinimg.com/736x/bc/c8/f7/bcc8f7de1fc510b239a466fc171cc381.jpg",
    prepTime: "12m",
    readyInMinutes: 12,
    servings: 1,
    category: "LUNCH",
    calories: "510kcal",
    protein: "26g",
    tags: ["#1 Pinterest 2026", "GourmetSandwich", "SalmonLovers"],
    dishTypes: ["Lunch", "Sandwich", "Gourmet"],
    ingredients: [
      { name: "100g premium smoked salmon", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=150" },
      { name: "2 slices of artisan seeded sourdough bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/2 cup shredded mozzarella or gruyère cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1 tablespoon cream cheese (with herbs)", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "1 tablespoon unsalted butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "A few sprigs of fresh dill", image: "https://images.unsplash.com/photo-1534720843364-08ef3d826f3d?q=80&w=150" }
    ],
    instructions: [
      "Spread a thin layer of herb cream cheese on the inside of both sourdough bread slices.",
      "Layer half of the shredded mozzarella or gruyère cheese onto one slice of bread.",
      "Arrange the premium smoked salmon slices neatly over the cheese, and top with a few sprigs of fresh dill.",
      "Add the remaining shredded cheese on top of the salmon (this locks the sandwich together) and close with the second bread slice.",
      "Melt butter in a skillet over medium-low heat. Place the sandwich in the skillet and cook slowly for 3-4 minutes until the bottom is golden-brown and crispy.",
      "Flip the sandwich carefully, adding a bit more butter to the pan if needed, and toast for another 3 minutes until the bread is perfectly grilled and the cheese is fully melted and gooey. Slice and serve immediately."
    ]
  },
  {
    id: "ln-trend-08",
    title: "Chicken Caesar Wrap",
    description: "The ultimate Pinterest-ready lunch. Tender grilled chicken breast, crisp romaine lettuce, diced tomatoes, and crunchy garlic croutons, all tossed in a rich, creamy Caesar dressing and wrapped tightly in a toasted flour tortilla.",
    summary: "The ultimate Pinterest-ready lunch. Tender grilled chicken breast, crisp romaine lettuce, diced tomatoes, and crunchy garlic croutons, all tossed in a rich, creamy Caesar dressing and wrapped tightly in a toasted flour tortilla.",
    image: "https://i.pinimg.com/736x/a8/e8/a1/a8e8a18c1ee50bee36ee984aff9143af.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "LUNCH",
    calories: "480kcal",
    protein: "34g",
    tags: ["#1 Pinterest", "GourmetLunch", "CaesarWrap"],
    dishTypes: ["Lunch", "Wrap", "Salad"],
    ingredients: [
      { name: "200g grilled chicken breast, sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "2 cups crisp romaine lettuce, chopped", image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=150" },
      { name: "1/2 cup fresh tomatoes, diced", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "1/4 cup shaved parmesan cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1 large flour tortilla", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150" },
      { name: "2 tablespoons creamy Caesar dressing", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1/4 cup golden garlic croutons", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "In a large bowl, toss together the chopped romaine lettuce, grilled chicken slices, diced tomatoes, parmesan cheese, and garlic croutons.",
      "Drizzle the creamy Caesar dressing evenly over the ingredients and mix until everything is perfectly coated.",
      "Warm the flour tortilla in a pan for about 15 seconds until it becomes soft and pliable.",
      "Place the fresh Caesar salad mixture in a neat row down the center of the tortilla.",
      "Fold the bottom and top edges in, then roll tightly from the side to secure the filling.",
      "Place the wrapped tortilla back onto a hot skillet or grill pan for 1 minute on each side until golden-brown fold marks appear. Cut diagonally and serve immediately."
    ]
  },
  {
    id: "dn-premium-09",
    title: "Garlic Butter Steak & Mash",
    description: "A luxurious dinner staple. Perfectly seared, juicy ribeye steak slices served over rich, velvety garlic mashed potatoes, finished with a savory herb gravy drizzle.",
    summary: "A luxurious dinner staple. Perfectly seared, juicy ribeye steak slices served over rich, velvety garlic mashed potatoes, finished with a savory herb gravy drizzle.",
    image: "https://i.pinimg.com/736x/78/a4/77/78a477ac02a42fe91da8e3d20c18b43f.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DINNER",
    calories: "680kcal",
    protein: "48g",
    tags: ["PremiumDinner", "SteakNight", "HighProtein", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Steak", "Premium"],
    ingredients: [
      { name: "250g premium beef ribeye or sirloin", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=150" },
      { name: "2 large Yukon Gold potatoes", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "2 tbsp unsalted butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=150" },
      { name: "3 cloves garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1/4 cup heavy cream", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=150" },
      { name: "1/4 cup rich beef broth (for gravy)", image: "https://images.unsplash.com/photo-1607301406219-fc3a44f7f93e?q=80&w=150" },
      { name: "Fresh parsley & thyme, finely chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Peel and dice the potatoes, then boil them in salted water until fork-tender (about 15 minutes). Drain well.",
      "Mash the hot potatoes thoroughly with 1 tbsp of butter, minced garlic, heavy cream, salt, and pepper until perfectly smooth and velvety.",
      "Pat the steak dry with paper towels and season generously with coarse salt and cracked black pepper on both sides.",
      "Heat a cast-iron skillet over high heat until smoking, add a splash of oil, and sear the steak for 2-3 minutes per side for medium-rare.",
      "In the final minute of cooking, drop in the remaining butter and fresh herbs, basting the melted butter continuously over the steak. Remove and let it rest for 5 minutes.",
      "In the same skillet, whisk the beef broth with the remaining pan juices over medium heat to create a glossy gravy. Slice the steak diagonally, place it next to a generous scoop of mashed potatoes, drizzle with the gravy, and garnish with fresh parsley."
    ]
  },
  {
    id: "dn-premium-10",
    title: "Gourmet T-Bone & Wedges",
    description: "An absolute masterpiece for steak lovers. A thick, juicy T-bone steak seared to perfection, served with crispy seasoned potato wedges and a vibrant, tangy zesty herb chimichurri sauce.",
    summary: "An absolute masterpiece for steak lovers. A thick, juicy T-bone steak seared to perfection, served with crispy seasoned potato wedges and a vibrant, tangy zesty herb chimichurri sauce.",
    image: "https://i.pinimg.com/1200x/7f/99/60/7f996085558763959ce85983727d6ec1.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 2,
    category: "DINNER",
    calories: "740kcal",
    protein: "52g",
    tags: ["SteakhouseQuality", "GourmetDinner", "HighProtein", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Steak", "Gourmet"],
    ingredients: [
      { name: "1 thick-cut T-Bone steak (approx. 400g)", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=150" },
      { name: "2 medium russet potatoes (cut into wedges)", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "1/2 cup fresh parsley & cilantro (for chimichurri)", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "2 tbsp olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1 tbsp red wine vinegar", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "2 cloves garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "Fresh rosemary & thyme sprigs", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to 200°C. Toss the potato wedges in 1 tbsp of olive oil, paprika, salt, and garlic powder. Roast for 25 minutes until crispy and golden.",
      "Prepare the chimichurri sauce by finely chopping the parsley and cilantro, then mixing them with minced garlic, red wine vinegar, 1 tbsp of olive oil, chili flakes, salt, and pepper in a small bowl. Set aside.",
      "Bring the T-bone steak to room temperature, pat it completely dry with paper towels, and season generously with coarse sea salt and black pepper on all sides.",
      "Heat a heavy skillet or grill pan over high heat until smoking. Sear the steak for 3-4 minutes on the first side without moving it to get those perfect grill marks.",
      "Flip the steak, drop in a knob of butter, garlic cloves, and fresh rosemary/thyme sprigs into the pan. Spoon the aromatic melted butter over the steak for another 3 minutes.",
      "Remove the steak from the pan and let it rest on a warm board for 5-7 minutes. Serve hot alongside the crispy potato wedges and a side bowl of the fresh herb chimichurri sauce."
    ]
  },
  {
    id: "fish-premium-11",
    title: "Honey Garlic Glazed Salmon",
    description: "A premium, restaurant-quality seafood dish. Pan-seared salmon fillets coated in a sticky, sweet, and savory honey garlic glaze, finished with fresh lemon juice and chopped parsley.",
    summary: "A premium, restaurant-quality seafood dish. Pan-seared salmon fillets coated in a sticky, sweet, and savory honey garlic glaze, finished with fresh lemon juice and chopped parsley.",
    image: "https://i.pinimg.com/736x/51/2e/6c/512e6c1bbee1e3ff7364b9ee5d4e1520.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 4,
    category: "DINNER",
    calories: "520kcal",
    protein: "38g",
    tags: ["PremiumSeafood", "HealthyLuxury", "Omega3Rich"],
    dishTypes: ["Dinner", "Seafood", "Salmon"],
    ingredients: [
      { name: "4 fresh salmon fillets (approx. 150g each)", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "3 tablespoons raw honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "2 tablespoons soy sauce", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=150" },
      { name: "4 cloves garlic, minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1 fresh lemon (sliced & juiced)", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "1 tablespoon olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Fresh parsley, finely chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Season the salmon fillets generously with salt, pepper, and a pinch of paprika on both sides.",
      "In a small bowl, whisk together the honey, soy sauce, minced garlic, and 1 tablespoon of fresh lemon juice to create the glaze sauce.",
      "Heat olive oil in a large non-stick skillet over medium-high heat. Place the salmon fillets skin-side up and sear for 4-5 minutes until golden brown.",
      "Flip the salmon over, reduce heat to medium, and pour the honey garlic mixture into the skillet around the fillets.",
      "Spoon the sauce continuously over the salmon as it simmers and thickens, about 3-4 minutes, until the salmon is cooked through and perfectly glazed.",
      "Garnish with fresh lemon slices and chopped parsley. Serve hot, drizzling the remaining pan glaze over the top."
    ]
  },
  {
    id: "ch-premium-14",
    title: "Crispy Chicken Caesar Wrap",
    description: "A fresh and satisfying lunch favorite. Sliced grilled chicken breast tossed with crisp romaine lettuce, crunchy herb croutons, juicy tomatoes, and creamy Caesar dressing, all rolled into a soft flour tortilla.",
    summary: "A fresh and satisfying lunch favorite. Sliced grilled chicken breast tossed with crisp romaine lettuce, crunchy herb croutons, juicy tomatoes, and creamy Caesar dressing, all rolled into a soft flour tortilla.",
    image: "https://i.pinimg.com/1200x/0c/ee/44/0cee447a6c22199a775d911e3ea5f27c.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "LUNCH",
    calories: "480kcal",
    protein: "32g",
    tags: ["FreshLunch", "HealthyChoice", "HighProtein"],
    dishTypes: ["Lunch", "Wrap", "Chicken"],
    ingredients: [
      { name: "200g chicken breast, grilled and sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1 cup Romaine lettuce, shredded", image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=150" },
      { name: "1/4 cup seasoned herb croutons", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=150" },
      { name: "1 small tomato, diced", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "2 tbsp creamy Caesar dressing", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1 large flour tortilla", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150" },
      { name: "1 tbsp grated Parmesan cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" }
    ],
    instructions: [
      "Season the chicken breast with garlic powder, salt, and pepper, then grill it in a skillet until fully cooked. Let it rest for a few minutes, then slice it into bite-sized strips.",
      "In a large mixing bowl, combine the shredded romaine lettuce, diced tomatoes, crispy croutons, and grated Parmesan cheese.",
      "Drizzle the creamy Caesar dressing over the salad mixture and toss everything gently until evenly coated.",
      "Warm the flour tortilla slightly in a dry pan for 10 seconds to make it more pliable.",
      "Place the dressed Caesar salad mixture down the center of the tortilla, and top it with the warm grilled chicken strips.",
      "Fold in the sides of the tortilla and roll it up tightly from the bottom. Cut diagonally in half and serve immediately while the croutons are perfectly crunchy."
    ]
  },
  {
    id: "mex-premium-15",
    title: "Cheesy Beef Quesadilla",
    description: "A Mexican-inspired comfort food masterpiece. Crispy, golden-brown flour tortillas packed with seasoned, juicy minced beef and a mountain of melted cheddar and mozzarella, served with fresh pico de gallo and sour cream.",
    summary: "A Mexican-inspired comfort food masterpiece. Crispy, golden-brown flour tortillas packed with seasoned, juicy minced beef and a mountain of melted cheddar and mozzarella, served with fresh pico de gallo and sour cream.",
    image: "https://i.pinimg.com/736x/8b/b1/3d/8bb13dab097b0c0b098d7f4cba248e8e.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "DINNER",
    calories: "610kcal",
    protein: "35g",
    tags: ["MexicanGourmet", "CheeseLover", "QuickDinner"],
    dishTypes: ["Dinner", "Lunch", "Mexican"],
    ingredients: [
      { name: "2 large flour tortillas", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150" },
      { name: "200g lean minced beef", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1 cup shredded Cheddar & Mozzarella mix", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1/2 tsp taco seasoning (cumin, chili powder, oregano)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1/4 cup fresh Pico de Gallo (diced tomato, red onion, cilantro)", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "2 tbsp premium sour cream", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Heat a drizzle of olive oil in a skillet over medium-high heat. Add the minced beef, breaking it apart with a spoon, and stir in the taco seasoning. Cook until browned and fully cooked through (about 5-6 minutes). Set aside.",
      "Wipe the skillet clean and place it back over medium heat. Lay one large flour tortilla flat in the skillet.",
      "Sprinkle a generous layer of the shredded cheese mix evenly over the entire tortilla.",
      "Spread the warm seasoned minced beef over one half of the tortilla, then add another light sprinkle of cheese on top to act as 'glue'.",
      "Fold the empty half of the tortilla over the filling to create a half-moon shape.",
      "Cook for 2-3 minutes until the bottom is perfectly crisp and golden-brown, then carefully flip and toast the other side until the cheese inside is completely melted. Slice into three triangles and serve immediately with fresh Pico de Gallo and a scoop of sour cream."
    ]
  },
  {
    id: "ch-premium-16",
    title: "Garlic Chicken Pasta",
    description: "Al dente spaghetti tossed in aromatic extra virgin olive oil, minced garlic, and red pepper flakes, topped with juicy grilled chicken breast strips and fresh Parmesan.",
    summary: "Al dente spaghetti tossed in aromatic extra virgin olive oil, minced garlic, and red pepper flakes, topped with juicy grilled chicken breast strips and fresh Parmesan.",
    image: "https://i.pinimg.com/1200x/42/7a/bf/427abf168a4cd94417212ef13e1ac0e1.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DINNER",
    calories: "680kcal",
    protein: "42g",
    tags: ["ItalianGourmet", "HighProtein", "QuickDinner"],
    dishTypes: ["Dinner", "Pasta", "Italian"],
    ingredients: [
      { name: "200g chicken breast, grilled and sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "150g high-quality spaghetti", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3 tbsp extra virgin olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "4 cloves garlic, thinly sliced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "2 tbsp freshly grated Parmesan cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=150" },
      { name: "1/2 tsp red chili flakes", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "Fresh Italian parsley, finely chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Boil the spaghetti in salted water until al dente. Reserve 1/4 cup of pasta water, then drain.",
      "Season the chicken breast with salt, pepper, and paprika. Grill in a skillet until fully cooked, then slice into strips.",
      "In a large skillet, heat olive oil over medium-low heat. Sauté sliced garlic and chili flakes for 2-3 minutes until fragrant.",
      "Toss the spaghetti into the garlic oil, adding a splash of the reserved pasta water to emulsify.",
      "Plate the pasta, arrange the warm grilled chicken slices on top, and garnish with fresh Parmesan cheese and chopped parsley."
    ]
  },
  {
    id: "ch-premium-18",
    title: "Crispy Chicken & Fries",
    description: "Golden, ultra-crispy buttermilk fried chicken strips served alongside perfectly seasoned French fries and a rich, tangy ketchup dipping sauce.",
    summary: "Golden, ultra-crispy buttermilk fried chicken strips served alongside perfectly seasoned French fries and a rich, tangy ketchup dipping sauce.",
    image: "https://i.pinimg.com/736x/c6/d6/3a/c6d63a6782592f63de2002a16025aea7.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "LUNCH",
    calories: "710kcal",
    protein: "35g",
    tags: ["FastFoodGourmet", "CrispyLover", "CheatDayClassic"],
    dishTypes: ["Lunch", "Fast Food", "Crispy"],
    ingredients: [
      { name: "250g chicken breast or tenderloins", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "2 medium potatoes, cut into fries", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "1/2 cup buttermilk & 1 egg (for coating)", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1/2 cup all-purpose flour & cornstarch", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tsp paprika, garlic powder, and onion powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "2 tbsp premium tomato ketchup", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?q=80&w=150" }
    ],
    instructions: [
      "Cut the chicken into even strips. Marinate in buttermilk, salt, pepper, and garlic powder for at least 15 minutes.",
      "Dredge each chicken strip in a seasoned flour and cornstarch mixture, shaking off any excess for maximum crispiness.",
      "Heat oil in a deep fryer or heavy pot to 175°C. Fry the potato fries until golden and crispy, then remove and season with salt.",
      "In the same hot oil, fry the coated chicken strips for 5-6 minutes until the crust is deeply golden-brown and the chicken is fully cooked.",
      "Drain the chicken on paper towels. Plate the hot crispy strips alongside the fries, garnish with a touch of fresh parsley, and serve with a side bowl of ketchup."
    ]
  },
  {
    id: "ch-premium-19",
    title: "Roasted Chicken & Veggies",
    description: "A comforting Sunday classic. Whole chicken seasoned with garlic, lemon, and fresh herbs, roasted to golden perfection alongside tender baby potatoes, carrots, and caramelized onions.",
    summary: "A comforting Sunday classic. Whole chicken seasoned with garlic, lemon, and fresh herbs, roasted to golden perfection alongside tender baby potatoes, carrots, and caramelized onions.",
    image: "https://i.pinimg.com/736x/a2/e2/8f/a2e28fa812ac73afe5780a1a59c06968.jpg",
    prepTime: "1h 15m",
    readyInMinutes: 75,
    servings: 4,
    category: "DINNER",
    calories: "620kcal",
    protein: "45g",
    tags: ["ClassicRoast", "FamilyDinner", "HighProtein", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Chicken", "Roast"],
    ingredients: [
      { name: "1 whole chicken (approx. 1.2kg)", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "500g baby potatoes & carrots, chopped", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "1 whole lemon & 1 head of garlic", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "3 tbsp softened butter or olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Fresh rosemary & thyme sprigs", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1 large red onion, wedged", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to 200°C. Pat the chicken completely dry with paper towels to ensure a crispy skin.",
      "Stuff the chicken cavity with a halved lemon, a halved head of garlic, and a few sprigs of fresh rosemary and thyme.",
      "Rub the outside of the chicken generously with softened butter or olive oil, then season thoroughly with salt, black pepper, and garlic powder.",
      "Toss the baby potatoes, carrots, and onion wedges in a baking dish with olive oil, salt, pepper, and remaining herbs. Place the chicken right on top of the veggies.",
      "Roast in the oven for about 1 hour to 1 hour and 15 minutes, or until the chicken skin is deeply golden-brown and crispy, and the juices run clear.",
      "Let the chicken rest for 10 minutes before carving. Serve hot alongside the beautifully roasted, caramelized vegetables."
    ]
  },
  {
    id: "sh-premium-21",
    title: "Creamy Garlic Shrimp",
    description: "A luxurious seafood delight. Succulent jumbo shrimp sautéed in a rich, velvety garlic cream sauce infused with herbs, served alongside perfectly fluffy steamed white rice.",
    summary: "A luxurious seafood delight. Succulent jumbo shrimp sautéed in a rich, velvety garlic cream sauce infused with herbs, served alongside perfectly fluffy steamed white rice.",
    image: "https://i.pinimg.com/736x/c1/a8/ab/c1a8abb2bf7e90e350fd8be23d1c03c5.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "DINNER",
    calories: "590kcal",
    protein: "32g",
    tags: ["SeafoodGourmet", "CreamySauce", "QuickGourmet", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Seafood", "Shrimp"],
    ingredients: [
      { name: "300g jumbo shrimp, peeled and deveined", image: "https://images.unsplash.com/photo-1551248429-4043bcaad3be?q=80&w=150" },
      { name: "1 cup Jasmine or Basmati rice", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3/4 cup heavy cream", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "4 cloves garlic, finely minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "2 tbsp unsalted butter & 1 tbsp olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Fresh parsley and cracked black pepper", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Rinse and cook the rice according to package instructions until fluffy. Keep warm and set aside.",
      "Pat the shrimp completely dry with paper towels. Season lightly with salt, paprika, and onion powder.",
      "In a large skillet, melt the butter with olive oil over medium-high heat. Add the shrimp and sear for 1-2 minutes per side until pink. Remove the shrimp from the skillet and set aside (do not overcook).",
      "Turn the heat down to medium. In the same skillet, add the minced garlic and sauté for 1 minute until fragrant and soft.",
      "Pour in the heavy cream, bring to a gentle simmer, and let it reduce slightly for 2-3 minutes. Stir in half of the fresh chopped parsley.",
      "Return the seared shrimp back into the creamy garlic sauce, tossing gently for 1 minute to coat thoroughly.",
      "Serve the creamy garlic shrimp hot alongside the steamed rice, garnishing generously with extra fresh parsley and plenty of freshly cracked black pepper."
    ]
  },
  {
    id: "ch-premium-22",
    title: "Chicken Shawarma Wrap",
    description: "A flavorful gourmet wrap. Tender, spiced grilled chicken shawarma rolled in a perfectly toasted tortilla, packed with crisp cucumbers, tomatoes, red onions, and smothered in a rich, herbed garlic yogurt sauce.",
    summary: "A flavorful gourmet wrap. Tender, spiced grilled chicken shawarma rolled in a perfectly toasted tortilla, packed with crisp cucumbers, tomatoes, red onions, and smothered in a rich, herbed garlic yogurt sauce.",
    image: "https://i.pinimg.com/1200x/ba/97/a1/ba97a1356f9c0558217ef509a55638bd.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "LUNCH",
    calories: "616kcal",
    protein: "34g",
    tags: ["HighProtein", "Trendy", "PinterestFav"],
    dishTypes: ["Lunch", "Dinner", "Wrap", "Chicken", "Shawarma"],
    ingredients: [
      { name: "250g chicken breast, thinly sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "2 large flour tortillas or Arabic flatbreads", image: "https://images.unsplash.com/photo-1574914629385-a1c2e39a5996?q=80&w=150" },
      { name: "1/2 cup Greek yogurt & 2 cloves garlic (for garlic sauce)", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "1 small cucumber & 1 tomato, sliced", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1/2 red onion, thinly sliced", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" },
      { name: "1 tbsp shawarma spice blend (cumin, paprika, cardamom)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Toss the sliced chicken with olive oil, salt, pepper, and the shawarma spice blend. Marinate for 10-15 minutes.",
      "In a small bowl, mix the Greek yogurt with minced garlic, a squeeze of lemon juice, and finely chopped fresh parsley or dill to create the garlic sauce.",
      "Heat a grill pan over high heat and sear the seasoned chicken for 5-6 minutes until beautifully cooked through and slightly charred around the edges.",
      "Warm the tortillas in a clean pan for 30 seconds on each side.",
      "Assemble the wraps by spreading a generous amount of the garlic yogurt sauce over the tortilla, then layer the grilled chicken, cucumber slices, tomatoes, and red onions.",
      "Roll the tortilla tightly, tucking in the sides. Place the wrap back onto the hot grill pan for 1 minute to get those beautiful grill marks and extra crispiness before serving."
    ]
  },
  {
    id: "sf-premium-23",
    title: "Salmon Teriyaki Bowl",
    description: "A vibrant gourmet rice bowl featuring perfectly seared salmon glazed in rich teriyaki sauce, layered with creamy avocado cubes, fresh cherry tomatoes, and a shower of chopped herbs over fluffy white rice.",
    summary: "A vibrant gourmet rice bowl featuring perfectly seared salmon glazed in rich teriyaki sauce, layered with creamy avocado cubes, fresh cherry tomatoes, and a shower of chopped herbs over fluffy white rice.",
    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/476610106_122141652152433347_4997706826970846285_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HVZNbA-8dI8Q7kNvwEDERfP&_nc_oc=Adq0wcGCF7Qy-D801G8_1XRaCgi9Mfp59XK33TJ5BWzVqiljOdrcOFIZ2qnvM27gjYQ&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=tXD2cBLOcfmOH_OaI1jvpA&_nc_ss=7a289&oh=00_Af67jok9GyGRVGoZpE5Y3-kCVxWNx33cc1mUf8_4t4q22g&oe=6A12C002",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DINNER",
    calories: "610kcal",
    protein: "38g",
    tags: ["AsianFusion", "HealthyPremium", "SalmonLover", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Seafood", "Salmon", "Bowl"],
    ingredients: [
      { name: "200g fresh salmon fillet", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "1 cup cooked Jasmine rice", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1/2 ripe avocado, cubed", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150" },
      { name: "1/4 cup cherry tomatoes, halved", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "2 tbsp premium teriyaki sauce", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Fresh cilantro and green onions", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Cook the Jasmine rice and press it tightly into a round mold at the center of the plate.",
      "Season the salmon fillet with salt and pepper, then sear it in a hot skillet for 3-4 minutes per side. Brush generously with teriyaki sauce during the last minute.",
      "Slice the glazed salmon carefully and arrange it on top of the rice structure.",
      "Top with cubed avocado, halved cherry tomatoes, and a handful of fresh cilantro and green onions.",
      "Drizzle extra teriyaki sauce around the plate before serving."
    ]
  },
  {
    id: "sf-premium-24",
    title: "Garlic Butter Salmon",
    description: "Succulent, oven-baked salmon fillets coated in a rich glaze of melted garlic butter, fresh lemon juice, and a heavy sprinkle of finely chopped Italian parsley.",
    summary: "Succulent, oven-baked salmon fillets coated in a rich glaze of melted garlic butter, fresh lemon juice, and a heavy sprinkle of finely chopped Italian parsley.",
    image: "https://i1-e.pinimg.com/1200x/90/3c/9f/903c9f3eca2797a11cc41fda67da19a2.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 4,
    category: "DINNER",
    calories: "540kcal",
    protein: "36g",
    tags: ["KetoFriendly", "QuickGourmet", "LowCarb", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Seafood", "Salmon"],
    ingredients: [
      { name: "4 fresh salmon fillets (150g each)", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "3 tbsp melted unsalted butter", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "4 cloves garlic, finely minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1 fresh lemon, sliced", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "Fresh parsley, chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 200°C and arrange salmon fillets on a lined baking sheet.",
      "Mix melted butter with minced garlic, lemon juice, salt, and pepper, then pour evenly over the salmon.",
      "Bake for 12-15 minutes until the salmon flakes easily with a fork.",
      "Garnish with lots of fresh parsley and serve with lemon wedges."
    ]
  },
  {
    id: "sf-premium-25",
    title: "Gourmet Grilled Sea Bass",
    description: "A spectacular whole grilled Sea Bass seasoned with Mediterranean spices, served over a vibrant garlic-herb emulsion, accompanied by fresh rice and a tomato-onion salsa.",
    summary: "A spectacular whole grilled Sea Bass seasoned with Mediterranean spices, served over a vibrant garlic-herb emulsion, accompanied by fresh rice and a tomato-onion salsa.",
    image: "https://i1-e.pinimg.com/1200x/63/dd/58/63dd5822b9fff0b14fda245e9374ac25.jpg",
    prepTime: "35m",
    readyInMinutes: 35,
    servings: 2,
    category: "DINNER",
    calories: "490kcal",
    protein: "40g",
    tags: ["Mediterranean", "WholeFish", "HealthyDinner", "Lunch"],
    dishTypes: ["Dinner", "Lunch", "Seafood", "Sea Bass", "Fish"],
    ingredients: [
      { name: "1 whole fresh Sea Bass (cleaned)", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=150" },
      { name: "1/4 cup olive oil & lemon juice blend", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "1 small tomato & red onion (diced for salsa)", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "3 cloves garlic, crushed", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "Fresh parsley and lemon wheels", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Make diagonal cuts across the fish skin, and rub inside and out with olive oil, garlic, cumin, salt, and pepper.",
      "Grill or roast the fish at 220°C for 20-25 minutes until the skin is beautifully charred and crispy.",
      "Prepare a light garlic-herb sauce and spread it on the base of the serving platter.",
      "Place the grilled fish over the sauce, garnish with lemon wheels, diced tomato-onion salsa, and serve with white rice."
    ]
  },
  {
    id: "st-premium-27",
    title: "Garlic Butter Steak",
    description: "A magnificent, juicy premium steak seared to tender perfection, sliced and basted in a rich, foaming garlic and herb butter sauce, garnished with fresh chives.",
    summary: "A magnificent, juicy premium steak seared to tender perfection, sliced and basted in a rich, foaming garlic and herb butter sauce, garnished with fresh chives.",
    image: "https://i.pinimg.com/736x/9a/e9/67/9ae967960854412d9b05cc431af12a7c.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "DINNER",
    calories: "680kcal",
    protein: "46g",
    tags: ["PremiumSteak", "KetoFriendly", "HighProtein"],
    dishTypes: ["Dinner", "Steak", "Premium"],
    ingredients: [
      { name: "300g premium ribeye or New York strip steak", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "3 tbsp unsalted butter", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "3 cloves garlic, crushed", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "Fresh rosemary & thyme sprigs", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1 tbsp olive oil (for searing)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Fresh chives, finely chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Bring the steak to room temperature for 20 minutes before cooking. Pat completely dry and season generously with coarse salt and cracked black pepper.",
      "Heat olive oil in a heavy cast-iron skillet over high heat until smoking.",
      "Sear the steak for 2-3 minutes on each side to develop a deep, golden crust.",
      "Turn the heat down to medium. Add the butter, garlic cloves, and fresh herbs to the skillet.",
      "Tilt the pan and continuously spoon the melted, foaming garlic-herb butter over the steak for another 2 minutes (basting).",
      "Remove the steak from the pan and let it rest for 5-7 minutes before slicing. Drizzle with the remaining pan butter and garnish with fresh chives."
    ]
  },
  {
    id: "pa-premium-28",
    title: "Cheesy Beef Penne Pasta",
    description: "A comforting, premium pasta dish featuring perfectly cooked penne tossed in a rich, savory tomato cream sauce with seasoned ground beef, smothered in layers of melted cheddar and mozzarella cheese, garnished with fresh herbs.",
    summary: "A comforting, premium pasta dish featuring perfectly cooked penne tossed in a rich, savory tomato cream sauce with seasoned ground beef, smothered in layers of melted cheddar and mozzarella cheese, garnished with fresh herbs.",
    image: "https://i.pinimg.com/736x/84/4d/80/844d8088463c4ffce52c3d5dd27c2491.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DINNER",
    calories: "690kcal",
    protein: "38g",
    tags: ["GourmetPasta", "ComfortFood", "HighProtein"],
    dishTypes: ["Dinner", "Pasta", "Premium"],
    ingredients: [
      { name: "200g penne pasta", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "200g premium ground beef", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1/2 cup heavy cream & 1/2 cup tomato sauce", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "1 cup shredded Cheddar & Mozzarella mix", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1/2 onion & 2 cloves garlic, finely chopped", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "Fresh parsley or basil, for garnish", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Boil the penne pasta in salted water according to package instructions until al dente. Drain and set aside.",
      "In a large skillet, heat a drizzle of olive oil over medium heat. Sauté the chopped onion and minced garlic until soft and fragrant.",
      "Add the ground beef, breaking it apart with a spoon. Season generously with salt, black pepper, and Italian herbs. Cook until browned.",
      "Pour in the tomato sauce and heavy cream. Stir well and let the sauce simmer gently for 3-4 minutes on low heat.",
      "Toss the drained penne pasta directly into the rich meat sauce, coating every piece beautifully.",
      "Turn off the heat, top with a generous handful of the shredded cheese mix, and cover with a lid for 2 minutes until the cheese is completely melted and gooey. Garnish with fresh herbs and serve immediately."
    ]
  },
  {
    id: "la-premium-29",
    title: "Gourmet Beef Lasagna",
    description: "An exquisite Italian classic featuring layers of tender lasagna sheets, a rich and savory beef bolognese sauce, and a velvety béchamel, all topped with a golden, bubbling crust of melted mozzarella and parmesan cheese.",
    summary: "An exquisite Italian classic featuring layers of tender lasagna sheets, a rich and savory beef bolognese sauce, and a velvety béchamel, all topped with a golden, bubbling crust of melted mozzarella and parmesan cheese.",
    image: "https://i.pinimg.com/736x/4f/38/27/4f3827c2d67d1fed40f77d6a76f3cb36.jpg",
    prepTime: "45m",
    readyInMinutes: 45,
    servings: 4,
    category: "DINNER",
    calories: "720kcal",
    protein: "42g",
    tags: ["ItalianGourmet", "ComfortFood", "HighProtein"],
    dishTypes: ["Dinner", "Pasta", "Lasagna", "Premium"],
    ingredients: [
      { name: "250g lasagna sheets", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "300g premium ground beef", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1.5 cups marinara or bolognese sauce", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "1 cup creamy béchamel sauce", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1.5 cups shredded Mozzarella & Parmesan mix", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "Fresh parsley, finely chopped for garnish", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to 190°C (375°F).",
      "In a skillet, heat olive oil and brown the ground beef with finely chopped onions and garlic. Season with salt, pepper, and Italian herbs, then stir in the marinara sauce and simmer for 10 minutes.",
      "Boil the lasagna sheets in salted water until just al dente, then drain carefully (or use no-boil sheets directly).",
      "To assemble, spread a thin layer of beef sauce at the bottom of a baking dish. Lay down lasagna sheets, followed by another layer of beef sauce, a drizzle of béchamel, and a handful of the cheese mix. Repeat the layers.",
      "Top the final layer of sheets with the remaining béchamel, beef sauce, and a generous layer of mozzarella and parmesan cheese.",
      "Bake uncovered for 25-30 minutes until the cheese is completely melted, bubbling, and beautifully golden-brown. Garnish with fresh parsley, let rest for 5 minutes, then slice and serve."
    ]
  },
  {
    id: "kb-premium-30",
    title: "Premium Beef Shish Kebabs",
    description: "Exquisite gourmet skewers featuring tender, marinated cubes of premium beef grilled to perfection, interlocked with vibrant bell peppers, red onions, and zucchini, served with grilled lemon and fresh rosemary.",
    summary: "Exquisite gourmet skewers featuring tender, marinated cubes of premium beef grilled to perfection, interlocked with vibrant bell peppers, red onions, and zucchini, served with grilled lemon and fresh rosemary.",
    image: "https://i.pinimg.com/736x/c8/bc/20/c8bc208063546fde6b53ee3f7a5db837.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 2,
    category: "DINNER",
    calories: "540kcal",
    protein: "44g",
    tags: ["GrillMaster", "HighProtein", "HealthyPremium"],
    dishTypes: ["Dinner", "Premium", "Grill"],
    ingredients: [
      { name: "400g premium beef sirloin or ribeye, cubed", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "1 large bell pepper (yellow & red), cubed", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1 red onion, cut into wedges", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" },
      { name: "1 small zucchini, sliced into rounds", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "2 tbsp olive oil & lemon juice (for marinade)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Garlic powder, cumin, paprika, and fresh rosemary", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "In a large bowl, mix olive oil, lemon juice, minced garlic, paprika, cumin, salt, pepper, and finely chopped rosemary.",
      "Add the beef cubes to the marinade, toss well to coat, and let it marinate for at least 20 minutes (or overnight for deeper flavor).",
      "If using wooden skewers, soak them in water for 15 minutes to prevent burning.",
      "Thread the marinated beef cubes onto the skewers, alternating with pieces of bell pepper, red onion, and zucchini rounds.",
      "Heat a grill pan or outdoor grill to medium-high heat. Place the skewers and halved lemons on the grill.",
      "Cook for 8-10 minutes, turning occasionally, until the beef is beautifully charred and cooked to your liking, and the veggies are tender. Garnish with fresh rosemary and squeeze grilled lemon juice over before serving."
    ]
  },
  {
    id: "sw-premium-31",
    title: "Chicken Shawarma Wrap",
    description: "A flavorful Mediterranean classic featuring tender, thinly sliced chicken breast marinated in aromatic shawarma spices, wrapped in warm Arabic flatbread with crisp fresh veggies and a rich, creamy garlic-yogurt sauce.",
    summary: "A flavorful Mediterranean classic featuring tender, thinly sliced chicken breast marinated in aromatic shawarma spices, wrapped in warm Arabic flatbread with crisp fresh veggies and a rich, creamy garlic-yogurt sauce.",
    image: "https://i.pinimg.com/736x/c6/d6/3a/c6d63a6782592f63de2002a16025aea7.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DINNER",
    calories: "616kcal",
    protein: "34g",
    tags: ["MediterraneanGourmet", "WrapLover", "HealthyPremium"],
    dishTypes: ["Dinner", "Wrap", "Chicken", "Shawarma"],
    ingredients: [
      { name: "250g chicken breast, thinly sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "2 large flour tortillas or Arabic flatbreads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/2 cup Greek yogurt & 2 cloves garlic", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150" },
      { name: "1 small cucumber & 1 tomato, sliced", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1/2 red onion, thinly sliced", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" },
      { name: "1 tbsp shawarma spice blend (cumin, paprika, cardamom)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "In a bowl, mix the thinly sliced chicken breast with olive oil, salt, pepper, and the shawarma spice blend. Let it marinate for 15 minutes.",
      "Prepare the garlic sauce by whisking together the Greek yogurt, finely minced garlic cloves, a squeeze of lemon juice, and a pinch of salt.",
      "Heat a drizzle of olive oil in a skillet over medium-high heat. Add the marinated chicken and sear for 6-8 minutes until cooked through and slightly charred on the edges.",
      "Warm the Arabic flatbreads or tortillas slightly in a dry pan.",
      "Assemble the wrap by spreading a generous layer of the garlic sauce on the bread, then adding the grilled chicken shawarma, sliced cucumbers, tomatoes, and red onions.",
      "Roll the flatbread tightly into a wrap, slice it in half if desired, and serve immediately alongside extra garlic sauce."
    ]
  },
  {
    id: "pi-premium-32",
    title: "Gourmet Pepperoni & Basil Pizza",
    description: "A spectacular Italian masterpiece featuring a crispy, golden crust topped with rich tomato herb sauce, layers of bubbling melted mozzarella cheese, premium sliced pepperoni, black olives, fresh mushrooms, and aromatic fresh basil leaves.",
    summary: "A spectacular Italian masterpiece featuring a crispy, golden crust topped with rich tomato herb sauce, layers of bubbling melted mozzarella cheese, premium sliced pepperoni, black olives, fresh mushrooms, and aromatic fresh basil leaves.",
    image: "https://i.pinimg.com/736x/d9/cb/5f/d9cb5fb5c6d0d7d3dc6f9a2926f47100.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 2,
    category: "DINNER",
    calories: "780kcal",
    protein: "32g",
    tags: ["ItalianGourmet", "PizzaLover", "CheatDayPremium"],
    dishTypes: ["Dinner", "Pizza", "Premium"],
    ingredients: [
      { name: "250g premium pizza dough", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/2 cup rich tomato pizza sauce", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "1.5 cups shredded Mozzarella cheese", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "70g premium sliced pepperoni", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=150" },
      { name: "Black olives, sliced mushrooms, and fresh cherry tomatoes", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "Fresh basil leaves, for garnish", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to its maximum temperature, ideally around 240°C (460°F) or use a pizza stone if available.",
      "Roll out the pizza dough on a lightly floured surface into a perfect round shape, keeping the edges slightly thicker.",
      "Spread a smooth, even layer of the rich tomato pizza sauce over the base, leaving a small border around the edges.",
      "Sprinkle a generous layer of shredded mozzarella cheese evenly over the sauce.",
      "Arrange the premium pepperoni slices, sliced mushrooms, cherry tomatoes, and black olives beautifully across the cheese layer.",
      "Bake for 12-15 minutes until the crust is deeply golden-brown and crispy, and the cheese is completely melted and bubbling. Garnish with fresh basil leaves immediately after taking it out, slice, and serve hot."
    ]
  },
  {
    id: "dd-premium-33",
    title: "Gourmet Deep Dish Pepperoni Pizza",
    description: "A spectacular Chicago-style deep-dish masterpiece featuring a thick, buttery crust packed with a deep layer of seasoned ground beef, rich savory tomato sauce, and a mountain of melted mozzarella cheese, topped with premium sliced pepperoni.",
    summary: "A spectacular Chicago-style deep-dish masterpiece featuring a thick, buttery crust packed with a deep layer of seasoned ground beef, rich savory tomato sauce, and a mountain of melted mozzarella cheese, topped with premium sliced pepperoni.",
    image: "https://i.pinimg.com/736x/c6/04/d0/c604d055f16d52ea2183f3629ba22afd.jpg",
    prepTime: "50m",
    readyInMinutes: 50,
    servings: 2,
    category: "DINNER",
    calories: "840kcal",
    protein: "45g",
    tags: ["DeepDish", "PizzaLover", "GourmetDinner"],
    dishTypes: ["Dinner", "Pizza", "Deep Dish", "Premium"],
    ingredients: [
      { name: "350g deep-dish pizza dough", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "250g premium seasoned ground beef", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1.5 cups chunky tomato herb sauce", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "2 cups shredded Mozzarella cheese", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "60g premium sliced pepperoni", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=150" },
      { name: "1 tbsp grated Parmesan & dried oregano", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Preheat your oven to 220°C (425°F) and lightly grease a deep-dish pizza pan or a heavy cake pan with butter.",
      "Press the dough firmly into the bottom and up the sides of the pan to create a high edge that can hold the fillings.",
      "In a skillet, brown the ground beef with garlic, salt, and pepper, then drain excess fat.",
      "Layer the shredded mozzarella cheese directly on the bottom of the crust, followed by the seasoned ground beef.",
      "Pour the chunky tomato sauce evenly over the meat and cheese layer, smoothing it out with a spoon.",
      "Arrange the premium pepperoni slices on top, sprinkle with Parmesan and oregano, and bake for 25-30 minutes until the crust is golden-brown and the filling is hot and bubbling. Let rest for 5 minutes before slicing."
    ]
  },
  {
    id: "tr-premium-34",
    title: "Honey Garlic Glazed Salmon",
    description: "A top-trending seafood dish featuring pan-seared premium salmon fillets locked in a sticky, sweet, and savory honey garlic sauce, finished with a squeeze of fresh lemon and a sprinkle of sesame seeds.",
    summary: "A top-trending seafood dish featuring pan-seared premium salmon fillets locked in a sticky, sweet, and savory honey garlic sauce, finished with a squeeze of fresh lemon and a sprinkle of sesame seeds.",
    image: "image_salmon_glaze.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "MAIN DISHES",
    calories: "520kcal",
    protein: "38g",
    tags: ["TrendyGourmet", "SeafoodLover", "HealthyPremium"],
    dishTypes: ["Dinner", "Seafood", "Salmon", "Premium"],
    ingredients: [
      { name: "2 premium salmon fillets", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "3 tbsp raw honey & 2 tbsp soy sauce", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "4 cloves garlic, finely minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1 tbsp unsalted butter & olive oil", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "Fresh lemon juice & green onions", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" }
    ],
    instructions: [
      "Season salmon fillets with salt, black pepper, and paprika on both sides.",
      "Heat olive oil and butter in a skillet over medium-high heat. Sear salmon for 4-5 minutes on one side until golden crust forms, then flip.",
      "Add minced garlic to the pan and sauté for 1 minute until fragrant.",
      "Pour in honey, soy sauce, and a squeeze of lemon juice. Simmer the sauce until it bubbles and thickens.",
      "Spoon the glaze continuously over the salmon for 2 minutes. Garnish with chopped green onions and serve hot."
    ]
  },
  {
    id: "tr-premium-35",
    title: "Tuscan Garlic Chicken",
    description: "An elegant, highly popular creamy Italian dish. Tender chicken breasts simmered in a luxurious, rich garlic cream sauce packed with sun-dried tomatoes and fresh spinach leaves.",
    summary: "An elegant, highly popular creamy Italian dish. Tender chicken breasts simmered in a luxurious, rich garlic cream sauce packed with sun-dried tomatoes and fresh spinach leaves.",
    image: "image_tuscan_chicken.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 2,
    category: "MAIN DISHES",
    calories: "640kcal",
    protein: "42g",
    tags: ["CreamyDelight", "ItalianPremium", "HighProtein"],
    dishTypes: ["Dinner", "Chicken", "Italian", "Premium"],
    ingredients: [
      { name: "2 large chicken breasts, halved", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1 cup heavy cream & 1/2 cup chicken broth", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1/2 cup sun-dried tomatoes, chopped", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "2 cups fresh baby spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=150" },
      { name: "3 cloves garlic, minced & 1/2 cup Parmesan", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" }
    ],
    instructions: [
      "Season chicken breasts with Italian herbs, salt, and garlic powder.",
      "Sear chicken in a hot skillet with olive oil for 5-6 minutes per side until cooked through. Remove and set aside.",
      "In the same skillet, reduce heat and sauté minced garlic and sun-dried tomatoes for 2 minutes.",
      "Pour in heavy cream and chicken broth, bringing it to a gentle simmer. Stir in the grated Parmesan cheese until melted.",
      "Add fresh spinach and let it wilt into the sauce. Return chicken to the pan, coat with the sauce, and simmer for 3 minutes before serving."
    ]
  },
  {
    id: "tr-premium-36",
    title: "Creamy Sun-Dried Tomato Gnocchi",
    description: "The ultimate vegetarian trend. Pillowy, soft potato gnocchi tossed in a velvety, rich sun-dried tomato and basil cream sauce, topped with melted fresh mozzarella.",
    summary: "The ultimate vegetarian trend. Pillowy, soft potato gnocchi tossed in a velvety, rich sun-dried tomato and basil cream sauce, topped with melted fresh mozzarella.",
    image: "image_creamy_gnocchi.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "MAIN DISHES",
    calories: "580kcal",
    protein: "16g",
    tags: ["GourmetPasta", "VegetarianPremium", "QuickDinner"],
    dishTypes: ["Dinner", "Pasta", "Vegetarian", "Premium"],
    ingredients: [
      { name: "400g fresh potato gnocchi", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3/4 cup heavy cream & 2 tbsp tomato paste", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "1/2 cup sun-dried tomatoes, sliced", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "1/2 cup grated Parmesan & fresh basil", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "2 cloves garlic, finely chopped", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" }
    ],
    instructions: [
      "Cook the potato gnocchi in boiling salted water according to package instructions (usually until they float). Drain and set aside.",
      "In a large pan, sauté minced garlic and sun-dried tomatoes in a little olive oil for 1 minute.",
      "Stir in the tomato paste, then pour in the heavy cream. Bring to a low simmer for 3 minutes.",
      "Add the cooked gnocchi and grated Parmesan cheese to the sauce, stirring gently to combine.",
      "Garnish with a mountain of fresh basil leaves and cracked black pepper before serving hot."
    ]
  },
  {
    id: "tr-premium-37",
    title: "Gourmet Smash Burger",
    description: "The internet's favorite burger. Two ultra-thin, crispy-edged smashed beef patties topped with melted American cheese, caramelized onions, and a signature premium burger sauce inside a toasted brioche bun.",
    summary: "The internet's favorite burger. Two ultra-thin, crispy-edged smashed beef patties topped with melted American cheese, caramelized onions, and a signature premium burger sauce inside a toasted brioche bun.",
    image: "image_smash_burger.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "MAIN DISHES",
    calories: "750kcal",
    protein: "44g",
    tags: ["TrendBurger", "CheatDayClassic", "GrillMaster"],
    dishTypes: ["Dinner", "Burger", "Beef", "Premium"],
    ingredients: [
      { name: "300g high-quality ground beef (80/20 mix)", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "2 soft premium brioche buns", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "4 slices real American or Cheddar cheese", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1 large onion, finely sliced (for caramelizing)", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" },
      { name: "2 tbsp mayonnaise, 1 tbsp ketchup & relish (for sauce)", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?q=80&w=150" }
    ],
    instructions: [
      "Divide the ground beef into 4 equal round balls (do not press them into patties yet).",
      "Slowly caramelize the sliced onions in a pan with a little butter until sweet and brown, then set aside.",
      "Heat a heavy cast-iron skillet over high heat until smoking hot. Toast the sliced brioche buns and set aside.",
      "Place beef balls onto the hot skillet. Using a heavy spatula, smash them down instantly until ultra-thin and flat. Season heavily with salt and pepper.",
      "Cook for 2 minutes until the edges are deeply browned and crispy, then flip. Immediately place a slice of cheese on each patty.",
      "Cook for 1 more minute until cheese melts. Stack two patties together, place inside the brioche bun with caramelized onions and burger sauce, and serve immediately."
    ]
  },
  {
    id: "md-premium-01",
    title: "Slow-Cooked Beef Ribs",
    description: "Magnificent premium beef ribs slow-cooked to melt-in-your-mouth perfection, glazed with a rich hickory barbecue reduction, and served over a bed of creamy garlic mashed potatoes.",
    summary: "Magnificent premium beef ribs slow-cooked to melt-in-your-mouth perfection, glazed with a rich hickory barbecue reduction, and served over a bed of creamy garlic mashed potatoes.",
    image: "image_beef_ribs.jpg",
    prepTime: "3h",
    readyInMinutes: 180,
    servings: 4,
    category: "MAIN DISHES",
    calories: "890kcal",
    protein: "52g",
    tags: ["SlowCooked", "PremiumMeat", "ChefSpecial"],
    dishTypes: ["Dinner", "Short Ribs", "Beef", "Premium", "Main Dish"],
    ingredients: [
      { name: "1kg premium beef short ribs", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "1 cup hickory BBQ sauce & 2 tbsp honey", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?q=80&w=150" },
      { name: "3 medium potatoes & 2 tbsp butter (for mash)", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=150" },
      { name: "1 cup beef broth", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "Garlic cloves, rosemary, and thyme", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Season the beef ribs generously with coarse salt, black pepper, and garlic powder.",
      "Sear the ribs in a hot dutch oven or heavy pot on all sides until deeply browned.",
      "Pour in the beef broth, add garlic cloves and fresh herbs, cover tightly, and braise on low heat (or oven at 160°C) for 2.5 hours until the meat is incredibly tender.",
      "Remove the ribs, brush them generously with the BBQ sauce and honey mix, and broil for 5 minutes until sticky and caramelized.",
      "Serve the ribs hot over freshly prepared creamy garlic mashed potatoes, drizzling with the remaining pan juices."
    ]
  },
  {
    id: "md-premium-02",
    title: "Pan-Seared Duck Breast",
    description: "An exquisite fine-dining staple. Crispy-skinned premium duck breast scored and pan-seared to a perfect medium-rare, drizzled with a sophisticated orange and balsamic reduction.",
    summary: "An exquisite fine-dining staple. Crispy-skinned premium duck breast scored and pan-seared to a perfect medium-rare, drizzled with a sophisticated orange and balsamic reduction.",
    image: "image_duck_breast.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "MAIN DISHES",
    calories: "540kcal",
    protein: "34g",
    tags: ["FineDining", "CrispySkin", "GourmetClassic"],
    dishTypes: ["Dinner", "Duck", "Fine Dining", "Premium", "Main Dish"],
    ingredients: [
      { name: "2 premium duck breasts", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1/2 cup fresh orange juice & zest", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "2 tbsp balsamic vinegar & 1 tbsp honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "Fresh rosemary sprig", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "Salt and cracked black pepper", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Score the duck breast skin in a diamond pattern, being careful not to cut into the meat. Season both sides with salt and pepper.",
      "Place the duck breasts skin-side down in a cold, dry skillet. Turn heat to medium and cook for 8-10 minutes, allowing the fat to render completely and the skin to become ultra-crispy.",
      "Flip and cook the meat side for 3-4 minutes. Remove from pan and let it rest for 8 minutes before slicing.",
      "Pour off most of the duck fat, leaving 1 tbsp. Add orange juice, zest, balsamic vinegar, and honey to the pan. Simmer until it thickens into a glossy glaze.",
      "Slice the duck breast diagonally, fan it out beautifully on a plate, and spoon the warm orange reduction over it."
    ]
  },
  {
    id: "md-premium-03",
    title: "Creamy Seafood Paella",
    description: "A premium twist on a coastal classic. High-quality Arborio rice simmered in a rich saffron-infused seafood broth, loaded with jumbo shrimp, mussels, calamari, and sweet green peas.",
    summary: "A premium twist on a coastal classic. High-quality Arborio rice simmered in a rich saffron-infused seafood broth, loaded with jumbo shrimp, mussels, calamari, and sweet green peas.",
    image: "image_seafood_paella.jpg",
    prepTime: "40m",
    readyInMinutes: 40,
    servings: 4,
    category: "MAIN DISHES",
    calories: "670kcal",
    protein: "41g",
    tags: ["SeafoodPremium", "SaffronInfused", "Mediterranean"],
    dishTypes: ["Dinner", "Seafood", "Paella", "Arborio Rice", "Premium", "Main Dish"],
    ingredients: [
      { name: "200g Arborio or Paella rice", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "300g mixed seafood (jumbo shrimp, mussels, calamari)", image: "https://images.unsplash.com/photo-1551248429-4043bcaad3be?q=80&w=150" },
      { name: "2 cups premium seafood broth", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "A generous pinch of real saffron threads", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1/2 cup diced tomatoes & bell peppers", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "Lemon wedges and fresh parsley", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" }
    ],
    instructions: [
      "In a small bowl, infuse the saffron threads in 2 tablespoons of warm water and set aside.",
      "Heat olive oil in a paella pan or wide skillet. Sauté the diced onions, bell peppers, and garlic until soft.",
      "Add the tomatoes and the paella rice, stirring for 2 minutes to toast the grains slightly.",
      "Pour in the hot seafood broth and the saffron water. Bring to a boil, then reduce heat to medium-low and let the rice simmer evenly without stirring for 15 minutes.",
      "Arrange the shrimp, mussels, and calamari neatly on top of the rice. Press them down slightly. Cook for another 8-10 minutes until the seafood is perfectly cooked and the liquid is absorbed.",
      "Garnish with fresh parsley and lemon wedges, letting it rest for 5 minutes before serving to form that perfect crispy bottom crust (socarrat)."
    ]
  },
  {
    id: "md-premium-04",
    title: "Lamb Chops with Herb Chimichurri",
    description: "Gourmet, tender lamb chops grilled to perfection, boasting a beautiful outer crust and juicy center, topped with a vibrant, zesty fresh herb and garlic chimichurri sauce.",
    summary: "Gourmet, tender lamb chops grilled to perfection, boasting a beautiful outer crust and juicy center, topped with a vibrant, zesty fresh herb and garlic chimichurri sauce.",
    image: "image_lamb_chops.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "MAIN DISHES",
    calories: "610kcal",
    protein: "46g",
    tags: ["GrillMaster", "ZestyFlavor", "HighProtein"],
    dishTypes: ["Dinner", "Lamb Chops", "Chimichurri", "Premium", "Main Dish"],
    ingredients: [
      { name: "4-6 premium lamb chops", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "1 cup fresh parsley & cilantro (for chimichurri)", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "3 cloves garlic, minced & 1 red chili", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1/4 cup olive oil & 2 tbsp red wine vinegar", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" },
      { name: "Dried oregano, salt, and coarse black pepper", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Prepare the chimichurri sauce: Finely chop the parsley, cilantro, garlic, and red chili. Mix in a bowl with olive oil, red wine vinegar, oregano, salt, and pepper. Set aside.",
      "Pat the lamb chops dry and season generously with olive oil, salt, pepper, and garlic powder.",
      "Heat a grill pan or cast-iron skillet over high heat until smoking.",
      "Sear the lamb chops for 3-4 minutes per side, ensuring the fat edges are rendered and crispy, aiming for a perfect medium-rare center.",
      "Let the lamb chops rest for 5 minutes, then plate beautifully and spoon the fresh, vibrant chimichurri sauce right over the top."
    ]
  },
  {
    id: "md-trend-05",
    title: "Creamy Garlic Butter Shrimp Pasta",
    description: "A viral seafood sensation. Succulent jumbo shrimp tossed with fettuccine pasta in a luxurious, velvety garlic butter and parmesan cream sauce, finished with fresh parsley.",
    summary: "A viral seafood sensation. Succulent jumbo shrimp tossed with fettuccine pasta in a luxurious, velvety garlic butter and parmesan cream sauce, finished with fresh parsley.",
    image: "/image_shrimp_pasta.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "MAIN DISHES",
    calories: "680kcal",
    protein: "35g",
    tags: ["SeafoodTrending", "GourmetPasta", "QuickLuxury"],
    dishTypes: ["Main Dish", "Seafood", "Pasta"],
    ingredients: [
      { name: "250g jumbo shrimp, peeled", image: "https://images.unsplash.com/photo-1551248429-4043bcaad3be?q=80&w=150" },
      { name: "200g fettuccine pasta", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 cup heavy cream & 1/2 cup Parmesan", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "3 tbsp unsalted butter & 1 tbsp olive oil", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "4 cloves garlic, finely minced", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" }
    ],
    instructions: [
      "Cook fettuccine in boiling salted water until al dente. Drain and reserve 1/4 cup pasta water.",
      "Season shrimp with salt, pepper, and paprika. Sear in a skillet with olive oil and 1 tbsp butter for 2 minutes per side, then remove.",
      "Lower heat, add remaining butter and minced garlic, sautéing until fragrant.",
      "Pour in heavy cream and bring to a simmer. Stir in Parmesan cheese until smooth.",
      "Toss the pasta and shrimp into the sauce, adding pasta water if needed to loosen. Garnish with parsley and serve."
    ]
  },
  {
    id: "md-trend-06",
    title: "Braised Lamb Shanks",
    description: "An upscale restaurant classic. Tender, fall-off-the-bone lamb shanks slow-braised in a rich rosemary, garlic, and aromatic broth reduction, served over smooth polenta.",
    summary: "An upscale restaurant classic. Tender, fall-off-the-bone lamb shanks slow-braised in a rich rosemary, garlic, and aromatic broth reduction, served over smooth polenta.",
    image: "/image_braised_lamb.jpg",
    prepTime: "2h 30m",
    readyInMinutes: 150,
    servings: 2,
    category: "MAIN DISHES",
    calories: "820kcal",
    protein: "52g",
    tags: ["SlowCooked", "FineDining", "PremiumMeat"],
    dishTypes: ["Main Dish", "Meat", "Lamb"],
    ingredients: [
      { name: "2 premium lamb shanks", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "1 large onion & 2 carrots, chopped", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" },
      { name: "2 cups rich beef broth", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "3 tbsp tomato paste", image: "https://images.unsplash.com/photo-1621996346565-e3bb64e0be5e?q=80&w=150" },
      { name: "Fresh rosemary, thyme, and garlic", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Season lamb shanks generously with salt and pepper. Sear in a hot Dutch oven until browned on all sides, then remove.",
      "Sauté chopped onions, carrots, and celery in the same pot until soft. Stir in tomato paste and minced garlic.",
      "Pour in beef broth and return the lamb shanks to the pot, adding fresh rosemary and thyme.",
      "Cover tightly and braise at 160°C (325°F) for 2 to 2.5 hours until the meat is incredibly tender.",
      "Remove shanks, strain and simmer the liquid until it thickens into a glossy glaze, then pour over the lamb to serve."
    ]
  },
  {
    id: "md-trend-07",
    title: "Crispy Hot Honey Chicken",
    description: "The ultimate sweet-and-spicy trend. Perfectly crisped chicken cutlets glazed in a glossy, fiery hot honey infusion, served alongside a refreshing slaw.",
    summary: "The ultimate sweet-and-spicy trend. Perfectly crisped chicken cutlets glazed in a glossy, fiery hot honey infusion, served alongside a refreshing slaw.",
    image: "/image_hot_honey_chicken.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 2,
    category: "MAIN DISHES",
    calories: "690kcal",
    protein: "38g",
    tags: ["HotHoney", "TrendingFlavor", "CrispyLover"],
    dishTypes: ["Main Dish", "Chicken", "Fried"],
    ingredients: [
      { name: "2 large chicken breasts, halved into cutlets", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1/4 cup raw honey & 1 tbsp hot sauce", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1 cup Panko breadcrumbs & 1 egg", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 tsp chili flakes & apple cider vinegar", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "Vegetable oil (for shallow frying)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Make the hot honey: Simmer honey, hot sauce, chili flakes, and a splash of apple cider vinegar in a small pan for 2 minutes. Set aside.",
      "Season chicken cutlets, dip in beaten egg, and coat thoroughly with Panko breadcrumbs.",
      "Heat oil in a skillet over medium-high heat. Fry chicken for 4-5 minutes per side until deeply golden and crispy.",
      "Drain chicken on a wire rack, then immediately brush or drizzle generously with the warm hot honey glaze.",
      "Serve hot alongside a crisp, zesty cabbage coleslaw."
    ]
  },
  {
    id: "md-trend-08",
    title: "Gourmet Beef Wellington Slices",
    description: "The legendary pinnacle of luxury dining. Tender beef tenderloin coated in rich mushroom d उनके paste, wrapped in golden, flaky puff pastry, served with red wine jus.",
    summary: "The legendary pinnacle of luxury dining. Tender beef tenderloin coated in rich mushroom paste, wrapped in golden, flaky puff pastry, served with red wine jus.",
    image: "/image_beef_wellington.jpg",
    prepTime: "1h",
    readyInMinutes: 60,
    servings: 4,
    category: "MAIN DISHES",
    calories: "850kcal",
    protein: "48g",
    tags: ["LuxuryGourmet", "ChefClassic", "PremiumMeat"],
    dishTypes: ["Main Dish", "Beef", "Gourmet"],
    ingredients: [
      { name: "400g center-cut beef tenderloin filet", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "250g mushrooms, finely chopped (duxelles)", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "1 sheet of premium puff pastry", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "4 slices of Prosciutto or Crepes", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "1 egg (for egg wash) & 2 tbsp Dijon mustard", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" }
    ],
    instructions: [
      "Sear beef tenderloin quickly on all sides in a smoking hot pan to brown; brush completely with Dijon mustard and let cool.",
      "Finely mince mushrooms and cook in a dry pan until all moisture evaporates, creating a thick paste (duxelles).",
      "Lay out plastic wrap, arrange prosciutto slices, spread the mushroom paste evenly, and roll tightly around the beef. Chill for 15 minutes.",
      "Roll out puff pastry, wrap it securely around the beef cylinder, brush with egg wash, and score beautifully with a knife.",
      "Bake at 200°C (400°F) for 25-30 minutes until pastry is deep golden and beef is medium-rare. Slice and serve."
    ]
  },
  {
    id: "md-trend-09",
    title: "Thai Green Chicken Curry",
    description: "An aromatic global favorite. Tender chicken pieces simmered in a creamy, vibrant green curry paste and coconut milk broth, packed with bamboo shoots and Thai basil.",
    summary: "An aromatic global favorite. Tender chicken pieces simmered in a creamy, vibrant green curry paste and coconut milk broth, packed with bamboo shoots and Thai basil.",
    image: "/image_green_curry.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 4,
    category: "MAIN DISHES",
    calories: "590kcal",
    protein: "36g",
    tags: ["AromaticTrend", "AsianGourmet", "CreamySauce"],
    dishTypes: ["Main Dish", "Curry", "Thai"],
    ingredients: [
      { name: "300g chicken breast, sliced", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "2 tbsp authentic Thai green curry paste", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 can (400ml) premium coconut milk", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 cup bell peppers & bamboo shoots", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1 tbsp fish sauce & fresh Thai basil", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Heat 2 tablespoons of coconut cream in a pan over medium heat, then stir in green curry paste until highly fragrant.",
      "Add chicken slices, stirring to coat well and cook for 3-4 minutes.",
      "Pour in the remaining coconut milk and bring to a gentle boil.",
      "Add bell peppers and bamboo shoots, simmering on low heat for 10 minutes until chicken is cooked through.",
      "Stir in fish sauce, a pinch of sugar, and fresh Thai basil leaves. Serve hot next to steamed Jasmine rice."
    ]
  },
  {
    id: "md-trend-10",
    title: "Sea Bass with Lemon Caper Butter",
    description: "Light, sophisticated, and upscale. Crispy pan-seared Sea Bass fillets served over a bright, glossy lemon butter emulsion studded with briny capers.",
    summary: "Light, sophisticated, and upscale. Crispy pan-seared Sea Bass fillets served over a bright, glossy lemon butter emulsion studded with briny capers.",
    image: "/image_seabass_caper.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "MAIN DISHES",
    calories: "460kcal",
    protein: "38g",
    tags: ["FineDiningSeafood", "LightPremium", "LowCarb"],
    dishTypes: ["Main Dish", "Seafood", "Fish"],
    ingredients: [
      { name: "2 fresh sea bass fillets, skin-on", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=150" },
      { name: "3 tbsp unsalted butter", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "2 tbsp premium capers, drained", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "Juice and zest of 1 fresh lemon", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "Fresh parsley, chopped", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Pat sea bass fillets completely dry; score the skin slightly and season with salt and white pepper.",
      "Heat olive oil in a pan over high heat. Sear fish skin-side down for 4 minutes until golden and crispy. Flip and cook for 1 minute.",
      "Remove fish from pan. Lower heat, melt butter, and add garlic, capers, lemon juice, and zest.",
      "Swirl the pan for 2 minutes to create a rich, foaming, emulsified sauce.",
      "Plate the fish beautifully skin-side up and pour the luxurious lemon caper butter sauce around it, garnishing with parsley."
    ]
  },
  {
    id: "md-trend-11",
    title: "Slow-Cooked BBQ Beef Brisket",
    description: "Rich, melt-in-your-mouth beef brisket slow-cooked to smokey perfection, coated in a sticky premium BBQ bark, served sliced with pickled onions.",
    summary: "Rich, melt-in-your-mouth beef brisket slow-cooked to smokey perfection, coated in a sticky premium BBQ bark, served sliced with pickled onions.",
    image: "/image_beef_brisket.jpg",
    prepTime: "4h",
    readyInMinutes: 240,
    servings: 6,
    category: "MAIN DISHES",
    calories: "810kcal",
    protein: "54g",
    tags: ["GrillMaster", "SlowCooked", "PremiumMeat"],
    dishTypes: ["Main Dish", "Beef", "BBQ"],
    ingredients: [
      { name: "800g high-quality beef brisket", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "2 tbsp dark brown sugar & smoked paprika", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 cup artisan barbecue sauce", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?q=80&w=150" },
      { name: "1/2 cup beef stock & apple cider vinegar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "Pickled red onions, for serving", image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=150" }
    ],
    instructions: [
      "Rub brisket thoroughly with a premium dry blend of brown sugar, smoked paprika, garlic powder, salt, and pepper.",
      "Sear brisket in a hot skillet on all sides to lock in juices.",
      "Transfer to a slow cooker or tight roasting pan, pour in beef stock and apple cider vinegar around it.",
      "Cook covered on low heat for 3.5 to 4 hours until exceptionally tender.",
      "Brush with gourmet BBQ sauce and roast uncovered at 200°C for 10 minutes to form a caramelized outer layer. Slice against the grain."
    ]
  },
  {
    id: "md-trend-12",
    title: "Creamy Mushroom Chicken Risotto",
    description: "Pure Italian comfort elegance. Rich, slow-stirred Arborio rice loaded with earthy wild mushrooms, pan-seared chicken, and heavily finished with Parmesan and truffle oil.",
    summary: "Pure Italian comfort elegance. Rich, slow-stirred Arborio rice loaded with earthy wild mushrooms, pan-seared chicken, and heavily finished with Parmesan and truffle oil.",
    image: "/image_chicken_risotto.jpg",
    prepTime: "40m",
    readyInMinutes: 40,
    servings: 4,
    category: "MAIN DISHES",
    calories: "660kcal",
    protein: "40g",
    tags: ["ItalianPremium", "CreamyDelight", "GourmetClassic"],
    dishTypes: ["Main Dish", "Risotto", "Chicken"],
    ingredients: [
      { name: "200g Arborio rice", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "200g chicken breast, cubed", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1.5 cups fresh mixed wild mushrooms", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=150" },
      { name: "3 cups warm chicken stock", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "1/2 cup grated Parmesan & truffle oil drizzle", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" }
    ],
    instructions: [
      "Sauté chicken cubes in olive oil until golden, then remove. In the same pan, cook sliced mushrooms until browned.",
      "Add Arborio rice to the mushrooms, toasting the grains lightly for 1 minute.",
      "Begin adding warm chicken stock, one ladle at a time, stirring continuously until absorbed before adding more.",
      "Repeat until the rice is creamy and perfectly cooked (approx. 18-20 minutes).",
      "Stir the chicken back in, add butter, Parmesan cheese, and a light drizzle of truffle oil before serving."
    ]
  },
  {
    id: "md-trend-13",
    title: "Ribeye Steak with Chimichurri Butter",
    description: "A high-protein masterpiece. Thick, juicy premium ribeye steak seared with a dark crust, topped with a melting, vibrant fresh-herb chimichurri butter compound.",
    summary: "A high-protein masterpiece. Thick, juicy premium ribeye steak seared with a dark crust, topped with a melting, vibrant fresh-herb chimichurri butter compound.",
    image: "/image_ribeye_chimichurri.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "MAIN DISHES",
    calories: "790kcal",
    protein: "48g",
    tags: ["PremiumSteak", "HighProtein", "GrillMaster"],
    dishTypes: ["Main Dish", "Beef", "Steak"],
    ingredients: [
      { name: "1 thick-cut premium ribeye steak (350g)", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "2 tbsp unsalted butter, softened", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "1/4 cup finely chopped parsley & oregano", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1 clove garlic, minced & red pepper flakes", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=150" },
      { name: "1 tbsp olive oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Make the compound butter: Mix softened butter with chopped parsley, oregano, minced garlic, red pepper flakes, and a drop of vinegar. Roll in wrap and chill.",
      "Bring ribeye to room temperature. Season heavily with coarse salt and cracked black pepper.",
      "Sear steak in a smoking hot cast-iron skillet with olive oil for 2-3 minutes per side.",
      "Baste with a little plain butter and garlic in the final minute for a perfect crust.",
      "Let steak rest for 5 minutes, slice elegantly, and top with a coin of the cold chimichurri compound butter to melt over it."
    ]
  },
  {
    id: "md-trend-14",
    title: "Crispy Korean Fried Chicken Supreme",
    description: "An international sensation. Double-fried, ultra-crunchy chicken thighs coated in a savory, glossy, and mildly spicy sweet gochujang glaze, topped with sesame.",
    summary: "An international sensation. Double-fried, ultra-crunchy chicken thighs coated in a savory, glossy, and mildly spicy sweet gochujang glaze, topped with sesame.",
    image: "/image_korean_chicken.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 4,
    category: "MAIN DISHES",
    calories: "740kcal",
    protein: "36g",
    tags: ["GlobalTrend", "CrispyLover", "ComfortFood"],
    dishTypes: ["Main Dish", "Chicken", "Fried"],
    ingredients: [
      { name: "300g boneless chicken thighs, cubed", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1/2 cup potato starch (for maximum crunch)", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "2 tbsp Gochujang (Korean chili paste)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "2 tbsp honey & 1 tbsp soy sauce", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "Toasted sesame seeds & vegetable oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Season chicken with ginger, garlic, salt, and pepper, then dredge completely in potato starch.",
      "Heat oil to 170°C and fry chicken for 5 minutes until light golden; remove and drain.",
      "Make the sauce: Simmer gochujang, honey, soy sauce, minced garlic, and a splash of water until bubbly and syrupy.",
      "Reheat oil to 190°C and fry chicken a second time for 2 minutes until intensely crispy and brown.",
      "Toss the hot crispy chicken directly into the warm glaze to coat completely, sprinkle with sesame seeds, and serve."
    ]
  },
  {
    id: "ds-trend-16",
    title: "Classic Italian Tiramisu Supreme",
    description: "The ultimate fine-dining dessert. Layers of coffee-dipped ladyfingers and a velvety, rich mascarpone cream, heavily dusted with premium cocoa powder.",
    summary: "The ultimate fine-dining dessert. Layers of coffee-dipped ladyfingers and a velvety, rich mascarpone cream, heavily dusted with premium cocoa powder.",
    image: "/image_tiramisu.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 4,
    category: "DESSERTS",
    calories: "420kcal",
    protein: "6g",
    tags: ["ItalianClassic", "NoBake", "CoffeeLover"],
    dishTypes: ["Dessert", "Cake", "Italian"],
    ingredients: [
      { name: "24 Premium Ladyfingers (Savoiardi)", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "250g Mascarpone cheese & 3 eggs", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 cup Strong brewed Espresso", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150" },
      { name: "1/2 cup Sugar & 2 tbsp Cocoa powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Whisk egg yolks with sugar until pale, then gently fold in smooth mascarpone cheese.",
      "Whisk egg whites to stiff peaks and fold lightly into the mascarpone mixture to create a fluffy cream.",
      "Quickly dip ladyfingers into cooled espresso and layer them tightly at the bottom of your dish.",
      "Spread half of the cream over the biscuits, repeat with another layer of dipped ladyfingers, and top with the remaining cream.",
      "Dust generously with dark cocoa powder and chill in the fridge for at least 4 hours before slicing."
    ]
  },
  {
    id: "ds-trend-02",
    title: "Molten Chocolate Lava Cake",
    description: "A viral favorite. A rich, decadent chocolate cake with a perfectly baked crust and an intensely glossy, oozing warm chocolate center.",
    summary: "A viral favorite. A rich, decadent chocolate cake with a perfectly baked crust and an intensely glossy, oozing warm chocolate center.",
    image: "/image_lava_cake.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "DESSERTS",
    calories: "490kcal",
    protein: "7g",
    tags: ["WarmDessert", "ChocolateOverload", "QuickLuxury"],
    dishTypes: ["Dessert", "Cake", "Chocolate"],
    ingredients: [
      { name: "100g High-quality Dark Chocolate", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "50g Unsalted Butter", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "2 large Eggs & 1/4 cup Sugar", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "2 tbsp All-purpose Flour", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F) and grease 2 ramekins generously with butter and cocoa powder.",
      "Melt dark chocolate and butter together in a heatproof bowl over a pot of simmering water.",
      "In a separate bowl, whisk eggs and sugar until thick and pale, then gently stir in the melted chocolate.",
      "Fold in the flour lightly until just combined. Divide the batter evenly into the prepared ramekins.",
      "Bake for exactly 10-12 minutes until the edges are firm but the center is still soft. Invert onto a plate and serve immediately."
    ]
  },
  {
    id: "ds-trend-03",
    title: "San Sebastian Burnt Cheesecake",
    description: "The globally trending crustless cheesecake, baked at high heat for a beautifully caramelized, burnt top and an ultra-creamy, custard-like center.",
    summary: "The globally trending crustless cheesecake, baked at high heat for a beautifully caramelized, burnt top and an ultra-creamy, custard-like center.",
    image: "/image_burnt_cheesecake.jpg",
    prepTime: "50m",
    readyInMinutes: 50,
    servings: 6,
    category: "DESSERTS",
    calories: "510kcal",
    protein: "8g",
    tags: ["TrendingCake", "CreamyDelight", "GourmetClassic"],
    dishTypes: ["Dessert", "Cake", "Cheesecake"],
    ingredients: [
      { name: "500g Premium Cream Cheese", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 cup Heavy Cream", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3 large Eggs & 3/4 cup Sugar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "1.5 tbsp Cornstarch", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 220°C (430°F) and line a cake pan with two overlapping sheets of parchment paper.",
      "Beat room-temperature cream cheese and sugar together until completely smooth and lump-free.",
      "Add eggs one at a time, mixing gently after each addition, then pour in the heavy cream.",
      "Sift in the cornstarch and mix slowly until a smooth, velvety batter forms.",
      "Pour into the pan and bake for 30-35 minutes until the top is deeply browned/burnt, but the cake still jiggles in the middle."
    ]
  },
  {
    id: "ds-trend-04",
    title: "New York Strawberry Cheesecake",
    description: "A dense and incredibly smooth premium cheesecake on a buttery Graham cracker crust, topped with a glossy, vibrant fresh strawberry glaze.",
    summary: "A dense and incredibly smooth premium cheesecake on a buttery Graham cracker crust, topped with a glossy, vibrant fresh strawberry glaze.",
    image: "/image_strawberry_cheesecake.jpg",
    prepTime: "1h",
    readyInMinutes: 60,
    servings: 8,
    category: "DESSERTS",
    calories: "530kcal",
    protein: "9g",
    tags: ["ClassicBake", "FruitGourmet", "CheesyDelight"],
    dishTypes: ["Dessert", "Cake", "Cheesecake"],
    ingredients: [
      { name: "150g Graham Crackers & 4 tbsp Butter", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "600g Premium Cream Cheese", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 cup Fresh Strawberries & Sour cream", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "3 Eggs & 1 cup White Sugar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" }
    ],
    instructions: [
      "Crush crackers, mix with melted butter, press tightly into a springform pan, and bake for 10 minutes at 160°C.",
      "Beat cream cheese and sugar until creamy, then blend in sour cream and eggs one by one.",
      "Pour batter over the crust and bake in a water bath at 160°C (325°F) for 1 hour until just set.",
      "Let it cool inside the oven slowly, then chill in the refrigerator overnight.",
      "Top with a homemade glaze made from simmered fresh strawberries and sugar before slicing."
    ]
  },
  {
    id: "ds-trend-05",
    title: "Gourmet Pistachio Kunafa Croissant",
    description: "The ultimate viral pastry fusion. A flaky, buttery baked croissant stuffed with crispy toasted kunafa pastry, premium pistachio cream, and sweet syrup.",
    summary: "The ultimate viral pastry fusion. A flaky, buttery baked croissant stuffed with crispy toasted kunafa pastry, premium pistachio cream, and sweet syrup.",
    image: "/image_kunafa_croissant.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "DESSERTS",
    calories: "560kcal",
    protein: "8g",
    tags: ["ViralFusion", "PistachioLover", "PastryArt"],
    dishTypes: ["Dessert", "Pastry"],
    ingredients: [
      { name: "2 large Premium Butter Croissants", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "50g Kunafa pastry dough", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "3 tbsp Authentic Pistachio Cream Spread", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 tbsp melted butter & crushed pistachios", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" }
    ],
    instructions: [
      "Chop kunafa dough finely and sauté in a skillet with melted butter until completely golden and crispy.",
      "Mix the crispy kunafa with 2 tablespoons of premium pistachio cream until well integrated.",
      "Slice croissants horizontally and stuff them generously with the crunchy pistachio kunafa filling.",
      "Bake in a preheated oven at 180°C (350°F) for 5-7 minutes until warm and exceptionally flaky.",
      "Drizzle with a touch of pistachio cream and top with crushed green pistachios."
    ]
  },
  {
    id: "ds-trend-06",
    title: "French Crème Brûlée Art",
    description: "A sophisticated fine-dining classic. A rich, silky vanilla bean custard base topped with a contrasting layer of hard, beautifully shattered caramelized sugar.",
    summary: "A sophisticated fine-dining classic. A rich, silky vanilla bean custard base topped with a contrasting layer of hard, beautifully shattered caramelized sugar.",
    image: "/image_creme_brulee.jpg",
    prepTime: "45m",
    readyInMinutes: 45,
    servings: 4,
    category: "DESSERTS",
    calories: "380kcal",
    protein: "5g",
    tags: ["FineDining", "FrenchPastry", "VanillaBean"],
    dishTypes: ["Dessert", "Custard", "French"],
    ingredients: [
      { name: "2 cups Heavy Cream & 1 Vanilla bean pod", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "5 large Egg Yolks", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1/2 cup White Sugar & Extra for torching", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 160°C (325°F). Heat heavy cream with scraped vanilla bean seeds until just simmering.",
      "Whisk egg yolks and sugar together in a bowl until pale, then slowly pour in the warm cream while whisking constantly.",
      "Strain the mixture into ramekins and place them in a large baking pan filled with hot water halfway up the sides.",
      "Bake for 35-40 minutes until the edges are set but the centers slightly jiggle. Cool and refrigerate for 3 hours.",
      "Before serving, sprinkle sugar evenly on top and caramelize using a kitchen blowtorch until hard and golden."
    ]
  },
  {
    id: "ds-trend-07",
    title: "Premium Lotus Biscoff Mousse",
    description: "An airy, ultra-creamy layered dessert cup loaded with crushed Biscoff cookies and a velvety white chocolate and speculoos cookie butter mousse.",
    summary: "An airy, ultra-creamy layered dessert cup loaded with crushed Biscoff cookies and a velvety white chocolate and speculoos cookie butter mousse.",
    image: "/image_lotus_mousse.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 4,
    category: "DESSERTS",
    calories: "460kcal",
    protein: "4g",
    tags: ["NoBake", "LotusBiscoff", "TrendingCups"],
    dishTypes: ["Dessert", "Mousse"],
    ingredients: [
      { name: "1 cup Heavy Whipping Cream", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "4 tbsp Lotus Biscoff Cookie Butter Spread", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "10 Lotus Biscoff Biscuits, crushed", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "100g Cream cheese, softened", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" }
    ],
    instructions: [
      "Whip heavy cream in a chilled bowl until stiff peaks form.",
      "In another bowl, beat cream cheese and 3 tablespoons of warmed Biscoff spread together until smooth.",
      "Gently fold the whipped cream into the Biscoff cream cheese mixture until a fluffy mousse forms.",
      "Layer crushed Biscoff cookies at the bottom of serving cups, then pipe the fluffy mousse on top.",
      "Drizzle with the remaining melted Biscoff spread and chill for 2 hours before serving."
    ]
  },
  {
    id: "ds-trend-08",
    title: "Red Velvet Lava Cookies",
    description: "Vibrant red velvet cookies with a rich hint of cocoa, baked with a secret core of premium white chocolate that flows out warm upon the first bite.",
    summary: "Vibrant red velvet cookies with a rich hint of cocoa, baked with a secret core of premium white chocolate that flows out warm upon the first bite.",
    image: "/image_red_velvet_cookie.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 8,
    category: "DESSERTS",
    calories: "390kcal",
    protein: "5g",
    tags: ["WarmDessert", "CookieTrend", "WhiteChocolate"],
    dishTypes: ["Dessert", "Cookie", "Chocolate"],
    ingredients: [
      { name: "1.5 cups Flour & 1 tbsp Cocoa powder", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/2 cup Butter & 1/2 cup Sugar", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" },
      { name: "100g Premium White Chocolate blocks", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 Egg & Red food coloring gel", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" }
    ],
    instructions: [
      "Cream butter and sugar, then beat in the egg and red food coloring until a deep, vibrant color is achieved.",
      "Fold in sifted flour, cocoa powder, and a pinch of baking soda to form a soft cookie dough.",
      "Divide dough into balls, flatten slightly, place a large chunk of premium white chocolate in the center, and roll back into a ball.",
      "Chill the cookie balls in the freezer for 15 minutes. Preheat oven to 180°C (350°F).",
      "Bake for 10-12 minutes. The outside should be set but soft. Serve warm for the liquid lava effect."
    ]
  },
  {
    id: "ds-trend-09",
    title: "Mango Sago Coconut Panna Cotta",
    description: "An elegant tropical fusion. A silky, smooth vanilla bean panna cotta layered with chewy sago pearls and a vibrant, fresh sweet mango purée reduction.",
    summary: "An elegant tropical fusion. A silky, smooth vanilla bean panna cotta layered with chewy sago pearls and a vibrant, fresh sweet mango purée reduction.",
    image: "/image_mango_panna_cotta.jpg",
    prepTime: "30m",
    readyInMinutes: 30,
    servings: 4,
    category: "DESSERTS",
    calories: "320kcal",
    protein: "4g",
    tags: ["TropicalTrend", "LightPremium", "VibrantColor"],
    dishTypes: ["Dessert", "Panna Cotta", "Tropical"],
    ingredients: [
      { name: "1 cup Heavy Cream & 1/2 cup Coconut Milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 large Sweet Ripe Mango, puréed", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1.5 tsp Gelatin powder & 1/4 cup Sugar", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "2 tbsp Mini Sago (Tapioca) pearls", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Bloom gelatin in cold water. Heat heavy cream, coconut milk, and sugar until warm; stir in gelatin until melted.",
      "Pour the cream mixture into glasses and chill for 2 hours until firmly set.",
      "Boil sago pearls in water until translucent, rinse under cold water, and drain well.",
      "Mix cooked sago pearls directly into the sweet fresh mango purée.",
      "Spoon the vibrant mango sago layer over the set panna cotta and garnish with fresh mint before serving."
    ]
  },
  {
    id: "ds-trend-10",
    title: "Fudgy Hazelnut Brownie Towers",
    description: "Rich, intensely fudgy dark chocolate brownies packed with roasted hazelnuts, served warm with a shiny drizzle of gourmet chocolate ganache.",
    summary: "Rich, intensely fudgy dark chocolate brownies packed with roasted hazelnuts, served warm with a shiny drizzle of gourmet chocolate ganache.",
    image: "/image_hazelnut_brownie.jpg",
    prepTime: "35m",
    readyInMinutes: 35,
    servings: 9,
    category: "DESSERTS",
    calories: "450kcal",
    protein: "6g",
    tags: ["FudgyBrownie", "NuttyPremium", "ChocolateOverload"],
    dishTypes: ["Dessert", "Brownie", "Chocolate"],
    ingredients: [
      { name: "150g Dark Chocolate & 100g Butter", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "3/4 cup Sugar & 2 large Eggs", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1/2 cup Flour & 1/4 cup Cocoa powder", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/2 cup Toasted Hazelnuts, chopped", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 175°C (345°F). Melt dark chocolate and butter together until silky smooth.",
      "Whisk eggs and sugar rigorously for 3 minutes until thick, pale, and foamy.",
      "Gently stir the chocolate butter mixture into the eggs, then fold in flour and cocoa powder.",
      "Fold in most of the chopped toasted hazelnuts and pour the thick batter into a lined baking pan.",
      "Bake for 20-22 minutes. Let cool slightly, cut into elegant squares, stack into a tower, and top with remaining nuts."
    ]
  },
  {
    id: "ds-trend-11",
    title: "Matcha White Chocolate Fondant",
    description: "An exquisite East Asian-inspired dessert. A vibrant green tea matcha cake with a perfectly baked exterior and a rich, flowing white chocolate lava core.",
    summary: "An exquisite East Asian-inspired dessert. A vibrant green tea matcha cake with a perfectly baked exterior and a rich, flowing white chocolate lava core.",
    image: "/image_matcha_fondant.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "DESSERTS",
    calories: "410kcal",
    protein: "6g",
    tags: ["MatchaLover", "ExoticTrend", "WarmDessert"],
    dishTypes: ["Dessert", "Cake", "Matcha"],
    ingredients: [
      { name: "100g Premium White Chocolate & 50g Butter", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1.5 tbsp Culinary Culinary Matcha Powder", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "2 Eggs & 3 tbsp Sugar", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=150" },
      { name: "1/4 cup All-purpose Flour", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F). Melt white chocolate and butter together until completely smooth.",
      "Whisk eggs and sugar in a separate bowl, then slowly pour in the melted white chocolate.",
      "Sift flour and high-grade matcha green tea powder into the mixture, folding gently until uniform.",
      "Pour the vibrant green batter into two heavily greased and floured ramekins.",
      "Bake for 11-13 minutes until the sides are stable but the middle is soft. Invert carefully onto plates and serve."
    ]
  },
  {
    id: "ds-trend-12",
    title: "Gourmet Salted Caramel Profiteroles",
    description: "Crisp, airy choux pastry puffs packed with luxury vanilla bean pastry cream, stacked and covered in a rich, warm handmade salted caramel glaze.",
    summary: "Crisp, airy choux pastry puffs packed with luxury vanilla bean pastry cream, stacked and covered in a rich, warm handmade salted caramel glaze.",
    image: "/image_profiteroles.jpg",
    prepTime: "1h",
    readyInMinutes: 60,
    servings: 6,
    category: "DESSERTS",
    calories: "440kcal",
    protein: "7g",
    tags: ["FrenchPastry", "SaltedCaramel", "PastryArt"],
    dishTypes: ["Dessert", "Pastry", "Caramel"],
    ingredients: [
      { name: "Choux pastry puffs (flour, eggs, butter)", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1.5 cups Milk & 3 Egg yolks (for pastry cream)", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1/2 cup Sugar & 3 tbsp Heavy Cream", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tsp Sea Salt flakes", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Make pastry cream: Cook milk, egg yolks, sugar, and cornstarch until thick, chill fully.",
      "Pipe the chilled vanilla pastry cream inside baked, hollow choux pastry puffs through a small hole.",
      "Make salted caramel: Melt sugar in a pan until amber, stir in warm heavy cream, butter, and sea salt flakes.",
      "Arrange filled profiteroles into a beautiful pyramid stack on a presentation plate.",
      "Drizzle the warm, glossy salted caramel glaze heavily over the profiteroles before serving."
    ]
  },
  {
    id: "ds-trend-13",
    title: "Vibrant Berry Pavlova Clouds",
    description: "An elegant, cloud-like crisp meringue nest with a soft, marshmallowy interior, loaded with fresh whipped cream and a mountain of tart wild berries.",
    summary: "An elegant, cloud-like crisp meringue nest with a soft, marshmallowy interior, loaded with fresh whipped cream and a mountain of tart wild berries.",
    image: "/image_berry_pavlova.jpg",
    prepTime: "1h 15m",
    readyInMinutes: 75,
    servings: 6,
    category: "DESSERTS",
    calories: "290kcal",
    protein: "4g",
    tags: ["LightPremium", "FruitGourmet", "MeringueArt"],
    dishTypes: ["Dessert", "Meringue", "Fruit"],
    ingredients: [
      { name: "4 large Egg Whites", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 cup Superfine Caster Sugar", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 cup Fresh Whipped Cream", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Mixed Raspberries, Blueberries & Strawberries", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" }
    ],
    instructions: [
      "Preheat oven to 120°C (250°F). Whisk egg whites to soft peaks, then add sugar slowly, one tablespoon at a time, until stiff and glossy.",
      "Shape the glossy meringue into round nests on a baking sheet lined with parchment paper.",
      "Bake for 1 hour, then turn off the oven and let the meringue cool completely inside with the door slightly ajar.",
      "Fill the center of the crisp meringue cloud with fresh, unsweetened whipped cream.",
      "Top abundantly with fresh berries and a light dusting of powdered sugar."
    ]
  },
  {
    id: "ds-trend-14",
    title: "Artisanal Churros with Dark Ganache",
    description: "Crispy, golden-fried Spanish dough pastries rolled heavily in aromatic cinnamon sugar, served alongside a thick, rich dark chocolate dipping sauce.",
    summary: "Crispy, golden-fried Spanish dough pastries rolled heavily in aromatic cinnamon sugar, served alongside a thick, rich dark chocolate dipping sauce.",
    image: "/image_churros.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 4,
    category: "DESSERTS",
    calories: "410kcal",
    protein: "4g",
    tags: ["CrispyLover", "GlobalComfort", "ChocolateDipped"],
    dishTypes: ["Dessert", "Pastry", "Fried"],
    ingredients: [
      { name: "1 cup Flour & 2 tbsp Butter", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1/4 cup Cinnamon sugar mix", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "100g Dark Chocolate & 1/2 cup Heavy cream", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "Vegetable oil (for frying)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Boil water, butter, and a pinch of salt together. Stir in flour vigorously until a smooth ball of dough forms, then let cool.",
      "Transfer the dough into a sturdy pastry bag fitted with a large star nozzle.",
      "Pipe 10cm strips directly into hot vegetable oil, frying for 4-5 minutes until intensely golden and crispy.",
      "Drain immediately on paper towels, then roll thoroughly in the cinnamon sugar mixture.",
      "Make the ganache: Melt dark chocolate into simmering heavy cream until smooth. Serve hot alongside the churros."
    ]
  },
  {
    id: "ds-trend-15",
    title: "Gourmet White Chocolate Raspberry Macarons",
    description: "Premium, delicate French almond meringue shells with a perfect chew, sandwiched around a velvety white chocolate ganache and a tangy raspberry center.",
    summary: "Premium, delicate French almond meringue shells with a perfect chew, sandwiched around a velvety white chocolate ganache and a tangy raspberry center.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600",
    prepTime: "1h 30m",
    readyInMinutes: 90,
    servings: 12,
    category: "DESSERTS",
    calories: "360kcal",
    protein: "5g",
    tags: ["FrenchPastry", "FineDining", "AlmondFlour"],
    dishTypes: ["Dessert", "Pastry", "Macaron"],
    ingredients: [
      { name: "1 cup Almond Flour & 1 cup Powdered sugar", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "3 large Egg Whites & 1/4 cup Granulated sugar", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "100g White Chocolate & 3 tbsp Cream", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "2 tbsp Raspberry jam jam reduction", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" }
    ],
    instructions: [
      "Whisk egg whites and granulated sugar to a stiff, glossy meringue. Fold in sifted almond flour and powdered sugar precisely.",
      "Pipe small rounds onto a baking sheet lined with silicone. Tap the tray to release air and let sit for 45 minutes until a dry skin forms.",
      "Bake at 150°C (300°F) for 14-15 minutes until macarons develop stable 'feet'. Let cool completely.",
      "Make filling: Melt white chocolate with heavy cream until smooth, then chill until it thickens into a pipeable ganache.",
      "Pipe a ring of white chocolate ganache on a shell, add a dot of raspberry jam reduction f center, and top with a second shell."
    ]
  },
  {
    id: "dr-trend-01",
    title: "Vibrant Iced Matcha Strawberry Latte",
    description: "The ultimate global café trend. Layers of sweet, fresh strawberry purée, creamy milk, and a bold, vibrant green layer of premium ceremonial matcha.",
    summary: "The ultimate global café trend. Layers of sweet, fresh strawberry purée, creamy milk, and a bold, vibrant green layer of premium ceremonial matcha.",
    image: "https://i.pinimg.com/736x/fe/f8/9a/fef89a3c951484f6fa7b15dee822d1cc.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "DRINKS",
    calories: "210kcal",
    protein: "4g",
    tags: ["MatchaLover","IcedLatte","ViralDrink"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1 tsp Premium Ceremonial Matcha", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1/2 cup Fresh Strawberries, muddled", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1 cup Whole Milk or Oat Milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tbsp Honey or Vanilla Syrup", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Whisk matcha powder with 2 tbsp of hot water until smooth and frothy.",
      "Muddle fresh strawberries with honey at the bottom of a tall glass.",
      "Fill the glass with ice cubes, then gently pour the milk over the strawberries.",
      "Slowly layer the whisked matcha on top to create a beautiful, distinct color contrast."
    ]
  },
  {
    id: "dr-trend-02",
    title: "Premium Blue Lagoon Mocktail",
    description: "An upscale, intensely refreshing summer mocktail. A vibrant blue infusion of citrusy blue curaçao syrup, fresh lime juice, and sparkling sprite.",
    summary: "An upscale, intensely refreshing summer mocktail. A vibrant blue infusion of citrusy blue curaçao syrup, fresh lime juice, and sparkling sprite.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "140kcal",
    protein: "0g",
    tags: ["Refreshing","MocktailArt","SummerVibes"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "2 tbsp Blue Curaçao Syrup (Non-Alcoholic)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 tbsp Fresh Lime Juice & Mint leaves", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "1 cup Lemon-Lime Soda (Sprite)", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Lime slices & Maraschino cherry", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" }
    ],
    instructions: [
      "Fill a premium cocktail glass to the top with crushed ice.",
      "Pour fresh lime juice and blue curaçao syrup directly over the ice.",
      "Top up the glass slowly with chilled lemon-lime soda.",
      "Garnish with a lime wheel, fresh mint, and a cherry, then stir gently before sipping."
    ]
  },
  {
    id: "dr-trend-03",
    title: "Classic Fresh Passion Fruit Mojito",
    description: "A tropical twist on a classic. Muddled fresh mint, lime, and tart passion fruit pulp topped with sparkling water and plenty of crushed ice.",
    summary: "A tropical twist on a classic. Muddled fresh mint, lime, and tart passion fruit pulp topped with sparkling water and plenty of crushed ice.",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "160kcal",
    protein: "1g",
    tags: ["TropicalTrend","MojitoLover","FreshFruit"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1 Fresh Passion Fruit (pulp and seeds)", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "8-10 Fresh Mint leaves & 1/2 Lime", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1.5 tbsp Pure Cane Sugar", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1 cup Chilled Sparkling Water", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" }
    ],
    instructions: [
      "Muddle lime wedges, mint leaves, and cane sugar gently in a glass to release essential oils.",
      "Scoop out the fresh passion fruit pulp and add it to the glass.",
      "Pack the glass tightly with crushed ice.",
      "Pour chilled sparkling water to the top and churn with a spoon to lift the fruit up."
    ]
  },
  {
    id: "dr-trend-04",
    title: "Creamy Spanish Iced Latte (Café con Bonbón)",
    description: "A viral, velvety coffee delight. Strong, rich espresso poured over a sweet layer of premium condensed milk and chilled creamy whole milk.",
    summary: "A viral, velvety coffee delight. Strong, rich espresso poured over a sweet layer of premium condensed milk and chilled creamy whole milk.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "280kcal",
    protein: "6g",
    tags: ["CoffeeLover","CreamyDelight","SweetFix"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "2 shots Sweet Espresso", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150" },
      { name: "2 tbsp Premium Condensed Milk", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "3/4 cup Cold Milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Ice cubes", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Pour condensed milk into the bottom of a glass as the base layer.",
      "Add plenty of ice cubes, then carefully pour in the cold whole milk.",
      "Brew two fresh shots of rich espresso.",
      "Slowly pour the hot espresso over the ice to create a stunning, distinct layered look."
    ]
  },
  {
    id: "dr-trend-05",
    title: "Vibrant Dragon Fruit Mango Smoothie",
    description: "An incredibly striking, exotic smoothie. Packed with rich antioxidants, combining deep pink pitaya (dragon fruit) and sweet sun-ripened mango chunks.",
    summary: "An incredibly striking, exotic smoothie. Packed with rich antioxidants, combining deep pink pitaya (dragon fruit) and sweet sun-ripened mango chunks.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600",
    prepTime: "8m",
    readyInMinutes: 8,
    servings: 1,
    category: "DRINKS",
    calories: "190kcal",
    protein: "3g",
    tags: ["ExoticTrend","HealthyPremium","VibrantColor"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1/2 cup Frozen Pink Pitaya (Dragon Fruit)", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1/2 cup Ripe Mango chunks", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1/2 cup Coconut Water", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tbsp Chia seeds & Greek Yogurt", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" }
    ],
    instructions: [
      "Blend frozen pink dragon fruit with coconut water until thick and completely smooth; pour into a glass.",
      "Rinse the blender, then blend the mango chunks with Greek yogurt until velvety.",
      "Gently layer or swirl the yellow mango smoothie over the pink dragon fruit base.",
      "Top with a sprinkle of chia seeds and a fresh slice of dragon fruit to serve."
    ]
  },
  {
    id: "dr-trend-06",
    title: "Gourmet Creamy Pistachio Milkshake",
    description: "Luxury in a glass. High-quality vanilla bean ice cream blended with authentic Italian pistachio paste, topped with fresh whipped cream and crushed green pistachios.",
    summary: "Luxury in a glass. High-quality vanilla bean ice cream blended with authentic Italian pistachio paste, topped with fresh whipped cream and crushed green pistachios.",
    image: "https://i.pinimg.com/736x/cb/08/0f/cb080f7051f5b2a383c554aa75cad199.jpg",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "460kcal",
    protein: "8g",
    tags: ["PistachioLover","CreamyDelight","LuxuryTreat"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "2 scoops Premium Vanilla Ice Cream", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1.5 tbsp Authentic Pistachio Cream spread", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1/2 cup Cold Whole Milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Whipped cream & 1 tsp Crushed Pistachios", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=150" }
    ],
    instructions: [
      "Drizzle a little pistachio paste around the inside walls of your presentation glass.",
      "In a high-speed blender, combine vanilla ice cream, pistachio cream, and cold milk.",
      "Blend until completely thick, smooth, and pale green.",
      "Pour into the glass, top with a generous cloud of whipped cream, and dust with crushed pistachios."
    ]
  },
  {
    id: "dr-trend-07",
    title: "Sparkling Pomegranate Rose Mocktail",
    description: "An elegant, floral fine-dining mocktail. Deep ruby pomegranate juice combined with a hint of sweet rose water, fresh lime, and premium tonic.",
    summary: "An elegant, floral fine-dining mocktail. Deep ruby pomegranate juice combined with a hint of sweet rose water, fresh lime, and premium tonic.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "110kcal",
    protein: "0g",
    tags: ["FineDining","FloralNotes","LightPremium"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1/2 cup Organic Pomegranate Juice", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1/2 tsp Pure Culinary Rose Water", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1 tbsp Lime juice & Fresh rosemary", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "1/2 cup Premium Tonic or Sparkling water", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" }
    ],
    instructions: [
      "In a cocktail shaker, mix pomegranate juice, lime juice, and rose water with ice cubes; shake well.",
      "Strain into an elegant coupe or tall wine glass filled with fresh ice.",
      "Top up the glass with sparkling water or premium tonic.",
      "Garnish with pomegranate seeds and a slammed rosemary sprig for aroma."
    ]
  },
  {
    id: "dr-trend-08",
    title: "Avocado Almond Honey Smoothie",
    description: "A ultra-creamy, high-energy gourmet staple. Velvety ripe avocado blended with cold milk, raw honey, and rich almond butter, topped with sliced almonds.",
    summary: "A ultra-creamy, high-energy gourmet staple. Velvety ripe avocado blended with cold milk, raw honey, and rich almond butter, topped with sliced almonds.",
    image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "380kcal",
    protein: "9g",
    tags: ["HighProtein","HealthyPremium","CreamyDelight"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1/2 Large Ripe Avocado", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "1 tbsp Almond Butter & Raw Honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1 cup Chilled Milk (or Almond Milk)", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tsp Flaked Almonds, toasted", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Scoop out the flesh of the avocado and place it into a blender.",
      "Add the almond butter, raw honey, and pour in the chilled milk.",
      "Blend on high speed until completely thick, satiny, and smooth.",
      "Pour into a clean glass and decorate with toasted flaked almonds on top."
    ]
  },
  {
    id: "dr-trend-09",
    title: "Salted Caramel Cold Brew Foam",
    description: "The coffee shop favorite. Smooth, slow-steeped specialty cold brew coffee topped with a thick, velvety layer of salted caramel cold milk foam.",
    summary: "The coffee shop favorite. Smooth, slow-steeped specialty cold brew coffee topped with a thick, velvety layer of salted caramel cold milk foam.",
    image: "https://foxeslovelemons.com/wp-content/uploads/2022/08/Salted-Caramel-Cream-Cold-Brew-5-728x1094.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "DRINKS",
    calories: "140kcal",
    protein: "3g",
    tags: ["CoffeeLover","ColdBrew","SaltedCaramel"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1 cup Premium Cold Brew Coffee", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150" },
      { name: "1/4 cup Skim Milk (foams best)", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tbsp Salted Caramel Sauce/Syrup", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "Ice cubes & Sea salt", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Fill a glass with ice cubes and pour in the rich cold brew coffee.",
      "In a small deep cup, combine skim milk, salted caramel sauce, and a tiny pinch of sea salt.",
      "Use a handheld milk frother for 30-45 seconds until a thick, velvety cold foam forms.",
      "Gently spoon or pour the sweet salted caramel foam directly on top of the cold brew."
    ]
  },
  {
    id: "dr-trend-10",
    title: "Fresh Ginger Lemonade Infusion",
    description: "Zesty, sharp, and deeply refreshing. Freshly squeezed lemons blended with pungent ginger root juice, sweetened lightly and served ice cold.",
    summary: "Zesty, sharp, and deeply refreshing. Freshly squeezed lemons blended with pungent ginger root juice, sweetened lightly and served ice cold.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "DRINKS",
    calories: "95kcal",
    protein: "1g",
    tags: ["Refreshing","HealthyPremium","SharpFlavor"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "Juice of 2 large Fresh Lemons", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "2cm Fresh Ginger Root, juiced", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "2 tbsp Agave Nectar or Sugar syrup", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" },
      { name: "1.5 cups Chilled purified water & Mint", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" }
    ],
    instructions: [
      "Grate ginger root and squeeze it hard through a sieve to extract pure, fiery ginger juice.",
      "In a pitcher, combine the fresh lemon juice, ginger juice, and agave nectar.",
      "Pour in the chilled water and stir vigorously until the sweetener is completely dissolved.",
      "Pour into ice-filled glasses and garnish with a lemon wheel and fresh mint."
    ]
  },
  {
    id: "dr-trend-11",
    title: "Creamy Lotus Biscoff Frappé",
    description: "The ultimate blended indulgent coffee. A thick frappé made with espresso, ice, cookie butter, and milk, finished with whipped cream and cookie crumbs.",
    summary: "The ultimate blended indulgent coffee. A thick frappé made with espresso, ice, cookie butter, and milk, finished with whipped cream and cookie crumbs.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "430kcal",
    protein: "5g",
    tags: ["LotusBiscoff","CoffeeLover","BlendedIce"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1 shot Strong Espresso, cooled", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150" },
      { name: "1.5 tbsp Lotus Biscoff Cookie Spread", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1/2 cup Milk & 1 cup Ice cubes", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "2 crushed Biscoff Cookies & Whipped cream", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" }
    ],
    instructions: [
      "Add espresso, cookie spread, milk, and ice cubes into a heavy-duty blender.",
      "Blend on high until the ice is completely crushed into a velvety, thick slush consistency.",
      "Pour into a glass, add whipped cream, and top with crumbs of crushed Biscoff cookies."
    ]
  },
  {
    id: "dr-trend-12",
    title: "Sparkling Hibiscus Berry Tea",
    description: "Vibrant and tart. Brewed premium dried hibiscus flowers infused with mixed berry syrup, topped with sparkling soda water for an effervescent touch.",
    summary: "Vibrant and tart. Brewed premium dried hibiscus flowers infused with mixed berry syrup, topped with sparkling soda water for an effervescent touch.",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 1,
    category: "DRINKS",
    calories: "120kcal",
    protein: "0g",
    tags: ["VibrantColor","TeaArt","Refreshing"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "2 tbsp Dried Hibiscus Flowers", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1.5 tbsp Mixed Berry syrup", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1 cup Carbonated Soda Water", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Lemon slices for garnish", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" }
    ],
    instructions: [
      "Steep dried hibiscus flowers in 1/2 cup of boiling water for 10 minutes to create a concentrated dark ruby tea; strain and cool.",
      "Fill a tall presentation glass with ice cubes and add the mixed berry syrup.",
      "Pour the cooled concentrated hibiscus tea over the ice.",
      "Top with sparkling soda water, stir gently, and serve garnished with a slice of lemon."
    ]
  },
  {
    id: "dr-trend-13",
    title: "Creamy Iced Taro Bubble Tea",
    description: "The world-famous boba sensation. Sweet, purple taro root powder shaken with creamy milk and ice, layered over soft, chewy brown sugar tapioca pearls.",
    summary: "The world-famous boba sensation. Sweet, purple taro root powder shaken with creamy milk and ice, layered over soft, chewy brown sugar tapioca pearls.",
    image: "https://tyberrymuch.com/wp-content/uploads/2022/07/taro-milk-tea-recipe-1-735x735.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 1,
    category: "DRINKS",
    calories: "340kcal",
    protein: "4g",
    tags: ["GlobalTrend","BobaTime","SweetFix"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "2 tbsp Premium Taro Powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "1/4 cup Quick-cook Tapioca Pearls", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "1 cup Creamy Whole Milk or Coconut milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "2 tbsp Dark Brown Sugar syrup", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Boil tapioca pearls until chewy, drain and coat thoroughly with warm brown sugar syrup.",
      "Dissolve taro powder in 1/4 cup of warm water, then shake with cold milk and ice cubes in a shaker.",
      "Spoon the sweet tapioca pearls into the bottom of a glass, coating the inner walls with syrup.",
      "Pour the shaken purple taro milk carefully into the glass and serve with a wide boba straw."
    ]
  },

  {
    id: "dr-trend-15",
    title: "Fresh Cucumber Mint Cooler",
    description: "The ultimate detox refreshment. Crisp english cucumber blended with fresh mint leaves, lime juice, and sparkling mineral water. Light and crisp.",
    summary: "The ultimate detox refreshment. Crisp english cucumber blended with fresh mint leaves, lime juice, and sparkling mineral water. Light and crisp.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=600",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "DRINKS",
    calories: "60kcal",
    protein: "1g",
    tags: ["Refreshing","DetoxPremium","LowCarb"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "1/2 Fresh Crisp Cucumber, peeled", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=150" },
      { name: "10 Fresh Mint leaves & Juice of 1 Lime", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" },
      { name: "1 cup Chilled Sparkling Mineral Water", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "1 tsp Agave syrup for balance", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Blend cucumber chunks, mint leaves, lime juice, and agave syrup together until fully liquefied.",
      "Strain the green mixture through a fine mesh sieve into a glass to remove fibers.",
      "Add plenty of ice cubes to the glass.",
      "Top with chilled sparkling mineral water and stir briefly with a long spoon before serving."
    ]
  },
  {
    id: "dr-premium-hot-choco",
    title: "Ultimate Belgian Hot Chocolate",
    description: "Rich, comforting winter luxury. Pure high-quality Belgian dark and milk chocolate melted directly into steaming whole milk, topped with a mountain of fresh whipped cream and chocolate drizzle.",
    summary: "Rich, comforting winter luxury. Pure high-quality Belgian dark and milk chocolate melted directly into steaming whole milk, topped with a mountain of fresh whipped cream and chocolate drizzle.",
    image: "https://i.pinimg.com/1200x/4e/f3/70/4ef370df00bc4064e86e6b5fa1d4a2da.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "DRINKS",
    calories: "390kcal",
    protein: "8g",
    tags: ["WarmComfort", "ChocolateOverload", "LuxuryTreat"],
    dishTypes: ["Drink"],
    ingredients: [
      { name: "50g Real Belgian Dark Chocolate", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=150" },
      { name: "Fresh Whole Milk", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=150" },
      { name: "Whipped Cream & Chocolate Syrup", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" }
    ],
    instructions: [
      "Heat whole milk in a small saucepan over medium heat until steaming.",
      "Add premium Belgian chocolate chunks and whisk continuously until melted and glossy.",
      "Pour into a premium glass, top with a generous cloud of whipped cream, and drizzle with chocolate syrup."
    ]
  },
  {
    id: "dish-deep-pie",
    title: "Gourmet Deep-Dish Pepperoni Meat Pie",
    description: "A spectacular, ultra-savory deep-dish creation. Layers of seasoned minced meat, melted mozzarella cheese, and crispy premium pepperoni slices inside a golden, buttery crust.",
    summary: "A spectacular, ultra-savory deep-dish creation. Layers of seasoned minced meat, melted mozzarella cheese, and crispy premium pepperoni slices inside a golden, buttery crust.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    prepTime: "35m",
    readyInMinutes: 35,
    servings: 4,
    category: "MAIN DISHES",
    calories: "580kcal",
    protein: "28g",
    tags: ["GourmetSavory", "DeepDish", "MeatLover"],
    dishTypes: ["Dinner", "Gourmet", "Meat Pie", "Premium"],
    ingredients: [
      { name: "Premium Pepperoni Slices", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=150" },
      { name: "Seasoned Minced Beef Filling", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "Shredded Mozzarella Cheese", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" }
    ],
    instructions: [
      "Press the buttery dough into a deep-dish pan, forming high side walls.",
      "Fill the crust with the savory, seasoned minced meat mixture.",
      "Top with a thick layer of mozzarella cheese and arrange pepperoni slices evenly on top.",
      "Bake at 200°C until the crust is golden brown and the cheese is bubbling perfectly."
    ]
  }
];

export const fitnessMeals: Recipe[] = [
  {
    id: "fit-meal-01",
    title: "High-Protein Salmon & Quinoa Bowl",
    description: "Premium grilled Atlantic salmon fillet served over a bed of fluffy tri-color quinoa, steamed broccoli florets, and a light lemon-herb drizzle.",
    summary: "Premium grilled Atlantic salmon fillet served over a bed of fluffy tri-color quinoa, steamed broccoli florets, and a light lemon-herb drizzle.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600",
    pinterestImage: "fitness_salmon_quinoa.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "520kcal",
    protein: "42g",
    tags: ["HighProtein", "Omega3", "CleanEating"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "200g Fresh Salmon Fillet", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "1/2 cup Tri-color Quinoa", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "1 cup Broccoli Florets", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "1 tbsp Olive Oil & Lemon", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Season salmon with salt, pepper, and lemon juice, then grill for 4-5 minutes on each side.",
      "Rinse and boil quinoa in water or vegetable broth for 15 minutes until fluffy.",
      "Steam broccoli florets until tender-crisp (about 5 minutes).",
      "Assemble the bowl with quinoa as the base, top with salmon and broccoli, and drizzle with olive oil."
    ]
  },
  {
    id: "fit-meal-02",
    title: "Lean Grilled Chicken Breast & Sweet Potato",
    description: "Juicy, tender marinated chicken breast grilled to perfection, served with roasted sweet potato wedges and crisp asparagus spears.",
    summary: "Juicy, tender marinated chicken breast grilled to perfection, served with roasted sweet potato wedges and crisp asparagus spears.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=600",
    pinterestImage: "fitness_chicken_sweet_potato.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "480kcal",
    protein: "45g",
    tags: ["LeanBulk", "LowFat", "MealPrep"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "200g Boneless Chicken Breast", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1 Large Sweet Potato", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" },
      { name: "6-8 Fresh Asparagus Spears", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Cut sweet potato into wedges, toss with a touch of paprika and olive oil, and bake at 200°C for 20 minutes.",
      "Grill chicken breast over medium-high heat for 6-7 minutes per side until the internal temperature reaches 75°C.",
      "Sauté asparagus in a pan with garlic salt for 3-4 minutes.",
      "Serve together hot as a classic high-performance fitness meal."
    ]
  },
  {
    id: "fit-meal-03",
    title: "Gourmet Avocado Beef Stir-Fry",
    description: "Lean beef strips flash-fried with colorful bell peppers, sweet onions, and finished with fresh avocado slices for healthy fats.",
    summary: "Lean beef strips flash-fried with colorful bell peppers, sweet onions, and finished with fresh avocado slices for healthy fats.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    pinterestImage: "fitness_beef_stir_fry.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "550kcal",
    protein: "38g",
    tags: ["HealthyFats", "KetoFriendly", "LowCarb"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "180g Lean Beef Sirloin strips", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1/2 Ripe Avocado, sliced", image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=150" },
      { name: "Mixed Bell Peppers & Onion", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "1 tbsp Low-Sodium Soy Sauce", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Heat a non-stick skillet with a drop of oil and sear the beef strips until browned; remove and set aside.",
      "In the same skillet, toss in sliced peppers and onions, cooking until tender-crisp.",
      "Return beef to the pan, pour in soy sauce, and toss everything together for 1 minute.",
      "Plate the stir-fry and garnish with fresh avocado slices just before serving."
    ]
  },
  {
    id: "fit-meal-04",
    title: "Creamy Protein Oatmeal Bowl",
    description: "Rolled oats cooked in almond milk, mixed with premium whey protein powder, topped with fresh berries, chia seeds, and almond butter.",
    summary: "Rolled oats cooked in almond milk, mixed with premium whey protein powder, topped with fresh berries, chia seeds, and almond butter.",
    image: "https://www.simplyquinoa.com/wp-content/uploads/2023/08/protein-oatmeal-21.jpg",
    pinterestImage: "fitness_protein_oats.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "FITNESS MEALS",
    calories: "410kcal",
    protein: "32g",
    tags: ["BreakfastFit", "HighFiber", "MuscleRecovery"],
    dishTypes: ["Fitness", "Healthy", "Breakfast"],
    ingredients: [
      { name: "1/2 cup Rolled Oats", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "1 scoop Premium Whey Protein", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=150" },
      { name: "1/2 cup Mixed Fresh Berries", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1 tbsp Almond Butter", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Cook oats with almond milk in a small saucepan over medium heat until creamy.",
      "Remove from heat, let cool slightly for 1 minute, then vigorously stir in the protein powder until fully smooth.",
      "Pour into a bowl and arrange berries and chia seeds beautifully on top.",
      "Finish with a generous drizzle of almond butter."
    ]
  },
  {
    id: "fit-meal-05",
    title: "Zesty Garlic Shrimp Pasta",
    description: "High-protein shrimp sautéed with garlic and red pepper flakes, tossed with whole-wheat spaghetti and fresh cherry tomatoes.",
    summary: "High-protein shrimp sautéed with garlic and red pepper flakes, tossed with whole-wheat spaghetti and fresh cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600",
    pinterestImage: "fitness_shrimp_pasta.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "460kcal",
    protein: "35g",
    tags: ["CleanCarbs", "HighProtein", "SeafoodFit"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "150g Cleaned Shrimp", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=150" },
      { name: "75g Whole-Wheat Spaghetti", image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=150" },
      { name: "1 cup Cherry Tomatoes & Spinach", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "2 cloves Fresh Garlic, minced", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Boil whole-wheat spaghetti in salted water according to package directions; drain.",
      "Sauté minced garlic and shrimp in a pan with olive oil until shrimp turn pink (3-4 minutes).",
      "Add halved cherry tomatoes and spinach to the pan, cooking until spinach wilts.",
      "Toss the pasta into the skillet, combine well with the shrimp mixture, and season with black pepper."
    ]
  },
  {
    id: "fit-meal-06",
    title: "Mediterranean Tuna Salad Wrap",
    description: "Flaked albacore tuna mixed with Greek yogurt, red onions, and cucumbers, wrapped tightly in a high-fiber whole-wheat tortilla.",
    summary: "Flaked albacore tuna mixed with Greek yogurt, red onions, and cucumbers, wrapped tightly in a high-fiber whole-wheat tortilla.",
    image: "https://i.pinimg.com/736x/86/43/a8/8643a880a09de38f011ca48bbd2c1bac.jpg",
    pinterestImage: "fitness_tuna_wrap.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 1,
    category: "FITNESS MEALS",
    calories: "380kcal",
    protein: "34g",
    tags: ["NoCook", "QuickLunch", "LowCalorie"],
    dishTypes: ["Fitness", "Healthy", "Lunch"],
    ingredients: [
      { name: "1 Can Tuna in water, drained", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=150" },
      { name: "2 tbsp Plain Greek Yogurt", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1 High-Fiber Whole-Wheat Tortilla", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=150" },
      { name: "Chopped Cucumber & Red Onion", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" }
    ],
    instructions: [
      "In a small bowl, mix the drained tuna, Greek yogurt, diced cucumber, and red onion together.",
      "Season with a pinch of salt, pepper, and a squeeze of fresh lime juice.",
      "Lay the tortilla flat, spread the tuna mixture evenly across the center.",
      "Roll up tightly, slice in half, and enjoy a quick, clean fitness wrap."
    ]
  },
  {
    id: "fit-meal-07",
    title: "Egg White & Turkey Bacon Frittata",
    description: "Fluffy baked egg whites packed with diced turkey bacon, baby spinach, mushrooms, and a sprinkle of low-fat feta cheese.",
    summary: "Fluffy baked egg whites packed with diced turkey bacon, baby spinach, mushrooms, and a sprinkle of low-fat feta cheese.",
    image: "https://mycleo.tv/wp-content/uploads/sites/79/2026/04/17762653289341.jpg?quality=80&strip=all",
    pinterestImage: "fitness_egg_frittata.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "290kcal",
    protein: "36g",
    tags: ["LowCarb", "KetoFriendly", "HighProtein"],
    dishTypes: ["Fitness", "Healthy", "Breakfast"],
    ingredients: [
      { name: "1 cup Liquid Egg Whites", image: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?q=80&w=150" },
      { name: "2 slices Turkey Bacon, chopped", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1 cup Mushrooms & Spinach", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "20g Low-Fat Feta Cheese", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" }
    ],
    instructions: [
      "Sauté chopped turkey bacon, mushrooms, and spinach in an oven-safe skillet until cooked.",
      "Pour egg whites over the toppings evenly, ensuring they cover the pan.",
      "Crumble feta cheese over the top and let the edges cook on the stovetop for 2 minutes.",
      "Transfer the skillet to a preheated oven at 180°C and bake for 8-10 minutes until completely set."
    ]
  },
  {
    id: "fit-meal-08",
    title: "Lean Turkey Meatballs & Zoodles",
    description: "Baked extra-lean turkey meatballs served over fresh spiralized zucchini noodles, topped with organic marinara sauce.",
    summary: "Baked extra-lean turkey meatballs served over fresh spiralized zucchini noodles, topped with organic marinara sauce.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600",
    pinterestImage: "fitness_turkey_zoodles.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "360kcal",
    protein: "38g",
    tags: ["LowCarb", "WeightLoss", "CleanEating"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "200g Lean Ground Turkey", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "2 Large Zucchinis (spiralized)", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "1/2 cup Organic Marinara Sauce", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" }
    ],
    instructions: [
      "Season ground turkey with garlic powder, herbs, roll into meatballs, and bake at 190°C for 15-18 minutes.",
      "Spiralize zucchinis into thin noodle strands using a spiralizer.",
      "Flash-fry zucchini noodles in a pan for just 2 minutes to keep them firm; drain any excess water.",
      "Warm up marinara sauce, pour over zoodles, and top with the hot turkey meatballs."
    ]
  },
  {
    id: "fit-meal-09",
    title: "Teriyaki Tofu Edamame Power Bowl",
    description: "Crispy baked organic tofu cubes tossed in a light homemade teriyaki glaze, paired with shelled edamame and brown rice.",
    summary: "Crispy baked organic tofu cubes tossed in a light homemade teriyaki glaze, paired with shelled edamame and brown rice.",
    image: "https://i.pinimg.com/1200x/5a/9c/bf/5a9cbf21c8599bc7e64c190db067f483.jpg",
    pinterestImage: "fitness_tofu_bowl.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "440kcal",
    protein: "26g",
    tags: ["VeganFit", "PlantBased", "CleanCarbs"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "200g Extra-Firm Tofu", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=150" },
      { name: "1/2 cup Shelled Edamame", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "1/2 cup Cooked Brown Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "1 tbsp Low-Sugar Teriyaki Sauce", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" }
    ],
    instructions: [
      "Press tofu to remove water, cut into cubes, and bake at 200°C until crispy (20 minutes).",
      "Toss crispy tofu cubes in teriyaki sauce until fully coated.",
      "Steam edamame for 3-4 minutes until bright green.",
      "Layer brown rice in a bowl, arrange tofu and edamame on top, and garnish with sesame seeds."
    ]
  },
  {
    id: "fit-meal-10",
    title: "High-Protein Berry Cottage Cheese Bowl",
    description: "Low-fat cottage cheese whipped until velvety smooth, loaded with fresh blueberries, sliced strawberries, hemp seeds, and a touch of honey.",
    summary: "Low-fat cottage cheese whipped until velvety smooth, loaded with fresh blueberries, sliced strawberries, hemp seeds, and a touch of honey.",
    image: "https://thedizzycook.com/wp-content/uploads/2023/05/Cottage-cheese-with-fruit-2.jpg",
    pinterestImage: "fitness_cottage_cheese.jpg",
    prepTime: "5m",
    readyInMinutes: 5,
    servings: 1,
    category: "FITNESS MEALS",
    calories: "310kcal",
    protein: "28g",
    tags: ["NoCook", "QuickSnack", "HighProtein"],
    dishTypes: ["Fitness", "Healthy", "Snack"],
    ingredients: [
      { name: "1 cup Low-Fat Cottage Cheese", image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=150" },
      { name: "1/2 cup Fresh Berries", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "1 tbsp Hemp Seeds & Raw Honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Scoop cottage cheese into a presentation bowl (blend it beforehand if you prefer a silky yogurt texture).",
      "Arrange fresh strawberries and blueberries cleanly over the top.",
      "Dust with premium hemp seeds for added texture and healthy fatty acids.",
      "Drizzle a small teaspoon of raw honey right across the bowl."
    ]
  },
  {
    id: "fit-meal-11",
    title: "Premium Cod Fillet & Jasmine Rice",
    description: "Flaky baked Pacific cod seasoned with lemon pepper, served over clean steamed jasmine rice and roasted green beans.",
    summary: "Flaky baked Pacific cod seasoned with lemon pepper, served over clean steamed jasmine rice and roasted green beans.",
    image: "https://i.pinimg.com/1200x/83/2b/86/832b86cf5768353347503abf0d452c7c.jpg",
    pinterestImage: "fitness_cod_rice.jpg",
    prepTime: "20m",
    readyInMinutes: 20,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "410kcal",
    protein: "36g",
    tags: ["LeanBulk", "LowFat", "Bodybuilding"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "200g Fresh Cod Fillet", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150" },
      { name: "1/2 cup Jasmine Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "1 cup Fresh Green Beans", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" }
    ],
    instructions: [
      "Season cod with lemon pepper and bake at 180°C for 12-15 minutes until it flakes easily.",
      "Steam jasmine rice until perfectly light and fluffy.",
      "Toss green beans with garlic salt and roast alongside the fish for 10 minutes.",
      "Serve hot for the ultimate clean, professional bodybuilder meal prep."
    ]
  },
  {
    id: "fit-meal-12",
    title: "Healthy Chicken Avocado Salad",
    description: "Diced grilled chicken mixed with ripe avocado cubes, crisp cucumbers, cherry tomatoes, and a light lime dressing.",
    summary: "Diced grilled chicken mixed with ripe avocado cubes, crisp cucumbers, cherry tomatoes, and a light lime dressing.",
    image: "https://i.pinimg.com/1200x/e1/07/d4/e107d406f18410f2dd80e20238d4328b.jpg",
    pinterestImage: "fitness_chicken_salad.jpg",
    prepTime: "10m",
    readyInMinutes: 10,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "460kcal",
    protein: "41g",
    tags: ["LowCarb", "KetoFriendly", "FreshSalad"],
    dishTypes: ["Fitness", "Healthy", "Lunch"],
    ingredients: [
      { name: "180g Grilled Chicken Breast", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
      { name: "1/2 Ripe Avocado, cubed", image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=150" },
      { name: "Cucumber & Cherry Tomatoes", image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=150" },
      { name: "Lime Juice & Olive Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=150" }
    ],
    instructions: [
      "Chop pre-grilled chicken breast and avocado into bite-sized cubes.",
      "Slice cucumber and halve cherry tomatoes, tossing them into a large mixing bowl.",
      "Add chicken and avocado cubes gently to avoid mashing the avocado.",
      "Whisk lime juice and olive oil, pour over the salad, and toss lightly before plating."
    ]
  },
  {
    id: "fit-meal-13",
    title: "Savory Lean Beef & Broccoli Bowl",
    description: "Tender lean beef strips wok-tossed with fresh broccoli florets in a clean, low-sugar garlic-ginger sauce over brown rice.",
    summary: "Tender lean beef strips wok-tossed with fresh broccoli florets in a clean, low-sugar garlic-ginger sauce over brown rice.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600",
    pinterestImage: "fitness_beef_broccoli.jpg",
    prepTime: "15m",
    readyInMinutes: 15,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "510kcal",
    protein: "40g",
    tags: ["MuscleGrowth", "CleanCarbs", "HighProtein"],
    dishTypes: ["Fitness", "Healthy", "Main"],
    ingredients: [
      { name: "180g Lean Beef strips", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=150" },
      { name: "1.5 cups Broccoli Florets", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "1/2 cup Cooked Brown Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "Fresh Ginger & Garlic", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Sear beef strips in a hot pan until nicely browned; transfer out of the pan.",
      "Add broccoli florets, minced garlic, and grated ginger to the same pan with 2 tbsp of water to steam.",
      "Once broccoli is tender, return beef and stir-fry with 1 tbsp of low-sodium soy sauce.",
      "Serve over hot brown rice for a premium, clean workout recovery meal."
    ]
  },
  {
    id: "fit-meal-14",
    title: "Protein Pancake Stack",
    description: "Fluffy, high-protein fitness pancakes made from oat flour, banana, and egg whites, served with sugar-free maple syrup.",
    summary: "Fluffy, high-protein fitness pancakes made from oat flour, banana, and egg whites, served with sugar-free maple syrup.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600",
    pinterestImage: "fitness_protein_pancakes.jpg",
    prepTime: "12m",
    readyInMinutes: 12,
    servings: 1,
    category: "FITNESS MEALS",
    calories: "390kcal",
    protein: "30g",
    tags: ["BreakfastFit", "MuscleRecovery", "SweetFix"],
    dishTypes: ["Fitness", "Healthy", "Breakfast"],
    ingredients: [
      { name: "1/2 cup Oat Flour", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "1 Scoop Whey Protein Powder", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=150" },
      { name: "1/2 Ripe Banana & 2 Egg Whites", image: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?q=80&w=150" },
      { name: "Sugar-Free Maple Syrup", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=150" }
    ],
    instructions: [
      "Mash the banana completely, then blend it smoothly with oat flour, egg whites, and protein powder.",
      "Heat a non-stick griddle over medium heat and pour small circles of batter.",
      "Flip the pancakes once bubbles form on the surface, cooking until both sides are golden brown.",
      "Stack them high, garnish with a few banana slices, and drizzle with sugar-free syrup."
    ]
  },
  {
    id: "fit-meal-15",
    title: "Spiced Lentil & Spinach Stew",
    description: "A comforting, high-fiber, and high-protein vegan stew combining brown lentils, diced tomatoes, baby spinach, and warm Mediterranean spices.",
    summary: "A comforting, high-fiber, and high-protein vegan stew combining brown lentils, diced tomatoes, baby spinach, and warm Mediterranean spices.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600",
    pinterestImage: "fitness_lentil_stew.jpg",
    prepTime: "25m",
    readyInMinutes: 25,
    servings: 2,
    category: "FITNESS MEALS",
    calories: "370kcal",
    protein: "24g",
    tags: ["VeganFit", "HighFiber", "HeartyClean"],
    dishTypes: ["Fitness", "Healthy", "Soup"],
    ingredients: [
      { name: "3/4 cup Dry Brown Lentils", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=150" },
      { name: "2 cups Packed Baby Spinach", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=150" },
      { name: "1 Can Diced Tomatoes", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=150" },
      { name: "Cumin, Coriander & Turmeric", image: "https://images.unsplash.com/photo-1515471204579-465b418a72f6?q=80&w=150" }
    ],
    instructions: [
      "Rinse lentils thoroughly and simmer in vegetable broth for 20 minutes until tender.",
      "Stir in the canned diced tomatoes, garlic, cumin, coriander, and turmeric; simmer for another 5 minutes.",
      "Add baby spinach directly into the hot stew, stirring until it wilts entirely into the mixture.",
      "Serve warm as a highly nutritious, plant-based recovery meal."
    ]
  }
];

RECIPES_DATA.push(...fitnessMeals);
