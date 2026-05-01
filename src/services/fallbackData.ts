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
  }
];

