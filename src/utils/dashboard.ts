import { db } from "../database/db";

export async function getTodayNutrition() {
  const today = new Date().toISOString().split("T")[0];

  const logs = await db.dailyFoodLogs
    .where("date")
    .equals(today)
    .toArray();

  const calories = logs.reduce(
    (sum, item) => sum + item.calories,
    0
  );

  const protein = logs.reduce(
    (sum, item) => sum + item.protein,
    0
  );

  return {
    calories,
    protein,
  };
}