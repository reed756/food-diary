export const MEALTYPE = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  DINNER: 'dinner',
  SNACK: 'snack',
  OTHER: 'other'
} as const;

export type MealType = typeof MEALTYPE[keyof typeof MEALTYPE];