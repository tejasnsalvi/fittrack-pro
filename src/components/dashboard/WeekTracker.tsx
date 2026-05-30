const groups = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Legs",
  "Abs",
];

export default function WeekTracker() {
  return (
    <div className="week-card">
      <h3>This Week</h3>

      <div className="muscle-grid">
        {groups.map((group) => (
          <div key={group} className="muscle-pill">
            {group}
          </div>
        ))}
      </div>
    </div>
  );
}