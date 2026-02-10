export const MEALTYPE = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  DINNER: 'dinner',
  SNACK: 'snack',
  OTHER: 'other'
} as const;

export type MealType = typeof MEALTYPE[keyof typeof MEALTYPE];

export type Meal = {
  id: number;
  type: MealType;
  time: Date;
  foods: Food[];
}

export type Food = {
  id: number;
  name: string;
}

export type TodaysMeals = {
  day_id: number;
  date: Date;
  meals: Meal[];
}