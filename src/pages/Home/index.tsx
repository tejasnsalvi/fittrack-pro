import GoalCard from "../../components/dashboard/GoalCard";
import StatCard from "../../components/dashboard/StatCard";
import WeekTracker from "../../components/dashboard/WeekTracker";
import WeekStrip from "../../components/dashboard/WeekStrip";
import FloatingButton from "../../components/dashboard/FloatingButton";
import TodayFoodLog from "../../components/dashboard/TodayFoodLog";

import { useEffect, useState } from "react";

import { getTodayNutrition } from "../../utils/dashboard";

export default function HomePage() {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  async function loadDashboard() {
    const data = await getTodayNutrition();

    setCalories(data.calories);
    setProtein(data.protein);
  }

  useEffect(() => {
  void loadDashboard();
}, []);

  useEffect(() => {
    const refreshDashboard = () => {
      loadDashboard();
    };

    window.addEventListener("food-added", refreshDashboard);

    return () => {
      window.removeEventListener("food-added", refreshDashboard);
    };
  }, []);

  return (
    <div className="page">
      <GoalCard currentWeight={77} targetWeight={70} />

      <WeekStrip />

      <div className="stats-grid">
        <StatCard title="Calories" value={calories} target={1900} />

        <StatCard title="Protein" value={protein} target={70} unit="g" />

        <StatCard title="Water" value={0} target={3000} unit="ml" />

        <StatCard title="Steps" value={0} target={10000} />
      </div>

  

      <FloatingButton />
      <TodayFoodLog />
      <WeekTracker />
    </div>
  );
}
