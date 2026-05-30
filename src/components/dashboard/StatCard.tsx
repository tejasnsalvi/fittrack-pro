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

  return (
    <div className="stat-card">
      <h3>{title}</h3>

      <h2>
        {value}
        {unit}
      </h2>

      <small>
        {target - value}
        {unit} left
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