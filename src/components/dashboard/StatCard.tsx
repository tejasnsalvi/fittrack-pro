import { Flame, Zap, Droplets, Footprints } from "lucide-react";

type Props = {
  title: string;
  value: number;
  target: number;
  unit?: string;
};

export default function StatCard({
  title,
  value,
  target,
  unit,
}: Props) {
  const percentage = (value / target) * 100;

  const icon =
    title === "Calories" ? (
      <Flame size={18} />
    ) : title === "Protein" ? (
      <Zap size={18} />
    ) : title === "Water" ? (
      <Droplets size={18} />
    ) : (
      <Footprints size={18} />
    );

  return (
    <div className="stat-card">
      <div className="card-header">
        {icon}
        <span>{title}</span>
      </div>

      <h2>
        {value}
        {unit}
      </h2>

      <small>
        {value}/{target}
        {unit}
      </small>

      <div className="mini-progress">
        <div
          className="mini-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}