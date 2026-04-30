import { Recipe } from "../types";

export const FALLBACK_RECIPES: Recipe[] = [
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    readyInMinutes: 45,
    servings: 2,
    summary: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for.",
    calories: 584,
    protein: "19g",
    fat: "20g",
    carbs: "84g",
    category: "main-dishes",
    dishTypes: ["main course"],
    extendedIngredients: [
      { id: 1001, name: "butter", amount: 1, unit: "tbsp", original: "1 tbsp butter", aisle: "Milk, Eggs, Other Dairy" },
      { id: 11135, name: "cauliflower florets", amount: 2, unit: "cups", original: "2 cups cauliflower florets", aisle: "Produce" },
      { id: 11215, name: "garlic", amount: 1, unit: "clove", original: "1 clove garlic", aisle: "Produce" }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Cook pasta in a large pot of boiling salted water until al dente.", ingredients: [], equipment: [] },
          { number: 2, step: "Meanwhile, sauté cauliflower and garlic in butter until golden.", ingredients: [], equipment: [] }
        ]
      }
    ]
  },
  {
    id: 715538,
    title: "What to Middle Eastern Shakshuka",
    image: "https://spoonacular.com/recipeImages/715538-556x370.jpg",
    readyInMinutes: 30,
    servings: 2,
    summary: "Middle Eastern Shakshuka is a breakfast recipe that serves 2.",
    calories: 320,
    protein: "15g",
    fat: "18g",
    carbs: "25g",
    category: "breakfast",
    dishTypes: ["breakfast"],
    extendedIngredients: [
      { id: 1123, name: "eggs", amount: 4, unit: "", original: "4 eggs", aisle: "Milk, Eggs, Other Dairy" },
      { id: 11529, name: "tomatoes", amount: 3, unit: "", original: "3 tomatoes", aisle: "Produce" }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Heat oil in a pan and add chopped tomatoes.", ingredients: [], equipment: [] },
          { number: 2, step: "Crack eggs over the tomato sauce and cook until set.", ingredients: [], equipment: [] }
        ]
      }
    ]
  }
];
