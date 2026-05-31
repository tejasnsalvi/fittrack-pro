import { db } from "../database/db";

export async function getTodayFoodLogs() {
  const today = new Date().toISOString().split("T")[0];

  return await db.dailyFoodLogs
    .where("date")
    .equals(today)
    .reverse()
    .toArray();
}

export async function deleteFoodLog(id: number) {
  await db.dailyFoodLogs.delete(id);
}