import { useEffect, useState } from "react";

import {
  getTodayFoodLogs,
  deleteFoodLog,
} from "../../utils/todayFood";

export default function TodayFoodLog() {
  const [logs, setLogs] = useState<any[]>([]);

  async function loadLogs() {
    const data = await getTodayFoodLogs();
    setLogs(data);
  }

  useEffect(() => {
    loadLogs();

    const refresh = () => loadLogs();

    window.addEventListener(
      "food-added",
      refresh,
    );

    return () =>
      window.removeEventListener(
        "food-added",
        refresh,
      );
  }, []);

  async function handleDelete(id: number) {
    await deleteFoodLog(id);

    loadLogs();

    window.dispatchEvent(
      new Event("food-added"),
    );
  }

  if (!logs.length) {
    return null;
  }

  return (
    <div
      style={{
        background: "#111",
        borderRadius: 20,
        padding: 16,
        marginTop: 16,
      }}
    >
      <h3>Today's Food</h3>

      {logs.map((log) => (
        <div
          key={log.id}
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            marginTop: 12,
          }}
        >
          <div>
            <div>
              {log.calories} cal
            </div>

            <div>
              {log.protein}g protein
            </div>
          </div>

          <button
            onClick={() =>
              handleDelete(log.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}