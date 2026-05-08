import { Recipe } from "../types";

export const FALLBACK_RECIPES: Recipe[] = [
  // --- BREAKFAST (8 RECIPES) ---
  {
    id: 1001,
    title: "Avocado & Poached Egg Sourdough",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 380,
    protein: "14g",
    fat: "22g",
    carbs: "35g",
    dishTypes: ["breakfast"],
    summary: "Creamy avocado paired with perfectly poached eggs on artisanal sourdough bread.",
    extendedIngredients: [
      { id: 1, name: "sourdough bread", amount: 1, unit: "slice", original: "1 slice sourdough", aisle: "Bakery" },
      { id: 2, name: "avocado", amount: 1, unit: "", original: "1 ripe avocado", aisle: "Produce" },
      { id: 3, name: "egg", amount: 1, unit: "", original: "1 organic egg", aisle: "Dairy" },
      { id: 4, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon juice", aisle: "Produce" },
      { id: 5, name: "chili flakes", amount: 1, unit: "tsp", original: "1 tsp chili flakes", aisle: "Spices" },
      { id: 6, name: "sea salt", amount: 1, unit: "pinch", original: "Pinch of sea salt", aisle: "Spices" },
      { id: 7, name: "black pepper", amount: 1, unit: "pinch", original: "Pinch of pepper", aisle: "Spices" },
      { id: 8, name: "olive oil", amount: 1, unit: "tsp", original: "1 tsp olive oil", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toast the sourdough bread until golden and crisp.", ingredients: [], equipment: [] },
      { number: 2, step: "Mash the avocado in a small bowl with lemon juice, salt, and pepper.", ingredients: [], equipment: [] },
      { number: 3, step: "Poach the egg in simmering water with a touch of vinegar for 3 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Spread avocado on toast, top with the egg, chili flakes, and a drizzle of oil.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1002,
    title: "Blueberry Oat Protein Pancakes",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 420,
    protein: "24g",
    fat: "12g",
    carbs: "58g",
    dishTypes: ["breakfast"],
    summary: "Fluffy, nutrient-dense pancakes packed with protein and fresh antioxidants.",
    extendedIngredients: [
      { id: 1, name: "oats", amount: 1, unit: "cup", original: "1 cup rolled oats", aisle: "Grains" },
      { id: 2, name: "protein powder", amount: 1, unit: "scoop", original: "1 scoop vanilla whey", aisle: "Fitness" },
      { id: 3, name: "banana", amount: 1, unit: "", original: "1 ripe banana", aisle: "Produce" },
      { id: 4, name: "blueberries", amount: 0.5, unit: "cup", original: "1/2 cup fresh blueberries", aisle: "Produce" },
      { id: 5, name: "almond milk", amount: 0.5, unit: "cup", original: "1/2 cup almond milk", aisle: "Dairy" },
      { id: 6, name: "egg", amount: 1, unit: "", original: "1 large egg", aisle: "Dairy" },
      { id: 7, name: "cinnamon", amount: 1, unit: "tsp", original: "1 tsp cinnamon", aisle: "Spices" },
      { id: 8, name: "baking powder", amount: 1, unit: "tsp", original: "1 tsp baking powder", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend oats, protein powder, banana, milk, and egg until smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "Gently fold in the fresh blueberries by hand.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour batter onto a hot non-stick griddle over medium heat.", ingredients: [], equipment: [] },
      { number: 4, step: "Cook until bubbles form on top, flip, and cook until golden brown.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1003,
    title: "Classic Shakshuka with Feta",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 340,
    protein: "16g",
    fat: "20g",
    carbs: "22g",
    dishTypes: ["breakfast"],
    summary: "Poached eggs in a savory, spiced tomato and bell pepper sauce.",
    extendedIngredients: [
      { id: 1, name: "eggs", amount: 4, unit: "", original: "4 large eggs", aisle: "Dairy" },
      { id: 2, name: "crushed tomatoes", amount: 1, unit: "can", original: "1 can crushed tomatoes", aisle: "Pantry" },
      { id: 3, name: "red bell pepper", amount: 1, unit: "", original: "1 red bell pepper, sliced", aisle: "Produce" },
      { id: 4, name: "onion", amount: 1, unit: "", original: "1 yellow onion, diced", aisle: "Produce" },
      { id: 5, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic, minced", aisle: "Produce" },
      { id: 6, name: "feta cheese", amount: 0.25, unit: "cup", original: "1/4 cup crumbled feta", aisle: "Dairy" },
      { id: 7, name: "cumin", amount: 1, unit: "tsp", original: "1 tsp ground cumin", aisle: "Spices" },
      { id: 8, name: "smoked paprika", amount: 1, unit: "tsp", original: "1 tsp smoked paprika", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté the onion and bell pepper in a cast iron skillet until soft.", ingredients: [], equipment: [] },
      { number: 2, step: "Add garlic and spices, then pour in the tomatoes and simmer.", ingredients: [], equipment: [] },
      { number: 3, step: "Make four wells in the sauce and crack an egg into each.", ingredients: [], equipment: [] },
      { number: 4, step: "Cover and simmer until egg whites are set but yolks are runny.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1004,
    title: "Greek Yogurt Berry Parfait",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 280,
    protein: "18g",
    fat: "8g",
    carbs: "35g",
    dishTypes: ["breakfast"],
    summary: "Thick Greek yogurt layered with raw honey, crunchy walnuts, and seasonal berries.",
    extendedIngredients: [
      { id: 1, name: "greek yogurt", amount: 1, unit: "cup", original: "1 cup greek yogurt", aisle: "Dairy" },
      { id: 2, name: "honey", amount: 1, unit: "tbsp", original: "1 tbsp raw honey", aisle: "Pantry" },
      { id: 3, name: "walnuts", amount: 0.25, unit: "cup", original: "1/4 cup walnuts", aisle: "Pantry" },
      { id: 4, name: "blueberries", amount: 0.5, unit: "cup", original: "1/2 cup blueberries", aisle: "Produce" },
      { id: 5, name: "granola", amount: 2, unit: "tbsp", original: "2 tbsp cluster granola", aisle: "Cereal" },
      { id: 6, name: "chia seeds", amount: 1, unit: "tsp", original: "1 tsp chia seeds", aisle: "Pantry" },
      { id: 7, name: "mint", amount: 1, unit: "sprig", original: "Fresh mint", aisle: "Produce" },
      { id: 8, name: "strawberry", amount: 3, unit: "", original: "3 sliced strawberries", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place half the yogurt in a glass or bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Layer with half of the berries and granola.", ingredients: [], equipment: [] },
      { number: 3, step: "Add the remaining yogurt and top with nuts and remaining fruit.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle with honey and sprinkle with chia seeds.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1005,
    title: "Spinach & Goat Cheese Frittata",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 4,
    calories: 220,
    protein: "15g",
    fat: "16g",
    carbs: "4g",
    dishTypes: ["breakfast"],
    summary: "Elegant and fluffy egg dish with earthy spinach and tangy goat cheese.",
    extendedIngredients: [
      { id: 1, name: "eggs", amount: 8, unit: "", original: "8 large eggs", aisle: "Dairy" },
      { id: 2, name: "spinach", amount: 2, unit: "cups", original: "2 cups baby spinach", aisle: "Produce" },
      { id: 3, name: "goat cheese", amount: 2, unit: "oz", original: "2 oz goat cheese", aisle: "Dairy" },
      { id: 4, name: "heavy cream", amount: 0.25, unit: "cup", original: "1/4 cup heavy cream", aisle: "Dairy" },
      { id: 5, name: "garlic", amount: 1, unit: "clove", original: "1 clove garlic", aisle: "Produce" },
      { id: 6, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 7, name: "salt", amount: 1, unit: "tsp", original: "1 tsp sea salt", aisle: "Spices" },
      { id: 8, name: "nutmeg", amount: 1, unit: "pinch", original: "Pinch of nutmeg", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk eggs, cream, salt, and nutmeg in a large bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté garlic and spinach in an oven-safe skillet until wilted.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour egg mixture over spinach and drop in goat cheese chunks.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 375°F (190°C) for 15 minutes until set.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1006,
    title: "Smoked Salmon & Caper Bagel",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1493770348161-3695013b281f?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 450,
    protein: "22g",
    fat: "18g",
    carbs: "48g",
    dishTypes: ["breakfast"],
    summary: "A New York classic: toasted bagel with cream cheese, smoked salmon, and piquant capers.",
    extendedIngredients: [
      { id: 1, name: "everything bagel", amount: 1, unit: "", original: "1 everything bagel", aisle: "Bakery" },
      { id: 2, name: "cream cheese", amount: 2, unit: "tbsp", original: "2 tbsp cream cheese", aisle: "Dairy" },
      { id: 3, name: "smoked salmon", amount: 3, unit: "oz", original: "3 oz smoked salmon", aisle: "Meat" },
      { id: 4, name: "red onion", amount: 2, unit: "slices", original: "2 thin red onion rings", aisle: "Produce" },
      { id: 5, name: "capers", amount: 1, unit: "tsp", original: "1 tsp capers", aisle: "Pantry" },
      { id: 6, name: "fresh dill", amount: 1, unit: "sprig", original: "Fresh dill", aisle: "Produce" },
      { id: 7, name: "lemon", amount: 1, unit: "wedge", original: "1 lemon wedge", aisle: "Produce" },
      { id: 8, name: "cucumber", amount: 3, unit: "slices", original: "3 cucumber slices", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toast the bagel until lightly browned.", ingredients: [], equipment: [] },
      { number: 2, step: "Spread cream cheese evenly on both halves.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer cucumber, smoked salmon, and onion slices.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with capers, dill, and a squeeze of fresh lemon.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1007,
    title: "Almond Butter & Berry Oatmeal",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1490645935967-1356e8918bf5?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 390,
    protein: "12g",
    fat: "15g",
    carbs: "55g",
    dishTypes: ["breakfast"],
    summary: "Warm, comforting oatmeal topped with creamy almond butter and fresh mixed berries.",
    extendedIngredients: [
      { id: 1, name: "rolled oats", amount: 0.5, unit: "cup", original: "1/2 cup rolled oats", aisle: "Grains" },
      { id: 2, name: "almond butter", amount: 1, unit: "tbsp", original: "1 tbsp almond butter", aisle: "Pantry" },
      { id: 3, name: "mixed berries", amount: 0.5, unit: "cup", original: "1/2 cup fresh berries", aisle: "Produce" },
      { id: 4, name: "chia seeds", amount: 1, unit: "tsp", original: "1 tsp chia seeds", aisle: "Pantry" },
      { id: 5, name: "maple syrup", amount: 1, unit: "tsp", original: "1 tsp maple syrup", aisle: "Pantry" },
      { id: 6, name: "almonds", amount: 1, unit: "tbsp", original: "1 tbsp slivered almonds", aisle: "Pantry" },
      { id: 7, name: "almond milk", amount: 1, unit: "cup", original: "1 cup almond milk", aisle: "Dairy" },
      { id: 8, name: "salt", amount: 1, unit: "pinch", original: "Pinch of salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Simmer oats and milk with a pinch of salt until creamy.", ingredients: [], equipment: [] },
      { number: 2, step: "Stir in maple syrup and transfer to a bowl.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with a generous swirl of almond butter.", ingredients: [], equipment: [] },
      { number: 4, step: "Add berries, seeds, and almonds for crunch.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1008,
    title: "Smoothie Bowl with Tropical Fruit",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1533089860861-bb08cb0f29c0?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 320,
    protein: "6g",
    fat: "8g",
    carbs: "62g",
    dishTypes: ["breakfast"],
    summary: "A vibrant, ice-cold blend of tropical fruits topped with coconut and kiwi.",
    extendedIngredients: [
      { id: 1, name: "frozen mango", amount: 1, unit: "cup", original: "1 cup frozen mango", aisle: "Produce" },
      { id: 2, name: "frozen pineapple", amount: 0.5, unit: "cup", original: "1/2 cup frozen pineapple", aisle: "Produce" },
      { id: 3, name: "coconut milk", amount: 0.5, unit: "cup", original: "1/2 cup coconut milk", aisle: "Dairy" },
      { id: 4, name: "kiwi", amount: 1, unit: "", original: "1 kiwi, sliced", aisle: "Produce" },
      { id: 5, name: "shredded coconut", amount: 1, unit: "tbsp", original: "1 tbsp coconut flakes", aisle: "Pantry" },
      { id: 6, name: "hemp seeds", amount: 1, unit: "tsp", original: "1 tsp hemp seeds", aisle: "Pantry" },
      { id: 7, name: "banana", amount: 0.5, unit: "", original: "1/2 banana, sliced", aisle: "Produce" },
      { id: 8, name: "lime juice", amount: 1, unit: "tsp", original: "1 tsp lime juice", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend mango, pineapple, and coconut milk until thick and smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "Pour into a chilled bowl.", ingredients: [], equipment: [] },
      { number: 3, step: "Arrange kiwi, banana, and coconut flakes on top.", ingredients: [], equipment: [] },
      { number: 4, step: "Finish with hemp seeds and a squeeze of lime juice.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1009,
    title: "Turkish Eggs (Cilbir)",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 320,
    protein: "14g",
    fat: "24g",
    carbs: "12g",
    dishTypes: ["breakfast"],
    summary: "A creamy, Mediterranean delight of poached eggs over garlic-infused yogurt with spicy chili butter.",
    extendedIngredients: [
      { id: 1, name: "greek yogurt", amount: 1, unit: "cup", original: "1 cup thick greek yogurt", aisle: "Dairy" },
      { id: 2, name: "garlic", amount: 1, unit: "clove", original: "1 small clove garlic, minced", aisle: "Produce" },
      { id: 3, name: "eggs", amount: 4, unit: "", original: "4 large eggs", aisle: "Dairy" },
      { id: 4, name: "butter", amount: 2, unit: "tbsp", original: "2 tbsp unsalted butter", aisle: "Dairy" },
      { id: 5, name: "aleppo pepper", amount: 1, unit: "tsp", original: "1 tsp aleppo pepper or chili flakes", aisle: "Spices" },
      { id: 6, name: "dill", amount: 1, unit: "tbsp", original: "1 tbsp fresh dill, chopped", aisle: "Produce" },
      { id: 7, name: "olive oil", amount: 1, unit: "tsp", original: "1 tsp olive oil", aisle: "Pantry" },
      { id: 8, name: "sourdough", amount: 2, unit: "slices", original: "Toasted sourdough for serving", aisle: "Bakery" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix yogurt with minced garlic and a pinch of salt; spread into two bowls.", ingredients: [], equipment: [] },
      { number: 2, step: "Melt butter in a small pan until foaming, stir in chili flakes/aleppo pepper until red and fragrant.", ingredients: [], equipment: [] },
      { number: 3, step: "Poach eggs in simmering water with vinegar for 3-4 minutes until whites are set.", ingredients: [], equipment: [] },
      { number: 4, step: "Place eggs onto the yogurt, drizzle with chili butter, and garnish with fresh dill.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1010,
    title: "Japanese Soufflé Pancakes",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 340,
    protein: "10g",
    fat: "14g",
    carbs: "42g",
    dishTypes: ["breakfast"],
    summary: "Cloud-like, ultra-fluffy pancakes that melt in your mouth, a modern Tokyo breakfast staple.",
    extendedIngredients: [
      { id: 1, name: "eggs", amount: 2, unit: "", original: "2 large eggs, separated", aisle: "Dairy" },
      { id: 2, name: "milk", amount: 1.5, unit: "tbsp", original: "1.5 tbsp whole milk", aisle: "Dairy" },
      { id: 3, name: "vanilla extract", amount: 0.25, unit: "tsp", original: "1/4 tsp vanilla", aisle: "Baking" },
      { id: 4, name: "flour", amount: 4, unit: "tbsp", original: "4 tbsp cake flour", aisle: "Baking" },
      { id: 5, name: "baking powder", amount: 0.5, unit: "tsp", original: "1/2 tsp baking powder", aisle: "Baking" },
      { id: 6, name: "sugar", amount: 2, unit: "tbsp", original: "2 tbsp granulated sugar", aisle: "Pantry" },
      { id: 7, name: "maple syrup", amount: 2, unit: "tbsp", original: "Maple syrup for serving", aisle: "Pantry" },
      { id: 8, name: "berries", amount: 0.5, unit: "cup", original: "Fresh berries", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk egg yolks with milk and vanilla; sift in flour and baking powder and mix until thick.", ingredients: [], equipment: [] },
      { number: 2, step: "Beat egg whites with sugar until stiff peaks form.", ingredients: [], equipment: [] },
      { number: 3, step: "Gently fold the meringue into the yolk mixture in three batches.", ingredients: [], equipment: [] },
      { number: 4, step: "Cook mounds of batter in a lidded non-stick pan with a teaspoon of water for 5 mins per side.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1011,
    title: "Chilaquiles Verdes",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 450,
    protein: "16g",
    fat: "25g",
    carbs: "42g",
    dishTypes: ["breakfast"],
    summary: "Crispy corn tortillas simmered in a vibrant salsa verde, topped with eggs and crema.",
    extendedIngredients: [
      { id: 1, name: "tortilla chips", amount: 4, unit: "cups", original: "4 cups thick corn tortilla chips", aisle: "Pantry" },
      { id: 2, name: "salsa verde", amount: 1.5, unit: "cups", original: "1.5 cups tomatillo salsa", aisle: "Pantry" },
      { id: 3, name: "eggs", amount: 2, unit: "", original: "2 large eggs, fried", aisle: "Dairy" },
      { id: 4, name: "queso fresco", amount: 0.25, unit: "cup", original: "1/4 cup crumbled queso fresco", aisle: "Dairy" },
      { id: 5, name: "mexican crema", amount: 2, unit: "tbsp", original: "2 tbsp mexican crema", aisle: "Dairy" },
      { id: 6, name: "red onion", amount: 2, unit: "tbsp", original: "2 tbsp finely diced red onion", aisle: "Produce" },
      { id: 7, name: "cilantro", amount: 2, unit: "tbsp", original: "Fresh cilantro", aisle: "Produce" },
      { id: 8, name: "avocado", amount: 0.5, unit: "", original: "1/2 ripe avocado", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Heat the salsa verde in a large skillet until simmering.", ingredients: [], equipment: [] },
      { number: 2, step: "Add tortilla chips and toss gently until coated but still slightly crisp.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with fried eggs and sprinkle with cheese and onions.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle with crema and garnish with cilantro and avocado before serving.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1012,
    title: "Croque Madame",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1493770348161-3695013b281f?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 1,
    calories: 520,
    protein: "22g",
    fat: "35g",
    carbs: "32g",
    dishTypes: ["breakfast"],
    summary: "The ultimate French breakfast: a ham and gruyère sandwich topped with béchamel and a fried egg.",
    extendedIngredients: [
      { id: 1, name: "brioche bread", amount: 2, unit: "slices", original: "2 thick slices brioche or sourdough", aisle: "Bakery" },
      { id: 2, name: "ham", amount: 2, unit: "slices", original: "2 slices high-quality ham", aisle: "Meat" },
      { id: 3, name: "gruyère cheese", amount: 0.5, unit: "cup", original: "1/2 cup shredded gruyère", aisle: "Dairy" },
      { id: 4, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp butter", aisle: "Dairy" },
      { id: 5, name: "flour", amount: 1, unit: "tsp", original: "1 tsp flour", aisle: "Baking" },
      { id: 6, name: "milk", amount: 0.5, unit: "cup", original: "1/2 cup whole milk", aisle: "Dairy" },
      { id: 7, name: "egg", amount: 1, unit: "", original: "1 large egg", aisle: "Dairy" },
      { id: 8, name: "dijon mustard", amount: 1, unit: "tsp", original: "1 tsp dijon mustard", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Make a quick béchamel by melting butter, whisking in flour, then slowly adding milk.", ingredients: [], equipment: [] },
      { number: 2, step: "Assemble sandwich with mustard, ham, and half the cheese; grill in butter until golden.", ingredients: [], equipment: [] },
      { number: 3, step: "Spread béchamel over the top, sprinkle remaining cheese, and broil until bubbly.", ingredients: [], equipment: [] },
      { number: 4, step: "Fry the egg sunny-side up and place on top of the toasted sandwich.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1013,
    title: "Moroccan Msemen with Honey",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1549931319-a5d13ea95146?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 310,
    protein: "8g",
    fat: "12g",
    carbs: "45g",
    dishTypes: ["breakfast"],
    summary: "Traditional square-shaped laminated flatbread, crispy on the outside and flaky inside.",
    extendedIngredients: [
      { id: 1, name: "semolina", amount: 2, unit: "cups", original: "2 cups fine semolina", aisle: "Grains" },
      { id: 2, name: "flour", amount: 1, unit: "cup", original: "1 cup all-purpose flour", aisle: "Baking" },
      { id: 3, name: "butter", amount: 4, unit: "tbsp", original: "4 tbsp melted butter", aisle: "Dairy" },
      { id: 4, name: "vegetable oil", amount: 0.25, unit: "cup", original: "1/4 cup oil for folding", aisle: "Pantry" },
      { id: 5, name: "honey", amount: 0.25, unit: "cup", original: "Warm honey for drizzling", aisle: "Pantry" },
      { id: 6, name: "salt", amount: 1, unit: "tsp", original: "1 tsp salt", aisle: "Spices" },
      { id: 7, name: "sugar", amount: 2, unit: "tsp", original: "2 tsp sugar", aisle: "Pantry" },
      { id: 8, name: "warm water", amount: 1.5, unit: "cups", original: "Warm water for kneading", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Knead semolina, flour, salt, sugar and water into a smooth, elastic dough.", ingredients: [], equipment: [] },
      { number: 2, step: "Divide into balls, flatten thinly, brush with butter/oil and fold into squares.", ingredients: [], equipment: [] },
      { number: 3, step: "Cook on a hot griddle until golden brown and puffed on both sides.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve hot, generously drizzled with warm honey and a side of mint tea.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1014,
    title: "Classic Eggs Benedict",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511ee94b?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 480,
    protein: "18g",
    fat: "32g",
    carbs: "28g",
    dishTypes: ["breakfast"],
    summary: "The quintessential brunch dish: perfectly poached eggs on toasted English muffins with hollandaise sauce.",
    extendedIngredients: [
      { id: 1, name: "english muffins", amount: 2, unit: "", original: "2 english muffins, split", aisle: "Bakery" },
      { id: 2, name: "canadian bacon", amount: 4, unit: "slices", original: "4 slices canadian bacon", aisle: "Meat" },
      { id: 3, name: "eggs", amount: 4, unit: "", original: "4 large eggs", aisle: "Dairy" },
      { id: 4, name: "butter", amount: 0.5, unit: "cup", original: "1/2 cup unsalted butter, melted", aisle: "Dairy" },
      { id: 5, name: "egg yolks", amount: 3, unit: "", original: "3 egg yolks for sauce", aisle: "Dairy" },
      { id: 6, name: "lemon juice", amount: 1, unit: "tbsp", original: "1 tbsp lemon juice", aisle: "Produce" },
      { id: 7, name: "cayenne pepper", amount: 1, unit: "pinch", original: "Pinch of cayenne", aisle: "Spices" },
      { id: 8, name: "chives", amount: 1, unit: "tbsp", original: "Fresh chives, chopped", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk egg yolks and lemon juice; slowly drizzle in melted butter to make hollandaise.", ingredients: [], equipment: [] },
      { number: 2, step: "Toast english muffins and lightly brown the canadian bacon in a pan.", ingredients: [], equipment: [] },
      { number: 3, step: "Poach eggs in simmering water for 3-4 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Assemble by topping muffin with bacon, egg, and a generous spoonful of hollandaise.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1015,
    title: "Indian Masala Omelette",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1494597564530-8595aa459aa3?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 280,
    protein: "14g",
    fat: "18g",
    carbs: "8g",
    dishTypes: ["breakfast"],
    summary: "Spiced Indian-style omelette with vibrant veggies and aromatic spices.",
    extendedIngredients: [
      { id: 1, name: "eggs", amount: 3, unit: "", original: "3 large eggs", aisle: "Dairy" },
      { id: 2, name: "red onion", amount: 0.25, unit: "cup", original: "1/4 cup finely chopped onion", aisle: "Produce" },
      { id: 3, name: "green chili", amount: 1, unit: "", original: "1 small green chili, minced", aisle: "Produce" },
      { id: 4, name: "tomato", amount: 2, unit: "tbsp", original: "2 tbsp diced tomato", aisle: "Produce" },
      { id: 5, name: "turmeric", amount: 0.25, unit: "tsp", original: "1/4 tsp turmeric powder", aisle: "Spices" },
      { id: 6, name: "garam masala", amount: 0.25, unit: "tsp", original: "1/4 tsp garam masala", aisle: "Spices" },
      { id: 7, name: "fresh cilantro", amount: 1, unit: "tbsp", original: "Fresh cilantro, chopped", aisle: "Produce" },
      { id: 8, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp butter", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk eggs with onions, chilies, tomatoes, cilantro, and all dry spices.", ingredients: [], equipment: [] },
      { number: 2, step: "Melt butter in a non-stick skillet over medium heat.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour in egg mixture, cook until the bottom is set, and flip carefully.", ingredients: [], equipment: [] },
      { number: 4, step: "Cook for another 1-2 minutes until both sides are perfectly golden brown.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 1016,
    title: "Belgian Waffles with Strawberry Compote",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 4,
    calories: 420,
    protein: "8g",
    fat: "18g",
    carbs: "58g",
    dishTypes: ["breakfast"],
    summary: "Classic deep-pocketed waffles served with a warm, homemade strawberry sauce and whipped cream.",
    extendedIngredients: [
      { id: 1, name: "flour", amount: 2, unit: "cups", original: "2 cups all-purpose flour", aisle: "Baking" },
      { id: 2, name: "eggs", amount: 2, unit: "", original: "2 large eggs, separated", aisle: "Dairy" },
      { id: 3, name: "milk", amount: 1.5, unit: "cups", original: "1.5 cups milk", aisle: "Dairy" },
      { id: 4, name: "butter", amount: 0.5, unit: "cup", original: "1/2 cup melted butter", aisle: "Dairy" },
      { id: 5, name: "strawberries", amount: 2, unit: "cups", original: "2 cups fresh strawberries", aisle: "Produce" },
      { id: 6, name: "sugar", amount: 2, unit: "tbsp", original: "2 tbsp sugar", aisle: "Pantry" },
      { id: 7, name: "baking powder", amount: 1, unit: "tbsp", original: "1 tbsp baking powder", aisle: "Baking" },
      { id: 8, name: "vanilla", amount: 1, unit: "tsp", original: "1 tsp vanilla extract", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk dry ingredients; add egg yolks, milk, butter, and vanilla.", ingredients: [], equipment: [] },
      { number: 2, step: "Beat egg whites until stiff and fold into the batter.", ingredients: [], equipment: [] },
      { number: 3, step: "Cook in a preheated waffle iron until crispy and golden.", ingredients: [], equipment: [] },
      { number: 4, step: "Simmer strawberries with sugar until syrupy; serve over hot waffles.", ingredients: [] }
    ]}]
  },
  {
    id: 1017,
    title: "Tofu Scramble with Turmeric & Kale",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 280,
    protein: "22g",
    fat: "14g",
    carbs: "18g",
    dishTypes: ["breakfast"],
    summary: "A protein-rich vegan alternative to scrambled eggs, bursting with anti-inflammatory turmeric and kale.",
    extendedIngredients: [
      { id: 1, name: "firm tofu", amount: 400, unit: "g", original: "400g firm tofu, crumbled", aisle: "Produce" },
      { id: 2, name: "kale", amount: 2, unit: "cups", original: "2 cups chopped kale", aisle: "Produce" },
      { id: 3, name: "nutritional yeast", amount: 2, unit: "tbsp", original: "2 tbsp nutritional yeast", aisle: "Pantry" },
      { id: 4, name: "turmeric", amount: 0.5, unit: "tsp", original: "1/2 tsp turmeric", aisle: "Spices" },
      { id: 5, name: "onion powder", amount: 0.5, unit: "tsp", original: "1/2 tsp onion powder", aisle: "Spices" },
      { id: 6, name: "black salt (kala namak)", amount: 0.25, unit: "tsp", original: "1/4 tsp black salt (for eggy flavor)", aisle: "Spices" },
      { id: 7, name: "garlic", amount: 1, unit: "clove", original: "1 clove garlic, minced", aisle: "Produce" },
      { id: 8, name: "bell pepper", amount: 0.5, unit: "", original: "1/2 red bell pepper, diced", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté garlic and bell pepper in a pan until soft.", ingredients: [], equipment: [] },
      { number: 2, step: "Add crumbled tofu, turmeric, yeast, and onion powder.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in kale and cook until wilted and tofu is heated through.", ingredients: [], equipment: [] },
      { number: 4, step: "Season with black salt and serve with whole grain toast.", ingredients: [] }
    ]}]
  },
  {
    id: 1018,
    title: "Swedish Cardamom Buns",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 12,
    calories: 290,
    protein: "6g",
    fat: "12g",
    carbs: "42g",
    dishTypes: ["breakfast"],
    summary: "Fragrant, buttery yeast buns with a classic Swedish spiced filling and pearl sugar topping.",
    extendedIngredients: [
      { id: 1, name: "bread flour", amount: 4, unit: "cups", original: "4 cups bread flour", aisle: "Baking" },
      { id: 2, name: "cardamom", amount: 2, unit: "tsp", original: "2 tsp ground cardamom", aisle: "Spices" },
      { id: 3, name: "yeast", amount: 2.25, unit: "tsp", original: "1 packet active dry yeast", aisle: "Baking" },
      { id: 4, name: "milk", amount: 1.25, unit: "cups", original: "1.25 cups milk", aisle: "Dairy" },
      { id: 5, name: "butter", amount: 0.5, unit: "cup", original: "1/2 cup softened butter", aisle: "Dairy" },
      { id: 6, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar", aisle: "Pantry" },
      { id: 7, name: "brown sugar", amount: 0.25, unit: "cup", original: "1/4 cup brown sugar (for filling)", aisle: "Pantry" },
      { id: 8, name: "pearl sugar", amount: 1, unit: "tbsp", original: "Pearl sugar for topping", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix dough ingredients and cardamom; let rise for 1 hour.", ingredients: [], equipment: [] },
      { number: 2, step: "Roll out dough, spread with butter/brown sugar/cardamom mix.", ingredients: [], equipment: [] },
      { number: 3, step: "Fold and cut into strips, twist into knots and rise for 30 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Brush with egg wash, sprinkle pearl sugar, and bake at 375°F for 12 mins.", ingredients: [] }
    ]}]
  },
  {
    id: 1019,
    title: "Smoked Salmon & Avocado Eggs Benedict",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511ee94b?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 510,
    protein: "24g",
    fat: "38g",
    carbs: "30g",
    dishTypes: ["breakfast"],
    summary: "A luxurious twist on the classic Benedict, replacing ham with cured salmon and adding creamy avocado.",
    extendedIngredients: [
      { id: 1, name: "english muffins", amount: 2, unit: "", original: "2 english muffins", aisle: "Bakery" },
      { id: 2, name: "smoked salmon", amount: 4, unit: "oz", original: "4 oz smoked salmon", aisle: "Meat" },
      { id: 3, name: "avocado", amount: 1, unit: "", original: "1 ripe avocado", aisle: "Produce" },
      { id: 4, name: "eggs", amount: 4, unit: "", original: "4 large eggs", aisle: "Dairy" },
      { id: 5, name: "hollandaise sauce", amount: 0.5, unit: "cup", original: "1/2 cup hollandaise sauce", aisle: "Pantry" },
      { id: 6, name: "chives", amount: 1, unit: "tbsp", original: "Fresh chives", aisle: "Produce" },
      { id: 7, name: "lemon", amount: 0.5, unit: "", original: "Squeeze of lemon", aisle: "Produce" },
      { id: 8, name: "vinegar", amount: 1, unit: "tbsp", original: "1 tbsp white vinegar", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Poach eggs in simmering water with vinegar for 3 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Toast muffins and top with mashed avocado mixed with lemon.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer smoked salmon over avocado, followed by the poached eggs.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle with warm hollandaise and garnish with chives.", ingredients: [] }
    ]}]
  },
  {
    id: 1020,
    title: "Baked Apple Cinnamon Steel-Cut Oats",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1490645935967-1356e8918bf5?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 50,
    servings: 4,
    calories: 320,
    protein: "9g",
    fat: "7g",
    carbs: "58g",
    dishTypes: ["breakfast"],
    summary: "Hearty oats baked with sweet apples, pecans, and warming spices for a perfect family breakfast.",
    extendedIngredients: [
      { id: 1, name: "steel-cut oats", amount: 1.5, unit: "cups", original: "1.5 cups steel-cut oats", aisle: "Grains" },
      { id: 2, name: "apples", amount: 2, unit: "", original: "2 gala apples, diced", aisle: "Produce" },
      { id: 3, name: "pecans", amount: 0.25, unit: "cup", original: "1/4 cup chopped pecans", aisle: "Pantry" },
      { id: 4, name: "maple syrup", amount: 0.25, unit: "cup", original: "1/4 cup maple syrup", aisle: "Pantry" },
      { id: 5, name: "cinnamon", amount: 1, unit: "tsp", original: "1 tsp cinnamon", aisle: "Spices" },
      { id: 6, name: "nutmeg", amount: 0.25, unit: "tsp", original: "Pinch of nutmeg", aisle: "Spices" },
      { id: 7, name: "milk", amount: 3, unit: "cups", original: "3 cups milk of choice", aisle: "Dairy" },
      { id: 8, name: "vanilla", amount: 1, unit: "tsp", original: "1 tsp vanilla", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Combine all ingredients in a greased baking dish.", ingredients: [], equipment: [] },
      { number: 2, step: "Stir well to ensure spices and syrup and evenly distributed.", ingredients: [], equipment: [] },
      { number: 3, step: "Bake at 350°F (175°C) for 45 minutes until liquid is absorbed.", ingredients: [], equipment: [] },
      { number: 4, step: "Let stand for 5 minutes before serving with extra milk.", ingredients: [] }
    ]}]
  },

  // --- DINNER (8 RECIPES) ---
  {
    id: 3001,
    title: "Pan-Seared Salmon with Asparagus",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 460,
    protein: "34g",
    fat: "32g",
    carbs: "10g",
    dishTypes: ["dinner"],
    summary: "Crispy-skinned salmon fillets served with tender garlic-lemon asparagus.",
    extendedIngredients: [
      { id: 1, name: "salmon fillets", amount: 2, unit: "", original: "2 salmon fillets", aisle: "Meat" },
      { id: 2, name: "asparagus", amount: 1, unit: "bunch", original: "1 bunch asparagus", aisle: "Produce" },
      { id: 3, name: "lemon", amount: 1, unit: "", original: "1 lemon, sliced", aisle: "Produce" },
      { id: 4, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic, minced", aisle: "Produce" },
      { id: 5, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp unsalted butter", aisle: "Dairy" },
      { id: 6, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 7, name: "sea salt", amount: 1, unit: "tsp", original: "1 tsp sea salt", aisle: "Spices" },
      { id: 8, name: "dill", amount: 1, unit: "tbsp", original: "Fresh dill", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Season salmon with salt and pepper; sear skin-side down for 5 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Flip salmon and cook for 3-4 more minutes until done.", ingredients: [], equipment: [] },
      { number: 3, step: "Sauté asparagus with garlic and butter in the same pan for 5 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve salmon atop asparagus with lemon slices and dill.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3002,
    title: "Beef & Broccoli Stir-Fry",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1512058560566-42724afbc1db?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 540,
    protein: "30g",
    fat: "24g",
    carbs: "45g",
    dishTypes: ["dinner"],
    summary: "Tender beef slices and crisp broccoli florets in a savory ginger-garlic sauce.",
    extendedIngredients: [
      { id: 1, name: "steak strips", amount: 300, unit: "g", original: "300g flank steak strips", aisle: "Meat" },
      { id: 2, name: "broccoli", amount: 2, unit: "cups", original: "2 cups broccoli florets", aisle: "Produce" },
      { id: 3, name: "soy sauce", amount: 3, unit: "tbsp", original: "3 tbsp low-sodium soy sauce", aisle: "Pantry" },
      { id: 4, name: "fresh ginger", amount: 1, unit: "tbsp", original: "1 tbsp minced ginger", aisle: "Produce" },
      { id: 5, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic", aisle: "Produce" },
      { id: 6, name: "honey", amount: 1, unit: "tbsp", original: "1 tbsp pure honey", aisle: "Pantry" },
      { id: 7, name: "sesame oil", amount: 1, unit: "tsp", original: "1 tsp toasted sesame oil", aisle: "Pantry" },
      { id: 8, name: "cornstarch", amount: 1, unit: "tsp", original: "1 tsp cornstarch", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk soy sauce, honey, ginger, and cornstarch together for the sauce.", ingredients: [], equipment: [] },
      { number: 2, step: "Sear beef in a very hot wok with sesame oil until browned; remove.", ingredients: [], equipment: [] },
      { number: 3, step: "Add broccoli and a splash of water; steam until tender-crisp.", ingredients: [], equipment: [] },
      { number: 4, step: "Return beef to pan, pour in sauce, and toss until thickened.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3003,
    title: "Wild Mushroom Risotto",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 410,
    protein: "12g",
    fat: "18g",
    carbs: "52g",
    dishTypes: ["dinner"],
    summary: "Creamy Italian arborio rice infused with earthy forest mushrooms and white wine.",
    extendedIngredients: [
      { id: 1, name: "arborio rice", amount: 1.5, unit: "cups", original: "1.5 cups arborio rice", aisle: "Grains" },
      { id: 2, name: "mixed mushrooms", amount: 500, unit: "g", original: "500g mixed mushrooms", aisle: "Produce" },
      { id: 3, name: "vegetable stock", amount: 4, unit: "cups", original: "4 cups hot vegetable stock", aisle: "Pantry" },
      { id: 4, name: "shallots", amount: 2, unit: "", original: "2 finely diced shallots", aisle: "Produce" },
      { id: 5, name: "white wine", amount: 0.5, unit: "cup", original: "1/2 cup dry white wine", aisle: "Pantry" },
      { id: 6, name: "parmesan", amount: 0.5, unit: "cup", original: "1/2 cup freshly grated parmesan", aisle: "Dairy" },
      { id: 7, name: "truffle oil", amount: 1, unit: "tsp", original: "Drizzle of truffle oil", aisle: "Pantry" },
      { id: 8, name: "fresh thyme", amount: 2, unit: "sprigs", original: "2 sprigs fresh thyme", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté mushrooms in a large pot until deep brown; set aside.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté shallots, add rice and toast for 2 mins, then deglaze with wine.", ingredients: [], equipment: [] },
      { number: 3, step: "Add hot stock one ladle at a time, stirring constantly until absorbed.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in mushrooms, parmesan, and butter; finish with truffle oil.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3004,
    title: "Lemon Garlic Shrimp Scampi",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 430,
    protein: "28g",
    fat: "18g",
    carbs: "35g",
    dishTypes: ["dinner"],
    summary: "Succulent jumbo shrimp in a buttery garlic sauce over silky linguine pasta.",
    extendedIngredients: [
      { id: 1, name: "jumbo shrimp", amount: 1, unit: "lb", original: "1 lb large shrimp, peeled", aisle: "Meat" },
      { id: 2, name: "linguine", amount: 0.5, unit: "lb", original: "1/2 lb linguine", aisle: "Pasta" },
      { id: 3, name: "garlic", amount: 5, unit: "cloves", original: "5 cloves garlic, minced", aisle: "Produce" },
      { id: 4, name: "butter", amount: 3, unit: "tbsp", original: "3 tbsp butter", aisle: "Dairy" },
      { id: 5, name: "lemon juice", amount: 2, unit: "tbsp", original: "2 tbsp lemon juice", aisle: "Produce" },
      { id: 6, name: "red pepper flakes", amount: 0.5, unit: "tsp", original: "1/2 tsp red pepper flakes", aisle: "Spices" },
      { id: 7, name: "parsley", amount: 2, unit: "tbsp", original: "2 tbsp fresh parsley", aisle: "Produce" },
      { id: 8, name: "white wine", amount: 0.25, unit: "cup", original: "1/4 cup dry white wine", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Boil linguine in salted water until al dente.", ingredients: [], equipment: [] },
      { number: 2, step: "Melt butter in a pan, sauté garlic and red pepper flakes for 1 min.", ingredients: [], equipment: [] },
      { number: 3, step: "Add shrimp and wine; cook until shrimp are pink and wine reduces.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss pasta with shrimp, lemon juice, and parsley.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3005,
    title: "Classic Roast Chicken with Herbs",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 90,
    servings: 4,
    calories: 520,
    protein: "42g",
    fat: "28g",
    carbs: "0g",
    dishTypes: ["dinner"],
    summary: "Whole roasted chicken with crispy golden skin and succulent, herb-infused meat.",
    extendedIngredients: [
      { id: 1, name: "whole chicken", amount: 1.5, unit: "kg", original: "1.5kg whole chicken", aisle: "Meat" },
      { id: 2, name: "rosemary", amount: 3, unit: "sprigs", original: "3 sprigs fresh rosemary", aisle: "Produce" },
      { id: 3, name: "thyme", amount: 3, unit: "sprigs", original: "3 sprigs fresh thyme", aisle: "Produce" },
      { id: 4, name: "lemon", amount: 1, unit: "", original: "1 whole lemon, halved", aisle: "Produce" },
      { id: 5, name: "garlic", amount: 1, unit: "head", original: "1 head garlic, halved", aisle: "Produce" },
      { id: 6, name: "butter", amount: 50, unit: "g", original: "50g softened butter", aisle: "Dairy" },
      { id: 7, name: "sea salt", amount: 1, unit: "tbsp", original: "1 tbsp sea salt", aisle: "Spices" },
      { id: 8, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Rub softened butter and herbs under the chicken skin.", ingredients: [], equipment: [] },
      { number: 2, step: "Stuff the cavity with lemon halves and garlic head.", ingredients: [], equipment: [] },
      { number: 3, step: "Season skin with sea salt and roast at 400°F (200°C).", ingredients: [], equipment: [] },
      { number: 4, step: "Bake for 1 hour 15 mins or until juices run clear.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3006,
    title: "Pesto Stuffed Chicken Breast",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 35,
    servings: 2,
    calories: 490,
    protein: "42g",
    fat: "28g",
    carbs: "5g",
    dishTypes: ["dinner"],
    summary: "Juicy chicken breasts filled with aromatic basil pesto and melted mozzarella.",
    extendedIngredients: [
      { id: 1, name: "chicken breasts", amount: 2, unit: "", original: "2 large chicken breasts", aisle: "Meat" },
      { id: 2, name: "basil pesto", amount: 4, unit: "tbsp", original: "4 tbsp high-quality pesto", aisle: "Pantry" },
      { id: 3, name: "mozzarella", amount: 2, unit: "slices", original: "2 thick slices mozzarella", aisle: "Dairy" },
      { id: 4, name: "cherry tomatoes", amount: 1, unit: "cup", original: "1 cup cherry tomatoes", aisle: "Produce" },
      { id: 5, name: "balsamic glaze", amount: 1, unit: "tbsp", original: "1 tbsp balsamic glaze", aisle: "Pantry" },
      { id: 6, name: "garlic salt", amount: 1, unit: "tsp", original: "1 tsp garlic salt", aisle: "Spices" },
      { id: 7, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "fresh basil", amount: 1, unit: "sprig", original: "Fresh basil garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Cut a deep pocket into each chicken breast without cutting all the way through.", ingredients: [], equipment: [] },
      { number: 2, step: "Stuff each breast with 2 tbsp pesto and a slice of mozzarella.", ingredients: [], equipment: [] },
      { number: 3, step: "Sear stuffed breasts in a hot pan for 4 mins per side.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 400°F (200°C) for 15 mins until golden and cooked.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3007,
    title: "Cauliflower Steak with Chimichurri",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 280,
    protein: "6g",
    fat: "18g",
    carbs: "22g",
    dishTypes: ["dinner"],
    summary: "Thick-cut roasted cauliflower served with a vibrant, zesty herb sauce.",
    extendedIngredients: [
      { id: 1, name: "cauliflower", amount: 1, unit: "head", original: "1 large head cauliflower", aisle: "Produce" },
      { id: 2, name: "parsley", amount: 1, unit: "cup", original: "1 cup fresh parsley", aisle: "Produce" },
      { id: 3, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic", aisle: "Produce" },
      { id: 4, name: "red wine vinegar", amount: 2, unit: "tbsp", original: "2 tbsp red wine vinegar", aisle: "Pantry" },
      { id: 5, name: "olive oil", amount: 0.5, unit: "cup", original: "1/2 cup high-quality oil", aisle: "Pantry" },
      { id: 6, name: "red pepper flakes", amount: 0.5, unit: "tsp", original: "1/2 tsp pepper flakes", aisle: "Spices" },
      { id: 7, name: "cumin", amount: 1, unit: "tsp", original: "1 tsp cumin", aisle: "Spices" },
      { id: 8, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon, juiced", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Slice cauliflower into 1-inch thick 'steaks'.", ingredients: [], equipment: [] },
      { number: 2, step: "Season with oil/cumin and roast at 425°F for 20 mins until charred.", ingredients: [], equipment: [] },
      { number: 3, step: "Pulse parsley, garlic, vinegar, and oil for the chimichurri.", ingredients: [], equipment: [] },
      { number: 4, step: "Plate steaks and spoon generous amounts of sauce over them.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3008,
    title: "Honey Soy Glazed Duck Breast",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 650,
    protein: "38g",
    fat: "42g",
    carbs: "18g",
    dishTypes: ["dinner"],
    summary: "Seared duck breast with perfectly rendered fat and a sweet umami glaze.",
    extendedIngredients: [
      { id: 1, name: "duck breast", amount: 2, unit: "", original: "2 duck breasts", aisle: "Meat" },
      { id: 2, name: "soy sauce", amount: 2, unit: "tbsp", original: "2 tbsp soy sauce", aisle: "Pantry" },
      { id: 3, name: "honey", amount: 3, unit: "tbsp", original: "3 tbsp honey", aisle: "Pantry" },
      { id: 4, name: "ginger", amount: 1, unit: "tsp", original: "1 tsp grated ginger", aisle: "Produce" },
      { id: 5, name: "star anise", amount: 1, unit: "whole", original: "1 star anise", aisle: "Spices" },
      { id: 6, name: "orange zest", amount: 1, unit: "tsp", original: "1 tsp orange zest", aisle: "Produce" },
      { id: 7, name: "chinese five spice", amount: 0.5, unit: "tsp", original: "1/2 tsp five spice", aisle: "Spices" },
      { id: 8, name: "sesame seeds", amount: 1, unit: "tsp", original: "1 tsp sesame seeds", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Score the duck skin in a diamond pattern.", ingredients: [], equipment: [] },
      { number: 2, step: "Place duck skin-side down in a COLD pan and gradually heat up to render fat.", ingredients: [], equipment: [] },
      { number: 3, step: "Cook skin for 8 mins, flip and cook meat for 4 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Glaze with honey/soy mix and let rest before slicing.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3009,
    title: "French Coq au Vin",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 90,
    servings: 4,
    calories: 550,
    protein: "42g",
    fat: "28g",
    carbs: "15g",
    dishTypes: ["dinner"],
    summary: "A classic French chicken stew braised with red wine, lardons, mushrooms, and pearl onions.",
    extendedIngredients: [
      { id: 1, name: "chicken", amount: 1.5, unit: "kg", original: "1.5kg chicken pieces", aisle: "Meat" },
      { id: 2, name: "red wine", amount: 750, unit: "ml", original: "750ml Burgundy red wine", aisle: "Beverages" },
      { id: 3, name: "bacon", amount: 150, unit: "g", original: "150g salt pork or thick-cut bacon", aisle: "Meat" },
      { id: 4, name: "mushrooms", amount: 250, unit: "g", original: "250g cremini mushrooms", aisle: "Produce" },
      { id: 5, name: "pearl onions", amount: 15, unit: "", original: "15-20 pearl onions, peeled", aisle: "Produce" },
      { id: 6, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic, minced", aisle: "Produce" },
      { id: 7, name: "thyme", amount: 3, unit: "sprigs", original: "3 sprigs fresh thyme", aisle: "Produce" },
      { id: 8, name: "butter", amount: 2, unit: "tbsp", original: "2 tbsp butter", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Brown bacon in a large ovenproof pot; remove bacon and brown chicken in the fat.", ingredients: [], equipment: [] },
      { number: 2, step: "Add garlic, onions, and mushrooms; cook for 5 mins.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour in wine and add thyme; simmer on low heat or bake at 150°C for 60-90 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Remove chicken, whisk butter into the sauce to thicken, then return chicken and bacon to the pot.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3010,
    title: "Indian Butter Chicken (Murgh Makhani)",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1603894584202-9ca82439f092?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 4,
    calories: 480,
    protein: "32g",
    fat: "34g",
    carbs: "12g",
    dishTypes: ["dinner"],
    summary: "Tender chicken in a velvety, spice-infused tomato and cream sauce.",
    extendedIngredients: [
      { id: 1, name: "chicken breast", amount: 800, unit: "g", original: "800g chicken breast, cubed", aisle: "Meat" },
      { id: 2, name: "tomato puree", amount: 400, unit: "g", original: "400g tomato puree", aisle: "Produce" },
      { id: 3, name: "heavy cream", amount: 150, unit: "ml", original: "150ml heavy cream", aisle: "Dairy" },
      { id: 4, name: "butter", amount: 50, unit: "g", original: "50g unsalted butter", aisle: "Dairy" },
      { id: 5, name: "ginger garlic paste", amount: 2, unit: "tbsp", original: "2 tbsp ginger garlic paste", aisle: "Produce" },
      { id: 6, name: "garam masala", amount: 1, unit: "tsp", original: "1 tsp garam masala", aisle: "Spices" },
      { id: 7, name: "kasuri methi", amount: 1, unit: "tbsp", original: "1 tbsp dried fenugreek leaves", aisle: "Spices" },
      { id: 8, name: "kasmiri chili powder", amount: 1, unit: "tsp", original: "1 tsp kasmiri chili powder", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Marinate chicken in yogurt and spices, then sear in a pan until golden.", ingredients: [], equipment: [] },
      { number: 2, step: "In the same pan, melt butter and cook tomato puree with ginger-garlic paste and chili.", ingredients: [], equipment: [] },
      { number: 3, step: "Add cream and garam masala, simmer for 10 minutes until thickened.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in the chicken and fenugreek leaves; serve hot with naan.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3011,
    title: "Chicken Teriyaki with Steamed Broccoli",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1598514983318-29141990e14c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 420,
    protein: "35g",
    fat: "12g",
    carbs: "38g",
    dishTypes: ["dinner"],
    summary: "Salty-sweet Japanese classic served with fresh greens and sticky rice.",
    extendedIngredients: [
      { id: 1, name: "chicken thighs", amount: 400, unit: "g", original: "400g boneless chicken thighs", aisle: "Meat" },
      { id: 2, name: "soy sauce", amount: 0.25, unit: "cup", original: "1/4 cup soy sauce", aisle: "Pantry" },
      { id: 3, name: "mirin", amount: 0.25, unit: "cup", original: "1/4 cup mirin", aisle: "Pantry" },
      { id: 4, name: "sugar", amount: 2, unit: "tbsp", original: "2 tbsp brown sugar", aisle: "Pantry" },
      { id: 5, name: "ginger", amount: 1, unit: "tsp", original: "1 tsp grated ginger", aisle: "Produce" },
      { id: 6, name: "broccoli", amount: 1, unit: "head", original: "1 head broccoli", aisle: "Produce" },
      { id: 7, name: "sesame seeds", amount: 1, unit: "tsp", original: "Sesame seeds for garnish", aisle: "Pantry" },
      { id: 8, name: "cornstarch", amount: 1, unit: "tsp", original: "1 tsp cornstarch", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Cook soy sauce, mirin, sugar, and ginger in a pan until slightly thickened.", ingredients: [], equipment: [] },
      { number: 2, step: "Sear chicken thighs in a separate skillet until crispy and cooked through.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour teriyaki sauce over chicken and toss to glaze.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve chicken with steamed broccoli and a sprinkle of sesame seeds.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3012,
    title: "Beef Enchiladas with Red Sauce",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1533777324565-a040eb52faf1?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 4,
    calories: 580,
    protein: "34g",
    fat: "32g",
    carbs: "45g",
    dishTypes: ["dinner"],
    summary: "Authentic Mexican-style comfort food: tortillas stuffed with seasoned beef and smothered in cheese.",
    extendedIngredients: [
      { id: 1, name: "ground beef", amount: 500, unit: "g", original: "500g lean ground beef", aisle: "Meat" },
      { id: 2, name: "corn tortillas", amount: 8, unit: "", original: "8 corn tortillas", aisle: "Pantry" },
      { id: 3, name: "enchilada sauce", amount: 2, unit: "cups", original: "2 cups red enchilada sauce", aisle: "Pantry" },
      { id: 4, name: "cheddar cheese", amount: 2, unit: "cups", original: "2 cups shredded cheddar cheese", aisle: "Dairy" },
      { id: 5, name: "onion", amount: 1, unit: "", original: "1 small onion, diced", aisle: "Produce" },
      { id: 6, name: "chili powder", amount: 1, unit: "tbsp", original: "1 tbsp chili powder", aisle: "Spices" },
      { id: 7, name: "cumin", amount: 1, unit: "tsp", original: "1 tsp cumin", aisle: "Spices" },
      { id: 8, name: "sour cream", amount: 0.5, unit: "cup", original: "Sour cream for topping", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Brown beef with onions, cumin, and chili powder; stir in 1/2 cup of sauce.", ingredients: [], equipment: [] },
      { number: 2, step: "Dip tortillas in sauce to soften, fill with beef mixture and roll tightly.", ingredients: [], equipment: [] },
      { number: 3, step: "Place in a baking dish, cover with remaining sauce and cheese.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 190°C for 20 minutes until the cheese is bubbly and edges are crisp.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3013,
    title: "Peruvian Lomo Saltado",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 490,
    protein: "38g",
    fat: "22g",
    carbs: "35g",
    dishTypes: ["dinner"],
    summary: "A high-heat stir-fry of beef, onions, tomatoes, and french fries, showcasing Peru's Chifa influence.",
    extendedIngredients: [
      { id: 1, name: "sirloin beef", amount: 400, unit: "g", original: "400g sirloin steak, sliced against the grain", aisle: "Meat" },
      { id: 2, name: "red onion", amount: 1, unit: "", original: "1 red onion, sliced into wedges", aisle: "Produce" },
      { id: 3, name: "tomatoes", amount: 2, unit: "", original: "2 plum tomatoes, sliced", aisle: "Produce" },
      { id: 4, name: "french fries", amount: 2, unit: "cups", original: "2 cups cooked crispy french fries", aisle: "Frozen" },
      { id: 5, name: "soy sauce", amount: 2, unit: "tbsp", original: "2 tbsp soy sauce", aisle: "Pantry" },
      { id: 6, name: "vinegar", amount: 1, unit: "tbsp", original: "1 tbsp red wine vinegar", aisle: "Pantry" },
      { id: 7, name: "cilantro", amount: 2, unit: "tbsp", original: "Fresh cilantro, chopped", aisle: "Produce" },
      { id: 8, name: "aji amarillo", amount: 1, unit: "tbsp", original: "1 tbsp aji amarillo paste (optional)", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Stir-fry beef in a very hot wok until browned; remove and set aside.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté onions and aji amarillo until just softened, then add tomatoes.", ingredients: [], equipment: [] },
      { number: 3, step: "Deglaze with soy sauce and vinegar; return beef and juices to the pan.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss in the crispy fries and cilantro; serve with white rice.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3014,
    title: "Greek Moussaka",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1540185373-b39f1df93a11?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 75,
    servings: 6,
    calories: 520,
    protein: "28g",
    fat: "32g",
    carbs: "30g",
    dishTypes: ["dinner"],
    summary: "Layers of eggplant, spiced meat sauce, and creamy béchamel baked to perfection.",
    extendedIngredients: [
      { id: 1, name: "eggplant", amount: 2, unit: "", original: "2 large eggplants, sliced", aisle: "Produce" },
      { id: 2, name: "ground lamb", amount: 500, unit: "g", original: "500g ground lamb or beef", aisle: "Meat" },
      { id: 3, name: "potatoes", amount: 3, unit: "", original: "3 large potatoes, sliced and fried", aisle: "Produce" },
      { id: 4, name: "tomato sauce", amount: 1.5, unit: "cups", original: "1.5 cups tomato sauce", aisle: "Pantry" },
      { id: 5, name: "cinnamon", amount: 0.5, unit: "tsp", original: "1/2 tsp ground cinnamon", aisle: "Spices" },
      { id: 6, name: "milk", amount: 3, unit: "cups", original: "3 cups milk for béchamel", aisle: "Dairy" },
      { id: 7, name: "flour", amount: 3, unit: "tbsp", original: "3 tbsp all-purpose flour", aisle: "Baking" },
      { id: 8, name: "kefalotyri cheese", amount: 0.5, unit: "cup", original: "1/2 cup grated kefalotyri or parmesan", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Roast eggplant slices until golden; brown the meat with onions and cinnamon.", ingredients: [], equipment: [] },
      { number: 2, step: "Add tomato sauce to the meat and simmer until thick.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer potatoes, meat sauce, and eggplant in a large baking dish.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with thick béchamel sauce and cheese; bake at 180°C for 45 mins.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3015,
    title: "Thai Green Curry",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 460,
    protein: "24g",
    fat: "35g",
    carbs: "18g",
    dishTypes: ["dinner"],
    summary: "Fragrant, spicy, and creamy curry with tender chicken and bamboo shoots.",
    extendedIngredients: [
      { id: 1, name: "green curry paste", amount: 3, unit: "tbsp", original: "3 tbsp Thai green curry paste", aisle: "Spices" },
      { id: 2, name: "coconut milk", amount: 400, unit: "ml", original: "1 can full-fat coconut milk", aisle: "Dairy" },
      { id: 3, name: "chicken breast", amount: 300, unit: "g", original: "300g chicken, thinly sliced", aisle: "Meat" },
      { id: 4, name: "bamboo shoots", amount: 150, unit: "g", original: "150g canned bamboo shoots", aisle: "Produce" },
      { id: 5, name: "fish sauce", amount: 1, unit: "tbsp", original: "1 tbsp fish sauce", aisle: "Pantry" },
      { id: 6, name: "palm sugar", amount: 1, unit: "tsp", original: "1 tsp palm sugar", aisle: "Pantry" },
      { id: 7, name: "kaffir lime leaves", amount: 3, unit: "", original: "3 kaffir lime leaves", aisle: "Produce" },
      { id: 8, name: "thai basil", amount: 0.5, unit: "cup", original: "1/2 cup Thai basil leaves", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Fry curry paste with a bit of coconut cream until aromatic.", ingredients: [], equipment: [] },
      { number: 2, step: "Add chicken and cook until opaque; pour in the rest of the coconut milk.", ingredients: [], equipment: [] },
      { number: 3, step: "Add bamboo shoots, lime leaves, fish sauce, and sugar; simmer for 10 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in Thai basil at the very end and serve with jasmine rice.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 3016,
    title: "Herb-Crusted Rack of Lamb",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1544025162-d7659a7a8d14?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 2,
    calories: 580,
    protein: "42g",
    fat: "45g",
    carbs: "4g",
    dishTypes: ["dinner"],
    summary: "Elegant rack of lamb roasted with a fragrant crust of rosemary, thyme, and roasted garlic.",
    extendedIngredients: [
      { id: 1, name: "rack of lamb", amount: 1, unit: "lb", original: "1 lb rack of lamb", aisle: "Meat" },
      { id: 2, name: "rosemary", amount: 2, unit: "tbsp", original: "2 tbsp fresh chopped rosemary", aisle: "Produce" },
      { id: 3, name: "thyme", amount: 1, unit: "tbsp", original: "1 tbsp fresh chopped thyme", aisle: "Produce" },
      { id: 4, name: "garlic", amount: 4, unit: "cloves", original: "4 cloves garlic, minced", aisle: "Produce" },
      { id: 5, name: "dijon mustard", amount: 2, unit: "tbsp", original: "2 tbsp dijon mustard", aisle: "Pantry" },
      { id: 6, name: "breadcrumbs", amount: 0.5, unit: "cup", original: "1/2 cup panko breadcrumbs", aisle: "Pantry" },
      { id: 7, name: "olive oil", amount: 2, unit: "tbsp", original: "2 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "red wine", amount: 0.5, unit: "cup", original: "1/2 cup red wine for reduction", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sear the lamb in a hot pan to brown all sides.", ingredients: [], equipment: [] },
      { number: 2, step: "Brush with mustard and press the herb-breadcrumb mixture onto the fat cap.", ingredients: [], equipment: [] },
      { number: 3, step: "Roast at 400°F (200°C) for 15-20 minutes for medium-rare.", ingredients: [], equipment: [] },
      { number: 4, step: "Rest for 10 minutes before carving into individual chops.", ingredients: [] }
    ]}]
  },
  {
    id: 3017,
    title: "Crispy Skin Duck Breast with Cherry Sauce",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 480,
    protein: "28g",
    fat: "32g",
    carbs: "18g",
    dishTypes: ["dinner"],
    summary: "Perfectly seared duck breast served with a sophisticated sweet and tart cherry balsamic reduction.",
    extendedIngredients: [
      { id: 1, name: "duck breast", amount: 2, unit: "", original: "2 duck breasts, skin-on", aisle: "Meat" },
      { id: 2, name: "cherries", amount: 1, unit: "cup", original: "1 cup pitted cherries", aisle: "Produce" },
      { id: 3, name: "balsamic vinegar", amount: 2, unit: "tbsp", original: "2 tbsp balsamic vinegar", aisle: "Pantry" },
      { id: 4, name: "shallot", amount: 1, unit: "", original: "1 shallot, minced", aisle: "Produce" },
      { id: 5, name: "honey", amount: 1, unit: "tbsp", original: "1 tbsp honey", aisle: "Pantry" },
      { id: 6, name: "red wine", amount: 0.25, unit: "cup", original: "1/4 cup red wine", aisle: "Pantry" },
      { id: 7, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp cold butter", aisle: "Dairy" },
      { id: 8, name: "stars anise", amount: 1, unit: "", original: "1 star anise", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Score the duck skin in a diamond pattern without cutting the meat.", ingredients: [], equipment: [] },
      { number: 2, step: "Start skin-side down in a cold pan; cook on medium-low until fat renders and skin is crispy.", ingredients: [], equipment: [] },
      { number: 3, step: "Flip and finish cooking to desired doneness; rest the meat.", ingredients: [], equipment: [] },
      { number: 4, step: "In the same pan, sauté shallots and cherries with wine and honey to make the sauce.", ingredients: [] }
    ]}]
  },
  {
    id: 3018,
    title: "Thai Red Curry with Roasted Duck",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 35,
    servings: 4,
    calories: 520,
    protein: "26g",
    fat: "38g",
    carbs: "22g",
    dishTypes: ["dinner"],
    summary: "A rich and spicy coconut curry featuring succulent roasted duck, pineapple, and cherry tomatoes.",
    extendedIngredients: [
      { id: 1, name: "roasted duck", amount: 500, unit: "g", original: "500g roasted duck, sliced", aisle: "Meat" },
      { id: 2, name: "red curry paste", amount: 3, unit: "tbsp", original: "3 tbsp Thai red curry paste", aisle: "International" },
      { id: 3, name: "coconut milk", amount: 2, unit: "cups", original: "2 cups full-fat coconut milk", aisle: "Dairy" },
      { id: 4, name: "pineapple", amount: 1, unit: "cup", original: "1 cup pineapple chunks", aisle: "Produce" },
      { id: 5, name: "cherry tomatoes", amount: 10, unit: "", original: "10 cherry tomatoes", aisle: "Produce" },
      { id: 6, name: "bamboo shoots", amount: 0.5, unit: "cup", original: "1/2 cup bamboo shoots", aisle: "International" },
      { id: 7, name: "fish sauce", amount: 2, unit: "tbsp", original: "2 tbsp fish sauce", aisle: "International" },
      { id: 8, name: "thai basil", amount: 0.5, unit: "cup", original: "Handful of Thai basil leaves", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Fry curry paste in a little coconut cream until fragrant.", ingredients: [], equipment: [] },
      { number: 2, step: "Add remaining coconut milk and bring to a simmer.", ingredients: [], equipment: [] },
      { number: 3, step: "Add duck, pineapple, tomatoes, and bamboo shoots; cook for 10 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Season with fish sauce and sugar; stir in basil just before serving.", ingredients: [] }
    ]}]
  },
  {
    id: 3019,
    title: "Coq au Vin (French Chicken in Red Wine)",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 90,
    servings: 4,
    calories: 550,
    protein: "45g",
    fat: "30g",
    carbs: "18g",
    dishTypes: ["dinner"],
    summary: "Classic French bistro fare: chicken braised with red wine, mushrooms, and lardon bacon.",
    extendedIngredients: [
      { id: 1, name: "chicken thighs", amount: 8, unit: "", original: "8 bone-in chicken thighs", aisle: "Meat" },
      { id: 2, name: "red wine", amount: 750, unit: "ml", original: "1 bottle dry red wine (Pinot Noir)", aisle: "Pantry" },
      { id: 3, name: "bacon lardons", amount: 150, unit: "g", original: "150g bacon lardons", aisle: "Meat" },
      { id: 4, name: "mushrooms", amount: 250, unit: "g", original: "250g cremini mushrooms", aisle: "Produce" },
      { id: 5, name: "pearl onions", amount: 1, unit: "cup", original: "1 cup peeled pearl onions", aisle: "Produce" },
      { id: 6, name: "carrots", amount: 2, unit: "", original: "2 carrots, sliced", aisle: "Produce" },
      { id: 7, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic", aisle: "Produce" },
      { id: 8, name: "thyme", amount: 3, unit: "sprigs", original: "3 sprigs fresh thyme", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Brown the chicken and bacon in a large Dutch oven; remove.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté vegetables and garlic until soft.", ingredients: [], equipment: [] },
      { number: 3, step: "Return chicken and bacon; pour in wine and add thyme.", ingredients: [], equipment: [] },
      { number: 4, step: "Braise in the oven at 325°F for 1 hour until chicken is fall-apart tender.", ingredients: [] }
    ]}]
  },
  {
    id: 3020,
    title: "Moroccan Lamb Tagine",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1541518763669-279f0491753a?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 4,
    calories: 620,
    protein: "38g",
    fat: "32g",
    carbs: "45g",
    dishTypes: ["dinner"],
    summary: "A slow-cooked Moroccan stew with tender lamb, dried apricots, and warming cinnamon spices.",
    extendedIngredients: [
      { id: 1, name: "lamb shoulder", amount: 800, unit: "g", original: "800g lamb shoulder, cubed", aisle: "Meat" },
      { id: 2, name: "dried apricots", amount: 1, unit: "cup", original: "1 cup dried apricots", aisle: "Produce" },
      { id: 3, name: "chickpeas", amount: 1, unit: "can", original: "1 can chickpeas, drained", aisle: "Canned" },
      { id: 4, name: "onion", amount: 2, unit: "", original: "2 large onions, chopped", aisle: "Produce" },
      { id: 5, name: "ginger", amount: 1, unit: "tbsp", original: "1 tbsp fresh grated ginger", aisle: "Produce" },
      { id: 6, name: "cinnamon", amount: 1, unit: "stick", original: "1 cinnamon stick", aisle: "Spices" },
      { id: 7, name: "turmeric", amount: 1, unit: "tsp", original: "1 tsp turmeric", aisle: "Spices" },
      { id: 8, name: "almonds", amount: 0.25, unit: "cup", original: "1/4 cup toasted slivered almonds", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté onions, ginger, and garlic; add lamb and brown well.", ingredients: [], equipment: [] },
      { number: 2, step: "Add spices, water, and cinnamon; cover and simmer for 1.5 hours.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in apricots and chickpeas; cook for another 30 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with fresh cilantro and toasted almonds before serving.", ingredients: [] }
    ]}]
  },

  // --- MAIN DISHES (8 RECIPES) ---
  {
    id: 4001,
    title: "Hearty Beef Lasagna",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 75,
    servings: 6,
    calories: 680,
    protein: "42g",
    fat: "38g",
    carbs: "45g",
    dishTypes: ["main dish"],
    summary: "Layers of tradition: rich meat ragu, silky pasta, and bubbly four-cheese blend.",
    extendedIngredients: [
      { id: 1, name: "ground beef", amount: 1, unit: "lb", original: "1 lb lean ground beef", aisle: "Meat" },
      { id: 2, name: "lasagna noodles", amount: 12, unit: "", original: "12 lasagna noodles", aisle: "Pasta" },
      { id: 3, name: "ricotta", amount: 15, unit: "oz", original: "15 oz ricotta cheese", aisle: "Dairy" },
      { id: 4, name: "mozzarella", amount: 2, unit: "cups", original: "2 cups shredded mozzarella", aisle: "Dairy" },
      { id: 5, name: "marinara sauce", amount: 24, unit: "oz", original: "24 oz marinara", aisle: "Pantry" },
      { id: 6, name: "egg", amount: 1, unit: "", original: "1 beaten egg", aisle: "Dairy" },
      { id: 7, name: "parmesan", amount: 0.5, unit: "cup", original: "1/2 cup parmesan", aisle: "Dairy" },
      { id: 8, name: "baby spinach", amount: 2, unit: "cups", original: "2 cups spinach", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Simmer ground beef with marinara sauce for 15 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Mix ricotta, egg, and spinach in a bowl.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer sauce, noodles, ricotta mix, and mozzarella in a baking dish.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 375°F (190°C) for 45 minutes until bubbly and golden.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4016,
    title: "Whole Roasted Mediterranean Sea Bass",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 2,
    calories: 320,
    protein: "45g",
    fat: "14g",
    carbs: "0g",
    dishTypes: ["main course"],
    summary: "Fresh whole sea bass stuffed with lemon and herbs, roasted to flaky perfection.",
    extendedIngredients: [
      { id: 1, name: "sea bass", amount: 1, unit: "whole", original: "1 whole sea bass (1.5 lbs)", aisle: "Meat" },
      { id: 2, name: "lemon", amount: 2, unit: "", original: "2 lemons, sliced", aisle: "Produce" },
      { id: 3, name: "parsley", amount: 1, unit: "bunch", original: "Handful of fresh parsley", aisle: "Produce" },
      { id: 4, name: "rosemary", amount: 2, unit: "sprigs", original: "2 sprigs fresh rosemary", aisle: "Produce" },
      { id: 5, name: "garlic", amount: 4, unit: "cloves", original: "4 cloves garlic, crushed", aisle: "Produce" },
      { id: 6, name: "olive oil", amount: 3, unit: "tbsp", original: "3 tbsp extra virgin olive oil", aisle: "Pantry" },
      { id: 7, name: "sea salt", amount: 1, unit: "tsp", original: "Flaky sea salt", aisle: "Spices" },
      { id: 8, name: "white wine", amount: 0.25, unit: "cup", original: "1/4 cup dry white wine", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Clean and score the fish on both sides.", ingredients: [], equipment: [] },
      { number: 2, step: "Stuff the cavity with lemon, herbs, and garlic.", ingredients: [], equipment: [] },
      { number: 3, step: "Drizzle with oil and wine; roast at 400°F (200°C) for 25-30 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve immediately with a squeeze of fresh lemon juice.", ingredients: [] }
    ]}]
  },
  {
    id: 4017,
    title: "Vegetarian Eggplant Mousaka",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1540185373-b39f1df93a11?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 60,
    servings: 4,
    calories: 350,
    protein: "14g",
    fat: "22g",
    carbs: "38g",
    dishTypes: ["main course"],
    summary: "A Greek-inspired layered casserole with roasted eggplant, spiced lentils, and creamy béchamel.",
    extendedIngredients: [
      { id: 1, name: "eggplant", amount: 2, unit: "large", original: "2 large eggplants, sliced", aisle: "Produce" },
      { id: 2, name: "lentils", amount: 1, unit: "cup", original: "1 cup dried green lentils", aisle: "Grains" },
      { id: 3, name: "tomato sauce", amount: 2, unit: "cups", original: "2 cups tomato passata", aisle: "Canned" },
      { id: 4, name: "onion", amount: 1, unit: "", original: "1 large onion, diced", aisle: "Produce" },
      { id: 5, name: "cinnamon", amount: 0.5, unit: "tsp", original: "Pinch of cinnamon", aisle: "Spices" },
      { id: 6, name: "milk", amount: 2, unit: "cups", original: "2 cups milk for béchamel", aisle: "Dairy" },
      { id: 7, name: "butter", amount: 2, unit: "tbsp", original: "2 tbsp butter", aisle: "Dairy" },
      { id: 8, name: "flour", amount: 2, unit: "tbsp", original: "2 tbsp flour", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Roast eggplant slices until tender; cook lentils with tomatoes and spices.", ingredients: [], equipment: [] },
      { number: 2, step: "Make a thick béchamel sauce with butter, flour, and milk.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer eggplant and lentils in a dish; top with the béchamel.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 375°F for 30 minutes until the top is bubbly and golden.", ingredients: [] }
    ]}]
  },
  {
    id: 4018,
    title: "Crispy Korean Fried Chicken",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 650,
    protein: "38g",
    fat: "35g",
    carbs: "45g",
    dishTypes: ["main course"],
    summary: "Double-fried chicken wings glazed in a spicy, sweet gochujang sauce.",
    extendedIngredients: [
      { id: 1, name: "chicken wings", amount: 1, unit: "kg", original: "1kg chicken wings", aisle: "Meat" },
      { id: 2, name: "potato starch", amount: 1, unit: "cup", original: "1 cup potato starch", aisle: "Baking" },
      { id: 3, name: "gochujang", amount: 3, unit: "tbsp", original: "3 tbsp Korean chili paste", aisle: "International" },
      { id: 4, name: "soy sauce", amount: 2, unit: "tbsp", original: "2 tbsp soy sauce", aisle: "International" },
      { id: 5, name: "honey", amount: 0.25, unit: "cup", original: "1/4 cup honey", aisle: "Pantry" },
      { id: 6, name: "garlic", amount: 4, unit: "cloves", original: "4 cloves garlic, minced", aisle: "Produce" },
      { id: 7, name: "ginger", amount: 1, unit: "tsp", original: "1 tsp ginger, grated", aisle: "Produce" },
      { id: 8, name: "sesame seeds", amount: 1, unit: "tbsp", original: "Toasted sesame seeds", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Coat chicken in potato starch and fry at 350°F for 10 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Let rest, then fry again at 375°F for 5 minutes until extra crispy.", ingredients: [], equipment: [] },
      { number: 3, step: "Simmer gochujang, soy, honey, garlic and ginger to make the glaze.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss the hot chicken in the glaze and garnish with sesame seeds.", ingredients: [] }
    ]}]
  },
  {
    id: 4019,
    title: "Swedish Meatballs with Lingonberry Jam",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1529692236671-fd7668612fab?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 4,
    calories: 520,
    protein: "32g",
    fat: "35g",
    carbs: "22g",
    dishTypes: ["main course"],
    summary: "Savory beef and pork meatballs in a rich cream gravy, served with mashed potatoes and jam.",
    extendedIngredients: [
      { id: 1, name: "ground beef", amount: 300, unit: "g", original: "300g ground beef", aisle: "Meat" },
      { id: 2, name: "ground pork", amount: 300, unit: "g", original: "300g ground pork", aisle: "Meat" },
      { id: 3, name: "breadcrumbs", amount: 0.5, unit: "cup", original: "1/2 cup breadcrumbs", aisle: "Pantry" },
      { id: 4, name: "milk", amount: 0.25, unit: "cup", original: "1/4 cup milk", aisle: "Dairy" },
      { id: 5, name: "beef broth", amount: 2, unit: "cups", original: "2 cups beef broth", aisle: "Canned" },
      { id: 6, name: "heavy cream", amount: 0.5, unit: "cup", original: "1/2 cup heavy cream", aisle: "Dairy" },
      { id: 7, name: "allspice", amount: 0.25, unit: "tsp", original: "Pinch of ground allspice", aisle: "Spices" },
      { id: 8, name: "lingonberry jam", amount: 0.25, unit: "cup", original: "Lingonberry jam for serving", aisle: "International" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix meats, breadcrumbs, milk, and spices; roll into small balls.", ingredients: [], equipment: [] },
      { number: 2, step: "Fry meatballs in butter until browned and cooked through; remove.", ingredients: [], equipment: [] },
      { number: 3, step: "Whisk flour into the pan drippings, then stir in broth and cream for the gravy.", ingredients: [], equipment: [] },
      { number: 4, step: "Add meatballs back to the gravy and serve with jam.", ingredients: [] }
    ]}]
  },
  {
    id: 4020,
    title: "Indian Butter Chicken (Murgh Makhani)",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 50,
    servings: 4,
    calories: 580,
    protein: "42g",
    fat: "40g",
    carbs: "12g",
    dishTypes: ["main course"],
    summary: "Tender tandoori-style chicken in a silky, mildly spiced tomato and butter sauce.",
    extendedIngredients: [
      { id: 1, name: "chicken thighs", amount: 800, unit: "g", original: "800g boneless chicken thighs", aisle: "Meat" },
      { id: 2, name: "yogurt", amount: 0.5, unit: "cup", original: "1/2 cup plain yogurt", aisle: "Dairy" },
      { id: 3, name: "garam masala", amount: 2, unit: "tsp", original: "2 tsp garam masala", aisle: "Spices" },
      { id: 4, name: "tomato puree", amount: 2, unit: "cups", original: "2 cups tomato puree", aisle: "Canned" },
      { id: 5, name: "butter", amount: 100, unit: "g", original: "100g unsalted butter", aisle: "Dairy" },
      { id: 6, name: "heavy cream", amount: 1, unit: "cup", original: "1 cup heavy cream", aisle: "Dairy" },
      { id: 7, name: "ginger-garlic paste", amount: 2, unit: "tbsp", original: "2 tbsp ginger-garlic paste", aisle: "International" },
      { id: 8, name: "kasuri methi", amount: 1, unit: "tbsp", original: "1 tbsp dried fenugreek leaves", aisle: "International" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Marinate chicken in yogurt and garam masala for 1 hour; grilled until charred.", ingredients: [], equipment: [] },
      { number: 2, step: "Simmer tomato puree with ginger-garlic paste and butter.", ingredients: [], equipment: [] },
      { number: 3, step: "Add grilled chicken and heavy cream; simmer for 15 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in fenugreek leaves and serve with warm naan.", ingredients: [] }
    ]}]
  },
  {
    id: 4002,
    title: "Grilled Ribeye with Garlic Butter",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 780,
    protein: "58g",
    fat: "62g",
    carbs: "2g",
    dishTypes: ["main dish"],
    summary: "Thick-cut ribeye steak grilled to preferred doneness and basted in artisanal garlic butter.",
    extendedIngredients: [
      { id: 1, name: "ribeye steak", amount: 2, unit: "", original: "2 thick ribeye steaks", aisle: "Meat" },
      { id: 2, name: "butter", amount: 4, unit: "tbsp", original: "4 tbsp unsalted butter", aisle: "Dairy" },
      { id: 3, name: "garlic", amount: 4, unit: "cloves", original: "4 cloves garlic, crushed", aisle: "Produce" },
      { id: 4, name: "rosemary", amount: 2, unit: "sprigs", original: "2 sprigs fresh rosemary", aisle: "Produce" },
      { id: 5, name: "sea salt", amount: 1, unit: "tsp", original: "Flaky sea salt", aisle: "Spices" },
      { id: 6, name: "black pepper", amount: 1, unit: "tsp", original: "Fresh cracked pepper", aisle: "Spices" },
      { id: 7, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "thyme", amount: 2, unit: "sprigs", original: "2 sprigs fresh thyme", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Bring steaks to room temperature and season heavily with salt and pepper.", ingredients: [], equipment: [] },
      { number: 2, step: "Sear steaks in a hot cast iron skillet for 4 mins per side.", ingredients: [], equipment: [] },
      { number: 3, step: "Add butter, garlic, and herbs to the pan; baste steak for 2 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Rest for 10 minutes before slicing to keep juices locked in.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4003,
    title: "Seafood Paella with Saffron",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1534080564617-319a94168019?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 50,
    servings: 4,
    calories: 420,
    protein: "35g",
    fat: "14g",
    carbs: "55g",
    dishTypes: ["main dish"],
    summary: "Authentic Spanish rice dish with saffron, mussels, shrimp, and chorizo.",
    extendedIngredients: [
      { id: 1, name: "bomba rice", amount: 1.5, unit: "cups", original: "1.5 cups bomba rice", aisle: "Grains" },
      { id: 2, name: "shrimp", amount: 8, unit: "", original: "8 large shrimp", aisle: "Meat" },
      { id: 3, name: "mussels", amount: 8, unit: "", original: "8 fresh mussels", aisle: "Meat" },
      { id: 4, name: "chorizo", amount: 100, unit: "g", original: "100g sliced chorizo", aisle: "Meat" },
      { id: 5, name: "saffron", amount: 1, unit: "pinch", original: "Pinch of saffron threads", aisle: "Spices" },
      { id: 6, name: "chicken broth", amount: 3, unit: "cups", original: "3 cups saffron-infused stock", aisle: "Pantry" },
      { id: 7, name: "peas", amount: 0.5, unit: "cup", original: "1/2 cup green peas", aisle: "Produce" },
      { id: 8, name: "lemon", amount: 1, unit: "", original: "1 lemon, sliced", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté chorizo and onion in a large paella pan.", ingredients: [], equipment: [] },
      { number: 2, step: "Add rice and saffron; toast slightly before pouring in stock.", ingredients: [], equipment: [] },
      { number: 3, step: "Simmer without stirring for 15 mins to form a crust (socarrat).", ingredients: [], equipment: [] },
      { number: 4, step: "Nestle seafood into the rice and cook until mussels open.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4004,
    title: "Chicken Tikka Masala",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 580,
    protein: "38g",
    fat: "32g",
    carbs: "22g",
    dishTypes: ["main dish"],
    summary: "Succulent grilled chicken in a creamy, spice-laden tomato sauce.",
    extendedIngredients: [
      { id: 1, name: "chicken thighs", amount: 600, unit: "g", original: "600g cubed thighs", aisle: "Meat" },
      { id: 2, name: "greek yogurt", amount: 1, unit: "cup", original: "1 cup yogurt marinade", aisle: "Dairy" },
      { id: 3, name: "garam masala", amount: 2, unit: "tbsp", original: "2 tbsp garam masala", aisle: "Spices" },
      { id: 4, name: "tomato puree", amount: 1.5, unit: "cups", original: "1.5 cups tomato sauce", aisle: "Pantry" },
      { id: 5, name: "heavy cream", amount: 0.5, unit: "cup", original: "1/2 cup heavy cream", aisle: "Dairy" },
      { id: 6, name: "ginger", amount: 1, unit: "tbsp", original: "1 tbsp ginger paste", aisle: "Produce" },
      { id: 7, name: "garlic", amount: 1, unit: "tbsp", original: "1 tbsp garlic paste", aisle: "Produce" },
      { id: 8, name: "fresh cilantro", amount: 0.25, unit: "cup", original: "Fresh cilantro", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Marinate chicken in yogurt and spices for at least 30 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Grill or sear chicken until charred and cooked through.", ingredients: [], equipment: [] },
      { number: 3, step: "Sauté ginger/garlic, add tomatoes and simmer for 10 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in cream and chicken; simmer for 5 mins and serve with naan.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4005,
    title: "Herb-Crusted Rack of Lamb",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 2,
    calories: 620,
    protein: "45g",
    fat: "48g",
    carbs: "8g",
    dishTypes: ["main dish"],
    summary: "Elegant rack of lamb with a crunchy garden-herb and dijon crust.",
    extendedIngredients: [
      { id: 1, name: "rack of lamb", amount: 1, unit: "rack", original: "1 eight-bone rack of lamb", aisle: "Meat" },
      { id: 2, name: "bread crumbs", amount: 0.5, unit: "cup", original: "1/2 cup panko crumbs", aisle: "Pantry" },
      { id: 3, name: "dijon mustard", amount: 2, unit: "tbsp", original: "2 tbsp dijon mustard", aisle: "Pantry" },
      { id: 4, name: "parsley", amount: 0.25, unit: "cup", original: "1/4 cup minced parsley", aisle: "Produce" },
      { id: 5, name: "rosemary", amount: 1, unit: "tbsp", original: "1 tbsp minced rosemary", aisle: "Produce" },
      { id: 6, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves minced garlic", aisle: "Produce" },
      { id: 7, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "mint", amount: 1, unit: "tbsp", original: "Fresh mint garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sear the rack of lamb on all sides until browned.", ingredients: [], equipment: [] },
      { number: 2, step: "Brush the meat side with dijon mustard.", ingredients: [], equipment: [] },
      { number: 3, step: "Press the herb-garlic-breadcrumb mix onto the mustard.", ingredients: [], equipment: [] },
      { number: 4, step: "Roast at 400°F (200°C) for 15-20 mins for medium-rare.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4006,
    title: "Vegetarian Buddha Bowl",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 1,
    calories: 420,
    protein: "14g",
    fat: "18g",
    carbs: "55g",
    dishTypes: ["main dish"],
    summary: "Balanced vegan main with roasted chickpeas, sweet potato, and tahini dressing.",
    extendedIngredients: [
      { id: 1, name: "sweet potato", amount: 1, unit: "", original: "1 sweet potato, cubed", aisle: "Produce" },
      { id: 2, name: "chickpeas", amount: 0.5, unit: "can", original: "1/2 can chickpeas", aisle: "Produce" },
      { id: 3, name: "kale", amount: 2, unit: "cups", original: "2 cups chopped kale", aisle: "Produce" },
      { id: 4, name: "quinoa", amount: 0.5, unit: "cup", original: "1/2 cup cooked quinoa", aisle: "Grains" },
      { id: 5, name: "tahini", amount: 2, unit: "tbsp", original: "2 tbsp tahini", aisle: "Pantry" },
      { id: 6, name: "avocado", amount: 0.5, unit: "", original: "1/2 avocado", aisle: "Produce" },
      { id: 7, name: "pumpkin seeds", amount: 1, unit: "tbsp", original: "1 tbsp seeds", aisle: "Pantry" },
      { id: 8, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon juice", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Roast sweet potatoes and chickpeas with oil and salt for 20 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Massage kale with a touch of oil and lemon juice.", ingredients: [], equipment: [] },
      { number: 3, step: "Whisk tahini and lemon juice with water into a sauce.", ingredients: [], equipment: [] },
      { number: 4, step: "Assemble bowl with quinoa base and drizzled tahini.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4007,
    title: "Osso Buco with Risotto",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 4,
    calories: 850,
    protein: "55g",
    fat: "58g",
    carbs: "32g",
    dishTypes: ["main dish"],
    summary: "Slow-braised veal shanks in a rich white wine and vegetable broth broth.",
    extendedIngredients: [
      { id: 1, name: "veal shanks", amount: 4, unit: "", original: "4 thick veal shanks", aisle: "Meat" },
      { id: 2, name: "white wine", amount: 1, unit: "cup", original: "1 cup dry white wine", aisle: "Pantry" },
      { id: 3, name: "beef stock", amount: 2, unit: "cups", original: "2 cups beef stock", aisle: "Pantry" },
      { id: 4, name: "carrots", amount: 2, unit: "", original: "2 carrots, diced", aisle: "Produce" },
      { id: 5, name: "celery", amount: 2, unit: "stalks", original: "2 celery stalks", aisle: "Produce" },
      { id: 6, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic", aisle: "Produce" },
      { id: 7, name: "onion", amount: 1, unit: "", original: "1 onion, diced", aisle: "Produce" },
      { id: 8, name: "lemon zest", amount: 1, unit: "tbsp", original: "Lemon zest for gremolata", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Brown veal shanks in a large dutch oven.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté mirepoix (onions/carrots/celery) until soft.", ingredients: [], equipment: [] },
      { number: 3, step: "Deglaze with wine and add stock; cover and braise for 2 hours.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve over saffron risotto with a sprinkling of gremolata.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4008,
    title: "Duck à l'Orange",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 60,
    servings: 2,
    calories: 720,
    protein: "40g",
    fat: "55g",
    carbs: "15g",
    dishTypes: ["main dish"],
    summary: "Refined French classic: roasted duck with a bitter-sweet orange gastrique.",
    extendedIngredients: [
      { id: 1, name: "duck breast", amount: 2, unit: "", original: "2 duck breasts", aisle: "Meat" },
      { id: 2, name: "orange juice", amount: 1, unit: "cup", original: "1 cup fresh orange juice", aisle: "Produce" },
      { id: 3, name: "sugar", amount: 2, unit: "tbsp", original: "2 tbsp sugar", aisle: "Pantry" },
      { id: 4, name: "cider vinegar", amount: 2, unit: "tbsp", original: "2 tbsp vinegar", aisle: "Pantry" },
      { id: 5, name: "duck stock", amount: 0.5, unit: "cup", original: "1/2 cup duck or chicken stock", aisle: "Pantry" },
      { id: 6, name: "cointreau", amount: 1, unit: "tbsp", original: "1 tbsp cointreau (optional)", aisle: "Pantry" },
      { id: 7, name: "navel orange", amount: 1, unit: "", original: "1 navel orange for segments", aisle: "Produce" },
      { id: 8, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp cold butter", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Score duck skin and render fat in a cold pan slowly.", ingredients: [], equipment: [] },
      { number: 2, step: "In a separate pan, create a gastrique with sugar and vinegar.", ingredients: [], equipment: [] },
      { number: 3, step: "Add orange juice and stock to gastrique; reduce until thickened.", ingredients: [], equipment: [] },
      { number: 4, step: "Finish sauce with cold butter and serve over sliced duck.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4009,
    title: "Japanese Wagyu Ribeye Steak",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 820,
    protein: "45g",
    fat: "65g",
    carbs: "0g",
    dishTypes: ["main dish"],
    summary: "Ultra-premium A5 Wagyu beef, lightly seared to highlight its incredible marbling and buttery texture.",
    extendedIngredients: [
      { id: 1, name: "wagyu ribeye", amount: 300, unit: "g", original: "300g A5 Japanese Wagyu ribeye", aisle: "Meat" },
      { id: 2, name: "sea salt", amount: 1, unit: "tsp", original: "Flaky sea salt", aisle: "Spices" },
      { id: 3, name: "wasabi", amount: 1, unit: "tsp", original: "Freshly grated wasabi", aisle: "Produce" },
      { id: 4, name: "garlic chips", amount: 1, unit: "tbsp", original: "Crispy garlic chips", aisle: "Produce" },
      { id: 5, name: "soy sauce", amount: 1, unit: "tsp", original: "Aged soy sauce", aisle: "Pantry" },
      { id: 6, name: "black pepper", amount: 0.5, unit: "tsp", original: "Fresh cracked pepper", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Bring the steak to room temperature and season very lightly with salt.", ingredients: [], equipment: [] },
      { number: 2, step: "Sear in a very hot dry pan (the fat will render instantly) for 1-2 mins per side.", ingredients: [], equipment: [] },
      { number: 3, step: "Let the steak rest for at least 5 minutes to allow juices to redistribute.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve sliced thin with wasabi, sea salt, and a dash of aged soy sauce.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4010,
    title: "Marseille-Style Bouillabaisse",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1534080564617-319a94168019?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 60,
    servings: 4,
    calories: 420,
    protein: "38g",
    fat: "18g",
    carbs: "20g",
    dishTypes: ["main dish"],
    summary: "The celebrated French fisherman's stew, rich with saffron, fennel, and assorted Mediterranean seafood.",
    extendedIngredients: [
      { id: 1, name: "monkfish", amount: 400, unit: "g", original: "400g monkfish fillets", aisle: "Meat" },
      { id: 2, name: "red snapper", amount: 400, unit: "g", original: "400g red snapper fillets", aisle: "Meat" },
      { id: 3, name: "mussels", amount: 500, unit: "g", original: "500g fresh mussels", aisle: "Meat" },
      { id: 4, name: "fennel", amount: 1, unit: "", original: "1 large fennel bulb, sliced", aisle: "Produce" },
      { id: 5, name: "saffron", amount: 1, unit: "pinch", original: "Pinch of high-grade saffron", aisle: "Spices" },
      { id: 6, name: "orange zest", amount: 1, unit: "tsp", original: "Strip of orange peel", aisle: "Produce" },
      { id: 7, name: "pastis", amount: 1, unit: "tbsp", original: "1 tbsp Pernod or Pastis", aisle: "Pantry" },
      { id: 8, name: "baguette", amount: 4, unit: "slices", original: "Toasted baguette with rouille", aisle: "Bakery" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté fennel, onions, and garlic in olive oil until soft.", ingredients: [], equipment: [] },
      { number: 2, step: "Add tomato, saffron, orange peel, and fish stock; simmer for 20 mins.", ingredients: [], equipment: [] },
      { number: 3, step: "Add the firm fish first, then the mussels and delicate fish; simmer until cooked through.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in the pastis and serve with rouille-slathered toasts.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4011,
    title: "Lucknowi Lamb Biryani",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 80,
    servings: 6,
    calories: 650,
    protein: "35g",
    fat: "25g",
    carbs: "72g",
    dishTypes: ["main dish"],
    summary: "Fragrant, long-grain basmati rice layered with spiced lamb and slow-cooked in the Dum style.",
    extendedIngredients: [
      { id: 1, name: "basmati rice", amount: 3, unit: "cups", original: "3 cups aged basmati rice", aisle: "Grains" },
      { id: 2, name: "lamb shoulder", amount: 750, unit: "g", original: "750g lamb shoulder, cubed", aisle: "Meat" },
      { id: 3, name: "saffron", amount: 1, unit: "pinch", original: "Saffron soaked in milk", aisle: "Spices" },
      { id: 4, name: "fried onions", amount: 1, unit: "cup", original: "1 cup crispy fried onions (Birista)", aisle: "Pantry" },
      { id: 5, name: "ginger garlic paste", amount: 2, unit: "tbsp", original: "2 tbsp ginger garlic paste", aisle: "Produce" },
      { id: 6, name: "whole spices", amount: 1, unit: "set", original: "Cardamom, cloves, and cinnamon sticks", aisle: "Spices" },
      { id: 7, name: "yogurt", amount: 1, unit: "cup", original: "1 cup thick yogurt", aisle: "Dairy" },
      { id: 8, name: "mint leaves", amount: 0.5, unit: "cup", original: "Fresh mint and cilantro", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Marinate lamb in yogurt, ginger-garlic paste, and spices for 2 hours.", ingredients: [], equipment: [] },
      { number: 2, step: "Par-cook the basmati rice with whole spices until 70% done.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer the cooked lamb and par-boiled rice in a heavy pot; add birista and saffron milk.", ingredients: [], equipment: [] },
      { number: 4, step: "Seal the pot with dough and cook on very low heat (Dum) for 45 minutes.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4012,
    title: "Veal Saltimbocca alla Romana",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 410,
    protein: "32g",
    fat: "28g",
    carbs: "5g",
    dishTypes: ["main dish"],
    summary: "Tender veal cutlets 'jump in the mouth' with savory prosciutto and fresh sage.",
    extendedIngredients: [
      { id: 1, name: "veal escalopes", amount: 4, unit: "", original: "4 thin veal escalopes", aisle: "Meat" },
      { id: 2, name: "prosciutto di parma", amount: 4, unit: "slices", original: "4 thin slices prosciutto", aisle: "Meat" },
      { id: 3, name: "fresh sage", amount: 8, unit: "leaves", original: "8 fresh sage leaves", aisle: "Produce" },
      { id: 4, name: "white wine", amount: 0.5, unit: "cup", original: "1/2 cup dry white wine", aisle: "Pantry" },
      { id: 5, name: "butter", amount: 2, unit: "tbsp", original: "2 tbsp butter", aisle: "Dairy" },
      { id: 6, name: "flour", amount: 0.25, unit: "cup", original: "Flour for dredging", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place a piece of prosciutto and two sage leaves on each veal cutlet; secure with a toothpick.", ingredients: [], equipment: [] },
      { number: 2, step: "Lightly dredge the veal in flour, shaking off the excess.", ingredients: [], equipment: [] },
      { number: 3, step: "Sauté in butter for 2 mins per side; remove and keep warm.", ingredients: [], equipment: [] },
      { number: 4, step: "Deglaze pan with white wine and reduce; pour the sauce over the veal before serving.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4013,
    title: "Moroccan Beef & Prune Tagine",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 4,
    calories: 520,
    protein: "38g",
    fat: "24g",
    carbs: "42g",
    dishTypes: ["main dish"],
    summary: "A sublime balance of sweet and savory: slow-cooked beef with honey, cinnamon, and jammy prunes.",
    extendedIngredients: [
      { id: 1, name: "beef chuck", amount: 800, unit: "g", original: "800g beef chuck, cubed", aisle: "Meat" },
      { id: 2, name: "prunes", amount: 150, unit: "g", original: "150g dried prunes", aisle: "Pantry" },
      { id: 3, name: "cinnamon", amount: 1, unit: "stick", original: "1 cinnamon stick", aisle: "Spices" },
      { id: 4, name: "ginger", amount: 1, unit: "tsp", original: "1 tsp ground ginger", aisle: "Spices" },
      { id: 5, name: "honey", amount: 2, unit: "tbsp", original: "2 tbsp honey", aisle: "Pantry" },
      { id: 6, name: "sesame seeds", amount: 1, unit: "tbsp", original: "Toasted sesame seeds", aisle: "Pantry" },
      { id: 7, name: "almonds", amount: 0.25, unit: "cup", original: "Fried almonds for garnish", aisle: "Pantry" },
      { id: 8, name: "onion", amount: 2, unit: "", original: "2 large onions, finely chopped", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Braise beef with onions, ginger, and cinnamon until meat is tender.", ingredients: [], equipment: [] },
      { number: 2, step: "Add prunes and honey; simmer for another 20 minutes until sauce is syrupy.", ingredients: [], equipment: [] },
      { number: 3, step: "Garnish with toasted sesame seeds and crunchy fried almonds.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve directly from the tagine with Moroccan crusty bread.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4014,
    title: "Thai Massaman Beef Curry",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 2,
    calories: 580,
    protein: "32g",
    fat: "38g",
    carbs: "30g",
    dishTypes: ["main dish"],
    summary: "A rich, relatively mild Thai curry that's nutty and slightly sweet with star anise and cinnamon.",
    extendedIngredients: [
      { id: 1, name: "beef chunks", amount: 400, unit: "g", original: "400g beef chunks", aisle: "Meat" },
      { id: 2, name: "massaman paste", amount: 3, unit: "tbsp", original: "3 tbsp massaman curry paste", aisle: "Spices" },
      { id: 3, name: "coconut milk", amount: 400, unit: "ml", original: "1 can full-fat coconut milk", aisle: "Dairy" },
      { id: 4, name: "potatoes", amount: 2, unit: "", original: "2 potatoes, cubed", aisle: "Produce" },
      { id: 5, name: "peanuts", amount: 0.25, unit: "cup", original: "1/4 cup roasted peanuts", aisle: "Pantry" },
      { id: 6, name: "star anise", amount: 2, unit: "", original: "2 whole star anise", aisle: "Spices" },
      { id: 7, name: "fish sauce", amount: 1, unit: "tbsp", original: "1 tbsp fish sauce", aisle: "Pantry" },
      { id: 8, name: "tamarind paste", amount: 1, unit: "tbsp", original: "1 tbsp tamarind paste", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Fry the curry paste with the cream from the top of the coconut milk can.", ingredients: [], equipment: [] },
      { number: 2, step: "Add beef and potatoes; pour in the remaining coconut milk.", ingredients: [], equipment: [] },
      { number: 3, step: "Add star anise, peanuts, fish sauce, and tamarind; simmer for 30 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Adjust salt and sweetness to taste and serve with jasmine rice.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 4015,
    title: "Mexican Chicken Mole Poblano",
    category: "main-dishes",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 60,
    servings: 4,
    calories: 520,
    protein: "38g",
    fat: "32g",
    carbs: "25g",
    dishTypes: ["main dish"],
    summary: "A complex, legendary sauce featuring multiple chilies, spices, and a hint of dark chocolate.",
    extendedIngredients: [
      { id: 1, name: "chicken pieces", amount: 1, unit: "kg", original: "1kg chicken thighs and breasts", aisle: "Meat" },
      { id: 2, name: "mole poblano paste", amount: 1, unit: "cup", original: "1 cup authentic mole paste", aisle: "Pantry" },
      { id: 3, name: "chicken broth", amount: 2, unit: "cups", original: "2 cups chicken stock", aisle: "Pantry" },
      { id: 4, name: "dark chocolate", amount: 30, unit: "g", original: "30g Mexican chocolate", aisle: "Baking" },
      { id: 5, name: "sesame seeds", amount: 1, unit: "tbsp", original: "Toasted sesame seeds", aisle: "Pantry" },
      { id: 6, name: "onion", amount: 1, unit: "", original: "1 onion, sliced", aisle: "Produce" },
      { id: 7, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic", aisle: "Produce" },
      { id: 8, name: "tortillas", amount: 4, unit: "", original: "Warm corn tortillas", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Poach the chicken pieces in broth until cooked; set aside broth.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté onions and garlic, then stir in the mole paste and 2 cups of broth.", ingredients: [], equipment: [] },
      { number: 3, step: "Add chocolate and simmer until rich and velvety.", ingredients: [], equipment: [] },
      { number: 4, step: "Place chicken in the sauce, simmer to thicken, and garnish with sesame seeds.", ingredients: [], equipment: [] }
    ]}]
  },

  {
    id: 2001,
    title: "Grilled Chicken Caesar Salad",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 480,
    protein: "35g",
    fat: "30g",
    carbs: "12g",
    dishTypes: ["lunch"],
    summary: "Crisp romaine, tender grilled chicken, and a rich, parmesan-heavy dressing.",
    extendedIngredients: [
      { id: 1, name: "chicken breast", amount: 250, unit: "g", original: "250g grilled chicken", aisle: "Meat" },
      { id: 2, name: "romaine lettuce", amount: 1, unit: "head", original: "1 head romaine", aisle: "Produce" },
      { id: 3, name: "parmesan cheese", amount: 0.25, unit: "cup", original: "1/4 cup shaved parmesan", aisle: "Dairy" },
      { id: 4, name: "croutons", amount: 0.5, unit: "cup", original: "1/2 cup sourdough croutons", aisle: "Bakery" },
      { id: 5, name: "caesar dressing", amount: 2, unit: "tbsp", original: "2 tbsp caesar dressing", aisle: "Pantry" },
      { id: 6, name: "anchovies", amount: 2, unit: "", original: "2 optional anchovies", aisle: "Canned Goods" },
      { id: 7, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon juice", aisle: "Produce" },
      { id: 8, name: "black pepper", amount: 1, unit: "tsp", original: "Fresh cracked pepper", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Grill seasoned chicken breast until internal temp reaches 165°F.", ingredients: [], equipment: [] },
      { number: 2, step: "Tear romaine into bite-sized pieces and wash thoroughly.", ingredients: [], equipment: [] },
      { number: 3, step: "Whisk dressing with a squeeze of lemon juice.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss lettuce with dressing, croutons, and top with chicken and cheese.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2002,
    title: "Mediterranean Quinoa Bowl",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 1,
    calories: 520,
    protein: "14g",
    fat: "22g",
    carbs: "65g",
    dishTypes: ["lunch"],
    summary: "A nutrient-packed bowl with fresh vegetables, kalamata olives, and creamy hummus.",
    extendedIngredients: [
      { id: 1, name: "quinoa", amount: 0.5, unit: "cup", original: "1/2 cup cooked quinoa", aisle: "Grains" },
      { id: 2, name: "hummus", amount: 2, unit: "tbsp", original: "2 tbsp hummus", aisle: "Pantry" },
      { id: 3, name: "cucumber", amount: 0.5, unit: "", original: "1/2 cucumber, diced", aisle: "Produce" },
      { id: 4, name: "cherry tomatoes", amount: 0.5, unit: "cup", original: "1/2 cup cherry tomatoes", aisle: "Produce" },
      { id: 5, name: "kalamata olives", amount: 5, unit: "", original: "5 olives, halved", aisle: "Pantry" },
      { id: 6, name: "feta cheese", amount: 2, unit: "tbsp", original: "2 tbsp feta", aisle: "Dairy" },
      { id: 7, name: "red onion", amount: 1, unit: "tbsp", original: "1 tbsp minced red onion", aisle: "Produce" },
      { id: 8, name: "lemon vinaigrette", amount: 2, unit: "tbsp", original: "2 tbsp vinaigrette", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place cooked quinoa at the base of a clean bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Arrange cucumber, tomatoes, and olives in sections.", ingredients: [], equipment: [] },
      { number: 3, step: "Add a large dollop of hummus in the center.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle with vinaigrette and sprinkle with feta and onion.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2003,
    title: "Thai Chicken Peanut Wraps",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1544618779-40b9dc65d35d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 450,
    protein: "28g",
    fat: "20g",
    carbs: "40g",
    dishTypes: ["lunch"],
    summary: "Spicy, nutty, and crunchy wraps featuring shredded chicken and a rich peanut sauce.",
    extendedIngredients: [
      { id: 1, name: "whole wheat tortillas", amount: 2, unit: "", original: "2 whole wheat tortillas", aisle: "Bakery" },
      { id: 2, name: "shredded chicken", amount: 1, unit: "cup", original: "1 cup cooked chicken", aisle: "Meat" },
      { id: 3, name: "peanut butter", amount: 2, unit: "tbsp", original: "2 tbsp creamy peanut butter", aisle: "Pantry" },
      { id: 4, name: "soy sauce", amount: 1, unit: "tbsp", original: "1 tbsp soy sauce", aisle: "Pantry" },
      { id: 5, name: "lime juice", amount: 1, unit: "tbsp", original: "1 tbsp lime juice", aisle: "Produce" },
      { id: 6, name: "carrots", amount: 0.5, unit: "cup", original: "1/2 cup shredded carrots", aisle: "Produce" },
      { id: 7, name: "cabbage", amount: 1, unit: "cup", original: "1 cup purple cabbage", aisle: "Produce" },
      { id: 8, name: "sriracha", amount: 1, unit: "tsp", original: "1 tsp sriracha", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk peanut butter, soy sauce, lime juice, and sriracha into a sauce.", ingredients: [], equipment: [] },
      { number: 2, step: "Toss shredded chicken and cabbage with half the sauce.", ingredients: [], equipment: [] },
      { number: 3, step: "Spread remaining sauce on tortillas and top with chicken mix.", ingredients: [], equipment: [] },
      { number: 4, step: "Roll tightly and slice in half diagonally.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2004,
    title: "Roasted Tomato & Basil Soup",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 4,
    calories: 220,
    protein: "4g",
    fat: "14g",
    carbs: "22g",
    dishTypes: ["lunch"],
    summary: "Silky smooth, fire-roasted tomato soup with fresh herbaceous notes.",
    extendedIngredients: [
      { id: 1, name: "roma tomatoes", amount: 3, unit: "lb", original: "3 lb roma tomatoes", aisle: "Produce" },
      { id: 2, name: "garlic", amount: 4, unit: "cloves", original: "4 cloves garlic", aisle: "Produce" },
      { id: 3, name: "onion", amount: 1, unit: "", original: "1 yellow onion", aisle: "Produce" },
      { id: 4, name: "vegetable broth", amount: 2, unit: "cups", original: "2 cups vegetable stock", aisle: "Pantry" },
      { id: 5, name: "fresh basil", amount: 1, unit: "cup", original: "1 cup fresh basil", aisle: "Produce" },
      { id: 6, name: "olive oil", amount: 2, unit: "tbsp", original: "2 tbsp olive oil", aisle: "Pantry" },
      { id: 7, name: "heavy cream", amount: 2, unit: "tbsp", original: "2 tbsp cream", aisle: "Dairy" },
      { id: 8, name: "thyme", amount: 1, unit: "tsp", original: "1 tsp dried thyme", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Roast tomatoes and garlic with olive oil at 400°F for 30 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté onions in a pot until soft, add herbs and broth.", ingredients: [], equipment: [] },
      { number: 3, step: "Add roasted tomatoes and basil; simmer for 5 minutes.", ingredients: [], equipment: [] },
      { number: 4, step: "Blend until smooth using an immersion blender; stir in cream.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2005,
    title: "Fusilli Pesto Pasta Salad",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 4,
    calories: 410,
    protein: "12g",
    fat: "24g",
    carbs: "38g",
    dishTypes: ["lunch"],
    summary: "A vibrant cold pasta dish with high-quality basil pesto and pearl mozzarella.",
    extendedIngredients: [
      { id: 1, name: "fusilli", amount: 250, unit: "g", original: "250g fusilli pasta", aisle: "Pasta" },
      { id: 2, name: "basil pesto", amount: 0.5, unit: "cup", original: "1/2 cup fresh pesto", aisle: "Pantry" },
      { id: 3, name: "cherry tomatoes", amount: 1, unit: "cup", original: "1 cup cherry tomatoes", aisle: "Produce" },
      { id: 4, name: "mozzarella pearls", amount: 125, unit: "g", original: "125g baby mozzarella", aisle: "Dairy" },
      { id: 5, name: "baby arugula", amount: 2, unit: "cups", original: "2 cups arugula", aisle: "Produce" },
      { id: 6, name: "pine nuts", amount: 2, unit: "tbsp", original: "2 tbsp toasted pine nuts", aisle: "Pantry" },
      { id: 7, name: "parmesan", amount: 2, unit: "tbsp", original: "2 tbsp parmesan", aisle: "Dairy" },
      { id: 8, name: "balsamic glaze", amount: 1, unit: "tbsp", original: "Drizzle of balsamic glaze", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Cook pasta until al dente, drain, and cool immediately.", ingredients: [], equipment: [] },
      { number: 2, step: "Toss cold pasta with pesto and cherry tomatoes.", ingredients: [], equipment: [] },
      { number: 3, step: "Gently fold in mozzarella pearls and arugula.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve topped with pine nuts, parmesan, and glaze.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2006,
    title: "Spicy Tuna Sushi Bowl",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1540185373-b39f1df93a11?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 490,
    protein: "28g",
    fat: "14g",
    carbs: "62g",
    dishTypes: ["lunch"],
    summary: "Deconstructed spicy tuna roll with sushi-grade tuna and creamy avocado.",
    extendedIngredients: [
      { id: 1, name: "sushi-grade tuna", amount: 150, unit: "g", original: "150g yellowfin tuna", aisle: "Meat" },
      { id: 2, name: "sushi rice", amount: 1, unit: "cup", original: "1 cup cooked sushi rice", aisle: "Grains" },
      { id: 3, name: "avocado", amount: 0.5, unit: "", original: "1/2 ripe avocado", aisle: "Produce" },
      { id: 4, name: "edamame", amount: 0.25, unit: "cup", original: "1/4 cup shelled edamame", aisle: "Produce" },
      { id: 5, name: "sriracha mayo", amount: 1, unit: "tbsp", original: "1 tbsp spicy mayo", aisle: "Pantry" },
      { id: 6, name: "nori", amount: 1, unit: "sheet", original: "1 sheet shredded nori", aisle: "Pantry" },
      { id: 7, name: "pickled ginger", amount: 1, unit: "tbsp", original: "Pickled ginger", aisle: "Pantry" },
      { id: 8, name: "soy sauce", amount: 1, unit: "tsp", original: "1 tsp soy sauce", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Cube the tuna into 1/2 inch pieces.", ingredients: [], equipment: [] },
      { number: 2, step: "Season tuna with sriracha mayo and a touch of soy.", ingredients: [], equipment: [] },
      { number: 3, step: "Scoop rice into a bowl and top with tuna and avocado.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with nori, edamame, and pickled ginger.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2007,
    title: "Gourmet Chicken Club Sandwich",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1606755968532-0262111d95f7?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 580,
    protein: "32g",
    fat: "25g",
    carbs: "45g",
    dishTypes: ["lunch"],
    summary: "Triple-layered delight with grilled chicken, turkey bacon, and garlic aioli.",
    extendedIngredients: [
      { id: 1, name: "artisanal bread", amount: 3, unit: "slices", original: "3 slices sourdough", aisle: "Bakery" },
      { id: 2, name: "chicken breast", amount: 150, unit: "g", original: "150g sliced chicken", aisle: "Meat" },
      { id: 3, name: "turkey bacon", amount: 2, unit: "slices", original: "2 crispy bacon slices", aisle: "Meat" },
      { id: 4, name: "tomato", amount: 2, unit: "slices", original: "2 thick tomato slices", aisle: "Produce" },
      { id: 5, name: "butter lettuce", amount: 2, unit: "leaves", original: "2 leaves butter lettuce", aisle: "Produce" },
      { id: 6, name: "garlic aioli", amount: 1, unit: "tbsp", original: "1 tbsp garlic aioli", aisle: "Pantry" },
      { id: 7, name: "avocado", amount: 0.25, unit: "", original: "1/4 sliced avocado", aisle: "Produce" },
      { id: 8, name: "pickles", amount: 2, unit: "", original: "2 pickle spears", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toast the sourdough slices until lightly browned.", ingredients: [], equipment: [] },
      { number: 2, step: "Spread aioli on one side of each slice.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer chicken, lettuce, and tomato on the first slice.", ingredients: [], equipment: [] },
      { number: 4, step: "Add second slice, layer bacon and avocado, then top with third slice.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2008,
    title: "Herb Lentil & Spinach Salad",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1540420753444-42ea95267191?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 320,
    protein: "14g",
    fat: "10g",
    carbs: "42g",
    dishTypes: ["lunch"],
    summary: "A hearty, fiber-rich plant-based salad with earthy lentils and fresh herbs.",
    extendedIngredients: [
      { id: 1, name: "french lentils", amount: 1, unit: "cup", original: "1 cup cooked lentils", aisle: "Grains" },
      { id: 2, name: "baby spinach", amount: 3, unit: "cups", original: "3 cups baby spinach", aisle: "Produce" },
      { id: 3, name: "pomegranate seeds", amount: 2, unit: "tbsp", original: "2 tbsp pomegranate", aisle: "Produce" },
      { id: 4, name: "parsley", amount: 0.25, unit: "cup", original: "1/4 cup flat-leaf parsley", aisle: "Produce" },
      { id: 5, name: "walnuts", amount: 2, unit: "tbsp", original: "2 tbsp chopped walnuts", aisle: "Pantry" },
      { id: 6, name: "red wine vinegar", amount: 1, unit: "tbsp", original: "1 tbsp vinegar", aisle: "Pantry" },
      { id: 7, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "dijon mustard", amount: 1, unit: "tsp", original: "1 tsp dijon mustard", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk oil, vinegar, and mustard into a dressing.", ingredients: [], equipment: [] },
      { number: 2, step: "Toss lentils and spinach in a large bowl with half the dressing.", ingredients: [], equipment: [] },
      { number: 3, step: "Add walnuts and parsley; toss again.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with pomegranate seeds and remaining dressing.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2009,
    title: "Vietnamese Chicken Banh Mi",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 2,
    calories: 450,
    protein: "24g",
    fat: "18g",
    carbs: "48g",
    dishTypes: ["lunch"],
    summary: "The iconic street food of Vietnam: a crispy baguette filled with savory chicken, pickled carrots, and fresh cilantro.",
    extendedIngredients: [
      { id: 1, name: "baguette", amount: 2, unit: "mini", original: "2 mini baguettes", aisle: "Bakery" },
      { id: 2, name: "chicken thighs", amount: 250, unit: "g", original: "250g grilled chicken thighs", aisle: "Meat" },
      { id: 3, name: "pickled carrots", amount: 0.5, unit: "cup", original: "1/2 cup pickled carrots and daikon", aisle: "Produce" },
      { id: 4, name: "cucumber", amount: 0.5, unit: "", original: "1/2 cucumber, sliced into spears", aisle: "Produce" },
      { id: 5, name: "cilantro", amount: 0.25, unit: "cup", original: "Fresh cilantro sprigs", aisle: "Produce" },
      { id: 6, name: "mayo", amount: 2, unit: "tbsp", original: "2 tbsp mayonnaise", aisle: "Pantry" },
      { id: 7, name: "jalapeño", amount: 1, unit: "", original: "1 jalapeño, sliced", aisle: "Produce" },
      { id: 8, name: "soy sauce", amount: 1, unit: "tsp", original: "Optional dash of Maggi seasoning", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Lightly toast the baguettes until the outside is crispy.", ingredients: [], equipment: [] },
      { number: 2, step: "Spread mayo on both sides and add a dash of soy sauce.", ingredients: [], equipment: [] },
      { number: 3, step: "Layer grilled chicken, cucumber spears, and jalapeños.", ingredients: [], equipment: [] },
      { number: 4, step: "Top generously with pickled vegetables and fresh cilantro.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2010,
    title: "Mediterranean Falafel Wrap",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 410,
    protein: "12g",
    fat: "22g",
    carbs: "45g",
    dishTypes: ["lunch"],
    summary: "Crispy falafel balls wrapped in warm pita with hummus and a zesty tahini drizzle.",
    extendedIngredients: [
      { id: 1, name: "falafel", amount: 8, unit: "balls", original: "8 pre-cooked or fresh falafel balls", aisle: "Meat" },
      { id: 2, name: "pita bread", amount: 2, unit: "large", original: "2 large warm pitas", aisle: "Bakery" },
      { id: 3, name: "hummus", amount: 4, unit: "tbsp", original: "4 tbsp hummus", aisle: "Pantry" },
      { id: 4, name: "tahini", amount: 2, unit: "tbsp", original: "2 tbsp tahini", aisle: "Pantry" },
      { id: 5, name: "lemon", amount: 1, unit: "", original: "1/2 lemon, juiced", aisle: "Produce" },
      { id: 6, name: "cucumber", amount: 0.5, unit: "cup", original: "Diced cucumber", aisle: "Produce" },
      { id: 7, name: "tomatoes", amount: 0.5, unit: "cup", original: "Diced tomatoes", aisle: "Produce" },
      { id: 8, name: "parsley", amount: 1, unit: "tbsp", original: "Fresh parsley", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Warm the pitas and falafel balls in a toaster or oven.", ingredients: [], equipment: [] },
      { number: 2, step: "Spread hummus in the center of each pita.", ingredients: [], equipment: [] },
      { number: 3, step: "Add falafel, cucumber, and tomatoes.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle with tahini mixed with lemon juice and garnish with parsley.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2011,
    title: "Classic Hawaiian Poke Bowl",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 480,
    protein: "32g",
    fat: "14g",
    carbs: "55g",
    dishTypes: ["lunch"],
    summary: "Fresh ahi tuna marinated in soy and ginger, served over rice with colorful vegetables.",
    extendedIngredients: [
      { id: 1, name: "ahi tuna", amount: 150, unit: "g", original: "150g raw ahi tuna, cubed", aisle: "Meat" },
      { id: 2, name: "white rice", amount: 1, unit: "cup", original: "1 cup cooked white rice", aisle: "Grains" },
      { id: 3, name: "soy sauce", amount: 2, unit: "tbsp", original: "2 tbsp soy sauce", aisle: "Pantry" },
      { id: 4, name: "sesame oil", amount: 1, unit: "tsp", original: "1 tsp toasted sesame oil", aisle: "Pantry" },
      { id: 5, name: "edamame", amount: 0.25, unit: "cup", original: "1/4 cup shelled edamame", aisle: "Produce" },
      { id: 6, name: "cucumber", amount: 0.25, unit: "cup", original: "Sliced cucumber", aisle: "Produce" },
      { id: 7, name: "seaweed salad", amount: 2, unit: "tbsp", original: "2 tbsp seaweed salad", aisle: "Produce" },
      { id: 8, name: "ginger", amount: 1, unit: "tsp", original: "Grated fresh ginger", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix tuna with soy sauce, sesame oil, and ginger; let sit for 5 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Place rice in a bowl and arrange edamame, cucumber, and seaweed salad on top.", ingredients: [], equipment: [] },
      { number: 3, step: "Add the marinated tuna in the center.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with sesame seeds and a drizzle of spicy mayo if desired.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2012,
    title: "Andalusian Gazpacho Soup",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 4,
    calories: 180,
    protein: "3g",
    fat: "12g",
    carbs: "18g",
    dishTypes: ["lunch"],
    summary: "A refreshing chilled tomato and vegetable soup from southern Spain.",
    extendedIngredients: [
      { id: 1, name: "tomatoes", amount: 1, unit: "kg", original: "1kg ripe roma tomatoes", aisle: "Produce" },
      { id: 2, name: "green pepper", amount: 1, unit: "", original: "1 small green pepper", aisle: "Produce" },
      { id: 3, name: "cucumber", amount: 1, unit: "small", original: "1 small cucumber", aisle: "Produce" },
      { id: 4, name: "garlic", amount: 1, unit: "clove", original: "1 clove garlic", aisle: "Produce" },
      { id: 5, name: "olive oil", amount: 0.25, unit: "cup", original: "1/4 cup extra virgin olive oil", aisle: "Pantry" },
      { id: 6, name: "sherry vinegar", amount: 2, unit: "tbsp", original: "2 tbsp sherry vinegar", aisle: "Pantry" },
      { id: 7, name: "bread crumbs", amount: 2, unit: "tbsp", original: "2 tbsp bread crumbs for body", aisle: "Bakery" },
      { id: 8, name: "salt", amount: 1, unit: "tsp", original: "Sea salt to taste", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend all vegetables, garlic, bread crumbs, and vinegar until very smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "With the blender running, slowly drizzle in the olive oil.", ingredients: [], equipment: [] },
      { number: 3, step: "Strain through a fine-mesh sieve for a silky texture.", ingredients: [], equipment: [] },
      { number: 4, step: "Chill for at least 2 hours; serve with a drizzle of oil and diced cucumber.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2013,
    title: "Thai Pomelo Salad (Yam Som-O)",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339cf?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 240,
    protein: "10g",
    fat: "14g",
    carbs: "22g",
    dishTypes: ["lunch"],
    summary: "Sweet, sour, and spicy salad with juicy pomelo segments and toasted coconut.",
    extendedIngredients: [
      { id: 1, name: "pomelo", amount: 1, unit: "", original: "1 large pomelo, peeled and segmented", aisle: "Produce" },
      { id: 2, name: "shrimp", amount: 6, unit: "large", original: "6 large boiled shrimp", aisle: "Meat" },
      { id: 3, name: "peanuts", amount: 2, unit: "tbsp", original: "2 tbsp roasted peanuts", aisle: "Pantry" },
      { id: 4, name: "shredded coconut", amount: 2, unit: "tbsp", original: "2 tbsp toasted coconut", aisle: "Pantry" },
      { id: 5, name: "fish sauce", amount: 1, unit: "tbsp", original: "1 tbsp fish sauce", aisle: "Pantry" },
      { id: 6, name: "lime juice", amount: 1, unit: "tbsp", original: "1 tbsp lime juice", aisle: "Produce" },
      { id: 7, name: "sugar", amount: 1, unit: "tsp", original: "1 tsp palm sugar", aisle: "Pantry" },
      { id: 8, name: "chili flakes", amount: 0.5, unit: "tsp", original: "Thai chili flakes", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk fish sauce, lime juice, sugar, and chili to make the dressing.", ingredients: [], equipment: [] },
      { number: 2, step: "Tear pomelo into bite-sized chunks into a bowl.", ingredients: [], equipment: [] },
      { number: 3, step: "Add shrimp, peanuts, and coconut; pour over the dressing.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss gently and serve immediately garnished with shallots.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2014,
    title: "Moroccan Couscous Salad",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 4,
    calories: 320,
    protein: "8g",
    fat: "14g",
    carbs: "45g",
    dishTypes: ["lunch"],
    summary: "Vibrant couscous with dried fruits, chickpeas, and a warm cumin-lemon dressing.",
    extendedIngredients: [
      { id: 1, name: "couscous", amount: 1, unit: "cup", original: "1 cup dried couscous", aisle: "Grains" },
      { id: 2, name: "chickpeas", amount: 1, unit: "can", original: "1 can chickpeas, drained", aisle: "Pantry" },
      { id: 3, name: "dried apricots", amount: 0.25, unit: "cup", original: "1/4 cup chopped dried apricots", aisle: "Pantry" },
      { id: 4, name: "slivered almonds", amount: 2, unit: "tbsp", original: "2 tbsp toasted almonds", aisle: "Pantry" },
      { id: 5, name: "cucumber", amount: 0.5, unit: "cup", original: "Diced cucumber", aisle: "Produce" },
      { id: 6, name: "lemon", amount: 1, unit: "", original: "1 lemon, juiced", aisle: "Produce" },
      { id: 7, name: "cumin", amount: 1, unit: "tsp", original: "1 tsp ground cumin", aisle: "Spices" },
      { id: 8, name: "parsley", amount: 0.25, unit: "cup", original: "Fresh parsley and mint", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Pour boiling water over couscous; cover and let sit for 5 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Fluff with a fork and add chickpeas, apricots, and vegetables.", ingredients: [], equipment: [] },
      { number: 3, step: "Whisk lemon juice, oil, and cumin; pour over the salad.", ingredients: [], equipment: [] },
      { number: 4, step: "Fold in the almonds and fresh herbs before serving.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2015,
    title: "Baja Shrimp Tacos",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 380,
    protein: "24g",
    fat: "18g",
    carbs: "32g",
    dishTypes: ["lunch"],
    summary: "Seared shrimp with a tangy slaw and creamy cilantro sauce in soft tortillas.",
    extendedIngredients: [
      { id: 1, name: "shrimp", amount: 300, unit: "g", original: "300g large shrimp, peeled", aisle: "Meat" },
      { id: 2, name: "corn tortillas", amount: 6, unit: "small", original: "6 small corn tortillas", aisle: "Pantry" },
      { id: 3, name: "cabbage mix", amount: 2, unit: "cups", original: "2 cups shredded cabbage", aisle: "Produce" },
      { id: 4, name: "sour cream", amount: 0.25, unit: "cup", original: "1/4 cup sour cream", aisle: "Dairy" },
      { id: 5, name: "lime", amount: 1, unit: "", original: "1 lime, juiced", aisle: "Produce" },
      { id: 6, name: "chili powder", amount: 1, unit: "tsp", original: "1 tsp chili powder", aisle: "Spices" },
      { id: 7, name: "cilantro", amount: 2, unit: "tbsp", original: "Fresh cilantro", aisle: "Produce" },
      { id: 8, name: "radish", amount: 2, unit: "", original: "Slices of radish for garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Season shrimp with chili powder and sear in a pan for 2 mins per side.", ingredients: [], equipment: [] },
      { number: 2, step: "Mix sour cream, lime juice, and cilantro for the sauce.", ingredients: [], equipment: [] },
      { number: 3, step: "Warm tortillas; fill with cabbage slaw and shrimp.", ingredients: [], equipment: [] },
      { number: 4, step: "Spoon sauce over the top and garnish with radishes.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 2016,
    title: "Mediterranean Mezze Platter",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddada?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 450,
    protein: "12g",
    fat: "28g",
    carbs: "45g",
    dishTypes: ["lunch"],
    summary: "A vibrant assortment of hummus, falafel, olives, and fresh vegetables served with warm pita.",
    extendedIngredients: [
      { id: 1, name: "hummus", amount: 1, unit: "cup", original: "1 cup classic hummus", aisle: "International" },
      { id: 2, name: "falafel", amount: 6, unit: "pieces", original: "6 ready-to-eat falafel", aisle: "International" },
      { id: 3, name: "pita bread", amount: 2, unit: "", original: "2 warm pita breads", aisle: "Bakery" },
      { id: 4, name: "kalamata olives", amount: 0.5, unit: "cup", original: "1/2 cup olives", aisle: "International" },
      { id: 5, name: "cucumber", amount: 1, unit: "", original: "1 small cucumber, sliced", aisle: "Produce" },
      { id: 6, name: "cherry tomatoes", amount: 1, unit: "cup", original: "1 cup cherry tomatoes", aisle: "Produce" },
      { id: 7, name: "feta cheese", amount: 50, unit: "g", original: "50g feta cheese", aisle: "Dairy" },
      { id: 8, name: "olive oil", amount: 1, unit: "tbsp", original: "Extra virgin olive oil", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Arrange hummus and falafel on a large platter.", ingredients: [], equipment: [] },
      { number: 2, step: "Scatter olives, cucumbers, and tomatoes around the platter.", ingredients: [], equipment: [] },
      { number: 3, step: "Crumble feta over the vegetables and drizzle with olive oil.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve with pita cut into triangles for dipping.", ingredients: [] }
    ]}]
  },
  {
    id: 2017,
    title: "Vietnamese Chicken Banh Mi",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1600454021970-351feb4a503e?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 520,
    protein: "32g",
    fat: "18g",
    carbs: "62g",
    dishTypes: ["lunch"],
    summary: "A fusion of crisp baguette, savory grilled chicken, and pickled vegetables with spicy mayo.",
    extendedIngredients: [
      { id: 1, name: "baguette", amount: 2, unit: "small", original: "2 small crusty baguettes", aisle: "Bakery" },
      { id: 2, name: "chicken breast", amount: 2, unit: "", original: "2 grilled chicken breasts, sliced", aisle: "Meat" },
      { id: 3, name: "pickled carrots", amount: 0.5, unit: "cup", original: "1/2 cup pickled carrots & daikon", aisle: "International" },
      { id: 4, name: "cilantro", amount: 0.5, unit: "cup", original: "Fresh cilantro sprigs", aisle: "Produce" },
      { id: 5, name: "jalapeno", amount: 1, unit: "", original: "1 jalapeno, thinly sliced", aisle: "Produce" },
      { id: 6, name: "mayonnaise", amount: 2, unit: "tbsp", original: "2 tbsp mayonnaise", aisle: "Pantry" },
      { id: 7, name: "sriracha", amount: 1, unit: "tsp", original: "1 tsp sriracha", aisle: "Spices" },
      { id: 8, name: "cucumber", amount: 0.5, unit: "", original: "Cucumber strips", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Slice baguettes and spread with a mix of mayo and sriracha.", ingredients: [], equipment: [] },
      { number: 2, step: "Layer grilled chicken and cucumber strips inside.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with pickled vegetables, jalapenos, and plenty of cilantro.", ingredients: [], equipment: [] },
      { number: 4, step: "Press down slightly and serve immediately.", ingredients: [] }
    ]}]
  },
  {
    id: 2018,
    title: "Classic Cobb Salad with Avocado",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 480,
    protein: "35g",
    fat: "32g",
    carbs: "12g",
    dishTypes: ["lunch"],
    summary: "A composed American salad with layers of protein, healthy fats, and crisp greens.",
    extendedIngredients: [
      { id: 1, name: "romaine", amount: 4, unit: "cups", original: "4 cups chopped romaine lettuce", aisle: "Produce" },
      { id: 2, name: "chicken", amount: 1, unit: "cup", original: "1 cup cooked chicken, cubed", aisle: "Meat" },
      { id: 3, name: "hard-boiled eggs", amount: 2, unit: "", original: "2 hard-boiled eggs, chopped", aisle: "Dairy" },
      { id: 4, name: "bacon", amount: 4, unit: "strips", original: "4 strips cooked bacon, crumbled", aisle: "Meat" },
      { id: 5, name: "avocado", amount: 1, unit: "", original: "1 ripe avocado, diced", aisle: "Produce" },
      { id: 6, name: "blue cheese", amount: 0.25, unit: "cup", original: "1/4 cup crumbled blue cheese", aisle: "Dairy" },
      { id: 7, name: "tomatoes", amount: 1, unit: "cup", original: "1 cup cherry tomatoes", aisle: "Produce" },
      { id: 8, name: "red wine vinaigrette", amount: 0.25, unit: "cup", original: "1/4 cup red wine vinaigrette", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Lay the lettuce as a base in a large bowl or platter.", ingredients: [], equipment: [] },
      { number: 2, step: "Arrange chicken, eggs, bacon, avocado, cheese, and tomatoes in neat rows.", ingredients: [], equipment: [] },
      { number: 3, step: "Drizzle vinaigrette evenly over the entire salad.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss just before eating to ensure even dressing coverage.", ingredients: [] }
    ]}]
  },
  {
    id: 2019,
    title: "Thai Green Papaya Salad (Som Tum)",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c73f0803?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 210,
    protein: "6g",
    fat: "8g",
    carbs: "32g",
    dishTypes: ["lunch"],
    summary: "Exotically spicy, sour, and sweet salad made from shredded green papaya and peanuts.",
    extendedIngredients: [
      { id: 1, name: "green papaya", amount: 2, unit: "cups", original: "2 cups shredded green papaya", aisle: "International" },
      { id: 2, name: "green beans", amount: 0.5, unit: "cup", original: "1/2 cup long beans, cut", aisle: "Produce" },
      { id: 3, name: "peanuts", amount: 2, unit: "tbsp", original: "2 tbsp roasted peanuts", aisle: "Pantry" },
      { id: 4, name: "lime", amount: 2, unit: "", original: "2 limes for juice", aisle: "Produce" },
      { id: 5, name: "fish sauce", amount: 2, unit: "tbsp", original: "2 tbsp fish sauce", aisle: "International" },
      { id: 6, name: "palm sugar", amount: 1, unit: "tbsp", original: "1 tbsp palm sugar", aisle: "International" },
      { id: 7, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic", aisle: "Produce" },
      { id: 8, name: "bird's eye chili", amount: 2, unit: "", original: "2 bird's eye chilies", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Pound garlic and chilies in a mortar and pestle.", ingredients: [], equipment: [] },
      { number: 2, step: "Add long beans and peanuts, pound lightly to bruise.", ingredients: [], equipment: [] },
      { number: 3, step: "Add sugar, lime juice, and fish sauce; mix until sugar dissolves.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss with shredded papaya and serve immediately.", ingredients: [] }
    ]}]
  },
  {
    id: 2020,
    title: "Spinach & Goat Cheese Frittata",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1594968973184-9140fa24776e?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 4,
    calories: 280,
    protein: "18g",
    fat: "22g",
    carbs: "6g",
    dishTypes: ["lunch"],
    summary: "A light yet satisfying egg dish filled with baby spinach and pockets of creamy goat cheese.",
    extendedIngredients: [
      { id: 1, name: "eggs", amount: 8, unit: "", original: "8 large eggs", aisle: "Dairy" },
      { id: 2, name: "spinach", amount: 4, unit: "cups", original: "4 cups baby spinach", aisle: "Produce" },
      { id: 3, name: "goat cheese", amount: 100, unit: "g", original: "100g soft goat cheese", aisle: "Dairy" },
      { id: 4, name: "milk", amount: 0.25, unit: "cup", original: "1/4 cup milk", aisle: "Dairy" },
      { id: 5, name: "onion", amount: 1, unit: "small", original: "1 small yellow onion, diced", aisle: "Produce" },
      { id: 6, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic, minced", aisle: "Produce" },
      { id: 7, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 8, name: "nutmeg", amount: 0.25, unit: "tsp", original: "Pinch of ground nutmeg", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté onion and garlic; add spinach until wilted.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk eggs, milk, and nutmeg; pour into the pan over the spinach.", ingredients: [], equipment: [] },
      { number: 3, step: "Dot with goat cheese and cook on low heat until edges are set.", ingredients: [], equipment: [] },
      { number: 4, step: "Finish under the broiler for 2 minutes until top is golden.", ingredients: [] }
    ]}]
  },

  // --- DESSERTS (8 RECIPES) ---
  {
    id: 5001,
    title: "Double Chocolate Lava Cake",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 450,
    protein: "6g",
    fat: "28g",
    carbs: "42g",
    dishTypes: ["dessert"],
    summary: "Decadent dark chocolate cake with a warm, molten center of pure cocoa bliss.",
    extendedIngredients: [
      { id: 1, name: "dark chocolate", amount: 100, unit: "g", original: "100g 70% dark chocolate", aisle: "Baking" },
      { id: 2, name: "butter", amount: 50, unit: "g", original: "50g unsalted butter", aisle: "Dairy" },
      { id: 3, name: "eggs", amount: 2, unit: "", original: "2 organic eggs", aisle: "Dairy" },
      { id: 4, name: "sugar", amount: 2, unit: "tbsp", original: "2 tbsp cane sugar", aisle: "Pantry" },
      { id: 5, name: "flour", amount: 2, unit: "tbsp", original: "2 tbsp all-purpose flour", aisle: "Baking" },
      { id: 6, name: "vanilla extract", amount: 1, unit: "tsp", original: "1 tsp vanilla", aisle: "Baking" },
      { id: 7, name: "sea salt", amount: 1, unit: "pinch", original: "Pinch of sea salt", aisle: "Spices" },
      { id: 8, name: "raspberries", amount: 5, unit: "", original: "Fresh raspberries for serving", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Melt chocolate and butter together in a double boiler.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk eggs and sugar until pale and fluffy.", ingredients: [], equipment: [] },
      { number: 3, step: "Gently fold in chocolate mixture, then flour and salt.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake in greased ramekins at 425°F for 12 mins; serve immediately.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5002,
    title: "Classic Tiramisu",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 6,
    calories: 420,
    protein: "8g",
    fat: "22g",
    carbs: "45g",
    dishTypes: ["dessert"],
    summary: "A timeless Italian pick-me-up: coffee-soaked ladyfingers and whipped mascarpone.",
    extendedIngredients: [
      { id: 1, name: "ladyfingers", amount: 24, unit: "", original: "24 ladyfingers", aisle: "Bakery" },
      { id: 2, name: "espresso", amount: 1, unit: "cup", original: "1 cup strong espresso, cooled", aisle: "Pantry" },
      { id: 3, name: "mascarpone", amount: 500, unit: "g", original: "500g mascarpone cheese", aisle: "Dairy" },
      { id: 4, name: "eggs", amount: 3, unit: "", original: "3 yolks and 3 whites separated", aisle: "Dairy" },
      { id: 5, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar", aisle: "Pantry" },
      { id: 6, name: "cocoa powder", amount: 2, unit: "tbsp", original: "High-quality cocoa powder", aisle: "Baking" },
      { id: 7, name: "marsala wine", amount: 2, unit: "tbsp", original: "2 tbsp marsala (optional)", aisle: "Pantry" },
      { id: 8, name: "dark chocolate", amount: 1, unit: "oz", original: "Shaved dark chocolate", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Beat yolks with sugar until creamy, then fold in mascarpone.", ingredients: [], equipment: [] },
      { number: 2, step: "Beat egg whites to stiff peaks and fold gently into yolk mixture.", ingredients: [], equipment: [] },
      { number: 3, step: "Dip ladyfingers quickly in espresso and layer in a dish.", ingredients: [], equipment: [] },
      { number: 4, step: "Layer cream over ladyfingers, repeat, and dust with cocoa powder.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5003,
    title: "Fresh Strawberry Cheescake",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 60,
    servings: 8,
    calories: 480,
    protein: "7g",
    fat: "32g",
    carbs: "42g",
    dishTypes: ["dessert"],
    summary: "Creamy New York style cheesecake topped with a glossy strawberry coulis.",
    extendedIngredients: [
      { id: 1, name: "cream cheese", amount: 750, unit: "g", original: "750g softened cream cheese", aisle: "Dairy" },
      { id: 2, name: "graham crackers", amount: 200, unit: "g", original: "200g crushed graham crackers", aisle: "Bakery" },
      { id: 3, name: "butter", amount: 100, unit: "g", original: "100g melted butter", aisle: "Dairy" },
      { id: 4, name: "sugar", amount: 1, unit: "cup", original: "1 cup granulated sugar", aisle: "Pantry" },
      { id: 5, name: "eggs", amount: 3, unit: "", original: "3 large eggs", aisle: "Dairy" },
      { id: 6, name: "sour cream", amount: 1, unit: "cup", original: "1 cup sour cream", aisle: "Dairy" },
      { id: 7, name: "strawberries", amount: 2, unit: "cups", original: "2 cups fresh strawberries", aisle: "Produce" },
      { id: 8, name: "vanilla bean", amount: 1, unit: "", original: "1 vanilla bean, scraped", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Press crushed crackers and butter into a springform pan; bake for 10 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Beat cream cheese, sugar, eggs, and sour cream until perfectly smooth.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour over crust and bake at 325°F for 50 mins in a water bath.", ingredients: [], equipment: [] },
      { number: 4, step: "Cool completely and top with macerated strawberries.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5004,
    title: "Vanilla Bean Crème Brûlée",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1470333738027-56ef4bc82b89?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 350,
    protein: "4g",
    fat: "25g",
    carbs: "28g",
    dishTypes: ["dessert"],
    summary: "Silky smooth custard with a signature glass-like caramelized sugar crust.",
    extendedIngredients: [
      { id: 1, name: "heavy cream", amount: 2, unit: "cups", original: "2 cups heavy cream", aisle: "Dairy" },
      { id: 2, name: "egg yolks", amount: 5, unit: "", original: "5 large egg yolks", aisle: "Dairy" },
      { id: 3, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar (plus extra for topping)", aisle: "Pantry" },
      { id: 4, name: "vanilla bean", amount: 1, unit: "", original: "1 whole vanilla bean", aisle: "Produce" },
      { id: 5, name: "salt", amount: 1, unit: "pinch", original: "Pinch of salt", aisle: "Spices" },
      { id: 6, name: "boiling water", amount: 1, unit: "qt", original: "Boiling water for baine-marie", aisle: "Pantry" },
      { id: 7, name: "berries", amount: 1, unit: "handful", original: "Fresh berries for garnish", aisle: "Produce" },
      { id: 8, name: "mint", amount: 1, unit: "sprig", original: "Fresh mint", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Heat cream with vanilla bean until simmering.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk yolks and sugar; slowly temper with the hot cream.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour into ramekins and bake at 300°F in a water bath for 30 mins.", ingredients: [], equipment: [] },
      { number: 4, step: "Chill, then sprinkle sugar on top and torch until caramelized.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5005,
    title: "Lemon Meringue Tart",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 50,
    servings: 8,
    calories: 380,
    protein: "5g",
    fat: "14g",
    carbs: "58g",
    dishTypes: ["dessert"],
    summary: "Zesty lemon curd in a buttery shortcrust pastry topped with toasted meringue peaks.",
    extendedIngredients: [
      { id: 1, name: "pastry crust", amount: 1, unit: "", original: "1 sweet shortcrust pastry shell", aisle: "Bakery" },
      { id: 2, name: "lemon juice", amount: 0.75, unit: "cup", original: "3/4 cup fresh lemon juice", aisle: "Produce" },
      { id: 3, name: "lemon zest", amount: 1, unit: "tbsp", original: "1 tbsp lemon zest", aisle: "Produce" },
      { id: 4, name: "sugar", amount: 1.5, unit: "cups", original: "1.5 cups granulated sugar", aisle: "Pantry" },
      { id: 5, name: "cornstarch", amount: 3, unit: "tbsp", original: "3 tbsp cornstarch", aisle: "Pantry" },
      { id: 6, name: "egg yolks", amount: 4, unit: "", original: "4 large egg yolks", aisle: "Dairy" },
      { id: 7, name: "egg whites", amount: 4, unit: "", original: "4 large egg whites", aisle: "Dairy" },
      { id: 8, name: "cream of tartar", amount: 1, unit: "tsp", original: "1/4 tsp cream of tartar", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Cook lemon juice, zest, sugar, and yolks until thickened into curd.", ingredients: [], equipment: [] },
      { number: 2, step: "Pour curd into pre-baked pastry shell.", ingredients: [], equipment: [] },
      { number: 3, step: "Whisk egg whites and sugar to stiff peaks for meringue.", ingredients: [], equipment: [] },
      { number: 4, step: "Pipe meringue onto curd and bake until tips are golden brown.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5006,
    title: "Warm Apple Crumble",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 4,
    calories: 410,
    protein: "4g",
    fat: "18g",
    carbs: "62g",
    dishTypes: ["dessert"],
    summary: "Cinnamon-spiced apples baked under a crunchy oat and butter topping.",
    extendedIngredients: [
      { id: 1, name: "granny smith apples", amount: 6, unit: "", original: "6 large apples, peeled/sliced", aisle: "Produce" },
      { id: 2, name: "cinnamon", amount: 1, unit: "tbsp", original: "1 tbsp ground cinnamon", aisle: "Spices" },
      { id: 3, name: "rolled oats", amount: 1, unit: "cup", original: "1 cup rolled oats", aisle: "Grains" },
      { id: 4, name: "flour", amount: 1, unit: "cup", original: "1 cup all-purpose flour", aisle: "Baking" },
      { id: 5, name: "brown sugar", amount: 0.5, unit: "cup", original: "1/2 cup brown sugar", aisle: "Pantry" },
      { id: 6, name: "butter", amount: 0.5, unit: "cup", original: "1/2 cup cold diced butter", aisle: "Dairy" },
      { id: 7, name: "nutmeg", amount: 0.5, unit: "tsp", original: "1/2 tsp nutmeg", aisle: "Spices" },
      { id: 8, name: "vanilla ice cream", amount: 1, unit: "scoop", original: "Vanilla ice cream for serving", aisle: "Frozen" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toss apples with cinnamon and a touch of sugar in a baking dish.", ingredients: [], equipment: [] },
      { number: 2, step: "Rub butter into flour, oats, and brown sugar until crumbly.", ingredients: [], equipment: [] },
      { number: 3, step: "Spread crumble over apples evenly.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake at 375°F (190°C) for 35 mins; serve warm.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5007,
    title: "Fudgy Walnut Brownies",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 12,
    calories: 290,
    protein: "4g",
    fat: "18g",
    carbs: "32g",
    dishTypes: ["dessert"],
    summary: "Dense, chewy chocolate brownies loaded with toasted walnut chunks.",
    extendedIngredients: [
      { id: 1, name: "cocoa powder", amount: 1, unit: "cup", original: "1 cup unsweetened cocoa", aisle: "Baking" },
      { id: 2, name: "butter", amount: 1, unit: "cup", original: "1 cup melted butter", aisle: "Dairy" },
      { id: 3, name: "sugar", amount: 2, unit: "cups", original: "2 cups granulated sugar", aisle: "Pantry" },
      { id: 4, name: "eggs", amount: 4, unit: "", original: "4 large organic eggs", aisle: "Dairy" },
      { id: 5, name: "vanilla", amount: 1, unit: "tbsp", original: "1 tbsp vanilla extract", aisle: "Baking" },
      { id: 6, name: "flour", amount: 1, unit: "cup", original: "1 cup all-purpose flour", aisle: "Baking" },
      { id: 7, name: "walnuts", amount: 1, unit: "cup", original: "1 cup chopped walnuts", aisle: "Pantry" },
      { id: 8, name: "salt", amount: 0.5, unit: "tsp", original: "1/2 tsp sea salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk butter and sugar, then add eggs one at a time.", ingredients: [], equipment: [] },
      { number: 2, step: "Stir in cocoa, flour, and salt until just combined.", ingredients: [], equipment: [] },
      { number: 3, step: "Fold in toasted walnuts.", ingredients: [], equipment: [] },
      { number: 4, step: "Bake in a lined 9x9 pan at 350°F for 25-30 minutes.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5008,
    title: "Mango Sticky Rice",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    servings: 2,
    calories: 380,
    protein: "5g",
    fat: "12g",
    carbs: "65g",
    dishTypes: ["dessert"],
    summary: "Traditional Thai dessert: sweet glutinous rice with coconut cream and ripe mango.",
    extendedIngredients: [
      { id: 1, name: "glutinous rice", amount: 1, unit: "cup", original: "1 cup sweet glutinous rice", aisle: "Grains" },
      { id: 2, name: "coconut milk", amount: 1, unit: "can", original: "1 can coconut milk", aisle: "Dairy" },
      { id: 3, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar", aisle: "Pantry" },
      { id: 4, name: "mango", amount: 1, unit: "", original: "1 ripe honey mango, sliced", aisle: "Produce" },
      { id: 5, name: "salt", amount: 1, unit: "pinch", original: "Pinch of salt", aisle: "Spices" },
      { id: 6, name: "sesame seeds", amount: 1, unit: "tsp", original: "1 tsp toasted sesame seeds", aisle: "Pantry" },
      { id: 7, name: "pandan leaf", amount: 1, unit: "", original: "1 pandan leaf (optional)", aisle: "Produce" },
      { id: 8, name: "water", amount: 2, unit: "cups", original: "2 cups water for soaking", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Steam soaked glutinous rice until tender and translucent.", ingredients: [], equipment: [] },
      { number: 2, step: "Simmer coconut milk with sugar and salt; pour half over warm rice.", ingredients: [], equipment: [] },
      { number: 3, step: "Let rice rest for 15 mins to absorb the coconut cream.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve rice with fresh mango and remaining coconut sauce.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5009,
    title: "Parisian Almond Macarons",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1558961776-6f5ec273639d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 90,
    servings: 12,
    calories: 120,
    protein: "2g",
    fat: "6g",
    carbs: "18g",
    dishTypes: ["dessert"],
    summary: "Delicate almond meringue cookies with a smooth, ganache filling.",
    extendedIngredients: [
      { id: 1, name: "almond flour", amount: 125, unit: "g", original: "125g superfine almond flour", aisle: "Baking" },
      { id: 2, name: "powdered sugar", amount: 125, unit: "g", original: "125g powdered sugar", aisle: "Baking" },
      { id: 3, name: "egg whites", amount: 2, unit: "large", original: "2 room temp egg whites", aisle: "Dairy" },
      { id: 4, name: "granulated sugar", amount: 50, unit: "g", original: "50g granulated sugar", aisle: "Pantry" },
      { id: 5, name: "vanilla bean", amount: 1, unit: "tsp", original: "1 tsp vanilla extract", aisle: "Baking" },
      { id: 6, name: "food coloring", amount: 1, unit: "drop", original: "Gel food coloring (optional)", aisle: "Baking" },
      { id: 7, name: "dark chocolate", amount: 100, unit: "g", original: "100g chocolate for ganache", aisle: "Baking" },
      { id: 8, name: "heavy cream", amount: 50, unit: "ml", original: "50ml heavy cream", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sift almond flour and powdered sugar twice to ensure a smooth shell.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk egg whites and granulated sugar to stiff peaks (meringue).", ingredients: [], equipment: [] },
      { number: 3, step: "Fold dry ingredients into meringue (macaronage) until the batter flows like lava.", ingredients: [], equipment: [] },
      { number: 4, step: "Pipe onto trays, let rest for 30 mins to form a skin, then bake at 300°F for 15 mins.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5010,
    title: "Sicilian Pistachio Cannoli",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 40,
    servings: 6,
    calories: 320,
    protein: "6g",
    fat: "18g",
    carbs: "35g",
    dishTypes: ["dessert"],
    summary: "Crispy fried pastry shells filled with sweet ricotta cream and crushed pistachios.",
    extendedIngredients: [
      { id: 1, name: "cannoli shells", amount: 6, unit: "", original: "6 pre-baked cannoli shells", aisle: "Bakery" },
      { id: 2, name: "ricotta cheese", amount: 500, unit: "g", original: "500g drained sheep's milk ricotta", aisle: "Dairy" },
      { id: 3, name: "powdered sugar", amount: 0.75, unit: "cup", original: "3/4 cup powdered sugar", aisle: "Baking" },
      { id: 4, name: "pistachios", amount: 0.25, unit: "cup", original: "1/4 cup crushed pistachios", aisle: "Pantry" },
      { id: 5, name: "chocolate chips", amount: 2, unit: "tbsp", original: "2 tbsp mini chocolate chips", aisle: "Baking" },
      { id: 6, name: "orange zest", amount: 1, unit: "tsp", original: "Fresh orange zest", aisle: "Produce" },
      { id: 7, name: "vanilla", amount: 1, unit: "tsp", original: "1 tsp vanilla extract", aisle: "Baking" },
      { id: 8, name: "cinnamon", amount: 0.5, unit: "tsp", original: "Pinch of ground cinnamon", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whip the drained ricotta with powdered sugar and vanilla until smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "Fold in the orange zest, cinnamon, and chocolate chips.", ingredients: [], equipment: [] },
      { number: 3, step: "Pipe the cream into the cannoli shells from both ends just before serving.", ingredients: [], equipment: [] },
      { number: 4, step: "Dip the ends into crushed pistachios and dust with powdered sugar.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5011,
    title: "Matcha Mille Crepe Cake",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1536551061288-29424859a68a?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 10,
    calories: 450,
    protein: "8g",
    fat: "25g",
    carbs: "48g",
    dishTypes: ["dessert"],
    summary: "Twenty layers of paper-thin matcha crepes separated by light pastry cream.",
    extendedIngredients: [
      { id: 1, name: "matcha powder", amount: 3, unit: "tbsp", original: "3 tbsp culinary grade matcha", aisle: "Tea" },
      { id: 2, name: "flour", amount: 2, unit: "cups", original: "2 cups all-purpose flour", aisle: "Baking" },
      { id: 3, name: "milk", amount: 3, unit: "cups", original: "3 cups whole milk", aisle: "Dairy" },
      { id: 4, name: "eggs", amount: 4, unit: "large", original: "4 large eggs", aisle: "Dairy" },
      { id: 5, name: "heavy cream", amount: 2, unit: "cups", original: "2 cups heavy whipping cream", aisle: "Dairy" },
      { id: 6, name: "butter", amount: 4, unit: "tbsp", original: "4 tbsp melted butter", aisle: "Dairy" },
      { id: 7, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar", aisle: "Pantry" },
      { id: 8, name: "vanilla", amount: 1, unit: "tsp", original: "1 tsp vanilla extract", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk crepe batter (flour, matcha, eggs, milk, butter) and let rest for 1 hour.", ingredients: [], equipment: [] },
      { number: 2, step: "Cook 20 thin crepes in a non-stick pan and let them cool completely.", ingredients: [], equipment: [] },
      { number: 3, step: "Whip cream with sugar and vanilla to stiff peaks.", ingredients: [], equipment: [] },
      { number: 4, step: "Layer crepes with a thin spread of cream in between each; chill for 4 hours before slicing.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5012,
    title: "Churros with Chocolate Ganache",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1577224216956-65be797378fc?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 4,
    calories: 420,
    protein: "4g",
    fat: "22g",
    carbs: "50g",
    dishTypes: ["dessert"],
    summary: "Golden, crispy Spanish fried dough tossed in cinnamon sugar with a rich dipping sauce.",
    extendedIngredients: [
      { id: 1, name: "all-purpose flour", amount: 1, unit: "cup", original: "1 cup all-purpose flour", aisle: "Baking" },
      { id: 2, name: "water", amount: 1, unit: "cup", original: "1 cup boiling water", aisle: "Pantry" },
      { id: 3, name: "butter", amount: 2, unit: "tbsp", original: "2 tbsp unsalted butter", aisle: "Dairy" },
      { id: 4, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup sugar for coating", aisle: "Pantry" },
      { id: 5, name: "cinnamon", amount: 1, unit: "tbsp", original: "1 tbsp ground cinnamon", aisle: "Spices" },
      { id: 6, name: "dark chocolate", amount: 100, unit: "g", original: "100g 70% dark chocolate", aisle: "Baking" },
      { id: 7, name: "heavy cream", amount: 0.5, unit: "cup", original: "1/2 cup heavy cream", aisle: "Dairy" },
      { id: 8, name: "vanilla", amount: 1, unit: "tsp", original: "1 tsp vanilla extract", aisle: "Baking" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Boil water with butter and salt; stir in flour until a dough ball forms.", ingredients: [], equipment: [] },
      { number: 2, step: "Transfer dough to a piping bag with a star tip.", ingredients: [], equipment: [] },
      { number: 3, step: "Pipe 4-inch strips into hot oil and fry until golden brown.", ingredients: [], equipment: [] },
      { number: 4, step: "Toss in cinnamon sugar and serve with melted chocolate ganache.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5013,
    title: "Turkish Pistachio Baklava",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 120,
    servings: 12,
    calories: 380,
    protein: "5g",
    fat: "24g",
    carbs: "40g",
    dishTypes: ["dessert"],
    summary: "A rich, sweet pastry made of layers of thin phyllo dough with chopped pistachios and honey syrup.",
    extendedIngredients: [
      { id: 1, name: "phyllo dough", amount: 1, unit: "lb", original: "1 lb phyllo dough sheets", aisle: "Baking" },
      { id: 2, name: "pistachios", amount: 300, unit: "g", original: "300g finely chopped pistachios", aisle: "Pantry" },
      { id: 3, name: "butter", amount: 200, unit: "g", original: "200g clarified butter (ghee)", aisle: "Dairy" },
      { id: 4, name: "honey", amount: 1, unit: "cup", original: "1 cup orange blossom honey", aisle: "Pantry" },
      { id: 5, name: "sugar", amount: 1, unit: "cup", original: "1 cup sugar", aisle: "Pantry" },
      { id: 6, name: "lemon juice", amount: 1, unit: "tbsp", original: "1 tbsp lemon juice", aisle: "Produce" },
      { id: 7, name: "rose water", amount: 1, unit: "tsp", original: "1 tsp rose water", aisle: "Pantry" },
      { id: 8, name: "water", amount: 1, unit: "cup", original: "1 cup water for syrup", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Layer 40 sheets of phyllo, brushing each with melted butter and adding pistachios between layers.", ingredients: [], equipment: [] },
      { number: 2, step: "Cut into diamonds and bake at 325°F for 45 minutes until golden.", ingredients: [], equipment: [] },
      { number: 3, step: "Boil water, sugar, honey, and lemon to create a thick syrup.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour cold syrup over the hot baklava immediately after baking.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5014,
    title: "Arabic Rosewater Muhallabia",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 4,
    calories: 220,
    protein: "6g",
    fat: "8g",
    carbs: "30g",
    dishTypes: ["dessert"],
    summary: "A silky Middle Eastern milk pudding scented with rose and orange blossom.",
    extendedIngredients: [
      { id: 1, name: "whole milk", amount: 4, unit: "cups", original: "4 cups whole milk", aisle: "Dairy" },
      { id: 2, name: "cornstarch", amount: 4, unit: "tbsp", original: "4 tbsp cornstarch", aisle: "Pantry" },
      { id: 3, name: "sugar", amount: 0.5, unit: "cup", original: "1/2 cup granulated sugar", aisle: "Pantry" },
      { id: 4, name: "rose water", amount: 1, unit: "tbsp", original: "1 tbsp rose water", aisle: "Pantry" },
      { id: 5, name: "orange blossom water", amount: 1, unit: "tsp", original: "1 tsp orange blossom water", aisle: "Pantry" },
      { id: 6, name: "pistachios", amount: 2, unit: "tbsp", original: "Crushed pistachios for garnish", aisle: "Pantry" },
      { id: 7, name: "rose petals", amount: 1, unit: "pinch", original: "Dried edible rose petals", aisle: "Pantry" },
      { id: 8, name: "pomegranate", amount: 2, unit: "tbsp", original: "Fresh pomegranate seeds", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk cold milk and cornstarch until no lumps remain.", ingredients: [], equipment: [] },
      { number: 2, step: "Add sugar and heat over medium flame, stirring constantly until thick.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in rose and orange blossom waters; pour into small dessert bowls.", ingredients: [], equipment: [] },
      { number: 4, step: "Chill for 3 hours; garnish with pistachios and rose petals.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 5015,
    title: "Croquembouche Profiteroles",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 90,
    servings: 8,
    calories: 450,
    protein: "10g",
    fat: "28g",
    carbs: "40g",
    dishTypes: ["dessert"],
    summary: "French choux pastry puffs filled with vanilla crème pâtissière and dipped in spun sugar caramel.",
    extendedIngredients: [
      { id: 1, name: "choux pastry", amount: 1, unit: "batch", original: "1 batch homemade choux pastry", aisle: "Bakery" },
      { id: 2, name: "heavy cream", amount: 2, unit: "cups", original: "2 cups heavy cream", aisle: "Dairy" },
      { id: 3, name: "vanilla bean", amount: 1, unit: "", original: "1 vanilla bean", aisle: "Produce" },
      { id: 4, name: "sugar", amount: 1, unit: "cup", original: "1 cup sugar for caramel", aisle: "Pantry" },
      { id: 5, name: "eggs", amount: 4, unit: "", original: "4 large eggs", aisle: "Dairy" },
      { id: 6, name: "butter", amount: 4, unit: "tbsp", original: "4 tbsp butter", aisle: "Dairy" },
      { id: 7, name: "flour", amount: 1, unit: "cup", original: "1 cup flour", aisle: "Baking" },
      { id: 8, name: "water", amount: 1, unit: "cup", original: "1 cup water", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Bake choux pastry puffs until golden and hollow.", ingredients: [], equipment: [] },
      { number: 2, step: "Fill each puff with homemade vanilla bean pastry cream.", ingredients: [], equipment: [] },
      { number: 3, step: "Make a dry caramel by melting sugar until amber.", ingredients: [], equipment: [] },
      { number: 4, step: "Carefully dip the top of each profiterole into the hot caramel; arrange into a tower.", ingredients: [], equipment: [] }
    ]}]
  },

  // --- DRINKS (8 RECIPES) ---
  {
    id: 6001,
    title: "Iced Matcha Latte",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 120,
    protein: "4g",
    fat: "3g",
    carbs: "18g",
    dishTypes: ["drink"],
    summary: "Premium ceremonial grade matcha whisked with oat milk and honey over ice.",
    extendedIngredients: [
      { id: 1, name: "matcha powder", amount: 1, unit: "tsp", original: "1 tsp ceremonial grade matcha", aisle: "Tea" },
      { id: 2, name: "oat milk", amount: 1, unit: "cup", original: "1 cup creamy oat milk", aisle: "Dairy" },
      { id: 3, name: "honey", amount: 1, unit: "tsp", original: "1 tsp raw honey", aisle: "Pantry" },
      { id: 4, name: "hot water", amount: 2, unit: "tbsp", original: "2 tbsp hot water (80°C)", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "1 cup ice cubes", aisle: "Pantry" },
      { id: 6, name: "vanilla", amount: 1, unit: "drop", original: "1 drop vanilla extract", aisle: "Baking" },
      { id: 7, name: "cinnamon", amount: 1, unit: "sprinkle", original: "Sprinkle of cinnamon", aisle: "Spices" },
      { id: 8, name: "mint", amount: 1, unit: "sprig", original: "Mint for garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sift matcha into a small bowl and whisk with hot water until frothy.", ingredients: [], equipment: [] },
      { number: 2, step: "Stir in honey and vanilla until dissolved.", ingredients: [], equipment: [] },
      { number: 3, step: "Fill a glass with ice and pour in oat milk.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour the concentrated matcha over the milk for a layered look.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6002,
    title: "Classic Mojito Mocktail",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 85,
    protein: "0g",
    fat: "0g",
    carbs: "22g",
    dishTypes: ["drink"],
    summary: "Refreshing muddled mint and lime topped with sparkling soda water.",
    extendedIngredients: [
      { id: 1, name: "fresh mint", amount: 10, unit: "leaves", original: "10-12 fresh mint leaves", aisle: "Produce" },
      { id: 2, name: "lime", amount: 1, unit: "", original: "1 lime, cut into wedges", aisle: "Produce" },
      { id: 3, name: "cane sugar", amount: 1, unit: "tbsp", original: "1 tbsp organic cane sugar", aisle: "Pantry" },
      { id: 4, name: "soda water", amount: 1, unit: "cup", original: "1 cup sparkling mineral water", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Crushed ice", aisle: "Pantry" },
      { id: 6, name: "simple syrup", amount: 1, unit: "tsp", original: "1 tsp simple syrup (optional)", aisle: "Pantry" },
      { id: 7, name: "mint", amount: 1, unit: "sprig", original: "Extra mint for garnish", aisle: "Produce" },
      { id: 8, name: "lime", amount: 1, unit: "slice", original: "Lime wheel for decor", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Muddle mint leaves, lime wedges, and sugar in a sturdy glass.", ingredients: [], equipment: [] },
      { number: 2, step: "Fill the glass to the brim with crushed ice.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with sparkling soda water and stir gently.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with a fresh mint sprig and lime wheel.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6003,
    title: "Green Detox Smoothie",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1610970881699-44a55b4cfd93?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 180,
    protein: "5g",
    fat: "2g",
    carbs: "38g",
    dishTypes: ["drink"],
    summary: "A revitalizing blend of spinach, green apple, ginger, and lemon.",
    extendedIngredients: [
      { id: 1, name: "spinach", amount: 2, unit: "cups", original: "2 cups baby spinach", aisle: "Produce" },
      { id: 2, name: "green apple", amount: 1, unit: "", original: "1 green apple, chopped", aisle: "Produce" },
      { id: 3, name: "cucumber", amount: 0.5, unit: "", original: "1/2 cucumber", aisle: "Produce" },
      { id: 4, name: "ginger", amount: 1, unit: "inch", original: "1 inch fresh ginger root", aisle: "Produce" },
      { id: 5, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon, juiced", aisle: "Produce" },
      { id: 6, name: "coconut water", amount: 1, unit: "cup", original: "1 cup coconut water", aisle: "Dairy" },
      { id: 7, name: "chia seeds", amount: 1, unit: "tsp", original: "1 tsp chia seeds", aisle: "Pantry" },
      { id: 8, name: "ice", amount: 0.5, unit: "cup", original: "1/2 cup ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Combine all ingredients in a high-speed blender.", ingredients: [], equipment: [] },
      { number: 2, step: "Blend on high until perfectly smooth.", ingredients: [], equipment: [] },
      { number: 3, step: "Adjust consistency with more coconut water if needed.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve immediately while cold.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6004,
    title: "Berry Hibiscus Iced Tea",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 4,
    calories: 45,
    protein: "0g",
    fat: "0g",
    carbs: "12g",
    dishTypes: ["drink"],
    summary: "Tart and floral hibiscus tea infused with fresh berries and citrus.",
    extendedIngredients: [
      { id: 1, name: "hibiscus tea bags", amount: 4, unit: "", original: "4 dried hibiscus tea bags", aisle: "Tea" },
      { id: 2, name: "hot water", amount: 4, unit: "cups", original: "4 cups boiling water", aisle: "Pantry" },
      { id: 3, name: "mixed berries", amount: 1, unit: "cup", original: "1 cup raspberries/blueberries", aisle: "Produce" },
      { id: 4, name: "honey", amount: 2, unit: "tbsp", original: "2 tbsp raw honey", aisle: "Pantry" },
      { id: 5, name: "orange", amount: 1, unit: "slice", original: "1 orange slice per glass", aisle: "Produce" },
      { id: 6, name: "fresh mint", amount: 1, unit: "handful", original: "Handful of mint", aisle: "Produce" },
      { id: 7, name: "lemon", amount: 1, unit: "wedge", original: "Lemon for serving", aisle: "Produce" },
      { id: 8, name: "ice", amount: 1, unit: "qt", original: "Plenty of ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Steep hibiscus tea bags in boiling water for 10 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Remove bags and stir in honey while hot; let cool.", ingredients: [], equipment: [] },
      { number: 3, step: "In a pitcher, lightly crush the berries and mint.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour tea over berries and ice; stir well.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6005,
    title: "Turmeric Ginger Golden Milk",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544833095-18456729354d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 150,
    protein: "3g",
    fat: "9g",
    carbs: "14g",
    dishTypes: ["drink"],
    summary: "Ancient Ayurvedic wellness drink with anti-inflammatory turmeric and ginger.",
    extendedIngredients: [
      { id: 1, name: "coconut milk", amount: 1, unit: "cup", original: "1 cup light coconut milk", aisle: "Dairy" },
      { id: 2, name: "turmeric", amount: 0.5, unit: "tsp", original: "1/2 tsp ground turmeric", aisle: "Spices" },
      { id: 3, name: "ginger", amount: 0.25, unit: "tsp", original: "1/4 tsp ground ginger", aisle: "Spices" },
      { id: 4, name: "black pepper", amount: 1, unit: "pinch", original: "Pinch of black pepper", aisle: "Spices" },
      { id: 5, name: "honey", amount: 1, unit: "tsp", original: "1 tsp honey", aisle: "Pantry" },
      { id: 6, name: "cinnamon stick", amount: 1, unit: "", original: "1 cinnamon stick", aisle: "Spices" },
      { id: 7, name: "cardamom", amount: 1, unit: "pinch", original: "Pinch of cardamom", aisle: "Spices" },
      { id: 8, name: "coconut oil", amount: 1, unit: "tsp", original: "1 tsp virgin coconut oil", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk all ingredients together in a small saucepan.", ingredients: [], equipment: [] },
      { number: 2, step: "Heat over medium heat until steaming (do not boil).", ingredients: [], equipment: [] },
      { number: 3, step: "Simmer for 5 minutes to infuse flavors.", ingredients: [], equipment: [] },
      { number: 4, step: "Strain into a mug and enjoy warm.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6006,
    title: "Double Espresso Macchiato",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 15,
    protein: "1g",
    fat: "1g",
    carbs: "1g",
    dishTypes: ["drink"],
    summary: "Intense double espresso 'marked' with a dollop of silky micro-foam.",
    extendedIngredients: [
      { id: 1, name: "espresso beans", amount: 18, unit: "g", original: "18g specialty coffee beans", aisle: "Coffee" },
      { id: 2, name: "whole milk", amount: 2, unit: "tbsp", original: "2 tbsp fresh whole milk", aisle: "Dairy" },
      { id: 3, name: "water", amount: 2, unit: "oz", original: "2 oz filtered water", aisle: "Pantry" },
      { id: 4, name: "cocoa", amount: 1, unit: "sprinkle", original: "Optional cocoa dust", aisle: "Baking" },
      { id: 5, name: "sugar", amount: 1, unit: "cube", original: "Optional sugar cube", aisle: "Pantry" },
      { id: 6, name: "chocolate", amount: 1, unit: "piece", original: "Small dark chocolate on side", aisle: "Baking" },
      { id: 7, name: "biscuit", amount: 1, unit: "", original: "1 small almond biscotti", aisle: "Bakery" },
      { id: 8, name: "sparkling water", amount: 2, unit: "oz", original: "Side of sparkling water", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Grind coffee beans finely and pull a 2oz double espresso shot.", ingredients: [], equipment: [] },
      { number: 2, step: "Steam a small amount of milk to create thick micro-foam.", ingredients: [], equipment: [] },
      { number: 3, step: "Place one teaspoon of foam in the center of the espresso.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve immediately in a pre-warmed demitasse cup.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6007,
    title: "Fresh Watermelon Cooler",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1493606394243-7473b647000e?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 2,
    calories: 90,
    protein: "1g",
    fat: "0g",
    carbs: "22g",
    dishTypes: ["drink"],
    summary: "Hybrid drink: part juice, part mocktail, 100% hydration from fresh watermelon.",
    extendedIngredients: [
      { id: 1, name: "watermelon", amount: 3, unit: "cups", original: "3 cups cubed chilled watermelon", aisle: "Produce" },
      { id: 2, name: "lime", amount: 1, unit: "", original: "1 lime, juiced", aisle: "Produce" },
      { id: 3, name: "mint", amount: 4, unit: "leaves", original: "4 fresh mint leaves", aisle: "Produce" },
      { id: 4, name: "honey", amount: 1, unit: "tsp", original: "1 tsp honey (optional)", aisle: "Pantry" },
      { id: 5, name: "salt", amount: 1, unit: "pinch", original: "Tiny pinch of sea salt", aisle: "Spices" },
      { id: 6, name: "ice", amount: 1, unit: "cup", original: "Crushed ice", aisle: "Pantry" },
      { id: 7, name: "cucumber", amount: 2, unit: "slices", original: "2 cucumber slices for garnish", aisle: "Produce" },
      { id: 8, name: "watermelon", amount: 1, unit: "wedge", original: "Small wedge for garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend watermelon, lime juice, and mint until smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "Strain through a mesh sieve if you prefer a thinner juice.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour into glasses filled with crushed ice.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with a watermelon wedge and mint.", ingredients: [] }
    ]}]
  },
  {
    id: 6008,
    title: "Chai Tea Latte",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787210-282aa592277d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 210,
    protein: "8g",
    fat: "5g",
    carbs: "32g",
    dishTypes: ["drink"],
    summary: "Authentic spiced black tea simmered with milk and exotic spices.",
    extendedIngredients: [
      { id: 1, name: "black tea", amount: 1, unit: "bag", original: "1 strong black tea bag", aisle: "Tea" },
      { id: 2, name: "milk", amount: 1, unit: "cup", original: "1 cup fresh milk", aisle: "Dairy" },
      { id: 3, name: "cardamom", amount: 3, unit: "pods", original: "3 crushed pods", aisle: "Spices" },
      { id: 4, name: "cinnamon", amount: 1, unit: "stick", original: "1 cinnamon stick", aisle: "Spices" },
      { id: 5, name: "cloves", amount: 2, unit: "", original: "2 whole cloves", aisle: "Spices" },
      { id: 6, name: "ginger", amount: 0.5, unit: "inch", original: "1/2 inch sliced ginger", aisle: "Produce" },
      { id: 7, name: "honey", amount: 2, unit: "tsp", original: "2 tsp honey", aisle: "Pantry" },
      { id: 8, name: "star anise", amount: 1, unit: "whole", original: "1 star anise", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Simmer spices and ginger in 1/2 cup water for 5 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Add tea bag and steep for 3 mins; remove bag.", ingredients: [], equipment: [] },
      { number: 3, step: "Add milk and honey; heat until steaming.", ingredients: [], equipment: [] },
      { number: 4, step: "Froth slightly and strain into a large mug.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6009,
    title: "Anti-Inflammatory Ginger Turmeric Tea",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 45,
    protein: "1g",
    fat: "1g",
    carbs: "8g",
    dishTypes: ["drink"],
    summary: "Warming golden tea with fresh roots, black pepper, and raw honey.",
    extendedIngredients: [
      { id: 1, name: "fresh turmeric", amount: 1, unit: "inch", original: "1 inch fresh turmeric, sliced", aisle: "Produce" },
      { id: 2, name: "fresh ginger", amount: 1, unit: "inch", original: "1 inch fresh ginger, sliced", aisle: "Produce" },
      { id: 3, name: "black pepper", amount: 1, unit: "pinch", original: "Pinch of black pepper", aisle: "Spices" },
      { id: 4, name: "honey", amount: 1, unit: "tsp", original: "1 tsp raw honey", aisle: "Pantry" },
      { id: 5, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon, juiced", aisle: "Produce" },
      { id: 6, name: "water", amount: 2, unit: "cups", original: "2 cups filtered water", aisle: "Pantry" },
      { id: 7, name: "cinnamon", amount: 1, unit: "stick", original: "1 cinnamon stick", aisle: "Spices" },
      { id: 8, name: "cayenne", amount: 1, unit: "pinch", original: "Optional pinch of cayenne", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Simmer ginger, turmeric, and cinnamon in water for 8 minutes.", ingredients: [], equipment: [] },
      { number: 2, step: "Add black pepper (to activate turmeric's curcumin).", ingredients: [], equipment: [] },
      { number: 3, step: "Strain into a mug; stir in honey and lemon juice.", ingredients: [], equipment: [] },
      { number: 4, step: "Enjoy hot as a morning revitalizer.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6010,
    title: "Mint & Cucumber Spa Water",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 4,
    calories: 10,
    protein: "0g",
    fat: "0g",
    carbs: "2g",
    dishTypes: ["drink"],
    summary: "Zesty, hydrating infusion that transforms plain water into a refreshing luxury.",
    extendedIngredients: [
      { id: 1, name: "cucumber", amount: 0.5, unit: "", original: "1/2 cucumber, thinly sliced", aisle: "Produce" },
      { id: 2, name: "mint", amount: 15, unit: "leaves", original: "15 fresh mint leaves", aisle: "Produce" },
      { id: 3, name: "lime", amount: 1, unit: "", original: "1 lime, sliced into rounds", aisle: "Produce" },
      { id: 4, name: "water", amount: 1, unit: "liter", original: "1 liter chilled mineral water", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "1 cup ice cubes", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place cucumber, mint, and lime in a large glass pitcher.", ingredients: [], equipment: [] },
      { number: 2, step: "Lightly muddle the mint to release its oils.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour in chilled water and let infuse for at least 30 minutes in the fridge.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve over ice with fresh cucumber garnishes.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6011,
    title: "Watermelon Lime Hydrator",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 2,
    calories: 60,
    protein: "1g",
    fat: "0g",
    carbs: "15g",
    dishTypes: ["drink"],
    summary: "Naturally sweet watermelon blended with zesty lime—perfect for hot summer days.",
    extendedIngredients: [
      { id: 1, name: "watermelon", amount: 3, unit: "cups", original: "3 cups seedless watermelon chunks", aisle: "Produce" },
      { id: 2, name: "lime", amount: 1, unit: "", original: "1 lime, juiced", aisle: "Produce" },
      { id: 3, name: "mint", amount: 4, unit: "leaves", original: "Fresh mint for blending", aisle: "Produce" },
      { id: 4, name: "ice", amount: 0.5, unit: "cup", original: "Handful of ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place watermelon, lime juice, and mint in a high-speed blender.", ingredients: [], equipment: [] },
      { number: 2, step: "Pulse until smooth; avoid over-blending to keep it fresh.", ingredients: [], equipment: [] },
      { number: 3, step: "Strain if you prefer a perfectly clear juice, or keep the fiber.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve in tall glasses with a sprig of mint.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6012,
    title: "Healthy Cacao Hot Chocolate",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 140,
    protein: "5g",
    fat: "8g",
    carbs: "12g",
    dishTypes: ["drink"],
    summary: "Guilt-free hot chocolate using antioxidant-rich raw cacao and creamy almond milk.",
    extendedIngredients: [
      { id: 1, name: "almond milk", amount: 1, unit: "cup", original: "1 cup unsweetened almond milk", aisle: "Dairy" },
      { id: 2, name: "cacao powder", amount: 1, unit: "tbsp", original: "1 tbsp raw organic cacao", aisle: "Baking" },
      { id: 3, name: "maple syrup", amount: 1, unit: "tsp", original: "1 tsp maple syrup", aisle: "Pantry" },
      { id: 4, name: "cinnamon", amount: 1, unit: "pinch", original: "Pinch of ground cinnamon", aisle: "Spices" },
      { id: 5, name: "vanilla", amount: 0.5, unit: "tsp", original: "1/2 tsp vanilla extract", aisle: "Baking" },
      { id: 6, name: "sea salt", amount: 1, unit: "pinch", original: "The tiniest pinch of sea salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Heat almond milk in a small saucepan over medium-low heat.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk in cacao powder, maple syrup, and spices.", ingredients: [], equipment: [] },
      { number: 3, step: "Froth with a hand blender for 30 seconds for a creamy head.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour into a warm mug and dust with more cacao.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6013,
    title: "Blue Butterfly Pea flower Tea",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 8,
    servings: 1,
    calories: 20,
    protein: "0g",
    fat: "0g",
    carbs: "5g",
    dishTypes: ["drink"],
    summary: "Magical blue tea that changes color to purple when you add a squeeze of lemon.",
    extendedIngredients: [
      { id: 1, name: "butterfly pea flowers", amount: 5, unit: "dried", original: "5 dried butterfly pea flowers", aisle: "Tea" },
      { id: 2, name: "water", amount: 1, unit: "cup", original: "1 cup hot water", aisle: "Pantry" },
      { id: 3, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon", aisle: "Produce" },
      { id: 4, name: "honey", amount: 1, unit: "tsp", original: "1 tsp raw honey", aisle: "Pantry" },
      { id: 5, name: "lavender", amount: 1, unit: "pinch", original: "Optional pinch of lavender", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Steep flowers in hot water for 5 minutes until deep blue.", ingredients: [], equipment: [] },
      { number: 2, step: "Strain and stir in honey.", ingredients: [], equipment: [] },
      { number: 3, step: "Add a squeeze of lemon to watch the color transform to vibrant purple.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve hot or over ice as an aesthetic mocktail base.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6014,
    title: "Traditional Egyptian Karkade Tea",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 4,
    calories: 45,
    protein: "0g",
    fat: "0g",
    carbs: "12g",
    dishTypes: ["drink"],
    summary: "Vibrant ruby-red hibiscus tea, served stone-cold and perfectly balanced with sweetness.",
    extendedIngredients: [
      { id: 1, name: "dried hibiscus petals", amount: 1, unit: "cup", original: "1 cup dried hibiscus (Karkade)", aisle: "Pantry" },
      { id: 2, name: "sugar", amount: 0.25, unit: "cup", original: "1/4 cup sugar or sweetener of choice", aisle: "Pantry" },
      { id: 3, name: "water", amount: 6, unit: "cups", original: "6 cups water", aisle: "Pantry" },
      { id: 4, name: "cloves", amount: 2, unit: "whole", original: "2 cloves", aisle: "Spices" },
      { id: 5, name: "ice", amount: 2, unit: "cups", original: "Plenty of ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Bring water and hibiscus petals to a rolling boil.", ingredients: [], equipment: [] },
      { number: 2, step: "Turn off heat, add cloves, and let steep for 10 minutes.", ingredients: [], equipment: [] },
      { number: 3, step: "Strain and stir in sugar while still warm; then chill thoroughly in the fridge.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve over ice in tall glasses for the ultimate refreshement.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6015,
    title: "Ultimate Green Detox Juice",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 85,
    protein: "3g",
    fat: "0g",
    carbs: "18g",
    dishTypes: ["drink"],
    summary: "Clear the fog with this nutrient-dense blend of kale, apple, and citrus.",
    extendedIngredients: [
      { id: 1, name: "kale", amount: 2, unit: "cups", original: "2 cups fresh kale", aisle: "Produce" },
      { id: 2, name: "green apple", amount: 1, unit: "", original: "1 green apple, cored", aisle: "Produce" },
      { id: 3, name: "ginger", amount: 0.5, unit: "inch", original: "1/2 inch fresh ginger", aisle: "Produce" },
      { id: 4, name: "celery", amount: 2, unit: "stalks", original: "2 stalks celery", aisle: "Produce" },
      { id: 5, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon, peeled", aisle: "Produce" },
      { id: 6, name: "cucumber", amount: 0.5, unit: "", original: "1/2 cucumber", aisle: "Produce" },
      { id: 7, name: "mint", amount: 4, unit: "leaves", original: "Fresh mint", aisle: "Produce" },
      { id: 8, name: "salt", amount: 1, unit: "pinch", original: "Pinch of Pink Himalayan salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Wash all vegetables and fruit thoroughly.", ingredients: [], equipment: [] },
      { number: 2, step: "Run all ingredients through a cold-press juicer.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in the pinch of salt to balance the flavors.", ingredients: [], equipment: [] },
      { number: 4, step: "Drink immediately to get the maximum vibration of nutrients.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 6016,
    title: "Mango Lassi with Cardamom",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1571006682855-3fc35578c658?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 2,
    calories: 180,
    protein: "6g",
    fat: "4g",
    carbs: "30g",
    dishTypes: ["drink"],
    summary: "A creamy and refreshing traditional Indian drink made with yogurt and ripe mangoes.",
    extendedIngredients: [
      { id: 1, name: "mango", amount: 2, unit: "ripe", original: "2 ripe mangoes, diced", aisle: "Produce" },
      { id: 2, name: "greek yogurt", amount: 1, unit: "cup", original: "1 cup plain Greek yogurt", aisle: "Dairy" },
      { id: 3, name: "milk", amount: 0.5, unit: "cup", original: "1/2 cup milk (or water)", aisle: "Dairy" },
      { id: 4, name: "honey", amount: 2, unit: "tbsp", original: "2 tbsp honey or sugar", aisle: "Pantry" },
      { id: 5, name: "cardamom", amount: 0.5, unit: "tsp", original: "1/2 tsp ground cardamom", aisle: "Spices" },
      { id: 6, name: "pistachios", amount: 1, unit: "tsp", original: "Crushed pistachios for garnish", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Combine all ingredients in a blender.", ingredients: [], equipment: [] },
      { number: 2, step: "Blend on high until smooth and creamy.", ingredients: [], equipment: [] },
      { number: 3, step: "Taste and adjust sweetness if necessary.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour into glasses and sprinkle with pistachios.", ingredients: [] }
    ]}]
  },
  {
    id: 6017,
    title: "Classic Mojito Mocktail",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 60,
    protein: "0g",
    fat: "0g",
    carbs: "15g",
    dishTypes: ["drink"],
    summary: "A zesty and cooling blend of fresh lime, mint, and soda water.",
    extendedIngredients: [
      { id: 1, name: "lime", amount: 1, unit: "", original: "1 lime, cut into wedges", aisle: "Produce" },
      { id: 2, name: "mint", amount: 10, unit: "leaves", original: "10 fresh mint leaves", aisle: "Produce" },
      { id: 3, name: "sugar", amount: 2, unit: "tsp", original: "2 tsp sugar or simple syrup", aisle: "Pantry" },
      { id: 4, name: "soda water", amount: 1, unit: "cup", original: "1 cup club soda", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Crushed ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Muddle the lime wedges and mint leaves with sugar in a glass.", ingredients: [], equipment: [] },
      { number: 2, step: "Fill the glass with crushed ice.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with club soda and stir gently.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with a sprig of mint and a lime wheel.", ingredients: [] }
    ]}]
  },
  {
    id: 6018,
    title: "Homemade Fresh Lemonade",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1523472721958-978152f4d69b?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 4,
    calories: 120,
    protein: "0g",
    fat: "0g",
    carbs: "30g",
    dishTypes: ["drink"],
    summary: "The quintessentially refreshing summer drink made with real lemons and simple syrup.",
    extendedIngredients: [
      { id: 1, name: "lemons", amount: 6, unit: "", original: "6 large lemons, juiced", aisle: "Produce" },
      { id: 2, name: "sugar", amount: 1, unit: "cup", original: "1 cup sugar", aisle: "Pantry" },
      { id: 3, name: "water", amount: 6, unit: "cups", original: "6 cups cold water", aisle: "Pantry" },
      { id: 4, name: "ice", amount: 2, unit: "cups", original: "Ice cubes", aisle: "Pantry" },
      { id: 5, name: "lemon slices", amount: 4, unit: "", original: "Lemon slices for garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Make simple syrup by heating 1 cup water and 1 cup sugar until dissolved; let cool.", ingredients: [], equipment: [] },
      { number: 2, step: "In a large pitcher, combine lemon juice, simple syrup, and rest of water.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir well and refrigerate until cold.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve over ice with lemon slices.", ingredients: [] }
    ]}]
  },
  {
    id: 6019,
    title: "Iced Caramel Macchiato",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 210,
    protein: "8g",
    fat: "7g",
    carbs: "32g",
    dishTypes: ["drink"],
    summary: "A coffeehouse favorite: sweet vanilla, rich espresso, and buttery caramel over ice.",
    extendedIngredients: [
      { id: 1, name: "espresso", amount: 2, unit: "shots", original: "2 shots of espresso", aisle: "Pantry" },
      { id: 2, name: "milk", amount: 1, unit: "cup", original: "1 cup whole milk", aisle: "Dairy" },
      { id: 3, name: "vanilla syrup", amount: 1, unit: "tbsp", original: "1 tbsp vanilla syrup", aisle: "Pantry" },
      { id: 4, name: "caramel sauce", amount: 2, unit: "tbsp", original: "2 tbsp caramel sauce", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Ice cubes", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Drizzle caramel sauce around the inside of a glass.", ingredients: [], equipment: [] },
      { number: 2, step: "Add vanilla syrup and milk to the glass, then fill with ice.", ingredients: [], equipment: [] },
      { number: 3, step: "Slowly pour the espresso over the milk for a layered effect.", ingredients: [], equipment: [] },
      { number: 4, step: "Drizzle more caramel on top and enjoy.", ingredients: [] }
    ]}]
  },
  {
    id: 6020,
    title: "Watermelon Mint Cooler",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1547514701-427ec4462bdd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 2,
    calories: 90,
    protein: "1g",
    fat: "0g",
    carbs: "22g",
    dishTypes: ["drink"],
    summary: "Incredibly refreshing and hydrated blend of sweet watermelon and cool mint.",
    extendedIngredients: [
      { id: 1, name: "watermelon", amount: 4, unit: "cups", original: "4 cups cubed seedless watermelon", aisle: "Produce" },
      { id: 2, name: "lime", amount: 1, unit: "", original: "1/2 lime, juiced", aisle: "Produce" },
      { id: 3, name: "mint", amount: 1, unit: "tbsp", original: "Fresh mint leaves", aisle: "Produce" },
      { id: 4, name: "ice", amount: 1, unit: "cup", original: "Small handful of ice (optional)", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place all ingredients in a high-speed blender.", ingredients: [], equipment: [] },
      { number: 2, step: "Process until completely smooth.", ingredients: [], equipment: [] },
      { number: 3, step: "Strain through a mesh sieve if you prefer a thinner juice.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve chilled in glasses with a mint garnish.", ingredients: [] }
    ]}]
  },
  {
    id: 6021,
    title: "Dragon Fruit Lemonade",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1546173159-315724a93c90?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 2,
    calories: 120,
    protein: "1g",
    fat: "0g",
    carbs: "30g",
    dishTypes: ["drink"],
    summary: "A vibrant pink, exotic lemonade made with fresh pitaya (dragon fruit).",
    extendedIngredients: [
      { id: 1, name: "dragon fruit", amount: 0.5, unit: "cup", original: "1/2 cup pink dragon fruit, cubed", aisle: "Produce" },
      { id: 2, name: "lemon juice", amount: 0.5, unit: "cup", original: "1/2 cup fresh lemon juice", aisle: "Produce" },
      { id: 3, name: "agave nectar", amount: 2, unit: "tbsp", original: "2 tbsp agave or simple syrup", aisle: "Pantry" },
      { id: 4, name: "water", amount: 2, unit: "cups", original: "2 cups cold water", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Ice cubes", aisle: "Pantry" },
      { id: 6, name: "mint", amount: 1, unit: "sprig", original: "Fresh mint", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend the dragon fruit cubes with a splash of water until smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "In a pitcher, combine lemon juice, agave, and water.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in the dragon fruit puree for an instant vibrant pink color.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve over ice and garnish with mint.", ingredients: [] }
    ]}]
  },
  {
    id: 6022,
    title: "Magic Butterfly Pea Lemonade",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 60,
    protein: "0g",
    fat: "0g",
    carbs: "15g",
    dishTypes: ["drink"],
    summary: "A stunning indigo tea that turns bright purple when you add a squeeze of lemon.",
    extendedIngredients: [
      { id: 1, name: "butterfly pea flowers", amount: 1, unit: "tbsp", original: "1 tbsp dried butterfly pea flowers", aisle: "Tea" },
      { id: 2, name: "hot water", amount: 1, unit: "cup", original: "1 cup boiling water", aisle: "Pantry" },
      { id: 3, name: "lemon juice", amount: 2, unit: "tbsp", original: "2 tbsp fresh lemon juice", aisle: "Produce" },
      { id: 4, name: "honey", amount: 1, unit: "tbsp", original: "1 tbsp honey or agave", aisle: "Pantry" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Plenty of ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Steep the dried flowers in boiling water for 5 minutes until deep blue.", ingredients: [], equipment: [] },
      { number: 2, step: "Strain and stir in honey while still warm; let it cool.", ingredients: [], equipment: [] },
      { number: 3, step: "Fill a glass with ice and pour in the blue tea.", ingredients: [], equipment: [] },
      { number: 4, step: "Squeeze in the lemon juice and watch the color change to purple!", ingredients: [] }
    ]}]
  },
  {
    id: 6023,
    title: "Whipped Strawberry Milk",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1546452249-0b4caea408fe?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 240,
    protein: "6g",
    fat: "10g",
    carbs: "32g",
    dishTypes: ["drink"],
    summary: "The viral aesthetic drink: fluffy strawberry cream over chilled milk.",
    extendedIngredients: [
      { id: 1, name: "heavy cream", amount: 0.25, unit: "cup", original: "1/4 cup heavy whipping cream", aisle: "Dairy" },
      { id: 2, name: "strawberry powder", amount: 1, unit: "tbsp", original: "1 tbsp strawberry Nesquik or freeze-dried powder", aisle: "Baking" },
      { id: 3, name: "milk", amount: 1, unit: "cup", original: "1 cup whole or almond milk", aisle: "Dairy" },
      { id: 4, name: "sugar", amount: 1, unit: "tsp", original: "1 tsp sugar", aisle: "Pantry" },
      { id: 5, name: "strawberries", amount: 2, unit: "", original: "Fresh strawberries for garnish", aisle: "Produce" },
      { id: 6, name: "ice", amount: 0.5, unit: "cup", original: "Ice cubes", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk heavy cream, strawberry powder, and sugar until thick and fluffy.", ingredients: [], equipment: [] },
      { number: 2, step: "Fill a glass with ice and pour in the milk.", ingredients: [], equipment: [] },
      { number: 3, step: "Spoon the whipped strawberry cream over the top of the milk.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with a fresh strawberry and enjoy the layers.", ingredients: [] }
    ]}]
  },
  {
    id: 6024,
    title: "Iced Lavender Honey Latte",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572286258217-4e559c74539c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 180,
    protein: "4g",
    fat: "6g",
    carbs: "22g",
    dishTypes: ["drink"],
    summary: "Floral, soothing, and sophisticated latte with hints of French lavender.",
    extendedIngredients: [
      { id: 1, name: "espresso", amount: 2, unit: "shots", original: "2 shots of strong espresso", aisle: "Coffee" },
      { id: 2, name: "honey", amount: 1, unit: "tbsp", original: "1 tbsp floral honey", aisle: "Pantry" },
      { id: 3, name: "culinary lavender", amount: 0.5, unit: "tsp", original: "1/2 tsp dried culinary lavender", aisle: "Spices" },
      { id: 4, name: "milk", amount: 1, unit: "cup", original: "1 cup oat or whole milk", aisle: "Dairy" },
      { id: 5, name: "ice", amount: 1, unit: "cup", original: "Ice", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Muddle lavender into the honey or steep in the hot espresso for 2 minutes; strain.", ingredients: [], equipment: [] },
      { number: 2, step: "Fill a tall glass with ice.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour in your milk choice.", ingredients: [], equipment: [] },
      { number: 4, step: "Pour the lavender-infused honey espresso over the milk; stir gently.", ingredients: [] }
    ]}]
  },

  // --- FITNESS (8 RECIPES) ---
  {
    id: 7001,
    title: "Lean Turkey Power Bowl",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 380,
    protein: "35g",
    fat: "10g",
    carbs: "38g",
    dishTypes: ["main dish", "fitness"],
    summary: "High-protein, low-fat meal with lean turkey, brown rice, and steamed greens.",
    extendedIngredients: [
      { id: 1, name: "ground turkey", amount: 300, unit: "g", original: "300g lean ground turkey", aisle: "Meat" },
      { id: 2, name: "brown rice", amount: 1, unit: "cup", original: "1 cup cooked brown rice", aisle: "Grains" },
      { id: 3, name: "broccoli", amount: 2, unit: "cups", original: "2 cups steamed broccoli", aisle: "Produce" },
      { id: 4, name: "bell pepper", amount: 1, unit: "", original: "1 red pepper, diced", aisle: "Produce" },
      { id: 5, name: "soy sauce", amount: 1, unit: "tbsp", original: "1 tbsp soy sauce", aisle: "Pantry" },
      { id: 6, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves minced garlic", aisle: "Produce" },
      { id: 7, name: "onion", amount: 0.5, unit: "", original: "1/2 onion, diced", aisle: "Produce" },
      { id: 8, name: "sesame seeds", amount: 1, unit: "tsp", original: "1 tsp sesame seeds", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté turkey with garlic and onion until browned.", ingredients: [], equipment: [] },
      { number: 2, step: "Add bell peppers and cook for 3 minutes.", ingredients: [], equipment: [] },
      { number: 3, step: "Steam broccoli until bright green and tender.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve turkey over brown rice with broccoli and a dash of soy sauce.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7002,
    title: "Post-Workout Berry Protein Shake",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1556810100-29b2955818d7?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 250,
    protein: "28g",
    fat: "4g",
    carbs: "25g",
    dishTypes: ["drink", "fitness"],
    summary: "Optimal recovery blend with whey protein, mixed berries, and BCAAs.",
    extendedIngredients: [
      { id: 1, name: "whey protein", amount: 1, unit: "scoop", original: "1 scoop vanilla whey", aisle: "Fitness" },
      { id: 2, name: "frozen berries", amount: 1, unit: "cup", original: "1 cup mixed berries", aisle: "Produce" },
      { id: 3, name: "almond milk", amount: 1, unit: "cup", original: "1 cup almond milk", aisle: "Dairy" },
      { id: 4, name: "banana", amount: 0.5, unit: "", original: "1/2 frozen banana", aisle: "Produce" },
      { id: 5, name: "spinach", amount: 1, unit: "handful", original: "Handful baby spinach", aisle: "Produce" },
      { id: 6, name: "chia seeds", amount: 1, unit: "tbsp", original: "1 tbsp chia seeds", aisle: "Pantry" },
      { id: 7, name: "oats", amount: 2, unit: "tbsp", original: "2 tbsp instant oats", aisle: "Grains" },
      { id: 8, name: "ice", amount: 1, unit: "cup", original: "Ice cubes", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place all ingredients in a blender.", ingredients: [], equipment: [] },
      { number: 2, step: "Blend on high until silky smooth.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with a few fresh berries if desired.", ingredients: [], equipment: [] },
      { number: 4, step: "Drink within 30 minutes of a workout.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7003,
    title: "Egg White & Spinach Omelette",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 180,
    protein: "24g",
    fat: "6g",
    carbs: "5g",
    dishTypes: ["breakfast", "fitness"],
    summary: "Pure protein breakfast with zero cholesterol and high fiber.",
    extendedIngredients: [
      { id: 1, name: "egg whites", amount: 6, unit: "", original: "6 liquid egg whites", aisle: "Dairy" },
      { id: 2, name: "spinach", amount: 1, unit: "cup", original: "1 cup baby spinach", aisle: "Produce" },
      { id: 3, name: "feta", amount: 1, unit: "tbsp", original: "1 tbsp low-fat feta", aisle: "Dairy" },
      { id: 4, name: "tomato", amount: 0.5, unit: "", original: "1/2 tomato, diced", aisle: "Produce" },
      { id: 5, name: "black pepper", amount: 1, unit: "pinch", original: "Pinch of pepper", aisle: "Spices" },
      { id: 6, name: "onions", amount: 2, unit: "tbsp", original: "2 tbsp spring onions", aisle: "Produce" },
      { id: 7, name: "mushrooms", amount: 0.25, unit: "cup", original: "1/4 cup mushrooms", aisle: "Produce" },
      { id: 8, name: "salt", amount: 1, unit: "pinch", original: "Pinch of salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté mushrooms and spinach in a non-stick pan.", ingredients: [], equipment: [] },
      { number: 2, step: "Whisk egg whites with salt and pepper.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour whites over veggies; cook on low heat until set.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with feta and fold; serve hot.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7004,
    title: "Low-Carb Zucchini Noodles (Zoodles)",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 220,
    protein: "14g",
    fat: "14g",
    carbs: "12g",
    dishTypes: ["main dish", "fitness"],
    summary: "Pasta alternative with spiralized zucchini and lean turkey bolognese.",
    extendedIngredients: [
      { id: 1, name: "zucchini", amount: 2, unit: "", original: "2 medium zucchini, spiralized", aisle: "Produce" },
      { id: 2, name: "ground turkey", amount: 200, unit: "g", original: "200g lean turkey", aisle: "Meat" },
      { id: 3, name: "marinara", amount: 1, unit: "cup", original: "1 cup keto marinara", aisle: "Pantry" },
      { id: 4, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic", aisle: "Produce" },
      { id: 5, name: "basil", amount: 4, unit: "leaves", original: "Fresh basil", aisle: "Produce" },
      { id: 6, name: "parmesan", amount: 1, unit: "tbsp", original: "1 tbsp parmesan", aisle: "Dairy" },
      { id: 7, name: "olive oil", amount: 1, unit: "tsp", original: "1 tsp oil", aisle: "Pantry" },
      { id: 8, name: "salt", amount: 1, unit: "pinch", original: "Pinch of salt", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté turkey and garlic until fully cooked.", ingredients: [], equipment: [] },
      { number: 2, step: "Add marinara and simmer for 5 minutes.", ingredients: [], equipment: [] },
      { number: 3, step: "Lightly sauté zoodles for 2 minutes (do not overcook).", ingredients: [], equipment: [] },
      { number: 4, step: "Top zoodles with meat sauce and parmesan.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7005,
    title: "Quinoa and Black Bean Salad",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 340,
    protein: "15g",
    fat: "8g",
    carbs: "52g",
    dishTypes: ["lunch", "fitness"],
    summary: "Complete plant-based protein salad with complex carbs and fiber.",
    extendedIngredients: [
      { id: 1, name: "quinoa", amount: 1, unit: "cup", original: "1 cup cooked quinoa", aisle: "Grains" },
      { id: 2, name: "black beans", amount: 1, unit: "can", original: "1 can black beans, rinsed", aisle: "Produce" },
      { id: 3, name: "corn", amount: 0.5, unit: "cup", original: "1/2 cup sweet corn", aisle: "Produce" },
      { id: 4, name: "cilantro", amount: 0.25, unit: "cup", original: "Fresh cilantro", aisle: "Produce" },
      { id: 5, name: "lime", amount: 1, unit: "", original: "1 lime, juiced", aisle: "Produce" },
      { id: 6, name: "avocado", amount: 0.5, unit: "", original: "1/2 avocado", aisle: "Produce" },
      { id: 7, name: "cumin", amount: 1, unit: "tsp", original: "1 tsp cumin", aisle: "Spices" },
      { id: 8, name: "pepper", amount: 1, unit: "pinch", original: "Black pepper", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix quinoa, beans, corn, and cilantro in a bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Add cumin, lime juice, and pepper.", ingredients: [], equipment: [] },
      { number: 3, step: "Gently fold in cubed avocado.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve chilled or at room temperature.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7006,
    title: "Grilled Tuna Steak & Greens",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1540185373-b39f1df93a11?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 1,
    calories: 320,
    protein: "42g",
    fat: "14g",
    carbs: "5g",
    dishTypes: ["dinner", "fitness"],
    summary: "Magnesium-rich tuna steak with iron-packed sautéed spinach.",
    extendedIngredients: [
      { id: 1, name: "tuna steak", amount: 200, unit: "g", original: "200g ahi tuna steak", aisle: "Meat" },
      { id: 2, name: "spinach", amount: 3, unit: "cups", original: "3 cups fresh spinach", aisle: "Produce" },
      { id: 3, name: "sesame oil", amount: 1, unit: "tsp", original: "1 tsp sesame oil", aisle: "Pantry" },
      { id: 4, name: "sesame seeds", amount: 1, unit: "tsp", original: "1 tsp seeds", aisle: "Pantry" },
      { id: 5, name: "lemon", amount: 1, unit: "slice", original: "Lemon slice", aisle: "Produce" },
      { id: 6, name: "soy sauce", amount: 1, unit: "tsp", original: "1 tsp light soy sauce", aisle: "Pantry" },
      { id: 7, name: "ginger", amount: 1, unit: "tsp", original: "1 tsp grated ginger", aisle: "Produce" },
      { id: 8, name: "garlic", amount: 1, unit: "clove", original: "1 clove garlic", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sear tuna in a hot pan for 2 mins per side (medium-rare).", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté garlic and ginger in sesame oil; add spinach.", ingredients: [], equipment: [] },
      { number: 3, step: "Flash-cook spinach until wilted.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve tuna over spinach with sesame seeds.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7007,
    title: "Sweet Potato and Lentil Curry",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1540420753444-42ea95267191?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    servings: 4,
    calories: 310,
    protein: "12g",
    fat: "6g",
    carbs: "55g",
    dishTypes: ["dinner", "fitness"],
    summary: "Anti-inflammatory plant power: complex carbs and high fiber.",
    extendedIngredients: [
      { id: 1, name: "red lentils", amount: 1, unit: "cup", original: "1 cup dried red lentils", aisle: "Grains" },
      { id: 2, name: "sweet potato", amount: 2, unit: "", original: "2 large sweet potatoes, diced", aisle: "Produce" },
      { id: 3, name: "turmeric", amount: 1, unit: "tsp", original: "1 tsp ground turmeric", aisle: "Spices" },
      { id: 4, name: "coconut milk", amount: 400, unit: "ml", original: "1 can light coconut milk", aisle: "Dairy" },
      { id: 5, name: "spinach", amount: 2, unit: "cups", original: "2 cups spinach", aisle: "Produce" },
      { id: 6, name: "ginger", amount: 1, unit: "tbsp", original: "1 tbsp minced ginger", aisle: "Produce" },
      { id: 7, name: "garlic", amount: 3, unit: "cloves", original: "3 cloves garlic", aisle: "Produce" },
      { id: 8, name: "curry powder", amount: 2, unit: "tbsp", original: "2 tbsp mild curry powder", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté ginger, garlic, and curry powder until fragrant.", ingredients: [], equipment: [] },
      { number: 2, step: "Add lentils, sweet potato, and coconut milk.", ingredients: [], equipment: [] },
      { number: 3, step: "Simmer for 20 minutes until potato is soft.", ingredients: [], equipment: [] },
      { number: 4, step: "Stir in spinach until wilted and serve.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7008,
    title: "Healthy Greek Chicken Skewers",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1598511726623-d306509f7a93?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 350,
    protein: "38g",
    fat: "16g",
    carbs: "8g",
    dishTypes: ["main dish", "fitness"],
    summary: "Lean chicken breast marinated in lemon and oregano for a clean protein hit.",
    extendedIngredients: [
      { id: 1, name: "chicken breast", amount: 350, unit: "g", original: "350g cubed chicken breast", aisle: "Meat" },
      { id: 2, name: "lemon", amount: 1, unit: "", original: "1 lemon, juiced", aisle: "Produce" },
      { id: 3, name: "oregano", amount: 1, unit: "tsp", original: "1 tsp dried oregano", aisle: "Spices" },
      { id: 4, name: "zucchini", amount: 1, unit: "", original: "1 zucchini, sliced", aisle: "Produce" },
      { id: 5, name: "cherry tomatoes", amount: 10, unit: "", original: "10 cherry tomatoes", aisle: "Produce" },
      { id: 6, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 7, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic, minced", aisle: "Produce" },
      { id: 8, name: "tzatziki", amount: 2, unit: "tbsp", original: "2 tbsp low-fat tzatziki (optional)", aisle: "Dairy" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Marinate chicken with lemon, oil, and spices for 15 mins.", ingredients: [], equipment: [] },
      { number: 2, step: "Thread chicken and vegetables onto skewers.", ingredients: [], equipment: [] },
      { number: 3, step: "Grill for 8-10 minutes, turning occasionally until cooked through.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve as-is or with a dollop of tzatziki.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7009,
    title: "Mediterranean Baked Cod with Lemon",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 220,
    protein: "32g",
    fat: "6g",
    carbs: "8g",
    dishTypes: ["main dish", "fitness"],
    summary: "Ultra-lean white fish flavored with fresh Mediterranean herbs and citrus.",
    extendedIngredients: [
      { id: 1, name: "cod fillets", amount: 300, unit: "g", original: "300g fresh cod fillets", aisle: "Meat" },
      { id: 2, name: "lemon", amount: 1, unit: "", original: "1 lemon, sliced thin", aisle: "Produce" },
      { id: 3, name: "parsley", amount: 0.25, unit: "cup", original: "Fresh parsley, chopped", aisle: "Produce" },
      { id: 4, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic, minced", aisle: "Produce" },
      { id: 5, name: "cherry tomatoes", amount: 1, unit: "cup", original: "1 cup halved cherry tomatoes", aisle: "Produce" },
      { id: 6, name: "capers", amount: 1, unit: "tbsp", original: "1 tbsp brined capers", aisle: "Pantry" },
      { id: 7, name: "olive oil", amount: 1, unit: "tsp", original: "1 tsp extra virgin olive oil", aisle: "Pantry" },
      { id: 8, name: "paprika", amount: 1, unit: "pinch", original: "Smoked paprika", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place cod fillets in a baking dish lined with parchment paper.", ingredients: [], equipment: [] },
      { number: 2, step: "Top with lemon slices, garlic, tomatoes, and capers.", ingredients: [], equipment: [] },
      { number: 3, step: "Bake at 400°F (200°C) for 12-15 minutes until fish flakes easily.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with fresh parsley and a squeeze of warm lemon.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7010,
    title: "High-Protein Lentil & Halloumi Bowl",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1540420753444-42ea95267191?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 410,
    protein: "28g",
    fat: "22g",
    carbs: "30g",
    dishTypes: ["lunch", "fitness"],
    summary: "Satiating combo of earthy lentils and salty grilled halloumi cheese.",
    extendedIngredients: [
      { id: 1, name: "cooked brown lentils", amount: 2, unit: "cups", original: "2 cups cooked brown lentils", aisle: "Pantry" },
      { id: 2, name: "halloumi cheese", amount: 100, unit: "g", original: "100g light halloumi, sliced", aisle: "Dairy" },
      { id: 3, name: "cucumber", amount: 1, unit: "small", original: "1 small cucumber, diced", aisle: "Produce" },
      { id: 4, name: "radish", amount: 4, unit: "", original: "4 radishes, thinly sliced", aisle: "Produce" },
      { id: 5, name: "mint", amount: 1, unit: "handful", original: "1 handful fresh mint", aisle: "Produce" },
      { id: 6, name: "lemon", amount: 0.5, unit: "", original: "1/2 lemon, juiced", aisle: "Produce" },
      { id: 7, name: "pomegranate seeds", amount: 2, unit: "tbsp", original: "2 tbsp pomegranate seeds", aisle: "Produce" },
      { id: 8, name: "sumac", amount: 1, unit: "tsp", original: "1 tsp sumac", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Grill halloumi slices in a dry pan until golden on both sides.", ingredients: [], equipment: [] },
      { number: 2, step: "Toss lentils with cucumber, radish, and mint.", ingredients: [], equipment: [] },
      { number: 3, step: "Drizzle with lemon juice and sprinkle with sumac.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with grilled halloumi and pomegranate seeds.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7011,
    title: "Lean Turkey and Spinach Meatballs",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 4,
    calories: 280,
    protein: "34g",
    fat: "10g",
    carbs: "12g",
    dishTypes: ["main dish", "fitness"],
    summary: "Iron-rich meatballs with hidden spinach for a moist, high-protein meal.",
    extendedIngredients: [
      { id: 1, name: "ground turkey", amount: 500, unit: "g", original: "500g extra lean ground turkey", aisle: "Meat" },
      { id: 2, name: "spinach", amount: 2, unit: "cups", original: "2 cups frozen spinach, thawed and squeezed dry", aisle: "Produce" },
      { id: 3, name: "oats", amount: 0.25, unit: "cup", original: "1/4 cup rolled oats", aisle: "Grains" },
      { id: 4, name: "egg", amount: 1, unit: "", original: "1 egg, beaten", aisle: "Dairy" },
      { id: 5, name: "garlic powder", amount: 1, unit: "tsp", original: "1 tsp garlic powder", aisle: "Spices" },
      { id: 6, name: "onion powder", amount: 1, unit: "tsp", original: "1 tsp onion powder", aisle: "Spices" },
      { id: 7, name: "marinara", amount: 1, unit: "cup", original: "1 cup low-sugar marinara", aisle: "Pantry" },
      { id: 8, name: "basil", amount: 4, unit: "leaves", original: "Fresh basil for garnish", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Mix turkey, chopped spinach, oats, egg, and spices in a bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Form into 16 small meatballs.", ingredients: [], equipment: [] },
      { number: 3, step: "Bake at 375°F for 18 minutes until cooked through.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve with warm marinara sauce over greens or zoodles.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7012,
    title: "Protein Berry Breakfast Bowl",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 5,
    servings: 1,
    calories: 320,
    protein: "26g",
    fat: "8g",
    carbs: "35g",
    dishTypes: ["breakfast", "fitness"],
    summary: "Refreshing yogurt-based bowl packed with antioxidants and fiber.",
    extendedIngredients: [
      { id: 1, name: "Greek yogurt", amount: 1, unit: "cup", original: "1 cup non-fat Greek yogurt", aisle: "Dairy" },
      { id: 2, name: "blueberries", amount: 0.5, unit: "cup", original: "1/2 cup fresh blueberries", aisle: "Produce" },
      { id: 3, name: "almond butter", amount: 1, unit: "tbsp", original: "1 tbsp almond butter", aisle: "Pantry" },
      { id: 4, name: "hemp seeds", amount: 1, unit: "tbsp", original: "1 tbsp hemp hearts", aisle: "Pantry" },
      { id: 5, name: "granola", amount: 2, unit: "tbsp", original: "2 tbsp low-sugar granola", aisle: "Bakery" },
      { id: 6, name: "honey", amount: 1, unit: "tsp", original: "1 tsp raw honey", aisle: "Pantry" },
      { id: 7, name: "cinnamon", amount: 1, unit: "pinch", original: "Cinnamon sprinkle", aisle: "Spices" },
      { id: 8, name: "mint", amount: 1, unit: "sprig", original: "1 small sprig of mint", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Place yogurt in a shallow bowl.", ingredients: [], equipment: [] },
      { number: 2, step: "Arrange blueberries and almond butter in sections.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with hemp seeds, granola, and a dash of honey.", ingredients: [], equipment: [] },
      { number: 4, step: "Finish with cinnamon and fresh mint.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7013,
    title: "Teriyaki Tofu Fitness Stir-Fry",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 290,
    protein: "22g",
    fat: "14g",
    carbs: "18g",
    dishTypes: ["main dish", "fitness"],
    summary: "Crispy tofu and vibrant vegetables in a light, salt-reduced ginger soy sauce.",
    extendedIngredients: [
      { id: 1, name: "firm tofu", amount: 400, unit: "g", original: "400g firm tofu, pressed and cubed", aisle: "Produce" },
      { id: 2, name: "broccoli", amount: 2, unit: "cups", original: "2 cups broccoli florets", aisle: "Produce" },
      { id: 3, name: "snap peas", amount: 1, unit: "cup", original: "1 cup sugar snap peas", aisle: "Produce" },
      { id: 4, name: "ginger", amount: 1, unit: "tbsp", original: "1 tbsp fresh ginger, minced", aisle: "Produce" },
      { id: 5, name: "low-sodium tamari", amount: 2, unit: "tbsp", original: "2 tbsp low-sodium soy sauce", aisle: "Pantry" },
      { id: 6, name: "cashews", amount: 1, unit: "tbsp", original: "1 tbsp crushed raw cashews", aisle: "Pantry" },
      { id: 7, name: "green onions", amount: 2, unit: "", original: "2 green onions, sliced", aisle: "Produce" },
      { id: 8, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Air-fry or sear tofu cubes until golden and crispy.", ingredients: [], equipment: [] },
      { number: 2, step: "Stir-fry ginger, garlic, broccoli, and snap peas for 4 minutes.", ingredients: [], equipment: [] },
      { number: 3, step: "Add tofu back to the pan with soy sauce and toss well.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with green onions and crushed cashews.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7014,
    title: "Mexican Shredded Chicken Salad",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 340,
    protein: "38g",
    fat: "14g",
    carbs: "12g",
    dishTypes: ["lunch", "fitness"],
    summary: "Spicy, zingy chicken salad with high volume and low calorie density.",
    extendedIngredients: [
      { id: 1, name: "shredded chicken", amount: 300, unit: "g", original: "300g cooked shredded chicken breast", aisle: "Meat" },
      { id: 2, name: "mixed greens", amount: 4, unit: "cups", original: "4 cups mixed salad greens", aisle: "Produce" },
      { id: 3, name: "jalapeno", amount: 1, unit: "tsp", original: "Minced jalapeno", aisle: "Produce" },
      { id: 4, name: "cilantro", amount: 0.5, unit: "cup", original: "Fresh cilantro, chopped", aisle: "Produce" },
      { id: 5, name: "lime", amount: 1, unit: "", original: "1 lime, juiced", aisle: "Produce" },
      { id: 6, name: "avocado", amount: 0.25, unit: "", original: "1/4 avocado, sliced", aisle: "Produce" },
      { id: 7, name: "salsa", amount: 2, unit: "tbsp", original: "2 tbsp fresh pico de gallo", aisle: "Pantry" },
      { id: 8, name: "cumin", amount: 1, unit: "pinch", original: "Ground cumin", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toss chicken with cumin, lime juice, and jalapeno.", ingredients: [], equipment: [] },
      { number: 2, step: "Place greens in a large bowl.", ingredients: [], equipment: [] },
      { number: 3, step: "Top with chicken, avocado, and salsa.", ingredients: [], equipment: [] },
      { number: 4, step: "Mix in fresh cilantro and serve immediately.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7015,
    title: "Quick Protein Oat Pancakes",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 2,
    calories: 290,
    protein: "24g",
    fat: "6g",
    carbs: "35g",
    dishTypes: ["breakfast", "fitness"],
    summary: "Guilt-free pancakes using simple, whole-food ingredients for a morning boost.",
    extendedIngredients: [
      { id: 1, name: "oats", amount: 1, unit: "cup", original: "1 cup instant oats", aisle: "Grains" },
      { id: 2, name: "banana", amount: 1, unit: "", original: "1 ripe banana", aisle: "Produce" },
      { id: 3, name: "egg whites", amount: 2, unit: "large", original: "2 egg whites", aisle: "Dairy" },
      { id: 4, name: "protein powder", amount: 1, unit: "scoop", original: "1/2 scoop vanilla protein powder", aisle: "Fitness" },
      { id: 5, name: "baking powder", amount: 0.5, unit: "tsp", original: "1/2 tsp baking powder", aisle: "Baking" },
      { id: 6, name: "cinnamon", amount: 1, unit: "tsp", original: "1 tsp cinnamon", aisle: "Spices" },
      { id: 7, name: "blueberries", amount: 0.25, unit: "cup", original: "1/4 cup fresh berries", aisle: "Produce" },
      { id: 8, name: "honey", amount: 1, unit: "tsp", original: "1 tsp honey for drizzling", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Blend oats, banana, egg whites, protein powder, and baking powder until smooth.", ingredients: [], equipment: [] },
      { number: 2, step: "Heat a non-stick skillet and pour small rounds of batter.", ingredients: [], equipment: [] },
      { number: 3, step: "Cook until bubbles form, then flip and cook for 1 more minute.", ingredients: [], equipment: [] },
      { number: 4, step: "Top with berries and a light honey drizzle.", ingredients: [], equipment: [] }
    ]}]
  },
  {
    id: 7016,
    title: "Zesty Lemon Thyme Tilapia",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    servings: 2,
    calories: 280,
    protein: "45g",
    fat: "8g",
    carbs: "2g",
    dishTypes: ["main dish", "fitness"],
    summary: "A light, high-protein white fish dish with vibrant citrus and fresh herbs.",
    extendedIngredients: [
      { id: 1, name: "tilapia fillets", amount: 2, unit: "", original: "2 tilapia fillets", aisle: "Meat" },
      { id: 2, name: "lemon", amount: 1, unit: "", original: "1 lemon, sliced", aisle: "Produce" },
      { id: 3, name: "olive oil", amount: 1, unit: "tbsp", original: "1 tbsp olive oil", aisle: "Pantry" },
      { id: 4, name: "fresh thyme", amount: 2, unit: "sprigs", original: "2 sprigs fresh thyme", aisle: "Produce" },
      { id: 5, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic, minced", aisle: "Produce" },
      { id: 6, name: "black pepper", amount: 0.5, unit: "tsp", original: "1/2 tsp black pepper", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Season tilapia with garlic, pepper, and fresh thyme.", ingredients: [], equipment: [] },
      { number: 2, step: "Place on a baking sheet and top with lemon slices.", ingredients: [], equipment: [] },
      { number: 3, step: "Bake at 400°F (200°C) for 12-15 minutes until fish is flaky.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve with a side of steamed asparagus.", ingredients: [] }
    ]}]
  },
  {
    id: 7017,
    title: "Lentil and Spinach Superfood Soup",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 35,
    servings: 4,
    calories: 320,
    protein: "18g",
    fat: "6g",
    carbs: "45g",
    dishTypes: ["lunch", "fitness"],
    summary: "A warming and filling plant-based soup high in fiber and iron.",
    extendedIngredients: [
      { id: 1, name: "green lentils", amount: 1, unit: "cup", original: "1 cup dried green lentils", aisle: "Grains" },
      { id: 2, name: "vegetable broth", amount: 4, unit: "cups", original: "4 cups low-sodium veggie broth", aisle: "Pantry" },
      { id: 3, name: "baby spinach", amount: 4, unit: "cups", original: "4 cups fresh baby spinach", aisle: "Produce" },
      { id: 4, name: "carrots", amount: 2, unit: "", original: "2 carrots, diced", aisle: "Produce" },
      { id: 5, name: "celery", amount: 2, unit: "stalks", original: "2 stalks celery, sliced", aisle: "Produce" },
      { id: 6, name: "onion", amount: 1, unit: "", original: "1 small onion, diced", aisle: "Produce" },
      { id: 7, name: "turmeric", amount: 0.5, unit: "tsp", original: "1/2 tsp turmeric", aisle: "Spices" },
      { id: 8, name: "cumin", amount: 0.5, unit: "tsp", original: "1/2 tsp cumin", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté onion, carrots, and celery in a pot with a touch of oil.", ingredients: [], equipment: [] },
      { number: 2, step: "Add lentils, broth, and spices; bring to a boil then simmer for 25 mins.", ingredients: [], equipment: [] },
      { number: 3, step: "Stir in spinach until wilted.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve hot, optionally with a bundle of herbs.", ingredients: [] }
    ]}]
  },
  {
    id: 7018,
    title: "Mediterranean Egg White Omelet",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 10,
    servings: 1,
    calories: 220,
    protein: "28g",
    fat: "8g",
    carbs: "6g",
    dishTypes: ["breakfast", "fitness"],
    summary: "High-protein, low-calorie breakfast choice with fresh Mediterranean herbs and veggies.",
    extendedIngredients: [
      { id: 1, name: "egg whites", amount: 4, unit: "large", original: "4 large egg whites", aisle: "Dairy" },
      { id: 2, name: "cherry tomatoes", amount: 0.5, unit: "cup", original: "1/2 cup cherry tomatoes, halved", aisle: "Produce" },
      { id: 3, name: "spinach", amount: 1, unit: "cup", original: "1 cup baby spinach", aisle: "Produce" },
      { id: 4, name: "feta cheese", amount: 1, unit: "tbsp", original: "1 tbsp low-fat feta cheese", aisle: "Dairy" },
      { id: 5, name: "oregano", amount: 0.5, unit: "tsp", original: "1/2 tsp dried oregano", aisle: "Spices" },
      { id: 6, name: "black pepper", amount: 1, unit: "pinch", original: "Black pepper to taste", aisle: "Spices" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Whisk egg whites with oregano and pepper.", ingredients: [], equipment: [] },
      { number: 2, step: "Sauté spinach and tomatoes until slightly wilted.", ingredients: [], equipment: [] },
      { number: 3, step: "Pour in egg whites and cook until set.", ingredients: [], equipment: [] },
      { number: 4, step: "Sprinkle with feta, fold, and serve immediately.", ingredients: [] }
    ]}]
  },
  {
    id: 7019,
    title: "Buffalo Cauliflower Bites",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 25,
    servings: 2,
    calories: 180,
    protein: "6g",
    fat: "4g",
    carbs: "30g",
    dishTypes: ["snack", "fitness"],
    summary: "A spicy, snackable low-carb alternative to traditional buffalo wings.",
    extendedIngredients: [
      { id: 1, name: "cauliflower", amount: 1, unit: "head", original: "1 head of cauliflower, cut into florets", aisle: "Produce" },
      { id: 2, name: "buffalo sauce", amount: 0.25, unit: "cup", original: "1/4 cup mild buffalo sauce", aisle: "Pantry" },
      { id: 3, name: "garlic powder", amount: 1, unit: "tsp", original: "1 tsp garlic powder", aisle: "Spices" },
      { id: 4, name: "onion powder", amount: 1, unit: "tsp", original: "1 tsp onion powder", aisle: "Spices" },
      { id: 5, name: "cornstarch", amount: 1, unit: "tbsp", original: "1 tbsp cornstarch", aisle: "Baking" },
      { id: 6, name: "olive oil spray", amount: 1, unit: "", original: "Cooking spray", aisle: "Pantry" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Toss cauliflower with spices and cornstarch.", ingredients: [], equipment: [] },
      { number: 2, step: "Air fry or bake at 400°F for 15-20 minutes.", ingredients: [], equipment: [] },
      { number: 3, step: "Toss hot cauliflower with buffalo sauce.", ingredients: [], equipment: [] },
      { number: 4, step: "Serve with light celery sticks.", ingredients: [] }
    ]}]
  },
  {
    id: 7020,
    title: "Chipotle Lime Shrimp Tacos",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    servings: 2,
    calories: 320,
    protein: "32g",
    fat: "10g",
    carbs: "25g",
    dishTypes: ["main dish", "fitness"],
    summary: "Zesty, high-protein tacos featuring succulent shrimp and a fresh slaw.",
    extendedIngredients: [
      { id: 1, name: "shrimp", amount: 300, unit: "g", original: "300g large shrimp, peeled", aisle: "Meat" },
      { id: 2, name: "chipotle powder", amount: 1, unit: "tsp", original: "1 tsp chipotle powder", aisle: "Spices" },
      { id: 3, name: "lime", amount: 2, unit: "", original: "2 limes, juiced", aisle: "Produce" },
      { id: 4, name: "corn tortillas", amount: 4, unit: "small", original: "4 small corn tortillas", aisle: "Pantry" },
      { id: 5, name: "shredded cabbage", amount: 1, unit: "cup", original: "1 cup purple cabbage slaw", aisle: "Produce" },
      { id: 6, name: "cilantro", amount: 0.25, unit: "cup", original: "Fresh cilantro", aisle: "Produce" },
      { id: 7, name: "avocado", amount: 0.25, unit: "", original: "1/4 avocado, sliced", aisle: "Produce" }
    ],
    analyzedInstructions: [{ name: "", steps: [
      { number: 1, step: "Sauté shrimp with chipotle powder and lime juice.", ingredients: [], equipment: [] },
      { number: 2, step: "Warm the corn tortillas on a dry skillet.", ingredients: [], equipment: [] },
      { number: 3, step: "Assemble tacos with slaw, shrimp, and avocado.", ingredients: [], equipment: [] },
      { number: 4, step: "Garnish with fresh cilantro and lime.", ingredients: [] }
    ]}]
  }
];

