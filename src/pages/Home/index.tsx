import GoalCard from "../../components/dashboard/GoalCard";
import StatCard from "../../components/dashboard/StatCard";
import WeekTracker from "../../components/dashboard/WeekTracker";
import WeekStrip from "../../components/dashboard/WeekStrip";
import FloatingButton from "../../components/dashboard/FloatingButton";
import TodayFoodLog from "../../components/dashboard/TodayFoodLog";

import { useEffect, useState } from "react";

import { getTodayNutrition } from "../../utils/dashboard";
import { getTodayWater } from "../../utils/water";

export default function HomePage() {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [water, setWater] = useState(0);

  async function loadDashboard() {
    const nutrition =
      await getTodayNutrition();

    const waterTotal =
      await getTodayWater();

    setCalories(nutrition.calories);
    setProtein(nutrition.protein);
    setWater(waterTotal);
  }

  useEffect(() => {
    void loadDashboard();
  }, []);

  useEffect(() => {
    const refresh = () => {
      void loadDashboard();
    };

    window.addEventListener(
      "food-added",
      refresh,
    );

    window.addEventListener(
      "water-added",
      refresh,
    );

    return () => {
      window.removeEventListener(
        "food-added",
        refresh,
      );

      window.removeEventListener(
        "water-added",
        refresh,
      );
    };
  }, []);

  return (
    <div className="page">
      <GoalCard
        currentWeight={77}
        targetWeight={70}
      />

      <WeekStrip />

      <div className="stats-grid">
        <StatCard
          title="Calories"
          value={calories}
          target={1900}
        />

        <StatCard
          title="Protein"
          value={protein}
          target={70}
          unit="g"
        />

        <StatCard
          title="Water"
          value={water}
          target={3000}
          unit="ml"
        />

        <StatCard
          title="Steps"
          value={0}
          target={10000}
        />
      </div>

      <FloatingButton />

      <TodayFoodLog />

      <WeekTracker />
    </div>
  );
}