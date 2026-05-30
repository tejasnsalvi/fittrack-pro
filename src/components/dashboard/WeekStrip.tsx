const days = [
  { day: "MON", date: 25 },
  { day: "TUE", date: 26 },
  { day: "WED", date: 27 },
  { day: "THU", date: 28 },
  { day: "FRI", date: 29 },
  { day: "SAT", date: 30 },
  { day: "SUN", date: 31 },
];

export default function WeekStrip() {
  return (
    <div className="week-strip">
      {days.map((d) => (
        <div
          key={d.date}
          className={`day-pill ${
            d.date === 30 ? "active-day" : ""
          }`}
        >
          <span>{d.day}</span>
          <strong>{d.date}</strong>
        </div>
      ))}
    </div>
  );
}