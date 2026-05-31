import Dexie from "dexie";
import type { Table } from "dexie";
import type { DailyFoodLog } from "../types/log";

export class FitTrackDB extends Dexie {
  dailyFoodLogs!: Table<DailyFoodLog>;

  constructor() {
    super("FitTrackPro");

    this.version(1).stores({
      dailyFoodLogs: "++id,date",
    });
  }
}

export const db = new FitTrackDB();