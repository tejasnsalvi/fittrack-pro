import Dexie from "dexie";

export class FitTrackDB extends Dexie {
  profile!: Dexie.Table<any, string>;
  foods!: Dexie.Table<any, string>;
  workouts!: Dexie.Table<any, string>;
  logs!: Dexie.Table<any, string>;

  constructor() {
    super("FitTrackPro");

    this.version(1).stores({
      profile: "id",
      foods: "id",
      workouts: "id",
      logs: "id,date",
    });
  }
}

export const db = new FitTrackDB();