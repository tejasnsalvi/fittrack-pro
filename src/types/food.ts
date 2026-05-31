export interface FoodItem {
  id?: number;

  name: string;

  calories: number;

  protein: number;

  serving: string;

  builtIn?: boolean;
}

export interface FoodLog {
  id?: number;

  foodId: number;

  date: string;

  servings: number;

  calories: number;

  protein: number;
}

export interface DailyFoodLog {
  id?: number;
  date: string;
  foodId: number;
  quantity: number;
  calories: number;
  protein: number;
}