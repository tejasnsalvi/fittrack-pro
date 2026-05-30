import GoalCard from "../../components/dashboard/GoalCard";
import StatCard from "../../components/dashboard/StatCard";
import WeekTracker from "../../components/dashboard/WeekTracker";

export default function HomePage() {
  return (
    <div className="page">
      <GoalCard
        currentWeight={77}
        targetWeight={70}
      />

      <div className="stats-grid">
        <StatCard
          title="Calories"
          value={0}
          target={1900}
        />

        <StatCard
          title="Protein"
          value={0}
          target={70}
          unit="g"
        />

        <StatCard
          title="Water"
          value={0}
          target={3000}
          unit="ml"
        />

        <StatCard
          title="Steps"
          value={0}
          target={10000}
        />
      </div>

      <WeekTracker />
    </div>
  );
}