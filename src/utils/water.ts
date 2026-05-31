import { db } from "../database/db";

export async function addWater(
  amount: number,
) {
  const today = new Date()
    .toISOString()
    .split("T")[0];

  await db.waterLogs.add({
    date: today,
    amount,
  });

  window.dispatchEvent(
    new Event("water-added"),
  );
}

export async function getTodayWater() {
  const today = new Date()
    .toISOString()
    .split("T")[0];

  const logs = await db.waterLogs
    .where("date")
    .equals(today)
    .toArray();

  return logs.reduce(
    (sum, item) => sum + item.amount,
    0,
  );
}