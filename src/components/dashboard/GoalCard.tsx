

type Props = {
  currentWeight: number;
  targetWeight: number;
};

export default function GoalCard({
  currentWeight,
  targetWeight,
}: Props) {
  const total = currentWeight;
  const progress =
    ((currentWeight - targetWeight) / currentWeight) * 100;

  return (
    <div className="goal-card">
      <h2>{currentWeight} kg</h2>

      <p>
        {(currentWeight - targetWeight).toFixed(1)} kg from goal
      </p>

      <div className="goal-progress">
        <div
          className="goal-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="goal-labels">
        <span>{total}kg</span>
        <span>{targetWeight}kg</span>
      </div>
    </div>
  );
}