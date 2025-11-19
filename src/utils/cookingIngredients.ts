export interface CookingIngredient {
  id: string;
  displayName: string;
  gramsPerCup: number;
  gramsPerTablespoon: number;
  density_g_per_ml: number;
  source?: string;
}

const MILLILITERS_PER_CUP = 236.588;

const createIngredient = (
  id: string,
  displayName: string,
  gramsPerCup: number,
  gramsPerTablespoon?: number,
  source?: string
): CookingIngredient => {
  const tbspValue = gramsPerTablespoon ?? gramsPerCup / 16;
  return {
    id,
    displayName,
    gramsPerCup,
    gramsPerTablespoon: tbspValue,
    density_g_per_ml: gramsPerCup / MILLILITERS_PER_CUP,
    source,
  };
};

// Ingredient weights pulled from the King Arthur Baking Ingredient Weight Chart
// https://www.kingarthurbaking.com/learn/ingredient-weight-chart
export const cookingIngredients: CookingIngredient[] = [
  createIngredient('all_purpose_flour', 'All-Purpose Flour', 120, undefined, 'King Arthur Baking'),
  createIngredient('bread_flour', 'Bread Flour', 120, undefined, 'King Arthur Baking'),
  createIngredient('whole_wheat_flour', 'Whole Wheat Flour', 113, undefined, 'King Arthur Baking'),
  createIngredient('cake_flour', 'Cake Flour', 113, undefined, 'King Arthur Baking'),
  createIngredient('pastry_flour', 'Pastry Flour', 96, undefined, 'King Arthur Baking'),
  createIngredient('almond_flour', 'Almond Flour', 96, undefined, 'King Arthur Baking'),
  createIngredient('granulated_sugar', 'Granulated Sugar', 198, undefined, 'King Arthur Baking'),
  createIngredient('brown_sugar', 'Brown Sugar (Packed)', 213, undefined, 'King Arthur Baking'),
  createIngredient('powdered_sugar', 'Confectioners’ Sugar', 113, undefined, 'King Arthur Baking'),
  createIngredient('cocoa_powder', 'Cocoa Powder (Dutch)', 84, undefined, 'King Arthur Baking'),
  createIngredient('rolled_oats', 'Old-Fashioned Rolled Oats', 90, undefined, 'King Arthur Baking'),
  createIngredient('butter', 'Butter', 227, 14.2, 'King Arthur Baking'),
  createIngredient('vegetable_oil', 'Vegetable Oil', 198, undefined, 'King Arthur Baking'),
  createIngredient('olive_oil', 'Olive Oil', 198, undefined, 'King Arthur Baking'),
  createIngredient('water', 'Water', 227, undefined, 'King Arthur Baking'),
  createIngredient('milk', 'Whole Milk', 227, undefined, 'King Arthur Baking'),
  createIngredient('heavy_cream', 'Heavy Cream', 227, undefined, 'King Arthur Baking'),
  createIngredient('honey', 'Honey', 340, undefined, 'King Arthur Baking'),
  createIngredient('maple_syrup', 'Maple Syrup', 312, undefined, 'King Arthur Baking'),
  createIngredient('yogurt', 'Plain Yogurt', 227, undefined, 'King Arthur Baking'),
];

export const DEFAULT_COOKING_INGREDIENT_ID = cookingIngredients[0].id;

