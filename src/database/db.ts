import Dexie from "dexie";
import type { Table } from "dexie";

import type { DailyFoodLog } from "../types/log";
import type { WaterLog } from "../types/water";

export class FitTrackDB extends Dexie {
  dailyFoodLogs!: Table<DailyFoodLog>;
  waterLogs!: Table<WaterLog>;

  constructor() {
    super("FitTrackPro");

    this.version(2).stores({
      dailyFoodLogs: "++id,date",
      waterLogs: "++id,date",
    });
  }
}

export const db = new FitTrackDB();